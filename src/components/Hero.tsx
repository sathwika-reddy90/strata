import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { img } from "@/data/images";

const SLIDES = [img.heroBanner1, img.heroBanner2, img.heroBanner3];
const SLIDE_DURATION = 6000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), SLIDE_DURATION);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="relative bg-white px-3 pt-3 sm:px-5 sm:pt-5 lg:px-8 lg:pt-6">
      <div className="relative h-[calc(100svh-1.5rem)] min-h-[560px] overflow-hidden rounded-[28px] sm:rounded-[36px] lg:h-[calc(100svh-3rem)]">
        {/* Background slideshow: one absolutely-stacked image crossfades into the next.
            Text below is positioned independently and never reacts to slide changes. */}
        <div className="absolute inset-0">
          {SLIDES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="Strata Surfaces premium quartz, granite and natural stone surfaces"
              className="absolute inset-0 h-full w-full object-cover object-[50%_38%] transition-opacity duration-[1400ms] ease-in-out"
              style={{ opacity: i === active ? 1 : 0 }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/5" />
        <div className="absolute inset-0 bg-ink/10" />

        {/* Floating trust badge — small glass card, independent of the slideshow/text block. */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-6 top-28 z-10 hidden items-center gap-3 rounded-2xl border border-warm-white/20 bg-ink/30 px-5 py-4 backdrop-blur-md sm:right-10 sm:top-32 sm:flex"
        >
          <span className="h-9 w-px bg-clay/70" aria-hidden />
          <div>
            <p className="font-barlow text-2xl font-bold leading-none text-warm-white">
              30<span className="text-clay-light">+</span>
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-stone-300">
              Years of Craft
            </p>
          </div>
        </motion.div>

        {/* Single anchored content block — eyebrow, heading, description, CTAs and
            slide indicators all move together and stay fixed while slides crossfade. */}
        <div className="hero-content absolute inset-x-0 bottom-0 z-10 px-6 pb-10 sm:px-10 sm:pb-12 lg:px-12 lg:pb-14">
          <div className="max-w-[480px] sm:max-w-[560px] lg:max-w-[640px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-clay" aria-hidden />
              <p className="eyebrow text-gold-light">Premium Surfaces</p>
            </motion.div>

            <h1 className="overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.75, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block text-balance font-barlow text-[clamp(2.5rem,5.2vw,4.5rem)] font-bold leading-[1.04] tracking-tight text-warm-white"
              >
                Surfaces That <span className="text-clay-light">Define</span> Spaces
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7, ease: "easeOut" }}
              className="mt-4 max-w-md text-balance text-[15px] leading-relaxed text-stone-200/90 sm:text-[16px]"
            >
              Granite, tiles and quartz crafted to bring lasting beauty, character and performance to
              every space.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7, ease: "easeOut" }}
            className="mt-6 flex flex-wrap gap-4"
          >
            <Button href="/products" variant="primary">
              Explore Products
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="mt-6 flex items-center gap-2.5"
          >
            {SLIDES.map((_, i) => (
              <button
                key={i}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-warm-white" : "w-1.5 bg-warm-white/40 hover:bg-warm-white/70"
                }`}
              />
            ))}
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
          className="absolute bottom-9 right-8 z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-warm-white/40 text-warm-white/85 backdrop-blur-sm transition-colors duration-300 hover:border-warm-white hover:text-warm-white sm:right-12 lg:flex"
        >
          {paused ? (
            <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-current">
              <path d="M7 5v14l12-7z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <rect x="6" y="5" width="4" height="14" />
              <rect x="14" y="5" width="4" height="14" />
            </svg>
          )}
        </motion.button>
      </div>
    </section>
  );
}
