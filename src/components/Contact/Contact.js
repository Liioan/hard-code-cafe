import { motion } from 'framer-motion';

//. components
import Form from './Form/Form';

//. styles
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact} id='contact'>
      <motion.h2
        className='heading'
        initial={{ opacity: 0, translateY: '-100%' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'anticipate', delay: 0.2 }}
      >
        Contact
      </motion.h2>

      <div className={styles.contactContent}>
        <motion.div
          className={styles.desc}
          initial={{ opacity: 0, translateX: '100%' }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'anticipate', delay: 0.2 }}
        >
          <p>Want to book a table?</p>
          <p>Or maybe you want to suggest something?</p>
          <p>In any case, contact us!</p>
        </motion.div>

        <div className={styles.form}>
          <Form />
        </div>
      </div>
    </section>
  );
}
