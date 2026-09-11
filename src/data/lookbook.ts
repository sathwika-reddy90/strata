import { img } from "./images";
import type { LookbookSlide } from "@/types";

export const lookbookSlides: LookbookSlide[] = [
  {
    id: "look-1",
    title: "Minimalist",
    description: "Clean lines, matte finishes and quiet, tonal palettes that let architecture lead.",
    image: img.livingRoomMinimal,
  },
  {
    id: "look-2",
    title: "Natural & Organic",
    description: "Earthy granite tones and textured tiles that bring the outdoors into everyday spaces.",
    image: img.livingRoomBright,
  },
  {
    id: "look-3",
    title: "Classic & Timeless",
    description: "Veined marble-look surfaces and warm stone for interiors that never date.",
    image: img.bathroomMarbleDoorway,
  },
  {
    id: "look-4",
    title: "Industrial & Urban",
    description: "Concrete-grey quartz and large-format tile for loft-inspired, textural interiors.",
    image: img.livingRoomGrey,
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
    image: img.livingRoomNeutral,
  },
];
