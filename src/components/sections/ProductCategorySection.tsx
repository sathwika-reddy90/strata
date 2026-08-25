import Reveal from "../Reveal";
import HomeProductCategoryCard from "../HomeProductCategoryCard";
import { img } from "@/data/images";

const categories = [
  {
    title: "Granite",
    description: "Natural stone with distinctive character, strength and timeless appeal.",
    image: img.graniteBlackImpala,
    href: "/products/granite",
    ctaLabel: "Explore Granite",
  },
  {
    title: "Tiles & Porcelain",
    description: "Elegant surfaces for floors, walls and contemporary interiors.",
    image: img.tileCreamSpeckled,
    href: "/products/tiles",
    ctaLabel: "Explore Tiles",
  },
  {
    title: "Quartz",
    description: "Engineered surfaces combining sophisticated design with everyday performance.",
    image: img.kitchenQuartzWaterfall,
    href: "/products/quartz",
    ctaLabel: "Explore Quartz",
  },
];

export default function ProductCategorySection() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <div className="container-edge">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-4 text-clay">Our Materials</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance font-sans text-[2rem] font-bold leading-[1.1] tracking-tight text-ink sm:text-[2.75rem] lg:text-[3.25rem]">
              Explore Our Surfaces
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-xl text-balance text-[15px] leading-[1.5] text-charcoal-light sm:text-[17px]">
              Three material families, one uncompromising standard of quality and craftsmanship.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {categories.map((cat, i) => (
            <HomeProductCategoryCard key={cat.title} index={i} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
