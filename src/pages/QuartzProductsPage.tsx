import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PdfCard from "@/components/PdfCard";
import Reveal from "@/components/Reveal";
import { quartzApplications } from "@/data/quartz";
import { quartzBrochures } from "@/data/quartzBrochures";
import { img } from "@/data/images";

export default function QuartzProductsPage() {
  return (
    <>
      <SEO
        title="Quartz Surfaces"
        description="Explore engineered quartz slabs for kitchen countertops, islands, bathroom vanities, reception desks and commercial interiors."
      />
      <PageHero
        eyebrow="Engineered Surfaces"
        title="Quartz Surfaces"
        description="Sophisticated, consistent design engineered to perform under everyday demands — from busy kitchens to commercial lobbies."
        image={img.kitchenQuartzWaterfall}
      />

      <section id="slabs" className="py-24 sm:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="Full Range" title="Quartz Collections" />

          <div id="kitchen" className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quartzBrochures.map((brochure, i) => (
              <PdfCard key={brochure.id} brochure={brochure} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="bathroom" className="bg-stone-100 py-20">
        <div id="interior" className="container-edge">
          <SectionHeading eyebrow="Where It Works" title="Applications" align="center" />
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-5">
            {quartzApplications.map((app, i) => (
              <Reveal key={app} delay={(i % 5) * 0.06}>
                <p className="border-t border-ink pt-4 text-sm font-medium text-ink">{app}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
