import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type HeadingProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

/** Eyebrow + large serif title + optional intro, used to open every section. */
export function SectionHeading({ eyebrow, title, intro, align = "left", tone = "dark", className = "" }: HeadingProps) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      <p className={`eyebrow ${center ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2 className={`display mt-5 text-[2.1rem] sm:text-[2.6rem] md:text-[3.25rem] ${tone === "dark" ? "text-navy" : "text-paper"}`}>{title}</h2>
      {intro && (
        <p className={`mt-6 text-base leading-relaxed md:text-lg ${center ? "mx-auto" : ""} max-w-2xl ${tone === "dark" ? "text-muted" : "text-paper/70"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}

/** Hero block for interior pages. */
export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro?: ReactNode; children?: ReactNode }) {
  return (
    <section className="grain relative overflow-hidden border-b border-line">
      <div className="container-x pb-16 pt-14 md:pb-24 md:pt-24">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-6 max-w-5xl text-[2.5rem] text-navy sm:text-5xl md:text-[4.25rem]">{title}</h1>
          {intro && <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
          {children}
        </Reveal>
      </div>
      <ArchOutline className="pointer-events-none absolute -right-24 top-10 hidden h-[34rem] w-[26rem] text-gold/25 md:block" />
    </section>
  );
}

export function ArchOutline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 260" className={className} fill="none" aria-hidden="true">
      <path d="M1 260V100a99 99 0 0 1 198 0v160" stroke="currentColor" />
      <path d="M21 260V102a79 79 0 0 1 158 0v158" stroke="currentColor" />
    </svg>
  );
}
