//. assets
import GitHubIcon from '../../assets/github.svg';

//.styles
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        Created by{' '}
        <a
          href='https://davidbijok.netlify.app'
          target='_blank'
          className={styles.link}
        >
          David Bijok
        </a>
        ,
      </span>
      <span>
        Photos by:{' '}
        <a
          href='https://www.pexels.com/@marta-dzedyshko-1042863/'
          target='_blank'
          className={styles.link}
        >
          Marta Dzedyshko
        </a>
        ,{' '}
        <a
          href='https://www.pexels.com/@teresa-jang-6930116/'
          target='_blank'
          className={styles.link}
        >
          Teresa Jang
        </a>
      </span>
      <a href='https://github.com/liioan/hard-code-cafe'>
        <img src={GitHubIcon} alt='' className={styles.img} />
      </a>
    </footer>
  );
}
