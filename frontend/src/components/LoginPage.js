import React from 'react';

const LoginPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Авторизация</h2>
      <input type="text" placeholder="Логин или номер телефона" style={{ margin: '10px' }} />
      <input type="password" placeholder="Пароль" style={{ margin: '10px' }} />
      <br />
      <button>Войти</button>
      <p style={{ marginTop: '20px' }}>Или авторизация через OTP (в разработке)</p>
    </div>
  );
};

export default LoginPage;
