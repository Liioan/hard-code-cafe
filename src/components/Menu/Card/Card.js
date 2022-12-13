import { motion } from 'framer-motion';

//. styles
import styles from './Card.module.css';

export default function Card({ text, img, items }) {
  return (
    <motion.section
      className={styles.card}
      initial={{ opacity: 0, translateX: '100%' }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'anticipate' }}
    >
      <h3 className={styles.sectionName}>
        <span>{'<'}</span>
        {text}
        <span>{' />'}</span>
      </h3>
      <div className={styles.list}>
        <ol start='0'>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
      <div className={styles.overlay}></div>
      <div
        className={styles.background}
        style={{ background: `url(${img})` }}
      ></div>
    </motion.section>
  );
}
