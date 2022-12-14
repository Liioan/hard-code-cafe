//. components
import Navbar from './Navbar/Navbar';
import Menu from './Menu/Menu';
import TypingText from '../TypingText/TypingText';
import Indicator from './Indicator/Indicator';
import { useState } from 'react';

//. styles
import styles from './Hero.module.css';

export default function Hero() {
  const text = ['Welcome to ', 'Hard Code Cafe', 'Your place to '];
  const prompts = ['code', 'relax', 'drink coffee'];

  const [showHeading, setShowHeading] = useState(false);
  const [showSubheading, setShowSubheading] = useState(false);
  const [showPrompts, setShowPrompts] = useState(false);

  setTimeout(() => {
    setShowHeading(true);
  }, 1500);
  setTimeout(() => {
    setShowSubheading(true);
  }, 3500);
  setTimeout(() => {
    setShowPrompts(true);
  }, 5000);

  return (
    <section className={styles.hero} id='home'>
      <Navbar />
      <Menu />
      <div className={styles.header}>
        <h1>
          <span className={styles.headerSpan}>
            <TypingText text={text[0]} />
            {!showHeading && <Indicator />}
          </span>
          <span className={styles.headerSpan}>
            {showHeading && <TypingText text={text[1]} />}
            {!showSubheading && showHeading && <Indicator />}
          </span>
        </h1>
        <h2>
          <span className={styles.subHeading}>
            {showSubheading && <TypingText text={text[2]} />}
            {!showPrompts && showSubheading && <Indicator />}
          </span>
          <span className={styles.subHeading}>
            {showPrompts && <TypingText text={prompts} isReversable={true} />}
            {showPrompts && <Indicator />}
          </span>
        </h2>
      </div>
      <a href='#about' className={styles.showMoreLink}>
        <span className={`material-symbols-outlined ${styles.showMore}`}>
          expand_more
        </span>
      </a>
    </section>
  );
}
