import { Leaf } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-background px-5 py-12 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div>
          <a href="#top" className="inline-flex items-center gap-2 font-display text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
              <Leaf size={16} strokeWidth={2.5} />
            </span>
            Naija Healthy Eating
          </a>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            This ebook is for educational purposes only. It is not intended to diagnose,
            treat or cure any medical condition. Speak with a qualified medical
            professional before making significant changes to your diet.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-y-3 text-sm sm:grid-cols-3 md:justify-self-end md:text-right">
          <a href="#" className="text-muted-foreground transition hover:text-primary">Privacy Policy</a>
          <a href="#" className="text-muted-foreground transition hover:text-primary">Terms</a>
          <a href="mailto:hello@example.com" className="text-muted-foreground transition hover:text-primary">Contact</a>
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-border/60 pt-6 text-xs text-muted-foreground">
        © {year} Naija Healthy Eating. All rights reserved.
      </div>
    </footer>
  );
}
