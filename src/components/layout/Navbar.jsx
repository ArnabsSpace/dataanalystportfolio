import { useScrolled } from '../../hooks/useScrolled';
import { NAV_LINKS } from '../../data';
import styles from './Navbar.module.css';

export default function Navbar() {
  const scrolled = useScrolled(60);

  return (
    <nav className={[styles.nav, scrolled ? styles.scrolled : ''].join(' ')}>
      <a className={styles.logo} href="#hero">SB.</a>

      <ul className={styles.links}>
        {NAV_LINKS.map((s) => (
          <li key={s}>
            <a href={`#${s}`}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <a className={styles.cta} href="#contact">Hire Me</a>
    </nav>
  );
}
