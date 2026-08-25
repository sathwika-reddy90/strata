import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { whyChooseUsItems } from "@/data/whyChooseUs";

const icons: Record<number, string> = {
  0: "M12 2 3 7v6c0 5 3.8 8.7 9 9 5.2-.3 9-4 9-9V7l-9-5Z",
  1: "M9 12.5 11 15l4-5M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z",
  2: "M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1",
  3: "M4 6h16M4 12h16M4 18h10",
  4: "M3 15c2-6 5-10 9-10s7 4 9 10c-2 1-5 2-9 2s-7-1-9-2Z",
  5: "M12 2 3 7v6c0 5 3.8 8.7 9 9 5.2-.3 9-4 9-9V7l-9-5Zm-1.5 10 3-4 1.2 1.6L18 6.5",
  6: "M4 20 10 6l4 8 2-4 4 10H4Z",
  7: "M12 22s7-4.5 7-11V5l-7-3-7 3v6c0 6.5 7 11 7 11Z",
};

export default function WhyChooseUs() {
  return (
    <section className="bg-charcoal py-24 sm:py-32">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Why Strata"
          title="Why Choose Us"
          description="Two decades of sourcing, cutting and installing surfaces for architects, interior designers and homeowners who won't compromise on quality."
          light
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUsItems.map((item, i) => (
            <Reveal key={item.id} delay={(i % 4) * 0.08}>
              <div>
                <svg viewBox="0 0 24 24" className="h-9 w-9 stroke-gold" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icons[i % 8]} />
                </svg>
                <h3 className="mt-5 font-sans text-lg font-bold leading-[1.15] text-warm-white">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.5] text-stone-300">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
