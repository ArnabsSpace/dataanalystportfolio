import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  getWritingPost,
  getMediaById,
} from "../services/api";

export default function WritingDetail() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    async function loadPost() {
      const data = await getWritingPost(slug);

      setPost(data);

      if (data?.acf?.featured_image) {
        const media = await getMediaById(
          data.acf.featured_image
        );

        setImage(media.source_url);
      }
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
        padding: "20px",textAlign: "left",
      }}
    >
      {image && (
        <img
          src={image}
          alt={post.title.rendered}
          style={{
            width: "100%",
            marginBottom: "30px",
          }}
        />
      )}

      <p>{post.acf.category}</p>

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