import random
from django.core.cache import cache
from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, serializers
from drf_yasg.utils import swagger_auto_schema
from rest_framework_simplejwt.tokens import RefreshToken
from app.tasks import send_otp_task  # Импортируем новую задачу
from app.tasks import send_telegram_otp

User = get_user_model()

class OTPRequestSerializer(serializers.Serializer):
    phone = serializers.CharField(required=True, help_text="Номер телефона пользователя")

class OTPVerifySerializer(serializers.Serializer):
    phone = serializers.CharField(required=True, help_text="Номер телефона пользователя")
    otp = serializers.CharField(required=True, help_text="Полученный OTP-код")


class RequestOTPView(APIView):
    permission_classes = []  # Доступ без авторизации

    @swagger_auto_schema(
        request_body=OTPRequestSerializer,
        responses={200: "OTP sent successfully", 400: "Bad Request"}
    )
    def post(self, request, *args, **kwargs):
        serializer = OTPRequestSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        phone = serializer.validated_data["phone"]

        # Генерируем 6-значный OTP-код
        otp_code = random.randint(100000, 999999)
        # Сохраняем OTP в кэше с ключом "otp_<phone>" на 5 минут (300 секунд)
        cache.set(f"otp_{phone}", otp_code, timeout=300)

        # Запускаем фоновую задачу отправки OTP через Celery
        send_otp_task.delay(phone, otp_code)

        return Response({"detail": "OTP sent successfully."}, status=status.HTTP_200_OK)


class VerifyOTPView(APIView):
    permission_classes = []  # Доступ без авторизации

    @swagger_auto_schema(
        request_body=OTPVerifySerializer,
        responses={200: "JWT tokens", 400: "Bad Request"}
    )
    def post(self, request, *args, **kwargs):
        serializer = OTPVerifySerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        phone = serializer.validated_data["phone"]
        otp_input = serializer.validated_data["otp"]

        # Получаем сохранённый OTP из кэша
        otp_stored = cache.get(f"otp_{phone}")
        if not otp_stored:
            return Response({"error": "OTP expired or not found."}, status=status.HTTP_400_BAD_REQUEST)

        if str(otp_stored) != str(otp_input):
            return Response({"error": "Incorrect OTP code."}, status=status.HTTP_400_BAD_REQUEST)

        # OTP подтверждён – получаем или создаём пользователя с указанным номером телефона
        user, created = User.objects.get_or_create(username=phone, defaults={"is_active": True})

        # Генерируем JWT-токены для пользователя
        refresh = RefreshToken.for_user(user)
        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token)
        }, status=status.HTTP_200_OK)

    class RequestOTPView(APIView):
        permission_classes = []  # Доступ без авторизации

        @swagger_auto_schema(
            request_body=OTPRequestSerializer,
            responses={200: "OTP sent successfully", 400: "Bad Request"}
        )
        def post(self, request, *args, **kwargs):
            serializer = OTPRequestSerializer(data=request.data)
            if not serializer.is_valid():
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            phone = serializer.validated_data["phone"]

            # Генерируем OTP
            otp_code = random.randint(100000, 999999)
            cache.set(f"otp_{phone}", otp_code, timeout=300)

            # Отправляем OTP асинхронно через Celery (SMS или другой канал)
            send_otp_task.delay(phone, otp_code)

            # Пример: также отправляем OTP через Telegram, если известен chat_id
            # Здесь chat_id можно получить из настроек пользователя или передать в запросе
            # Ниже используется тестовый chat_id = 123456789 (замените на настоящий)
            test_chat_id = 123456789
            send_telegram_otp.delay(test_chat_id, otp_code)

            return Response({"detail": "OTP sent successfully."}, status=status.HTTP_200_OK)



