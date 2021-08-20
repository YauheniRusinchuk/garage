import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/organisms/Main.scss";

function Main(): JSX.Element {
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
          <div>
            <p className="main-nav__item">Галерея</p>
          </div>
          <div>
            <p className="main-nav__item">Как проехать?</p>
          </div>
          <div>
            <p className="main-nav__item">Расчет стоимости</p>
          </div>
          <div>
            <p className="main-nav__item">Расточка дисков</p>
          </div>
          <div>
            <p className="main-nav__item">Контакты</p>
          </div>
          <div>
            <p className="main-nav__item">ПРивет я ОЛЕХ</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Main;
