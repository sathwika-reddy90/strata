import { img } from "./images";
import type { Product } from "@/types";

const porcelainImages = [
  img.marbleBrownWhite,
  img.marbleBlackWhite,
  img.marbleWhiteYule,
  img.marbleCheckeredFloor,
  img.bathroomHotelMarble,
  img.bathroomMarbleVanity,
  img.bathroomMarbleDoorway,
];

export const porcelainSubcategories = [
  "Porcelain Slabs",
  "Porcelain Flooring",
  "Porcelain Wall Panels",
  "Large Format Porcelain",
  "Textured Porcelain",
  "Book-Matched Porcelain",
] as const;

interface PorcelainSeed {
  name: string;
  subcategory: string;
  finish: string;
  colour: string;
  size: string;
  application: string[];
  featured?: boolean;
}

const seeds: PorcelainSeed[] = [
  { name: "Statuario Vein", subcategory: "Porcelain Slabs", finish: "Polished", colour: "White with Grey Veins", size: "1600x3200mm", application: ["Kitchen Islands", "Feature Walls"], featured: true },
  { name: "Calacatta Gold Slab", subcategory: "Porcelain Slabs", finish: "Polished", colour: "White with Gold Veins", size: "1600x3200mm", application: ["Countertops", "Vanities"] },
  { name: "Nero Marquina Slab", subcategory: "Porcelain Slabs", finish: "Honed", colour: "Black with White Veins", size: "1600x3200mm", application: ["Reception Desks", "Bars"] },
  { name: "Serene Oak Field", subcategory: "Porcelain Flooring", finish: "Matte", colour: "Warm Oak", size: "200x1200mm", application: ["Living Rooms", "Corridors"] },
  { name: "Pearl Grey Field", subcategory: "Porcelain Flooring", finish: "Matte", colour: "Pearl Grey", size: "600x600mm", application: ["Flooring", "Lobbies"], featured: true },
  { name: "Ivory Travertine Look", subcategory: "Porcelain Wall Panels", finish: "Textured", colour: "Ivory Beige", size: "600x1200mm", application: ["Accent Walls", "Facades"] },
  { name: "Onyx Backlit Panel", subcategory: "Porcelain Wall Panels", finish: "Polished", colour: "Amber Onyx", size: "800x2600mm", application: ["Feature Walls", "Bars"], featured: true },
  { name: "Skyline Slab XL", subcategory: "Large Format Porcelain", finish: "Polished", colour: "Grey Marble", size: "1600x3200mm", application: ["Flooring", "Facades"] },
  { name: "Horizon Slab XL", subcategory: "Large Format Porcelain", finish: "Matte", colour: "Beige Stone", size: "1600x3200mm", application: ["Kitchen Counters", "Cladding"] },
  { name: "Raw Concrete Grip", subcategory: "Textured Porcelain", finish: "Anti-Skid Textured", colour: "Concrete Grey", size: "600x600mm", application: ["Outdoor Flooring", "Terraces"] },
  { name: "Riverstone Grip", subcategory: "Textured Porcelain", finish: "Anti-Skid Textured", colour: "River Beige", size: "600x600mm", application: ["Poolside", "Bathrooms"] },
  { name: "Bookmatched Calacatta", subcategory: "Book-Matched Porcelain", finish: "Polished", colour: "White Gold Veins", size: "1600x3200mm (paired)", application: ["Feature Walls", "Lobbies"], featured: true },
  { name: "Bookmatched Emperador", subcategory: "Book-Matched Porcelain", finish: "Polished", colour: "Brown Marble", size: "1600x3200mm (paired)", application: ["Reception Areas", "Bathrooms"] },
];

export const porcelainProducts: Product[] = seeds.map((seed, i) => ({
  id: `porcelain-${i + 1}`,
  name: seed.name,
  category: "porcelain",
  subcategory: seed.subcategory,
  image: porcelainImages[i % porcelainImages.length],
  description:
    "A fully vitrified porcelain surface engineered for precision, low porosity and a refined marble-inspired finish.",
  finish: seed.finish,
  colour: seed.colour,
  size: seed.size,
  application: seed.application,
  featured: seed.featured,
}));
