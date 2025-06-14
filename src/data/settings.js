export const settings = {
  site: {
    name: 'Mashina.kg',
    description: 'Автомобильный портал Кыргызстана',
    logo: '/logo.png',
    favicon: '/favicon.ico',
    language: 'ru',
    currency: 'KGS',
    timezone: 'Asia/Bishkek'
  },
  theme: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40'
  },
  contact: {
    email: 'info@mashina.kg',
    phone: '+996 555 123 456',
    address: 'г. Бишкек, ул. Примерная, 123',
    workingHours: 'Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 16:00'
  },
  social: {
    facebook: 'https://facebook.com/mashina.kg',
    instagram: 'https://instagram.com/mashina.kg',
    youtube: 'https://youtube.com/mashina.kg',
    telegram: 'https://t.me/mashina.kg'
  },
  seo: {
    title: 'Mashina.kg - Автомобильный портал Кыргызстана',
    description: 'Купить, продать автомобиль в Кыргызстане. Автомобильный портал Mashina.kg - объявления о продаже автомобилей, мотоциклов, запчастей и услуг.',
    keywords: 'автомобили, купить автомобиль, продать автомобиль, Кыргызстан, Бишкек, авто, машины, мотоциклы, запчасти',
    ogImage: '/og-image.jpg'
  },
  api: {
    baseUrl: 'https://api.mashina.kg',
    version: 'v1',
    timeout: 30000,
    endpoints: {
      cars: '/cars',
      commercial: '/commercial',
      moto: '/moto',
      parts: '/parts',
      services: '/services',
      users: '/users',
      auth: '/auth'
    }
  },
  pagination: {
    itemsPerPage: 12,
    maxPages: 5
  },
  search: {
    minLength: 3,
    maxResults: 50,
    categories: ['cars', 'commercial', 'moto', 'parts', 'services']
  },
  upload: {
    maxSize: 5242880, // 5MB
    allowedTypes: ['image/jpeg', 'image/png', 'image/gif'],
    maxFiles: 10
  },
  notifications: {
    email: {
      enabled: true,
      from: 'noreply@mashina.kg',
      templates: {
        welcome: 'welcome',
        resetPassword: 'reset-password',
        newMessage: 'new-message',
        newOrder: 'new-order'
      }
    },
    push: {
      enabled: true,
      publicKey: 'YOUR_PUBLIC_KEY'
    }
  },
  security: {
    passwordMinLength: 8,
    passwordRequiresSpecial: true,
    passwordRequiresNumber: true,
    passwordRequiresUppercase: true,
    sessionTimeout: 3600, // 1 hour
    maxLoginAttempts: 5,
    lockoutDuration: 900 // 15 minutes
  },
  features: {
    enableReviews: true,
    enableRatings: true,
    enableComments: true,
    enableSharing: true,
    enableFavorites: true,
    enableCompare: true,
    enableChat: true
  },
  seo: {
    title: 'Mashina.kg - Автомобильный портал Кыргызстана',
    description: 'Купить, продать или обменять автомобиль в Кыргызстане. Большой выбор автомобилей, мотоциклов и запчастей.',
    keywords: 'автомобили, машины, купить машину, продать машину, авто в Кыргызстане'
  },
  analytics: {
    googleAnalyticsId: 'UA-XXXXXXXXX-X',
    yandexMetrikaId: 'XXXXXXXX'
  }
}; 