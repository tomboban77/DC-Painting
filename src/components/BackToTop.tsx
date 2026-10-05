"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "motion/react";
import { ArrowUp } from "lucide-react";

/** Floating back-to-top button with a scroll-progress ring and an animated arrow. */
export function BackToTop() {
  const reduce = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 600));

  const toTop = () => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 24, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.8 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-navy text-paper shadow-[0_18px_40px_-14px_rgba(17,27,49,0.7)] transition-colors duration-300 hover:bg-navy-deep md:bottom-8 md:right-8 md:h-16 md:w-16"
        >
          {/* Progress ring */}
          <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
            <circle cx="32" cy="32" r="29" fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="2" />
            <motion.circle
              cx="32"
              cy="32"
              r="29"
              fill="none"
              stroke="var(--color-gold-bright)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength: progress }}
            />
          </svg>

          {/* Arrow: idles with a gentle float; on hover it shoots up and a new one rises in. */}
          <span className="relative h-5 w-5 overflow-hidden">
            <span className={`absolute inset-0 ${reduce ? "" : "animate-[float-up_2.2s_ease-in-out_infinite] group-hover:animate-none"}`}>
              <ArrowUp className="h-5 w-5 transition-transform duration-500 ease-out-soft group-hover:-translate-y-6" strokeWidth={2} />
            </span>
            <ArrowUp
              className="absolute inset-0 h-5 w-5 translate-y-6 text-gold-soft transition-transform duration-500 ease-out-soft group-hover:translate-y-0"
              strokeWidth={2}
              aria-hidden="true"
            />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
