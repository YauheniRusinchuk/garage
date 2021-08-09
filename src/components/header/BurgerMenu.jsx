import React from "react";

import "../../styles/header/BurgerMenu.scss";

function BurgerMenu(props) {
  const { isVisible, setVisible } = props;

  const changeVisible = () => {
    setVisible(false);
  };

  const links = [
    { title: "Главная", link: "https://www.google.com/" },
    { title: "О нас", link: "https://www.google.com/" },
    { title: "Каталог", link: "https://www.google.com/" },
    { title: "Цены", link: "https://www.google.com/" },
    { title: "Бонусы", link: "https://www.google.com/" },
    { title: "Контакты", link: "https://www.google.com/" },
    { title: "Как проехать", link: "https://www.google.com/" },
  ];

  return (
    <>
      <div className="burger-menu">
        <div className="burger-menu__header">
          <h2 className="burger-menu__logotype">
            <span className="burger-menu__logotype__orange">G</span>ARAGE
          </h2>
          <button onClick={changeVisible} className="burger-menu__button">
            <img src="../../assets/image/burgerMenu/closeModalMenu.png" />
          </button>
        </div>
        <div className="burger-menu__links">
          {links.map((link) =>
          <li key={link.title}>{link.title}</li>
          )}
        </div>
        <div>
          {/* <ReactSVG src={SvgLogo} /> */}
          <a href="tel:+375(33)699-86-04" className="burger-menu__phone">
            +375(33)699-86-04
          </a>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
