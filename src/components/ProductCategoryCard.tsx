import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

interface ProductCategoryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  ctaLabel: string;
  index: number;
}

export default function ProductCategoryCard({
  title,
  description,
  image,
  href,
  ctaLabel,
  index,
}: ProductCategoryCardProps) {
  return (
    <Reveal delay={index * 0.1} className="h-full">
      <Link to={href} className="group relative block h-[520px] overflow-hidden bg-ink sm:h-[600px]">
        <motion.img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.05 }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent transition-opacity duration-500 group-hover:from-ink/95" />

        <div className="relative flex h-full flex-col justify-end p-8 sm:p-10">
          <p className="eyebrow mb-3 text-gold-light">0{index + 1}</p>
          <h3 className="text-3xl text-warm-white sm:text-4xl">{title}</h3>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-200 opacity-90">
            {description}
          </p>
          <div className="mt-7 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-warm-white">
            <span>{ctaLabel}</span>
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
            >
              &#8594;
            </motion.span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
