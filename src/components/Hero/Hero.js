//. components
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';
import TypingText from '../TypingText/TypingText';

//. styles
import styles from './Hero.module.css';

export default function Hero() {
  const text = ['Welcome to ', 'Hard Code Cafe', 'Your place to '];

  const prompts = ['code', 'relax', 'drink coffee'];

  return (
    <div className={styles.hero} id='home'>
      <Navbar />
      <Menu />
      <div className={styles.header}>
        <h1>
          <span className={styles.headerSpan}>
            <TypingText text={text[0]} isReversable={false} />
          </span>
          <span className={styles.headerSpan}>
            <TypingText text={text[1]} isReversable={false} />
          </span>
        </h1>
        <h2>
          <span className={styles.subHeading}>
            <TypingText text={text[2]} isReversable={false} />
          </span>
          <span className={styles.subHeading}>
            <TypingText text={prompts} isReversable={true} />
          </span>
        </h2>
      </div>
    </div>
  );
}
