export const parts = {
  title: 'Запчасти',
  description: 'Оригинальные и неоригинальные запчасти для всех марок автомобилей',
  categories: [
    {
      id: 1,
      name: 'Двигатель',
      icon: 'engine',
      path: '/parts/engine'
    },
    {
      id: 2,
      name: 'Трансмиссия',
      icon: 'cogs',
      path: '/parts/transmission'
    },
    {
      id: 3,
      name: 'Подвеска',
      icon: 'car-side',
      path: '/parts/suspension'
    },
    {
      id: 4,
      name: 'Кузовные детали',
      icon: 'car',
      path: '/parts/body'
    },
    {
      id: 5,
      name: 'Электрика',
      icon: 'bolt',
      path: '/parts/electrical'
    },
    {
      id: 6,
      name: 'Расходники',
      icon: 'oil-can',
      path: '/parts/consumables'
    }
  ],
  filters: {
    price: {
      min: 0,
      max: 10000,
      step: 100
    },
    brand: [
      'Toyota',
      'Honda',
      'Nissan',
      'Mitsubishi',
      'Lexus',
      'BMW',
      'Mercedes-Benz',
      'Audi',
      'Volkswagen',
      'Hyundai',
      'Kia'
    ],
    condition: [
      'Новый',
      'Б/у',
      'Восстановленный'
    ],
    origin: [
      'Оригинал',
      'Неоригинал',
      'Аналог'
    ]
  },
  popular: [
    {
      id: 1,
      name: 'Масляный фильтр Toyota',
      brand: 'Toyota',
      category: 'Расходники',
      price: 1500,
      condition: 'Новый',
      origin: 'Оригинал',
      image: 'https://via.placeholder.com/300x200?text=Oil+Filter'
    },
    {
      id: 2,
      name: 'Тормозные колодки Honda',
      brand: 'Honda',
      category: 'Тормоза',
      price: 3500,
      condition: 'Новый',
      origin: 'Оригинал',
      image: 'https://via.placeholder.com/300x200?text=Brake+Pads'
    },
    {
      id: 3,
      name: 'Воздушный фильтр Nissan',
      brand: 'Nissan',
      category: 'Расходники',
      price: 2000,
      condition: 'Новый',
      origin: 'Оригинал',
      image: 'https://via.placeholder.com/300x200?text=Air+Filter'
    }
  ],
  features: [
    {
      id: 1,
      title: 'Большой выбор',
      description: 'Более 10000 наименований запчастей',
      icon: 'boxes'
    },
    {
      id: 2,
      title: 'Гарантия качества',
      description: 'Проверка всех запчастей',
      icon: 'check-circle'
    },
    {
      id: 3,
      title: 'Быстрая доставка',
      description: 'Доставка по всей стране',
      icon: 'truck'
    }
  ],
  services: [
    {
      id: 1,
      title: 'Подбор запчастей',
      description: 'Профессиональный подбор запчастей',
      icon: 'search',
      path: '/services/parts-search'
    },
    {
      id: 2,
      title: 'Установка',
      description: 'Установка запчастей в нашем сервисе',
      icon: 'wrench',
      path: '/services/installation'
    },
    {
      id: 3,
      title: 'Консультация',
      description: 'Бесплатная консультация специалиста',
      icon: 'headset',
      path: '/services/consultation'
    }
  ]
}; 