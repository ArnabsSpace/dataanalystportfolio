// import { useMemo } from 'react';
import FadeUp from '../ui/FadeUp';
import SectionHeader from '../ui/SectionHeader';
// import { XG_ROWS, MOMENTUM_HOME, MOMENTUM_AWAY, TECH_BADGES } from '../../data';
import styles from './DataSection.module.css';

import { useEffect, useState } from "react";
import {
  getAnalyticsDashboardData,
  getMediaById,
} from "../../services/api";


function TechBadgesCard({ tools }) {

  
  return (
    <FadeUp className={`${styles.card} ${styles.cardFull}`} delay={2}>
      <div className={styles.cardTitle}>Tools &amp; Technologies</div>
      <div className={styles.badgesWrap}>
        {tools.map((t) => (
          <span key={t} className={styles.badge}>{t}</span>
        ))}
      </div>
    </FadeUp>
  );
}

export default function DataSection() {

  const [dashboard, setDashboard] = useState(null);
  const [image1, setImage1] = useState(null);
const [image2, setImage2] = useState(null);

 useEffect(() => {
  async function loadDashboard() {
    const data = await getAnalyticsDashboardData();

    setDashboard(data);

    const media1 = await getMediaById(
      data.acf.analysis_image_1
    );

    const media2 = await getMediaById(
      data.acf.analysis_image_2
    );

    setImage1(media1.source_url);
    setImage2(media2.source_url);
  }

  loadDashboard();
}, []);
  const image1Id = dashboard?.acf?.analysis_image_1;
const image2Id = dashboard?.acf?.analysis_image_2;

const image1Link = dashboard?.acf?.image_1_link;
const image2Link = dashboard?.acf?.image_2_link;

async function loadDashboard() {
  const data = await getAnalyticsDashboardData();

  setDashboard(data);

  const media1 = await getMediaById(
    data.acf.analysis_image_1
  );

  const media2 = await getMediaById(
    data.acf.analysis_image_2
  );

  setImage1(media1.source_url);
  setImage2(media2.source_url);
}


  const tools =
  dashboard?.acf?.tools
    ?.split(/\r?\n/)
    .filter(Boolean) || [];
    if (!dashboard) {
  return null;
}
  return (
    <section className="section section--dark" id="data">
      <SectionHeader label="03 — Data Intelligence" title="ANALYTICS" accent="DASHBOARD" />

      <div className={styles.grid}>
        <FadeUp className={styles.card}>
  <a
    href={image1Link}
    target="_blank"
    rel="noreferrer"
  >
    <img
      src={image1}
      alt="Analysis Dashboard 1"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </a>
</FadeUp>

<FadeUp className={styles.card}>
  <a
    href={image2Link}
    target="_blank"
    rel="noreferrer"
  >
    <img
      src={image2}
      alt="Analysis Dashboard 2"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </a>
</FadeUp>

<TechBadgesCard tools={tools} />
      </div>
    </section>
  );
}
