import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Subtle scroll reveal. Respects reduced-motion preferences. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow", tone === "light" ? "text-gold" : "text-burgundy-soft")}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-balance text-3xl leading-[1.2] sm:text-4xl",
          tone === "light" ? "text-ivory" : "text-burgundy-deep",
        )}
      >
        {title}
      </h2>
      <span
        className={cn(
          "rule-gold mt-6 block h-px w-24",
          align === "center" && "mx-auto",
        )}
        aria-hidden="true"
      />
      {subtitle ? (
        <p
          className={cn(
            "mt-6 text-[0.975rem] leading-relaxed",
            tone === "light" ? "text-ivory/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  variant?: "solid" | "light" | "outline" | "ghostLight" | "gold";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-[0.8125rem] font-medium tracking-[0.06em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60";

const variants = {
  solid: "bg-burgundy text-ivory hover:bg-burgundy-deep shadow-card hover:shadow-lift",
  light: "bg-white text-burgundy shadow-card hover:bg-ivory-deep hover:shadow-lift",
  outline:
    "border border-burgundy/35 bg-white text-burgundy hover:border-burgundy hover:bg-burgundy/5",
  ghostLight: "border border-white/55 text-white hover:border-white hover:bg-white/10",
  gold: "bg-gold/95 text-burgundy-deep hover:bg-gold",
} as const;

export function FestaButton({
  children,
  variant = "solid",
  className,
  ...rest
}: ButtonProps) {
  return (
    <button type="button" className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function FestaLinkButton({
  children,
  href,
  variant = "solid",
  className,
  ...rest
}: {
  children: ReactNode;
  href: string;
  variant?: keyof typeof variants;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}

/** Small "coming soon" marker for functionality that arrives in a later phase. */
export function SoonBadge() {
  return (
    <span className="ml-2 inline-flex shrink-0 items-center rounded-full border border-gold/50 bg-gold/10 px-2 py-0.5 text-[0.625rem] font-medium tracking-[0.14em] text-burgundy-soft uppercase">
      მალე
    </span>
  );
}
