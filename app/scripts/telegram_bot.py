# telegram_bot.py
import logging
from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackContext
import os

# Читаем токен бота из переменной окружения
TELEGRAM_BOT_TOKEN = os.environ.get('TELEGRAM_BOT_TOKEN')

logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO
)
logger = logging.getLogger(__name__)

def start(update: Update, context: CallbackContext):
    update.message.reply_text("Привет! Я бот для отправки OTP. Используйте команду /otp чтобы протестировать отправку.")

def otp(update: Update, context: CallbackContext):
    # В реальности OTP отправляется через Celery. Для теста можно вывести сообщение.
    update.message.reply_text("OTP будет отправлен через Celery.")

def main():
    updater = Updater(TELEGRAM_BOT_TOKEN)
    dispatcher = updater.dispatcher

    dispatcher.add_handler(CommandHandler("start", start))
    dispatcher.add_handler(CommandHandler("otp", otp))

    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
