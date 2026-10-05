import type { Metadata } from "next";
import Image from "next/image";

import livingRoom from "@/assets/images/work/residential-living-room.jpg";
import charcoal from "@/assets/images/work/feature-wall-charcoal.jpg";
import exteriorClassic from "@/assets/images/stock/exterior-classic.jpg";
import interior2 from "@/assets/images/stock/interior-2.jpg";

import { PageHero } from "@/components/Section";
import { Reveal, Unveil } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { Sparkle } from "@/components/Icons";
import { site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `DC Fine Painting has served homeowners and businesses across the GTA for ${site.yearsInBusiness}+ years. Professional, reliable and affordable painting.`,
};

// TODO: confirm the company story details (founder name, origin) with the client.
const values = [
  {
    title: "Professional",
    body: "Proper prep, premium products and clean, crisp lines on every job. We treat a single bedroom with the same care as a full commercial unit.",
  },
  {
    title: "Reliable",
    body: "We show up when we say we will, communicate clearly throughout and finish on schedule. No disappearing acts, no loose ends.",
  },
  {
    title: "Affordable",
    body: "High-end results shouldn’t need a high-end budget. You’ll get honest, detailed pricing with no hidden extras.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About DC Fine Painting"
        title={
          <>
            Built on craft, <em className="text-gold">trusted</em> across the GTA.
          </>
        }
        intro={`For ${site.yearsInBusiness}+ years, DC Fine Painting has helped homeowners, landlords and businesses across the Greater Toronto Area turn tired spaces into rooms they’re proud of.`}
      />

      {/* Story */}
      <section className="container-x py-20 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="grid grid-cols-5 gap-4 lg:col-span-6">
            <Unveil className="arch relative col-span-3 aspect-[3/4.4]">
              <Image src={livingRoom} alt="Living room freshly painted by DC Fine Painting" fill sizes="(min-width: 1024px) 30vw, 60vw" placeholder="blur" className="object-cover" />
            </Unveil>
            <div className="col-span-2 flex flex-col gap-4 pt-16">
              <Unveil delay={0.15} className="relative aspect-square overflow-hidden">
                <Image src={charcoal} alt="Charcoal geometric feature wall" fill sizes="(min-width: 1024px) 20vw, 40vw" placeholder="blur" className="object-cover" />
              </Unveil>
              <Unveil delay={0.3} className="relative aspect-[3/4] overflow-hidden">
                <Image src={exteriorClassic} alt="" fill sizes="(min-width: 1024px) 20vw, 40vw" placeholder="blur" className="object-cover" />
              </Unveil>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal>
              <p className="eyebrow">Our story</p>
              <h2 className="display mt-5 text-[2.6rem] text-navy md:text-6xl">
                A painting company that <em className="text-gold">sweats the small stuff.</em>
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  DC Fine Painting started with a simple belief: painting should be done properly, or not at all. That means
                  taking the time to prep, protecting your home like it’s our own and never rushing the finish.
                </p>
                <p>
                  Over the past {site.yearsInBusiness} years that approach has taken us from single-room refreshes to full
                  home repaints, commercial units and the custom feature walls we’ve become known for, all while keeping our
                  pricing fair and our word reliable.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-paper md:py-32">
        <Image src={interior2} alt="" fill sizes="100vw" placeholder="blur" className="object-cover opacity-[0.08]" />
        <div className="container-x relative">
          <Reveal className="text-center">
            <p className="eyebrow justify-center text-gold-soft">What we stand for</p>
            <h2 className="display mt-5 text-[2.6rem] md:text-6xl">
              Three words. <em className="text-gold-soft">Every job.</em>
            </h2>
          </Reveal>
          <ul className="mt-16 grid gap-px overflow-hidden bg-white/10 md:grid-cols-3">
            {values.map((v, i) => (
              <li key={v.title} className="bg-navy-deep">
                <Reveal delay={i * 0.1} className="flex h-full flex-col p-8 md:p-12">
                  <Sparkle className="h-5 w-5 text-gold" />
                  <h3 className="display mt-8 text-4xl italic md:text-5xl">{v.title}</h3>
                  <p className="mt-4 leading-relaxed text-paper/70">{v.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="container-x py-20 md:py-28">
        <dl className="grid grid-cols-2 gap-px overflow-hidden bg-line ring-1 ring-line md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-ivory p-6 md:p-10">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="display block text-5xl text-navy md:text-7xl">{s.value}</span>
                <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.16em] text-stone">{s.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <CTA title="We’d love to hear about your space." />
    </>
  );
}
