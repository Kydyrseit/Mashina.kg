export const errors = {
  // Auth errors
  auth: {
    invalidCredentials: {
      code: 'AUTH_001',
      message: 'Неверный email или пароль',
      description: 'Проверьте правильность введенных данных и попробуйте снова'
    },
    userNotFound: {
      code: 'AUTH_002',
      message: 'Пользователь не найден',
      description: 'Пользователь с указанным email не зарегистрирован'
    },
    emailExists: {
      code: 'AUTH_003',
      message: 'Email уже используется',
      description: 'Пользователь с указанным email уже зарегистрирован'
    },
    invalidToken: {
      code: 'AUTH_004',
      message: 'Недействительный токен',
      description: 'Токен авторизации недействителен или истек'
    },
    tokenExpired: {
      code: 'AUTH_005',
      message: 'Токен истек',
      description: 'Срок действия токена авторизации истек'
    },
    invalidPassword: {
      code: 'AUTH_006',
      message: 'Неверный пароль',
      description: 'Введенный пароль неверен'
    },
    passwordMismatch: {
      code: 'AUTH_007',
      message: 'Пароли не совпадают',
      description: 'Введенные пароли не совпадают'
    },
    weakPassword: {
      code: 'AUTH_008',
      message: 'Слабый пароль',
      description: 'Пароль должен содержать минимум 8 символов, включая заглавные и строчные буквы, цифры и специальные символы'
    },
    invalidEmail: {
      code: 'AUTH_009',
      message: 'Неверный формат email',
      description: 'Введите корректный email адрес'
    },
    invalidPhone: {
      code: 'AUTH_010',
      message: 'Неверный формат телефона',
      description: 'Введите корректный номер телефона в формате +996 XXX XXX XXX'
    }
  },

  // Validation errors
  validation: {
    required: {
      code: 'VAL_001',
      message: 'Обязательное поле',
      description: 'Это поле обязательно для заполнения'
    },
    minLength: {
      code: 'VAL_002',
      message: 'Минимальная длина',
      description: 'Значение должно содержать минимум {min} символов'
    },
    maxLength: {
      code: 'VAL_003',
      message: 'Максимальная длина',
      description: 'Значение не должно превышать {max} символов'
    },
    minValue: {
      code: 'VAL_004',
      message: 'Минимальное значение',
      description: 'Значение должно быть не менее {min}'
    },
    maxValue: {
      code: 'VAL_005',
      message: 'Максимальное значение',
      description: 'Значение не должно превышать {max}'
    },
    pattern: {
      code: 'VAL_006',
      message: 'Неверный формат',
      description: 'Значение не соответствует требуемому формату'
    },
    email: {
      code: 'VAL_007',
      message: 'Неверный формат email',
      description: 'Введите корректный email адрес'
    },
    phone: {
      code: 'VAL_008',
      message: 'Неверный формат телефона',
      description: 'Введите корректный номер телефона в формате +996 XXX XXX XXX'
    },
    password: {
      code: 'VAL_009',
      message: 'Неверный формат пароля',
      description: 'Пароль должен содержать минимум 8 символов, включая заглавные и строчные буквы, цифры и специальные символы'
    },
    vin: {
      code: 'VAL_010',
      message: 'Неверный формат VIN',
      description: 'Введите корректный VIN номер'
    }
  },

  // File errors
  file: {
    tooLarge: {
      code: 'FILE_001',
      message: 'Файл слишком большой',
      description: 'Размер файла не должен превышать {max} МБ'
    },
    invalidType: {
      code: 'FILE_002',
      message: 'Неверный тип файла',
      description: 'Поддерживаются только следующие типы файлов: {types}'
    },
    tooMany: {
      code: 'FILE_003',
      message: 'Слишком много файлов',
      description: 'Можно загрузить не более {max} файлов'
    },
    uploadFailed: {
      code: 'FILE_004',
      message: 'Ошибка загрузки',
      description: 'Не удалось загрузить файл. Попробуйте еще раз'
    },
    deleteFailed: {
      code: 'FILE_005',
      message: 'Ошибка удаления',
      description: 'Не удалось удалить файл. Попробуйте еще раз'
    }
  },

  // API errors
  api: {
    serverError: {
      code: 'API_001',
      message: 'Ошибка сервера',
      description: 'Произошла внутренняя ошибка сервера. Попробуйте позже'
    },
    networkError: {
      code: 'API_002',
      message: 'Ошибка сети',
      description: 'Не удалось подключиться к серверу. Проверьте подключение к интернету'
    },
    timeout: {
      code: 'API_003',
      message: 'Таймаут',
      description: 'Превышено время ожидания ответа от сервера'
    },
    notFound: {
      code: 'API_004',
      message: 'Не найдено',
      description: 'Запрашиваемый ресурс не найден'
    },
    forbidden: {
      code: 'API_005',
      message: 'Доступ запрещен',
      description: 'У вас нет прав для доступа к этому ресурсу'
    },
    unauthorized: {
      code: 'API_006',
      message: 'Требуется авторизация',
      description: 'Для доступа к этому ресурсу требуется авторизация'
    },
    badRequest: {
      code: 'API_007',
      message: 'Неверный запрос',
      description: 'Проверьте правильность введенных данных'
    },
    conflict: {
      code: 'API_008',
      message: 'Конфликт',
      description: 'Запрос конфликтует с текущим состоянием сервера'
    },
    tooManyRequests: {
      code: 'API_009',
      message: 'Слишком много запросов',
      description: 'Превышен лимит запросов. Попробуйте позже'
    },
    maintenance: {
      code: 'API_010',
      message: 'Технические работы',
      description: 'Сервер временно недоступен из-за технических работ'
    }
  },

  // Business errors
  business: {
    insufficientFunds: {
      code: 'BUS_001',
      message: 'Недостаточно средств',
      description: 'На вашем балансе недостаточно средств для выполнения операции'
    },
    itemNotFound: {
      code: 'BUS_002',
      message: 'Товар не найден',
      description: 'Запрашиваемый товар не найден или был удален'
    },
    itemSold: {
      code: 'BUS_003',
      message: 'Товар продан',
      description: 'Этот товар уже продан'
    },
    itemReserved: {
      code: 'BUS_004',
      message: 'Товар зарезервирован',
      description: 'Этот товар зарезервирован другим покупателем'
    },
    invalidPrice: {
      code: 'BUS_005',
      message: 'Неверная цена',
      description: 'Указанная цена не соответствует текущей цене товара'
    },
    invalidQuantity: {
      code: 'BUS_006',
      message: 'Неверное количество',
      description: 'Указанное количество товара недоступно'
    },
    invalidPromo: {
      code: 'BUS_007',
      message: 'Неверный промокод',
      description: 'Указанный промокод недействителен или истек'
    },
    promoUsed: {
      code: 'BUS_008',
      message: 'Промокод использован',
      description: 'Этот промокод уже был использован'
    },
    invalidAddress: {
      code: 'BUS_009',
      message: 'Неверный адрес',
      description: 'Указанный адрес не найден или недоступен для доставки'
    },
    deliveryUnavailable: {
      code: 'BUS_010',
      message: 'Доставка недоступна',
      description: 'Доставка в указанный регион временно недоступна'
    }
  },

  // System errors
  system: {
    unknown: {
      code: 'SYS_001',
      message: 'Неизвестная ошибка',
      description: 'Произошла неизвестная ошибка. Попробуйте позже'
    },
    database: {
      code: 'SYS_002',
      message: 'Ошибка базы данных',
      description: 'Произошла ошибка при работе с базой данных'
    },
    cache: {
      code: 'SYS_003',
      message: 'Ошибка кэша',
      description: 'Произошла ошибка при работе с кэшем'
    },
    storage: {
      code: 'SYS_004',
      message: 'Ошибка хранилища',
      description: 'Произошла ошибка при работе с хранилищем'
    },
    queue: {
      code: 'SYS_005',
      message: 'Ошибка очереди',
      description: 'Произошла ошибка при работе с очередью'
    },
    email: {
      code: 'SYS_006',
      message: 'Ошибка отправки email',
      description: 'Не удалось отправить email'
    },
    sms: {
      code: 'SYS_007',
      message: 'Ошибка отправки SMS',
      description: 'Не удалось отправить SMS'
    },
    push: {
      code: 'SYS_008',
      message: 'Ошибка отправки push-уведомления',
      description: 'Не удалось отправить push-уведомление'
    },
    payment: {
      code: 'SYS_009',
      message: 'Ошибка платежной системы',
      description: 'Произошла ошибка при обработке платежа'
    },
    integration: {
      code: 'SYS_010',
      message: 'Ошибка интеграции',
      description: 'Произошла ошибка при работе с внешним сервисом'
    }
  }
}; 