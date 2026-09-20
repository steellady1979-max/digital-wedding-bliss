import { cn } from "@/lib/utils";

/** Official Festa wordmark supplied by the brand owner. */
export function Wordmark({
  tone = "dark",
  size = "default",
  className,
}: {
  tone?: "dark" | "light";
  size?: "default" | "hero";
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src="/festa-logo.png"
        alt="Festa"
        width={1774}
        height={887}
        className={cn(
          "block w-auto object-contain",
          size === "hero" ? "h-20 sm:h-24" : "h-11",
          tone === "light" && "brightness-0 invert",
        )}
      />
    </span>
  );
}
