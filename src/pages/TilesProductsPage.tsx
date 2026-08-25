import { useMemo, useState } from "react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ProductFilters from "@/components/ProductFilters";
import ProductGrid from "@/components/ProductGrid";
import { tileProducts, tileStyles } from "@/data/tiles";
import { img } from "@/data/images";

const subcategories = ["Floor Tiles", "Wall Tiles", "Porcelain Tiles", "Large Format Tiles", "Outdoor Tiles", "Designer Tiles"];
const finishes = [...new Set(tileProducts.map((p) => p.finish))];

export default function TilesProductsPage() {
  const [active, setActive] = useState<Record<string, string>>({
    subcategory: "All",
    style: "All",
    finish: "All",
  });

  const filtered = useMemo(
    () =>
      tileProducts.filter(
        (p) =>
          (active.subcategory === "All" || p.subcategory === active.subcategory) &&
          (active.style === "All" || p.style === active.style) &&
          (active.finish === "All" || p.finish === active.finish),
      ),
    [active],
  );

  return (
    <>
      <SEO
        title="Tiles & Porcelain"
        description="Browse floor tiles, wall tiles, porcelain tiles, large format tiles and outdoor tiles across minimal, natural, marble-look, stone-look, wood-look, industrial, luxury and contemporary styles."
      />
      <PageHero
        eyebrow="Tiles & Porcelain"
        title="Tiles & Porcelain"
        description="Floor, wall and outdoor surfaces spanning minimal, natural, marble-look, stone-look, wood-look, industrial, luxury and contemporary styles."
        image={img.marbleCheckeredFloor}
      />

      <section id="floor" className="py-24 sm:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="Full Range" title="Tile Collections" />

          <div className="mt-10">
            <ProductFilters
              groups={[
                { key: "subcategory", label: "Category", options: subcategories },
                { key: "style", label: "Look", options: [...tileStyles] },
                { key: "finish", label: "Finish", options: finishes },
              ]}
              active={active}
              onChange={(key, value) => setActive((prev) => ({ ...prev, [key]: value }))}
              onReset={() => setActive({ subcategory: "All", style: "All", finish: "All" })}
            />
          </div>

          <div id="wall" className="mt-12">
            <div id="large-format" className="hidden" />
            <div id="outdoor" className="hidden" />
            <ProductGrid products={filtered} />
          </div>
        </div>
      </section>
    </>
  );
}
