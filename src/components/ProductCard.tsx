import { motion } from "framer-motion";
import type { Product } from "@/types";
import Reveal from "./Reveal";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <Reveal delay={(index % 6) * 0.06}>
      <motion.div
        className="group"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 shadow-[0_1px_3px_rgba(28,27,25,0.06)] transition-shadow duration-300 group-hover:shadow-[0_20px_40px_-12px_rgba(28,27,25,0.35)]">
          <motion.img
            src={product.image}
            alt={`${product.name} — ${product.subcategory}`}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100">
            <span className="p-5 text-xs font-semibold uppercase tracking-[0.14em] text-clay-light">
              View Details &#8594;
            </span>
          </div>
          {product.featured && (
            <span className="absolute left-4 top-4 rounded-full bg-clay px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-warm-white">
              Featured
            </span>
          )}
        </div>
        <div className="mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-taupe">
            {product.subcategory}
          </p>
          <h3 className="mt-1 text-lg text-ink transition-colors duration-300 group-hover:text-clay">
            {product.name}
          </h3>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-charcoal-light">
            <span>{product.finish}</span>
            <span aria-hidden>&middot;</span>
            <span>{product.application[0]}</span>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}
