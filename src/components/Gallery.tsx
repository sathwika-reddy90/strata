import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {items.map((item, i) => (
          <Reveal key={item.id} delay={(i % 6) * 0.05} className="break-inside-avoid">
            <button
              onClick={() => setActive(item)}
              className="group relative block w-full overflow-hidden bg-charcoal text-left"
              style={{ aspectRatio: i % 3 === 0 ? "3 / 4" : i % 3 === 1 ? "4 / 5" : "1 / 1" }}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/0 to-transparent p-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-light">
                  {item.category}
                </p>
                <p className="mt-1 text-base text-warm-white">{item.title}</p>
                <span className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-warm-white/80">
                  View Project
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={active.image} alt={active.title} className="max-h-[75vh] w-full object-contain" />
              <div className="mt-4 flex items-center justify-between text-warm-white">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light">
                    {active.category}
                  </p>
                  <p className="mt-1 text-lg">{active.title}</p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="text-2xl leading-none text-warm-white/80 hover:text-warm-white"
                >
                  &times;
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
