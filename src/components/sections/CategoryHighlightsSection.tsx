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
    label: "Tiles & Porcelain",
    description: "Elegant surfaces for floors, walls and contemporary interiors.",
    image: img.tileTerracotta,
    href: "/products/tiles",
  },
  {
    id: "quartz",
    label: "Quartz",
    description: "Engineered surfaces combining sophisticated design with everyday performance.",
    image: img.kitchenCountertopD,
    href: "/products/quartz",
  },
];

function CategoryTile({ tile }: { tile: Tile }) {
  return (
    <Link
      to={tile.href}
      aria-label={tile.label}
      className="group relative flex aspect-square w-full flex-col justify-end overflow-hidden rounded-3xl bg-ink"
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
          <h3 className="font-sans text-[1.75rem] font-bold leading-[1.1] text-warm-white sm:text-[2rem]">
            {tile.label}
          </h3>
          <p className="mt-2.5 max-w-[90%] text-[15px] leading-[1.45] text-stone-200/90 sm:text-[16px]">
            {tile.description}
          </p>
        </div>

        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-warm-white/30 bg-warm-white/10 text-warm-white backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-warm-white group-hover:text-ink">
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
            <h2 className="font-barlow text-[39px] font-bold leading-[1.1] tracking-normal text-[#191B1C]">
              Our Offerings
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-[10px] max-w-xl font-albert text-[18px] font-normal leading-[1.45] tracking-normal text-[#6C6C6C]">
              Three material families, one uncompromising standard of quality and craftsmanship.
            </p>
          </Reveal>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
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
