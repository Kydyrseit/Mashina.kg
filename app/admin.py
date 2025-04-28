from django.contrib import admin
from .models import Car

@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ('brand', 'model', 'year', 'price', 'created_at', 'updated_at')
    search_fields = ('brand', 'model')
    list_filter = ('year',)
