import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

import roller from "@/assets/images/stock/roller.jpg";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

/** Closing call-to-action band used at the bottom of every page. */
export function CTA({ title = "Let’s give your walls the finish they deserve." }: { title?: string }) {
  return (
    <section className="container-x py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden bg-navy text-paper">
          <Image src={roller} alt="" fill sizes="100vw" placeholder="blur" className="object-cover opacity-25 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/40" />
          <div className="relative grid gap-10 px-6 py-14 sm:px-10 md:grid-cols-12 md:items-end md:px-16 md:py-24">
            <div className="md:col-span-8">
              <p className="eyebrow text-gold-soft">Free, no-obligation estimate</p>
              <h2 className="display mt-6 text-[2.1rem] text-paper sm:text-[2.6rem] md:text-[3.5rem]">{title}</h2>
              <p className="mt-6 max-w-xl text-paper/70">
                Tell us about your project and we’ll get back to you with a clear, detailed quote — usually within one business day.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
              <Link href="/contact" className="btn btn-gold w-full md:w-auto">
                Request a Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href={site.phone.href} className="btn btn-ghost-light w-full md:w-auto">
                <Phone className="h-4 w-4" /> {site.phone.display}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
