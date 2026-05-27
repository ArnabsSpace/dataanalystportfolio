import FadeUp from '../ui/FadeUp';
import SectionHeader from '../ui/SectionHeader';
import { SKILLS } from '../../data';
import styles from './AboutSection.module.css';

/** Decorative tactical formation SVG shown inside the profile card */
function FormationSVG() {
  const homePositions = [[150,340],[90,290],[210,290],[60,230],[150,230],[240,230]];
  const awayPositions = [[90,160],[210,160],[90,100],[150,100],[210,100]];

  return (
    <svg
      viewBox="0 0 300 400"
      fill="none"
      className={styles.formationSvg}
    >
      <rect x="20" y="20" width="260" height="360" stroke="#00ff87" strokeWidth="1.5" />
      <line x1="20" y1="200" x2="280" y2="200" stroke="#00ff87" strokeWidth="1" />
      <circle cx="150" cy="200" r="35" stroke="#00ff87" strokeWidth="1" />
      {homePositions.map(([x, y], i) => (
        <circle key={`h${i}`} cx={x} cy={y} r="5" fill="#00ff87" opacity="0.8" />
      ))}
      {awayPositions.map(([x, y], i) => (
        <circle key={`a${i}`} cx={x} cy={y} r="5" fill="#00d4ff" opacity="0.8" />
      ))}
    </svg>
  );
}

/** Analyst profile / image card */
function ProfileCard() {
  return (
    <FadeUp className={styles.imageWrap}>
      <div className={styles.glowBorder} />
      <div className={styles.card}>
        <div className={styles.cardBg}>
          <span className={styles.initial}>SB</span>
          <FormationSVG />
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.name}>SOURABH BANERJEE</div>
          <div className={styles.role}>Football Tactical &amp; Data Analyst</div>
        </div>
      </div>
    </FadeUp>
  );
}

/** Single skill card */
function SkillCard({ icon, name, desc }) {
  return (
    <div className={styles.skillCard}>
      <span className={styles.skillIcon}>{icon}</span>
      <div className={styles.skillName}>{name}</div>
      <div className={styles.skillDesc}>{desc}</div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="section section--dark" id="about">
      <div className="pitch-grid" style={{ opacity: 0.4 }} />

      <SectionHeader label="01 — Profile" title="THE" accent="ANALYST" />

      <div className={styles.grid}>
        <ProfileCard />

        <FadeUp delay={2}>
          <p className={styles.bio}>
            <strong>Sourabh Banerjee</strong> is a football tactical and data analyst
            with a sharp eye for the game's nuances — from high-press systems and
            mid-block structures to xG flows and set-piece innovations.
          </p>
          <p className={styles.bio}>
            His work spans <strong>The Coaches Zone</strong>, <strong>APFA</strong>,{' '}
            <strong>Creative Set Plays</strong>, and <strong>Medium</strong> — dissecting
            matches, tactical philosophies, and data insights with editorial precision.
          </p>
          <p className={styles.bio}>
            Bridging <strong>raw statistics</strong> with{' '}
            <strong>contextual intelligence</strong>, Sourabh tells the story behind
            the numbers.
          </p>

          <div className={styles.skillsGrid}>
            {SKILLS.map((s) => (
              <SkillCard key={s.name} {...s} />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
