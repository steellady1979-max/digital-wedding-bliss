import { LayoutTemplate, PenLine, Share2 } from "lucide-react";

import { steps } from "@/data/festa";

import { Reveal, Section, SectionHeading } from "./primitives";

const icons = [LayoutTemplate, PenLine, Share2] as const;

export function HowItWorks() {
  return (
    <Section id="how" className="border-y border-border/60 bg-ivory-deep/55">
      <Reveal>
        <SectionHeading eyebrow="პროცესი" title="როგორ იქმნება თქვენი მოსაწვევი?" />
      </Reveal>

      <ol className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
        {steps.map((step, i) => {
          const Icon = icons[i % icons.length]!;
          return (
            <Reveal key={step.title} delay={i * 0.1}>
              <li className="relative h-full rounded-3xl border border-border bg-white p-6 shadow-card">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/60 text-burgundy">
                    <Icon className="h-5 w-5" strokeWidth={1.25} />
                  </span>
                  <span className="font-serif text-[2rem] leading-none text-burgundy/35">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl text-burgundy-deep">{step.title}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
