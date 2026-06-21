import FadeUp from '../ui/FadeUp';
import SectionHeader from '../ui/SectionHeader';
import { TOOLS } from '../../data';
import styles from './ToolsSection.module.css';

import { useEffect, useState } from "react";
import { getTools } from "../../services/api";

function ToolCard({ tool, index }) {
  const delay = (index % 4) * 0.08;

  return (
    <FadeUp
      className={styles.card}
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      <span className={styles.icon}>
        {/* {tool.acf.tool_icon} */}
        {tool.acf.icon}
      </span>

      <div className={styles.name}>
        {tool.acf.tool_name}
      </div>

      <div className={styles.type}>
        {tool.acf.tool_type}
      </div>
    </FadeUp>
  );
}

export default function ToolsSection() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function loadTools() {
      const data = await getTools();

      setTools(data);
    }

    loadTools();
  }, []);

  return (
    <section
      className="section section--dark"
      id="tools"
    >
      <SectionHeader
        label="05 — Stack"
        title="TOOLS &"
        accent="PLATFORMS"
      />

      <div className={styles.grid}>
        {tools.map((tool, i) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
