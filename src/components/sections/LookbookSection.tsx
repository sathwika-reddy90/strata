import Reveal from "../Reveal";
import { lookbookSlides } from "@/data/lookbook";

type LookSlide = (typeof lookbookSlides)[number];

function LookTile({ look, className = "" }: { look: LookSlide; className?: string }) {
  return (
    <div
      className={`group relative h-[240px] overflow-hidden rounded-3xl bg-charcoal lg:h-full ${className}`}
    >
      <img
        src={look.image}
        alt={look.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-ink/25 transition-colors duration-300 group-hover:bg-ink/40" />
      <div className="absolute inset-x-0 bottom-6 flex justify-center px-4 sm:bottom-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-transparent px-6 py-3 text-sm font-semibold text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
          {look.title}
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-none stroke-current"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default function LookbookSection() {
  const [wide, tall, belowLeft, belowRight, extraA, extraB] = lookbookSlides;

  return (
    <section id="lookbook" className="bg-warm-white py-24 sm:py-28 scroll-mt-28">
      <div className="container-edge">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-balance font-barlow text-[31px] font-bold leading-[1.05] tracking-normal sm:text-[39px] lg:whitespace-nowrap">
              <span className="text-ink">Explore Our </span>
              <span className="text-clay">LookBook</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-[10px] max-w-xl text-balance font-albert text-[16px] font-medium leading-[20px] text-charcoal-light sm:text-[18px]">
              Six design directions to help you translate a mood into the right material palette —
              browse how each one comes to life across real spaces.
            </p>
          </Reveal>
        </div>

        {/* Below lg: simple two-column stack of all six */}
        <Reveal delay={0.16} className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
          {lookbookSlides.map((look) => (
            <LookTile key={look.id} look={look} />
          ))}
        </Reveal>

        {/* lg and up: bento composition matching the reference — 75/25 column split,
            right tile stretches to the full combined height of the left column via
            CSS grid's default row-stretch, not a manual row-span guess. */}
        <Reveal delay={0.16} className="mt-14 hidden lg:block">
          <div className="grid grid-cols-[3fr_1fr] gap-5 lg:h-[600px]">
            <div className="grid grid-rows-2 gap-5">
              <LookTile look={wide} className="lg:h-full" />
              <div className="grid grid-cols-2 gap-5">
                <LookTile look={belowLeft} className="lg:h-full" />
                <LookTile look={belowRight} className="lg:h-full" />
              </div>
            </div>
            <LookTile look={tall} className="lg:h-full" />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-5">
            <LookTile look={extraA} className="lg:h-[280px]" />
            <LookTile look={extraB} className="lg:h-[280px]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
