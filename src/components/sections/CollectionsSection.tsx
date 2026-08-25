import { useRef } from "react";
import SectionHeading from "../SectionHeading";
import Button from "../Button";
import Reveal from "../Reveal";
import { collections } from "@/data/collections";
import { motion } from "framer-motion";

export default function CollectionsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <section id="product-collections" className="bg-warm-white py-24 sm:py-28">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Curated"
            title="Explore Our Collections"
            description="Material stories grouped by mood, palette and application — a starting point for your next project."
          />
          <Reveal delay={0.2} className="flex items-center gap-3">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous collections"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-ink transition-colors hover:border-ink"
            >
              &#8592;
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next collections"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-ink transition-colors hover:border-ink"
            >
              &#8594;
            </button>
            <Button href="/collections" variant="outline" className="ml-2">
              View All
            </Button>
          </Reveal>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-14 flex gap-5 overflow-x-auto px-6 pb-4 sm:px-8 lg:px-12"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {collections.map((collection, i) => (
          <motion.a
            key={collection.id}
            href="/collections"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-[460px] w-[320px] shrink-0 overflow-hidden bg-charcoal sm:w-[380px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <motion.img
              src={collection.image}
              alt={collection.name}
              className="absolute inset-0 h-full w-full object-cover"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-7">
              <h3 className="font-sans text-2xl font-bold leading-[1.1] text-warm-white">{collection.name}</h3>
              <p className="mt-2 text-[15px] leading-[1.5] text-stone-200">{collection.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
