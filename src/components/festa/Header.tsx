import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navLinks } from "@/data/festa";
import { cn } from "@/lib/utils";

import { FestaLinkButton } from "./primitives";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"ka" | "en">("ka");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-white/95 shadow-[0_8px_30px_-24px_rgba(45,37,37,.35)] backdrop-blur-md"
          : "border-b border-border/70 bg-white/95 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:py-4">
        <a href="#top" className="min-w-0" aria-label="Festa.ge — მთავარი">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="მთავარი ნავიგაცია">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[0.875rem] text-ink/75 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-burgundy hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle lang={lang} onChange={setLang} />
          <FestaLinkButton href="#cta" className="hidden px-5 py-2.5 sm:inline-flex">
            შეუკვეთე მოსაწვევი
          </FestaLinkButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "მენიუს დახურვა" : "მენიუს გახსნა"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-burgundy/20 text-burgundy transition-colors hover:bg-burgundy/5 lg:hidden"
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-white transition-[max-height,opacity] duration-400 lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-5 py-2" aria-label="მობილური ნავიგაცია">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/50 py-4 font-serif text-lg text-burgundy-deep last:border-0"
            >
              {l.label}
            </a>
          ))}
          <FestaLinkButton href="#cta" onClick={() => setOpen(false)} className="my-5">
            შეუკვეთე მოსაწვევი
          </FestaLinkButton>
        </nav>
      </div>
    </header>
  );
}

function LangToggle({
  lang,
  onChange,
}: {
  lang: "ka" | "en";
  onChange: (l: "ka" | "en") => void;
}) {
  return (
    <div
      className="flex shrink-0 items-center overflow-hidden rounded-full border border-burgundy/15 text-[0.6875rem] tracking-[0.12em] uppercase"
      role="group"
      aria-label="ენის არჩევა"
    >
      {(["ka", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => onChange(code)}
          aria-pressed={lang === code}
          className={cn(
            "px-2.5 py-1.5 transition-colors",
            lang === code ? "bg-burgundy text-ivory" : "text-ink/60 hover:text-burgundy",
          )}
        >
          {code === "ka" ? "ქარ" : "EN"}
        </button>
      ))}
    </div>
  );
}
