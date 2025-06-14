export const home = {
  hero: {
    title: 'Найдите свой идеальный автомобиль',
    description: 'Большой выбор автомобилей, мотоциклов и запчастей в Кыргызстане',
    search: {
      placeholder: 'Поиск автомобилей, запчастей, услуг...',
      button: 'Найти'
    }
  },
  features: [
    {
      id: 1,
      title: 'Большой выбор',
      description: 'Более 1000 автомобилей в наличии',
      icon: 'car'
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
  popular: {
    title: 'Популярные автомобили',
    description: 'Самые популярные предложения этой недели',
    items: [
      {
        id: 1,
        brand: 'Toyota',
        model: 'Camry',
        year: 2020,
        price: 25000,
        mileage: 45000,
        image: 'https://via.placeholder.com/300x200?text=Toyota+Camry'
      },
      {
        id: 2,
        brand: 'Honda',
        model: 'CR-V',
        year: 2019,
        price: 28000,
        mileage: 35000,
        image: 'https://via.placeholder.com/300x200?text=Honda+CR-V'
      },
      {
        id: 3,
        brand: 'Lexus',
        model: 'RX 350',
        year: 2021,
        price: 45000,
        mileage: 15000,
        image: 'https://via.placeholder.com/300x200?text=Lexus+RX'
      }
    ]
  },
  services: {
    title: 'Наши услуги',
    description: 'Полный спектр услуг для вашего автомобиля',
    items: [
      {
        id: 1,
        title: 'Техническое обслуживание',
        description: 'Профессиональное ТО вашего автомобиля',
        icon: 'wrench',
        path: '/services/maintenance'
      },
      {
        id: 2,
        title: 'Кредитование',
        description: 'Выгодные условия кредитования',
        icon: 'credit-card',
        path: '/credit'
      },
      {
        id: 3,
        title: 'Страхование',
        description: 'Надежное страхование автомобиля',
        icon: 'shield-alt',
        path: '/insurance'
      }
    ]
  },
  testimonials: {
    title: 'Отзывы клиентов',
    description: 'Что говорят о нас наши клиенты',
    items: [
      {
        id: 1,
        name: 'Александр',
        text: 'Отличный сервис! Быстро и качественно выполнили все работы.',
        rating: 5,
        image: 'https://via.placeholder.com/100x100?text=User1'
      },
      {
        id: 2,
        name: 'Мария',
        text: 'Профессиональный подход, вежливый персонал.',
        rating: 5,
        image: 'https://via.placeholder.com/100x100?text=User2'
      },
      {
        id: 3,
        name: 'Иван',
        text: 'Спасибо за качественную работу!',
        rating: 5,
        image: 'https://via.placeholder.com/100x100?text=User3'
      }
    ]
  },
  cta: {
    title: 'Готовы начать?',
    description: 'Найдите свой идеальный автомобиль прямо сейчас',
    button: 'Начать поиск',
    path: '/cars'
  }
}; 