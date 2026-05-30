import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.text}>© 2026 Sourabh Banerjee</span>
      <span className={styles.brand}>Football Tactical &amp; Data Analyst</span>
      <span className={styles.text}>All Rights Reserved</span>
    </footer>
  );
}
