import Reveal from "../Reveal";
import { img } from "@/data/images";
import { siteConfig, whatsappHref } from "@/config/site";

const panels = [
  {
    title: "Talk to Our Team",
    description:
      "Have questions or need clarity on product selection, pricing or application? Our team is just a call away to help you move forward.",
    ctaLabel: "Book a Call",
    href: siteConfig.phoneHref,
    icon: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.4 2.1L8 10a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4 12.8 12.8 0 0 0 2.8.7 2 2 0 0 1 1.7 2Z",
  },
  {
    title: "Your Expert Online Guide",
    description:
      "Struggling to find what's right for your space? We're here to guide you through the selection.",
    ctaLabel: "Chat Now",
    href: whatsappHref(),
    icon: "M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.9-.95L3 21l1.95-5.6A8.5 8.5 0 1 1 21 11.5Z",
  },
  {
    title: "Strata Near You",
    description:
      "Explore our collections at your nearest center to see, feel and compare full-scale displays in person and get hands-on guidance from our team.",
    ctaLabel: "Visit Experience Center",
    href: "/contact",
    icon: "M12 2C8 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z",
  },
];

export default function AdviceBannerSection() {
  return (
    <section className="bg-warm-white py-24 sm:py-28">
      <div className="container-edge">
        <Reveal>
          <div className="overflow-hidden rounded-[28px] sm:rounded-[36px]">
            <div className="relative">
              <img
                src={img.adviceBanner}
                alt="Advice is always on the house — free design services from Strata Surfaces"
                className="h-[320px] w-full object-cover sm:h-[380px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 top-0 p-8 sm:p-12">
                <h2 className="max-w-md text-balance font-barlow text-[2rem] font-bold leading-[1.1] tracking-tight text-warm-white sm:text-[2.75rem] lg:text-[3.25rem]">
                  Advice is always on the House
                </h2>
                <p className="mt-4 max-w-sm text-balance font-albert text-[16px] font-medium leading-[20px] text-stone-200 sm:text-[18px]">
                  Take the guesswork out and create a space you love, with our free design
                  services.
                </p>
              </div>
            </div>

            <div className="relative z-10 -mt-16 px-4 pb-4 sm:-mt-20 sm:px-8 sm:pb-8">
              <div className="rounded-[28px] bg-white px-5 py-10 shadow-[0_20px_50px_rgba(28,27,25,0.18)] sm:rounded-[32px]">
                <div className="grid grid-cols-1 divide-y divide-stone-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {panels.map((panel, i) => (
                    <Reveal
                      key={panel.title}
                      delay={i * 0.08}
                      className="flex h-full flex-col items-center px-4 py-6 text-center sm:px-8 sm:py-2"
                    >
                      <div className="flex-1">
                        <h3 className="font-albert text-[20px] font-light leading-[26px] text-ink sm:text-[22px]">
                          {panel.title}
                        </h3>
                        <p className="mx-auto mt-3 max-w-xs font-albert text-[14px] font-normal leading-[20px] text-ink">
                          {panel.description}
                        </p>
                      </div>
                      <a
                        href={panel.href}
                        target={panel.href.startsWith("http") ? "_blank" : undefined}
                        rel={panel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] px-7 py-[14px] font-albert text-[16px] font-medium text-[#F7F6F5] transition-colors duration-300 hover:bg-clay"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4 flex-none fill-none stroke-clay" strokeWidth="2">
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
