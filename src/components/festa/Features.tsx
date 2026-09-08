import { features } from "@/data/festa";

import { Reveal, Section, SectionHeading, SoonBadge } from "./primitives";

export function Features() {
  return (
    <Section id="about" className="bg-ivory">
      <Reveal>
        <SectionHeading
          eyebrow="ჩვენ შესახებ"
          title="ყველაფერი, რაც დახვეწილ მოსაწვევს სჭირდება"
          subtitle="Festa.ge ქმნის ციფრულ საქორწილო მოსაწვევებს, რომლებიც ლუქსუსური საქორწილო სტაციონარის სილამაზეს მობილურ ეკრანზე გადმოიტანს."
        />
      </Reveal>

      <div className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.05}>
            <div className="border-t border-border/80 pt-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="min-w-0 text-[1.0625rem] text-burgundy-deep">{f.title}</h3>
                {/* Advanced functionality is design-only in this phase. */}
                {f.soon ? <SoonBadge /> : null}
              </div>
              <p className="mt-3 text-[0.875rem] leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
