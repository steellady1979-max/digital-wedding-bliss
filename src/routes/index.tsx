import { createFileRoute } from "@tanstack/react-router";

import { Catalogue } from "@/components/festa/Catalogue";
import { Faq } from "@/components/festa/Faq";
import { Features } from "@/components/festa/Features";
import { FinalCta } from "@/components/festa/FinalCta";
import { Footer } from "@/components/festa/Footer";
import { Header } from "@/components/festa/Header";
import { Hero } from "@/components/festa/Hero";
import { HowItWorks } from "@/components/festa/HowItWorks";
import { OrderForm } from "@/components/festa/OrderForm";
import { Testimonials } from "@/components/festa/Testimonials";

const title = "ქორწილის მოსაწვევი ონლაინ | ციფრული მოსაწვევები — Festa";
const description =
  "შექმენით პერსონალური ციფრული ქორწილის მოსაწვევი ვებსაიტის ფორმატში — ავტომატური RSVP, სტუმრების სია, ლოკაცია, განრიგი, ფოტოები და მუსიკა ერთ ბმულში.";
const canonicalUrl = "https://digital-wedding-bliss.vercel.app/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "ქორწილის მოსაწვევი, ციფრული მოსაწვევი, ონლაინ მოსაწვევი, საქორწილო მოსაწვევი, ინტერაქტიული მოსაწვევი, RSVP საქართველო",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:locale", content: "ka_GE" },
      { property: "og:site_name", content: "Festa" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Catalogue />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Faq />
        <FinalCta />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}
