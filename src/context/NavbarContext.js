import { createContext, useReducer } from 'react';

export const NavbarContext = createContext();

const navbarReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_MENU_STATE':
      return { ...state, isMenuOpened: action.payload };
    default:
      return state;
  }
};

export function NavbarProvider({ children }) {
  const [state, dispatch] = useReducer(navbarReducer, {
    isMenuOpened: false,
  });

  const changeMenuState = isMenuOpened => {
    dispatch({ type: 'CHANGE_MENU_STATE', payload: isMenuOpened });
  };

  return (
    <NavbarContext.Provider value={{ ...state, changeMenuState }}>
      {children}
    </NavbarContext.Provider>
  );
}
