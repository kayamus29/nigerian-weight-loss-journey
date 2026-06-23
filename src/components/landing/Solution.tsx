import plateImg from "@/assets/plate.jpg";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const points = [
  "How your body uses the food you eat",
  "Why people add weight in the first place",
  "How to eat Nigerian food the smart way",
  "Easy ways to know your right food size",
  "Simple exercise you can do at home",
  "A 30-day plan, step by step",
];

export function Solution() {
  return (
    <section id="solution" aria-labelledby="solution-title" className="bg-primary-soft/40 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.05fr] md:items-center">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-lift">
            <img
              src={plateImg}
              alt="An overhead view of a balanced Nigerian plate with jollof rice, beans, moi-moi, grilled fish, plantain and vegetables."
              width={1280}
              height={1024}
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-primary">The solution</p>
          <h2 id="solution-title" className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            A better way to lose weight.
          </h2>
          <p className="mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
            This book shows you small changes that really work — and you keep eating
            the food you grew up with.
          </p>
          <ul className="mt-7 grid gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-base text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
