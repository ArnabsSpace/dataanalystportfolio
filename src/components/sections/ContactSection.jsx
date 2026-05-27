import FadeUp from '../ui/FadeUp';
import SectionHeader from '../ui/SectionHeader';
import { SOCIAL_LINKS } from '../../data';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className="pitch-grid" />

      <SectionHeader label="06 — Contact" title="LET'S" accent="CONNECT" center />

      <div className={styles.inner}>
        <FadeUp tag="p" className={styles.tagline} delay={2}>
          Open to analytical roles, collaboration on tactical projects, and
          writing opportunities in football intelligence.
        </FadeUp>

        <FadeUp delay={3}>
          <a
            className={styles.email}
            href="mailto:sourabhbanerjee94@gmail.com"
          >
            sourabhbanerjee94@gmail.com
          </a>
        </FadeUp>

        <FadeUp className={styles.socialRow} delay={4}>
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              className={styles.socialLink}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              {label}
            </a>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
