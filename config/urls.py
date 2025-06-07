from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView
from django.conf import settings
from django.conf.urls.static import static

from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="Mashina.kg API",
        default_version='v1',
        description="Документация API для проекта Mashina.kg",
        contact=openapi.Contact(email="support@mashina.kg"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),

    # Если у вас есть favicon, можно добавить редирект:
    path('favicon.ico', RedirectView.as_view(url=settings.STATIC_URL + 'favicon.ico')),

    # Подключаем маршруты приложения
    path('', include('app.urls')),

    # Маршруты для документации
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

# Раздача медиафайлов в режиме разработки
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
