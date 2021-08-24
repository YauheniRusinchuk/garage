import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/organisms/Main.scss";

const itemsMenu: any[] = [
  { id: 1, label: "Галерея" },
  { id: 2, label: "Как проехать?" },
  { id: 3, label: "Расчет стоимости" },
  { id: 4, label: "Расточка дисков" },
  { id: 5, label: "Контакты" },
];

const Main = () => {
  const settings = {
    dots: false,
    speed: 500,
    className: "slider variable-width",
    variableWidth: true,
    infinity: false,
    arrows: false,
  };

  return (
    <div className="main">
      <div className="main-nav__wrapper">
        <Slider {...settings}>
          {itemsMenu.map((item: any) => (
            <div key={item.id}>
              <p className="main-nav__item">{item.label}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Main;
