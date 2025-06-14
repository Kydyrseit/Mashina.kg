export const special = {
  title: 'Специальные предложения',
  description: 'Выгодные предложения на автомобили и услуги',
  categories: [
    {
      id: 1,
      name: 'Акции',
      icon: 'percent',
      path: '/special/sales'
    },
    {
      id: 2,
      name: 'Распродажи',
      icon: 'tag',
      path: '/special/clearance'
    },
    {
      id: 3,
      name: 'Сезонные предложения',
      icon: 'calendar-alt',
      path: '/special/seasonal'
    }
  ],
  currentOffers: [
    {
      id: 1,
      title: 'Скидка на ТО',
      description: 'Скидка 20% на все виды технического обслуживания',
      validUntil: '2024-12-31',
      image: 'https://via.placeholder.com/300x200?text=Service+Discount',
      conditions: [
        'Действует до конца года',
        'Не суммируется с другими акциями',
        'Требуется предварительная запись'
      ]
    },
    {
      id: 2,
      title: 'Кредит без переплаты',
      description: 'Кредит на автомобиль с нулевой процентной ставкой',
      validUntil: '2024-06-30',
      image: 'https://via.placeholder.com/300x200?text=Zero+Interest',
      conditions: [
        'Первоначальный взнос от 30%',
        'Срок кредита до 36 месяцев',
        'Требуется справка о доходах'
      ]
    },
    {
      id: 3,
      title: 'Бесплатное КАСКО',
      description: 'Полгода КАСКО в подарок при покупке автомобиля',
      validUntil: '2024-08-31',
      image: 'https://via.placeholder.com/300x200?text=Free+Insurance',
      conditions: [
        'При покупке нового автомобиля',
        'Действует на все модели',
        'Требуется полис ОСАГО'
      ]
    }
  ],
  seasonalOffers: [
    {
      id: 1,
      title: 'Зимний комплект',
      description: 'Комплект зимней резины в подарок',
      season: 'winter',
      image: 'https://via.placeholder.com/300x200?text=Winter+Set',
      conditions: [
        'При покупке автомобиля',
        'Действует до конца зимы',
        'Выбор из доступных размеров'
      ]
    },
    {
      id: 2,
      title: 'Летняя скидка',
      description: 'Скидка 15% на кондиционеры',
      season: 'summer',
      image: 'https://via.placeholder.com/300x200?text=Summer+Sale',
      conditions: [
        'Действует все лето',
        'На все модели кондиционеров',
        'Включает установку'
      ]
    }
  ],
  features: [
    {
      id: 1,
      title: 'Выгодные цены',
      description: 'Специальные цены на автомобили и услуги',
      icon: 'dollar-sign'
    },
    {
      id: 2,
      title: 'Гарантия качества',
      description: 'Все предложения проверены и гарантированы',
      icon: 'check-circle'
    },
    {
      id: 3,
      title: 'Ограниченное время',
      description: 'Успейте воспользоваться предложениями',
      icon: 'clock'
    }
  ],
  contact: {
    phone: '+996 555 123 456',
    email: 'special@mashina.kg',
    address: 'г. Бишкек, ул. Примерная, 123',
    workingHours: 'Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 16:00'
  }
}; 