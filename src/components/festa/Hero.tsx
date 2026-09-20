import { motion, useReducedMotion } from "motion/react";

import heroImg from "@/assets/hero.jpg";
import { PhoneFrame } from "./PhoneFrame";
import { FestaLinkButton } from "./primitives";

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
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="წყვილი ხელიხელჩაკიდებული საქორწილო ცერემონიაზე, ბორდოსფერი ყვავილების ფონზე"
        width={1600}
        height={1104}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-burgundy-deep/72" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/85 via-burgundy/45 to-burgundy-deep/55"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10 lg:pt-48 lg:pb-32">
        <div className="max-w-xl">
          <motion.p className="eyebrow text-gold" {...rise(0)}>
            ციფრული საქორწილო მოსაწვევები
          </motion.p>
          <motion.h1
            className="mt-5 text-balance text-[2.125rem] leading-[1.18] text-ivory sm:text-5xl lg:text-[3.35rem]"
            {...rise(0.1)}
          >
            თქვენი ამბავი — ერთ განსაკუთრებულ მოსაწვევში
          </motion.h1>
          <motion.p
            className="mt-6 max-w-lg text-[1rem] leading-relaxed text-ivory/80"
            {...rise(0.2)}
          >
            ლამაზი, პირადი და მარტივად გასაზიარებელი.
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap gap-3" {...rise(0.3)}>
            <FestaLinkButton href="#designs">აირჩიე დიზაინი</FestaLinkButton>
            <FestaLinkButton href="#designs" variant="ghostLight">
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
              className="absolute -inset-7 rounded-[4rem] bg-ivory/12 blur-3xl"
              aria-hidden="true"
            />
            <PhoneFrame
              title="გიგა და ნინის ცოცხალი მოსაწვევი"
              poster=""
              demoUrl="https://giga-nini.vercel.app"
              eager
              className="max-w-[19rem] border-ivory/35"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
