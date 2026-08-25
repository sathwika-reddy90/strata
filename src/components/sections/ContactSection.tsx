import SectionHeading from "../SectionHeading";
import ContactForm from "../ContactForm";
import Reveal from "../Reveal";
import { siteConfig, whatsappHref } from "@/config/site";

export default function ContactSection() {
  return (
    <section className="bg-warm-white py-24 sm:py-28">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Talk About Your Project"
          description="Visit our showroom, call our team, or send an enquiry and we'll get back to you within one business day."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-8">
              <div className="aspect-[4/3] w-full overflow-hidden border border-stone-200 grayscale-[15%]">
                <iframe
                  title="Strata Surfaces showroom location"
                  src={siteConfig.mapEmbedSrc}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">Address</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                    {siteConfig.address.line1}, {siteConfig.address.line2}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">Contact</h3>
                  <a href={siteConfig.phoneHref} className="mt-3 block text-sm text-charcoal-light hover:text-clay">
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block text-sm text-charcoal-light hover:text-clay"
                  >
                    {siteConfig.email}
                  </a>
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-charcoal-light hover:text-clay"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
                <div className="sm:col-span-2">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">
                    Business Hours
                  </h3>
                  <dl className="mt-3 space-y-1.5">
                    {siteConfig.businessHours.map((slot) => (
                      <div key={slot.day} className="flex justify-between gap-4 text-sm text-charcoal-light sm:max-w-xs">
                        <dt>{slot.day}</dt>
                        <dd className="text-ink">{slot.hours}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
