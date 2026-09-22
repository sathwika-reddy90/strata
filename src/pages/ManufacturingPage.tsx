import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { graniteSlab, img } from "@/data/images";

// ponytail: dummy steps and images — replace with factory photography when supplied
const steps = [
  { title: "Quarry Selection", description: "Blocks are hand-picked at partner quarries for colour consistency and structural soundness.", image: graniteSlab(9) },
  { title: "Block Cutting", description: "Multi-wire gang saws slice each block into slabs of uniform thickness.", image: graniteSlab(19) },
  { title: "Surface Finishing", description: "Slabs are polished, honed, leathered or flamed to the finish each project calls for.", image: graniteSlab(5) },
  { title: "Edge Profiling & Cut-to-Size", description: "CNC machines cut countertops, treads and cladding panels to drawing.", image: graniteSlab(28) },
  { title: "Quality Inspection", description: "Every slab is checked for tone, veining and flatness before it is tagged for dispatch.", image: graniteSlab(14) },
  { title: "Packing & Dispatch", description: "Bundled in A-frame crates and shipped from our Uppal godown to site.", image: graniteSlab(38) },
];

export default function ManufacturingPage() {
  return (
    <>
      <SEO
        title="Manufacturing"
        description="Inside the Sree Balaji factory at Annamatla — from quarry block to finished slab."
      />
      <PageHero
        eyebrow="Our Factory"
        title="From Quarry Block to Finished Slab"
        description="Every surface we sell passes through our own factory at Annamatla, Yadadri — cut, finished and inspected under one roof."
        image={img.spaceHall}
      />

      <section className="py-24 sm:py-28">
        <div className="container-edge">
          <SectionHeading
            eyebrow="How We Work"
            title="Six Stages, One Standard"
            description="A look at the process behind each slab, from raw block to the finished surface that reaches your site."
          />
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={(i % 3) * 0.08}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100">
                  <img src={step.image} alt={step.title} className="h-full w-full object-cover" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-clay">Stage {i + 1}</p>
                <h3 className="mt-2 text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-light">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
