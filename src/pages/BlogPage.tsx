import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import KnowledgeSection from "@/components/sections/KnowledgeSection";
import { blogPosts } from "@/data/blog";
import { img } from "@/data/images";

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog & Resources"
        description="Guides and ideas on choosing, styling and maintaining granite, tiles, porcelain and quartz surfaces."
      />
      <PageHero
        eyebrow="Blog / Resources"
        title="Ideas & Inspiration"
        description="Practical, design-led guidance for choosing and living with natural and engineered surfaces."
        image={img.livingRoomWarm}
      />

      <section className="py-24 sm:py-28">
        <div className="container-edge">
          <SectionHeading eyebrow="Latest Articles" title="From the Journal" />
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      <KnowledgeSection />
    </>
  );
}
