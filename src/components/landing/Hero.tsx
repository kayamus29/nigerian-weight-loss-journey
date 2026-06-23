import heroImg from "@/assets/hero.jpg";
import { ArrowRight, Download, Smartphone } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(60%_60%_at_70%_20%,oklch(0.955_0.025_152)_0%,transparent_70%)]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-10 sm:px-8 md:grid-cols-[1.05fr_1fr] md:gap-14 md:pt-16 lg:pt-24">
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            For Nigerians, by Nigerians
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Lose weight. Still enjoy your{" "}
            <span className="text-primary">Nigerian food</span>.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            You don't have to stop eating rice, eba, beans or jollof. This book shows you
            how to eat the food you love and still lose weight — in simple, easy steps.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#get"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground shadow-lift transition hover:translate-y-[-1px] hover:bg-primary/90"
            >
              Get the book now
              <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#inside"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-base font-medium text-foreground/80 transition hover:text-primary"
            >
              See what is inside
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Download size={16} className="text-primary" /> Get it right away
            </span>
            <span className="inline-flex items-center gap-2">
              <Smartphone size={16} className="text-primary" /> Read on phone or laptop
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary-soft blur-2xl opacity-70" />
          <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-lift">
            <img
              src={heroImg}
              alt="A smiling Nigerian woman enjoying a balanced plate of jollof rice, grilled fish and vegetables at her kitchen table."
              width={1280}
              height={1280}
              fetchPriority="high"
              decoding="async"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
