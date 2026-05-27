import FadeUp from './FadeUp';
import styles from './SectionHeader.module.css';

/**
 * SectionHeader
 * Renders the numbered label + bold title used at the top of every section.
 *
 * Props:
 *  - label  : e.g. "01 — Profile"
 *  - title  : plain title text
 *  - accent : highlighted word inside the title
 *  - center : if true, centres the header text
 */
export default function SectionHeader({ label, title, accent, center = false }) {
  return (
    <div className={center ? styles.center : ''}>
      <FadeUp className={styles.label}>{label}</FadeUp>
      <FadeUp tag="h2" className={styles.title} delay={1}>
        {title}{' '}
        {accent && <span className={styles.accent}>{accent}</span>}
      </FadeUp>
    </div>
  );
}
