import type { StaticImageData } from "next/image";

import interior from "@/assets/images/stock/interior.jpg";
import exterior from "@/assets/images/stock/exterior-painters.jpg";
import featureWall from "@/assets/images/work/feature-wall-diamond.jpg";
import commercial from "@/assets/images/work/commercial-after.jpg";
import cabinets from "@/assets/images/stock/cabinets.jpg";
import epoxy from "@/assets/images/stock/epoxy.jpg";
import powerWashing from "@/assets/images/stock/power-washing.jpg";
import deck from "@/assets/images/stock/deck.jpg";
import popcorn from "@/assets/images/stock/popcorn-ceiling.jpg";

export type Service = {
  slug: string;
  name: string;
  /** Short line used on cards */
  summary: string;
  /** Headline used on the service's own page */
  headline: string;
  intro: string[];
  image: StaticImageData;
  includes: string[];
  idealFor: string[];
  faqs: { q: string; a: string }[];
  /** Paint-chip styling for the service card */
  chip: { color: string; name: string; ink: "light" | "dark" };
};

export const services: Service[] = [
  {
    slug: "interior-painting",
    name: "Interior Painting",
    summary: "Walls, ceilings, trim and doors finished with crisp lines and a flawless, even sheen.",
    headline: "Rooms that feel finished, not just painted.",
    intro: [
      "Great interior painting is 70% preparation. We protect your floors and furniture, fill and sand every imperfection, prime where needed and cut perfectly straight lines at ceilings and trim before a single roller touches the wall.",
      "Whether it’s one bedroom or a full home repaint, we work cleanly and on schedule, and we walk every room with you at the end so nothing is left to chance.",
    ],
    image: interior,
    includes: [
      "Walls, ceilings, baseboards, trim & doors",
      "Drywall patching, crack filling & sanding",
      "Stain-blocking primers where needed",
      "Brush & roller application — no shortcuts",
      "Full floor & furniture protection",
      "Daily tidy-up and final walkthrough",
    ],
    idealFor: ["Full home repaints", "Move-in / move-out refresh", "Basements & condos", "Pre-sale staging"],
    faqs: [
      {
        q: "Do I need to move my furniture?",
        a: "No. We move and cover furniture for you and put everything back where it was. We just ask that small valuables and wall art are removed beforehand.",
      },
      {
        q: "How long does a typical room take?",
        a: "Most standard bedrooms are completed in a single day including prep and two coats. Larger rooms, high ceilings or colour changes can take longer — we’ll give you a clear timeline in your quote.",
      },
      {
        q: "Which paint do you use?",
        a: "We favour premium Sherwin-Williams lines such as Emerald and Duration for their durability and washability, and we’re happy to use your preferred brand.",
      },
    ],
    chip: { color: "#EFE7D8", name: "Ivory Hall", ink: "dark" },
  },
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    summary: "Siding, brick, stucco, trim and doors protected against Ontario’s toughest seasons.",
    headline: "Curb appeal built to survive a Canadian winter.",
    intro: [
      "Ontario weather is hard on a home’s exterior. We scrape, wash, caulk and prime properly so your new finish bonds and lasts — not just for this summer, but for years.",
      "From siding and stucco to garage doors, shutters, soffits and front doors, we use exterior-grade coatings rated for freeze-thaw cycles and UV exposure.",
    ],
    image: exterior,
    includes: [
      "Siding, stucco, brick & masonry",
      "Trim, soffits, fascia & shutters",
      "Front doors & garage doors",
      "Scraping, caulking & spot-priming",
      "Weather-rated premium coatings",
      "Landscaping & window protection",
    ],
    idealFor: ["Detached & semi-detached homes", "Townhouses", "Front door makeovers", "Pre-listing curb appeal"],
    faqs: [
      {
        q: "When is the best time to paint an exterior in the GTA?",
        a: "Late spring through early fall, when temperatures stay consistently above 10°C. We schedule around the forecast so coatings cure properly.",
      },
      {
        q: "Can you paint brick?",
        a: "Yes. Brick needs a breathable masonry primer and paint system — we’ll assess its condition and recommend the right approach.",
      },
    ],
    chip: { color: "#7C8B83", name: "Lakeshore Sage", ink: "light" },
  },
  {
    slug: "feature-walls",
    name: "Accent & Feature Walls",
    summary: "Board-and-batten, geometric trim and two-tone statement walls — our signature work.",
    headline: "The wall everyone asks about.",
    intro: [
      "Feature walls are where craftsmanship shows. We design and install geometric trim, board-and-batten, slat and panel moulding layouts, then finish them in rich, deep colours with metallic or contrasting accents.",
      "Our navy-and-gold basement walls have become a signature — but every design is tailored to your space, lighting and style.",
    ],
    image: featureWall,
    includes: [
      "Layout design & colour consultation",
      "Geometric, slat & board-and-batten trim",
      "Precision caulking & seamless joins",
      "Deep-tone and metallic accent finishes",
      "Wainscoting & panel moulding",
      "Matching trim and door finishes",
    ],
    idealFor: ["Basements & media rooms", "Entryways & hallways", "Bedrooms & nurseries", "Offices & retail"],
    faqs: [
      {
        q: "Do you install the trim as well as paint it?",
        a: "Yes — we handle the full feature: layout, cutting, installing, filling, caulking and painting, so the finished wall looks like one seamless piece.",
      },
      {
        q: "Can you match a design I saw online?",
        a: "Absolutely. Send us a photo and your wall dimensions, and we’ll adapt the design to your space and quote it.",
      },
    ],
    chip: { color: "#1B2A4A", name: "Midnight Navy", ink: "light" },
  },
  {
    slug: "commercial-painting",
    name: "Commercial Painting",
    summary: "Offices, retail and industrial units painted on your schedule, with minimal disruption.",
    headline: "Professional spaces, professionally finished.",
    intro: [
      "We paint offices, storefronts, restaurants and warehouse units across the GTA — including open ceilings, exposed ductwork and steel structure.",
      "We plan around your business hours, offering evening and weekend work so you stay open while we transform the space.",
    ],
    image: commercial,
    includes: [
      "Offices, retail & restaurants",
      "Warehouse & industrial units",
      "Open ceilings, ductwork & steel",
      "Evening & weekend scheduling",
      "Low-VOC, low-odour options",
      "Tenant improvements & turnovers",
    ],
    idealFor: ["Property managers", "Retail fit-outs", "Office refreshes", "New tenant turnovers"],
    faqs: [
      {
        q: "Can you work after hours?",
        a: "Yes. Evening and weekend scheduling is available so your team and customers aren’t disrupted.",
      },
      {
        q: "Do you paint exposed ceilings?",
        a: "Yes — we regularly paint open-structure ceilings, ductwork and steel in black, white or custom colours for a clean, modern finish.",
      },
    ],
    chip: { color: "#2B2D31", name: "Studio Charcoal", ink: "light" },
  },
  {
    slug: "cabinets-drywall",
    name: "Cabinet Painting & Drywall Repair",
    summary: "Factory-smooth cabinet refinishing and invisible drywall repairs before we paint.",
    headline: "A new kitchen look, without the renovation bill.",
    intro: [
      "Cabinet painting is one of the highest-impact upgrades for the money. We degrease, sand, prime with a bonding primer and apply durable cabinet-grade enamel for a smooth, hard-wearing finish.",
      "We also repair dents, holes, cracks and water-damaged drywall so the surface is perfect before it’s painted — no flashing, no visible patches.",
    ],
    image: cabinets,
    includes: [
      "Kitchen & bathroom cabinet refinishing",
      "Degreasing, sanding & bonding primer",
      "Durable cabinet-grade enamels",
      "Drywall holes, dents & cracks",
      "Water-damage & tape-seam repairs",
      "Texture matching & skim coating",
    ],
    idealFor: ["Kitchen refreshes", "Bathroom vanities", "Post-move wall repairs", "Rental turnovers"],
    faqs: [
      {
        q: "Will painted cabinets chip?",
        a: "Proper prep is everything. With degreasing, sanding, a bonding primer and a cabinet-grade enamel, painted cabinets stand up to daily kitchen use.",
      },
      {
        q: "Will I see the drywall patch after painting?",
        a: "No — we feather, sand and prime repairs so they blend into the surrounding wall before painting.",
      },
    ],
    chip: { color: "#4D5B57", name: "Kitchen Slate", ink: "light" },
  },
  {
    slug: "epoxy-flooring",
    name: "Epoxy Flooring",
    summary: "Seamless, high-gloss epoxy floors for garages, basements and commercial spaces.",
    headline: "Floors that shrug off oil, salt and heavy traffic.",
    intro: [
      "An epoxy floor turns a dull concrete slab into a bright, seamless, easy-to-clean surface. It resists oil, road salt, chemicals and hot-tire pickup — ideal for GTA garages.",
      "We grind or etch the concrete, repair cracks, then apply a multi-layer epoxy system with optional decorative flake and a protective topcoat.",
    ],
    image: epoxy,
    includes: [
      "Garages, basements & workshops",
      "Commercial & retail floors",
      "Concrete grinding & crack repair",
      "Solid colour or decorative flake",
      "Anti-slip & UV-stable topcoats",
      "Coved edges on request",
    ],
    idealFor: ["Residential garages", "Basement floors", "Showrooms & shops", "Warehouses"],
    faqs: [
      {
        q: "How long before I can drive on it?",
        a: "Foot traffic is usually fine after about 24 hours, with vehicle traffic after several days depending on the system and temperature. We’ll give you exact timing.",
      },
      {
        q: "Will it handle road salt?",
        a: "Yes — a properly installed epoxy system with a quality topcoat is highly resistant to road salt and winter slush.",
      },
    ],
    chip: { color: "#A6A49E", name: "Polished Stone", ink: "dark" },
  },
  {
    slug: "power-washing",
    name: "Power Washing",
    summary: "Siding, brick, driveways and decks deep-cleaned to look new again.",
    headline: "Wash away years in an afternoon.",
    intro: [
      "Dirt, mildew and grime make a home look older than it is. Our power washing restores siding, brick, concrete, interlock and decks — and it’s the essential first step before any exterior painting or staining.",
      "We adjust pressure and technique for each surface, so delicate materials are cleaned safely without damage.",
    ],
    image: powerWashing,
    includes: [
      "Vinyl & aluminium siding",
      "Brick, stone & stucco",
      "Driveways, walkways & interlock",
      "Decks, fences & patios",
      "Mildew & algae treatment",
      "Pre-paint surface preparation",
    ],
    idealFor: ["Spring clean-ups", "Pre-sale prep", "Before staining or painting", "Rental properties"],
    faqs: [
      {
        q: "Can power washing damage my siding?",
        a: "Not when done correctly. We match pressure, nozzle and cleaning solution to each surface, using soft-wash methods where appropriate.",
      },
    ],
    chip: { color: "#C9D3D6", name: "Fresh Rain", ink: "dark" },
  },
  {
    slug: "deck-fence",
    name: "Deck & Fence Painting",
    summary: "Staining and painting that protects your wood and brings it back to life.",
    headline: "Protect the wood. Love the backyard again.",
    intro: [
      "Sun, rain and snow break wood down fast. We clean, sand and repair decks and fences, then apply premium stains or paints that penetrate and protect.",
      "Choose from transparent, semi-transparent or solid stains — we’ll help you pick the right finish for your wood’s age and condition.",
    ],
    image: deck,
    includes: [
      "Decks, railings & stairs",
      "Wood & composite fences",
      "Pergolas, gazebos & sheds",
      "Washing, sanding & board repair",
      "Transparent to solid stains",
      "Water-repellent sealers",
    ],
    idealFor: ["Weathered decks", "Grey, faded fences", "New pressure-treated wood", "Backyard refreshes"],
    faqs: [
      {
        q: "How soon can new pressure-treated wood be stained?",
        a: "New pressure-treated wood typically needs time to dry out before staining. We test the moisture level and recommend the right timing.",
      },
    ],
    chip: { color: "#8A5A3B", name: "Cedar Grove", ink: "light" },
  },
  {
    slug: "popcorn-ceiling-removal",
    name: "Popcorn Ceiling Removal",
    summary: "Dated stipple ceilings scraped, skimmed and refinished to a smooth modern look.",
    headline: "Smooth, bright ceilings that modernize every room.",
    intro: [
      "Removing popcorn (stipple) ceilings instantly makes a home feel brighter, cleaner and more modern. We fully contain the room, scrape the texture, skim-coat and sand to a perfectly smooth finish, then prime and paint.",
      "Homes built before the mid-1980s may contain asbestos in the texture. We recommend testing first, and we’ll guide you through it before any work begins.",
    ],
    image: popcorn,
    includes: [
      "Full room containment & protection",
      "Wet scraping of stipple texture",
      "Skim coat & level-5 style finish",
      "Sanding with dust control",
      "Primer and ceiling paint",
      "Pot-light friendly finishing",
    ],
    idealFor: ["1970s–90s homes", "Condos", "Pre-sale upgrades", "Whole-home modernization"],
    faqs: [
      {
        q: "How messy is popcorn ceiling removal?",
        a: "The work itself is messy, but your home won’t be. We seal the room with plastic sheeting and floor protection, and clean up thoroughly each day.",
      },
      {
        q: "What about asbestos?",
        a: "If your home was built before the mid-1980s, the texture should be tested before removal. We’ll explain the process and won’t start until it’s confirmed safe.",
      },
    ],
    chip: { color: "#F4F1EA", name: "Smooth Linen", ink: "dark" },
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
