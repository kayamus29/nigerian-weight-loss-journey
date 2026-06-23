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
    a: "Yes. Rice is part of the plan. The book shows you how much to eat, when to eat it, and what to eat it with so it works for you.",
  },
  {
    q: "Can I eat eba?",
    a: "Yes. Eba, amala and pounded yam all have their place. You will learn how much to eat and what to eat them with so they don't slow you down.",
  },
  {
    q: "Do I need a gym?",
    a: "No. The book shows simple exercise you can do at home, on your way to work, or in your area. No gym, no machine.",
  },
  {
    q: "Will I have to stop eating Nigerian food?",
    a: "No. That is the whole point of the book. You will learn how to eat the food you grew up with, the right way.",
  },
  {
    q: "Is the book easy to read?",
    a: "Yes. It is written in simple, plain English. No big grammar. If this is your first time, you will still understand it well.",
  },
  {
    q: "How will I get the book?",
    a: "After you pay, you will get a link right away. You can read it on your phone, tablet or laptop. You can also read it without internet.",
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
