export const filters = {
  price: {
    min: 0,
    max: 100000,
    step: 1000
  },
  year: {
    min: 1990,
    max: 2024,
    step: 1
  },
  mileage: {
    min: 0,
    max: 300000,
    step: 1000
  },
  transmission: [
    { value: 'automatic', label: 'Автомат' },
    { value: 'manual', label: 'Механика' },
    { value: 'robot', label: 'Робот' },
    { value: 'variator', label: 'Вариатор' }
  ],
  fuel: [
    { value: 'petrol', label: 'Бензин' },
    { value: 'diesel', label: 'Дизель' },
    { value: 'hybrid', label: 'Гибрид' },
    { value: 'electric', label: 'Электро' }
  ],
  drive: [
    { value: 'front', label: 'Передний' },
    { value: 'rear', label: 'Задний' },
    { value: 'full', label: 'Полный' }
  ],
  color: [
    { value: 'white', label: 'Белый' },
    { value: 'black', label: 'Черный' },
    { value: 'silver', label: 'Серебристый' },
    { value: 'gray', label: 'Серый' },
    { value: 'red', label: 'Красный' },
    { value: 'blue', label: 'Синий' },
    { value: 'green', label: 'Зеленый' },
    { value: 'brown', label: 'Коричневый' }
  ],
  condition: [
    { value: 'new', label: 'Новый' },
    { value: 'used', label: 'Б/у' },
    { value: 'damaged', label: 'После ДТП' }
  ],
  features: [
    { value: 'airbag', label: 'Подушки безопасности' },
    { value: 'abs', label: 'ABS' },
    { value: 'esp', label: 'ESP' },
    { value: 'cruise', label: 'Круиз-контроль' },
    { value: 'parking', label: 'Парктроник' },
    { value: 'camera', label: 'Камера заднего вида' },
    { value: 'leather', label: 'Кожаный салон' },
    { value: 'sunroof', label: 'Люк' },
    { value: 'climate', label: 'Климат-контроль' },
    { value: 'heated', label: 'Подогрев сидений' }
  ]
}; 