import { img } from "./images";
import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "How to Choose the Right Granite for Your Home",
    category: "Granite",
    description:
      "A practical guide to reading veining, porosity and finish so your granite slab suits both your design and your lifestyle.",
    image: img.graniteSurfacePolished,
    date: "2026-06-12",
    readTime: "6 min read",
  },
  {
    id: "blog-2",
    title: "Granite vs Quartz: Which Surface Is Right for You?",
    category: "Comparison",
    description:
      "We break down durability, maintenance, appearance and cost to help you decide between natural and engineered stone.",
    image: img.kitchenQuartzWaterfall,
    date: "2026-05-28",
    readTime: "7 min read",
  },
  {
    id: "blog-3",
    title: "How to Choose Tiles for Every Room in Your Home",
    category: "Tiles",
    description:
      "From wet areas to living spaces, here's how size, finish and slip-resistance should guide your tile selection.",
    image: img.tileCreamSpeckled,
    date: "2026-05-14",
    readTime: "5 min read",
  },
  {
    id: "blog-4",
    title: "The Best Tiles for Modern Kitchens",
    category: "Tiles",
    description:
      "Large-format porcelain, textured backsplashes and matte floors — the trends defining contemporary kitchen design.",
    image: img.kitchenGraniteVaulted,
    date: "2026-04-30",
    readTime: "5 min read",
  },
  {
    id: "blog-5",
    title: "Best Surfaces for Bathrooms: Marble, Porcelain or Quartz?",
    category: "Bathrooms",
    description:
      "Bathrooms demand water resistance without compromising on elegance. Here's how each surface performs.",
    image: img.bathroomMarbleDoorway,
    date: "2026-04-09",
    readTime: "6 min read",
  },
  {
    id: "blog-6",
    title: "How to Maintain and Care for Natural Stone",
    category: "Maintenance",
    description:
      "Sealing schedules, everyday cleaning and the mistakes that dull a beautiful granite or marble surface over time.",
    image: img.marbleWhiteYule,
    date: "2026-03-22",
    readTime: "4 min read",
  },
];
