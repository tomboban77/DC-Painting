import { Reveal } from "./Reveal";

const steps = [
  {
    n: "I",
    title: "Consultation",
    body: "We visit your space, listen to what you have in mind, take measurements and talk through colours, finishes and timing.",
  },
  {
    n: "II",
    title: "Clear, written quote",
    body: "You get a detailed quote that spells out the scope, prep, products and schedule — no vague numbers, no surprise extras.",
  },
  {
    n: "III",
    title: "Prep & paint",
    body: "We protect everything, repair and prime surfaces properly, then apply premium paint with brush and roller for a flawless finish.",
  },
  {
    n: "IV",
    title: "Walkthrough",
    body: "We clean up completely and walk the finished space with you. We’re not done until you’re genuinely happy with it.",
  },
];

export function Process() {
  return (
    <ol className="grid gap-px overflow-hidden bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.n} className="bg-paper">
          <Reveal delay={i * 0.08} className="group flex h-full flex-col p-7 md:p-9">
            <span className="display text-6xl italic text-gold/80 transition-colors duration-500 group-hover:text-gold md:text-7xl">{s.n}</span>
            <h3 className="display mt-10 text-[1.9rem] text-navy">{s.title}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{s.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
