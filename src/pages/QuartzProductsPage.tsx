import { useMemo, useState } from "react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ProductFilters from "@/components/ProductFilters";
import ProductGrid from "@/components/ProductGrid";
import Reveal from "@/components/Reveal";
import { quartzProducts, quartzSubcategories, quartzApplications } from "@/data/quartz";
import { img } from "@/data/images";

export default function QuartzProductsPage() {
  const [active, setActive] = useState<Record<string, string>>({ subcategory: "All" });

  const filtered = useMemo(
    () =>
      quartzProducts.filter(
        (p) => active.subcategory === "All" || p.subcategory === active.subcategory,
      ),
    [active],
  );

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

          <div className="mt-10">
            <ProductFilters
              groups={[{ key: "subcategory", label: "Category", options: [...quartzSubcategories] }]}
              active={active}
              onChange={(key, value) => setActive((prev) => ({ ...prev, [key]: value }))}
              onReset={() => setActive({ subcategory: "All" })}
            />
          </div>

          <div id="kitchen" className="mt-12">
            <ProductGrid products={filtered} />
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
