/**
 * Festa.ge content + demo data.
 *
 * DESIGN PHASE ONLY: invitation demos and FAQ answers below are
 * temporary placeholders. Swap in the final imagery/copy before launch — no
 * other file needs to change.
 */

export type InvitationDesign = {
  id: string;
  /** Couple names shown on the selector pill. */
  name: string;
  /** Short style label. */
  category: string;
  /** Live invitation URL loaded inside the phone frame. */
  demoUrl: string;
};

export const designs: InvitationDesign[] = [
  {
    id: "giga-nini",
    name: "გიგა & ნინი",
    category: "კლასიკური",
    demoUrl: "https://giga-nini.vercel.app",
  },
  {
    id: "nini-mate",
    name: "ნინი & მათე",
    category: "დროისმიღმა",
    demoUrl: "https://nini-mate.vercel.app",
  },
  {
    id: "lisa-giorgi",
    name: "ლიზა & გიორგი",
    category: "ფლორალური",
    demoUrl: "https://lisa-giorgi.vercel.app",
  },
  {
    id: "mariami-ioseb",
    name: "მარიამი & იოსები",
    category: "მინიმალური",
    demoUrl: "https://mariami-ioseb.vercel.app",
  },
  {
    id: "mariami-aleksandre",
    name: "მარიამი & ალექსანდრე",
    category: "საღამოს",
    demoUrl: "https://mariami-aleksandre.vercel.app",
  },
  {
    id: "ana-cotne",
    name: "ანა & ცოტნე",
    category: "ელეგანტური",
    demoUrl: "https://ana-cotne.vercel.app/",
  },
  {
    id: "nini-aleko",
    name: "ნინი & ალეკო",
    category: "თანამედროვე",
    demoUrl: "https://nini-aleko.vercel.app",
  },
  {
    id: "magda-beqa",
    name: "მაგდა & ბექა",
    category: "რომანტიკული",
    demoUrl: "https://magda-beqa.vercel.app",
  },
  {
    id: "levani-tamta",
    name: "ლევანი & თამთა",
    category: "ბუნებრივი",
    demoUrl: "https://levani-tamta.vercel.app",
  },
];

export const navLinks = [
  { label: "დიზაინები", href: "#designs" },
  { label: "როგორ მუშაობს", href: "#how" },
  { label: "ჩვენ შესახებ", href: "#about" },
  { label: "ხშირი კითხვები", href: "#faq" },
];

export const steps = [
  {
    title: "აირჩიეთ დიზაინი",
    text: "შეარჩიეთ სასურველი სტილი.",
  },
  {
    title: "გამოგვიგზავნეთ დეტალები",
    text: "გამოგვიგზავნეთ ტექსტი, ფოტოები და თარიღი.",
  },
  {
    title: "მიიღეთ თქვენი ვებსაიტი",
    text: "მიიღეთ გასაზიარებლად მზად პირადი ბმული.",
  },
];

export const features: { title: string; text: string; soon?: boolean }[] = [
  {
    title: "პერსონალური დიზაინი",
    text: "თითოეული მოსაწვევი თქვენს ისტორიაზეა მორგებული — ფერები, შრიფტი და ფოტოები.",
  },
  {
    title: "ყველა დეტალი ერთ სივრცეში",
    text: "თარიღი, ლოკაციის რუკა, განრიგი და დრეს-კოდი ერთ ელეგანტურ გვერდზე.",
  },
  {
    title: "სტუმრების დასწრების დადასტურება",
    text: "სტუმრები ონლაინ დაადასტურებენ დასწრებას, თქვენ კი ნახავთ სრულ სიას.",
    soon: true,
  },
  {
    title: "მარტივად გასაზიარებელი ბმული",
    text: "ერთი ბმული, რომელსაც გაუზიარებთ ნებისმიერ მესენჯერში.",
  },
  {
    title: "იდეალურად მორგებული მობილურზე",
    text: "მოსაწვევი უნაკლოდ ჩანს iPhone-სა და Android-ზე.",
  },
  {
    title: "ქართული და ინგლისური ვერსია",
    text: "ორენოვანი მოსაწვევი უცხოეთიდან ჩამოსული სტუმრებისთვისაც.",
    soon: true,
  },
];

export const faqs = [
  {
    q: "რა ინფორმაცია შეიძლება განთავსდეს მოსაწვევში?",
    a: "წყვილის სახელები, ქორწილის თარიღი და დრო, ლოკაცია რუკით, ღონისძიების განრიგი, ფოტოგალერეა, დრეს-კოდი და საკონტაქტო დეტალები.",
  },
  {
    q: "რამდენ ხანში მზადდება ციფრული მოსაწვევი?",
    a: "მზა დიზაინი ჩვეულებრივ 2–3 სამუშაო დღეში მზადდება, ინდივიდუალური დიზაინი — 5–7 დღეში.",
  },
  {
    q: "შეიძლება თუ არა ტექსტისა და ფოტოების შეცვლა?",
    a: "დიახ. ტექსტი, ფოტოები და ფერები თქვენს სურვილისამებრ ეწყობა გამოქვეყნებამდე.",
  },
  {
    q: "როგორ გავუზიარო მოსაწვევი სტუმრებს?",
    a: "მიიღებთ ერთ პერსონალურ ბმულს, რომელსაც გაუზიარებთ WhatsApp-ით, Messenger-ით, SMS-ით ან ელფოსტით.",
  },
  {
    q: "მუშაობს თუ არა მოსაწვევი ტელეფონზე?",
    a: "დიახ — მოსაწვევი უპირველესად მობილურისთვისაა შექმნილი და უნაკლოდ იხსნება ყველა თანამედროვე ტელეფონზე.",
  },
  {
    q: "შესაძლებელია თუ არა ინდივიდუალური დიზაინის შექმნა?",
    a: "დიახ. თქვენი იდეის, ფერების ან საქორწილო სტილის მიხედვით სრულიად ინდივიდუალურ დიზაინსაც ვამზადებთ.",
  },
];
