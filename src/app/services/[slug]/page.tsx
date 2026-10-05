import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Phone } from "lucide-react";

import { Reveal, Unveil } from "@/components/Reveal";
import { ArchOutline } from "@/components/Section";
import { FAQ } from "@/components/FAQ";
import { ServiceCard } from "@/components/ServiceCard";
import { CTA } from "@/components/CTA";
import { Sparkle } from "@/components/Icons";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.name} in the GTA`,
    description: `${s.summary} Serving Toronto, Mississauga, Brampton, Vaughan, Markham and the wider GTA.`,
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.indexOf(service);
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden border-b border-line">
        <div className="container-x grid gap-12 pb-16 pt-10 md:pb-24 md:pt-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-stone hover:text-gold">
                <ArrowLeft className="h-3.5 w-3.5" /> All services
              </Link>
              <div className="mt-8 flex items-center gap-4">
                <span className="h-9 w-9 rounded-full ring-1 ring-line" style={{ backgroundColor: service.chip.color }} />
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-gold">
                  No. {String(index + 1).padStart(2, "0")} · {service.name}
                </span>
              </div>
              <h1 className="display mt-6 text-[2.5rem] text-navy sm:text-5xl md:text-[4rem]">{service.headline}</h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">{service.summary}</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href={`/contact?service=${service.slug}`} className="btn btn-primary">
                  Get a free quote <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href={site.phone.href} className="btn btn-ghost">
                  <Phone className="h-4 w-4" /> {site.phone.display}
                </a>
              </div>
            </Reveal>
          </div>
          <div className="relative lg:col-span-6">
            <Unveil className="arch relative mx-auto aspect-[4/5] max-w-lg">
              <Image src={service.image} alt={service.name} fill priority sizes="(min-width: 1024px) 45vw, 90vw" placeholder="blur" className="object-cover" quality={90} />
            </Unveil>
            <ArchOutline className="pointer-events-none absolute left-1/2 top-0 h-full w-full max-w-[34rem] -translate-x-1/2 -translate-y-4 text-gold/30" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Overview</p>
          </Reveal>
          <div className="space-y-6 lg:col-span-8">
            {service.intro.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className={i === 0 ? "display text-[1.5rem] leading-[1.4] text-navy md:text-[1.9rem]" : "text-lg leading-relaxed text-muted"}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-sand/50 py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">What’s included</p>
            <h2 className="display mt-5 text-[2.4rem] text-navy">
              Done right, <em className="text-gold">start to finish.</em>
            </h2>
          </Reveal>
          <div className="lg:col-span-8">
            <ul className="grid gap-px overflow-hidden bg-line ring-1 ring-line sm:grid-cols-2">
              {service.includes.map((inc, i) => (
                <li key={inc} className="bg-paper">
                  <Reveal delay={(i % 2) * 0.06} className="flex items-start gap-4 p-6">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-paper">
                      <Check className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                    <span className="pt-1 text-[0.98rem] text-ink">{inc}</span>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal delay={0.1} className="mt-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">Ideal for</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.idealFor.map((t) => (
                  <li key={t} className="flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink/85">
                    <Sparkle className="h-2.5 w-2.5 text-gold" /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Questions</p>
            <h2 className="display mt-5 text-[2.4rem] text-navy">
              Good to <em className="text-gold">know.</em>
            </h2>
            <p className="mt-5 text-muted">
              Something else on your mind?{" "}
              <a href={site.phone.href} className="link-u font-semibold text-navy">
                Call us
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <FAQ items={service.faqs} />
          </Reveal>
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-line bg-sand/50 py-20 md:py-28">
        <div className="container-x">
          <Reveal className="flex items-end justify-between gap-6">
            <h2 className="display text-3xl text-navy md:text-[2.6rem]">
              Other <em className="text-gold">services</em>
            </h2>
            <Link href="/services" className="link-u hidden text-sm font-bold uppercase tracking-[0.16em] text-navy sm:inline">
              View all
            </Link>
          </Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug}>
                <ServiceCard service={s} index={services.indexOf(s)} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA title={`Ready to talk about your ${service.name.toLowerCase()} project?`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
