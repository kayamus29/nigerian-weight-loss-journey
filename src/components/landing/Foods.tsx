import jollof from "@/assets/foods/jollof.jpg";
import whiteRice from "@/assets/foods/white-rice.jpg";
import beans from "@/assets/foods/beans.jpg";
import moimoi from "@/assets/foods/moimoi.jpg";
import eba from "@/assets/foods/eba.jpg";
import amala from "@/assets/foods/amala.jpg";
import poundedYam from "@/assets/foods/pounded-yam.jpg";
import plantain from "@/assets/foods/plantain.jpg";
import fish from "@/assets/foods/fish.jpg";
import eggs from "@/assets/foods/eggs.jpg";
import suya from "@/assets/foods/suya.jpg";
import vegetables from "@/assets/foods/vegetables.jpg";
import { Reveal } from "./Reveal";

const foods = [
  { img: jollof, name: "Jollof Rice", kcal: "~220 kcal", serving: "1 cup cooked" },
  { img: whiteRice, name: "White Rice", kcal: "~200 kcal", serving: "1 cup cooked" },
  { img: beans, name: "Beans", kcal: "~220 kcal", serving: "1 cup cooked" },
  { img: moimoi, name: "Moi Moi", kcal: "150–250 kcal", serving: "1 wrap" },
  { img: eba, name: "Eba", kcal: "300–350 kcal", serving: "1 cup" },
  { img: amala, name: "Amala", kcal: "~280 kcal", serving: "1 cup" },
  { img: poundedYam, name: "Pounded Yam", kcal: "~340 kcal", serving: "1 cup" },
  { img: plantain, name: "Plantain", kcal: "~180 kcal", serving: "1 medium" },
  { img: fish, name: "Grilled Fish", kcal: "~180 kcal", serving: "1 medium fillet" },
  { img: eggs, name: "Eggs", kcal: "~78 kcal", serving: "1 large egg" },
  { img: suya, name: "Suya", kcal: "~250 kcal", serving: "1 small stick" },
  { img: vegetables, name: "Vegetables", kcal: "~35 kcal", serving: "1 cup cooked" },
];

export function Foods() {
  return (
    <section id="foods" aria-labelledby="foods-title" className="bg-secondary/60 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-primary">Nigerian foods</p>
          <h2 id="foods-title" className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Our food. The real numbers.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Touch any food to see how much energy it gives and how much you should eat.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {foods.map((f, i) => (
            <Reveal as="li" key={f.name} delay={(i % 4) * 60}>
              <figure className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.name}
                    width={640}
                    height={640}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent p-4 text-primary-foreground opacity-0 transition duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                  <p className="text-xs uppercase tracking-wider opacity-80">{f.serving}</p>
                  <p className="font-display text-lg font-semibold">{f.kcal}</p>
                </figcaption>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm font-medium text-foreground">{f.name}</span>
                  <span className="text-xs text-muted-foreground">{f.kcal}</span>
                </div>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
