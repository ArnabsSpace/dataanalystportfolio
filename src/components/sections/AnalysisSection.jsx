import FadeUp from '../ui/FadeUp';
import SectionHeader from '../ui/SectionHeader';
import { ANALYSIS_CARDS } from '../../data';
import styles from './AnalysisSection.module.css';

/** Per-card tactical SVG art — indexed to match ANALYSIS_CARDS order */
const COVER_SVGS = [
  // 0 – Tactical Analysis
  <svg key={0} viewBox="0 0 300 180" fill="none">
    <circle cx="150" cy="90" r="40" stroke="#00ff87" strokeWidth="1"/>
    <circle cx="60"  cy="90" r="5"  fill="#00ff87"/>
    <circle cx="240" cy="90" r="5"  fill="#00ff87"/>
    <circle cx="150" cy="30" r="5"  fill="#00d4ff"/>
    <circle cx="150" cy="150" r="5" fill="#00d4ff"/>
    <line x1="60" y1="90" x2="150" y2="30"  stroke="#00ff87" strokeWidth="0.8" strokeDasharray="4"/>
    <line x1="150" y1="30" x2="240" y2="90" stroke="#00ff87" strokeWidth="0.8" strokeDasharray="4"/>
    <line x1="240" y1="90" x2="150" y2="150" stroke="#00ff87" strokeWidth="0.8" strokeDasharray="4"/>
  </svg>,
  // 1 – Match Analysis
  <svg key={1} viewBox="0 0 300 180" fill="none">
    <rect x="10" y="10" width="280" height="160" stroke="#00ff87" strokeWidth="1"/>
    <line x1="10" y1="90" x2="290" y2="90" stroke="#00ff87" strokeWidth="0.5"/>
    <rect x="10" y="55" width="60" height="70" stroke="#00ff87" strokeWidth="1"/>
    <rect x="230" y="55" width="60" height="70" stroke="#00ff87" strokeWidth="1"/>
    <circle cx="150" cy="90" r="5" fill="#00d4ff"/>
  </svg>,
  // 2 – System Study
  <svg key={2} viewBox="0 0 300 180" fill="none">
    <circle cx="80"  cy="60"  r="8" fill="#ff6b35"/>
    <circle cx="150" cy="40"  r="8" fill="#ff6b35"/>
    <circle cx="220" cy="60"  r="8" fill="#ff6b35"/>
    <circle cx="80"  cy="120" r="8" fill="#00d4ff"/>
    <circle cx="150" cy="140" r="8" fill="#00d4ff"/>
    <circle cx="220" cy="120" r="8" fill="#00d4ff"/>
    <line x1="80"  y1="60"  x2="150" y2="40"  stroke="#ff6b35" strokeWidth="1"/>
    <line x1="150" y1="40"  x2="220" y2="60"  stroke="#ff6b35" strokeWidth="1"/>
    <line x1="80"  y1="120" x2="150" y2="140" stroke="#00d4ff" strokeWidth="1"/>
    <line x1="150" y1="140" x2="220" y2="120" stroke="#00d4ff" strokeWidth="1"/>
    <line x1="80"  y1="60"  x2="80"  y2="120" stroke="rgba(255,255,255,0.2)" strokeDasharray="4"/>
  </svg>,
  // 3 – Set Piece
  <svg key={3} viewBox="0 0 300 180" fill="none">
    <path d="M40 90 Q150 30 260 90"  stroke="#00ff87" strokeWidth="2"/>
    <path d="M40 90 Q150 150 260 90" stroke="#00d4ff" strokeWidth="2"/>
    <circle cx="40"  cy="90" r="6" fill="#00ff87"/>
    <circle cx="260" cy="90" r="6" fill="#00ff87"/>
    <circle cx="150" cy="90" r="4" fill="white" opacity="0.5"/>
  </svg>,
  // 4 – Pressing
  <svg key={4} viewBox="0 0 300 180" fill="none">
    <rect x="10" y="10" width="280" height="160" stroke="#00ff87" strokeWidth="1"/>
    <line x1="10" y1="90" x2="290" y2="90" stroke="#00ff87" strokeWidth="0.5"/>
    <path d="M40 130 L80 80 L120 100 L160 60 L200 75 L240 50 L270 65" stroke="#00d4ff" strokeWidth="2"/>
    <path d="M40 110 L80 115 L120 130 L160 120 L200 135 L240 140 L270 125" stroke="#ff6b35" strokeWidth="2"/>
  </svg>,
  // 5 – Match Analysis
  <svg key={5} viewBox="0 0 300 180" fill="none">
    <circle cx="150" cy="90" r="60" stroke="#00ff87" strokeWidth="1"/>
    <circle cx="150" cy="90" r="30" stroke="#00d4ff" strokeWidth="1"/>
    <circle cx="150" cy="90" r="8"  fill="#00ff87"/>
    <line x1="90"  y1="90" x2="210" y2="90"  stroke="rgba(255,255,255,0.2)"/>
    <line x1="150" y1="30" x2="150" y2="150" stroke="rgba(255,255,255,0.2)"/>
  </svg>,
];

/** Single analysis card */
function AnalysisCard({ card, index }) {
  const delay = (index % 3) * 0.1;

  return (
    <FadeUp className={styles.card} style={{ transitionDelay: `${delay}s` }}>
      {/* Cover */}
      <div className={styles.cover}>
        <div className={styles.coverInner} style={{ background: card.bg }}>
          <div className={styles.coverSvg}>{COVER_SVGS[index]}</div>
        </div>
        <span className={styles.cat}>{card.cat}</span>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <h3 className={styles.title}>{card.title}</h3>
        <p className={styles.insight}>{card.insight}</p>
        <a
          className={styles.link}
          href={card.href}
          target="_blank"
          rel="noreferrer"
        >
          Read Analysis →
        </a>
      </div>
    </FadeUp>
  );
}

export default function AnalysisSection() {
  return (
    <section className="section" id="analysis">
      <div className="pitch-grid" />
      <SectionHeader label="02 — Portfolio" title="FEATURED" accent="ANALYSIS" />

      <div className={styles.grid}>
        {ANALYSIS_CARDS.map((card, i) => (
          <AnalysisCard key={card.title} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}
