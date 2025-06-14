import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './Cars.css';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    brand: '',
    priceFrom: '',
    priceTo: '',
    yearFrom: '',
    yearTo: ''
  });

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('/api/cars/');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
      // Временные данные для демонстрации
      setCars([
        {
          id: 1,
          brand: 'Toyota',
          model: 'Camry',
          year: 2020,
          price: 1500000,
          mileage: 50000,
          image: 'https://via.placeholder.com/300x200?text=Toyota+Camry'
        },
        {
          id: 2,
          brand: 'Honda',
          model: 'Accord',
          year: 2019,
          price: 1300000,
          mileage: 60000,
          image: 'https://via.placeholder.com/300x200?text=Honda+Accord'
        }
      ]);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const filteredCars = cars.filter(car => {
    return (
      (!filters.brand || car.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
      (!filters.priceFrom || car.price >= parseInt(filters.priceFrom)) &&
      (!filters.priceTo || car.price <= parseInt(filters.priceTo)) &&
      (!filters.yearFrom || car.year >= parseInt(filters.yearFrom)) &&
      (!filters.yearTo || car.year <= parseInt(filters.yearTo))
    );
  });

  return (
    <Container className="cars-page">
      <Row>
        <Col md={3}>
          <div className="filters-section">
            <h4>Фильтры</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Марка</Form.Label>
                <Form.Control
                  type="text"
                  name="brand"
                  value={filters.brand}
                  onChange={handleFilterChange}
                  placeholder="Введите марку"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Цена от</Form.Label>
                <Form.Control
                  type="number"
                  name="priceFrom"
                  value={filters.priceFrom}
                  onChange={handleFilterChange}
                  placeholder="Цена от"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Цена до</Form.Label>
                <Form.Control
                  type="number"
                  name="priceTo"
                  value={filters.priceTo}
                  onChange={handleFilterChange}
                  placeholder="Цена до"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Год от</Form.Label>
                <Form.Control
                  type="number"
                  name="yearFrom"
                  value={filters.yearFrom}
                  onChange={handleFilterChange}
                  placeholder="Год от"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Год до</Form.Label>
                <Form.Control
                  type="number"
                  name="yearTo"
                  value={filters.yearTo}
                  onChange={handleFilterChange}
                  placeholder="Год до"
                />
              </Form.Group>

              <Button variant="primary" className="w-100">
                Применить фильтры
              </Button>
            </Form>
          </div>
        </Col>

        <Col md={9}>
          <Row>
            {filteredCars.map(car => (
              <Col md={4} key={car.id} className="mb-4">
                <Card className="car-card">
                  <Card.Img variant="top" src={car.image} alt={`${car.brand} ${car.model}`} />
                  <Card.Body>
                    <Card.Title>{car.brand} {car.model}</Card.Title>
                    <Card.Text>
                      <div className="price">{car.price.toLocaleString()} сом</div>
                      <div className="details">
                        <span>{car.year} год</span>
                        <span>{car.mileage.toLocaleString()} км</span>
                      </div>
                    </Card.Text>
                    <Button variant="outline-primary" className="w-100">
                      Подробнее
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Cars; 