import FadeUp from '../ui/FadeUp';
import PitchCanvas from '../ui/PitchCanvas';
import { HERO_STATS } from '../../data';
import styles from './HeroSection.module.css';

/** SVG outline of a football pitch shown faintly on the right side of the hero */
function PitchOutlineSVG() {
  return (
    <svg className={styles.pitchSvg} viewBox="0 0 600 400" fill="none">
      <rect x="2" y="2" width="596" height="396" stroke="white" strokeWidth="3" />
      <line x1="300" y1="2" x2="300" y2="398" stroke="white" strokeWidth="2" />
      <circle cx="300" cy="200" r="60" stroke="white" strokeWidth="2" />
      <rect x="2" y="120" width="90" height="160" stroke="white" strokeWidth="2" />
      <rect x="508" y="120" width="90" height="160" stroke="white" strokeWidth="2" />
      <rect x="2" y="160" width="45" height="80" stroke="white" strokeWidth="2" />
      <rect x="553" y="160" width="45" height="80" stroke="white" strokeWidth="2" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      {/* Animated tactical canvas background */}
      <PitchCanvas className={styles.canvas} />

      {/* Pitch grid overlay */}
      <div className="pitch-grid" />

      {/* Faint pitch outline on the right */}
      <PitchOutlineSVG />

      {/* Main headline content */}
      <div className={styles.content}>
        <FadeUp className={styles.tag} delay={1}>
          <span className={styles.liveDot} />
          Football Intelligence
        </FadeUp>

        <FadeUp tag="h1" className={styles.title} delay={2}>
          FOOTBALL<br />THROUGH<br />
          <span className={styles.accent}>DATA &amp; TACTICS</span>
        </FadeUp>

        <FadeUp tag="p" className={styles.sub} delay={3}>
          Tactical Analysis · Match Insights · Data Storytelling · Video Breakdowns
        </FadeUp>

        <FadeUp className={styles.cta} delay={4}>
          <a className="btn btn--primary" href="#analysis">View Analysis</a>
          <a className="btn btn--secondary" href="#contact">Get In Touch</a>
        </FadeUp>
      </div>

      {/* Stats cluster bottom-right */}
      <FadeUp className={styles.stats} delay={5}>
        {HERO_STATS.map(({ num, label }) => (
          <div key={label} className={styles.statItem}>
            <div className={styles.statNum}>{num}</div>
            <div className={styles.statLabel}>{label}</div>
          </div>
        ))}
      </FadeUp>

      {/* Scroll indicator bottom-left */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
