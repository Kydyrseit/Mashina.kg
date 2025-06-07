import React from "react";
import { Nav, Dropdown, Container } from "react-bootstrap";
import "./CategoriesMenu.css";

const menuData = {
  Легковые: ["Новые авто", "Все легковые"],
  Коммерческие: ["Все коммерческие"],
  Спецтехника: [
    "Автокраны", "Бульдозеры", "Автопогрузчики", "Экскаваторы",
    "Сельхоз-техника", "Коммунальная техника", "Самопогрузчики", "Строительная техника"
  ],
  Мото: ["Мотоциклы", "Багги", "Квадроциклы", "Мопеды и скутеры"],
  Автобизнес: ["Официальные дилеры"],
  Запчасти: ["Шины", "Диски", "Аксессуары"],
  Услуги: ["СТО", "Мойка", "Эвакуатор"],
  Куплю: [],
  "Проверить авто": []
};

const CategoriesMenu = ({ onSelectCategory }) => {
  return (
    <div className="category-bar">
      <Container>
        <Nav className="justify-content-center flex-wrap">
          {Object.entries(menuData).map(([category, subCategories], index) => (
            subCategories.length > 0 ? (
              <Dropdown
                key={index}
                as={Nav.Item}
                className="category-item"
                autoClose="inside"
              >
                <Dropdown.Toggle as={Nav.Link}>
                  {category}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {subCategories.map((sub, i) => (
                    <Dropdown.Item
                      key={i}
                      onClick={() => onSelectCategory(`${category} > ${sub}`)}
                    >
                      {sub}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Nav.Item key={index} className="category-item">
                <Nav.Link onClick={() => onSelectCategory(category)}>
                  {category}
                </Nav.Link>
              </Nav.Item>
            )
          ))}
        </Nav>
      </Container>
    </div>
  );
};

export default CategoriesMenu;
