import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { img } from "@/data/images";
import { whatsappHref } from "@/config/site";

const tools = [
  {
    title: "In-Showroom Viewing",
    description: "See full slabs and tiles under real lighting, side by side, before you decide.",
    ctaLabel: "Book a Visit",
    href: "/contact",
    image: img.hotelLobbyMarble,
  },
  {
    title: "Sample Boxes",
    description: "Request cut samples of your shortlist to view against your own cabinetry and lighting.",
    ctaLabel: "Request Samples",
    href: "/contact",
    image: img.kitchenCountertopA,
  },
  {
    title: "Photo Consultation",
    description: "Send us a photo of your space and our team will help you shortlist surfaces that fit.",
    ctaLabel: "Send Your Space",
    href: whatsappHref("Hi, I'd like a photo consultation for my space."),
    image: img.livingRoomArchitectural,
  },
];

export default function VisualizerToolsSection() {
  return (
    <section className="bg-stone-100 py-24 sm:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Visualisation Support"
          title="See It Before You Choose It"
          description="Not sure how a surface will read in your space? Our team offers a few practical ways to find out."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {tools.map((tool, i) => (
            <Reveal key={tool.title} delay={i * 0.08}>
              <div className="group h-full border border-stone-200 bg-warm-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-sans text-lg font-bold leading-[1.15] text-ink">{tool.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.5] text-charcoal-light">{tool.description}</p>
                  <a
                    href={tool.href}
                    target={tool.href.startsWith("http") ? "_blank" : undefined}
                    rel={tool.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink hover:text-clay"
                  >
                    {tool.ctaLabel} &#8594;
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
