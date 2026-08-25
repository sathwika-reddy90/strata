import { img } from "./images";
import type { Product } from "@/types";

const quartzImages = [
  img.kitchenQuartzWaterfall,
  img.kitchenCountertopA,
  img.kitchenCountertopB,
  img.kitchenCountertopC,
  img.kitchenCountertopD,
  img.kitchenGraniteWhite,
  img.hotelLobbyMarble,
];

export const quartzSubcategories = [
  "White Quartz",
  "Marble-Look Quartz",
  "Grey Quartz",
  "Dark Quartz",
  "Premium Quartz",
] as const;

export const quartzApplications = [
  "Kitchen Countertops",
  "Islands",
  "Bathroom Vanities",
  "Reception Desks",
  "Commercial Interiors",
] as const;

interface QuartzSeed {
  name: string;
  subcategory: string;
  finish: string;
  colour: string;
  application: string[];
  featured?: boolean;
}

const seeds: QuartzSeed[] = [
  { name: "Pure Frost", subcategory: "White Quartz", finish: "Polished", colour: "Clean White", application: ["Kitchen Countertops", "Islands"], featured: true },
  { name: "Arctic Snow", subcategory: "White Quartz", finish: "Polished", colour: "Bright White", application: ["Bathroom Vanities", "Islands"] },
  { name: "Cloud Nine", subcategory: "White Quartz", finish: "Matte", colour: "Soft White", application: ["Kitchen Countertops", "Commercial Interiors"] },
  { name: "Calacatta Verona", subcategory: "Marble-Look Quartz", finish: "Polished", colour: "White with Grey Veins", application: ["Kitchen Countertops", "Reception Desks"], featured: true },
  { name: "Statuario Reserve", subcategory: "Marble-Look Quartz", finish: "Polished", colour: "White with Gold Veins", application: ["Islands", "Bathroom Vanities"] },
  { name: "Carrara Mist", subcategory: "Marble-Look Quartz", finish: "Honed", colour: "Soft Grey Veins", application: ["Kitchen Countertops", "Commercial Interiors"] },
  { name: "Urban Concrete", subcategory: "Grey Quartz", finish: "Matte", colour: "Cement Grey", application: ["Kitchen Countertops", "Commercial Interiors"] },
  { name: "Storm Cloud", subcategory: "Grey Quartz", finish: "Polished", colour: "Medium Grey", application: ["Islands", "Reception Desks"], featured: true },
  { name: "Graphite Fog", subcategory: "Grey Quartz", finish: "Suede", colour: "Deep Grey", application: ["Bathroom Vanities", "Commercial Interiors"] },
  { name: "Midnight Basalt", subcategory: "Dark Quartz", finish: "Polished", colour: "Deep Charcoal", application: ["Kitchen Countertops", "Reception Desks"] },
  { name: "Obsidian Reserve", subcategory: "Dark Quartz", finish: "Polished", colour: "Jet Black", application: ["Islands", "Commercial Interiors"], featured: true },
  { name: "Espresso Noir", subcategory: "Dark Quartz", finish: "Matte", colour: "Dark Brown Black", application: ["Kitchen Countertops", "Bathroom Vanities"] },
  { name: "Imperial Reserve", subcategory: "Premium Quartz", finish: "Polished", colour: "Gold-Flecked White", application: ["Reception Desks", "Commercial Interiors"], featured: true },
  { name: "Regency Veil", subcategory: "Premium Quartz", finish: "Polished", colour: "Ivory with Bronze Veins", application: ["Islands", "Kitchen Countertops"] },
  { name: "Sovereign Onyx", subcategory: "Premium Quartz", finish: "Polished", colour: "Black with Gold Veins", application: ["Reception Desks", "Bathroom Vanities"] },
];

export const quartzProducts: Product[] = seeds.map((seed, i) => ({
  id: `quartz-${i + 1}`,
  name: seed.name,
  category: "quartz",
  subcategory: seed.subcategory,
  image: quartzImages[i % quartzImages.length],
  description:
    "An engineered quartz surface combining sophisticated, consistent design with everyday stain and scratch resistance.",
  finish: seed.finish,
  colour: seed.colour,
  size: "320cm x 160cm (customisable)",
  application: seed.application,
  featured: seed.featured,
}));
