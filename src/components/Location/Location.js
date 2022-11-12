import { motion } from 'framer-motion';

//. assets
import LocationImg from '../../assets/img/location.png';

//. styles
import styles from './Location.module.css';

export default function Location() {
  return (
    <div className={styles.location} id='location'>
      <motion.h2
        className='heading'
        initial={{ opacity: 0, translateY: '-100%' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'anticipate', delay: 0.2 }}
      >
        Location
      </motion.h2>
      <motion.img
        src={LocationImg}
        alt='our location'
        className={styles.img}
        initial={{ translateX: '100%', opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'anticipate', delay: 0.4 }}
      />
      <motion.div
        className={styles.desc}
        initial={{ translateX: '-100%', opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'anticipate', delay: 0.4 }}
      >
        <h3 className={styles.subheader}>Come visit us!</h3>
        <p className={styles.addres}>
          <a href='https://www.google.com/maps/place/Ignacego+Kraszewskiego+11,+43-400+Cieszyn/@49.7412402,18.6324464,17z/data=!4m5!3m4!1s0x4714040fa566672d:0x59e236a224dca6b9!8m2!3d49.7409317!4d18.6328005'>
            Our addres: Ignacego Kraszewskiego 11, 43-400 Cieszyn, Poland
          </a>
        </p>
      </motion.div>
    </div>
  );
}
