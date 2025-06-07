import os
from celery import Celery

# Устанавливаем модуль настроек Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mashina_kg.settings")

app = Celery("mashina_kg")

# Загружаем настройки из Django с префиксом CELERY_
app.config_from_object("django.conf:settings", namespace="CELERY")

# Автоматически находим задачи в приложениях Django
app.autodiscover_tasks()
