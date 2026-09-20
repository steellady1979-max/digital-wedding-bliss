import { Mail } from "lucide-react";

import { FestaLinkButton, Reveal } from "./primitives";

export function FinalCta() {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden bg-ivory-deep px-5 py-24 sm:px-8 sm:py-28"
    >
      <span
        className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="rule-gold mx-auto block h-px w-20" aria-hidden="true" />
          <h2 className="mt-8 text-balance text-3xl leading-[1.22] text-burgundy-deep sm:text-[2.6rem]">
            შექმენით თქვენი მოსაწვევი
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <FestaLinkButton href="mailto:festainvitations@gmail.com">მოგვწერეთ</FestaLinkButton>
            <FestaLinkButton href="#designs" variant="outline">
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              ნახეთ დიზაინები
            </FestaLinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
