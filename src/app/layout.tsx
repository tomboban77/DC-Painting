import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { BackToTop } from "@/components/BackToTop";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "DC Fine Painting | Interior & Exterior Painters in the GTA",
    template: "%s | DC Fine Painting",
  },
  description: site.description,
  keywords: [
    "painters Toronto",
    "GTA painting company",
    "interior painting",
    "exterior painting",
    "feature wall",
    "epoxy flooring",
    "popcorn ceiling removal",
    "Mississauga painters",
    "Brampton painters",
    "Vaughan painters",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: site.name,
    title: "DC Fine Painting | Interior & Exterior Painters in the GTA",
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: "+1-437-875-4406",
  email: site.email,
  areaServed: site.serviceAreas.map((city) => ({ "@type": "City", name: `${city}, ON` })),
  sameAs: [site.instagram.href],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Painting services",
    itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-CA" data-scroll-behavior="smooth" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallBar />
        <BackToTop />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
