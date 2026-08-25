import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Testimonial } from "@/types";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, [testimonials.length]);

  const t = testimonials[index];

  return (
    <div className="relative">
      <svg
        viewBox="0 0 48 48"
        className="mx-auto h-12 w-12 fill-gold/40"
        aria-hidden
      >
        <path d="M14 8C7.4 11.2 4 16.4 4 23.4c0 5.6 3.4 9.2 8.2 9.2 4.2 0 7.4-3.2 7.4-7.2 0-3.8-2.8-6.6-6.4-6.6-.6 0-1.2.1-1.6.2C12.4 15 15.6 11 21 8.6L14 8Zm22 0c-6.6 3.2-10 8.4-10 15.4 0 5.6 3.4 9.2 8.2 9.2 4.2 0 7.4-3.2 7.4-7.2 0-3.8-2.8-6.6-6.4-6.6-.6 0-1.2.1-1.6.2C34.4 15 37.6 11 43 8.6L36 8Z" />
      </svg>

      <div className="mx-auto mt-8 min-h-[220px] max-w-3xl text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-balance font-display text-xl leading-relaxed text-ink sm:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-7">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-ink">{t.customer}</p>
              <p className="mt-1 text-sm text-taupe">
                {t.project} &middot; {t.location}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-2.5">
        {testimonials.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-400 ${
              i === index ? "w-8 bg-ink" : "w-1.5 bg-stone-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
