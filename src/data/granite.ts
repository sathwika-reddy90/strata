import { img } from "./images";
import type { Product } from "@/types";

const graniteImages = [
  img.graniteSurfacePolished,
  img.graniteBlackImpala,
  img.granitePatagonia,
  img.kitchenGraniteIsland,
  img.kitchenGraniteVaulted,
  img.kitchenGraniteSteel,
  img.kitchenGraniteWhite,
  img.kitchenStoneCounters,
  img.kitchenCountertopA,
  img.kitchenCountertopB,
];

interface GraniteSeed {
  name: string;
  subcategory: string;
  finish: string;
  colour: string;
  application: string[];
  featured?: boolean;
}

const seeds: GraniteSeed[] = [
  { name: "Absolute Noir", subcategory: "Black Granite", finish: "Polished", colour: "Deep Black", application: ["Countertops", "Flooring"], featured: true },
  { name: "Galaxy Onyx", subcategory: "Black Granite", finish: "Leathered", colour: "Black with Gold Flecks", application: ["Countertops", "Cladding"] },
  { name: "Midnight Pearl", subcategory: "Black Granite", finish: "Honed", colour: "Charcoal Black", application: ["Flooring", "Wall Panels"] },
  { name: "Alpine Frost", subcategory: "White Granite", finish: "Polished", colour: "Warm White", application: ["Countertops", "Flooring"], featured: true },
  { name: "Kashmir Cloud", subcategory: "White Granite", finish: "Polished", colour: "White with Grey Veins", application: ["Countertops", "Vanities"] },
  { name: "Ivory Pearl", subcategory: "White Granite", finish: "Honed", colour: "Off White", application: ["Flooring", "Facades"] },
  { name: "Steel Cascade", subcategory: "Grey Granite", finish: "Honed", colour: "Slate Grey", application: ["Flooring", "Countertops"] },
  { name: "Silver Mist", subcategory: "Grey Granite", finish: "Polished", colour: "Silver Grey", application: ["Countertops", "Facades"], featured: true },
  { name: "Graphite Wave", subcategory: "Grey Granite", finish: "Flamed", colour: "Dark Grey", application: ["Outdoor Flooring", "Steps"] },
  { name: "Tuscan Bronze", subcategory: "Brown Granite", finish: "Polished", colour: "Warm Brown", application: ["Countertops", "Flooring"] },
  { name: "Coffee Estate", subcategory: "Brown Granite", finish: "Leathered", colour: "Deep Brown", application: ["Countertops", "Cladding"] },
  { name: "Desert Amber", subcategory: "Brown Granite", finish: "Honed", colour: "Amber Brown", application: ["Flooring", "Wall Panels"] },
  { name: "Imperial Gold", subcategory: "Premium Granite", finish: "Polished", colour: "Gold Beige", application: ["Countertops", "Reception Desks"], featured: true },
  { name: "Royal Emerald", subcategory: "Premium Granite", finish: "Polished", colour: "Deep Green", application: ["Countertops", "Feature Walls"] },
  { name: "Sapphire Reserve", subcategory: "Premium Granite", finish: "Polished", colour: "Blue Grey", application: ["Countertops", "Lobbies"] },
  { name: "Quarry Slab XL", subcategory: "Granite Slabs", finish: "Raw / Polished", colour: "Mixed Earth Tones", application: ["Large Format Slabs", "Facades"] },
  { name: "Monolith Slab", subcategory: "Granite Slabs", finish: "Honed", colour: "Charcoal", application: ["Large Format Slabs", "Feature Walls"] },
  { name: "Bedrock Slab", subcategory: "Granite Slabs", finish: "Flamed", colour: "Grey Beige", application: ["Outdoor Slabs", "Landscaping"] },
];

export const graniteSubcategories = [
  "Black Granite",
  "White Granite",
  "Grey Granite",
  "Brown Granite",
  "Premium Granite",
  "Granite Slabs",
] as const;

export const graniteProducts: Product[] = seeds.map((seed, i) => ({
  id: `granite-${i + 1}`,
  name: seed.name,
  category: "granite",
  subcategory: seed.subcategory,
  image: graniteImages[i % graniteImages.length],
  description:
    "A natural granite slab selected for its distinctive character, mineral depth and long-term architectural durability.",
  finish: seed.finish,
  colour: seed.colour,
  size: "320cm x 200cm (customisable)",
  application: seed.application,
  featured: seed.featured,
}));
