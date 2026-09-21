import type { FormEvent } from "react";

import { Send } from "lucide-react";

import { FestaButton, Reveal, Section, SectionHeading } from "./primitives";

const aesthetics = [
  "მინიმალისტური და თანამედროვე",
  "რომანტიკული და აკვარელის სტილის (Hand-painted)",
  "კლასიკური და ელეგანტური",
  "ვინტაჟური / ბოჰემური",
];

const fieldClass =
  "mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-[0.95rem] text-ink outline-none transition placeholder:text-muted-foreground/55 focus:border-burgundy/45 focus:ring-2 focus:ring-burgundy/10";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <span className="text-[0.95rem] font-medium text-burgundy-deep">{children}</span>;
}

export function OrderForm() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const selectedAesthetics = data.getAll("aesthetic").map(String).join(", ");

    const body = [
      `წყვილის სახელები და გვარები:\n${value("coupleNames")}`,
      `ქორწილის თარიღი და დრო:\n${value("dateTime")}`,
      `ღონისძიების მთავარი ლოკაცია:\n${value("location")}`,
      `დღის განრიგი:\n${value("schedule")}`,
      `დრესკოდი:\n${value("dressCode")}`,
      `საიტის ესთეტიკა:\n${selectedAesthetics || "არ არის არჩეული"}`,
      `ფერთა პალიტრა:\n${value("palette")}`,
      `მუსიკალური გაფორმება:\n${value("music")}`,
      `RSVP-ის დამატებითი კითხვა ან ცვლილება:\n${value("rsvpNotes")}`,
      `დამატებითი კომენტარი:\n${value("comment")}`,
    ].join("\n\n");

    const subject = `Festa — მოსაწვევის შეკვეთა: ${value("coupleNames") || "ახალი შეკვეთა"}`;
    window.location.href = `mailto:festainvitations@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section id="order" className="border-t border-border/60 bg-ivory">
      <Reveal>
        <SectionHeading
          eyebrow="შეკვეთის ფორმა"
          title="მოგვიყევით თქვენი ქორწილის შესახებ"
          subtitle="შეავსეთ დეტალები და გამოგვიგზავნეთ — თქვენი პასუხებით შევქმნით მოსაწვევის ვებსაიტს."
        />
      </Reveal>

      <Reveal delay={0.08}>
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-14 max-w-3xl space-y-8 rounded-[2rem] border border-border/80 bg-ivory-deep/55 p-5 shadow-card sm:p-9"
        >
          <label className="block">
            <FieldLabel>წყვილის სახელები და გვარები</FieldLabel>
            <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
              როგორც გსურთ, რომ საიტზე ეწეროს
            </span>
            <input name="coupleNames" required className={fieldClass} />
          </label>

          <label className="block">
            <FieldLabel>ქორწილის თარიღი და დრო</FieldLabel>
            <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
              გამოიყენება საიტზე Countdown ტაიმერისთვის
            </span>
            <input name="dateTime" type="datetime-local" required className={fieldClass} />
          </label>

          <label className="block">
            <FieldLabel>ღონისძიების მთავარი ლოკაცია</FieldLabel>
            <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
              მოგვაწოდეთ ზუსტი მისამართი და Google Maps-ის ლინკი.
            </span>
            <textarea name="location" rows={3} required className={fieldClass} />
          </label>

          <label className="block">
            <FieldLabel>დღის განრიგი (ქრონოლოგია დეტალურად)</FieldLabel>
            <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
              მიუთითეთ საათები, ლოკაციები და თითოეული ლოკაციის რუკის ლინკი.
            </span>
            <textarea
              name="schedule"
              rows={5}
              required
              placeholder="მაგ: 16:00 — ხელმოწერა / მისამართი / რუკის ლინკი"
              className={fieldClass}
            />
          </label>

          <label className="block">
            <FieldLabel>დრესკოდი (Dress Code)</FieldLabel>
            <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
              მიუთითეთ სასურველი ფერთა პალიტრა ან სტილი სტუმრებისთვის.
            </span>
            <textarea name="dressCode" rows={3} className={fieldClass} />
          </label>

          <fieldset>
            <legend className="text-[0.95rem] font-medium text-burgundy-deep">
              რა განწყობა და ესთეტიკა უნდა ჰქონდეს საიტს?
            </legend>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {aesthetics.map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-white px-4 py-3 text-sm leading-relaxed text-ink transition hover:border-burgundy/30"
                >
                  <input
                    type="checkbox"
                    name="aesthetic"
                    value={option}
                    className="mt-1 h-4 w-4 accent-burgundy"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="block">
            <FieldLabel>ფერთა პალიტრა</FieldLabel>
            <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
              მოგვწერეთ სასურველი ფერები ან გამოგვიგზავნეთ ფოტოს ლინკი.
            </span>
            <textarea name="palette" rows={3} className={fieldClass} />
          </label>

          <label className="block">
            <FieldLabel>მუსიკალური გაფორმება</FieldLabel>
            <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
              თუ გსურთ ფონური მუსიკა, მოგვწერეთ სიმღერის სათაური ან ლინკი.
            </span>
            <textarea name="music" rows={3} className={fieldClass} />
          </label>

          <label className="block">
            <FieldLabel>ჭკვიანი RSVP (დასტურის) ფორმა</FieldLabel>
            <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
              სტუმრები მონიშნავენ დასწრებას, თანმხლებ პირსა და მენიუს. ჩაწერეთ დამატებითი
              კითხვა, მაგალითად ალერგიების შესახებ, ან მიუთითეთ რა უნდა ამოვიღოთ.
            </span>
            <textarea name="rsvpNotes" rows={4} className={fieldClass} />
          </label>

          <label className="block">
            <FieldLabel>დამატებითი კომენტარი</FieldLabel>
            <textarea
              name="comment"
              rows={5}
              placeholder="აქ მოგვწერეთ ნებისმიერი დამატებითი სურვილი ან მნიშვნელოვანი დეტალი."
              className={fieldClass}
            />
          </label>

          <div className="border-t border-border/70 pt-7 text-center">
            <FestaButton type="submit">
              <Send className="h-4 w-4" strokeWidth={1.6} />
              ფორმის გაგზავნა
            </FestaButton>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              ღილაკზე დაჭერის შემდეგ გაიხსნება თქვენი ელფოსტა შევსებული ინფორმაციით.
            </p>
          </div>
        </form>
      </Reveal>
    </Section>
  );
}
