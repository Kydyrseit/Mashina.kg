export const validation = {
  required: {
    value: true,
    message: 'Это поле обязательно для заполнения'
  },
  email: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Введите корректный email адрес'
  },
  password: {
    minLength: {
      value: 8,
      message: 'Пароль должен содержать минимум 8 символов'
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message: 'Пароль должен содержать минимум одну заглавную букву, одну строчную букву, одну цифру и один специальный символ'
    }
  },
  phone: {
    pattern: {
      value: /^\+996\s?\d{3}\s?\d{3}\s?\d{3}$/,
      message: 'Введите корректный номер телефона в формате +996 XXX XXX XXX'
    }
  },
  price: {
    min: {
      value: 0,
      message: 'Цена не может быть отрицательной'
    },
    max: {
      value: 1000000,
      message: 'Цена не может превышать 1 000 000'
    }
  },
  year: {
    min: {
      value: 1900,
      message: 'Год не может быть меньше 1900'
    },
    max: {
      value: new Date().getFullYear() + 1,
      message: 'Год не может быть больше текущего года'
    }
  },
  mileage: {
    min: {
      value: 0,
      message: 'Пробег не может быть отрицательным'
    },
    max: {
      value: 1000000,
      message: 'Пробег не может превышать 1 000 000'
    }
  },
  vin: {
    pattern: {
      value: /^[A-HJ-NPR-Z0-9]{17}$/,
      message: 'Введите корректный VIN номер'
    }
  },
  engine: {
    min: {
      value: 0.1,
      message: 'Объем двигателя не может быть меньше 0.1'
    },
    max: {
      value: 10,
      message: 'Объем двигателя не может превышать 10'
    }
  },
  power: {
    min: {
      value: 1,
      message: 'Мощность не может быть меньше 1'
    },
    max: {
      value: 2000,
      message: 'Мощность не может превышать 2000'
    }
  },
  description: {
    minLength: {
      value: 10,
      message: 'Описание должно содержать минимум 10 символов'
    },
    maxLength: {
      value: 5000,
      message: 'Описание не может превышать 5000 символов'
    }
  },
  title: {
    minLength: {
      value: 3,
      message: 'Заголовок должен содержать минимум 3 символа'
    },
    maxLength: {
      value: 100,
      message: 'Заголовок не может превышать 100 символов'
    }
  },
  message: {
    minLength: {
      value: 1,
      message: 'Сообщение не может быть пустым'
    },
    maxLength: {
      value: 1000,
      message: 'Сообщение не может превышать 1000 символов'
    }
  },
  review: {
    minLength: {
      value: 10,
      message: 'Отзыв должен содержать минимум 10 символов'
    },
    maxLength: {
      value: 1000,
      message: 'Отзыв не может превышать 1000 символов'
    }
  },
  rating: {
    min: {
      value: 1,
      message: 'Оценка не может быть меньше 1'
    },
    max: {
      value: 5,
      message: 'Оценка не может превышать 5'
    }
  }
}; 