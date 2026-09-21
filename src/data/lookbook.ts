import { img } from "./images";
import type { LookbookSlide } from "@/types";

export const lookbookSlides: LookbookSlide[] = [
  {
    id: "look-1",
    title: "Minimalist",
    description: "Clean lines, matte finishes and quiet, tonal palettes that let architecture lead.",
    image: img.lookMinimalist,
  },
  {
    id: "look-2",
    title: "Natural & Organic",
    description: "Earthy granite tones and textured tiles that bring the outdoors into everyday spaces.",
    image: img.lookNaturalOrganic,
  },
  {
    id: "look-3",
    title: "Classic & Timeless",
    description: "Veined marble-look surfaces and warm stone for interiors that never date.",
    image: img.lookClassicTimeless,
  },
  {
    id: "look-4",
    title: "Industrial & Urban",
    description: "Concrete-grey quartz and large-format tile for loft-inspired, textural interiors.",
    image: img.lookIndustrialUrban,
  },
  {
    id: "look-5",
    title: "Luxury",
    description: "Book-matched slabs, gold-veined quartz and dramatic waterfall islands.",
    image: img.kitchenQuartzWaterfall,
  },
  {
    id: "look-6",
    title: "Contemporary",
    description: "Balanced palettes and large-format tiles for confident, present-day interiors.",
    image: img.tilePacificBlue,
  },
];
