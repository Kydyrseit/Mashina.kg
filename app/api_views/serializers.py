# app/serializers.py
from rest_framework import serializers
from rest_framework import serializers
from app.models import Car


class RegisterSerializer(serializers.Serializer):
    phone = serializers.CharField(max_length=20)
    # Можно добавить дополнительные поля, если требуется, например, имя, пароль и т.п.
class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'
