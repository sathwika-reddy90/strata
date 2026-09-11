import { img } from "./images";

export interface BrowseItem {
  number: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  image: string;
}

export interface BrowseTab {
  id: string;
  label: string;
  items: BrowseItem[];
}

export const browseTabs: BrowseTab[] = [
  {
    id: "application",
    label: "By Application",
    items: [
      {
        number: "01",
        title: "Flooring",
        description: "Durable, comfortable-underfoot surfaces for living areas, bedrooms and corridors.",
        ctaLabel: "Browse Flooring",
        href: "/products/tiles#floor",
        image: img.livingRoomMinimal,
      },
      {
        number: "02",
        title: "Walls & Cladding",
        description: "Feature walls, kitchen backsplashes and facade cladding in stone and tile.",
        ctaLabel: "Browse Wall Surfaces",
        href: "/products/tiles#wall",
        image: img.livingRoomStoneWall,
      },
      {
        number: "03",
        title: "Outdoor & Wet Areas",
        description: "Anti-skid, weather-ready surfaces for terraces, poolsides and bathrooms.",
        ctaLabel: "Browse Outdoor Tiles",
        href: "/products/tiles#outdoor",
        image: img.outdoorPatioStone,
      },
    ],
  },
  {
    id: "size",
    label: "By Size",
    items: [
      {
        number: "01",
        title: "Standard Format",
        description: "Versatile everyday sizes suited to most residential floors and walls.",
        ctaLabel: "Browse Standard Sizes",
        href: "/products/tiles",
        image: img.tileCreamSpeckled,
      },
      {
        number: "02",
        title: "Large Format",
        description: "Fewer joints, cleaner lines — ideal for open-plan and commercial spaces.",
        ctaLabel: "Browse Large Format",
        href: "/products/tiles#large-format",
        image: img.marbleCheckeredFloor,
      },
      {
        number: "03",
        title: "Full Slabs",
        description: "Book-matched, edge-to-edge slabs for islands, feature walls and reception desks.",
        ctaLabel: "Browse Slabs",
        href: "/products/quartz#slabs",
        image: img.kitchenQuartzWaterfall,
      },
    ],
  },
  {
    id: "look",
    label: "By Look",
    items: [
      {
        number: "01",
        title: "Colour",
        description: "Browse by colour family to quickly narrow down surfaces that suit your palette.",
        ctaLabel: "Browse By Colour",
        href: "/products/tiles",
        image: img.tilePacificBlue,
      },
      {
        number: "02",
        title: "Design & Finish",
        description: "Matte, glossy, textured or satin — find the finish that suits how a space is used.",
        ctaLabel: "Browse By Finish",
        href: "/products/tiles",
        image: img.marbleBrownWhite,
      },
      {
        number: "03",
        title: "Pattern",
        description: "From subtle textures to bold geometric patterns for statement floors and walls.",
        ctaLabel: "Browse By Pattern",
        href: "/products/tiles",
        image: img.tileGarnetRed,
      },
    ],
  },
];
