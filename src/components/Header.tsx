"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";

import { Logo } from "./Logo";
import { InstagramIcon, WhatsAppIcon } from "./Icons";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on route change; lock page scroll while it's open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-navy-deep text-paper/75 md:block">
        <div className="container-x flex h-10 items-center justify-between text-[0.72rem] tracking-wide">
          <p>
            Proudly serving the <span className="text-gold-soft">Greater Toronto Area</span> for {site.yearsInBusiness}+ years
          </p>
          <div className="flex items-center gap-6">
            <a href={site.instagram.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-paper">
              <InstagramIcon className="h-3.5 w-3.5" /> {site.instagram.handle}
            </a>
            <a href={site.whatsapp.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-paper">
              <WhatsAppIcon className="h-3.5 w-3.5" /> WhatsApp us
            </a>
            <a href={site.phone.href} className="inline-flex items-center gap-2 font-semibold text-paper hover:text-gold-soft">
              <Phone className="h-3.5 w-3.5" strokeWidth={1.8} /> {site.phone.display}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-line/80 bg-ivory/85 backdrop-blur-xl" : "border-b border-transparent bg-ivory"
        }`}
      >
        <div className={`container-x flex items-center justify-between transition-all duration-500 ${scrolled ? "h-[4.25rem]" : "h-20 md:h-24"}`}>
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-10 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[0.8rem] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-gold ${
                  isActive(item.href) ? "text-gold" : "text-ink"
                }`}
              >
                {item.label}
                {isActive(item.href) && <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 md:flex">
              <a
                href={site.instagram.href}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-navy transition-colors hover:border-navy hover:bg-navy hover:text-paper"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-navy transition-colors hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
            <a href={site.phone.href} className="hidden items-center gap-2 text-sm font-bold text-navy xl:inline-flex">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-line">
                <Phone className="h-4 w-4" strokeWidth={1.8} />
              </span>
              {site.phone.display}
            </a>
            <Link href="/contact" className="btn btn-primary hidden h-11 sm:inline-flex">
              Free Estimate <ArrowUpRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-navy lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-ivory lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="container-x flex h-20 items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-navy"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav aria-label="Mobile" className="container-x mt-6 flex flex-1 flex-col">
              {[{ label: "Home", href: "/" }, ...nav].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={item.href} className="flex items-baseline gap-4 border-b border-line py-4">
                    <span className="text-xs font-bold text-gold">0{i + 1}</span>
                    <span className={`display text-[2.1rem] ${pathname === item.href ? "italic text-gold" : "text-navy"}`}>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
              <div className="mt-auto grid gap-3 pb-10 pt-8">
                <a href={site.phone.href} className="btn btn-primary w-full">
                  <Phone className="h-4 w-4" /> Call {site.phone.display}
                </a>
                <Link href="/contact" className="btn btn-ghost w-full">
                  Request a Free Estimate
                </Link>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <a href={site.whatsapp.href} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full border border-line py-3 text-sm font-semibold text-navy">
                    <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> WhatsApp
                  </a>
                  <a href={site.instagram.href} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full border border-line py-3 text-sm font-semibold text-navy">
                    <InstagramIcon className="h-4 w-4 text-gold" /> Instagram
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
