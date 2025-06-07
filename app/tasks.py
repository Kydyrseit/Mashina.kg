# app/tasks.py
import time
from celery import shared_task
import telegram
import os


TELEGRAM_BOT_TOKEN = os.environ.get('TELEGRAM_BOT_TOKEN')  # храните токен в переменной окружения

@shared_task
def send_telegram_otp(chat_id, otp_code):
    """
    Отправляет OTP-сообщение в Telegram-чат с заданным chat_id.
    """
    try:
        bot = telegram.Bot(token=TELEGRAM_BOT_TOKEN)
        message = f"Ваш OTP-код: {otp_code}"
        bot.send_message(chat_id=chat_id, text=message)
        return True
    except Exception as e:
        # Здесь можно добавить логирование ошибки
        print(f"Ошибка отправки сообщения: {e}")
        return False

@shared_task
def send_otp_task(phone, otp_code):
    # Симуляция задержки отправки, как если бы выполнялась реальная отправка (например, через SMS или Telegram)
    time.sleep(2)  # имитация процесса отправки
    # Здесь можно интегрировать вызов внешнего сервиса для отправки OTP
    print(f"[Celery] Отправка OTP для {phone}: {otp_code}")
    return True
