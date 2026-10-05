import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { PageHero } from "@/components/Section";
import { Reveal, Unveil } from "@/components/Reveal";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Painting Services in the GTA",
  description:
    "Interior & exterior painting, feature walls, commercial painting, cabinet refinishing, drywall repair, epoxy flooring, power washing, deck & fence staining and popcorn ceiling removal across the GTA.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Nine ways we make <em className="text-gold">spaces shine.</em>
          </>
        }
        intro="Every service is delivered with the same meticulous prep, premium materials and respectful crew — whether it’s one wall or an entire building."
      >
        <nav aria-label="Jump to service" className="mt-10 flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-line bg-paper px-4 py-2 text-xs font-semibold text-ink/80 transition-colors hover:border-navy hover:bg-navy hover:text-paper"
            >
              {s.name}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="container-x">
        {services.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <section key={s.slug} id={s.slug} className="grid scroll-mt-28 gap-10 border-b border-line py-16 md:py-24 lg:grid-cols-12 lg:items-center lg:gap-16">
              <div className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
                <Unveil className={`${i % 3 === 0 ? "arch" : "overflow-hidden"} relative aspect-[5/4] md:aspect-[4/3]`}>
                  <Image src={s.image} alt={s.name} fill sizes="(min-width: 1024px) 50vw, 100vw" placeholder="blur" className="object-cover" />
                </Unveil>
              </div>
              <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span className="h-10 w-10 rounded-full ring-1 ring-line" style={{ backgroundColor: s.chip.color }} />
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-stone">
                      No. {String(i + 1).padStart(2, "0")} · {s.chip.name}
                    </span>
                  </div>
                  <h2 className="display mt-6 text-[2.1rem] text-navy md:text-[3.25rem]">{s.name}</h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{s.summary}</p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {s.includes.slice(0, 4).map((inc) => (
                      <li key={inc} className="flex items-start gap-3 text-sm text-ink/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} /> {inc}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${s.slug}`} className="btn btn-ghost mt-10">
                    Explore this service <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <section className="container-x py-20 md:py-28">
        <Reveal className="mb-12">
          <p className="eyebrow">Every project, every time</p>
          <h2 className="display mt-5 text-[2.1rem] text-navy md:text-[3.25rem]">
            The DC Fine <em className="text-gold">process.</em>
          </h2>
        </Reveal>
        <Process />
      </section>

      <CTA />
    </>
  );
}
