import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const cars = [
    {
      id: 1,
      title: 'Toyota Camry',
      price: '25000',
      year: '2020',
      mileage: '45000',
      transmission: 'Автомат',
      fuel: 'Бензин',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'Honda Accord',
      price: '22000',
      year: '2019',
      mileage: '60000',
      transmission: 'Автомат',
      fuel: 'Бензин',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'BMW X5',
      price: '45000',
      year: '2021',
      mileage: '30000',
      transmission: 'Автомат',
      fuel: 'Дизель',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 4,
      title: 'Mercedes-Benz C-Class',
      price: '35000',
      year: '2020',
      mileage: '40000',
      transmission: 'Автомат',
      fuel: 'Бензин',
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  const commercial = [
    {
      id: 1,
      title: 'Mercedes-Benz Sprinter',
      price: '35000',
      year: '2019',
      mileage: '80000',
      transmission: 'Механика',
      fuel: 'Дизель',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'Volkswagen Crafter',
      price: '40000',
      year: '2020',
      mileage: '50000',
      transmission: 'Механика',
      fuel: 'Дизель',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'Ford Transit',
      price: '30000',
      year: '2018',
      mileage: '100000',
      transmission: 'Механика',
      fuel: 'Дизель',
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  const moto = [
    {
      id: 1,
      title: 'Honda CBR 600RR',
      price: '12000',
      year: '2020',
      mileage: '15000',
      engine: '600cc',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'Yamaha R1',
      price: '15000',
      year: '2021',
      mileage: '5000',
      engine: '1000cc',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'Kawasaki Ninja 400',
      price: '8000',
      year: '2019',
      mileage: '20000',
      engine: '400cc',
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  const parts = [
    {
      id: 1,
      title: 'Двигатель Toyota 2JZ',
      price: '5000',
      condition: 'Б/у',
      compatibility: 'Toyota Supra',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'КПП BMW M3',
      price: '3000',
      condition: 'Новый',
      compatibility: 'BMW M3 E46',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'Тормозные колодки Brembo',
      price: '200',
      condition: 'Новый',
      compatibility: 'Универсальные',
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  const categories = [
    { id: 1, title: 'Легковые', icon: '🚗', count: '1,234', items: cars },
    { id: 2, title: 'Коммерческие', icon: '🚚', count: '456', items: commercial },
    { id: 3, title: 'Мото', icon: '🏍️', count: '789', items: moto },
    { id: 4, title: 'Запчасти', icon: '🔧', count: '2,345', items: parts }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Найдите свой идеальный автомобиль</h1>
          <p>Самая большая база автомобилей в Кыргызстане</p>
          <div className="search-box">
            <input type="text" placeholder="Поиск по марке, модели или году..." />
            <button className="search-button">Поиск</button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Категории</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <div key={category.id} className="category-card">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.title}</h3>
              <p>{category.count} объявлений</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="featured-cars">
        <div className="section-header">
          <h2>Популярные автомобили</h2>
          <Link to="/cars" className="view-all">Смотреть все</Link>
        </div>
        <div className="cars-grid">
          {cars.map(car => (
            <div key={car.id} className="car-card">
              <div className="car-image">
                <img src={car.image} alt={car.title} />
                <span className="car-year">{car.year}</span>
              </div>
              <div className="car-info">
                <h3>{car.title}</h3>
                <div className="car-details">
                  <span>Пробег: {car.mileage} км</span>
                  <span>{car.transmission}</span>
                  <span>{car.fuel}</span>
                </div>
                <div className="car-price">
                  <span className="price">${car.price}</span>
                  <button className="favorite-button">❤️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commercial Vehicles Section */}
      <section className="featured-cars">
        <div className="section-header">
          <h2>Коммерческие автомобили</h2>
          <Link to="/commercial" className="view-all">Смотреть все</Link>
        </div>
        <div className="cars-grid">
          {commercial.map(vehicle => (
            <div key={vehicle.id} className="car-card">
              <div className="car-image">
                <img src={vehicle.image} alt={vehicle.title} />
                <span className="car-year">{vehicle.year}</span>
              </div>
              <div className="car-info">
                <h3>{vehicle.title}</h3>
                <div className="car-details">
                  <span>Пробег: {vehicle.mileage} км</span>
                  <span>{vehicle.transmission}</span>
                  <span>{vehicle.fuel}</span>
                </div>
                <div className="car-price">
                  <span className="price">${vehicle.price}</span>
                  <button className="favorite-button">❤️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Motorcycles Section */}
      <section className="featured-cars">
        <div className="section-header">
          <h2>Мотоциклы</h2>
          <Link to="/moto" className="view-all">Смотреть все</Link>
        </div>
        <div className="cars-grid">
          {moto.map(bike => (
            <div key={bike.id} className="car-card">
              <div className="car-image">
                <img src={bike.image} alt={bike.title} />
                <span className="car-year">{bike.year}</span>
              </div>
              <div className="car-info">
                <h3>{bike.title}</h3>
                <div className="car-details">
                  <span>Пробег: {bike.mileage} км</span>
                  <span>{bike.engine}</span>
                </div>
                <div className="car-price">
                  <span className="price">${bike.price}</span>
                  <button className="favorite-button">❤️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parts Section */}
      <section className="featured-cars">
        <div className="section-header">
          <h2>Запчасти</h2>
          <Link to="/parts" className="view-all">Смотреть все</Link>
        </div>
        <div className="cars-grid">
          {parts.map(part => (
            <div key={part.id} className="car-card">
              <div className="car-image">
                <img src={part.image} alt={part.title} />
                <span className="car-year">{part.condition}</span>
              </div>
              <div className="car-info">
                <h3>{part.title}</h3>
                <div className="car-details">
                  <span>Состояние: {part.condition}</span>
                  <span>Совместимость: {part.compatibility}</span>
                </div>
                <div className="car-price">
                  <span className="price">${part.price}</span>
                  <button className="favorite-button">❤️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <span className="feature-icon">🔒</span>
          <h3>Безопасные сделки</h3>
          <p>Гарантированная безопасность при покупке и продаже</p>
        </div>
        <div className="feature">
          <span className="feature-icon">📱</span>
          <h3>Мобильное приложение</h3>
          <p>Удобный доступ с любого устройства</p>
        </div>
        <div className="feature">
          <span className="feature-icon">💬</span>
          <h3>Поддержка 24/7</h3>
          <p>Всегда готовы помочь вам</p>
        </div>
      </section>
    </div>
  );
}

export default Home; 