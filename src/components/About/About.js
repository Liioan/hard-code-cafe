import { motion, animationPresence } from 'framer-motion';

//. assets
import Img from '../../assets/img/aboutUs.png';

//. components
import TypingText from '../TypingText/TypingText';

//. styles
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.about} id='about'>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'backOut', delay: 0.2 }}
      >
        <TypingText text='About us' />
      </motion.h2>
      <img src={Img} alt='' className={styles.img} />
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt at,
        error facilis natus vel eaque modi laudantium saepe voluptate quas
        necessitatibus repellendus explicabo nisi commodi consequatur atque
        vitae perspiciatis libero totam quod eligendi mollitia, ab voluptatibus?
        Dignissimos cupiditate nobis possimus autem quas quis nulla atque
        laborum perspiciatis labore. Laborum.
      </p>
    </div>
  );
}
