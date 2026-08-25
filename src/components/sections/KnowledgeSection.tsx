import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { knowledgeTopics, knowledgeCategories } from "@/data/knowledge";

export default function KnowledgeSection() {
  const [category, setCategory] = useState<string>(knowledgeCategories[0]);
  const topics = knowledgeTopics.filter((t) => t.category === category);

  return (
    <section className="bg-stone-100 py-24 sm:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Learn"
          title="Know Your Surface"
          description="Foundational guides to help you choose, specify and care for granite, quartz, porcelain and tile."
          align="center"
        />

        <Reveal delay={0.15} className="mt-10 flex flex-wrap justify-center gap-2">
          {knowledgeCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${
                cat === category
                  ? "bg-ink text-warm-white"
                  : "border border-stone-300 bg-warm-white text-charcoal hover:border-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic, i) => (
            <Reveal key={topic.id} delay={(i % 4) * 0.06}>
              <Link to="/blog" className="group block overflow-hidden bg-warm-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-sans text-lg font-bold leading-[1.15] text-ink transition-colors group-hover:text-clay">{topic.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.5] text-charcoal-light">{topic.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
