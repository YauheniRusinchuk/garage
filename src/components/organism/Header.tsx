import React, { useRef, useState } from "react";
import BurgerMenu from "../molecules/BurgerMenu";
import "../../styles/organisms/Header.scss";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

function Header(): JSX.Element {
  const [visible, setVisible] = useState(false);

  const ref: any = useRef();

  useOnClickOutside(ref, () => setVisible(false));

  const changeVisible = () => {
    setVisible(!visible);
  };

  return (
    <header className="header">
      Header
      <button type="button" onClick={changeVisible}>
        xЧЧ
      </button>
      {visible && (
        <div className="burger-menu_background">
          <div ref={ref}>
            <BurgerMenu isVisible={visible} setVisible={setVisible} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
