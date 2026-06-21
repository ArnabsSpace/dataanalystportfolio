import { useEffect, useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import { getVideos,
  getMediaById, } from "../../services/api";

// import styles from "./VideoSection.module.css";

export default function VideoSection() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
  async function loadVideos() {
    const data = await getVideos();

    const videosWithThumbs = await Promise.all(
      data.map(async (video) => {
        const media = await getMediaById(
          video.acf.thumbnail
        );

        return {
          ...video,
          thumbnailUrl:
            media.source_url,
        };
      })
    );

    setVideos(videosWithThumbs);
  }

  loadVideos();
}, []);

  return (
    <section className="section">
      <SectionHeader
        label="05 — Video Analysis"
        title="TACTICAL"
        accent="VIDEOS"
      />

      <div className="gridVid">
        {videos.map((video) => (
            <div
                key={video.id}
                className="videoCard"
            >
                <video
                controls
                preload="metadata"
                poster={video.thumbnailUrl}
                >
                <source
                    src={video.acf.video_url}
                    type="video/mp4"
                />
                </video>

                <h3>{video.title.rendered}</h3>
            </div>
            ))}
      </div>
    </section>
  );
}