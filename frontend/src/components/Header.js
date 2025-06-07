import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div style={{ padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
    <h2>Автосалон</h2>
    <Link to="/login">Вход</Link>
  </div>
);

export default Header;
