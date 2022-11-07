//. styles
import styles from './Card.module.css';

export default function Card({ text, img, items }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.sectionName}>
        <span>{'<'}</span>
        {text}
        <span>{' />'}</span>
      </h3>
      <div className={styles.list}>
        <ol>
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
    </div>
  );
}
