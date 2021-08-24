import React, { useContext, useRef } from "react";
import BurgerMenu from "../molecules/BurgerMenu";
import "../../styles/organisms/Header.scss";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { GlobalContext, InitialState } from "../../store/state";

function Header(): JSX.Element {
  const {
    state,
    changeVisibleBurgerMenu,
  }: {
    state: InitialState;
    changeVisibleBurgerMenu: (value: boolean) => void;
  } = useContext(GlobalContext);
  const { visible } = state;
  const ref: any = useRef();

  useOnClickOutside(ref, () => changeVisibleBurgerMenu(false));

  return (
    <header className="header">
      Header
      <button type="button" onClick={() => changeVisibleBurgerMenu(true)}>
        Гараж Епта
      </button>
      {visible && (
        <div className="burger-menu_background">
          <div ref={ref}>
            <BurgerMenu />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
