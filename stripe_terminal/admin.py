from django.contrib import admin
from .models import Order
import stripe
from django.conf import settings
from django.http import HttpResponseRedirect, HttpResponse
from django.template.loader import render_to_string
from django.urls import path
import pdfkit

stripe.api_key = settings.STRIPE_API_KEY

pdfkit_config = pdfkit.configuration(wkhtmltopdf='/usr/bin/wkhtmltopdf')

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'customer_name', 'total', 'status', 'created_at', 'updated_at']
    change_list_template = "admin/stripe_terminal/order/change_list.html"
    change_form_template = "admin/stripe_terminal/order/change_form.html"

    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path('<int:order_id>/pay/', self.admin_site.admin_view(self.pay_by_terminal), name='order-pay'),
            path('<int:order_id>/print-receipt/', self.admin_site.admin_view(self.print_receipt), name='order-print-receipt'),
            path('<int:order_id>/reprint-receipt/', self.admin_site.admin_view(self.reprint_receipt), name='order-reprint-receipt'),
            path('<int:order_id>/cancel/', self.admin_site.admin_view(self.cancel_order), name='order-cancel'),
            path('<int:order_id>/refund/', self.admin_site.admin_view(self.refund_order), name='order-refund'),
            path('<int:order_id>/view-in-stripe/', self.admin_site.admin_view(self.view_in_stripe_dashboard), name='order-view-in-stripe'),
        ]
        return custom_urls + urls

    def pay_by_terminal(self, request, order_id):
        order = self.get_object(request, order_id)
        
        intent = stripe.PaymentIntent.create(
            amount=int(order.total * 100),
            currency='usd',
            payment_method_types=['card'],
            description=f'Order #{order.id} - {order.customer_name}',
            metadata={'order_id': str(order.id)},
            receipt_email=order.email,
            shipping={
            'name': order.customer_name,
            'address': {
                'state': order.state,
                'country': order.country
            },
        }
        )

        try:
            test_payment_method = 'pm_card_visa'  # Stripe test PaymentMethod ID

            intent = stripe.PaymentIntent.confirm(
                intent['id'],
                payment_method=test_payment_method
            )

            if intent['status'] == 'requires_capture':
                intent = stripe.PaymentIntent.capture(intent['id'])

            if intent['status'] == 'succeeded':
                order.status = 'paid'
            else:
                order.status = 'payment_failed'
            
            order.payment_intent_id = intent['id']
            order.save()
            self.message_user(request, f"Payment for order {order_id} processed.")
        except stripe.error.InvalidRequestError as e:
            self.message_user(request, f"Error processing payment for order {order_id}: {str(e)}", level='error')
        
        return HttpResponseRedirect("../")

    def print_receipt(self, request, order_id):
        order = self.get_object(request, order_id)
        receipt_html = render_to_string('admin/stripe_terminal/order/receipt.html', {'order': order})
        pdf = pdfkit.from_string(receipt_html, False, configuration=pdfkit_config)
        response = HttpResponse(pdf, content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="receipt.pdf"'
        self.message_user(request, f"Receipt printed for order {order_id}.")
        return response

    def reprint_receipt(self, request, order_id):
        order = self.get_object(request, order_id)
        receipt_html = render_to_string('admin/stripe_terminal/order/receipt.html', {'order': order})
        pdf = pdfkit.from_string(receipt_html, False, configuration=pdfkit_config)
        response = HttpResponse(pdf, content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="receipt.pdf"'
        self.message_user(request, f"Receipt reprinted for order {order_id}.")
        return response

    def cancel_order(self, request, order_id):
        order = self.get_object(request, order_id)
        order.status = 'cancelled'
        order.save()
        self.message_user(request, f"Order {order_id} cancelled.")
        return HttpResponseRedirect("../")

    def refund_order(self, request, order_id):
        order = self.get_object(request, order_id)
        try:
            payment_intent = stripe.PaymentIntent.retrieve(order.payment_intent_id)
            
            if payment_intent.status in ['succeeded', 'requires_capture']:
                refund = stripe.Refund.create(
                    payment_intent=payment_intent.id,
                    amount=payment_intent.amount  # Refund the full amount in cents
                )
                order.status = 'refunded'
                order.save()
                self.message_user(request, f"Order {order_id} refunded.")
            else:
                self.message_user(request, f"PaymentIntent for order {order_id} has not been successfully captured or charged.", level='error')
        except stripe.error.InvalidRequestError as e:
            self.message_user(request, f"Error processing refund for order {order_id}: {str(e)}", level='error')
        return HttpResponseRedirect("../")
    
    def view_in_stripe_dashboard(self, request, order_id):
        order = self.get_object(request, order_id)
        return HttpResponseRedirect(f"{settings.STRIPE_PAYMENT_URL}/{order.payment_intent_id}")

    def get_object(self, request, object_id, from_field=None):
        return self.get_queryset(request).get(pk=object_id)
