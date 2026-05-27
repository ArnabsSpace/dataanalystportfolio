import { useMemo } from 'react';
import FadeUp from '../ui/FadeUp';
import SectionHeader from '../ui/SectionHeader';
import { XG_ROWS, MOMENTUM_HOME, MOMENTUM_AWAY, TECH_BADGES } from '../../data';
import styles from './DataSection.module.css';

/** Single horizontal stat bar (xG / passes / PPDA) */
function StatBar({ team, width, val, color }) {
  return (
    <div className={styles.barRow}>
      <span className={styles.barTeam}>{team}</span>
      <div className={styles.barBg}>
        <div className={styles.barFill} style={{ width, background: color }} />
      </div>
      <span className={styles.barVal}>{val}</span>
    </div>
  );
}

/** Groups of stat bars with a heading */
function XgCard() {
  return (
    <FadeUp className={styles.card}>
      {XG_ROWS.map(({ label, rows }) => (
        <div key={label} className={styles.statGroup}>
          <div className={styles.cardTitle}>{label}</div>
          {rows.map((r) => (
            <StatBar key={r.team + label} {...r} />
          ))}
        </div>
      ))}
    </FadeUp>
  );
}

/** Match momentum bar chart + pass map density grid */
function MomentumCard() {
  // Generate pass-map node colours once (stable via useMemo)
  const passNodes = useMemo(
    () =>
      Array.from({ length: 36 }, () => {
        const intensity = Math.random();
        if (intensity > 0.7) return { bg: `rgba(0,255,135,${(0.4 + intensity * 0.6).toFixed(2)})`, size: `${(4 + intensity * 10).toFixed(0)}px` };
        if (intensity > 0.4) return { bg: `rgba(0,212,255,${(0.3 + intensity * 0.5).toFixed(2)})`, size: `${(4 + intensity * 10).toFixed(0)}px` };
        return { bg: `rgba(255,255,255,${(0.05 + intensity * 0.1).toFixed(2)})`, size: `${(4 + intensity * 10).toFixed(0)}px` };
      }),
    []
  );

  return (
    <FadeUp className={styles.card} delay={1}>
      {/* Momentum */}
      <div className={styles.cardTitle}>Match Momentum Chart</div>
      <div className={styles.momentumWrap}>
        {MOMENTUM_HOME.map((h, i) => (
          <div key={i} className={styles.momentumCol}>
            <div className={styles.momBar} style={{ height: `${h * 0.4}px`, background: 'linear-gradient(to top,#00ff87,transparent)' }} />
            <div className={styles.momBar} style={{ height: `${MOMENTUM_AWAY[i] * 0.15}px`, background: 'linear-gradient(to top,#00d4ff,transparent)' }} />
          </div>
        ))}
      </div>
      <div className={styles.momentumLegend}>
        <span className={styles.legendItem}><span style={{ background: '#00ff87' }} />Home</span>
        <span className={styles.legendItem}><span style={{ background: '#00d4ff' }} />Away</span>
      </div>

      {/* Pass map */}
      <div className={styles.cardTitle} style={{ marginTop: '1.5rem' }}>Pass Map Density</div>
      <div className={styles.passGrid}>
        {passNodes.map((n, i) => (
          <div key={i} className={styles.passNode} style={{ background: n.bg, width: n.size, height: n.size }} />
        ))}
      </div>
    </FadeUp>
  );
}

/** Full-width tech badge strip */
function TechBadgesCard() {
  return (
    <FadeUp className={`${styles.card} ${styles.cardFull}`} delay={2}>
      <div className={styles.cardTitle}>Tools &amp; Technologies</div>
      <div className={styles.badgesWrap}>
        {TECH_BADGES.map((t) => (
          <span key={t} className={styles.badge}>{t}</span>
        ))}
      </div>
    </FadeUp>
  );
}

export default function DataSection() {
  return (
    <section className="section section--dark" id="data">
      <SectionHeader label="03 — Data Intelligence" title="ANALYTICS" accent="DASHBOARD" />

      <div className={styles.grid}>
        <XgCard />
        <MomentumCard />
        <TechBadgesCard />
      </div>
    </section>
  );
}
