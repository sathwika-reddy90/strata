import { useMemo, useState } from "react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ProductFilters from "@/components/ProductFilters";
import ProductGrid from "@/components/ProductGrid";
import { porcelainProducts, porcelainSubcategories } from "@/data/porcelain";
import { img } from "@/data/images";

export default function PorcelainProductsPage() {
  const [active, setActive] = useState<Record<string, string>>({ subcategory: "All" });

  const filtered = useMemo(
    () =>
      porcelainProducts.filter(
        (p) => active.subcategory === "All" || p.subcategory === active.subcategory,
      ),
    [active],
  );

  return (
    <>
      <SEO
        title="Porcelain Products"
        description="Explore fully vitrified porcelain slabs, flooring, wall panels and book-matched surfaces engineered for precision and beauty."
      />
      <PageHero
        eyebrow="Vitrified Surfaces"
        title="Porcelain Collections"
        description="Precision-engineered porcelain slabs and tiles, fully vitrified for exceptional strength and a refined, marble-inspired finish."
        image={img.marbleWhiteYule}
      />

      <section className="py-24 sm:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="Full Range" title="Porcelain Collections" />

          <div className="mt-10">
            <ProductFilters
              groups={[{ key: "subcategory", label: "Category", options: [...porcelainSubcategories] }]}
              active={active}
              onChange={(key, value) => setActive((prev) => ({ ...prev, [key]: value }))}
              onReset={() => setActive({ subcategory: "All" })}
            />
          </div>

          <div className="mt-12">
            <ProductGrid products={filtered} />
          </div>
        </div>
      </section>
    </>
  );
}
