import { cn } from "@/lib/utils";

type PhoneFrameProps = {
  /** Demo name used as the iframe / media label. */
  title: string;
  /** Poster image rendered inside the frame when no demo URL is set. */
  poster: string;
  /** Optional live demo URL — when set, loads the site inside the phone frame. */
  demoUrl?: string | undefined;
  /** Optional extra classes for the outer frame (e.g. larger width). */
  className?: string | undefined;
  /** Load immediately when the frame is visible above the fold. */
  eager?: boolean;
};

/** Shared translucent phone silhouette (9:19.5) used for the live demo showcase. */
export function PhoneFrame({ title, poster, demoUrl, className, eager = false }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19.5] w-full max-w-64 rounded-[2.65rem] border border-burgundy/8 bg-transparent p-1 shadow-[0_20px_50px_-40px_rgba(105,27,34,0.35)]",
        className,
      )}
    >
      <span
        className="absolute top-2.5 left-1/2 z-10 h-1 w-12 -translate-x-1/2 rounded-full bg-burgundy/12 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="relative h-full w-full overflow-hidden rounded-[2.35rem] bg-ivory-deep">
        {demoUrl ? (
          <iframe
            src={demoUrl}
            title={title}
            loading={eager ? "eager" : "lazy"}
            className="h-full w-full border-0 bg-white"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            allow="fullscreen"
          />
        ) : poster ? (
          <img src={poster} alt={title} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
            <span className="eyebrow text-burgundy-soft">დემო</span>
            <span className="mt-2 text-sm leading-snug text-muted-foreground">{title}</span>
          </div>
        )}
      </div>
    </div>
  );
}
