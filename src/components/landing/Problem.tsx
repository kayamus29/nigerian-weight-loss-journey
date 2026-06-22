import { Brain, Frown, Utensils, Target } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Frown,
    title: "You stop eating your favorite foods",
    body: "Most diets tell you to avoid rice, garri or pounded yam completely. That's unrealistic.",
  },
  {
    icon: Utensils,
    title: "You are hungry all the time",
    body: "Extreme diets are difficult to maintain — and your body fights back.",
  },
  {
    icon: Brain,
    title: "You don't understand your body",
    body: "Without understanding how your body uses food, weight loss feels confusing.",
  },
  {
    icon: Target,
    title: "You give up too early",
    body: "Many people quit because their approach isn't sustainable for daily Nigerian life.",
  },
];

export function Problem() {
  return (
    <section id="problem" aria-labelledby="problem-title" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-primary">The problem</p>
          <h2 id="problem-title" className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Why most diets fail.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            If you've tried to lose weight before and stopped after a few weeks, the diet
            was the problem — not you.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body }, i) => (
            <Reveal as="li" key={title} delay={i * 80}>
              <article className="h-full rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <h3 className="text-lg font-semibold leading-snug text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
