import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

interface HomeProductCategoryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  ctaLabel: string;
  index: number;
}

/**
 * Section-2-only (homepage "Explore Our Surfaces") card treatment.
 * Deliberately separate from ProductCategoryCard.tsx, which is also used
 * by ProductsPage.tsx — keeping this local avoids leaking the redesign
 * onto /products.
 */
export default function HomeProductCategoryCard({
  title,
  description,
  image,
  href,
  ctaLabel,
  index,
}: HomeProductCategoryCardProps) {
  return (
    <Reveal delay={index * 0.1} className="h-full">
      <Link
        to={href}
        aria-label={ctaLabel}
        className="group relative flex aspect-square w-full flex-col justify-end overflow-hidden rounded-3xl bg-ink"
      >
        <motion.img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.05 }}
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent transition-opacity duration-500 group-hover:from-ink/95" />

        <div className="relative flex items-end justify-between gap-5 p-7 sm:p-8">
          <div className="min-w-0">
            <h3 className="font-sans text-[1.4rem] font-bold leading-[1.1] text-warm-white sm:text-[1.6rem] lg:text-[1.9rem]">
              {title}
            </h3>
            <p className="mt-2.5 max-w-[90%] text-[15px] leading-[1.45] text-stone-200/90">
              {description}
            </p>
          </div>

          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-warm-white/30 bg-warm-white/10 text-warm-white backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-warm-white group-hover:text-ink">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-none stroke-current"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
