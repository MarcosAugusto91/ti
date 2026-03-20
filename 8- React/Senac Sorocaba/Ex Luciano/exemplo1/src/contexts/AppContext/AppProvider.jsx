import { useReducer, useCallback } from 'react';
import { AppContext } from './AppContext';

const initialState = {
  isMenuOpen: false,
  user: null,
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleMenu = useCallback(() => {
    dispatch({ type: 'TOGGLE_MENU' });
  }, []);

  const setUser = useCallback((user) => {
    dispatch({ type: 'SET_USER', payload: user });
  }, []);

  return (
    <AppContext.Provider value={{ state, toggleMenu, setUser }}>
      {children}
    </AppContext.Provider>
  );
};