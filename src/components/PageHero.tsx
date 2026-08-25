import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}

export default function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative flex h-[56vh] min-h-[420px] items-end overflow-hidden bg-ink">
      <motion.img
        src={image}
        alt={title}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
      <div className="container-edge relative pb-16 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="eyebrow mb-4 text-gold-light"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-balance text-4xl leading-[1.08] text-warm-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-5 max-w-xl text-balance text-base leading-relaxed text-stone-200"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
