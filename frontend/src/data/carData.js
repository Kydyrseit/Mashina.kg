const cars = [
  {
    id: 1,
    brand: "BMW",
    model: "X7",
    price: 85000,
    year: "2023",
    mileage: "30 000 км",
    bodyType: "внедорожник 5 дв.",
    color: "белый",
    engine: "3.0 л / бензин",
    description: "BMW X7 40i XDrive — белый цвет, черный кожаный салон, панорамный люк, камера 360 из США.",
    comment: "Купил за 120$, срочно продаю за 85000$. Тел: 0773 18.88.88",
    images: [
      { url: process.env.PUBLIC_URL + "/images/bmwX5.jpg" },
      { url: process.env.PUBLIC_URL + "/images/bmwX5.1.jpg" },
      { url: process.env.PUBLIC_URL + "/images/bmwX5.2.jpg" },
      { url: process.env.PUBLIC_URL + "/images/bmwX5.3.jpg" },
      { url: process.env.PUBLIC_URL + "/images/bmwX5.4.jpg" },
      { url: process.env.PUBLIC_URL + "/images/bmwX5.5.jpg" },
      { url: process.env.PUBLIC_URL + "/images/bmwX5.6.jpg" }
    ]
  },
  {
    id: 2,
    brand: "Mercedes",
    model: "GLS",
    price: 75000,
    year: "2022",
    mileage: "35 700 км",
    bodyType: "внедорожник 5 дв.",
    color: "черный",
    engine: "3.0 л / бензин",
    description: "GLS — обвес, тонировка, спойлер, литые диски, панорамная крыша.",
    comment: "Обмен не предлагать. В пути. Регион: Китай.",
    images: [
      { url: process.env.PUBLIC_URL + "/images/GLS.1.jpg" },
      { url: process.env.PUBLIC_URL + "/images/GLS.2.jpg" },
      { url: process.env.PUBLIC_URL + "/images/GLS.3.jpg" },
      { url: process.env.PUBLIC_URL + "/images/GLS.4.jpg" },
      { url: process.env.PUBLIC_URL + "/images/GLS.5.jpg" }
    ]
  },
  {
    id: 3,
    brand: "Lexus",
    model: "ES",
    price: 33000,
    year: "2017",
    mileage: "114 000 км",
    bodyType: "седан",
    color: "белый",
    engine: "2.5 л / гибрид",
    description: "Lexus ES в идеальном состоянии, один хозяин, без вложений.",
    comment: "Торг уместен. Не спешу с продажей. Тел: 0551 909237",
    images: [
      { url: process.env.PUBLIC_URL + "/images/LexusES.1.jpg" },
      { url: process.env.PUBLIC_URL + "/images/LexusES.2.jpg" },
      { url: process.env.PUBLIC_URL + "/images/LexusES.3.jpg" },
      { url: process.env.PUBLIC_URL + "/images/LexusES.4.jpg" },
      { url: process.env.PUBLIC_URL + "/images/LexusES.5.jpg" }
    ]
  },
  {
    id: 4,
    brand: "Toyota",
    model: "Sequoia",
    price: 52000,
    year: "2018",
    mileage: "73 000 км",
    bodyType: "внедорожник 5 дв.",
    color: "белый",
    engine: "5.7 л / бензин",
    description: "Sequoia в идеале. Гаражное хранение, дорогая шумоизоляция, сигнализация с телефона.",
    comment: "Срочно срочно! Без ключевой доступ, камера перед/зад. Небольшой торг.",
    images: [
      { url: process.env.PUBLIC_URL + "/images/Sequoia.1.jpg" },
      { url: process.env.PUBLIC_URL + "/images/Sequoia.2.jpg" },
      { url: process.env.PUBLIC_URL + "/images/Sequoia.3.jpg" },
      { url: process.env.PUBLIC_URL + "/images/Sequoia.4.jpg" },
      { url: process.env.PUBLIC_URL + "/images/Sequoia.5.jpg" }
    ]
  },
  {
    id: 5,
    brand: "Hyundai",
    model: "Sonata Hybrid",
    price: 10000,
    year: "2018",
    mileage: "141 000 км",
    bodyType: "седан",
    color: "черный",
    engine: "2.0 л / гибрид",
    description: "Экономичная Sonata Hybrid — расход 6-7 л/100 км, полный электропакет.",
    comment: "Цена 10 000 $. Торг при встрече. Тел: +996 706 69 90 01",
    images: [
      { url: process.env.PUBLIC_URL + "/images/Sonata.1.jpg" },
      { url: process.env.PUBLIC_URL + "/images/Sonata.2.jpg" },
      { url: process.env.PUBLIC_URL + "/images/Sonata.3.jpg" },
      { url: process.env.PUBLIC_URL + "/images/Sonata.4.jpg" }
    ]
  },
  {
    id: 6,
    brand: "Audi",
    model: "A8 (D5) Рестайлинг",
    price: 68000,
    year: "2022",
    mileage: "11 900 км",
    bodyType: "седан",
    color: "черный",
    engine: "3.0 л / бензин",
    description: "Audi A8 рестайлинг — люк, обвес, литые диски, комбинированный салон.",
    comment: "Обмен не предлагать. В пути. Регион: Китай.",
    images: [
      { url: process.env.PUBLIC_URL + "/images/Audi.1.jpg" },
      { url: process.env.PUBLIC_URL + "/images/Audi.2.jpg" },
      { url: process.env.PUBLIC_URL + "/images/Audi.3.jpg" },
      { url: process.env.PUBLIC_URL + "/images/Audi.4.jpg" },
      { url: process.env.PUBLIC_URL + "/images/Audi.5.jpg" }
    ]
  }
];

export default cars;
