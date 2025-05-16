# # app/tasks.py
# from celery import shared_task
# import time
#
# @shared_task
# def send_otp_task(phone, otp_code):
#     # Симуляция задержки отправки, как если бы выполнялась реальная отправка (например, через SMS или Telegram)
#     time.sleep(2)  # имитация процесса отправки
#     # Здесь можно интегрировать вызов внешнего сервиса для отправки OTP
#     print(f"[Celery] Отправка OTP для {phone}: {otp_code}")
#     return True
