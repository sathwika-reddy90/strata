import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import ChooseJourneySection from "@/components/sections/ChooseJourneySection";
import ExploreBySpaceSection from "@/components/sections/ExploreBySpaceSection";
import CategoryHighlightsSection from "@/components/sections/CategoryHighlightsSection";
import CollectionsSection from "@/components/sections/CollectionsSection";
import InstalledWorkSection from "@/components/sections/InstalledWorkSection";
import StyleQuizSection from "@/components/sections/StyleQuizSection";
import LookbookSection from "@/components/sections/LookbookSection";
import VisualizerToolsSection from "@/components/sections/VisualizerToolsSection";
import AdviceBannerSection from "@/components/sections/AdviceBannerSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BrandMarquee from "@/components/BrandMarquee";
import TestimonialSlider from "@/components/TestimonialSlider";
import VideoStoriesSection from "@/components/sections/VideoStoriesSection";
import BlogSection from "@/components/sections/BlogSection";
import KnowledgeSection from "@/components/sections/KnowledgeSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <>
      <SEO title="Premium Granite, Tiles & Quartz" description={siteConfig.description} />
      <Hero />
      <CategoryHighlightsSection />
      <ChooseJourneySection />
      <ExploreBySpaceSection />
      <LookbookSection />
      <AdviceBannerSection />

      <CollectionsSection />
      <InstalledWorkSection />
      <VisualizerToolsSection />
      <StyleQuizSection />

      <VideoStoriesSection />

      <section className="bg-cream py-24 sm:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="Client Stories" title="What Our Clients Say" align="center" />
          <div className="mt-16">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      <BlogSection />
      <KnowledgeSection />
      <WhyChooseUs />
      <BrandMarquee />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
