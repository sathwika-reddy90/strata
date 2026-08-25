import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/data/testimonials";
import { img } from "@/data/images";

export default function TestimonialsPage() {
  return (
    <>
      <SEO
        title="Testimonials"
        description="Read what architects, designers and homeowners say about working with Strata Surfaces on their granite, tile and quartz projects."
      />
      <PageHero
        eyebrow="Client Stories"
        title="What Our Clients Say"
        description="Real feedback from the architects, designers and homeowners we've worked alongside."
        image={img.livingRoomModern}
      />

      <section className="py-24 sm:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="In Their Words" title="Testimonials" align="center" />
          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={(i % 2) * 0.1}>
                <div className="border border-stone-200 bg-warm-white p-8">
                  <p className="text-balance font-display text-xl leading-relaxed text-ink">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-stone-200 pt-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-ink">{t.customer}</p>
                    <p className="mt-1 text-sm text-taupe">
                      {t.project} &middot; {t.location}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
