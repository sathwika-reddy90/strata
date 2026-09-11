import { useState } from "react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PdfCard from "@/components/PdfCard";
import Reveal from "@/components/Reveal";
import { resources, resourceFilters } from "@/data/resources";
import { img } from "@/data/images";

export default function BlogPage() {
  const [filter, setFilter] = useState<(typeof resourceFilters)[number]["key"]>("all");
  const visible = filter === "all" ? resources : resources.filter((r) => r.category === filter);

  return (
    <>
      <SEO
        title="Resources"
        description="Download product catalogues and brochures for Strata Surfaces' tile and quartz collections."
      />
      <PageHero
        eyebrow="Resources"
        title="Product Catalogues & Resources"
        description="Access our product catalogues, brochures and other available resources."
        image={img.livingRoomWarm}
      />
      <section className="py-24 sm:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="Product Catalogues" title="Download a Catalogue" />

          <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
            {resourceFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${
                  f.key === filter
                    ? "bg-ink text-warm-white"
                    : "border border-stone-300 bg-warm-white text-charcoal hover:border-clay hover:text-clay"
                }`}
              >
                {f.label}
              </button>
            ))}
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((resource, i) => (
              <PdfCard key={resource.id} brochure={resource} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
