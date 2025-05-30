# config/swagger_settings.py

SWAGGER_SETTINGS = {
    'SECURITY_DEFINITIONS': {
        'Bearer': {
            'type': 'apiKey',
            'in': 'header',
            'name': 'Authorization',
            'description': "Введите JWT токен в формате: Bearer <token>",
        }
    },
    # Другие настройки, если нужны
}
