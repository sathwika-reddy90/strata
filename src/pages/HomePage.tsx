import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import ChooseJourneySection from "@/components/sections/ChooseJourneySection";
import ExploreBySpaceSection from "@/components/sections/ExploreBySpaceSection";
import CategoryHighlightsSection from "@/components/sections/CategoryHighlightsSection";
import InstalledWorkSection from "@/components/sections/InstalledWorkSection";
import LookbookSection from "@/components/sections/LookbookSection";
import AdviceBannerSection from "@/components/sections/AdviceBannerSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BrandMarquee from "@/components/BrandMarquee";
import TestimonialSlider from "@/components/TestimonialSlider";
import VideoStoriesSection from "@/components/sections/VideoStoriesSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <>
      <SEO title="Premium Granite, Tiles, Quartz & Natural Stone" description={siteConfig.description} />
      <Hero />
      <CategoryHighlightsSection />
      <ChooseJourneySection />
      <ExploreBySpaceSection />
      <LookbookSection />
      <AdviceBannerSection />

      <InstalledWorkSection />

      <VideoStoriesSection />

      <section className="bg-cream py-24 sm:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="Client Stories" title="What Our Clients Say" align="center" />
          <div className="mt-16">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <BrandMarquee />
      <CTASection />
      <ContactSection />
    </>
  );
}
