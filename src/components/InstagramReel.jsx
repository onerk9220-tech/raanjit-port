import { useState } from "react";

const InstagramReel = ({ reel }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article className="instagram-reel-card">
      <div className="instagram-reel-card__media">
        {isPlaying ? (
          <iframe
            src={reel.embedUrl}
            title={reel.title}
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="instagram-reel-card__play"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${reel.title}`}
          >
            <span className="instagram-reel-card__play-icon" aria-hidden="true">
              ▶
            </span>
            <span>{reel.title}</span>
            <small>PLAY INSTAGRAM REEL</small>
          </button>
        )}
      </div>
      <a href={reel.url} target="_blank" rel="noreferrer" className="instagram-reel-card__link">
        Open on Instagram ↗
      </a>
    </article>
  );
};

export default InstagramReel;
