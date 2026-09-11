import Button from "./Button";
import Reveal from "./Reveal";
import { img } from "@/data/images";
import { whatsappHref } from "@/config/site";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <img
        src={img.facadeTravertine}
        alt="Architectural stone facade"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/70" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-clay/70 to-transparent" />

      <div className="container-edge relative mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-clay" aria-hidden />
            <p className="eyebrow text-gold-light">Start Your Project</p>
            <span className="h-px w-8 bg-clay" aria-hidden />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-balance font-barlow text-[2rem] font-bold leading-[1.1] tracking-tight text-warm-white sm:text-[2.75rem] lg:text-[3.25rem]">
            Let&rsquo;s Find the Right Surface for Your Space
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-balance text-[15px] leading-[1.5] text-stone-200 sm:text-[17px]">
            Tell us about your project and our team will help you choose the right material,
            finish and application.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary">
              Request a Quote
            </Button>
            <Button href={whatsappHref()} external variant="outlineLight">
              Talk on WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
