export const search = {
  placeholder: 'Поиск автомобилей, запчастей, услуг...',
  categories: [
    {
      id: 1,
      name: 'Автомобили',
      icon: 'car',
      path: '/cars'
    },
    {
      id: 2,
      name: 'Запчасти',
      icon: 'cog',
      path: '/parts'
    },
    {
      id: 3,
      name: 'Услуги',
      icon: 'wrench',
      path: '/services'
    }
  ],
  filters: {
    price: {
      min: 0,
      max: 100000,
      step: 1000
    },
    year: {
      min: 1990,
      max: 2024,
      step: 1
    },
    mileage: {
      min: 0,
      max: 300000,
      step: 1000
    }
  },
  sort: [
    {
      id: 1,
      name: 'По цене (возрастание)',
      value: 'price_asc'
    },
    {
      id: 2,
      name: 'По цене (убывание)',
      value: 'price_desc'
    },
    {
      id: 3,
      name: 'По году (возрастание)',
      value: 'year_asc'
    },
    {
      id: 4,
      name: 'По году (убывание)',
      value: 'year_desc'
    },
    {
      id: 5,
      name: 'По пробегу (возрастание)',
      value: 'mileage_asc'
    },
    {
      id: 6,
      name: 'По пробегу (убывание)',
      value: 'mileage_desc'
    }
  ]
}; 