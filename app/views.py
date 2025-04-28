from django.core.paginator import Paginator
from django.shortcuts import render, redirect, get_object_or_404
from .forms import CarForm
from .models import Car
from django.http import HttpResponse


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
    """Страница с списком автомобилей с возможностью фильтрации и пагинации"""
    cars = Car.objects.all()

    # Фильтрация
    brand = request.GET.get('brand')
    year = request.GET.get('year')
    max_price = request.GET.get('max_price')
    sort = request.GET.get('sort')

    if brand:
        cars = cars.filter(brand__icontains=brand)
    if year:
        cars = cars.filter(year=year)
    if max_price:
        cars = cars.filter(price__lte=max_price)
    if sort:
        cars = cars.order_by(sort)

    # Пагинация: показываем по 6 машин на странице
    paginator = Paginator(cars, 6)  # 6 машин на страницу
    page_number = request.GET.get('page')  # Номер текущей страницы
    page_obj = paginator.get_page(page_number)

    return render(request, 'car_list.html', {'page_obj': page_obj})


def car_detail(request, pk):
    """Детальная информация об автомобиле"""
    car = get_object_or_404(Car, pk=pk)
    return render(request, 'car_detail.html', {'car': car})


def edit_car(request, pk):
    """Редактирование информации об автомобиле"""
    car = get_object_or_404(Car, pk=pk)
    if request.method == 'POST':
        form = CarForm(request.POST, request.FILES, instance=car)  # Учтем изображения
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
