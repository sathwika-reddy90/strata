import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { img } from "@/data/images";

const SLIDES = [img.livingRoomBright, img.livingRoomWarm, img.livingRoomModern];
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
              alt="Architectural interior finished with premium natural stone surfaces"
              className="absolute inset-0 h-full w-full object-cover object-[50%_38%] transition-opacity duration-[1400ms] ease-in-out"
              style={{ opacity: i === active ? 1 : 0 }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/5" />
        <div className="absolute inset-0 bg-ink/10" />

        {/* Single anchored content block — eyebrow, heading, description, CTAs and
            slide indicators all move together and stay fixed while slides crossfade. */}
        <div className="hero-content absolute inset-x-0 bottom-0 z-10 px-6 pb-10 sm:px-10 sm:pb-12 lg:px-12 lg:pb-14">
          <div className="max-w-[420px] sm:max-w-[460px] lg:max-w-[500px]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
              className="eyebrow mb-4 text-gold-light"
            >
              Premium Surfaces
            </motion.p>

            <h1 className="overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.75, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="block text-balance font-barlow text-[clamp(2rem,3.2vw,3rem)] font-bold leading-[1.1] tracking-tight text-warm-white"
              >
                Surfaces That Define Spaces
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7, ease: "easeOut" }}
              className="mt-3 text-balance text-[14px] leading-relaxed text-stone-200/90 sm:text-[15px]"
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
            <Button href="/products" variant="inverse">
              Explore Products
            </Button>
            <Button href="/collections" variant="outlineLight">
              View Our Collections
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
