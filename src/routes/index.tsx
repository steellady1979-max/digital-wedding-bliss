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

const title = "Festa.ge — დახვეწილი ციფრული საქორწილო მოსაწვევები";
const description =
  "შექმენით ელეგანტური ციფრული საქორწილო მოსაწვევი: თარიღი, ლოკაცია, განრიგი და ფოტოები ერთ ლამაზ ბმულში.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
