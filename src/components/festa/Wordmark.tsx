import { cn } from "@/lib/utils";

/** Festa.ge logo placeholder — swap for the final logotype when ready. */
export function Wordmark({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-baseline gap-1.5", className)}>
      <span
        className={cn(
          "font-serif text-[1.375rem] leading-none tracking-[0.02em]",
          tone === "light" ? "text-ivory" : "text-burgundy",
        )}
      >
        Festa
      </span>
      <span
        className={cn(
          "font-sans text-[0.6875rem] tracking-[0.24em] uppercase",
          tone === "light" ? "text-gold" : "text-gold",
        )}
      >
        .ge
      </span>
    </span>
  );
}
