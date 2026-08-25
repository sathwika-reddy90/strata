import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { LookbookSlide } from "@/types";

interface LookbookProps {
  slides: LookbookSlide[];
}

export default function Lookbook({ slides }: LookbookProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const slide = slides[index];

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden bg-ink">
      <div className="relative h-[520px] sm:h-[620px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={slide.id}
            src={slide.image}
            alt={slide.title}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 40 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <p className="eyebrow mb-3 text-gold-light">Look 0{index + 1}</p>
              <h3 className="text-3xl text-warm-white sm:text-4xl">{slide.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-200">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center gap-6">
            <button
              onClick={() => go(-1)}
              className="border border-warm-white/40 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-warm-white transition-colors hover:bg-warm-white hover:text-ink"
            >
              Previous
            </button>
            <button
              onClick={() => go(1)}
              className="border border-warm-white/40 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-warm-white transition-colors hover:bg-warm-white hover:text-ink"
            >
              Next
            </button>
            <span className="ml-auto text-sm text-stone-300">
              {index + 1} / {slides.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
