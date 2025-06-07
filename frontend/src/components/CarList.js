import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';
import CarCard from './CarCard';

const CarList = ({ category }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/cars/')
      .then(res => {
        const allCars = res.data;
        if (category) {
          const filtered = allCars.filter(car =>
            car.brand && car.brand.toLowerCase().includes(category.toLowerCase())
          );
          setCars(filtered);
        } else {
          setCars(allCars);
        }
      })
      .catch(err => {
        console.error('Ошибка при загрузке машин:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="my-4">Список машин</h1>
      <Row>
        {cars.map(car => (
          <Col key={car.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <CarCard car={car} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CarList;
