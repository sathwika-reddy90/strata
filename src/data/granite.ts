import { graniteSlab } from "./images";
import type { Product } from "@/types";

interface GraniteSeed {
  name: string;
  finish: string;
  colour: string;
  application: string[];
  slab: number; // /images/granite/slab-NN.webp
  featured?: boolean;
}

const seeds: GraniteSeed[] = [
  { name: "Pepper Grey", finish: "Polished", colour: "Grey", application: ["Countertops", "Flooring"], slab: 1 },
  { name: "Galaxy Onyx", finish: "Leathered", colour: "Black with Gold Flecks", application: ["Countertops", "Cladding"], slab: 2 },
  { name: "Alaska White", finish: "Polished", colour: "White with Black Patches", application: ["Countertops", "Flooring"], slab: 3 },
  { name: "Rose Grey", finish: "Polished", colour: "Grey with Pink Veins", application: ["Countertops", "Flooring"], slab: 4 },
  { name: "Silver Wave", finish: "Polished", colour: "Light Grey", application: ["Countertops", "Flooring"], slab: 5 },
  { name: "Royal Emerald", finish: "Polished", colour: "Deep Green", application: ["Countertops", "Feature Walls"], slab: 6 },
  { name: "Silver Mist", finish: "Polished", colour: "Silver Grey", application: ["Countertops", "Facades"], slab: 7, featured: true },
  { name: "Ivory Pearl", finish: "Honed", colour: "Off White", application: ["Flooring", "Facades"], slab: 8 },
  { name: "Quarry Slab XL", finish: "Raw / Polished", colour: "Mixed Earth Tones", application: ["Large Format Slabs", "Facades"], slab: 9 },
  { name: "Ruby Brown", finish: "Polished", colour: "Red Brown", application: ["Countertops", "Flooring"], slab: 10 },
  { name: "Moon Grey", finish: "Polished", colour: "Light Grey", application: ["Countertops", "Flooring"], slab: 11 },
  { name: "Sand Blush", finish: "Polished", colour: "Blush Beige", application: ["Countertops", "Flooring"], slab: 12 },
  { name: "Steel Cascade", finish: "Honed", colour: "Slate Grey", application: ["Flooring", "Countertops"], slab: 13 },
  { name: "Midnight Pearl", finish: "Honed", colour: "Charcoal Black", application: ["Flooring", "Wall Panels"], slab: 14 },
  { name: "Graphite Wave", finish: "Flamed", colour: "Dark Grey", application: ["Outdoor Flooring", "Steps"], slab: 15 },
  { name: "Sapphire Reserve", finish: "Polished", colour: "Blue Grey", application: ["Countertops", "Lobbies"], slab: 16 },
  { name: "Ash Pearl", finish: "Polished", colour: "Light Grey", application: ["Countertops", "Flooring"], slab: 17 },
  { name: "Storm Grey", finish: "Polished", colour: "Grey", application: ["Countertops", "Flooring"], slab: 18 },
  { name: "Absolute Noir", finish: "Polished", colour: "Deep Black", application: ["Countertops", "Flooring"], slab: 19, featured: true },
  { name: "Ocean Black", finish: "Polished", colour: "Dark Grey", application: ["Countertops", "Flooring"], slab: 20 },
  { name: "Kashmir Cloud", finish: "Polished", colour: "White with Grey Veins", application: ["Countertops", "Vanities"], slab: 21 },
  { name: "Slate Mist", finish: "Polished", colour: "Grey", application: ["Countertops", "Flooring"], slab: 22 },
  { name: "Jet Black", finish: "Polished", colour: "Black", application: ["Countertops", "Flooring"], slab: 23 },
  { name: "Platinum Grey", finish: "Polished", colour: "Light Grey", application: ["Countertops", "Flooring"], slab: 24 },
  { name: "Tuscan Bronze", finish: "Polished", colour: "Warm Brown", application: ["Countertops", "Flooring"], slab: 25 },
  { name: "Desert Amber", finish: "Honed", colour: "Amber Brown", application: ["Flooring", "Wall Panels"], slab: 26 },
  { name: "Cloud White", finish: "Polished", colour: "Off White", application: ["Countertops", "Flooring"], slab: 27 },
  { name: "Alpine Frost", finish: "Polished", colour: "Warm White", application: ["Countertops", "Flooring"], slab: 28, featured: true },
  { name: "Dove Grey", finish: "Polished", colour: "Grey", application: ["Countertops", "Flooring"], slab: 29 },
  { name: "Fossil Grey", finish: "Polished", colour: "Grey", application: ["Countertops", "Flooring"], slab: 30 },
  { name: "Monolith Slab", finish: "Honed", colour: "Charcoal", application: ["Large Format Slabs", "Feature Walls"], slab: 31 },
  { name: "Coral Vein", finish: "Polished", colour: "Blush with Black Veins", application: ["Countertops", "Flooring"], slab: 32 },
  { name: "Linear Grey", finish: "Polished", colour: "Striped Grey", application: ["Countertops", "Flooring"], slab: 33 },
  { name: "Coffee Estate", finish: "Leathered", colour: "Deep Brown", application: ["Countertops", "Cladding"], slab: 34 },
  { name: "Peach Blossom", finish: "Polished", colour: "Peach Beige", application: ["Countertops", "Flooring"], slab: 35 },
  { name: "Iron Stripe", finish: "Polished", colour: "Dark Grey", application: ["Countertops", "Flooring"], slab: 36 },
  { name: "Dalmatian White", finish: "Polished", colour: "White with Black Spots", application: ["Countertops", "Flooring"], slab: 37 },
  { name: "Imperial Gold", finish: "Polished", colour: "Gold Beige", application: ["Countertops", "Reception Desks"], slab: 38, featured: true },
  { name: "Zebra Stone", finish: "Polished", colour: "White and Black", application: ["Countertops", "Flooring"], slab: 39 },
  { name: "Bedrock Slab", finish: "Flamed", colour: "Grey Beige", application: ["Outdoor Slabs", "Landscaping"], slab: 40 },
];

export const graniteProducts: Product[] = seeds.map((seed, i) => ({
  id: `granite-${i + 1}`,
  name: seed.name,
  category: "granite",
  subcategory: "Granite",
  image: graniteSlab(seed.slab),
  description:
    "A natural granite slab selected for its distinctive character, mineral depth and long-term architectural durability.",
  finish: seed.finish,
  colour: seed.colour,
  size: "320cm x 200cm (customisable)",
  application: seed.application,
  featured: seed.featured,
}));
