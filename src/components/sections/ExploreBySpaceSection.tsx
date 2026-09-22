import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../Reveal";
import { spaces } from "@/data/spaces";

const slides = spaces;

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? "100%" : "-100%" }),
  center: { x: 0 },
  exit: (direction: number) => ({ x: direction > 0 ? "-100%" : "100%" }),
};

export default function ExploreBySpaceSection() {
  const [[active, direction], setSlide] = useState<[number, number]>([0, 0]);
  const current = slides[active];

  const prev = () =>
    setSlide(([i]) => [(i - 1 + slides.length) % slides.length, -1]);
  const next = () => setSlide(([i]) => [(i + 1) % slides.length, 1]);

  return (
    <section className="bg-stone-100 py-24 sm:py-28">
      <div className="container-edge">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-4">By Application</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance font-barlow text-[31px] font-bold leading-[1.05] tracking-normal text-ink sm:text-[39px]">
              Designed Around Your Space
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-xl text-balance font-albert text-[16px] font-medium leading-[20px] text-charcoal-light sm:text-[18px]">
              Every room asks something different of its surfaces. Explore material stories curated by
              space.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.22} className="relative mt-12 sm:mt-14">
          <div className="relative h-[420px] overflow-hidden rounded-[28px] sm:h-[520px] sm:rounded-[36px] lg:h-[600px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={current.id}
                src={current.image}
                alt={current.name}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-12">
              <h3 className="font-sans text-2xl font-bold leading-tight text-warm-white sm:text-3xl">
                {current.name}
              </h3>
              <p className="mt-3 max-w-md text-balance text-sm leading-relaxed text-stone-200 sm:text-base">
                {current.description}
              </p>
            </div>
          </div>

          <button
            onClick={prev}
            aria-label="Previous space"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-warm-white text-ink shadow-[0_8px_24px_-6px_rgba(28,27,25,0.35)] transition-all duration-300 hover:scale-105 hover:bg-clay hover:text-warm-white sm:left-5 sm:h-12 sm:w-12"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6 9 12l6 6" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next space"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-warm-white text-ink shadow-[0_8px_24px_-6px_rgba(28,27,25,0.35)] transition-all duration-300 hover:scale-105 hover:bg-clay hover:text-warm-white sm:right-5 sm:h-12 sm:w-12"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
