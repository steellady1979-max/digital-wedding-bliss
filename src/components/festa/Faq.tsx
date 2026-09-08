import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/festa";

import { Reveal, Section, SectionHeading } from "./primitives";

export function Faq() {
  return (
    <Section id="faq" className="bg-ivory">
      <Reveal>
        <SectionHeading eyebrow="ხშირი კითხვები" title="კარგია, როცა ყველაფერი ნათელია" />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="border-b border-border/80"
              >
                <AccordionTrigger className="py-5 text-left font-serif text-[1.0625rem] text-burgundy-deep hover:no-underline sm:text-[1.125rem]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[0.9rem] leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
    </Section>
  );
}
