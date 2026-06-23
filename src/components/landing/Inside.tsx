import { Briefcase, HeartPulse, Wheat, PieChart, Footprints, CalendarDays } from "lucide-react";
import { Reveal } from "./Reveal";

const chapters = [
  { n: "01", icon: Briefcase, title: "Why Nigerians Add Weight", body: "How our work, our life and our food affect the body — in plain words." },
  { n: "02", icon: HeartPulse, title: "How Your Body Uses Food", body: "An easy look at calories and how your body burns the food you eat." },
  { n: "03", icon: Wheat, title: "Nigerian Foods You Can Still Eat", body: "Rice, beans, eba, moi-moi and more — how to enjoy them without worry." },
  { n: "04", icon: PieChart, title: "How Much To Eat", body: "A simple plate method you can use with the food already in your house." },
  { n: "05", icon: Footprints, title: "Easy Exercise At Home", body: "No gym. No machine. Simple moves that fit your day." },
  { n: "06", icon: CalendarDays, title: "Your 30-Day Plan", body: "A week-by-week guide that tells you exactly what to do." },
];

export function Inside() {
  return (
    <section id="inside" aria-labelledby="inside-title" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-primary">What is inside</p>
          <h2 id="inside-title" className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Six chapters that change how you eat.
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map(({ n, icon: Icon, title, body }, i) => (
            <Reveal as="li" key={n} delay={i * 70}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <span className="font-display text-2xl font-semibold text-muted-foreground/40">{n}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
