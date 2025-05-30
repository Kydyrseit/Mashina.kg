
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def api_cars_list(request):
    # Здесь ваша логика получения списка автомобилей
    cars_data = [
        {"id": 1, "model": "Car A", "year": 2020},
        {"id": 2, "model": "Car B", "year": 2021},
    ]
    return Response(cars_data)
