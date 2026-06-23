import { Reveal } from "./Reveal";

const rows = [
  ["White Rice", "1 cup", "200 kcal"],
  ["Beans", "1 cup", "220 kcal"],
  ["Moi Moi", "1 wrap", "150–250 kcal"],
  ["Plantain", "1 medium", "180 kcal"],
  ["Eba", "1 cup", "300–350 kcal"],
];

export function CalorieTable() {
  return (
    <section id="table" aria-labelledby="table-title" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-primary">Quick guide</p>
          <h2 id="table-title" className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            How much food gives how much energy.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft">
            <table className="w-full text-left">
              <thead className="bg-primary-soft/60">
                <tr>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-foreground sm:px-7">Food</th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-foreground sm:px-7">How much</th>
                  <th scope="col" className="px-5 py-4 text-right text-sm font-semibold text-foreground sm:px-7">Energy (about)</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([food, serving, kcal], i) => (
                  <tr
                    key={food}
                    className={i < rows.length - 1 ? "border-b border-border/60" : ""}
                  >
                    <td className="px-5 py-4 text-sm font-medium text-foreground sm:px-7 sm:text-base">{food}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground sm:px-7 sm:text-base">{serving}</td>
                    <td className="px-5 py-4 text-right text-sm font-medium text-foreground sm:px-7 sm:text-base">{kcal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            These numbers are not exact. They change with how the food is cooked.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
