import stripe
import pdfkit
from django.conf import settings
from django.template.loader import render_to_string
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.http import HttpResponse
from stripe_terminal.models import Order
from stripe_terminal.serializers import OrderSerializer
from rest_framework.views import APIView
import requests
from django.conf import settings

stripe.api_key = settings.STRIPE_API_KEY
pdfkit_config = pdfkit.configuration(wkhtmltopdf='/usr/bin/wkhtmltopdf')
SALEOR_API_URL = settings.SALEOR_API_URL
API_TOKEN = settings.API_TOKEN


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    @action(detail=True, methods=['post'])
    def create_payment_intent(self, request, pk=None):
        order = self.get_object()
        intent = stripe.PaymentIntent.create(
            amount=int(order.total * 100),
            currency='usd',
            payment_method_types=['card'],
            description=f'Order #{order.id} - {order.customer_name}',
            metadata={'order_id': str(order.id)},
            receipt_email=order.email if order.email else 'default@example.com',
            shipping={
                'name': order.customer_name,
                'address': {
                    'state': order.state if order.state else 'CA',
                    'country': order.country if order.country else 'US'
                },
            }
        )
        order.payment_intent_id = intent['id']
        order.save()
        return Response({'client_secret': intent.client_secret})

    @action(detail=True, methods=['post'])
    def print_receipt(self, request, pk=None):
        order = self.get_object()
        receipt_html = render_to_string('admin/stripe_terminal/order/receipt.html', {'order': order})
        pdf = pdfkit.from_string(receipt_html, False, configuration=pdfkit_config)
        response = HttpResponse(pdf, content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename="receipt_{order.id}.pdf"'
        return Response({'status': 'Receipt printed'}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'])
    def reprint_receipt(self, request, pk=None):
        order = self.get_object()
        receipt_html = render_to_string('admin/stripe_terminal/order/receipt.html', {'order': order})
        pdf = pdfkit.from_string(receipt_html, False, configuration=pdfkit_config)
        response = HttpResponse(pdf, content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename="receipt_{order.id}.pdf"'
        return Response({'status': 'Receipt reprinted'}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'])
    def cancel_order(self, request, pk=None):
        order = self.get_object()
        order.status = 'cancelled'
        order.save()
        return Response({'status': 'Order cancelled'}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'])
    def refund_order(self, request, pk=None):
        order = self.get_object()
        try:
            payment_intent = stripe.PaymentIntent.retrieve(order.payment_intent_id)
            if payment_intent.status in ['succeeded', 'requires_capture']:
                refund = stripe.Refund.create(
                    payment_intent=payment_intent.id,
                    amount=payment_intent.amount
                )
                order.status = 'refunded'
                order.save()
                return Response({'status': 'Order refunded', 'refund': refund}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'PaymentIntent for this order has not been successfully captured or charged.'}, status=status.HTTP_400_BAD_REQUEST)
        except stripe.error.InvalidRequestError as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['get'])
    def view_in_stripe_dashboard(self, request, pk=None):
        order = self.get_object()
        dashboard_url = f"{settings.STRIPE_PAYMENT_URL}/{order.payment_intent_id}"
        return Response({'url': dashboard_url}, status=status.HTTP_200_OK)
    

class CreateOrderView(APIView):
    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            input_data = {
                "input": serializer.validated_data
            }
            headers = {
                "Authorization": f"Bearer {API_TOKEN}",
                "Content-Type": "application/json"
            }
            create_order_mutation = """
            mutation createOrder($input: DraftOrderCreateInput!) {
              draftOrderCreate(input: $input) {
                order {
                  id
                  number
                  status
                  total {
                    gross {
                      amount
                      currency
                    }
                  }
                  lines {
                    id
                    productName
                    quantity
                  }
                }
                errors {
                  field
                  message
                }
              }
            }
            """
            response = requests.post(SALEOR_API_URL, json={"query": create_order_mutation, "variables": input_data}, headers=headers)
            if response.status_code == 200:
                return Response(response.json(), status=status.HTTP_201_CREATED)
            else:
                return Response(response.json(), status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
