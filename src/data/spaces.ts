import { img } from "./images";
import type { SpaceCategory } from "@/types";

export const spaces: SpaceCategory[] = [
  {
    id: "space-living",
    name: "Living Spaces",
    image: img.livingRoomBright,
    description: "Flooring and feature walls that anchor open-plan living areas in warmth and texture.",
  },
  {
    id: "space-kitchens",
    name: "Kitchens",
    image: img.kitchenGraniteIsland,
    description: "Countertops and islands built for daily use without compromising on design.",
  },
  {
    id: "space-bathrooms",
    name: "Bathrooms",
    image: img.bathroomMarbleVanity,
    description: "Water-resistant marble, tile and quartz surfaces for spa-like bathrooms.",
  },
  {
    id: "space-commercial",
    name: "Commercial Spaces",
    image: img.hotelLobbyMarble,
    description: "Durable, statement surfaces for lobbies, offices and hospitality interiors.",
  },
  {
    id: "space-outdoor",
    name: "Outdoor Spaces",
    image: img.outdoorPoolside,
    description: "Anti-skid, weather-ready stone and tile for terraces, decks and poolside areas.",
  },
  {
    id: "space-facades",
    name: "Facades & Exteriors",
    image: img.facadeTravertine,
    description: "Cladding-grade granite and stone finishes for building envelopes that endure.",
  },
];
