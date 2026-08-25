import { motion } from "framer-motion";
import Reveal from "./Reveal";

interface ApplicationCardProps {
  name: string;
  image: string;
  description?: string;
  size?: "large" | "normal";
  index?: number;
  className?: string;
}

export default function ApplicationCard({
  name,
  image,
  description,
  size = "normal",
  index = 0,
  className = "",
}: ApplicationCardProps) {
  return (
    <Reveal delay={(index % 3) * 0.08} className={`h-full ${className}`}>
      <div className="group relative h-full overflow-hidden rounded-3xl bg-charcoal">
        <motion.img
          src={image}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
        <div
          className={`absolute inset-0 flex flex-col justify-end ${
            size === "large" ? "p-8 sm:p-10" : "p-6 sm:p-7"
          }`}
        >
          <h3
            className={`font-sans font-bold leading-tight text-warm-white ${
              size === "large" ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
            }`}
          >
            {name}
          </h3>
          {description && (
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-stone-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {description}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  );
}
