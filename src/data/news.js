export const news = {
  title: 'Новости',
  description: 'Последние новости из мира автомобилей',
  categories: [
    {
      id: 1,
      name: 'Автомобили',
      icon: 'car',
      path: '/news/cars'
    },
    {
      id: 2,
      name: 'Технологии',
      icon: 'microchip',
      path: '/news/tech'
    },
    {
      id: 3,
      name: 'Бизнес',
      icon: 'chart-line',
      path: '/news/business'
    }
  ],
  items: [
    {
      id: 1,
      title: 'Новая Toyota Camry 2024',
      date: '2024-03-15',
      category: 'Автомобили',
      image: 'https://via.placeholder.com/800x400?text=Toyota+Camry+2024',
      summary: 'Представлена новая версия Toyota Camry 2024 года с обновленным дизайном и улучшенной экономичностью.',
      content: 'Toyota представила новую версию Camry 2024 года. Автомобиль получил обновленный дизайн, улучшенную экономичность и новые технологии безопасности. В продажу новая Camry поступит в мае 2024 года.',
      author: {
        name: 'Алексей Петров',
        position: 'Автоэксперт',
        image: 'https://via.placeholder.com/100x100?text=Expert1'
      },
      tags: ['Toyota', 'Camry', 'Новинки', '2024']
    },
    {
      id: 2,
      title: 'Электромобили в Кыргызстане',
      date: '2024-03-10',
      category: 'Технологии',
      image: 'https://via.placeholder.com/800x400?text=Electric+Cars',
      summary: 'Развитие инфраструктуры для электромобилей в Кыргызстане.',
      content: 'В Кыргызстане активно развивается инфраструктура для электромобилей. Уже установлено более 50 зарядных станций в Бишкеке и других крупных городах. Планируется увеличение их количества до 200 к концу года.',
      author: {
        name: 'Мария Иванова',
        position: 'Журналист',
        image: 'https://via.placeholder.com/100x100?text=Expert2'
      },
      tags: ['Электромобили', 'Инфраструктура', 'Кыргызстан']
    },
    {
      id: 3,
      title: 'Авторынок Кыргызстана 2024',
      date: '2024-03-05',
      category: 'Бизнес',
      image: 'https://via.placeholder.com/800x400?text=Car+Market',
      summary: 'Анализ авторынка Кыргызстана за первый квартал 2024 года.',
      content: 'По итогам первого квартала 2024 года авторынок Кыргызстана показал рост на 15% по сравнению с аналогичным периодом прошлого года. Наибольшей популярностью пользуются автомобили японских и корейских производителей.',
      author: {
        name: 'Иван Сидоров',
        position: 'Аналитик',
        image: 'https://via.placeholder.com/100x100?text=Expert3'
      },
      tags: ['Авторынок', 'Статистика', '2024']
    }
  ],
  features: [
    {
      id: 1,
      title: 'Актуальные новости',
      description: 'Самые свежие новости из мира автомобилей',
      icon: 'newspaper'
    },
    {
      id: 2,
      title: 'Экспертные мнения',
      description: 'Комментарии от ведущих экспертов',
      icon: 'user-tie'
    },
    {
      id: 3,
      title: 'Регулярные обновления',
      description: 'Новые материалы каждый день',
      icon: 'clock'
    }
  ],
  subscription: {
    title: 'Подпишитесь на новости',
    description: 'Получайте самые интересные новости на вашу почту',
    form: {
      email: {
        label: 'Ваш email',
        placeholder: 'Введите ваш email',
        required: true
      },
      categories: {
        label: 'Категории новостей',
        options: [
          { value: 'cars', label: 'Автомобили' },
          { value: 'tech', label: 'Технологии' },
          { value: 'business', label: 'Бизнес' }
        ]
      },
      submit: 'Подписаться',
      success: 'Спасибо за подписку!',
      error: 'Произошла ошибка. Пожалуйста, попробуйте позже.'
    }
  }
}; 