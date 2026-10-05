import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Phone, Star } from "lucide-react";

import hero from "@/assets/images/stock/hero.jpg";
import navyGold from "@/assets/images/work/feature-wall-navy-gold.jpg";
import diamond from "@/assets/images/work/feature-wall-diamond.jpg";
import hallway from "@/assets/images/work/basement-hallway.jpg";
import exteriorClassic from "@/assets/images/stock/exterior-classic.jpg";

import { Reveal, Unveil } from "@/components/Reveal";
import { SectionHeading, ArchOutline } from "@/components/Section";
import { Marquee } from "@/components/Marquee";
import { ServiceCard } from "@/components/ServiceCard";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Sparkle } from "@/components/Icons";

import { site, stats } from "@/lib/site";
import { services } from "@/lib/services";
import { beforeAfter, paintImage } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Hero />

      {/* City ticker */}
      <section aria-label="Service areas" className="border-y border-navy-deep bg-navy py-6 text-paper md:py-8">
        <Marquee items={site.serviceAreas} />
      </section>

      <Intro />
      <Services />
      <Signature />
      <Transformation />
      <ProcessSection />
      <Materials />
      <Reviews />
      <Areas />
      <CTA />
    </>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

function Hero() {
  return (
    <section className="grain relative overflow-hidden">
      <div className="container-x grid items-center gap-12 pb-16 pt-10 md:pb-24 md:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">GTA Painting Company · {site.yearsInBusiness}+ Years</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display mt-7 text-[2.7rem] text-navy sm:text-6xl md:text-[5rem] xl:text-[5.75rem]">
              The art of a <em className="relative whitespace-nowrap font-medium text-gold">
                flawless
                <svg viewBox="0 0 300 20" className="absolute -bottom-2 left-0 h-3 w-full text-gold-soft md:-bottom-3" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 14C60 4 140 2 298 10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </em>{" "}
              finish.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              Interior, exterior and signature feature walls, painted with meticulous prep, razor-sharp lines and premium
              paints, for homes and businesses across the Greater Toronto Area.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Get a Free Estimate <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href={site.phone.href} className="btn btn-ghost">
                <Phone className="h-4 w-4" /> {site.phone.display}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink/80">
              {["Free detailed quotes", "Premium Sherwin-Williams paints", "Spotless clean-up"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="relative mx-auto w-full max-w-[30rem] lg:col-span-5 lg:max-w-none">
          <Unveil className="arch relative aspect-[3/4] shadow-[0_40px_80px_-40px_rgba(17,27,49,0.55)]">
            <Image src={hero} alt="Bright classic living room with freshly painted ivory walls and arched windows" fill priority placeholder="blur" sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" quality={90} />
          </Unveil>
          <ArchOutline className="pointer-events-none absolute -inset-x-5 -top-5 -z-0 h-[calc(100%+1.25rem)] w-[calc(100%+2.5rem)] text-gold/40" />

          {/* Rotating seal */}
          <div className="absolute -left-4 top-[12%] grid h-28 w-28 place-items-center rounded-full bg-paper shadow-xl ring-1 ring-line sm:-left-10 md:h-32 md:w-32">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_28s_linear_infinite] text-navy" aria-hidden="true">
              <defs>
                <path id="seal" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text style={{ font: "700 8.4px var(--font-manrope)", letterSpacing: "2.6px" }} fill="currentColor">
                <textPath href="#seal">PROFESSIONAL · RELIABLE · AFFORDABLE ·</textPath>
              </text>
            </svg>
            <Sparkle className="h-5 w-5 text-gold" />
          </div>

          {/* Floating swatch card */}
          <Reveal delay={0.6} className="absolute -bottom-6 -right-2 w-56 sm:-right-8 md:w-64">
            <div className="flex overflow-hidden bg-paper shadow-2xl ring-1 ring-line">
              <div className="relative w-24 shrink-0">
                <Image src={diamond} alt="" fill sizes="96px" className="object-cover" placeholder="blur" />
              </div>
              <div className="p-4">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <p className="display mt-2 text-lg leading-tight text-navy">Signature feature walls</p>
                <Link href="/work" className="mt-2 inline-flex items-center gap-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold">
                  See the work <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Intro + stats ───────────────────────── */

function Intro() {
  return (
    <section className="container-x py-20 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-3">
          <p className="eyebrow">Our promise</p>
        </Reveal>
        <div className="lg:col-span-9">
          <Reveal>
            <p className="display text-[1.6rem] leading-[1.3] text-navy sm:text-3xl md:text-[2.5rem]">
              We obsess over the details most painters skip: <em className="text-gold">the prep, the lines, the clean-up.</em>{" "}
              Because a fine finish isn’t just how a room looks on day one, but how it still looks years later.
            </p>
          </Reveal>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden bg-line ring-1 ring-line md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="bg-ivory p-6 md:p-8">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="display block text-4xl text-navy md:text-5xl">{s.value}</span>
                  <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.16em] text-stone">{s.label}</span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Services ───────────────────────── */

function Services() {
  return (
    <section className="bg-sand/50 py-20 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Every surface, <em className="text-gold">finished properly.</em>
              </>
            }
            intro="From a single accent wall to a full commercial unit, we bring the same standard of care to every job."
          />
          <Reveal>
            <Link href="/services" className="btn btn-ghost shrink-0">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Mobile: swipeable row. Tablet+: grid. */}
      <div className="mt-14 md:container-x">
        <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {services.map((s, i) => (
            <li key={s.slug} className="w-[82%] shrink-0 snap-center sm:w-[60%] md:w-auto">
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <ServiceCard service={s} index={i} />
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-4 px-5 text-center text-xs uppercase tracking-[0.2em] text-stone md:hidden">Swipe to explore →</p>
      </div>
    </section>
  );
}

/* ───────────────────────── Signature: feature walls ───────────────────────── */

function Signature() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 text-paper md:py-32">
      <div aria-hidden="true" className="absolute inset-y-0 left-[8%] hidden w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:block" />
      <div aria-hidden="true" className="absolute inset-y-0 right-[8%] hidden w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:block" />
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <SectionHeading
            tone="light"
            eyebrow="Our signature"
            title={
              <>
                The feature wall, <em className="text-gold-soft">elevated.</em>
              </>
            }
            intro="Deep navy panelling. Brushed-gold inlays. Geometric trim laid out to the millimetre. Our feature walls have become what DC Fine Painting is known for, and each one is designed for its room."
          />
          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-4 text-paper/80">
              {["Custom layout & colour design", "Trim supplied, installed & finished", "Seamless caulk lines & joins"].map((t) => (
                <li key={t} className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <Sparkle className="h-3 w-3 text-gold" /> {t}
                </li>
              ))}
            </ul>
            <Link href="/services/feature-walls" className="btn btn-gold mt-10">
              Design your wall <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-6 gap-3 md:gap-5 lg:col-span-7">
          <Unveil className="relative col-span-6 aspect-[16/11] overflow-hidden">
            <Image src={navyGold} alt="Navy feature wall with vertical brushed-gold slats in a finished basement" fill sizes="(min-width: 1024px) 55vw, 100vw" placeholder="blur" className="object-cover" quality={90} />
          </Unveil>
          <Unveil delay={0.15} className="arch relative col-span-3 aspect-[3/4]">
            <Image src={hallway} alt="Basement hallway with navy and gold accent wall and crisp white doors" fill sizes="(min-width: 1024px) 27vw, 50vw" placeholder="blur" className="object-cover" />
          </Unveil>
          <Unveil delay={0.3} className="relative col-span-3 aspect-[3/4] overflow-hidden">
            <Image src={diamond} alt="Geometric navy wall with nested gold diamond trim" fill sizes="(min-width: 1024px) 27vw, 50vw" placeholder="blur" className="object-cover" />
          </Unveil>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Before / after ───────────────────────── */

function Transformation() {
  return (
    <section className="container-x py-20 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6 lg:col-start-1">
          <Reveal>
            <BeforeAfter before={beforeAfter.before} after={beforeAfter.after} alt={beforeAfter.title} />
          </Reveal>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <SectionHeading
            eyebrow="Before & after"
            title={
              <>
                Drag to see the <em className="text-gold">difference.</em>
              </>
            }
            intro={beforeAfter.caption}
          />
          <Reveal delay={0.1}>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-stone">Project</dt>
                <dd className="display mt-2 text-xl text-navy">Commercial unit</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-stone">Scope</dt>
                <dd className="display mt-2 text-xl text-navy">Ceiling, steel & walls</dd>
              </div>
            </dl>
            <Link href="/work" className="link-u mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-navy">
              View the full portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Process ───────────────────────── */

function ProcessSection() {
  return (
    <section className="bg-sand/50 py-20 md:py-32">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="How we work"
          title={
            <>
              A simple, <em className="text-gold">stress-free</em> process.
            </>
          }
          intro="No guesswork, no surprises. Just clear communication from the first call to the final walkthrough."
        />
        <div className="mt-16">
          <Process />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Materials / why us ───────────────────────── */

function Materials() {
  const points = [
    { t: "Premium paints only", d: "We use top-tier lines like Sherwin-Williams Emerald for a richer colour, better coverage and a finish you can wash." },
    { t: "Brush & roller craftsmanship", d: "Hand-cut lines at every ceiling and trim edge. No overspray, no shortcuts, no fuzzy edges." },
    { t: "Respect for your home", d: "Floors covered, furniture protected and every room left cleaner than we found it." },
    { t: "Honest, upfront pricing", d: "Detailed written quotes with no hidden extras. Professional quality at a fair price." },
  ];
  return (
    <section className="container-x py-20 md:py-32">
      <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="relative order-2 lg:order-1 lg:col-span-5">
          <Unveil className="arch relative mx-auto aspect-[4/5] max-w-md">
            <Image src={paintImage} alt="Sherwin-Williams Emerald paint can on a kitchen counter during a DC Fine Painting job" fill sizes="(min-width: 1024px) 35vw, 90vw" placeholder="blur" className="object-cover" />
          </Unveil>
          <Reveal delay={0.3} className="absolute -bottom-6 left-0 hidden w-48 overflow-hidden bg-paper p-2 shadow-2xl ring-1 ring-line sm:block md:left-4">
            <div className="relative aspect-square">
              <Image src={exteriorClassic} alt="" fill sizes="192px" placeholder="blur" className="object-cover" />
            </div>
            <p className="px-2 pb-1 pt-3 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-stone">Interior · Exterior</p>
          </Reveal>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
          <SectionHeading
            eyebrow="Why DC Fine"
            title={
              <>
                Professional. Reliable. <em className="text-gold">Affordable.</em>
              </>
            }
          />
          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {points.map((p, i) => (
              <li key={p.t}>
                <Reveal delay={i * 0.08}>
                  <span className="display text-lg italic text-gold">0{i + 1}</span>
                  <h3 className="display mt-2 text-[1.35rem] text-navy">{p.t}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{p.d}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Reviews ───────────────────────── */

function Reviews() {
  return (
    <section className="grain border-y border-line py-20 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow flex justify-center">Kind words</p>
        </Reveal>
        <div className="mt-10">
          <Testimonials />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Service areas ───────────────────────── */

function Areas() {
  return (
    <section className="container-x py-20 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Where we work"
            title={
              <>
                Painting across the <em className="text-gold">Greater Toronto Area.</em>
              </>
            }
            intro="Based in the GTA and happy to travel. Don’t see your city? Give us a call, as we likely serve your area too."
          />
          <Reveal delay={0.1}>
            <a href={site.phone.href} className="btn btn-primary mt-10">
              <Phone className="h-4 w-4" /> {site.phone.display}
            </a>
          </Reveal>
        </div>
        <ul className="grid grid-cols-2 self-end border-t border-line sm:grid-cols-3 lg:col-span-7">
          {site.serviceAreas.map((city, i) => (
            <li key={city} className="border-b border-line">
              <Reveal delay={(i % 3) * 0.05} className="group flex items-center justify-between py-5 pr-4">
                <span className="display text-xl text-navy transition-colors group-hover:text-gold md:text-[1.35rem]">{city}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-gold/60 transition-transform group-hover:scale-150" />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
