import { img } from "./images";
import type { SpaceCategory } from "@/types";

export const spaces: SpaceCategory[] = [
  {
    id: "space-living",
    name: "Living Spaces",
    image: img.naturalStoneSandstoneA,
    description: "Flooring and feature walls that anchor open-plan living areas in warmth and texture.",
  },
  {
    id: "space-kitchens",
    name: "Kitchens",
    image: img.graniteWhiteVeined,
    description: "Countertops and islands built for daily use without compromising on design.",
  },
  {
    id: "space-bathrooms",
    name: "Bathrooms",
    image: img.quartzCalacattaVein,
    description: "Water-resistant marble, tile and quartz surfaces for spa-like bathrooms.",
  },
  {
    id: "space-commercial",
    name: "Commercial Spaces",
    image: img.graniteEarthMulti,
    description: "Durable, statement surfaces for lobbies, offices and hospitality interiors.",
  },
  {
    id: "space-outdoor",
    name: "Outdoor Spaces",
    image: img.facadeTravertine,
    description: "Anti-skid, weather-ready stone and tile for terraces, decks and poolside areas.",
  },
  {
    id: "space-facades",
    name: "Facades & Exteriors",
    image: img.naturalStoneTandurStonesA,
    description: "Cladding-grade granite and stone finishes for building envelopes that endure.",
  },
];
