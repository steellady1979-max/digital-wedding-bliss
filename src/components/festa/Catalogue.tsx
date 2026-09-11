import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { designs, type InvitationDesign } from "@/data/festa";

import { DemoModal } from "./DemoModal";
import { PhoneFrame } from "./PhoneFrame";
import { FestaButton, Reveal, Section, SectionHeading } from "./primitives";

export function Catalogue() {
  const [active, setActive] = useState<InvitationDesign | null>(null);

  return (
    <Section id="designs" className="bg-ivory">
      <Reveal>
        <SectionHeading
          eyebrow="კატალოგი"
          title="აღმოაჩინეთ Festa-ს დიზაინები"
          subtitle="აირჩიეთ სტილი, რომელიც ყველაზე უკეთ ასახავს თქვენს სიყვარულის ისტორიას."
        />
      </Reveal>

      <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {designs.map((design, i) => (
          <Reveal key={design.id} delay={i * 0.06}>
            <DesignCard
              design={design}
              onPreview={() => setActive(design)}
              onSelect={() =>
                toast("მალე დაემატება", {
                  description: `„${design.name}“-ის ონლაინ შეკვეთა მალე გაიხსნება.`,
                })
              }
            />
          </Reveal>
        ))}
      </div>

      <DemoModal design={active} onClose={() => setActive(null)} />
    </Section>
  );
}

function DesignCard({
  design,
  onPreview,
  onSelect,
}: {
  design: InvitationDesign;
  onPreview: () => void;
  onSelect: () => void;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-border/70 bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 hover:shadow-lift">
      <div className="relative px-8 pt-10 pb-2">
        <PhoneFrame title={design.name} poster={design.image} />
        <span className="absolute top-5 left-5 rounded-full bg-ivory/92 px-3 py-1 text-[0.625rem] tracking-[0.16em] text-burgundy uppercase backdrop-blur-sm">
          {design.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl text-burgundy-deep">{design.name}</h3>
        <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-muted-foreground">
          {design.description}
        </p>
        <div className="mt-6 flex flex-col gap-2.5">
          <FestaButton onClick={onPreview} variant="outline" className="w-full">
            დემოს ნახვა
            <ArrowUpRight className="h-3.5 w-3.5" />
          </FestaButton>
          <FestaButton onClick={onSelect} className="w-full">
            ამ დიზაინის არჩევა
          </FestaButton>
        </div>
      </div>
    </article>
  );
}
