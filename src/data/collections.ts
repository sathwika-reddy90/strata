import { img } from "./images";
import type { Collection } from "@/types";

export const collections: Collection[] = [
  {
    id: "col-1",
    name: "The Monolith Edit",
    description: "Bold, single-slab statement surfaces in deep charcoal and jet-black granite for architectural drama.",
    image: img.graniteBlackImpala,
    category: "granite",
    size: "large",
  },
  {
    id: "col-2",
    name: "Veiled Marble",
    description: "Marble-look porcelain and quartz surfaces with soft, painterly veining for timeless interiors.",
    image: img.marbleWhiteYule,
    category: "porcelain",
    size: "medium",
  },
  {
    id: "col-3",
    name: "Coastal Terracotta",
    description: "Warm, textured floor and outdoor tiles inspired by sun-baked courtyards and coastal architecture.",
    image: img.tileTerracotta,
    category: "tiles",
    size: "medium",
  },
  {
    id: "col-4",
    name: "Studio Quartz",
    description: "Consistent, low-maintenance quartz surfaces engineered for busy kitchens and commercial pantries.",
    image: img.kitchenQuartzWaterfall,
    category: "quartz",
    size: "small",
  },
  {
    id: "col-5",
    name: "Facade Reserve",
    description: "Weather-resistant granite and travertine-finish cladding for exteriors that age with character.",
    image: img.facadeTravertine,
    category: "mixed",
    size: "large",
  },
  {
    id: "col-6",
    name: "Wet Room Edit",
    description: "Anti-skid, water-resistant surfaces curated specifically for bathrooms and spa interiors.",
    image: img.bathroomHotelMarble,
    category: "mixed",
    size: "small",
  },
];
