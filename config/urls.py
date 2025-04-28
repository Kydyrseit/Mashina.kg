from django.contrib import admin
from django.urls import path, include  # ← добавь include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app.urls')),  # ← подключаешь маршруты из твоего приложения
]
