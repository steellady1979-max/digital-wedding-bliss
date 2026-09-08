import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

import { navLinks } from "@/data/festa";

import { Wordmark } from "./Wordmark";

/** Social + email links are placeholders in this phase. */
const socials = [
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
  { label: "WhatsApp", Icon: MessageCircle },
  { label: "Email", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-burgundy-deep px-5 pt-16 pb-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark tone="light" />
            <p className="mt-4 max-w-xs text-[0.875rem] leading-relaxed text-ivory/60">
              ციფრული საქორწილო მოსაწვევები, რომლებიც ლუქსუსური სტაციონარის სილამაზეს
              თქვენს სტუმრების ტელეფონში გადმოიტანს.
            </p>
          </div>

          <nav aria-label="ფუტერის ნავიგაცია">
            <h2 className="eyebrow text-gold">ნავიგაცია</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[0.875rem] text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-gold">კონტაქტი</h2>
            <div className="mt-5 flex gap-3">
              {socials.map(({ label, Icon }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  onClick={() =>
                    toast("მალე დაემატება", {
                      description: `${label} მალე გააქტიურდება.`,
                    })
                  }
                  className="grid h-10 w-10 place-items-center rounded-sm border border-ivory/20 text-ivory/75 transition-colors hover:border-gold/60 hover:text-gold"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </button>
              ))}
            </div>
            <p className="mt-5 text-[0.8125rem] text-ivory/50">hello@festa.ge</p>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/12 pt-6">
          <p className="text-center text-[0.75rem] tracking-[0.08em] text-ivory/45">
            © 2026 Festa.ge
          </p>
        </div>
      </div>
    </footer>
  );
}
