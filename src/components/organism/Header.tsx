import React, { useState } from "react";
import BurgerMenu from "../molecules/BurgerMenu";
import "../../styles/organisms/Header.scss";

function Header(): JSX.Element {
  const [visible, setVisible] = useState(true);

  const changeVisible = () => {
    setVisible(!visible);
  };

  return (
    <header className="header">
      Header
      <button type="button" onClick={changeVisible}>
        xЧЧ
      </button>
      {visible && <BurgerMenu isVisible={visible} setVisible={setVisible} />}
    </header>
  );
}

export default Header;
