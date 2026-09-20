import { Instagram, Mail, Music2 } from "lucide-react";

import { navLinks } from "@/data/festa";

import { Wordmark } from "./Wordmark";

const socials = [
  {
    label: "TikTok",
    Icon: Music2,
    href: "https://www.tiktok.com/@festainvitations",
  },
  {
    label: "Instagram",
    Icon: Instagram,
    href: "https://www.instagram.com/festainvitations/",
  },
  {
    label: "Email",
    Icon: Mail,
    href: "mailto:festainvitations@gmail.com",
  },
];

export function Footer() {
  return (
    <footer className="bg-[#aa2e36] px-5 pt-16 pb-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark tone="light" />
            <p className="mt-4 max-w-xs text-[0.875rem] leading-relaxed text-ivory/60">
              თქვენი ისტორია — ციფრულ მოსაწვევში.
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
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20 text-ivory/75 transition-colors hover:border-gold/60 hover:text-gold"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <a
              href="mailto:festainvitations@gmail.com"
              className="mt-5 inline-block text-[0.8125rem] text-ivory/70 transition-colors hover:text-ivory"
            >
              festainvitations@gmail.com
            </a>
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
