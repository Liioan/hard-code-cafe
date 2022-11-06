import { useNavbar } from '../../../hooks/useNavbar';
import { motion, AnimatePresence } from 'framer-motion';

//. styles
import styles from './Menu.module.css';

const links = [
  { icon: 'info', linkLocation: 'about', linkName: 'About us' },
  { icon: 'menu_book', linkLocation: 'menu', linkName: 'Menu' },
  { icon: 'location_on', linkLocation: 'location', linkName: 'Location' },
  { icon: 'call', linkLocation: 'contact', linkName: 'Contact' },
];

export default function Menu() {
  const { isMenuOpened, changeMenuState } = useNavbar();

  const toggleMenu = () => {
    changeMenuState(!isMenuOpened);
  };

  return (
    <>
      <AnimatePresence>
        {isMenuOpened && (
          <motion.div
            className={styles.menu}
            initial={{ translateX: '100vw', opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: '100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'backOut' }}
          >
            {links.map(link => (
              <div className={styles.menuItem} key={link.linkLocation}>
                <a href={`#${link.linkLocation}`} onClick={toggleMenu}>
                  <span className={styles.link}>{link.linkName}</span>
                  <span className='material-symbols-outlined'>{link.icon}</span>
                </a>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMenuOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.overlay}
            transition={{ ease: 'easeOut', duration: 0.2 }}
            onClick={toggleMenu}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
