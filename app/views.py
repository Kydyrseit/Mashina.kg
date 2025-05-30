from django.core.paginator import Paginator
from django.shortcuts import render, redirect, get_object_or_404
from .forms import CarForm
from .models import Car
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from drf_yasg.utils import swagger_auto_schema
from .api_views.serializers import RegisterSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Обработчики JWT логина, регистрации и пользовательских данных.

class LoginView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

class UserView(APIView):
    def get(self, request):
        # Пример: вернуть данные аутентифицированного пользователя.
        return Response({"user": "User details here"})

def home(request):
    """Главная страница"""
    return render(request, 'home.html')

def add_car(request):
    """Страница для добавления нового автомобиля"""
    if request.method == 'POST':
        form = CarForm(request.POST, request.FILES)  # Учтем загрузку изображений
        if form.is_valid():
            form.save()
            return redirect('car_list')  # После сохранения — на список машин
    else:
        form = CarForm()
    return render(request, 'add_car.html', {'form': form})

def car_list(request):
    """Вывод списка машин с фильтрацией и пагинацией"""
    print("Запрос получен в функции car_list")
    cars = Car.objects.all()
    # Получение фильтров из GET-параметров
    brand = request.GET.get('brand')
    year = request.GET.get('year')
    max_price = request.GET.get('max_price')
    sort = request.GET.get('sort')

    print("Приняты параметры фильтрации:",
          f"brand={brand}, year={year}, max_price={max_price}, sort={sort}")

    if brand:
        cars = cars.filter(brand__icontains=brand)
    if year:
        cars = cars.filter(year=year)
    if max_price:
        cars = cars.filter(price__lte=max_price)
    if sort:
        cars = cars.order_by(sort)

    print("Количество найденных автомобилей:", cars.count())
    # Пагинация: показываем по 6 машин на странице
    paginator = Paginator(cars, 6)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    print("Отправка страницы:", page_number)
    return render(request, 'app/car_list.html', {'page_obj': page_obj})

def car_detail(request, pk):
    """Детальная информация об автомобиле"""
    car = get_object_or_404(Car, pk=pk)
    return render(request, 'car_detail.html', {'car': car})

def edit_car(request, pk):
    """Редактирование информации об автомобиле"""
    car = get_object_or_404(Car, pk=pk)
    if request.method == 'POST':
        form = CarForm(request.POST, request.FILES, instance=car)
        if form.is_valid():
            form.save()
            return redirect('car_detail', pk=car.pk)
    else:
        form = CarForm(instance=car)
    return render(request, 'edit_car.html', {'form': form})

def delete_car(request, pk):
    """Удаление автомобиля"""
    car = get_object_or_404(Car, pk=pk)
    if request.method == 'POST':
        car.delete()
        return redirect('car_list')
    return render(request, 'delete_car.html', {'car': car})

class RegisterView(APIView):
    @swagger_auto_schema(
        request_body=RegisterSerializer,
        responses={201: "User registered and OTP sent", 400: "Bad Request"}
    )
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            phone = serializer.validated_data['phone']
            # Здесь логика создания пользователя и генерации OTP.
            # Например:
            # user = create_user_with_phone(phone)
            # otp_code = generate_otp_for_phone(phone)
            # send_otp_via_sms(phone, otp_code)
            return Response({"message": "User registered and OTP sent"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def api_add_car_create(request):
    """API для создания нового автомобиля"""
    data = request.data
    # Реализуйте логику создания объекта модели автомобиля.
    return Response({"message": "Автомобиль добавлен"}, status=status.HTTP_201_CREATED)

def register_page(request):
    """Страница регистрации (для рендеринга шаблона)"""
    return render(request, 'register.html')

def login_page(request):
    """Страница входа (для рендеринга шаблона)"""
    return render(request, 'login.html')
