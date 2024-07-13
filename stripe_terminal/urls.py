from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OrderViewSet

router = DefaultRouter()
router.register(r'orders', OrderViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('orders/<int:pk>/pay/', OrderViewSet.as_view({'post': 'create_payment_intent'}), name='order-pay'),
    path('orders/<int:pk>/print-receipt/', OrderViewSet.as_view({'post': 'print_receipt'}), name='order-print-receipt'),
    path('orders/<int:pk>/reprint-receipt/', OrderViewSet.as_view({'post': 'reprint_receipt'}), name='order-reprint-receipt'),
    path('orders/<int:pk>/cancel/', OrderViewSet.as_view({'post': 'cancel_order'}), name='order-cancel'),
    path('orders/<int:pk>/refund/', OrderViewSet.as_view({'post': 'refund_order'}), name='order-refund'),
    path('orders/<int:pk>/view-in-stripe/', OrderViewSet.as_view({'get': 'view_in_stripe_dashboard'}), name='order-view-in-stripe'),
]
