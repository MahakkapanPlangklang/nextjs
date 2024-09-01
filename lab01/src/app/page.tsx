'use client';

import Navbar from '../components/Navbar';
import styles from './page.module.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to My Pokémon App</h1>
        <p className={styles.description}>
          This is a web application where you can browse through Pokémon and learn more about them.
        </p>
        <div className={styles.links}>
          <a href="/pokemon" className={styles.link}>View Pokémon List</a>
          <a href="/aboutme" className={styles.link}>About Me</a>
        </div>
      </div>
    </div>
  );
};

export default Home;