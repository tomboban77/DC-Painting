import type { StaticImageData } from "next/image";

import navyGold from "@/assets/images/work/feature-wall-navy-gold.jpg";
import diamond from "@/assets/images/work/feature-wall-diamond.jpg";
import charcoal from "@/assets/images/work/feature-wall-charcoal.jpg";
import hallway from "@/assets/images/work/basement-hallway.jpg";
import livingRoom from "@/assets/images/work/residential-living-room.jpg";
import openConcept from "@/assets/images/work/residential-open-concept.jpg";
import commercialBefore from "@/assets/images/work/commercial-before.jpg";
import commercialAfter from "@/assets/images/work/commercial-after.jpg";
import emerald from "@/assets/images/work/sherwin-williams-emerald.jpg";

export type ProjectCategory = "Feature Walls" | "Residential" | "Commercial";

export type Project = {
  title: string;
  location: string; // TODO: confirm real project locations with the client
  category: ProjectCategory;
  image: StaticImageData;
  description: string;
};

/** Real DC Fine Painting projects (client-supplied photos). */
export const projects: Project[] = [
  {
    title: "Navy & Gold Slat Wall",
    location: "Basement · GTA",
    category: "Feature Walls",
    image: navyGold,
    description: "A full-length stepped feature wall with vertical brushed-gold inlays on deep navy panelling.",
  },
  {
    title: "Geometric Diamond Wall",
    location: "Basement · GTA",
    category: "Feature Walls",
    image: diamond,
    description: "Layered diagonal trim with nested gold diamonds — our most-requested design.",
  },
  {
    title: "Charcoal Geometric Feature",
    location: "Living Room · GTA",
    category: "Feature Walls",
    image: charcoal,
    description: "Tone-on-tone geometric moulding finished in a single matte charcoal for quiet drama.",
  },
  {
    title: "Basement Hallway Finish",
    location: "Basement · GTA",
    category: "Residential",
    image: hallway,
    description: "Crisp white walls, doors and trim balanced against a navy-and-gold accent.",
  },
  {
    title: "Living Room Repaint",
    location: "Residential · GTA",
    category: "Residential",
    image: livingRoom,
    description: "Soft greige walls, bright white crown moulding and freshly finished baseboards.",
  },
  {
    title: "Open-Concept Refresh",
    location: "Residential · GTA",
    category: "Residential",
    image: openConcept,
    description: "Whole-floor repaint with clean ceiling lines through a long open-concept space.",
  },
  {
    title: "Commercial Unit Transformation",
    location: "Commercial · GTA",
    category: "Commercial",
    image: commercialAfter,
    description: "Open steel ceiling and ductwork painted black above crisp white walls.",
  },
];

export const beforeAfter = {
  title: "Commercial Unit Transformation",
  caption: "Exposed steel, ductwork and patched drywall — finished in matte black and clean white.",
  before: commercialBefore,
  after: commercialAfter,
};

export const paintImage = emerald;
