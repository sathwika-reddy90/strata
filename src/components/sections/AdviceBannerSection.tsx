import Reveal from "../Reveal";
import { img } from "@/data/images";
import { siteConfig, whatsappHref } from "@/config/site";

const panels = [
  {
    title: "Talk To Our Team",
    description: "Questions on product selection, pricing or application? Our team is a call away.",
    ctaLabel: "Book a Call",
    href: siteConfig.phoneHref,
    icon: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.4 2.1L8 10a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4 12.8 12.8 0 0 0 2.8.7 2 2 0 0 1 1.7 2Z",
  },
  {
    title: "Chat With Our Guide",
    description: "Struggling to find what's right for your space? We're here to help you decide.",
    ctaLabel: "Chat Now",
    href: whatsappHref(),
    icon: "M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.9-.95L3 21l1.95-5.6A8.5 8.5 0 1 1 21 11.5Z",
  },
  {
    title: "Visit A Showroom",
    description: "See, feel and compare full-scale displays in person with hands-on guidance.",
    ctaLabel: "Visit Us",
    href: "/contact",
    icon: "M12 2C8 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z",
  },
];

export default function AdviceBannerSection() {
  return (
    <section className="bg-warm-white py-24 sm:py-28">
      <div className="container-edge">
        <Reveal>
          <div className="overflow-hidden rounded-[28px] bg-warm-white sm:rounded-[36px]">
            <div className="relative">
              <img
                src={img.diningModern}
                alt="A Strata Surfaces specialist consulting with a client"
                className="h-[400px] w-full object-cover sm:h-[460px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-24 p-8 sm:bottom-28 sm:p-12">
                <h2 className="max-w-md text-balance font-barlow text-[2rem] font-bold leading-[1.1] tracking-tight text-warm-white sm:text-[2.75rem] lg:text-[3.25rem]">
                  Expert Advice, No Charge
                </h2>
                <p className="mt-4 max-w-sm text-balance text-[15px] leading-[1.5] text-stone-200 sm:text-[17px]">
                  Take the guesswork out and create a space you love, with a free design
                  consultation from our team.
                </p>
              </div>
            </div>

            <div className="relative z-10 -mt-16 px-4 pb-4 sm:-mt-20 sm:px-8 sm:pb-8">
              <div className="rounded-3xl bg-warm-white p-6 shadow-[0_20px_50px_rgba(28,27,25,0.18)] sm:p-10">
                <div className="grid grid-cols-1 divide-y divide-stone-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {panels.map((panel, i) => (
                    <Reveal
                      key={panel.title}
                      delay={i * 0.08}
                      className="flex flex-col items-center px-4 py-8 text-center sm:px-8"
                    >
                      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-clay" strokeWidth="1.5">
                        <path d={panel.icon} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <h3 className="mt-5 font-sans text-xl font-bold leading-tight text-ink">{panel.title}</h3>
                      <p className="mx-auto mt-2 max-w-xs text-[15px] leading-[1.5] text-charcoal-light">
                        {panel.description}
                      </p>
                      <a
                        href={panel.href}
                        target={panel.href.startsWith("http") ? "_blank" : undefined}
                        rel={panel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-warm-white transition-colors duration-300 hover:bg-clay"
                      >
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="2">
                          <path d={panel.icon} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {panel.ctaLabel}
                      </a>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
