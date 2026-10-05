"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 7000);
    return () => clearInterval(t);
  }, [paused, n]);

  const t = testimonials[i];

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="relative">
      <div className="flex justify-center gap-1 text-gold" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, k) => (
          <Star key={k} className="h-4 w-4 fill-current" strokeWidth={0} />
        ))}
      </div>

      <div className="relative mx-auto mt-8 min-h-[17rem] max-w-4xl sm:min-h-[14rem] md:min-h-[15rem]" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <blockquote className="display text-[1.75rem] leading-[1.2] text-navy sm:text-4xl md:text-[2.75rem]">
              <span className="text-gold">“</span>
              {t.quote}
              <span className="text-gold">”</span>
            </blockquote>
            <figcaption className="mt-8 text-sm">
              <span className="font-bold text-ink">{t.name}</span>
              <span className="text-stone"> — {t.location} · {t.service}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button type="button" onClick={() => go(-1)} aria-label="Previous review" className="grid h-12 w-12 place-items-center rounded-full border border-line text-navy transition-colors hover:bg-navy hover:text-paper">
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, k) => (
            <button
              key={k}
              type="button"
              onClick={() => setI(k)}
              aria-label={`Show review ${k + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${k === i ? "w-8 bg-gold" : "w-1.5 bg-line"}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next review" className="grid h-12 w-12 place-items-center rounded-full border border-line text-navy transition-colors hover:bg-navy hover:text-paper">
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
