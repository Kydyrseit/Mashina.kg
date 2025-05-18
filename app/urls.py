from django.urls import path, include
from django.views.generic import TemplateView, RedirectView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from app.views import car_list, car_detail, edit_car, delete_car
from app.api_views.car_views import CarViewSet, AddCarView
from app.api_views.otp_views import RequestOTPView, VerifyOTPView

# Регистрируем роутер для API
router = DefaultRouter()
router.register(r'cars', CarViewSet, basename='car')

urlpatterns = [
    # Маршрут для favicon (редирект на статику)
    path('favicon.ico', RedirectView.as_view(url=settings.STATIC_URL + 'favicon.ico')),

    # Главная страница (отображается home.html)
    path('', TemplateView.as_view(template_name='home.html'), name='home'),

    # Основные маршруты для сайта
    path('api/add_car/', AddCarView.as_view(), name='add_car'),
    path('cars/', car_list, name='car_list'),
    path('cars/<int:pk>/', car_detail, name='car_detail'),
    path('cars/<int:pk>/edit/', edit_car, name='edit_car'),
    path('cars/<int:pk>/delete/', delete_car, name='delete_car'),

    # Маршруты для OTP
    path('otp/request/', RequestOTPView.as_view(), name='otp_request'),
    path('otp/verify/', VerifyOTPView.as_view(), name='otp_verify'),

    # Роуты для API
    path('api/', include(router.urls)),

    # Роуты для авторизации с использованием JWT
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
