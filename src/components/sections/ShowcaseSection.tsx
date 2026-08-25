import type { Product } from "@/types";
import SectionHeading from "../SectionHeading";
import ProductCard from "../ProductCard";
import Button from "../Button";
import Reveal from "../Reveal";

interface ShowcaseSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
  viewAllHref: string;
  bg?: "warm-white" | "cream" | "stone-100";
}

const bgClasses: Record<NonNullable<ShowcaseSectionProps["bg"]>, string> = {
  "warm-white": "bg-warm-white",
  cream: "bg-cream",
  "stone-100": "bg-stone-100",
};

export default function ShowcaseSection({
  eyebrow,
  title,
  description,
  products,
  viewAllHref,
  bg = "warm-white",
}: ShowcaseSectionProps) {
  return (
    <section className={`py-24 sm:py-28 ${bgClasses[bg]}`}>
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          <Reveal delay={0.2}>
            <Button href={viewAllHref} variant="outline">
              View All
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
          {products.slice(0, 4).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
