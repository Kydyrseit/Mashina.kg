from app.repositories.car_repository import CarRepository

class CarService:
    @staticmethod
    def list_cars():
        return CarRepository.get_all_cars()
