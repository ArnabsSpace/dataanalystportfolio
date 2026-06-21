import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getWritingPost } from "../services/api";

export default function WritingDetail() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    async function loadPost() {
      const data = await getWritingPost(slug);

      setPost(data);
    }

    loadPost();
  }, [slug]);

  if (!post) {
    return <h2>Loading...</h2>;
  }

  return (
    <section
      style={{
        maxWidth: "900px",
        margin: "100px auto",
        padding: "20px",
      }}
    >
      <h1
        dangerouslySetInnerHTML={{
          __html: post.title.rendered,
        }}
      />

      <div
        dangerouslySetInnerHTML={{
          __html: post.content.rendered,
        }}
      />
    </section>
  );
}