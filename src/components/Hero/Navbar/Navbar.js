import { useNavbar } from '../../../hooks/useNavbar';
import { motion, AnimatePresence } from 'framer-motion';

//.components

//. assets
import logo from '../../../assets/logo.png';

//. styles
import styles from './Navbar.module.css';

export default function Navbar() {
  const { isMenuOpened, changeMenuState } = useNavbar();

  const toggleMenu = () => {
    changeMenuState(!isMenuOpened);
  };

  return (
    <div className={styles.navbar}>
      <a href='#home'>
        <img src={logo} alt='' />
      </a>
      <button onClick={toggleMenu}>
        <AnimatePresence>
          {!isMenuOpened && (
            <motion.span
              initial={{ translateY: '-100%', opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              exit={{ translateY: '-100%', opacity: 0 }}
              transition={{ duration: 0.01 }}
              className={`material-symbols-outlined ${styles.navbarIcon}`}
            >
              menu
            </motion.span>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isMenuOpened && (
            <motion.span
              initial={{ translateY: '100%', opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              exit={{ translateY: '100%', opacity: 0 }}
              transition={{ duration: 0.01 }}
              className={`material-symbols-outlined ${styles.navbarIcon}`}
            >
              close
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
