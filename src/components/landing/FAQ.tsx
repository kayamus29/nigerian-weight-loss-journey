import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Can I still eat rice?",
    a: "Yes. Rice is part of the plan. The book shows you how much to eat, how often, and what to pair it with so it works for your goals.",
  },
  {
    q: "Can I eat eba?",
    a: "Yes. Eba, amala and pounded yam all have a place. You'll learn portion sizes and pairings that keep them in your week without slowing your progress.",
  },
  {
    q: "Do I need a gym?",
    a: "No. The exercise chapter focuses on movement you can do at home, on your way to work, or in your neighbourhood — no gym, no equipment required.",
  },
  {
    q: "Will I have to stop eating Nigerian food?",
    a: "Never. The whole point of this book is that you don't have to. You'll learn how to enjoy the foods you grew up with, responsibly.",
  },
  {
    q: "Is the ebook beginner friendly?",
    a: "Yes. It's written in plain English, with no jargon. If this is your first time learning about nutrition, you'll feel comfortable from page one.",
  },
  {
    q: "How do I receive the ebook?",
    a: "You'll get an instant download link after purchase. The PDF works on phone, tablet and laptop, and you can read it offline.",
  },
];

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-primary">Questions</p>
          <h2 id="faq-title" className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Frequently asked.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <Accordion type="single" collapsible className="mt-10 w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
