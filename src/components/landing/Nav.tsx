import { Leaf } from "lucide-react";

const links = [
  { href: "#inside", label: "What's inside" },
  { href: "#foods", label: "Foods" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
            <Leaf size={16} strokeWidth={2.5} />
          </span>
          <span>Naija Healthy Eating</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 transition hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#get"
          className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90 sm:inline-flex"
        >
          <span className="hidden text-xs font-normal text-primary-foreground/70 line-through md:inline">
            ₦10,000
          </span>
          Get for ₦4,995
        </a>
      </div>
    </header>
  );
}
