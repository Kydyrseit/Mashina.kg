export const moto = {
  title: 'Мотоциклы',
  description: 'Широкий выбор мотоциклов для любых целей',
  categories: [
    {
      id: 1,
      name: 'Спортивные',
      icon: 'motorcycle',
      path: '/moto/sport'
    },
    {
      id: 2,
      name: 'Туристические',
      icon: 'road',
      path: '/moto/touring'
    },
    {
      id: 3,
      name: 'Классические',
      icon: 'bicycle',
      path: '/moto/classic'
    },
    {
      id: 4,
      name: 'Эндуро',
      icon: 'mountain',
      path: '/moto/enduro'
    }
  ],
  filters: {
    price: {
      min: 0,
      max: 50000,
      step: 1000
    },
    year: {
      min: 2000,
      max: 2024,
      step: 1
    },
    mileage: {
      min: 0,
      max: 100000,
      step: 1000
    },
    engine: {
      min: 50,
      max: 2000,
      step: 50
    },
    fuel: [
      'Бензин',
      'Электро'
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
      brand: 'Honda',
      model: 'CBR 600RR',
      year: 2021,
      price: 15000,
      mileage: 5000,
      engine: 600,
      fuel: 'Бензин',
      condition: 'Б/у',
      image: 'https://via.placeholder.com/300x200?text=Honda+CBR'
    },
    {
      id: 2,
      brand: 'Yamaha',
      model: 'MT-07',
      year: 2022,
      price: 12000,
      mileage: 3000,
      engine: 700,
      fuel: 'Бензин',
      condition: 'Б/у',
      image: 'https://via.placeholder.com/300x200?text=Yamaha+MT'
    },
    {
      id: 3,
      brand: 'BMW',
      model: 'S1000RR',
      year: 2023,
      price: 25000,
      mileage: 1000,
      engine: 1000,
      fuel: 'Бензин',
      condition: 'Б/у',
      image: 'https://via.placeholder.com/300x200?text=BMW+S1000RR'
    }
  ],
  features: [
    {
      id: 1,
      title: 'Большой выбор',
      description: 'Более 200 мотоциклов в наличии',
      icon: 'motorcycle'
    },
    {
      id: 2,
      title: 'Гарантия качества',
      description: 'Проверка всех мотоциклов',
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
      description: 'Выгодные условия кредитования',
      icon: 'credit-card',
      path: '/credit'
    },
    {
      id: 2,
      title: 'Страхование',
      description: 'Надежное страхование мотоцикла',
      icon: 'shield-alt',
      path: '/insurance'
    },
    {
      id: 3,
      title: 'Техобслуживание',
      description: 'Профессиональное ТО мотоциклов',
      icon: 'wrench',
      path: '/services'
    }
  ]
}; 