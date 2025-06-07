from app.models.car import Car

class CarRepository:
    @staticmethod
    def get_all_cars():
        return Car.objects.all()
