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
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/25" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-clay/70 to-transparent" />
      <div className="container-edge relative pb-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-clay" aria-hidden />
          <p className="eyebrow inline-block w-fit rounded-full bg-ink/70 px-4 py-1.5 text-gold-light backdrop-blur-md">
            {eyebrow}
          </p>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-balance text-4xl leading-[1.08] text-warm-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] sm:text-5xl lg:text-[3.75rem]"
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
