import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sidebarmenuOpen: boolean;
}

interface props {
  children: JSX.Element | JSX.Element[];
}

const UI_INITIAL_STATE: UIState = {
  sidebarmenuOpen: false,
};

export const UIProvider: FC<props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "UI - Close Sidebar" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,

        //Methods
        openSideMenu,
        closeSideMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
