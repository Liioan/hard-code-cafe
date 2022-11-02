//. components
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';

//. styles
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero} id='home'>
      <Navbar />
      <Menu />
    </div>
  );
}
