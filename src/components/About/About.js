import { motion } from 'framer-motion';

//. assets
import Img from '../../assets/img/aboutUs.png';

//. styles
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.about} id='about'>
      <motion.h2
        className='heading'
        initial={{ opacity: 0, translateY: '-100%' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'anticipate', delay: 0.2 }}
      >
        About Us
      </motion.h2>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt at,
        error facilis natus vel eaque modi laudantium saepe voluptate quas
        necessitatibus repellendus explicabo nisi commodi consequatur atque
        vitae perspiciatis libero totam quod eligendi mollitia, ab voluptatibus?
        Dignissimos cupiditate nobis possimus autem quas quis nulla atque
        laborum perspiciatis labore. Laborum.
      </motion.p>
    </div>
  );
}
