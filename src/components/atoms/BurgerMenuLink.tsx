import React from "react";

function BurgerMenuLink(props: any) {
  const { title, link } = props.props;
  console.log();
  return (
    <li>
      <a href={link} className="burger-menu__nav">
        {title}
      </a>
    </li>
  );
}

export default BurgerMenuLink;
