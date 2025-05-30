from django.urls import path, include
from django.views.generic import TemplateView, RedirectView
from django.conf import settings
from django.conf.urls.static import static

# Импортируем вьюшки для страниц (frontend)
from .views import (
    register_page,
    login_page,
    home,  # Если у вас определена функция home
    car_list,
    car_detail,
    edit_car,
    delete_car,
    LoginView,
    UserView,
    RegisterView,
    api_add_car_create,  # API для создания автомобиля (функция)
)

# Импортируем вьюшки из папки app/api_views
from app.api_views.car_views import CarViewSet, AddCarView
from app.api_views.otp_views import RequestOTPView, VerifyOTPView

# Импорт для JWT и Swagger
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.permissions import AllowAny

# Настройка Swagger
schema_view = get_schema_view(
    openapi.Info(
        title="Mashina.kg API",
        default_version='v1',
        description="Документация API для авторизации",
    ),
    public=True,
    permission_classes=[AllowAny],
)

# Роутер для API (используем CarViewSet для работы с автомобилями)
router = DefaultRouter()
router.register(r'cars', CarViewSet, basename='car')

urlpatterns = [
    # Фронтенд страницы
    path('', TemplateView.as_view(template_name='home.html'), name='home'),
    path('register/', register_page, name='register_page'),
    path('login/', login_page, name='login_page'),

    # Страницы для работы с автомобилями (frontend)
    path('cars/', car_list, name='car_list'),
    path('cars/<int:pk>/', car_detail, name='car_detail'),
    path('cars/<int:pk>/edit/', edit_car, name='edit_car'),
    path('cars/<int:pk>/delete/', delete_car, name='delete_car'),
    path('add_car/', api_add_car_create, name='api_add_car_create'),

    # API эндпоинты для аутентификации и регистрации
    path('api/login/', LoginView.as_view(), name='api-login'),
    path('api/user/', UserView.as_view(), name='api-user'),
    path('api/register/', RegisterView.as_view(), name='api-register'),
    path('api/add_car/', api_add_car_create, name='api_add_car_create'),
    path('api/add_car-view/', AddCarView.as_view(), name='add_car'),

    # Маршруты для OTP
    path('otp/request/', RequestOTPView.as_view(), name='otp_request'),
    path('otp/verify/', VerifyOTPView.as_view(), name='otp_verify'),

    # Роутер API для CarViewSet
    path('api/', include(router.urls)),

    # Эндпоинты для JWT
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Документация Swagger и Redoc для API (если требуется)
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

    # Если есть favicon (редирект на статику)
    path('favicon.ico', RedirectView.as_view(url=settings.STATIC_URL + 'favicon.ico')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
