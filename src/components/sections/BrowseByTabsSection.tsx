import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { browseTabs } from "@/data/browseTabs";

export default function BrowseByTabsSection() {
  const [activeTab, setActiveTab] = useState(browseTabs[0].id);
  const [activeItem, setActiveItem] = useState(0);

  const tab = browseTabs.find((t) => t.id === activeTab) ?? browseTabs[0];
  const item = tab.items[activeItem] ?? tab.items[0];

  const selectTab = (id: string) => {
    setActiveTab(id);
    setActiveItem(0);
  };

  return (
    <section className="bg-cream py-24 sm:py-28">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Discover"
            title="Browse By What Matters To You"
            description="Find the right surface faster — by where it's going, what size suits the space, or the look you're after."
          />
          <Reveal delay={0.15} className="flex gap-2 rounded-full border border-stone-300 bg-warm-white p-1.5">
            {browseTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => selectTab(t.id)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${
                  t.id === activeTab ? "bg-ink text-warm-white" : "text-charcoal hover:text-clay"
                }`}
              >
                {t.label}
              </button>
            ))}
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative aspect-[4/3] overflow-hidden bg-charcoal lg:aspect-auto">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${tab.id}-${activeItem}`}
                src={item.image}
                alt={item.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </Reveal>

          <div className="divide-y divide-stone-300">
            {tab.items.map((row, i) => {
              const isOpen = i === activeItem;
              return (
                <div key={row.number}>
                  <button
                    onClick={() => setActiveItem(i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className={`font-display text-2xl ${isOpen ? "text-clay" : "text-stone-400"}`}>
                        {row.number}
                      </span>
                      <span className={`text-xl sm:text-2xl ${isOpen ? "text-ink" : "text-charcoal-light"}`}>
                        {row.title}
                      </span>
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                        isOpen ? "border-ink bg-ink text-warm-white" : "border-stone-300 text-ink"
                      }`}
                    >
                      &#8594;
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 pl-[3.25rem]">
                          <p className="max-w-md text-sm leading-relaxed text-charcoal-light">
                            {row.description}
                          </p>
                          <Link
                            to={row.href}
                            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink hover:text-clay"
                          >
                            {row.ctaLabel} &#8594;
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
