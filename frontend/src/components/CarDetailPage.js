import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CarCarousel from "./CarCarousel";
import axios from "axios";

const CarDetailPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/cars/${id}/`)
      .then(response => {
        // Если images — строки, превращаем в объекты
        const carData = {
          ...response.data,
          images: response.data.images
            ? response.data.images.map(img => typeof img === "string" ? { url: img } : img)
            : []
        };
        setCar(carData);
      })
      .catch(error => {
        console.error("Ошибка при загрузке машины:", error);
      });
  }, [id]);

  if (!car) return <p style={{ padding: "20px" }}>Машина не найдена или загружается…</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Назад к списку</Link>
      <h2>{car.brand} {car.model}</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <CarCarousel images={car.images} carId={car.id} />
        <div style={{ maxWidth: "400px" }}>
          <p><strong>Год выпуска:</strong> {car.year}</p>
          <p><strong>Пробег:</strong> {car.mileage}</p>
          <p><strong>Кузов:</strong> {car.bodyType}</p>
          <p><strong>Цвет:</strong> {car.color}</p>
          <p><strong>Двигатель:</strong> {car.engine}</p>
          <p><strong>Цена:</strong> {car.price} USD</p>
          <p><strong>Описание:</strong> {car.description}</p>
          <p><strong>Комментарий продавца:</strong> {car.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
