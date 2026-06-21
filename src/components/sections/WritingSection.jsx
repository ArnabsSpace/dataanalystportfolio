import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FadeUp from "../ui/FadeUp";
import SectionHeader from "../ui/SectionHeader";
import { getWritingPosts } from "../../services/api";

import styles from "./WritingSection.module.css";

function WritingCard({ post, index }) {
  const delay = (index % 3) * 0.1;

  const excerpt = post.content.rendered
    .replace(/<[^>]+>/g, "")
    .slice(0, 120);

  return (
    <FadeUp
      className={styles.card}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.num}>
        {(index + 1).toString().padStart(2, "0")}
      </div>

      <div className={styles.cat}>
        Tactical Writing
      </div>

      <h3 className={styles.title}>
        {post.title.rendered}
      </h3>

      <p className={styles.excerpt}>
        {excerpt}...
      </p>

      <Link
        to={`/writing/${post.slug}`}
        className={styles.readMore}
      >
        Read More →
      </Link>
    </FadeUp>
  );
}

export default function WritingSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const data = await getWritingPosts();

      console.log(data);

      setPosts(data);
    }

    loadPosts();
  }, []);

  return (
    <section className="section" id="writing">
      <div className="pitch-grid" />

      <SectionHeader
        label="04 — Editorial"
        title="TACTICAL"
        accent="WRITING"
      />

      <div className={styles.grid}>
        {posts.slice(0, 6).map((post, index) => (
          <WritingCard
            key={post.id}
            post={post}
            index={index}
          />
        ))}
      </div>

      <div className={styles.loadMoreWrap}>
        <Link
          to="/writing"
          className={styles.loadMoreBtn}
        >
          VIEW ALL ARTICLES
        </Link>
      </div>
    </section>
  );
}