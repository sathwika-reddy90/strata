import { useMemo, useState } from "react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ProductFilters from "@/components/ProductFilters";
import ProductGrid from "@/components/ProductGrid";
import { graniteProducts, graniteSubcategories } from "@/data/granite";
import { img } from "@/data/images";

export default function GraniteProductsPage() {
  const [active, setActive] = useState<Record<string, string>>({ subcategory: "All" });

  const filtered = useMemo(
    () =>
      graniteProducts.filter(
        (p) => active.subcategory === "All" || p.subcategory === active.subcategory,
      ),
    [active],
  );

  return (
    <>
      <SEO
        title="Granite Products"
        description="Browse natural granite slabs, countertops and flooring — Black, White, Grey, Brown and Premium Granite collections."
      />
      <PageHero
        eyebrow="Natural Stone"
        title="Natural Granite"
        description="Every slab carries its own character. Discover natural stone selected for beauty, durability and timeless architectural appeal."
        image={img.graniteSurfacePolished}
      />

      <section id="slabs" className="py-24 sm:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="Full Range" title="Granite Collections" />

          <div className="mt-10">
            <ProductFilters
              groups={[{ key: "subcategory", label: "Category", options: [...graniteSubcategories] }]}
              active={active}
              onChange={(key, value) => setActive((prev) => ({ ...prev, [key]: value }))}
              onReset={() => setActive({ subcategory: "All" })}
            />
          </div>

          <div id="countertops" className="mt-12">
            <ProductGrid products={filtered} />
          </div>
        </div>
      </section>

      <section id="flooring" className="bg-stone-100 py-20">
        <div id="applications" className="container-edge">
          <SectionHeading
            eyebrow="Applications"
            title="Countertops, Flooring & Beyond"
            description="From kitchen countertops to full facade cladding, our granite is cut and finished for the specific demands of each application."
            align="center"
          />
        </div>
      </section>
    </>
  );
}
