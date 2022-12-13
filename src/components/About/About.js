import { motion } from 'framer-motion';

//. assets
import Img from '../../assets/img/aboutUs.png';

//. styles
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id='about'>
      <motion.h2
        className='heading'
        initial={{ opacity: 0, translateY: '-100%' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'anticipate', delay: 0.2 }}
      >
        About Us
      </motion.h2>
      <div className={styles.aboutContent}>
        <motion.img
          src={Img}
          alt=''
          className={styles.img}
          initial={{ translateX: '100%', opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'anticipate', delay: 0.4 }}
        />
        <motion.p
          className={styles.desc}
          initial={{ translateX: '-100%', opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'anticipate', delay: 0.6 }}
        >
          Welcome to Hard Code Cafe, a calm place for everyone (especially every
          developer). We aim to provide a relaxing place of work with no
          distractions and with great coffee. We also offer other drinks, cakes
          made with love as well as fast wifi.
        </motion.p>
      </div>
    </section>
  );
}
