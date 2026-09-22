import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import NumberCounter from "@/components/NumberCounter";
import CTASection from "@/components/CTASection";
import { img } from "@/data/images";

// ponytail: dummy copy — swap for the real name, role and bio when supplied
const owner = {
  name: "Rajesh Kumar",
  role: "Founder & Managing Director",
  bio: [
    "Rajesh started Sree Balaji Granites & Tiles with a single cutting unit and a conviction that stone should be chosen for the space it lives in, not the price on the slab.",
    "Three decades on, he still walks the factory floor every week — checking finishes, meeting quarry partners and sitting with architects on the projects that matter most.",
  ],
};

const values = [
  { title: "Integrity in Sourcing", description: "We work directly with quarries and manufacturers, so what you see is what gets delivered." },
  { title: "Craft Over Shortcuts", description: "Every slab is checked for consistency before it reaches a client's project." },
  { title: "Design-Led Guidance", description: "Our specialists think in terms of light, use and longevity — not just catalogue pages." },
  { title: "Long-Term Relationships", description: "Many of our clients are architects and builders who return, project after project." },
];

const stats = [
  { value: 30, suffix: "+", label: "Years in Business" },
  { value: 4000, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Surface Collections" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Strata Surfaces sources, cuts and installs premium granite, tiles and quartz for architects, designers and homeowners."
      />
      <PageHero
        eyebrow="About Strata"
        title="Built on Stone, Guided by Craft"
        description="For nearly two decades, we've helped architects, designers and homeowners choose surfaces that last — not just look good on day one."
        image={img.graniteGreyWave}
      />

      <section className="border-b border-stone-200 py-20 sm:py-24">
        <div className="container-edge grid grid-cols-1 gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">
          <Reveal>
            <img
              src={img.ownerPortrait}
              alt={owner.name}
              className="h-56 w-56 rounded-full border-4 border-warm-white object-cover shadow-[0_20px_40px_-16px_rgba(28,27,25,0.35)] sm:h-64 sm:w-64"
            />
            <h3 className="mt-6 font-barlow text-2xl font-bold text-ink">{owner.name}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-clay">{owner.role}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading eyebrow="Meet the Founder" title="The Person Behind the Stone" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal-light">
              {owner.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container-edge grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="A Material-First Approach to Every Project"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal-light">
              <p>
                Strata Surfaces began with a simple frustration: too many surface suppliers sold
                on price and availability, not on whether a material actually suited the space it
                was going into. We set out to do it differently.
              </p>
              <p>
                Today, we work with architects, interior designers, builders and homeowners across
                residential, commercial and hospitality projects — sourcing natural granite,
                engineered quartz, and ceramic tile from trusted quarries and
                manufacturers, and guiding every client toward the surface that will genuinely
                perform for their space.
              </p>
              <p>
                From first sample to final polish, our team stays involved — because a beautiful
                surface is only as good as the guidance and craftsmanship behind it.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={img.graniteCharcoalWave}
                alt="Granite kitchen countertop installation"
                className="col-span-2 aspect-[16/10] w-full object-cover"
              />
              <img src={img.marbleWhiteYule} alt="Marble stone texture" className="aspect-square w-full object-cover" />
              <img src={img.tileTerracotta} alt="Terracotta floor tile texture" className="aspect-square w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-100 py-16">
        <div className="container-edge grid grid-cols-2 gap-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <NumberCounter key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="What Guides Us" title="Our Values" align="center" />
          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 4) * 0.08}>
                <div className="border-t border-ink pt-6">
                  <h3 className="text-lg text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-light">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
