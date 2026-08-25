import type { KnowledgeTopic } from "@/types";
import { img } from "./images";

export const knowledgeCategories = [
  "Material Basics",
  "Technical Performance",
  "Installation",
  "Care & Maintenance",
] as const;

export const knowledgeTopics: KnowledgeTopic[] = [
  {
    id: "know-1",
    title: "Granite Guide",
    description: "Understanding formation, veining, porosity and where natural granite performs best.",
    category: "Material Basics",
    image: img.graniteSurfacePolished,
  },
  {
    id: "know-2",
    title: "Quartz Guide",
    description: "How engineered quartz is made, and why it behaves differently to natural stone.",
    category: "Material Basics",
    image: img.kitchenQuartzWaterfall,
  },
  {
    id: "know-3",
    title: "Porcelain Guide",
    description: "Vitrification, water absorption ratings and why porcelain suits demanding spaces.",
    category: "Material Basics",
    image: img.marbleWhiteYule,
  },
  {
    id: "know-4",
    title: "Tile Guide",
    description: "Choosing the right tile size, format and layout for floors, walls and outdoor areas.",
    category: "Material Basics",
    image: img.tileCreamSpeckled,
  },
  {
    id: "know-5",
    title: "Surface Finishes",
    description: "Polished, honed, leathered and flamed — how finish changes look, feel and grip.",
    category: "Technical Performance",
    image: img.granitePatagonia,
  },
  {
    id: "know-6",
    title: "Slip & Wear Ratings",
    description: "What R-ratings and PEI classifications mean when specifying floors for wet or busy areas.",
    category: "Technical Performance",
    image: img.outdoorPatioStone,
  },
  {
    id: "know-7",
    title: "Water Absorption",
    description: "Why porosity determines whether a surface belongs indoors, outdoors, or in a wet room.",
    category: "Technical Performance",
    image: img.bathroomHotelMarble,
  },
  {
    id: "know-8",
    title: "Installation Guide",
    description: "What to expect during measurement, templating, cutting and fitting.",
    category: "Installation",
    image: img.kitchenGraniteVaulted,
  },
  {
    id: "know-9",
    title: "Subfloor Preparation",
    description: "Why a level, stable substrate matters more than the tile itself for a lasting finish.",
    category: "Installation",
    image: img.tileGarnetRed,
  },
  {
    id: "know-10",
    title: "Grout & Joint Widths",
    description: "How joint width and grout choice affect both appearance and long-term durability.",
    category: "Installation",
    image: img.marbleCheckeredFloor,
  },
  {
    id: "know-11",
    title: "Maintenance Guide",
    description: "Sealing schedules and everyday care to keep every surface looking new.",
    category: "Care & Maintenance",
    image: img.kitchenStoneCounters,
  },
  {
    id: "know-12",
    title: "Stain Removal Basics",
    description: "The right first response to oil, acid and mineral stains on natural stone.",
    category: "Care & Maintenance",
    image: img.marbleBrownWhite,
  },
];
