# # config/celery.py
# import os
# from celery import Celery
#
# # Устанавливаем модуль настроек Django
# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
#
# app = Celery('config')
#
# # Настраиваем Celery на основе настроек Django, используя пространство имён CELERY
# app.config_from_object('django.conf:settings', namespace='CELERY')
#
# # Автоматически обнаруживаем задачи в приложениях Django
# app.autodiscover_tasks()
