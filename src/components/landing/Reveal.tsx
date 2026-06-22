import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
}) {
  const { ref, shown } = useReveal();
  return (
    <As
      ref={ref as never}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </As>
  );
}
