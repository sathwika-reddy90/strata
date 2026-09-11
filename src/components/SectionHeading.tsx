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
          <div className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
            <span className="h-px w-8 bg-clay" aria-hidden />
            <p className="eyebrow mb-0">{eyebrow}</p>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`text-balance font-barlow text-[34px] font-bold leading-[1.08] tracking-tight sm:text-[42px] ${
            light ? "text-warm-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 text-balance font-albert text-[16px] font-normal leading-[1.6] sm:text-[18px] ${
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
