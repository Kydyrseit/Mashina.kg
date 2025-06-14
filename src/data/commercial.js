export const commercial = {
  title: 'Коммерческие автомобили',
  description: 'Широкий выбор коммерческих автомобилей для вашего бизнеса',
  categories: [
    {
      id: 1,
      name: 'Грузовые автомобили',
      icon: 'truck',
      path: '/commercial/trucks'
    },
    {
      id: 2,
      name: 'Микроавтобусы',
      icon: 'bus',
      path: '/commercial/minibuses'
    },
    {
      id: 3,
      name: 'Автобусы',
      icon: 'bus-alt',
      path: '/commercial/buses'
    },
    {
      id: 4,
      name: 'Спецтехника',
      icon: 'truck-loading',
      path: '/commercial/special'
    }
  ],
  filters: {
    price: {
      min: 0,
      max: 100000,
      step: 1000
    },
    year: {
      min: 2000,
      max: 2024,
      step: 1
    },
    mileage: {
      min: 0,
      max: 500000,
      step: 1000
    },
    fuel: [
      'Бензин',
      'Дизель',
      'Газ',
      'Гибрид',
      'Электро'
    ],
    transmission: [
      'Механика',
      'Автомат',
      'Робот',
      'Вариатор'
    ],
    condition: [
      'Новый',
      'Б/у',
      'Аварийный'
    ]
  },
  popular: [
    {
      id: 1,
      brand: 'Mercedes-Benz',
      model: 'Sprinter',
      year: 2021,
      price: 45000,
      mileage: 25000,
      fuel: 'Дизель',
      transmission: 'Автомат',
      condition: 'Б/у',
      image: 'https://via.placeholder.com/300x200?text=Mercedes+Sprinter'
    },
    {
      id: 2,
      brand: 'Volkswagen',
      model: 'Crafter',
      year: 2020,
      price: 42000,
      mileage: 35000,
      fuel: 'Дизель',
      transmission: 'Механика',
      condition: 'Б/у',
      image: 'https://via.placeholder.com/300x200?text=VW+Crafter'
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'Transit',
      year: 2022,
      price: 48000,
      mileage: 15000,
      fuel: 'Дизель',
      transmission: 'Автомат',
      condition: 'Б/у',
      image: 'https://via.placeholder.com/300x200?text=Ford+Transit'
    }
  ],
  features: [
    {
      id: 1,
      title: 'Большой выбор',
      description: 'Более 500 коммерческих автомобилей в наличии',
      icon: 'truck'
    },
    {
      id: 2,
      title: 'Гарантия качества',
      description: 'Проверка всех автомобилей',
      icon: 'check-circle'
    },
    {
      id: 3,
      title: 'Поддержка 24/7',
      description: 'Всегда на связи',
      icon: 'headset'
    }
  ],
  services: [
    {
      id: 1,
      title: 'Кредитование',
      description: 'Выгодные условия кредитования для бизнеса',
      icon: 'credit-card',
      path: '/credit'
    },
    {
      id: 2,
      title: 'Страхование',
      description: 'Надежное страхование коммерческого транспорта',
      icon: 'shield-alt',
      path: '/insurance'
    },
    {
      id: 3,
      title: 'Техобслуживание',
      description: 'Профессиональное ТО коммерческого транспорта',
      icon: 'wrench',
      path: '/services'
    }
  ]
}; 