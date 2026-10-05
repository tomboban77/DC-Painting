import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { LogoBadge } from "./Logo";
import { InstagramIcon, Sparkle, WhatsAppIcon } from "./Icons";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep pb-28 text-paper/70 md:pb-0">
      {/* Oversized wordmark */}
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-[0.18em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap display text-[22vw] italic leading-none text-white/[0.035]">
        Fine Painting
      </div>

      <div className="container-x relative">
        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4">
            <LogoBadge className="h-32 w-32 ring-1 ring-white/10 rounded-full" />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed">
              Interior, exterior and signature feature-wall painting across the Greater Toronto Area. {site.tagline}.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href={site.instagram.href}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold-soft"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold-soft"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={site.phone.href}
                aria-label="Call"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold-soft"
              >
                <Phone className="h-[18px] w-[18px]" strokeWidth={1.6} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-8 md:grid-cols-3">
            <div>
              <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-gold-soft">Services</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="link-u hover:text-paper">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-gold-soft">Company</h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <Link href="/" className="link-u hover:text-paper">Home</Link>
                </li>
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="link-u hover:text-paper">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="mt-10 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-gold-soft">Hours</h3>
              <ul className="mt-5 space-y-2 text-sm">
                {site.hours.map((h) => (
                  <li key={h.days} className="flex flex-col">
                    <span className="text-paper/90">{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-gold-soft">Get in touch</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <a href={site.phone.href} className="group flex items-start gap-3 hover:text-paper">
                    <Phone className="mt-0.5 h-4 w-4 text-gold-soft" strokeWidth={1.6} />
                    <span className="display text-xl text-paper">{site.phone.display}</span>
                  </a>
                </li>
                <li>
                  <a href={site.whatsapp.href} target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-paper">
                    <WhatsAppIcon className="mt-0.5 h-4 w-4 text-gold-soft" />
                    Chat on WhatsApp
                  </a>
                </li>
                <li>
                  <a href={site.instagram.href} target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-paper">
                    <InstagramIcon className="mt-0.5 h-4 w-4 text-gold-soft" />
                    {site.instagram.handle}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="flex items-start gap-3 hover:text-paper">
                    <Mail className="mt-0.5 h-4 w-4 text-gold-soft" strokeWidth={1.6} />
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" strokeWidth={1.6} />
                  <span>{site.serviceAreas.join(" · ")}</span>
                </li>
              </ul>
              <Link href="/contact" className="btn btn-gold mt-8 w-full sm:w-auto">
                Free Estimate <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 py-8 text-xs md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="flex items-center gap-3 uppercase tracking-[0.2em]">
            Professional <Sparkle className="h-2 w-2 text-gold" /> Reliable <Sparkle className="h-2 w-2 text-gold" /> Affordable
          </p>
        </div>
      </div>
    </footer>
  );
}
