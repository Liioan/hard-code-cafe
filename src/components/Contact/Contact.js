import { motion } from 'framer-motion';

//. components
import Form from './Form/Form';

//. styles
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contact} id='contact'>
      <motion.h2
        className='heading'
        initial={{ opacity: 0, translateY: '-100%' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'anticipate', delay: 0.2 }}
      >
        Contact
      </motion.h2>

      <div className={styles.desc}>
        <p>Want to book a table?</p>
        <p>Or maybe you want to suggest something?</p>
        <p>In any case, contact us!</p>
      </div>

      <div className={styles.form}>
        <Form />
      </div>
    </div>
  );
}
