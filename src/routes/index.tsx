import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Inside } from "@/components/landing/Inside";
import { Foods } from "@/components/landing/Foods";
import { CalorieTable } from "@/components/landing/CalorieTable";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { StickyBuy } from "@/components/landing/StickyBuy";

const TITLE = "How to Lose Weight Eating Nigerian Food — The Ebook";
const DESCRIPTION =
  "Lose weight without leaving your rice, eba, beans or jollof. Simple steps, easy food sizes and a 30-day plan made for Nigerians.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "book" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          name: "How to Lose Weight Eating Nigerian Food",
          bookFormat: "https://schema.org/EBook",
          inLanguage: "en",
          about: "Healthy eating and weight loss for Nigerian lifestyles",
          description: DESCRIPTION,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Inside />
        <Foods />
        <CalorieTable />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBuy />
    </div>
  );
}
