# app/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from app.views.car_views import CarViewSet
from app.views import add_car, AddCarView

from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# Регистрируем роутер для API
router = DefaultRouter()
router.register(r'cars', CarViewSet, basename='car')

urlpatterns = [
    # Основные маршруты для сайта
    path('add_car/', add_car, name='add_car'),  # Для сайта
    path('cars/', views.car_list, name='car_list'),
    path('cars/<int:pk>/', views.car_detail, name='car_detail'),
    path('cars/<int:pk>/edit/', views.edit_car, name='edit_car'),
    path('cars/<int:pk>/delete/', views.delete_car, name='delete_car'),

    # Роуты для API
    path('api/add_car/', AddCarView.as_view(), name='api_add_car'),  # Для API
    path('api/', include(router.urls)),

    # Роуты для авторизации с использованием JWT
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

# Обработка медиафайлов (для локальной разработки)
from django.conf import settings
from django.conf.urls.static import static

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
