import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import { img } from "@/data/images";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Strata Surfaces — visit our showroom, call, WhatsApp, or send an enquiry about your granite, tile or quartz project."
      />
      <PageHero eyebrow="Contact" title="Let's Start a Conversation" image={img.livingRoomNeutral} />
      <ContactSection />
    </>
  );
}
