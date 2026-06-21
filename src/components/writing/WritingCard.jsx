import { Link } from "react-router-dom";
import FadeUp from "../ui/FadeUp";
import styles from "../sections/WritingSection.module.css";

export default function WritingCard({ post, index }) {
  const delay = (index % 3) * 0.1;

  const excerpt =
    post.acf?.excerpt ||
    post.content.rendered
      .replace(/<[^>]+>/g, "")
      .slice(0, 120);

  return (
    <FadeUp
      className={styles.card}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.num}>
        {post.acf?.article_number ||
          (index + 1).toString().padStart(2, "0")}
      </div>

      <div className={styles.cat}>
        {post.acf?.category || "Tactical Writing"}
      </div>

      <h3 className={styles.title}>
        {post.title.rendered}
      </h3>

      <p className={styles.excerpt}>
        {excerpt}
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