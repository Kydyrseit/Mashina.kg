# app/api_views/car_views.py
from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import CarSerializer
from rest_framework.decorators import api_view
from rest_framework import serializers
from app.models import Car




# Это ваш уже существующий ViewSet
class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

# Функция для добавления нового автомобиля
from rest_framework.views import APIView

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'


@api_view(['POST'])
def add_car(request):
    serializer = CarSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AddCarView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = CarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
