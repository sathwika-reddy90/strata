import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CollectionCard from "@/components/CollectionCard";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { collections } from "@/data/collections";
import { img } from "@/data/images";

export default function CollectionsPage() {
  return (
    <>
      <SEO
        title="Collections"
        description="Explore curated collections of granite, tiles, porcelain and quartz — and browse installed work across residential and commercial projects."
      />
      <PageHero
        eyebrow="Collections & Gallery"
        title="Explore Our Collections"
        description="Material stories grouped by mood, palette and application — a starting point for architects, designers and homeowners."
        image={img.marbleBrownWhite}
      />

      <section id="product-collections" className="py-24 sm:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="Product Collections" title="Curated by Character" />
          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {collections.map((collection, i) => (
              <CollectionCard key={collection.id} collection={collection} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-24 sm:py-28">
        <div className="container-edge text-center">
          <SectionHeading
            eyebrow="Installed Work"
            title="See These Materials in Real Spaces"
            description="Browse our full gallery of completed residential, commercial and hospitality projects."
            align="center"
            light
          />
          <Reveal delay={0.15} className="mt-10 inline-block">
            <Button href="/gallery" variant="outlineLight">
              Visit the Gallery
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
