import { testimonials } from "@/data/festa";

import { Reveal, Section, SectionHeading } from "./primitives";

/**
 * TEMPORARY DEMO REVIEWS — see `testimonials` in src/data/festa.ts.
 * Replace with real, approved client feedback before launch.
 */
export function Testimonials() {
  return (
    <Section className="border-y border-border/60 bg-ivory-deep/55">
      <Reveal>
        <SectionHeading eyebrow="წყვილების გამოხმაურება" title="სიტყვები, რომლებიც გვამხნევებს" />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-sm border border-border/70 bg-card p-7 shadow-card">
              <span className="font-serif text-4xl leading-none text-gold" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border/70 pt-4">
                <span className="block font-serif text-[1.0625rem] text-burgundy-deep">
                  {t.name}
                </span>
                <span className="mt-1 block text-[0.75rem] tracking-[0.14em] text-muted-foreground uppercase">
                  {t.location}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-center text-[0.75rem] text-muted-foreground/80">
        * დროებითი დემო გამოხმაურებები — გამოქვეყნებამდე ჩაანაცვლეთ რეალურით.
      </p>
    </Section>
  );
}
