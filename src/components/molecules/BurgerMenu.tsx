import React from "react";

import "../../styles/molecules/BurgerMenu.scss";
import Img from "../../../assets/t.jpeg";
import { ReactComponent as MySvg } from "../../../assets/cashback.svg";
import BurgerMenuLink from "../atoms/BurgerMenuLink";

interface Props {
  isVisible: boolean;
  setVisible: any;
}
function BurgerMenu(props: Props): JSX.Element {
  const { isVisible, setVisible } = props;

  const changeVisible = () => setVisible(false);

  const links: { title: string; link: string }[] = [
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
            <span className="burger-menu__logotype__orange">kiss</span>
            miss
          </h2>
          <MySvg
            onClick={changeVisible}
            className="burger-menu__button"
            alt="Иконка закрыть"
          />
          <img className="burger-menu_image" src={Img} alt="Закрыть" />
        </div>
        <ul className="burger-menu__links">
          {links.map((link) => (
            <BurgerMenuLink key={link.title} item={link} />
          ))}
        </ul>
        <div>
          <a href="tel:+375(33)699-86-04" className="burger-menu__phone">
            +375(33)999-88-00
          </a>
          <a href="mailto:garage@mail.ru" className="burger-menu__phone">
            garage@mail.ru
          </a>
          <div>
            <MySvg className="burger-menu__button" alt="Иконка закрыть" />
            <MySvg className="burger-menu__button" alt="Иконка закрыть" />
            <MySvg className="burger-menu__button" alt="Иконка закрыть" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
