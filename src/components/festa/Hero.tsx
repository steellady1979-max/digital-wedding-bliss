import { motion, useReducedMotion } from "motion/react";

import { PhoneFrame } from "./PhoneFrame";
import { FestaLinkButton } from "./primitives";
import { Wordmark } from "./Wordmark";

export function Hero() {
  const reduced = useReducedMotion();
  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 0.61, 0.36, 1] as const },
        };

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-border/60 bg-ivory"
    >
      <span
        className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-blush/65 blur-3xl"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10 lg:pt-48 lg:pb-32">
        <div className="max-w-xl">
          <motion.div className="mb-9" {...rise(0)}>
            <Wordmark size="hero" />
          </motion.div>
          <motion.p className="eyebrow text-burgundy" {...rise(0)}>
            ციფრული საქორწილო მოსაწვევები
          </motion.p>
          <motion.h1
            className="mt-5 text-balance text-[2.45rem] leading-[1.14] text-burgundy-deep sm:text-[3.4rem] lg:text-[4rem]"
            {...rise(0.1)}
          >
            თქვენი ამბავი — ერთ განსაკუთრებულ მოსაწვევში
          </motion.h1>
          <motion.p
            className="mt-6 max-w-lg text-[1rem] leading-relaxed text-muted-foreground"
            {...rise(0.2)}
          >
            ლამაზი, პირადი და მარტივად გასაზიარებელი.
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap gap-3" {...rise(0.3)}>
            <FestaLinkButton href="#designs">
              აირჩიე დიზაინი
            </FestaLinkButton>
            <FestaLinkButton href="#designs" variant="outline">
              ნახე დემო
            </FestaLinkButton>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center lg:justify-end"
          {...(reduced
            ? {}
            : {
                initial: { opacity: 0, y: 34 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] as const },
              })}
        >
          <div className="relative w-full max-w-[19rem]">
            <div
              className="absolute -inset-7 rounded-[4rem] bg-blush/70 blur-3xl"
              aria-hidden="true"
            />
            <PhoneFrame
              title="გიგა და ნინის ცოცხალი მოსაწვევი"
              poster=""
              demoUrl="https://giga-nini.vercel.app"
              eager
              className="max-w-[19rem]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
