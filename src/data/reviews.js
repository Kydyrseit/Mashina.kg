export const reviews = {
  title: 'Отзывы клиентов',
  description: 'Что говорят о нас наши клиенты',
  categories: [
    {
      id: 1,
      name: 'Автомобили',
      icon: 'car',
      path: '/reviews/cars'
    },
    {
      id: 2,
      name: 'Услуги',
      icon: 'wrench',
      path: '/reviews/services'
    },
    {
      id: 3,
      name: 'Запчасти',
      icon: 'cogs',
      path: '/reviews/parts'
    }
  ],
  items: [
    {
      id: 1,
      name: 'Александр',
      rating: 5,
      date: '2024-03-15',
      category: 'Автомобили',
      text: 'Отличный сервис! Купил Toyota Camry, все прошло быстро и качественно. Персонал вежливый, все объяснили и показали. Рекомендую!',
      image: 'https://via.placeholder.com/100x100?text=User1',
      car: {
        brand: 'Toyota',
        model: 'Camry',
        year: 2022
      }
    },
    {
      id: 2,
      name: 'Мария',
      rating: 5,
      date: '2024-03-10',
      category: 'Услуги',
      text: 'Делала ТО в сервисе, все на высшем уровне. Быстро, качественно, недорого. Особенно понравилось отношение к клиентам.',
      image: 'https://via.placeholder.com/100x100?text=User2',
      service: {
        name: 'Техническое обслуживание',
        date: '2024-03-10'
      }
    },
    {
      id: 3,
      name: 'Иван',
      rating: 4,
      date: '2024-03-05',
      category: 'Запчасти',
      text: 'Заказывал запчасти для Honda Civic. Пришли быстро, все оригинальные. Цены немного выше средних, но качество того стоит.',
      image: 'https://via.placeholder.com/100x100?text=User3',
      parts: {
        brand: 'Honda',
        model: 'Civic',
        parts: ['Тормозные колодки', 'Масляный фильтр']
      }
    }
  ],
  statistics: {
    total: 1250,
    averageRating: 4.8,
    distribution: {
      5: 850,
      4: 300,
      3: 80,
      2: 15,
      1: 5
    }
  },
  features: [
    {
      id: 1,
      title: 'Реальные отзывы',
      description: 'Все отзывы от реальных клиентов',
      icon: 'user-check'
    },
    {
      id: 2,
      title: 'Модерация',
      description: 'Каждый отзыв проверяется',
      icon: 'shield-alt'
    },
    {
      id: 3,
      title: 'Ответы',
      description: 'Мы отвечаем на все отзывы',
      icon: 'comment'
    }
  ],
  form: {
    title: 'Оставить отзыв',
    fields: [
      {
        id: 'name',
        label: 'Ваше имя',
        type: 'text',
        required: true
      },
      {
        id: 'email',
        label: 'Email',
        type: 'email',
        required: true
      },
      {
        id: 'rating',
        label: 'Оценка',
        type: 'rating',
        required: true
      },
      {
        id: 'category',
        label: 'Категория',
        type: 'select',
        required: true,
        options: [
          { value: 'cars', label: 'Автомобили' },
          { value: 'services', label: 'Услуги' },
          { value: 'parts', label: 'Запчасти' }
        ]
      },
      {
        id: 'text',
        label: 'Ваш отзыв',
        type: 'textarea',
        required: true
      }
    ],
    submit: 'Отправить отзыв',
    success: 'Спасибо за ваш отзыв!',
    error: 'Произошла ошибка. Пожалуйста, попробуйте позже.'
  }
}; 