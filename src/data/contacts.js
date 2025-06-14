export const contacts = {
  title: 'Контакты',
  description: 'Свяжитесь с нами любым удобным способом',
  offices: [
    {
      id: 1,
      name: 'Главный офис',
      address: 'г. Бишкек, ул. Примерная, 123',
      phone: '+996 555 123 456',
      email: 'info@mashina.kg',
      workingHours: 'Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 16:00',
      coordinates: {
        lat: 42.8746,
        lng: 74.5698
      },
      departments: [
        {
          id: 1,
          name: 'Продажи',
          phone: '+996 555 123 457',
          email: 'sales@mashina.kg'
        },
        {
          id: 2,
          name: 'Сервис',
          phone: '+996 555 123 458',
          email: 'service@mashina.kg'
        },
        {
          id: 3,
          name: 'Запчасти',
          phone: '+996 555 123 459',
          email: 'parts@mashina.kg'
        }
      ]
    },
    {
      id: 2,
      name: 'Сервисный центр',
      address: 'г. Бишкек, ул. Сервисная, 45',
      phone: '+996 555 123 460',
      email: 'service@mashina.kg',
      workingHours: 'Пн-Пт: 8:00 - 20:00, Сб-Вс: 9:00 - 18:00',
      coordinates: {
        lat: 42.8747,
        lng: 74.5699
      }
    }
  ],
  social: [
    {
      id: 1,
      name: 'Facebook',
      icon: 'facebook',
      url: 'https://facebook.com/mashina.kg'
    },
    {
      id: 2,
      name: 'Instagram',
      icon: 'instagram',
      url: 'https://instagram.com/mashina.kg'
    },
    {
      id: 3,
      name: 'YouTube',
      icon: 'youtube',
      url: 'https://youtube.com/mashina.kg'
    },
    {
      id: 4,
      name: 'Telegram',
      icon: 'telegram',
      url: 'https://t.me/mashina.kg'
    }
  ],
  form: {
    title: 'Напишите нам',
    description: 'Заполните форму, и мы свяжемся с вами в ближайшее время',
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
        id: 'phone',
        label: 'Телефон',
        type: 'tel',
        required: true
      },
      {
        id: 'subject',
        label: 'Тема',
        type: 'select',
        required: true,
        options: [
          { value: 'sales', label: 'Продажи' },
          { value: 'service', label: 'Сервис' },
          { value: 'parts', label: 'Запчасти' },
          { value: 'other', label: 'Другое' }
        ]
      },
      {
        id: 'message',
        label: 'Сообщение',
        type: 'textarea',
        required: true
      }
    ],
    submit: 'Отправить',
    success: 'Спасибо за обращение! Мы свяжемся с вами в ближайшее время.',
    error: 'Произошла ошибка. Пожалуйста, попробуйте позже.'
  },
  features: [
    {
      id: 1,
      title: 'Быстрая связь',
      description: 'Ответим на ваш запрос в течение 24 часов',
      icon: 'clock'
    },
    {
      id: 2,
      title: 'Профессиональная поддержка',
      description: 'Команда опытных специалистов',
      icon: 'user-tie'
    },
    {
      id: 3,
      title: 'Удобное расположение',
      description: 'Наши офисы в центре города',
      icon: 'map-marker-alt'
    }
  ]
}; 