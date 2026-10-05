import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import diamond from "@/assets/images/work/feature-wall-diamond.jpg";
import { Reveal } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import { ArchOutline } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Estimate & Contact",
  description: `Request a free painting estimate from DC Fine Painting. Call ${site.phone.display} or send us your project details. Serving the Greater Toronto Area.`,
};

export default function ContactPage() {
  return (
    <section className="grain relative overflow-hidden">
      <ArchOutline className="pointer-events-none absolute -left-32 top-20 hidden h-[40rem] w-[30rem] text-gold/20 lg:block" />
      <div className="container-x relative grid gap-14 pb-20 pt-14 md:pb-28 md:pt-20 lg:grid-cols-12">
        {/* Left: intro + details */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Free estimate</p>
            <h1 className="display mt-6 text-[2.5rem] text-navy sm:text-5xl md:text-[4rem]">
              Let’s talk about <em className="text-gold">your space.</em>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Share a few details and we’ll come back with a clear, written quote, usually within one business day.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <a href={site.phone.href} className="group mt-12 flex items-center gap-5 border-y border-line py-6">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-navy text-paper transition-colors group-hover:bg-gold">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-stone">Prefer to talk? Call us</span>
                <span className="display mt-1 block text-3xl text-navy">{site.phone.display}</span>
              </span>
            </a>
            <ul className="mt-8 space-y-5 text-[0.95rem] text-ink/85">
              <li className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.6} />
                <a href={`mailto:${site.email}`} className="link-u">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-4">
                <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <a href={site.whatsapp.href} target="_blank" rel="noreferrer" className="link-u">
                  Message us on WhatsApp
                </a>
              </li>
              <li className="flex gap-4">
                <InstagramIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <a href={site.instagram.href} target="_blank" rel="noreferrer" className="link-u">
                  {site.instagram.handle}
                </a>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.6} />
                <span>Serving {site.region}: {site.serviceAreas.slice(0, 6).join(", ")} & more</span>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.6} />
                <span className="grid gap-1">
                  {site.hours.map((h) => (
                    <span key={h.days}>
                      <span className="inline-block w-24 font-semibold">{h.days}</span> {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="mt-12 hidden lg:block">
            <div className="arch relative aspect-[4/3] max-w-sm">
              <Image src={diamond} alt="Navy and gold geometric feature wall" fill sizes="384px" placeholder="blur" className="object-cover" />
            </div>
          </Reveal>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="bg-paper p-6 shadow-[0_40px_80px_-50px_rgba(17,27,49,0.45)] ring-1 ring-line sm:p-10 md:p-12">
              <Suspense>
                <QuoteForm />
              </Suspense>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
