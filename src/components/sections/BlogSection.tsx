import SectionHeading from "../SectionHeading";
import BlogCard from "../BlogCard";
import Button from "../Button";
import Reveal from "../Reveal";
import { blogPosts } from "@/data/blog";

export default function BlogSection() {
  return (
    <section className="bg-warm-white py-24 sm:py-28">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Resources"
            title="Ideas & Inspiration"
            description="Practical guidance on choosing, styling and maintaining every kind of surface."
          />
          <Reveal delay={0.2}>
            <Button href="/blog" variant="outline">
              Read the Blog
            </Button>
          </Reveal>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
