import { UIState } from "./";

type UIActionType =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return {
        ...state,
        sidebarmenuOpen: true,
      };
    case "UI - Close Sidebar":
      return {
        ...state,
        sidebarmenuOpen: false,
      };
    default:
      return state;
  }
};
