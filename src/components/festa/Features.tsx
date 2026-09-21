import { features } from "@/data/festa";

import { Reveal, Section, SectionHeading } from "./primitives";

export function Features() {
  return (
    <Section id="about" className="bg-ivory">
      <Reveal>
        <SectionHeading eyebrow="ჩვენ შესახებ" title="ყველაფერი ერთ ბმულში" />
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.05}>
            <div className="h-full rounded-3xl border border-border bg-white p-6 shadow-card">
              <div className="flex items-start justify-between gap-3">
                <h3 className="min-w-0 text-[1.0625rem] text-burgundy-deep">{f.title}</h3>
              </div>
              <p className="mt-3 text-[0.875rem] leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
