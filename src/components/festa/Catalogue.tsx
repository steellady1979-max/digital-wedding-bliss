import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

import { designs } from "@/data/festa";
import { cn } from "@/lib/utils";

import { PhoneFrame } from "./PhoneFrame";
import { Reveal, Section, SectionHeading } from "./primitives";

/**
 * Single live showcase: one phone frame with a round pill selector.
 * Only the active demo is mounted, so the page loads one site at a time.
 */
export function Catalogue() {
  const [activeId, setActiveId] = useState(designs[0]!.id);
  const active = designs.find((d) => d.id === activeId) ?? designs[0]!;

  return (
    <Section id="designs" className="bg-ivory">
      <Reveal>
        <SectionHeading eyebrow="ცოცხალი დემოები" title="აირჩიეთ და გამოცადეთ" />
      </Reveal>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
            {designs.map((design) => {
              const isActive = design.id === active.id;
              return (
                <button
                  key={design.id}
                  type="button"
                  onClick={() => setActiveId(design.id)}
                  className={cn(
                    "relative rounded-full border px-5 py-2.5 text-[0.8125rem] transition-all duration-300",
                    isActive
                      ? "border-transparent bg-burgundy text-ivory shadow-card"
                      : "border-border bg-card text-burgundy hover:border-gold/60 hover:bg-ivory-deep",
                  )}
                >
                  {design.name}
                </button>
              );
            })}
          </div>

          <div className="mt-9 rounded-3xl border border-border/70 bg-card p-7 shadow-card">
            <span className="inline-flex rounded-full bg-blush/45 px-4 py-1.5 text-[0.6875rem] tracking-[0.16em] text-burgundy-deep uppercase">
              {active.category}
            </span>
            <h3 className="mt-5 text-2xl text-burgundy-deep">{active.name}</h3>
            <a
              href={active.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-burgundy/25 px-6 py-2.5 text-[0.8125rem] text-burgundy transition-all duration-300 hover:border-burgundy hover:bg-burgundy/5"
            >
              სრულ ეკრანზე გახსნა
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>

        <div className="order-1 flex justify-center lg:order-2">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative"
          >
            <div
              className="absolute -inset-8 rounded-[4rem] bg-gold/12 blur-3xl"
              aria-hidden="true"
            />
            <PhoneFrame
              title={active.name}
              poster=""
              demoUrl={active.demoUrl}
              eager
              className="max-w-[19rem]"
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
