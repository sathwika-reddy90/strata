import SectionHeading from "./SectionHeading";
import { brands } from "@/data/brands";

export default function BrandMarquee() {
  const loop = [...brands, ...brands];

  return (
    <section className="bg-warm-white py-24 sm:py-28">
      <div className="container-edge">
        <SectionHeading eyebrow="Collaborators" title="Brands We Collaborate With" align="center" />
      </div>

      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-warm-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-warm-white to-transparent" />
        <div className="flex w-max animate-marquee gap-16">
          {loop.map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className="flex h-16 w-48 shrink-0 items-center justify-center grayscale opacity-50 transition-all duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0"
            >
              <span className="font-display text-xl text-charcoal">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
