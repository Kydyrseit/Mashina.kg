import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <Container className="about-page">
      <h1 className="text-center mb-5">О компании Mashina.kg</h1>
      
      <Row className="mb-5">
        <Col md={6}>
          <h2>Наша миссия</h2>
          <p>
            Мы стремимся сделать процесс покупки и продажи автомобилей в Кыргызстане максимально простым, 
            прозрачным и удобным для каждого клиента. С 2010 года мы помогаем людям находить идеальные 
            автомобили по доступным ценам.
          </p>
        </Col>
        <Col md={6}>
          <img 
            src="https://via.placeholder.com/600x400?text=About+Us" 
            alt="О компании" 
            className="img-fluid rounded"
          />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>Качество</Card.Title>
              <Card.Text>
                Все автомобили проходят тщательную проверку перед размещением на сайте
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>Профессионализм</Card.Title>
              <Card.Text>
                Наши специалисты помогут выбрать идеальный автомобиль для ваших потребностей
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>Поддержка</Card.Title>
              <Card.Text>
                Мы обеспечиваем полную поддержку на всех этапах покупки и после нее
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <h2 className="mb-4">Наши преимущества</h2>
          <ul className="advantages-list">
            <li>Широкий выбор автомобилей различных марок и моделей</li>
            <li>Прозрачные цены без скрытых платежей</li>
            <li>Возможность тест-драйва перед покупкой</li>
            <li>Помощь в оформлении кредита</li>
            <li>Постпродажное обслуживание</li>
            <li>Бесплатная консультация специалистов</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About; 