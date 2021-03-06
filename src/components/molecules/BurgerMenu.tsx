import React from "react";

import "../../styles/molecules/BurgerMenu.scss";
import Img from "../../../assets/t.jpeg";
import { ReactComponent as MySvg } from "../../../assets/cashback.svg"
import BurgerMenuLink from "../atoms/BurgerMenuLink";

function BurgerMenu(props: any) {
  const { isVisible, setVisible } = props;

  const changeVisible = () => {
    setVisible(false);
  };

  const links: {title: string, link: string}[] = [
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
            <img src={Img} />
          </button>
        </div>
        <ul className="burger-menu__navs">
          {links.map((link) => (
            <BurgerMenuLink key={link.title} props={link}/>
          ))}
        </ul>
        <div>
          <MySvg />{" "}
          <a href="tel:+375(33)699-86-04" className="burger-menu__phone">
            +375(33)699-86-04
          </a>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
