export const header = {
  logo: {
    src: 'https://via.placeholder.com/200x50?text=Mashina.kg',
    alt: 'Mashina.kg'
  },
  menu: [
    {
      id: 1,
      title: 'Автомобили',
      path: '/cars',
      icon: 'car',
      submenu: [
        { id: 11, title: 'Все автомобили', path: '/cars' },
        { id: 12, title: 'Новые', path: '/cars/new' },
        { id: 13, title: 'С пробегом', path: '/cars/used' }
      ]
    },
    {
      id: 2,
      title: 'Коммерческие',
      path: '/commercial',
      icon: 'truck',
      submenu: [
        { id: 21, title: 'Все коммерческие', path: '/commercial' },
        { id: 22, title: 'Грузовики', path: '/commercial/trucks' },
        { id: 23, title: 'Микроавтобусы', path: '/commercial/minibuses' }
      ]
    },
    {
      id: 3,
      title: 'Мотоциклы',
      path: '/moto',
      icon: 'motorcycle',
      submenu: [
        { id: 31, title: 'Все мотоциклы', path: '/moto' },
        { id: 32, title: 'Спортивные', path: '/moto/sport' },
        { id: 33, title: 'Туристические', path: '/moto/tourist' }
      ]
    },
    {
      id: 4,
      title: 'Запчасти',
      path: '/parts',
      icon: 'cog',
      submenu: [
        { id: 41, title: 'Все запчасти', path: '/parts' },
        { id: 42, title: 'Двигатель', path: '/parts/engine' },
        { id: 43, title: 'Трансмиссия', path: '/parts/transmission' }
      ]
    },
    {
      id: 5,
      title: 'Услуги',
      path: '/services',
      icon: 'wrench',
      submenu: [
        { id: 51, title: 'Все услуги', path: '/services' },
        { id: 52, title: 'ТО', path: '/services/maintenance' },
        { id: 53, title: 'Ремонт', path: '/services/repair' }
      ]
    }
  ],
  actions: [
    {
      id: 1,
      title: 'Войти',
      path: '/login',
      icon: 'user'
    },
    {
      id: 2,
      title: 'Разместить объявление',
      path: '/add-listing',
      icon: 'plus-circle',
      variant: 'primary'
    }
  ],
  search: {
    placeholder: 'Поиск автомобилей, запчастей, услуг...',
    button: 'Найти'
  }
}; 