import React, { createContext, useReducer } from "react";

import reducer from "./reducer";

interface InitialState {
  visible: boolean;
}

const initialState: InitialState = {
  visible: false,
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function changeVisibleBurgerMenu(value: boolean): void {
    dispatch({
      type: "CHANGE_VISIBLE",
      payload: value,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ visible: state.visible, changeVisibleBurgerMenu }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
