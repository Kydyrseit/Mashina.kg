import React, { useState } from "react";
import "./FilterSearch.css";

const FilterSearch = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(formData);
    } else {
      console.log("Поиск: ", formData);
    }
  };

  return (
    <div className="filter-search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="brand"
          placeholder="Марка"
          value={formData.brand}
          onChange={handleChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Модель"
          value={formData.model}
          onChange={handleChange}
        />
        <input
          type="number"
          name="year"
          placeholder="Год"
          value={formData.year}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Цена"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Поиск</button>
      </form>
    </div>
  );
};

export default FilterSearch;
