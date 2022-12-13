import { motion } from 'framer-motion';

//. components
import Card from './Card/Card';

//. assets
import CoffeImg from '../../assets/img/coffee.png';
import TeaImg from '../../assets/img/tea.png';
import CakesImg from '../../assets/img/cakes.png';
import ChocolateImg from '../../assets/img/chocolate.png';

//. styles
import styles from './Menu.module.css';

export default function Menu() {
  const MenuSections = [
    {
      name: 'Coffee',
      img: CoffeImg,
      itemsList: [
        'Espresso',
        'Cappuccino',
        'Latte Macchiato',
        'Flat White',
        'Black',
        'Americano',
      ],
    },
    {
      name: 'Tea',
      img: TeaImg,
      itemsList: ['Black', 'Forest Fruits', 'Green', 'Lemon & Ginger', 'Honey'],
    },
    {
      name: 'Cakes',
      img: CakesImg,
      itemsList: [
        'Chocolate Cake',
        'Cheesecake',
        'Napoleon Cake',
        'Pavlova Cake',
        'Apple Pie',
      ],
    },
    {
      name: 'Chocolate',
      img: ChocolateImg,
      itemsList: [
        'Hot Chocolate',
        'Frozen Chocolate',
        'Cocoa',
        'Black & White',
      ],
    },
  ];

  return (
    <main className={styles.menu} id='menu'>
      <motion.h2
        className='heading'
        initial={{ opacity: 0, translateY: '-100%' }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'anticipate', delay: 0.2 }}
      >
        Menu
      </motion.h2>
      <div className={styles.menuList}>
        {MenuSections.map(section => (
          <Card
            text={section.name}
            img={section.img}
            items={section.itemsList}
            key={section.name}
          />
        ))}
      </div>
    </main>
  );
}
