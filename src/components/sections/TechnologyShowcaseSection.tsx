import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { surfaceTechnologies } from "@/data/technologies";
import { motion } from "framer-motion";

export default function TechnologyShowcaseSection() {
  return (
    <section className="bg-warm-white py-24 sm:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Innovation"
          title="Engineered For Today"
          description="Surface technology shapes our range as much as material does — built for how spaces are actually lived in."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {surfaceTechnologies.map((tech, i) => (
            <Reveal key={tech.id} delay={i * 0.1}>
              <div className="group relative aspect-[4/5] overflow-hidden bg-charcoal">
                <motion.img
                  src={tech.image}
                  alt={tech.name}
                  className="absolute inset-0 h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <h3 className="text-2xl text-warm-white">{tech.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-200">{tech.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
