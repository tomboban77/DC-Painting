"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import type { Project, ProjectCategory } from "@/lib/projects";

const filters: ("All" | ProjectCategory)[] = ["All", "Feature Walls", "Residential", "Commercial"];

export function Gallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<number | null>(null);

  const shown = useMemo(() => (filter === "All" ? projects : projects.filter((p) => p.category === filter)), [filter, projects]);

  const step = useCallback(
    (d: number) => setActive((i) => (i === null ? i : (i + d + shown.length) % shown.length)),
    [shown.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, step]);

  const current = active !== null ? shown[active] : null;

  return (
    <>
      <div role="tablist" aria-label="Filter projects" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:px-0">
        {filters.map((f) => {
          const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
          return (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                filter === f ? "border-navy bg-navy text-paper" : "border-line bg-paper text-ink/75 hover:border-navy"
              }`}
            >
              {f} <span className={filter === f ? "text-gold-soft" : "text-stone"}>({count})</span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.li
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="break-inside-avoid"
            >
              <button type="button" onClick={() => setActive(i)} className="group relative block w-full overflow-hidden bg-sand text-left">
                <Image
                  src={p.image}
                  alt={p.title}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition-transform duration-[1.2s] ease-out-soft group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent opacity-90 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-paper md:translate-y-3 md:opacity-0 md:transition-all md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <div>
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-gold-soft">{p.category}</p>
                    <p className="display mt-1 text-xl">{p.title}</p>
                  </div>
                  <Expand className="h-5 w-5 shrink-0" />
                </div>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-navy-deep/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            onClick={() => setActive(null)}
          >
            <div className="flex items-center justify-between p-4 text-paper md:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-paper/60">
                {(active ?? 0) + 1} / {shown.length}
              </p>
              <button type="button" aria-label="Close" onClick={() => setActive(null)} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 hover:bg-white/10">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-20" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="relative h-full w-full"
                >
                  <Image src={current.image} alt={current.title} fill sizes="100vw" className="object-contain" quality={90} />
                </motion.div>
              </AnimatePresence>
              <button type="button" aria-label="Previous" onClick={() => step(-1)} className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-paper/10 text-paper hover:bg-paper/20 md:left-6">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button type="button" aria-label="Next" onClick={() => step(1)} className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-paper/10 text-paper hover:bg-paper/20 md:right-6">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mx-auto w-full max-w-3xl p-6 text-center text-paper md:pb-10" onClick={(e) => e.stopPropagation()}>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold-soft">
                {current.category} · {current.location}
              </p>
              <p className="display mt-2 text-2xl">{current.title}</p>
              <p className="mt-2 text-sm text-paper/65">{current.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
