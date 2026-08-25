import { img } from "./images";

export interface SurfaceTechnology {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const surfaceTechnologies: SurfaceTechnology[] = [
  {
    id: "tech-1",
    name: "SoftTouch Matte",
    description:
      "An ultra-matte finish engineered to resist fingerprints and glare while delivering a velvety, tactile feel underfoot.",
    image: img.marbleWhiteYule,
  },
  {
    id: "tech-2",
    name: "DepthCarve",
    description:
      "Dimensional relief engineered directly into the surface, adding genuine tactile texture rather than a printed effect.",
    image: img.tileTerracotta,
  },
  {
    id: "tech-3",
    name: "TrueVein",
    description:
      "Vein-synchronised surfacing where texture follows the printed pattern, so the feel matches what the eye sees.",
    image: img.marbleBrownWhite,
  },
];
