export const notifications = {
  // Success notifications
  success: {
    login: {
      title: 'Вход выполнен',
      message: 'Вы успешно вошли в систему',
      type: 'success',
      duration: 3000
    },
    register: {
      title: 'Регистрация завершена',
      message: 'Вы успешно зарегистрировались',
      type: 'success',
      duration: 3000
    },
    logout: {
      title: 'Выход выполнен',
      message: 'Вы успешно вышли из системы',
      type: 'success',
      duration: 3000
    },
    passwordReset: {
      title: 'Пароль сброшен',
      message: 'Ваш пароль успешно сброшен',
      type: 'success',
      duration: 3000
    },
    profileUpdate: {
      title: 'Профиль обновлен',
      message: 'Ваш профиль успешно обновлен',
      type: 'success',
      duration: 3000
    },
    carCreate: {
      title: 'Объявление создано',
      message: 'Ваше объявление успешно создано',
      type: 'success',
      duration: 3000
    },
    carUpdate: {
      title: 'Объявление обновлено',
      message: 'Ваше объявление успешно обновлено',
      type: 'success',
      duration: 3000
    },
    carDelete: {
      title: 'Объявление удалено',
      message: 'Ваше объявление успешно удалено',
      type: 'success',
      duration: 3000
    },
    favoriteAdd: {
      title: 'Добавлено в избранное',
      message: 'Объявление добавлено в избранное',
      type: 'success',
      duration: 3000
    },
    favoriteRemove: {
      title: 'Удалено из избранного',
      message: 'Объявление удалено из избранного',
      type: 'success',
      duration: 3000
    },
    messageSend: {
      title: 'Сообщение отправлено',
      message: 'Ваше сообщение успешно отправлено',
      type: 'success',
      duration: 3000
    },
    reviewCreate: {
      title: 'Отзыв создан',
      message: 'Ваш отзыв успешно создан',
      type: 'success',
      duration: 3000
    },
    reviewUpdate: {
      title: 'Отзыв обновлен',
      message: 'Ваш отзыв успешно обновлен',
      type: 'success',
      duration: 3000
    },
    reviewDelete: {
      title: 'Отзыв удален',
      message: 'Ваш отзыв успешно удален',
      type: 'success',
      duration: 3000
    }
  },

  // Error notifications
  error: {
    login: {
      title: 'Ошибка входа',
      message: 'Не удалось войти в систему',
      type: 'error',
      duration: 5000
    },
    register: {
      title: 'Ошибка регистрации',
      message: 'Не удалось зарегистрироваться',
      type: 'error',
      duration: 5000
    },
    logout: {
      title: 'Ошибка выхода',
      message: 'Не удалось выйти из системы',
      type: 'error',
      duration: 5000
    },
    passwordReset: {
      title: 'Ошибка сброса пароля',
      message: 'Не удалось сбросить пароль',
      type: 'error',
      duration: 5000
    },
    profileUpdate: {
      title: 'Ошибка обновления профиля',
      message: 'Не удалось обновить профиль',
      type: 'error',
      duration: 5000
    },
    carCreate: {
      title: 'Ошибка создания объявления',
      message: 'Не удалось создать объявление',
      type: 'error',
      duration: 5000
    },
    carUpdate: {
      title: 'Ошибка обновления объявления',
      message: 'Не удалось обновить объявление',
      type: 'error',
      duration: 5000
    },
    carDelete: {
      title: 'Ошибка удаления объявления',
      message: 'Не удалось удалить объявление',
      type: 'error',
      duration: 5000
    },
    favoriteAdd: {
      title: 'Ошибка добавления в избранное',
      message: 'Не удалось добавить в избранное',
      type: 'error',
      duration: 5000
    },
    favoriteRemove: {
      title: 'Ошибка удаления из избранного',
      message: 'Не удалось удалить из избранного',
      type: 'error',
      duration: 5000
    },
    messageSend: {
      title: 'Ошибка отправки сообщения',
      message: 'Не удалось отправить сообщение',
      type: 'error',
      duration: 5000
    },
    reviewCreate: {
      title: 'Ошибка создания отзыва',
      message: 'Не удалось создать отзыв',
      type: 'error',
      duration: 5000
    },
    reviewUpdate: {
      title: 'Ошибка обновления отзыва',
      message: 'Не удалось обновить отзыв',
      type: 'error',
      duration: 5000
    },
    reviewDelete: {
      title: 'Ошибка удаления отзыва',
      message: 'Не удалось удалить отзыв',
      type: 'error',
      duration: 5000
    }
  },

  // Warning notifications
  warning: {
    sessionExpired: {
      title: 'Сессия истекла',
      message: 'Ваша сессия истекла. Пожалуйста, войдите снова',
      type: 'warning',
      duration: 5000
    },
    unsavedChanges: {
      title: 'Несохраненные изменения',
      message: 'У вас есть несохраненные изменения. Они будут потеряны при выходе',
      type: 'warning',
      duration: 5000
    },
    deleteConfirmation: {
      title: 'Подтверждение удаления',
      message: 'Вы уверены, что хотите удалить этот элемент?',
      type: 'warning',
      duration: 0
    },
    logoutConfirmation: {
      title: 'Подтверждение выхода',
      message: 'Вы уверены, что хотите выйти?',
      type: 'warning',
      duration: 0
    },
    clearFavorites: {
      title: 'Подтверждение очистки',
      message: 'Вы уверены, что хотите очистить избранное?',
      type: 'warning',
      duration: 0
    },
    clearHistory: {
      title: 'Подтверждение очистки',
      message: 'Вы уверены, что хотите очистить историю?',
      type: 'warning',
      duration: 0
    },
    clearCart: {
      title: 'Подтверждение очистки',
      message: 'Вы уверены, что хотите очистить корзину?',
      type: 'warning',
      duration: 0
    },
    clearNotifications: {
      title: 'Подтверждение очистки',
      message: 'Вы уверены, что хотите очистить уведомления?',
      type: 'warning',
      duration: 0
    },
    clearMessages: {
      title: 'Подтверждение очистки',
      message: 'Вы уверены, что хотите очистить сообщения?',
      type: 'warning',
      duration: 0
    },
    clearReviews: {
      title: 'Подтверждение очистки',
      message: 'Вы уверены, что хотите очистить отзывы?',
      type: 'warning',
      duration: 0
    }
  },

  // Info notifications
  info: {
    newMessage: {
      title: 'Новое сообщение',
      message: 'У вас новое сообщение',
      type: 'info',
      duration: 5000
    },
    newNotification: {
      title: 'Новое уведомление',
      message: 'У вас новое уведомление',
      type: 'info',
      duration: 5000
    },
    newReview: {
      title: 'Новый отзыв',
      message: 'У вас новый отзыв',
      type: 'info',
      duration: 5000
    },
    newFavorite: {
      title: 'Новое избранное',
      message: 'Ваше объявление добавлено в избранное',
      type: 'info',
      duration: 5000
    },
    newView: {
      title: 'Новый просмотр',
      message: 'Ваше объявление просмотрели',
      type: 'info',
      duration: 5000
    },
    newLike: {
      title: 'Новый лайк',
      message: 'Ваше объявление понравилось',
      type: 'info',
      duration: 5000
    },
    newComment: {
      title: 'Новый комментарий',
      message: 'У вас новый комментарий',
      type: 'info',
      duration: 5000
    },
    newReply: {
      title: 'Новый ответ',
      message: 'У вас новый ответ на комментарий',
      type: 'info',
      duration: 5000
    },
    newFollower: {
      title: 'Новый подписчик',
      message: 'У вас новый подписчик',
      type: 'info',
      duration: 5000
    },
    newFollowing: {
      title: 'Новая подписка',
      message: 'Вы подписались на нового пользователя',
      type: 'info',
      duration: 5000
    }
  }
}; 