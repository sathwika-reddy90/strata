import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { brands } from "@/data/brands";
import { img } from "@/data/images";

export default function BrandsPage() {
  return (
    <>
      <SEO
        title="Brands We Collaborate With"
        description="Strata Surfaces partners with leading architecture, interior design and development studios on premium surface projects."
      />
      <PageHero
        eyebrow="Partners"
        title="Brands We Collaborate With"
        description="We're proud to work alongside studios and developers who share our standard for quality."
        image={img.facadeTravertine}
      />

      <section className="py-24 sm:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="Collaborators" title="Trusted By Leading Studios" align="center" />
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {brands.map((brand, i) => (
              <Reveal key={brand.id} delay={(i % 4) * 0.06}>
                <div className="flex h-28 items-center justify-center border border-stone-200 grayscale opacity-60 transition-all duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0">
                  <span className="font-display text-lg text-charcoal">{brand.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
