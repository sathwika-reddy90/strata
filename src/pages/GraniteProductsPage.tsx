import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ProductGrid from "@/components/ProductGrid";
import { graniteProducts } from "@/data/granite";
import { img } from "@/data/images";

export default function GraniteProductsPage() {
  return (
    <>
      <SEO
        title="Granite Products"
        description="Browse our full range of natural granite slabs for countertops, flooring and cladding."
      />
      <PageHero
        eyebrow="Natural Stone"
        title="Natural Granite"
        description="Every slab carries its own character. Discover natural stone selected for beauty, durability and timeless architectural appeal."
        image={img.graniteGreyWave}
      />

      <section id="slabs" className="py-24 sm:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="Full Range" title="Granite Collections" />

          <div id="countertops" className="mt-12">
            <ProductGrid products={graniteProducts} />
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
