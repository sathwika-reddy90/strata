import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ProductCategoryCard from "@/components/ProductCategoryCard";
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
    title: "Tiles",
    description: "Elegant floor and wall surfaces for contemporary interiors and outdoor spaces.",
    image: img.tileCreamSpeckled,
    href: "/products/tiles",
    ctaLabel: "Explore Tiles",
  },
  {
    title: "Porcelain",
    description: "Fully vitrified slabs and tiles engineered for precision and marble-look beauty.",
    image: img.marbleWhiteYule,
    href: "/products/porcelain",
    ctaLabel: "Explore Porcelain",
  },
  {
    title: "Quartz",
    description: "Engineered surfaces combining sophisticated design with everyday performance.",
    image: img.kitchenQuartzWaterfall,
    href: "/products/quartz",
    ctaLabel: "Explore Quartz",
  },
];

export default function ProductsPage() {
  return (
    <>
      <SEO
        title="Our Products"
        description="Browse Strata Surfaces' full product range — natural granite, tiles, porcelain and engineered quartz."
      />
      <PageHero
        eyebrow="Our Products"
        title="One Source for Every Surface"
        description="Natural stone, engineered quartz and vitrified porcelain — sourced, cut and finished to the same exacting standard."
        image={img.kitchenGraniteSteel}
      />

      <section className="py-24 sm:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="Product Families" title="Choose a Material to Explore" align="center" />
          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {categories.map((cat, i) => (
              <ProductCategoryCard key={cat.title} index={i} {...cat} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
