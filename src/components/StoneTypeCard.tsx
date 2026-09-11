import { motion } from "framer-motion";
import Reveal from "./Reveal";
import type { StoneType } from "@/data/naturalStone";

interface StoneTypeCardProps {
  stone: StoneType;
  active: boolean;
  onSelect: () => void;
  index?: number;
}

export default function StoneTypeCard({ stone, active, onSelect, index = 0 }: StoneTypeCardProps) {
  return (
    <Reveal delay={(index % 6) * 0.06}>
      <motion.button
        type="button"
        onClick={onSelect}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="group block w-full text-left"
      >
        <div
          className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 shadow-[0_1px_3px_rgba(28,27,25,0.08)] ring-2 ring-offset-2 ring-offset-warm-white transition-all duration-300 group-hover:shadow-[0_20px_40px_-12px_rgba(28,27,25,0.35)] ${
            active ? "ring-clay" : "ring-transparent"
          }`}
        >
          <img
            src={stone.image}
            alt={stone.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

          <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-warm-white/30 bg-warm-white/10 text-warm-white backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-clay group-hover:bg-clay">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2">
              <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay-light">
              Natural Stone
            </p>
            <h3 className="mt-1 font-barlow text-xl font-bold leading-tight text-warm-white">
              {stone.name}
            </h3>
            <p className="mt-2 max-h-0 overflow-hidden text-[13px] leading-[1.5] text-stone-200 opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
              {stone.description}
            </p>
          </div>
        </div>
      </motion.button>
    </Reveal>
  );
}
