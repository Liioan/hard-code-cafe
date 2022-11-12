import { motion } from 'framer-motion';

//. styles
import styles from './Form.module.css';

export default function Form() {
  return (
    <div>
      <form name='contact' method='post' className={styles.form}>
        <input type='hidden' name='form-name' value='contact' />
        <motion.input
          name='name'
          id='name'
          type='text'
          className={styles.input}
          placeholder='name and surname'
          initial={{ opacity: 0, translateX: '100%' }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'anticipate', delay: 0.2 }}
          required
        />
        <motion.input
          name='email'
          id='email'
          type='text'
          className={styles.input}
          placeholder='email address'
          initial={{ opacity: 0, translateX: '-100%' }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'anticipate', delay: 0.2 }}
          required
        />
        <motion.textarea
          name='message'
          id='message'
          className={styles.input}
          placeholder='your message'
          initial={{ opacity: 0, translateX: '100%' }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'anticipate', delay: 0.2 }}
          required
        ></motion.textarea>
        <motion.input
          type='submit'
          value='Send'
          className={styles.input}
          initial={{ opacity: 0, translateX: '-100%' }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'anticipate', delay: 0.2 }}
          required
        />
      </form>
    </div>
  );
}
