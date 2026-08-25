import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import { img } from "@/data/images";

export default function WhyChooseUsPage() {
  return (
    <>
      <SEO
        title="Why Choose Us"
        description="From material selection to installation support, here's why architects, designers and homeowners choose Strata Surfaces."
      />
      <PageHero eyebrow="Why Strata" title="Why Choose Us" image={img.kitchenGraniteWhite} />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
