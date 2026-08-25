import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

export default function VideoStoriesSection() {
  const [active, setActive] = useState<Project | null>(null);
  const featured = projects.slice(0, 4);

  return (
    <section className="bg-cream py-24 sm:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="From Our Clients"
          title="Real Spaces, Real Stories"
          description="A closer look at the people and projects behind our granite, tile and quartz installations."
        />

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <button
                onClick={() => setActive(project)}
                className="group relative block aspect-[3/4] w-full overflow-hidden bg-charcoal"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-warm-white/90 text-ink transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-current">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-sm font-semibold text-warm-white">{project.name}</p>
                  <p className="text-xs text-stone-300">{project.location}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-xl overflow-hidden bg-warm-white"
            >
              <img src={active.image} alt={active.name} className="h-72 w-full object-cover sm:h-80" />
              <div className="p-8">
                <p className="eyebrow mb-2">{active.category}</p>
                <h3 className="font-sans text-2xl font-bold leading-[1.1] text-ink">{active.name}</h3>
                <p className="mt-1 text-sm text-taupe">{active.location}</p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-light">{active.description}</p>
                <button
                  onClick={() => setActive(null)}
                  className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-clay underline underline-offset-4"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
