import React from "react";

type Props = {
  item: { title: string; link: string };
};

const BurgerMenuLink: React.FC<Props> = ({ item }: Props): JSX.Element => {
  const { title, link } = item;

  return (
    <li className="burger-menu__item">
      <a href={link} className="burger-menu__link">
        {title}
      </a>
    </li>
  );
};

export default BurgerMenuLink;
