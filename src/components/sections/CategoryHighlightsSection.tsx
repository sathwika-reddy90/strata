import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { img } from "@/data/images";

interface Tile {
  id: string;
  label: string;
  description: string;
  image: string;
  href: string;
}

const tiles: Tile[] = [
  {
    id: "granite",
    label: "Granite",
    description: "Natural stone with distinctive character, strength and timeless appeal.",
    image: img.graniteSurfacePolished,
    href: "/products/granite",
  },
  {
    id: "tiles",
    label: "Tiles",
    description: "Elegant surfaces for floors, walls and contemporary interiors.",
    image: img.tileTerracotta,
    href: "/products/tiles",
  },
  {
    id: "quartz",
    label: "Quartz",
    description: "Engineered surfaces combining sophisticated design with everyday performance.",
    image: img.kitchenQuartzWaterfall,
    href: "/products/quartz",
  },
  {
    id: "natural-stone",
    label: "Natural Stone",
    description: "Natural stone with timeless character, natural variation and distinctive beauty.",
    image: img.naturalStoneKotaStoneA,
    href: "/products/natural-stone",
  },
];

function CategoryTile({ tile }: { tile: Tile }) {
  return (
    <Link
      to={tile.href}
      aria-label={tile.label}
      className="group relative flex aspect-square w-full flex-col justify-end overflow-hidden rounded-3xl bg-ink shadow-[0_1px_3px_rgba(28,27,25,0.08)] transition-shadow duration-500 hover:shadow-[0_28px_56px_-20px_rgba(28,27,25,0.4)]"
    >
      <motion.img
        src={tile.image}
        alt={tile.label}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.05 }}
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent transition-opacity duration-500 group-hover:from-ink/95" />

      <div className="relative flex items-end justify-between gap-5 p-7 sm:p-8">
        <div className="min-w-0">
          <h3 className="font-sans text-[1.75rem] font-bold leading-[1.1] text-warm-white transition-colors duration-300 group-hover:text-clay-light sm:text-[2rem]">
            {tile.label}
          </h3>
          <p className="mt-2.5 max-w-[90%] text-[15px] leading-[1.45] text-stone-200/90 sm:text-[16px]">
            {tile.description}
          </p>
        </div>

        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-warm-white/30 bg-warm-white/10 text-warm-white backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-clay group-hover:bg-clay group-hover:text-warm-white">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-none stroke-current"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default function CategoryHighlightsSection() {
  return (
    <section className="bg-warm-white py-24 sm:py-28">
      <div className="container-edge">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="font-barlow text-[31px] font-bold leading-[1.05] tracking-normal text-[#191B1C] sm:text-[39px]">
              Our Offerings
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-[10px] max-w-xl font-albert text-[16px] font-medium leading-[20px] tracking-normal text-[#6C6C6C] sm:text-[18px]">
              Four material families, one uncompromising standard of quality and craftsmanship.
            </p>
          </Reveal>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {tiles.map((tile, i) => (
            <Reveal key={tile.id} delay={i * 0.08} className="h-full">
              <CategoryTile tile={tile} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
