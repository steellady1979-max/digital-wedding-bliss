type PhoneFrameProps = {
  /** Design name shown via the card below the frame. */
  title: string;
  /** Poster image rendered inside the frame when no video is set. */
  poster: string;
  /** Optional video URL — when set, replaces the poster inside the same frame. */
  videoSrc?: string | undefined;
};

/**
 * Shared minimalist phone frame (9:19.5) used for every demo card.
 * Swap `title`, `poster` and `videoSrc` per design.
 */
export function PhoneFrame({ title, poster, videoSrc }: PhoneFrameProps) {
  return (
    <div className="relative mx-auto aspect-[9/19.5] w-full max-w-55 rounded-[1.75rem] border border-ink/80 bg-ink p-1.5 shadow-lift">
      <div className="relative h-full w-full overflow-hidden rounded-[1.35rem] bg-ivory-deep">
        {videoSrc ? (
          <video
            src={videoSrc}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-contain"
            aria-label={title}
          />
        ) : (
          <img
            src={poster}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </div>
  );
}
