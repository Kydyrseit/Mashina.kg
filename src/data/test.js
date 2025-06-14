export const test = {
  // Test user
  user: {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
    phone: '+996 555 123 456',
    avatar: 'https://via.placeholder.com/150',
    role: 'user',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },

  // Test car
  car: {
    id: 1,
    title: 'Toyota Camry 2024',
    description: 'Новый Toyota Camry 2024 года выпуска. Полный комплект, гарантия, рассрочка.',
    price: 2500000,
    year: 2024,
    mileage: 0,
    fuel: 'Бензин',
    transmission: 'Автомат',
    color: 'Белый',
    condition: 'Новый',
    brand: 'Toyota',
    model: 'Camry',
    images: [
      'https://via.placeholder.com/800x600?text=Toyota+Camry+1',
      'https://via.placeholder.com/800x600?text=Toyota+Camry+2',
      'https://via.placeholder.com/800x600?text=Toyota+Camry+3'
    ],
    features: [
      'Кондиционер',
      'Кожаный салон',
      'Круиз-контроль',
      'Парктроник',
      'Камера заднего вида'
    ],
    specifications: {
      engine: '2.5L',
      power: '200 л.с.',
      acceleration: '8.5 сек',
      maxSpeed: '220 км/ч',
      fuelConsumption: '7.5 л/100км'
    },
    location: {
      city: 'Бишкек',
      address: 'ул. Примерная, 123',
      coordinates: [42.8746, 74.5698]
    },
    seller: {
      id: 1,
      name: 'Test User',
      phone: '+996 555 123 456',
      email: 'test@example.com',
      rating: 4.5,
      reviews: 10
    },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },

  // Test commercial
  commercial: {
    id: 1,
    title: 'Mercedes-Benz Sprinter 2023',
    description: 'Новый Mercedes-Benz Sprinter 2023 года выпуска. Полный комплект, гарантия, рассрочка.',
    price: 3500000,
    year: 2023,
    mileage: 0,
    fuel: 'Дизель',
    transmission: 'Механика',
    color: 'Серебристый',
    condition: 'Новый',
    brand: 'Mercedes-Benz',
    model: 'Sprinter',
    type: 'Микроавтобус',
    images: [
      'https://via.placeholder.com/800x600?text=Mercedes+Sprinter+1',
      'https://via.placeholder.com/800x600?text=Mercedes+Sprinter+2',
      'https://via.placeholder.com/800x600?text=Mercedes+Sprinter+3'
    ],
    features: [
      'Кондиционер',
      'Отопитель',
      'ABS',
      'ESP',
      'Подушки безопасности'
    ],
    specifications: {
      engine: '2.2L',
      power: '163 л.с.',
      loadCapacity: '1.5 т',
      volume: '10 м³',
      fuelConsumption: '8.5 л/100км'
    },
    location: {
      city: 'Бишкек',
      address: 'ул. Примерная, 123',
      coordinates: [42.8746, 74.5698]
    },
    seller: {
      id: 1,
      name: 'Test User',
      phone: '+996 555 123 456',
      email: 'test@example.com',
      rating: 4.5,
      reviews: 10
    },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },

  // Test moto
  moto: {
    id: 1,
    title: 'Honda CBR 600RR 2023',
    description: 'Новый Honda CBR 600RR 2023 года выпуска. Полный комплект, гарантия, рассрочка.',
    price: 1500000,
    year: 2023,
    mileage: 0,
    fuel: 'Бензин',
    transmission: 'Механика',
    color: 'Красный',
    condition: 'Новый',
    brand: 'Honda',
    model: 'CBR 600RR',
    type: 'Спорт',
    images: [
      'https://via.placeholder.com/800x600?text=Honda+CBR+1',
      'https://via.placeholder.com/800x600?text=Honda+CBR+2',
      'https://via.placeholder.com/800x600?text=Honda+CBR+3'
    ],
    features: [
      'ABS',
      'Тraction Control',
      'Quick Shifter',
      'LED фары',
      'Цифровая приборная панель'
    ],
    specifications: {
      engine: '599cc',
      power: '120 л.с.',
      acceleration: '3.5 сек',
      maxSpeed: '260 км/ч',
      fuelConsumption: '5.5 л/100км'
    },
    location: {
      city: 'Бишкек',
      address: 'ул. Примерная, 123',
      coordinates: [42.8746, 74.5698]
    },
    seller: {
      id: 1,
      name: 'Test User',
      phone: '+996 555 123 456',
      email: 'test@example.com',
      rating: 4.5,
      reviews: 10
    },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },

  // Test part
  part: {
    id: 1,
    title: 'Масляный фильтр Toyota',
    description: 'Оригинальный масляный фильтр Toyota. Подходит для всех моделей Toyota.',
    price: 1500,
    brand: 'Toyota',
    category: 'Фильтры',
    condition: 'Новый',
    origin: 'Оригинал',
    images: [
      'https://via.placeholder.com/800x600?text=Toyota+Filter+1',
      'https://via.placeholder.com/800x600?text=Toyota+Filter+2',
      'https://via.placeholder.com/800x600?text=Toyota+Filter+3'
    ],
    specifications: {
      partNumber: '90915-YZZJ1',
      compatibility: [
        'Toyota Camry',
        'Toyota Corolla',
        'Toyota RAV4'
      ],
      warranty: '12 месяцев'
    },
    location: {
      city: 'Бишкек',
      address: 'ул. Примерная, 123',
      coordinates: [42.8746, 74.5698]
    },
    seller: {
      id: 1,
      name: 'Test User',
      phone: '+996 555 123 456',
      email: 'test@example.com',
      rating: 4.5,
      reviews: 10
    },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },

  // Test service
  service: {
    id: 1,
    title: 'Техническое обслуживание',
    description: 'Полное техническое обслуживание автомобиля. Диагностика, замена масла, фильтров и расходных материалов.',
    price: 5000,
    duration: '2 часа',
    category: 'Техобслуживание',
    images: [
      'https://via.placeholder.com/800x600?text=Service+1',
      'https://via.placeholder.com/800x600?text=Service+2',
      'https://via.placeholder.com/800x600?text=Service+3'
    ],
    features: [
      'Диагностика',
      'Замена масла',
      'Замена фильтров',
      'Проверка тормозов',
      'Проверка подвески'
    ],
    specifications: {
      warranty: '3 месяца',
      equipment: [
        'Диагностический сканер',
        'Подъемник',
        'Специальные инструменты'
      ],
      experience: '5 лет'
    },
    location: {
      city: 'Бишкек',
      address: 'ул. Примерная, 123',
      coordinates: [42.8746, 74.5698]
    },
    provider: {
      id: 1,
      name: 'Test Service',
      phone: '+996 555 123 456',
      email: 'test@example.com',
      rating: 4.5,
      reviews: 10
    },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },

  // Test review
  review: {
    id: 1,
    user: {
      id: 1,
      name: 'Test User',
      avatar: 'https://via.placeholder.com/150'
    },
    rating: 5,
    text: 'Отличный сервис! Быстро и качественно выполнили все работы. Рекомендую!',
    images: [
      'https://via.placeholder.com/800x600?text=Review+1',
      'https://via.placeholder.com/800x600?text=Review+2'
    ],
    likes: 10,
    dislikes: 0,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },

  // Test message
  message: {
    id: 1,
    sender: {
      id: 1,
      name: 'Test User',
      avatar: 'https://via.placeholder.com/150'
    },
    receiver: {
      id: 2,
      name: 'Test User 2',
      avatar: 'https://via.placeholder.com/150'
    },
    text: 'Здравствуйте! Интересует ваш автомобиль. Можно узнать подробнее?',
    attachments: [
      {
        type: 'image',
        url: 'https://via.placeholder.com/800x600?text=Message+1'
      }
    ],
    read: false,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },

  // Test notification
  notification: {
    id: 1,
    type: 'message',
    title: 'Новое сообщение',
    text: 'У вас новое сообщение от Test User',
    icon: 'message',
    read: false,
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },

  // Test favorite
  favorite: {
    id: 1,
    user: {
      id: 1,
      name: 'Test User',
      avatar: 'https://via.placeholder.com/150'
    },
    item: {
      id: 1,
      type: 'car',
      title: 'Toyota Camry 2024',
      price: 2500000,
      image: 'https://via.placeholder.com/800x600?text=Toyota+Camry+1'
    },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },

  // Test search
  search: {
    query: 'Toyota Camry',
    filters: {
      price: {
        min: 0,
        max: 3000000
      },
      year: {
        min: 2020,
        max: 2024
      },
      mileage: {
        min: 0,
        max: 100000
      },
      fuel: ['Бензин'],
      transmission: ['Автомат'],
      condition: ['Новый']
    },
    sort: 'price_asc',
    results: [
      {
        id: 1,
        type: 'car',
        title: 'Toyota Camry 2024',
        price: 2500000,
        image: 'https://via.placeholder.com/800x600?text=Toyota+Camry+1'
      },
      {
        id: 2,
        type: 'car',
        title: 'Toyota Camry 2023',
        price: 2200000,
        image: 'https://via.placeholder.com/800x600?text=Toyota+Camry+2'
      }
    ],
    total: 2,
    page: 1,
    perPage: 12
  }
}; 