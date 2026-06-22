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
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-base font-medium text-primary-foreground shadow-lift"
      >
        Get the Ebook · Instant Download
        <ArrowRight size={18} />
      </a>
    </div>
  );
}
