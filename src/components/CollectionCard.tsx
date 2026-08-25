import { motion } from "framer-motion";
import type { Collection } from "@/types";
import Reveal from "./Reveal";
import Button from "./Button";

interface CollectionCardProps {
  collection: Collection;
  index?: number;
}

const heights: Record<Collection["size"], string> = {
  large: "h-[560px]",
  medium: "h-[440px]",
  small: "h-[340px]",
};

export default function CollectionCard({ collection, index = 0 }: CollectionCardProps) {
  return (
    <Reveal delay={(index % 3) * 0.08} className={collection.size === "large" ? "lg:col-span-2" : ""}>
      <div className={`group relative overflow-hidden bg-charcoal ${heights[collection.size]}`}>
        <motion.img
          src={collection.image}
          alt={collection.name}
          className="absolute inset-0 h-full w-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <h3 className="font-sans text-2xl font-bold leading-[1.1] text-warm-white sm:text-[1.75rem]">
            {collection.name}
          </h3>
          <p className="mt-3 max-w-md text-[15px] leading-[1.5] text-stone-200">
            {collection.description}
          </p>
          <div className="mt-6">
            <Button href="/collections" variant="outlineLight" className="px-6 py-2.5 text-xs">
              Explore Collection
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
