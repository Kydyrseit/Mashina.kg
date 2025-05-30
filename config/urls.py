from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView, RedirectView
from django.conf import settings
from django.conf.urls.static import static

from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

# Импортируем вьюшки регистрации и логина из вашего приложения
from app.views import register_page, login_page

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
    # Административный раздел
    path('admin/', admin.site.urls),

    # Главная страница (home.html)
    path('', TemplateView.as_view(template_name='home.html'), name='home'),

    # Подключаем маршруты приложения (например, для API или сайта)
    path('api/', include('app.urls')),

    # Страница регистрации (заменён placeholder your_app.urls)
    path('register/', register_page, name='register_page'),

    # Страница логина
    path('login/', login_page, name='login_page'),

    # Роут для favicon (редирект на статику)
    path('favicon.ico', RedirectView.as_view(url=settings.STATIC_URL + 'favicon.ico')),

    # Документация API (Swagger и Redoc)
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
