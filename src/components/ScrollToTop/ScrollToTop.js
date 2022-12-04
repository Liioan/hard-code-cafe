import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//. styles
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.a
            href='#home'
            className={styles.container}
            initial={{ opacity: 0, translateX: '100%' }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: '100%' }}
            transition={{ ease: 'anticipate' }}
          >
            <span className={`material-symbols-outlined ${styles.icon}`}>
              expand_less
            </span>
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
