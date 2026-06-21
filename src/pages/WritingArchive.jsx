import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import WritingCard from "../components/writing/WritingCard";
import styles from "../components/sections/WritingSection.module.css";

import { getWritingPosts } from "../services/api";

export default function WritingArchive() {
  const [posts, setPosts] = useState([]);
  const POSTS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const start =
  (currentPage - 1) * POSTS_PER_PAGE;

const end =
  start + POSTS_PER_PAGE;

const currentPosts =
  posts.slice(start, end);

const totalPages =
  Math.ceil(posts.length / POSTS_PER_PAGE);

  useEffect(() => {
    async function loadPosts() {
      const data = await getWritingPosts();

      setPosts(data);
    }

    loadPosts();
  }, []);

  return (
    <section className="section">
      <h1>All Tactical Writing</h1>

      <div className={styles.grid}>
        {currentPosts.map((post, index) => (
            <WritingCard
            key={post.id}
            post={post}
            index={index}
            />
        ))}
        </div>

      <div>
        {[...Array(totalPages)].map((_, index) => (
            <button className="countbtn"
            key={index}
            onClick={() =>
                setCurrentPage(index + 1)
            }
            >
            {index + 1}
            </button>
        ))}
        </div>
    </section>
  );
}