import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import CategoriesMenu from './components/CategoriesMenu';
import FilterSearch from './components/FilterSearch';
import CarList from './components/CarList';
import CarDetailPage from './components/CarDetailPage';
import LoginPage from './components/LoginPage';

function App() {
  const [category, setCategory] = useState('');

  const handleCategorySelect = (category) => {
    setCategory(category);
  };

  return (
    <div className="app-container">
      <Header />
      <CategoriesMenu onSelectCategory={handleCategorySelect} />
      <FilterSearch />

      <Routes>
        <Route path="/" element={<CarList category={category} />} />
        <Route path="/car/:id" element={<CarDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
