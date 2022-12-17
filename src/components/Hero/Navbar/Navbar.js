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
    <motion.nav
      className={styles.navbar}
      initial={{ translateY: '-100%' }}
      animate={{ translateY: 0 }}
      transition={{ duration: 1, ease: 'anticipate' }}
    >
      <a href='#home'>
        <motion.img
          className={styles.logo}
          src={logo}
          alt=''
          initial={{ translateX: '-200%' }}
          animate={{ translateX: 0 }}
          transition={{ duration: 1, ease: 'anticipate', delay: 1 }}
        />
      </a>
      <motion.button
        onClick={toggleMenu}
        initial={{ translateX: '200%' }}
        animate={{ translateX: 0 }}
        transition={{ duration: 1, ease: 'anticipate', delay: 0.5 }}
      >
        <AnimatePresence>
          {!isMenuOpened && (
            <motion.span
              initial={{ translateY: '-100%', opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              exit={{ translateY: '-100%', opacity: 0 }}
              transition={{ duration: 0.1 }}
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
              transition={{ duration: 0.1 }}
              className={`material-symbols-outlined ${styles.navbarIcon}`}
            >
              close
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.nav>
  );
}
