import { cn } from "@/lib/utils";

type PhoneFrameProps = {
  /** Design name shown via the card below the frame and used by the iframe title. */
  title: string;
  /** Poster image rendered inside the frame when no video or demo URL is set. */
  poster: string;
  /** Optional video URL — when set, replaces the poster inside the same frame. */
  videoSrc?: string | undefined;
  /** Optional live demo URL — when set, loads the site inside the phone frame. */
  demoUrl?: string | undefined;
  /** Optional extra classes for the outer frame (e.g. larger width in a modal). */
  className?: string | undefined;
};

/**
 * Shared minimalist phone frame (9:19.5) used for every demo card.
 * Swap `title`, `poster`, `videoSrc` or `demoUrl` per design.
 */
export function PhoneFrame({
  title,
  poster,
  videoSrc,
  demoUrl,
  className,
}: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19.5] w-full max-w-55 rounded-[1.75rem] border border-ink/80 bg-ink p-1.5 shadow-lift",
        className
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.35rem] bg-ivory-deep">
        {demoUrl ? (
          <iframe
            src={demoUrl}
            title={title}
            loading="lazy"
            className="h-full w-full border-0 bg-white"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            allow="fullscreen"
          />
        ) : videoSrc ? (
          <video
            src={`${videoSrc}#t=0.1`}
            controls
            playsInline
            muted
            preload="metadata"
            className="h-full w-full object-contain"
            aria-label={title}
          />
        ) : poster ? (
          <img
            src={poster}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
            <span className="eyebrow text-burgundy-soft">დემო</span>
            <span className="mt-2 text-sm leading-snug text-muted-foreground">
              {title}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
