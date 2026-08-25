import { motion } from "framer-motion";
import type { Project } from "@/types";
import Reveal from "./Reveal";

interface PortfolioCardProps {
  project: Project;
  index?: number;
  reversed?: boolean;
}

export default function PortfolioCard({ project, index = 0, reversed = false }: PortfolioCardProps) {
  return (
    <Reveal delay={0.05}>
      <div
        className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
          <motion.img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <div>
          <p className="eyebrow mb-3">
            0{index + 1} &mdash; {project.category}
          </p>
          <h3 className="text-3xl text-ink sm:text-4xl">{project.name}</h3>
          <p className="mt-2 text-sm text-taupe">{project.location}</p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-charcoal-light">
            {project.description}
          </p>
          <dl className="mt-7 space-y-3 border-t border-stone-200 pt-6">
            <div className="flex gap-4 text-sm">
              <dt className="w-32 shrink-0 font-semibold text-ink">Materials</dt>
              <dd className="text-charcoal-light">{project.materials.join(", ")}</dd>
            </div>
            <div className="flex gap-4 text-sm">
              <dt className="w-32 shrink-0 font-semibold text-ink">Application</dt>
              <dd className="text-charcoal-light">{project.application}</dd>
            </div>
          </dl>
        </div>
      </div>
    </Reveal>
  );
}
