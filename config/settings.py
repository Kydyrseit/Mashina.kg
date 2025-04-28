import os
from pathlib import Path
from datetime import timedelta


BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'your-secret-key'  # можешь сгенерировать сам или оставить так

DEBUG = True

ALLOWED_HOSTS = []

# Приложения
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',  # Оставляем только одну запись
    'rest_framework_simplejwt',
    'drf_yasg',
    'djoser',

    'app',  # ← добавь это, чтобы Django знал о твоем приложении
]


MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],  # Указываем директорию для шаблонов
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

WSGI_APPLICATION = 'config.wsgi.application'

# Настройки базы данных
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',  # Используется SQLite
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Если ты решишь использовать PostgreSQL, раскомментируй и настрой:
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'mashina_db',
#         'USER': 'postgres',
#         'PASSWORD': 'your_password',  # 👉 замени на реальный пароль
#         'HOST': 'localhost',
#         'PORT': '5432',
#     }
# }

AUTH_PASSWORD_VALIDATORS = [
    # Можно добавить валидаторы паролей, если это нужно
    # 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    # 'django.contrib.auth.password_validation.MinimumLengthValidator',
    # 'django.contrib.auth.password_validation.CommonPasswordValidator',
    # 'django.contrib.auth.password_validation.NumericPasswordValidator',
]

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# Настройки статики
STATIC_URL = '/static/'  # URL для доступа к статичным файлам
STATICFILES_DIRS = [
    BASE_DIR / 'static',  # Путь для статичных файлов в режиме разработки
]

# В продакшн-режиме, если потребуется:
# STATIC_ROOT = BASE_DIR / 'staticfiles'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',  # По умолчанию доступ только авторизованным
    )
}


SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),  # Жизнь токена доступа
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),     # Жизнь токена обновления
    'AUTH_HEADER_TYPES': ('Bearer',),
}