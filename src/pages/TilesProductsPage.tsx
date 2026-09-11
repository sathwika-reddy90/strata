import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import PdfCard from "@/components/PdfCard";
import { tilesBrochures } from "@/data/tilesBrochures";
import { img } from "@/data/images";

export default function TilesProductsPage() {
  return (
    <>
      <SEO
        title="Tiles"
        description="Browse floor tiles, wall tiles, large format tiles and outdoor tiles across minimal, natural, marble-look, stone-look, wood-look, industrial, luxury and contemporary styles."
      />
      <PageHero
        eyebrow="Tiles"
        title="Tiles"
        description="Floor, wall and outdoor surfaces spanning minimal, natural, marble-look, stone-look, wood-look, industrial, luxury and contemporary styles."
        image={img.marbleCheckeredFloor}
      />

      <section id="floor" className="py-24 sm:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="Full Range" title="Tile Collections" />

          <div id="wall" className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div id="large-format" className="hidden" />
            <div id="outdoor" className="hidden" />
            {tilesBrochures.map((brochure, i) => (
              <PdfCard key={brochure.id} brochure={brochure} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
