import React, { useContext, useEffect } from "react";

import "../../styles/molecules/BurgerMenu.scss";
import Img from "../../../assets/t.jpeg";
import { ReactComponent as Close } from "../../../assets/svg/close.svg";
import { ReactComponent as Instagram } from "../../../assets/svg/instagram.svg";
import { ReactComponent as Mail } from "../../../assets/svg/mail.svg";
import { ReactComponent as Phone } from "../../../assets/svg/phone.svg";
import { ReactComponent as Viber } from "../../../assets/svg/viber.svg";
import { ReactComponent as Vk } from "../../../assets/svg/vk.svg";

import BurgerMenuLink from "../atoms/BurgerMenuLink";
import { GlobalContext } from "../../store/state";

function BurgerMenu(): JSX.Element {
  const {
    changeVisibleBurgerMenu,
  }: {
    changeVisibleBurgerMenu: (value: boolean) => void;
  } = useContext(GlobalContext);

  const links: { title: string; link: string }[] = [
    { title: "Главная", link: "https://www.google.com/" },
    { title: "О нас", link: "https://www.google.com/" },
    { title: "Каталог", link: "https://www.google.com/" },
    { title: "Цены", link: "https://www.google.com/" },
    { title: "Бонусы", link: "https://www.google.com/" },
    { title: "Контакты", link: "https://www.google.com/" },
    { title: "Как проехать", link: "https://www.google.com/" },
  ];
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <>
      <div className="burger-menu">
        <div className="burger-menu__header">
          <div>
            <h2 className="burger-menu__logotype">
              <span className="burger-menu__logotype__orange">G</span>
              ARAGE
            </h2>
            <span className="burger-menu__time">С 09:00 ДО 21:00</span>
          </div>
          <Close className="burger-menu__button" onClick={() => changeVisibleBurgerMenu(false)} className="burger-menu__button" alt="Иконка закрыть" />
        </div>
        <div className="burger-menu__main-wrapper">
          <ul className="burger-menu__links">
            {links.map((link) => (
              <BurgerMenuLink key={link.title} item={link} />
            ))}
          </ul>
          <div className="burger-menu_contacts">
            <a href="tel:+375(33)699-86-04" className="burger-menu__phone">
              +375(33)999-88-00
            </a>
            <a href="mailto:garage@mail.ru" className="burger-menu__email">
              garage@mail.ru
            </a>
            <div>
              <Instagram className="burger-menu__button" alt="vk.com" />
              <Viber className="burger-menu__button" alt="instagram" />
              <Vk className="burger-menu__button" alt="telegram" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
