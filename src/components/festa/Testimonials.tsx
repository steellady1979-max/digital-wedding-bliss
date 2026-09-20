import { Play } from "lucide-react";

import { Reveal, Section, SectionHeading } from "./primitives";

const videoSlots = ["ვიდეო 01", "ვიდეო 02", "ვიდეო 03"];

export function Testimonials() {
  return (
    <Section className="border-y border-border/60 bg-ivory-deep/55">
      <Reveal>
        <SectionHeading eyebrow="ვიდეო შეფასებები" title="რას ამბობენ ჩვენზე" />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {videoSlots.map((label, i) => (
          <Reveal key={label} delay={i * 0.08}>
            <div className="group relative mx-auto aspect-[9/16] w-full max-w-[17rem] overflow-hidden rounded-[2rem] border border-burgundy/15 bg-gradient-to-br from-[#f5e7df] via-[#efe1d5] to-[#d8b8ac] shadow-card">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.7),transparent_38%)]" />
              <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-burgundy text-ivory shadow-lift transition-transform group-hover:scale-105">
                  <Play className="ml-0.5 h-5 w-5 fill-current" />
                </span>
                <span className="mt-5 text-sm font-medium text-burgundy-deep">{label}</span>
                <span className="mt-1 text-xs text-burgundy/65">ვიდეოს ადგილი</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
