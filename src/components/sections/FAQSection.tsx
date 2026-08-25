import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { faqs } from "@/data/faqs";

const cardTints = ["bg-stone-100", "bg-cream", "bg-stone-200/60", "bg-gold-light/25"];

export default function FAQSection() {
  const [index, setIndex] = useState(0);

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + faqs.length) % faqs.length);

  return (
    <section className="bg-warm-white py-24 sm:py-28">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Have Questions?" title="Frequently Asked Questions" />
        </div>

        <div className="relative mx-auto mt-16 h-[380px] max-w-2xl sm:h-[320px]">
          {faqs.map((f, i) => {
            const offset = (i - index + faqs.length) % faqs.length;
            if (offset > 2) return null;
            return (
              <motion.div
                key={f.id}
                animate={{
                  scale: 1 - offset * 0.06,
                  y: offset * 26,
                  x: offset * 34,
                  rotate: offset * 3,
                  opacity: offset === 0 ? 1 : 0.9 - offset * 0.15,
                  zIndex: 10 - offset,
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute inset-x-0 top-0 rounded-3xl border border-stone-200/70 p-8 shadow-[0_20px_50px_rgba(28,27,25,0.14)] sm:p-10 ${
                  cardTints[i % cardTints.length]
                }`}
                style={{ pointerEvents: offset === 0 ? "auto" : "none", transformOrigin: "top left" }}
              >
                <h3 className="font-sans text-xl font-bold leading-[1.15] text-ink sm:text-2xl">{f.question}</h3>
                <p className="mt-4 text-[15px] leading-[1.5] text-charcoal-light sm:text-[17px]">{f.answer}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous question"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-ink transition-colors hover:border-ink"
          >
            &#8592;
          </button>
          <span className="text-sm text-taupe">
            {index + 1} / {faqs.length}
          </span>
          <button
            onClick={() => go(1)}
            aria-label="Next question"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 text-ink transition-colors hover:border-ink"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
