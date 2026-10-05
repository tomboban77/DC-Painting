"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

type Props = {
  before: StaticImageData;
  after: StaticImageData;
  alt: string;
  className?: string;
};

/** Drag (or use arrow keys) to compare before and after. */
export function BeforeAfter({ before, after, alt, className = "" }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div
      ref={ref}
      className={`relative aspect-[4/5] cursor-ew-resize touch-pan-y select-none overflow-hidden bg-sand md:aspect-[5/6] ${className}`}
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <Image src={after} alt={`After: ${alt}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" placeholder="blur" quality={80} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={`Before: ${alt}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" placeholder="blur" quality={80} />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-paper backdrop-blur">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-paper/90 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-navy backdrop-blur">
        After
      </span>

      <div className="pointer-events-none absolute inset-y-0 w-px bg-paper shadow-[0_0_0_1px_rgba(0,0,0,0.05)]" style={{ left: `${pos}%` }}>
        <div
          role="slider"
          tabIndex={0}
          aria-label="Before and after comparison"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
            if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
          }}
          className="pointer-events-auto absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-paper text-navy shadow-xl"
        >
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
