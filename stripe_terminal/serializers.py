from rest_framework import serializers
from stripe_terminal.models import Order


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class OrderSerializer(serializers.Serializer):
    userEmail = serializers.EmailField()
    shippingAddress = serializers.DictField()
    billingAddress = serializers.DictField()
    lines = serializers.ListField()
    channel = serializers.CharField()
