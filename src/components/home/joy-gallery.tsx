import { beachVideo } from "@/content/joys";

export function JoyGallery() {
  return (
    <div className="joy-gallery">
      <figure>
        <div className="joy-media">
          <video
            autoPlay
            playsInline
            loop
            muted
            preload="auto"
            poster={beachVideo.poster}
            aria-label={beachVideo.caption}
          >
            <source src={beachVideo.src} type="video/mp4" />
            <a href={beachVideo.src}>Watch the beach video</a>
          </video>
        </div>
        <figcaption className="gallery-caption">
          <span className="handwritten">{beachVideo.caption}</span>
          <svg className="gallery-waves" viewBox="0 0 180 48" fill="none" aria-hidden="true">
            <path d="M2 13q20-13 40 4t40 3 40 5 40 1 16 4M19 29q20-12 40 3t40 4 40 5 20-1" />
          </svg>
        </figcaption>
      </figure>
    </div>
  );
}
