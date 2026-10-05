/**
 * Single source of truth for business details.
 * Anything marked TODO is a placeholder — confirm with the client before launch.
 */
export const site = {
  name: "DC Fine Painting",
  shortName: "DC Fine",
  tagline: "Professional · Reliable · Affordable",
  description:
    "DC Fine Painting is a GTA painting company delivering immaculate interior, exterior, feature-wall and commercial painting, plus epoxy floors, power washing and popcorn ceiling removal.",
  url: "https://www.dcfinepainting.ca", // TODO: confirm production domain
  phone: {
    display: "(437) 875-4406",
    href: "tel:+14378754406",
    sms: "sms:+14378754406",
  },
  whatsapp: {
    // Assumed to be the same number as the phone line — confirm with the client.
    display: "(437) 875-4406",
    href: "https://wa.me/14378754406?text=" + encodeURIComponent("Hi DC Fine Painting! I'd like a quote for a painting project."),
  },
  email: "hello@dcfinepainting.ca", // TODO: replace with the client's real email
  instagram: {
    handle: "@dcfine.painting",
    href: "https://www.instagram.com/dcfine.painting/",
  },
  hours: [
    // TODO: confirm business hours with the client
    { days: "Mon – Fri", time: "7:00 am – 7:00 pm" },
    { days: "Saturday", time: "8:00 am – 5:00 pm" },
    { days: "Sunday", time: "By appointment" },
  ],
  yearsInBusiness: 3,
  region: "Greater Toronto Area",
  serviceAreas: [
    "Toronto",
    "Mississauga",
    "Brampton",
    "Vaughan",
    "Markham",
    "Richmond Hill",
    "Oakville",
    "Etobicoke",
    "Scarborough",
    "North York",
    "Ajax",
    "Pickering",
  ],
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * TODO: placeholder figures — replace with the client's real numbers before launch.
 * Only `yearsInBusiness` above is a confirmed fact.
 */
export const stats = [
  { value: `${site.yearsInBusiness}+`, label: "Years serving the GTA" },
  { value: "250+", label: "Rooms & spaces transformed" }, // TODO
  { value: "5.0", label: "Average client rating" }, // TODO
  { value: "100%", label: "Satisfaction walkthrough" },
] as const;
