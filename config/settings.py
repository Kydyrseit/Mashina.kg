from pathlib import Path
from datetime import timedelta
import os
from dotenv import load_dotenv



# Загружаем переменные из файла .env, который находится в той же директории, что и manage.py
load_dotenv()

# Теперь переменные окружения доступны через os.environ
TELEGRAM_BOT_TOKEN = os.environ.get('TELEGRAM_BOT_TOKEN')

# # Временно для проверки, что переменная загружена:
# print("TELEGRAM_BOT_TOKEN =", TELEGRAM_BOT_TOKEN)

# Корневая директория проекта
BASE_DIR = Path(__file__).resolve().parent.parent

# Секретный ключ (для разработки можно оставить так; для продакшн-окружения обязательно замените)
SECRET_KEY = 'your-secret-key'

# Режим отладки включён (для разработки)
DEBUG = True

ALLOWED_HOSTS = []

# Установленные приложения
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    'rest_framework_simplejwt',
    'drf_yasg',
    'djoser',

    'app',  # Ваше приложение
]

# Мидлваре
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# URL-конфигурация
ROOT_URLCONF = 'config.urls'

# Шаблоны
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'app' / 'templates'],  # Путь к директории шаблонов
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# WSGI-приложение
WSGI_APPLICATION = 'config.wsgi.application'

# Настройки базы данных (используется SQLite)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Альтернативный вариант для использования PostgreSQL:
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'mashina_db',
#         'USER': 'postgres',
#         'PASSWORD': 'your_password',  # замените на реальный пароль
#         'HOST': 'localhost',
#         'PORT': '5432',
#     }
# }

# Валидация паролей (можно раскомментировать нужные проверки)
AUTH_PASSWORD_VALIDATORS = [
    # 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    # 'django.contrib.auth.password_validation.MinimumLengthValidator',
    # 'django.contrib.auth.password_validation.CommonPasswordValidator',
    # 'django.contrib.auth.password_validation.NumericPasswordValidator',
]

# Локализация
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# Статические файлы
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    BASE_DIR / 'static',  # Убедитесь, что эта папка существует или создайте её
]
# Для продакшена можно определить STATIC_ROOT, например:
# STATIC_ROOT = BASE_DIR / 'staticfiles'

# Медиафайлы
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# Автоматически созданное поле для моделей
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Настройка REST Framework
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'EXCEPTION_HANDLER': 'rest_framework.views.exception_handler',  # уже добавлено ранее
    'VIEW_NAME_FUNCTION': 'rest_framework.views.get_view_name',       # уже добавлено ранее
    'VIEW_DESCRIPTION_FUNCTION': 'rest_framework.views.get_view_description',  # добавляем эту строку
}


# Настройки JWT
SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'AUTH_HEADER_TYPES': ('Bearer',),
}

# Конфигурация логирования (вывод в консоль)
LOGGING_CONFIG = None
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
        },
    },
    'root': {
        'handlers': ['console'],
        'level': 'DEBUG',
    },
}

# Переопределяем глобальные настройки Django, чтобы не использовать несуществующие пути
CSRF_FAILURE_VIEW = 'django.views.csrf.csrf_failure'
DEFAULT_EXCEPTION_REPORTER = 'django.views.debug.ExceptionReporter'
DEFAULT_EXCEPTION_REPORTER_FILTER = 'django.views.debug.SafeExceptionReporterFilter'


REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.TokenAuthentication',
    ),
}


REST_FRAMEWORK['DEFAULT_AUTHENTICATION_CLASSES'] += (
    'rest_framework_simplejwt.authentication.JWTAuthentication',
)





# CELERY_BROKER_URL = 'redis://localhost:6379/0'
# CELERY_RESULT_BACKEND = 'redis://localhost:6379/0'
CELERY_BROKER_URL = 'redis://127.0.0.1:6379/0'
CELERY_RESULT_BACKEND = 'redis://127.0.0.1:6379/0'
CELERY_ACCEPT_CONTENT = ['json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'


