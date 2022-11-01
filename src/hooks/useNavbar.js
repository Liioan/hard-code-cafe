import { useContext } from 'react';
import { NavbarContext } from '../context/NavbarContext';

export const useNavbar = () => {
  const context = useContext(NavbarContext);

  if (context === undefined) {
    throw new Error('useNavbar() must be used inside Navbar');
  }

  return context;
};
