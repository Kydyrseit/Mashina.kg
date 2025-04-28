from django.db import models

class Car(models.Model):
    brand = models.CharField(max_length=50)  # марка
    model = models.CharField(max_length=50)  # модель
    year = models.PositiveIntegerField()     # год выпуска
    price = models.DecimalField(max_digits=10, decimal_places=2)  # цена
    description = models.TextField(blank=True, null=True)         # описание
    image = models.ImageField(upload_to='cars/', blank=True, null=True)  # изображение машины
    created_at = models.DateTimeField(auto_now_add=True)          # когда добавили
    updated_at = models.DateTimeField(auto_now=True)              # последнее обновление

    def __str__(self):
        return f"{self.brand} {self.model} ({self.year})"

    class Meta:
        ordering = ['-created_at']  # сортировка по дате добавления
