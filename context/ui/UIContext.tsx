import { createContext } from "react";

interface ContextProps {
  sidebarmenuOpen: boolean;

  //Methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
