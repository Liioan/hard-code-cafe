import { useState } from 'react';
import { useNavbar } from '../../hooks/useNavbar';

//.components

//. assets
import logo from '../../assets/logo.png';

//. styles
import styles from './Navbar.module.css';

export default function Navbar() {
  const { isMenuOpened, changeMenuState } = useNavbar();

  const toggleMenu = () => {
    changeMenuState(!isMenuOpened);
  };

  return (
    <div className={styles.navbar}>
      <img src={logo} alt='' />
      <button onClick={() => toggleMenu()}>
        <span className={`material-symbols-outlined ${styles.navbarIcon}`}>
          {isMenuOpened ? 'close' : 'menu'}
        </span>
      </button>
    </div>
  );
}
