import { img } from "./images";
import type { Product } from "@/types";

const tileImages = [
  img.tileTerracotta,
  img.tilePacificBlue,
  img.tileCreamSpeckled,
  img.tileGarnetRed,
  img.marbleCheckeredFloor,
  img.outdoorTiledWalkway,
  img.outdoorPatioStone,
];

export const tileStyles = [
  "Minimal",
  "Natural",
  "Marble Look",
  "Stone Look",
  "Wood Look",
  "Industrial",
  "Luxury",
  "Contemporary",
] as const;

interface TileSeed {
  name: string;
  subcategory: string;
  style: string;
  finish: string;
  colour: string;
  size: string;
  application: string[];
  featured?: boolean;
}

const seeds: TileSeed[] = [
  { name: "Linen Field", subcategory: "Floor Tiles", style: "Minimal", finish: "Matte", colour: "Warm Beige", size: "600x600mm", application: ["Living Rooms", "Bedrooms"], featured: true },
  { name: "Terracotta Bloom", subcategory: "Floor Tiles", style: "Natural", finish: "Textured", colour: "Terracotta", size: "450x450mm", application: ["Courtyards", "Kitchens"] },
  { name: "Ashgrey Plank", subcategory: "Floor Tiles", style: "Wood Look", finish: "Matte", colour: "Grey Oak", size: "1200x200mm", application: ["Living Rooms", "Bedrooms"] },
  { name: "Cloudmarble Field", subcategory: "Wall Tiles", style: "Marble Look", finish: "Glossy", colour: "White with Grey Veins", size: "300x600mm", application: ["Bathrooms", "Kitchens"], featured: true },
  { name: "Pacific Wave", subcategory: "Wall Tiles", style: "Contemporary", finish: "Glossy", colour: "Ocean Blue", size: "250x400mm", application: ["Bathrooms", "Feature Walls"] },
  { name: "Garnet Weave", subcategory: "Wall Tiles", style: "Luxury", finish: "Satin", colour: "Deep Red", size: "300x600mm", application: ["Accent Walls", "Bars"] },
  { name: "Porcelain Cloud", subcategory: "Porcelain Tiles", style: "Marble Look", finish: "Polished", colour: "Statuario White", size: "800x800mm", application: ["Living Rooms", "Lobbies"], featured: true },
  { name: "Porcelain Slate", subcategory: "Porcelain Tiles", style: "Stone Look", finish: "Matte", colour: "Slate Grey", size: "600x1200mm", application: ["Flooring", "Facades"] },
  { name: "Grand Format Onyx", subcategory: "Large Format Tiles", style: "Luxury", finish: "Polished", colour: "Black Gold", size: "1200x2400mm", application: ["Feature Walls", "Reception Areas"], featured: true },
  { name: "Grand Format Calacatta", subcategory: "Large Format Tiles", style: "Marble Look", finish: "Polished", colour: "Calacatta White", size: "1600x3200mm", application: ["Flooring", "Kitchen Islands"] },
  { name: "Industrial Concrete", subcategory: "Large Format Tiles", style: "Industrial", finish: "Matte", colour: "Cement Grey", size: "1200x1200mm", application: ["Commercial Flooring", "Studios"] },
  { name: "Harbour Stone", subcategory: "Outdoor Tiles", style: "Natural", finish: "Anti-Skid", colour: "Sandstone Beige", size: "600x600mm", application: ["Poolside", "Driveways"], featured: true },
  { name: "Basalt Path", subcategory: "Outdoor Tiles", style: "Stone Look", finish: "Anti-Skid", colour: "Charcoal", size: "450x450mm", application: ["Gardens", "Walkways"] },
  { name: "Coastal Grip", subcategory: "Outdoor Tiles", style: "Contemporary", finish: "Textured", colour: "Warm Grey", size: "600x600mm", application: ["Balconies", "Terraces"] },
  { name: "Studio Noir", subcategory: "Designer Tiles", style: "Industrial", finish: "Matte", colour: "Graphite", size: "300x300mm", application: ["Feature Walls", "Cafés"] },
  { name: "Heritage Weave", subcategory: "Designer Tiles", style: "Luxury", finish: "Satin", colour: "Emerald & Gold", size: "200x200mm", application: ["Powder Rooms", "Boutiques"] },
];

export const tileProducts: Product[] = seeds.map((seed, i) => ({
  id: `tile-${i + 1}`,
  name: seed.name,
  category: "tiles",
  subcategory: seed.subcategory,
  image: tileImages[i % tileImages.length],
  description: `A ${seed.style.toLowerCase()} tile designed for refined floors and walls, balancing everyday performance with editorial-grade visual appeal.`,
  finish: seed.finish,
  colour: seed.colour,
  size: seed.size,
  application: seed.application,
  style: seed.style,
  featured: seed.featured,
}));
