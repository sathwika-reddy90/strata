import { graniteSlab } from "./images";
import type { Product } from "@/types";

interface GraniteSeed {
  name: string;
  subcategory: string;
  finish: string;
  colour: string;
  application: string[];
  slab: number; // /images/granite/slab-NN.webp
  featured?: boolean;
}

const seeds: GraniteSeed[] = [
  { name: "Absolute Noir", subcategory: "Black Granite", finish: "Polished", colour: "Deep Black", application: ["Countertops", "Flooring"], slab: 19, featured: true },
  { name: "Galaxy Onyx", subcategory: "Black Granite", finish: "Leathered", colour: "Black with Gold Flecks", application: ["Countertops", "Cladding"], slab: 2 },
  { name: "Midnight Pearl", subcategory: "Black Granite", finish: "Honed", colour: "Charcoal Black", application: ["Flooring", "Wall Panels"], slab: 14 },
  { name: "Alpine Frost", subcategory: "White Granite", finish: "Polished", colour: "Warm White", application: ["Countertops", "Flooring"], slab: 28, featured: true },
  { name: "Kashmir Cloud", subcategory: "White Granite", finish: "Polished", colour: "White with Grey Veins", application: ["Countertops", "Vanities"], slab: 21 },
  { name: "Ivory Pearl", subcategory: "White Granite", finish: "Honed", colour: "Off White", application: ["Flooring", "Facades"], slab: 8 },
  { name: "Steel Cascade", subcategory: "Grey Granite", finish: "Honed", colour: "Slate Grey", application: ["Flooring", "Countertops"], slab: 13 },
  { name: "Silver Mist", subcategory: "Grey Granite", finish: "Polished", colour: "Silver Grey", application: ["Countertops", "Facades"], slab: 7, featured: true },
  { name: "Graphite Wave", subcategory: "Grey Granite", finish: "Flamed", colour: "Dark Grey", application: ["Outdoor Flooring", "Steps"], slab: 15 },
  { name: "Tuscan Bronze", subcategory: "Brown Granite", finish: "Polished", colour: "Warm Brown", application: ["Countertops", "Flooring"], slab: 25 },
  { name: "Coffee Estate", subcategory: "Brown Granite", finish: "Leathered", colour: "Deep Brown", application: ["Countertops", "Cladding"], slab: 34 },
  { name: "Desert Amber", subcategory: "Brown Granite", finish: "Honed", colour: "Amber Brown", application: ["Flooring", "Wall Panels"], slab: 26 },
  { name: "Imperial Gold", subcategory: "Premium Granite", finish: "Polished", colour: "Gold Beige", application: ["Countertops", "Reception Desks"], slab: 38, featured: true },
  { name: "Royal Emerald", subcategory: "Premium Granite", finish: "Polished", colour: "Deep Green", application: ["Countertops", "Feature Walls"], slab: 6 },
  { name: "Sapphire Reserve", subcategory: "Premium Granite", finish: "Polished", colour: "Blue Grey", application: ["Countertops", "Lobbies"], slab: 16 },
  { name: "Quarry Slab XL", subcategory: "Granite Slabs", finish: "Raw / Polished", colour: "Mixed Earth Tones", application: ["Large Format Slabs", "Facades"], slab: 9 },
  { name: "Monolith Slab", subcategory: "Granite Slabs", finish: "Honed", colour: "Charcoal", application: ["Large Format Slabs", "Feature Walls"], slab: 31 },
  { name: "Bedrock Slab", subcategory: "Granite Slabs", finish: "Flamed", colour: "Grey Beige", application: ["Outdoor Slabs", "Landscaping"], slab: 40 },
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
  image: graniteSlab(seed.slab),
  description:
    "A natural granite slab selected for its distinctive character, mineral depth and long-term architectural durability.",
  finish: seed.finish,
  colour: seed.colour,
  size: "320cm x 200cm (customisable)",
  application: seed.application,
  featured: seed.featured,
}));
