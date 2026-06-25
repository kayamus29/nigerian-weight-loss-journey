import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="get"
      aria-labelledby="cta-title"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,oklch(0.955_0.025_152)_0%,oklch(0.92_0.04_152)_50%,oklch(0.88_0.06_152)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_50%,oklch(1_0_0/0.6)_0%,transparent_70%)]" />
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Promo ends soon · Save 50%
        </span>
        <h2 id="cta-title" className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
          Ready to lose weight and still enjoy your food?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-foreground/75 sm:text-lg">
          Get easy steps, the right food size, and better ways to eat — made for
          Nigerians.
        </p>
        <div className="mt-8 flex flex-wrap items-end justify-center gap-x-4 gap-y-1">
          <span className="font-display text-5xl font-semibold leading-none text-foreground sm:text-6xl">
            ₦4,995
          </span>
          <span className="pb-1 text-xl text-foreground/55 line-through">₦10,000</span>
        </div>
        <p className="mt-2 text-sm font-medium text-primary">One-time payment · No subscription</p>
        {/* TODO: replace href with your checkout URL (Paystack / Flutterwave / Gumroad). */}
        <a
          href="#get"
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lift transition hover:translate-y-[-1px] hover:bg-primary/90 sm:text-lg"
        >
          Get the book for ₦4,995
          <ArrowRight size={20} />
        </a>
        <p className="mt-4 text-sm text-foreground/60">
          Sent to you right away · Read on phone or laptop
        </p>
      </div>
    </section>
  );
}
