import { MessageCircle } from "lucide-react";
import { toast } from "sonner";

import { FestaButton, FestaLinkButton, Reveal } from "./primitives";

export function FinalCta() {
  return (
    <section id="cta" className="relative isolate overflow-hidden bg-burgundy px-5 py-24 sm:px-8 sm:py-28">
      <span
        className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="rule-gold mx-auto block h-px w-20" aria-hidden="true" />
          <h2 className="mt-8 text-balance text-3xl leading-[1.22] text-ivory sm:text-[2.6rem]">
            თქვენი განსაკუთრებული დღე იმსახურებს განსაკუთრებულ მოსაწვევს
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <FestaLinkButton href="#designs" variant="gold">
              დაიწყე Festa-სთან ერთად
            </FestaLinkButton>
            {/* Visual placeholder — no real WhatsApp number connected yet. */}
            <FestaButton
              variant="ghostLight"
              onClick={() =>
                toast("მალე დაემატება", {
                  description: "WhatsApp-ით დაკავშირება მალე გააქტიურდება.",
                })
              }
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              WhatsApp
            </FestaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
