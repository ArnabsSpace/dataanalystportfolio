import FadeUp from '../ui/FadeUp';
import SectionHeader from '../ui/SectionHeader';
import { WRITING_PIECES } from '../../data';
import styles from './WritingSection.module.css';

function WritingCard({ num, cat, title, excerpt, index }) {
  const delay = (index % 3) * 0.1;
  return (
    <FadeUp className={styles.card} style={{ transitionDelay: `${delay}s` }}>
      <div className={styles.num}>{num}</div>
      <div className={styles.cat}>{cat}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
    </FadeUp>
  );
}

export default function WritingSection() {
  return (
    <section className="section" id="writing">
      <div className="pitch-grid" />
      <SectionHeader label="04 — Editorial" title="TACTICAL" accent="WRITING" />

      <div className={styles.grid}>
        {WRITING_PIECES.map((w, i) => (
          <WritingCard key={w.num} {...w} index={i} />
        ))}
      </div>
    </section>
  );
}
