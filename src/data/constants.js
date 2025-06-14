export const constants = {
  // API endpoints
  API: {
    BASE_URL: 'https://api.mashina.kg',
    VERSION: 'v1',
    TIMEOUT: 30000,
    ENDPOINTS: {
      AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        LOGOUT: '/auth/logout',
        REFRESH: '/auth/refresh',
        RESET_PASSWORD: '/auth/reset-password',
        VERIFY_EMAIL: '/auth/verify-email'
      },
      CARS: {
        LIST: '/cars',
        DETAIL: '/cars/:id',
        CREATE: '/cars',
        UPDATE: '/cars/:id',
        DELETE: '/cars/:id',
        FAVORITE: '/cars/:id/favorite',
        SEARCH: '/cars/search'
      },
      COMMERCIAL: {
        LIST: '/commercial',
        DETAIL: '/commercial/:id',
        CREATE: '/commercial',
        UPDATE: '/commercial/:id',
        DELETE: '/commercial/:id',
        FAVORITE: '/commercial/:id/favorite',
        SEARCH: '/commercial/search'
      },
      MOTO: {
        LIST: '/moto',
        DETAIL: '/moto/:id',
        CREATE: '/moto',
        UPDATE: '/moto/:id',
        DELETE: '/moto/:id',
        FAVORITE: '/moto/:id/favorite',
        SEARCH: '/moto/search'
      },
      PARTS: {
        LIST: '/parts',
        DETAIL: '/parts/:id',
        CREATE: '/parts',
        UPDATE: '/parts/:id',
        DELETE: '/parts/:id',
        FAVORITE: '/parts/:id/favorite',
        SEARCH: '/parts/search'
      },
      SERVICES: {
        LIST: '/services',
        DETAIL: '/services/:id',
        CREATE: '/services',
        UPDATE: '/services/:id',
        DELETE: '/services/:id',
        BOOK: '/services/:id/book',
        SEARCH: '/services/search'
      },
      USERS: {
        PROFILE: '/users/profile',
        UPDATE: '/users/profile',
        FAVORITES: '/users/favorites',
        ADS: '/users/ads',
        MESSAGES: '/users/messages',
        NOTIFICATIONS: '/users/notifications'
      }
    }
  },

  // Routes
  ROUTES: {
    HOME: '/',
    AUTH: {
      LOGIN: '/login',
      REGISTER: '/register',
      FORGOT_PASSWORD: '/forgot-password',
      RESET_PASSWORD: '/reset-password'
    },
    CARS: {
      LIST: '/cars',
      DETAIL: '/cars/:id',
      CREATE: '/cars/create',
      EDIT: '/cars/:id/edit'
    },
    COMMERCIAL: {
      LIST: '/commercial',
      DETAIL: '/commercial/:id',
      CREATE: '/commercial/create',
      EDIT: '/commercial/:id/edit'
    },
    MOTO: {
      LIST: '/moto',
      DETAIL: '/moto/:id',
      CREATE: '/moto/create',
      EDIT: '/moto/:id/edit'
    },
    PARTS: {
      LIST: '/parts',
      DETAIL: '/parts/:id',
      CREATE: '/parts/create',
      EDIT: '/parts/:id/edit'
    },
    SERVICES: {
      LIST: '/services',
      DETAIL: '/services/:id',
      CREATE: '/services/create',
      EDIT: '/services/:id/edit'
    },
    USER: {
      PROFILE: '/profile',
      FAVORITES: '/profile/favorites',
      ADS: '/profile/ads',
      MESSAGES: '/profile/messages',
      SETTINGS: '/profile/settings'
    }
  },

  // Storage keys
  STORAGE: {
    TOKEN: 'token',
    REFRESH_TOKEN: 'refreshToken',
    USER: 'user',
    CART: 'cart',
    FAVORITES: 'favorites',
    LANGUAGE: 'language',
    THEME: 'theme'
  },

  // Pagination
  PAGINATION: {
    ITEMS_PER_PAGE: 12,
    MAX_PAGES: 5
  },

  // File upload
  UPLOAD: {
    MAX_SIZE: 5242880, // 5MB
    ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif'],
    MAX_FILES: 10
  },

  // Notifications
  NOTIFICATIONS: {
    TYPES: {
      SUCCESS: 'success',
      ERROR: 'error',
      WARNING: 'warning',
      INFO: 'info'
    },
    DURATION: 5000 // 5 seconds
  },

  // Social media
  SOCIAL: {
    FACEBOOK: 'https://facebook.com/mashina.kg',
    INSTAGRAM: 'https://instagram.com/mashina.kg',
    YOUTUBE: 'https://youtube.com/mashina.kg',
    TELEGRAM: 'https://t.me/mashina.kg'
  },

  // Contact
  CONTACT: {
    EMAIL: 'info@mashina.kg',
    PHONE: '+996 555 123 456',
    ADDRESS: 'г. Бишкек, ул. Примерная, 123',
    WORKING_HOURS: 'Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 16:00'
  },

  // Currency
  CURRENCY: {
    CODE: 'KGS',
    SYMBOL: '₸',
    DECIMAL_SEPARATOR: '.',
    THOUSAND_SEPARATOR: ' ',
    DECIMAL_PLACES: 0
  },

  // Date format
  DATE_FORMAT: {
    DISPLAY: 'DD.MM.YYYY',
    API: 'YYYY-MM-DD',
    TIME: 'HH:mm'
  },

  // Map
  MAP: {
    CENTER: [42.8746, 74.5698], // Bishkek coordinates
    ZOOM: 12,
    API_KEY: 'YOUR_MAP_API_KEY'
  }
}; 