export const menu = [
  {
    id: 1,
    title: 'Главная',
    path: '/',
    icon: 'home'
  },
  {
    id: 2,
    title: 'Автомобили',
    path: '/cars',
    icon: 'car',
    submenu: [
      { id: 21, title: 'Все автомобили', path: '/cars' },
      { id: 22, title: 'Новые', path: '/cars/new' },
      { id: 23, title: 'С пробегом', path: '/cars/used' }
    ]
  },
  {
    id: 3,
    title: 'Коммерческие',
    path: '/commercial',
    icon: 'truck',
    submenu: [
      { id: 31, title: 'Все коммерческие', path: '/commercial' },
      { id: 32, title: 'Грузовики', path: '/commercial/trucks' },
      { id: 33, title: 'Микроавтобусы', path: '/commercial/minibuses' }
    ]
  },
  {
    id: 4,
    title: 'Мотоциклы',
    path: '/moto',
    icon: 'motorcycle',
    submenu: [
      { id: 41, title: 'Все мотоциклы', path: '/moto' },
      { id: 42, title: 'Спортивные', path: '/moto/sport' },
      { id: 43, title: 'Туристические', path: '/moto/tourist' }
    ]
  },
  {
    id: 5,
    title: 'Запчасти',
    path: '/parts',
    icon: 'cog',
    submenu: [
      { id: 51, title: 'Все запчасти', path: '/parts' },
      { id: 52, title: 'Двигатель', path: '/parts/engine' },
      { id: 53, title: 'Трансмиссия', path: '/parts/transmission' }
    ]
  },
  {
    id: 6,
    title: 'Услуги',
    path: '/services',
    icon: 'wrench',
    submenu: [
      { id: 61, title: 'Все услуги', path: '/services' },
      { id: 62, title: 'ТО', path: '/services/maintenance' },
      { id: 63, title: 'Ремонт', path: '/services/repair' }
    ]
  },
  {
    id: 7,
    title: 'О нас',
    path: '/about',
    icon: 'info-circle'
  },
  {
    id: 8,
    title: 'Контакты',
    path: '/contact',
    icon: 'envelope'
  }
]; 