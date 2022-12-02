//. assets
import GitHubIcon from '../../assets/github.svg';

//.styles
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div>
          <span>
            Created by{' '}
            <a
              without
              rel='noreferrer'
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
              without
              rel='noreferrer'
              href='https://www.pexels.com/@marta-dzedyshko-1042863/'
              target='_blank'
              className={styles.link}
            >
              Marta Dzedyshko
            </a>
            ,{' '}
            <a
              without
              rel='noreferrer'
              href='https://www.pexels.com/@teresa-jang-6930116/'
              target='_blank'
              className={styles.link}
            >
              Teresa Jang
            </a>
          </span>
        </div>

        <a
          without
          rel='noreferrer'
          href='https://github.com/liioan/hard-code-cafe'
        >
          <img src={GitHubIcon} alt='' className={styles.img} />
        </a>
      </div>
    </footer>
  );
}
