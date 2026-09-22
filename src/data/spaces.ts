import { img } from "./images";
import type { SpaceCategory } from "@/types";

export const spaces: SpaceCategory[] = [
  {
    id: "space-living",
    name: "Living Spaces",
    image: img.spaceHall,
    description: "Flooring and feature walls that anchor open-plan living areas in warmth and texture.",
  },
  {
    id: "space-kitchens",
    name: "Kitchens",
    image: img.spaceKitchen,
    description: "Countertops and islands built for daily use without compromising on design.",
  },
  {
    id: "space-bathrooms",
    name: "Bathrooms",
    image: img.spaceBathroom,
    description: "Water-resistant marble, tile and quartz surfaces for spa-like bathrooms.",
  },
];
