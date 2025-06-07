import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CarCarousel = ({ images = [], carId = 0, description = "" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/car/${carId}`);
  };

  return (
    <div
      className="carousel-container"
      onClick={handleClick}
      style={{
        cursor: "pointer",
        width: "160px",
        textAlign: "center",
        margin: "0 auto"
      }}
    >
      <Carousel controls indicators={false} interval={null} fade={false}>
        {images.length > 0 ? (
          images.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                src={img.url || img} // если приходит строка — подхватим её тоже
                alt={`Car ${index}`}
                style={{
                  width: "150px",
                  height: "124px",
                  objectFit: "cover",
                  display: "block",
                  margin: "0 auto",
                  borderRadius: "8px"
                }}
              />
            </Carousel.Item>
          ))
        ) : (
          <Carousel.Item>
            <div
              style={{
                width: "150px",
                height: "124px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
                fontSize: "12px",
                borderRadius: "8px"
              }}
            >
              Нет изображений
            </div>
          </Carousel.Item>
        )}
      </Carousel>

      {description && (
        <div
          style={{
            marginTop: "6px",
            fontSize: "0.8em",
            color: "#444",
            lineHeight: "1.2"
          }}
        >
          {description}
        </div>
      )}
    </div>
  );
};

export default CarCarousel;
