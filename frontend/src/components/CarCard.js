import React from "react";
import CarCarousel from "./CarCarousel";

const CarCard = ({ car }) => {
  const images = car.images
    ? car.images.map(img => (typeof img === "string" ? { url: img } : img))
    : [];

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <CarCarousel images={images} carId={car.id} />
      <h5 style={{ marginTop: "20px" }}>{car.brand} {car.model}</h5>
      <p>{car.price} USD</p>
    </div>
  );
};

export default CarCard;
