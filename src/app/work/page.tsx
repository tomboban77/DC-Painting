import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Gallery } from "@/components/Gallery";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTA } from "@/components/CTA";
import { InstagramIcon } from "@/components/Icons";
import { beforeAfter, projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work — Painting Portfolio",
  description: "Feature walls, residential repaints and commercial transformations by DC Fine Painting across the Greater Toronto Area.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Real projects. <em className="text-gold">Real finishes.</em>
          </>
        }
        intro="Every photo here is our own work, from signature navy-and-gold feature walls to full commercial transformations across the GTA."
      />

      <section className="container-x py-16 md:py-24">
        <Gallery projects={projects} />
      </section>

      <section className="bg-sand/50 py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Before & after</p>
            <h2 className="display mt-5 text-[2.1rem] text-navy md:text-[3.25rem]">
              From raw to <em className="text-gold">refined.</em>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{beforeAfter.caption}</p>
            <p className="mt-4 text-sm text-stone">Drag the handle, or use your arrow keys, to compare.</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <BeforeAfter before={beforeAfter.before} after={beforeAfter.after} alt={beforeAfter.title} />
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <Reveal className="flex flex-col items-center text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-navy text-paper">
            <InstagramIcon className="h-7 w-7" />
          </span>
          <h2 className="display mt-8 text-[2.1rem] text-navy md:text-[3.25rem]">
            Follow along on <em className="text-gold">Instagram</em>
          </h2>
          <p className="mt-5 max-w-lg text-muted">See our latest projects, works in progress and reels at {site.instagram.handle}.</p>
          <a href={site.instagram.href} target="_blank" rel="noreferrer" className="btn btn-ghost mt-8">
            {site.instagram.handle} <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </section>

      <CTA />
    </>
  );
}
