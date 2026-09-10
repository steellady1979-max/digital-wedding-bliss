/**
 * Festa.ge content + demo data.
 *
 * DESIGN PHASE ONLY: invitation demos, testimonials and FAQ answers below are
 * temporary placeholders. Replace `demoUrl` with the real invitation link and
 * swap in the final imagery/copy before launch — no other file needs to change.
 */

import burgundyImg from "@/assets/design-burgundy.jpg";
import burgundyVideo from "@/assets/burgundy-demo.mp4.asset.json";
import timelessIvoryVideo from "@/assets/timeless-ivory-demo.mp4.asset.json";
import botanicalImg from "@/assets/design-botanical.jpg";
import minimalImg from "@/assets/design-minimal.jpg";
import midnightImg from "@/assets/design-midnight.jpg";

export type InvitationDesign = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  /** Optional video shown inside the phone frame instead of the image. */
  videoSrc?: string;
  /** TODO: replace with the real published invitation URL. */
  demoUrl: string | null;
};

export const designs: InvitationDesign[] = [
  {
    id: "burgundy-romance",
    name: "Burgundy Romance",
    category: "კლასიკური",
    description:
      "მუქი ბორდო და ოქროს დეტალები — თბილი, რომანტიკული განწყობა საღამოს ზეიმისთვის.",
    image: burgundyImg,
    alt: "ბორდო ფერის საქორწილო მოსაწვევი ოქროსფერი ბოტანიკური ჩარჩოთი",
    videoSrc: burgundyVideo.url,
    demoUrl: null,
  },
  {
    id: "timeless-ivory",
    name: "Timeless Ivory",
    category: "დროისმიღმა",
    description:
      "სპილოსძვლის ქაღალდი და შამპანურის ფერის აქცენტები დახვეწილი სიმსუბუქისთვის.",
    image: "",
    alt: "სპილოსძვლის ფერის საქორწილო მოსაწვევების ნაკრები აბრეშუმის ლენტით",
    videoSrc: timelessIvoryVideo.url,
    demoUrl: null,
  },
  {
    id: "botanical-love",
    name: "Botanical Love",
    category: "ფლორალური",
    description:
      "აკვარელის ყვავილები და მწვანე ტოტები — ნაზი და ბუნებრივი დღის ზეიმისთვის.",
    image: botanicalImg,
    alt: "ბოტანიკური საქორწილო მოსაწვევი აკვარელის ყვავილებითა და ევკალიპტით",
    demoUrl: null,
  },
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    category: "მინიმალური",
    description:
      "სუფთა ტიპოგრაფია და ბევრი თეთრი სივრცე — თანამედროვე, რედაქციული ხასიათი.",
    image: minimalImg,
    alt: "მინიმალისტური თეთრი საქორწილო მოსაწვევი წვრილი ოქროს ჩარჩოთი",
    demoUrl: null,
  },
  {
    id: "midnight-elegance",
    name: "Midnight Elegance",
    category: "საღამოს",
    description:
      "მუქი ღამის ტონები და ოქროს ციალი — ლუქსუსური საღამოს ღონისძიებისთვის.",
    image: midnightImg,
    alt: "მუქი ღამის ფერის საქორწილო მოსაწვევი ოქროსფერი დეტალებით სანთლის შუქზე",
    demoUrl: null,
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
    text: "შეარჩიეთ თქვენთვის სასურველი მზა ან ინდივიდუალური დიზაინი.",
  },
  {
    title: "გამოგვიგზავნეთ დეტალები",
    text: "მოგვაწოდეთ წყვილის სახელები, თარიღი, ლოკაცია, ფოტოები და ღონისძიების განრიგი.",
  },
  {
    title: "მიიღეთ თქვენი ვებსაიტი",
    text: "მიიღეთ გასაზიარებლად მზად მყოფი პერსონალური ბმული.",
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

/** DEMO CONTENT — replace with real client reviews before launch. */
export const testimonials = [
  {
    name: "ანა & გიორგი",
    location: "თბილისი",
    quote:
      "მოსაწვევი ისეთი დახვეწილი გამოვიდა, რომ სტუმრები დღემდე გვიხსენებენ. ყველა დეტალი ერთ ბმულში იყო.",
  },
  {
    name: "ნინო & ლევანი",
    location: "ქვარელი",
    quote:
      "ძალიან სწრაფად და გემოვნებით შესრულდა. ბებია-ბაბუამაც მარტივად გახსნა ტელეფონში.",
  },
  {
    name: "მარიამ & საბა",
    location: "ბათუმი",
    quote:
      "დიზაინი ზუსტად ჩვენს განწყობას ასახავდა — მშვიდი, ელეგანტური და ძალიან ჩვენი.",
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
