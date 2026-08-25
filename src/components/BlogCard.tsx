import { motion } from "framer-motion";
import type { BlogPost } from "@/types";
import Reveal from "./Reveal";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <article className="group cursor-pointer">
        <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
          <motion.img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <div className="mt-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-clay">
            {post.category}
          </p>
          <h3 className="mt-2 font-sans text-xl font-bold leading-[1.15] text-ink transition-colors group-hover:text-clay">
            {post.title}
          </h3>
          <p className="mt-2 text-[15px] leading-[1.5] text-charcoal-light">{post.description}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink">
            Read More
            <span className="transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
          </span>
        </div>
      </article>
    </Reveal>
  );
}
