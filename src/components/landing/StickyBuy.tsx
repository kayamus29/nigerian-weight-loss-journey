import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function StickyBuy() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cta = document.getElementById("get");
    if (!cta) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting && window.scrollY > 400),
      { threshold: 0 },
    );
    io.observe(cta);
    const onScroll = () => {
      if (!cta) return;
      const rect = cta.getBoundingClientRect();
      const onScreen = rect.top < window.innerHeight && rect.bottom > 0;
      setVisible(!onScreen && window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 px-4 py-3 backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}
    >
      <a
        href="#get"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-medium text-primary-foreground shadow-lift"
      >
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-normal uppercase tracking-wide text-primary-foreground/75">
            Promo ends soon
          </span>
          <span className="flex items-baseline gap-1.5">
            Get for ₦4,995
            <span className="text-xs font-normal text-primary-foreground/70 line-through">
              ₦10,000
            </span>
          </span>
        </span>
        <ArrowRight size={18} />
      </a>
    </div>
  );
}
