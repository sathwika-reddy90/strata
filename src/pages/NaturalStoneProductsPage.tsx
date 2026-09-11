import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StoneTypeCard from "@/components/StoneTypeCard";
import Reveal from "@/components/Reveal";
import { naturalStoneTypes, naturalStoneSubcategories, naturalStoneCollection } from "@/data/naturalStone";
import { img } from "@/data/images";

export default function NaturalStoneProductsPage() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? naturalStoneCollection
        : naturalStoneCollection.filter((item) => item.category === active),
    [active],
  );

  const selectType = (name: string) => {
    setActive(name);
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <SEO
        title="Natural Stone"
        description="Browse quarried natural stone slabs and flooring — Sandstone, Kota Stone, Tandur Stones, Kadapa Black and Limestone collections."
      />
      <PageHero
        eyebrow="Quarried Surfaces"
        title="Natural Stone"
        description="Timeless character and natural variation. Discover Sandstone, Kota Stone, Tandur Stones, Kadapa Black and Limestone selected for beauty and durability."
        image={img.naturalStoneKadapaBlack1}
      />

      {/* Natural Stone Types — the 5 categories we offer */}
      <section id="types" className="py-24 sm:py-28">
        <div id="slabs" className="container-edge">
          <SectionHeading
            eyebrow="Natural Stone"
            title="Natural Stone Types"
            description="Explore our range of natural stone materials — each with its own character, finish and application."
          />

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
            {naturalStoneTypes.map((stone, i) => (
              <StoneTypeCard
                key={stone.id}
                stone={stone}
                active={active === stone.name}
                onSelect={() => selectType(stone.name)}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Natural Stone Collection — the actual gallery of stone photography, filterable by type */}
      <section id="collection" className="scroll-mt-24 bg-stone-100 py-24 sm:py-28">
        <div id="countertops" className="container-edge">
          <SectionHeading
            eyebrow="Natural Stone Collection"
            title="Explore Our Natural Stone Range"
            description="A closer look at the texture, tone and finish of each stone in our collection."
            align="center"
          />

          <Reveal delay={0.16} className="mt-10 flex flex-wrap justify-center gap-2">
            {["All", ...naturalStoneSubcategories].map((label) => {
              const isActive = active === label;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActive(label)}
                  className={`rounded-full px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.1em] transition-all duration-300 ${
                    isActive
                      ? "bg-clay text-warm-white shadow-[0_8px_20px_-6px_rgba(163,24,29,0.5)]"
                      : "border border-stone-300 bg-warm-white text-charcoal hover:border-clay hover:text-clay"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </Reveal>

          {filtered.length === 0 ? (
            <div className="mt-14 border border-dashed border-stone-300 py-24 text-center">
              <p className="text-charcoal-light">No images available for this category yet.</p>
            </div>
          ) : (
            <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative break-inside-avoid overflow-hidden rounded-xl bg-ink"
                >
                  <img
                    src={item.image}
                    alt={`${item.category} natural stone surface`}
                    className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-warm-white">
                      {item.category}
                    </span>
                    <span className="h-6 w-6 shrink-0 text-clay-light">
                      <svg viewBox="0 0 24 24" className="h-full w-full fill-none stroke-current" strokeWidth="2">
                        <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="flooring" className="bg-warm-white py-20">
        <div id="applications" className="container-edge">
          <SectionHeading
            eyebrow="Applications"
            title="Countertops, Flooring & Beyond"
            description="From feature walls to full facade cladding, our natural stone is cut and finished for the specific demands of each application."
            align="center"
          />
        </div>
      </section>
    </>
  );
}
