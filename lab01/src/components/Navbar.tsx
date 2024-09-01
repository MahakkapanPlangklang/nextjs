import Link from 'next/link';
import styles from './Navbar.module.css'; // หรือใช้ path ที่เหมาะสม

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/pokemon" className={styles.navLink}>Pokémon</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/aboutme" className={styles.navLink}>About Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;