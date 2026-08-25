import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`text-balance font-barlow text-[2rem] font-bold leading-[1.1] tracking-tight sm:text-[2.75rem] lg:text-[3.25rem] ${
            light ? "text-warm-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 text-balance text-[15px] leading-[1.5] sm:text-[17px] ${
              light ? "text-stone-200" : "text-charcoal-light"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
