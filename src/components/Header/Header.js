import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">Mashina.kg</Link>
        <div className="nav-links">
          <Link to="/cars">Машины</Link>
          <Link to="/commercial">Коммерческие</Link>
          <Link to="/moto">Мото</Link>
          <Link to="/parts">Запчасти</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/news">Новости</Link>
          <Link to="/about">О нас</Link>
          <Link to="/contact">Контакты</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header; 