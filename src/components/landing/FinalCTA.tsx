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
        <h2 id="cta-title" className="font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
          Ready to lose weight without giving up Nigerian food?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-foreground/75 sm:text-lg">
          Get practical advice, portion guides and healthier eating strategies — tailored
          for Nigerians.
        </p>
        {/* TODO: replace href with your checkout URL (Paystack / Flutterwave / Gumroad). */}
        <a
          href="#get"
          className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lift transition hover:translate-y-[-1px] hover:bg-primary/90 sm:text-lg"
        >
          Get Instant Access
          <ArrowRight size={20} />
        </a>
        <p className="mt-4 text-sm text-foreground/60">
          Instant download · Phone, tablet & laptop
        </p>
      </div>
    </section>
  );
}
