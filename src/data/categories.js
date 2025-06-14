export const categories = [
  {
    id: 1,
    name: 'Легковые автомобили',
    slug: 'cars',
    icon: 'car',
    subcategories: [
      { id: 11, name: 'Седаны', slug: 'sedans' },
      { id: 12, name: 'Хэтчбеки', slug: 'hatchbacks' },
      { id: 13, name: 'Кроссоверы', slug: 'crossovers' },
      { id: 14, name: 'Внедорожники', slug: 'suvs' }
    ]
  },
  {
    id: 2,
    name: 'Коммерческие автомобили',
    slug: 'commercial',
    icon: 'truck',
    subcategories: [
      { id: 21, name: 'Грузовики', slug: 'trucks' },
      { id: 22, name: 'Микроавтобусы', slug: 'minibuses' },
      { id: 23, name: 'Фургоны', slug: 'vans' }
    ]
  },
  {
    id: 3,
    name: 'Мотоциклы',
    slug: 'moto',
    icon: 'motorcycle',
    subcategories: [
      { id: 31, name: 'Спортивные', slug: 'sport' },
      { id: 32, name: 'Туристические', slug: 'tourist' },
      { id: 33, name: 'Классические', slug: 'classic' }
    ]
  },
  {
    id: 4,
    name: 'Запчасти',
    slug: 'parts',
    icon: 'cog',
    subcategories: [
      { id: 41, name: 'Двигатель', slug: 'engine' },
      { id: 42, name: 'Трансмиссия', slug: 'transmission' },
      { id: 43, name: 'Подвеска', slug: 'suspension' },
      { id: 44, name: 'Кузовные детали', slug: 'body' }
    ]
  },
  {
    id: 5,
    name: 'Услуги',
    slug: 'services',
    icon: 'wrench',
    subcategories: [
      { id: 51, name: 'Техническое обслуживание', slug: 'maintenance' },
      { id: 52, name: 'Ремонт', slug: 'repair' },
      { id: 53, name: 'Диагностика', slug: 'diagnostics' }
    ]
  }
]; 