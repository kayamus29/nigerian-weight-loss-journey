import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

/**
 * Placeholder testimonial cards.
 * EDIT: when you have real reader feedback, replace the `quote` field
 * for each item below. Keep the same shape.
 */
const testimonials = [
  { quote: "Your feedback could appear here.", label: "Reader Testimonial" },
  { quote: "Your feedback could appear here.", label: "Reader Testimonial" },
  { quote: "Your feedback could appear here.", label: "Reader Testimonial" },
];

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-secondary/60 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-primary">Reader voices</p>
          <h2 id="testimonials-title" className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            What readers will say.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Real feedback from real readers will live here once the book is in their hands.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={i} delay={i * 80}>
              <article
                data-editable="testimonial"
                className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-7 shadow-soft"
              >
                <Quote size={24} className="text-primary" strokeWidth={2} />
                <p className="mt-5 flex-1 text-base leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-6 text-sm font-medium text-muted-foreground">— {t.label}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
