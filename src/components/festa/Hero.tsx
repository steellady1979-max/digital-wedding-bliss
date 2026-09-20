import { motion, useReducedMotion } from "motion/react";

import heroImg from "@/assets/hero.jpg";
import cardImg from "@/assets/design-ivory.jpg";

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
      <div
        className="absolute inset-0 bg-burgundy-deep/72"
        aria-hidden="true"
      />
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
            თქვენი სიყვარულის ისტორია — ერთ განსაკუთრებულ მოსაწვევში
          </motion.h1>
          <motion.p
            className="mt-6 max-w-lg text-[1rem] leading-relaxed text-ivory/80"
            {...rise(0.2)}
          >
            შექმენით დახვეწილი ციფრული საქორწილო მოსაწვევი, რომელიც თქვენს სტუმრებს
            ყველა მნიშვნელოვან დეტალს ერთ სივრცეში გაუზიარებს.
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap gap-3" {...rise(0.3)}>
            <FestaLinkButton href="#designs" variant="gold">
              აირჩიე დიზაინი
            </FestaLinkButton>
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
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}

/** Mobile preview of an invitation — pure presentation, no live data. */
function PhoneMockup() {
  return (
    <div className="relative w-[248px] shrink-0 sm:w-[276px]">
      <div
        className="absolute -inset-6 rounded-[3rem] bg-gold/10 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative rounded-[2.25rem] border border-ivory/25 bg-burgundy-deep/60 p-2.5 shadow-lift backdrop-blur-sm">
        <div className="overflow-hidden rounded-[1.85rem] bg-ivory">
          <div className="relative">
            <img
              src={cardImg}
              alt="მოსაწვევის მობილური ვერსიის გადახედვა"
              width={1008}
              height={1264}
              loading="lazy"
              className="h-52 w-full object-cover"
            />
            <div className="absolute inset-0 grid place-items-center bg-burgundy-deep/35 text-center">
              <div className="px-6">
                <p className="eyebrow text-gold">14.09.2026</p>
                <p className="mt-2 font-serif text-2xl text-ivory">ანა &amp; გიორგი</p>
              </div>
            </div>
          </div>
          <div className="space-y-3 px-5 py-5">
            <span className="rule-gold block h-px w-14" aria-hidden="true" />
            <p className="font-serif text-[0.95rem] text-burgundy-deep">
              გვსურს, ეს დღე ჩვენთან ერთად გაიზიაროთ
            </p>
            <div className="space-y-2 pt-1">
              {["ცერემონია — 17:00", "ლოკაცია — მუხრანის ველი", "ვახშამი — 19:30"].map(
                (row) => (
                  <div
                    key={row}
                    className="flex items-center gap-2 text-[0.75rem] text-ink/65"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                    {row}
                  </div>
                ),
              )}
            </div>
            <div className="mt-4 rounded-full bg-burgundy px-4 py-2.5 text-center text-[0.6875rem] tracking-[0.12em] text-ivory">
              დასწრების დადასტურება
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
