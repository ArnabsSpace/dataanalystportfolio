import FadeUp from '../ui/FadeUp';
import SectionHeader from '../ui/SectionHeader';
import { TOOLS } from '../../data';
import styles from './ToolsSection.module.css';

function ToolCard({ icon, name, type, index }) {
  const delay = (index % 4) * 0.08;
  return (
    <FadeUp className={styles.card} style={{ transitionDelay: `${delay}s` }}>
      <span className={styles.icon}>{icon}</span>
      <div className={styles.name}>{name}</div>
      <div className={styles.type}>{type}</div>
    </FadeUp>
  );
}

export default function ToolsSection() {
  return (
    <section className="section section--dark" id="tools">
      <SectionHeader label="05 — Stack" title="TOOLS &amp;" accent="PLATFORMS" />

      <div className={styles.grid}>
        {TOOLS.map((t, i) => (
          <ToolCard key={t.name} {...t} index={i} />
        ))}
      </div>
    </section>
  );
}
