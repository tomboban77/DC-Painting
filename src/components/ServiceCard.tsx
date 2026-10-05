import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";

/** A service presented as an oversized paint chip: photo on top, colour swatch label below. */
export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const light = service.chip.ink === "light";
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden bg-paper shadow-[0_1px_0_rgba(21,26,40,0.04),0_20px_40px_-28px_rgba(21,26,40,0.35)] ring-1 ring-line transition-transform duration-700 ease-out-soft hover:-translate-y-1.5"
    >
      <div className="relative aspect-[4/3.4] overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
          placeholder="blur"
          className="object-cover transition-transform duration-[1.4s] ease-out-soft group-hover:scale-[1.06]"
        />
        <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-paper/90 text-navy opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100 max-md:opacity-100">
          <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
        </span>
      </div>

      {/* Chip strip */}
      <div className="flex items-stretch">
        <div
          className={`flex w-[5.5rem] shrink-0 flex-col justify-between p-3 text-[0.6rem] font-bold uppercase tracking-[0.16em] ${
            light ? "text-white/80" : "text-navy/60"
          }`}
          style={{ backgroundColor: service.chip.color }}
        >
          <span>No.</span>
          <span className="display text-2xl not-italic tracking-normal">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-stone">{service.chip.name}</p>
          <h3 className="display mt-2 text-[1.4rem] leading-tight text-navy">{service.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>
        </div>
      </div>
    </Link>
  );
}
