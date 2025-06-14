export const services = {
  title: 'Услуги',
  description: 'Профессиональные услуги для вашего автомобиля',
  categories: [
    {
      id: 1,
      name: 'Техническое обслуживание',
      icon: 'wrench',
      path: '/services/maintenance',
      services: [
        {
          id: 1,
          name: 'Замена масла',
          price: 'от 1000 сом',
          duration: '1-2 часа'
        },
        {
          id: 2,
          name: 'Замена фильтров',
          price: 'от 500 сом',
          duration: '1 час'
        },
        {
          id: 3,
          name: 'Диагностика',
          price: 'от 1500 сом',
          duration: '2-3 часа'
        }
      ]
    },
    {
      id: 2,
      name: 'Кузовной ремонт',
      icon: 'car',
      path: '/services/body',
      services: [
        {
          id: 1,
          name: 'Покраска',
          price: 'от 5000 сом',
          duration: '2-3 дня'
        },
        {
          id: 2,
          name: 'Рихтовка',
          price: 'от 3000 сом',
          duration: '1-2 дня'
        },
        {
          id: 3,
          name: 'Полировка',
          price: 'от 2000 сом',
          duration: '1 день'
        }
      ]
    },
    {
      id: 3,
      name: 'Электрика',
      icon: 'bolt',
      path: '/services/electrical',
      services: [
        {
          id: 1,
          name: 'Диагностика электрики',
          price: 'от 1000 сом',
          duration: '1-2 часа'
        },
        {
          id: 2,
          name: 'Ремонт стартера',
          price: 'от 2000 сом',
          duration: '2-3 часа'
        },
        {
          id: 3,
          name: 'Ремонт генератора',
          price: 'от 3000 сом',
          duration: '3-4 часа'
        }
      ]
    }
  ],
  features: [
    {
      id: 1,
      title: 'Опытные мастера',
      description: 'Профессиональные механики с большим опытом',
      icon: 'user-tie'
    },
    {
      id: 2,
      title: 'Оригинальные запчасти',
      description: 'Используем только качественные запчасти',
      icon: 'check-circle'
    },
    {
      id: 3,
      title: 'Гарантия на работы',
      description: 'Предоставляем гарантию на все виды работ',
      icon: 'shield-alt'
    }
  ],
  advantages: [
    {
      id: 1,
      title: 'Современное оборудование',
      description: 'Используем новейшее диагностическое оборудование'
    },
    {
      id: 2,
      title: 'Быстрое обслуживание',
      description: 'Минимальное время ожидания'
    },
    {
      id: 3,
      title: 'Удобное расположение',
      description: 'Наш сервис находится в центре города'
    },
    {
      id: 4,
      title: 'Прозрачные цены',
      description: 'Никаких скрытых платежей'
    }
  ],
  contact: {
    phone: '+996 555 123 456',
    email: 'service@mashina.kg',
    address: 'г. Бишкек, ул. Примерная, 123',
    workingHours: 'Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 16:00'
  }
}; 