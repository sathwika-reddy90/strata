import Reveal from "./Reveal";
import Button from "./Button";
import type { Brochure } from "@/types";

interface PdfCardProps {
  brochure: Brochure;
  index?: number;
}

export default function PdfCard({ brochure, index = 0 }: PdfCardProps) {
  return (
    <Reveal delay={(index % 6) * 0.06}>
      <div className="group flex h-full flex-col rounded-[24px] border border-stone-200 bg-warm-white p-6 shadow-[0_1px_3px_rgba(28,27,25,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-clay hover:shadow-[0_20px_40px_-12px_rgba(28,27,25,0.25)] sm:p-8">
        <div className="relative h-40 overflow-hidden rounded-[14px] bg-stone-100 sm:h-48">
          {brochure.featured && (
            <span className="absolute left-4 top-4 z-10 rounded-full bg-clay px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-warm-white">
              Featured
            </span>
          )}
          {brochure.image ? (
            <img
              src={brochure.image}
              alt={brochure.title}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-none stroke-clay" strokeWidth="1.4">
                <path
                  d="M7 2h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M14 2v5h5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.5 13.5h7M8.5 16.5h4.5" strokeLinecap="round" />
              </svg>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-1 flex-col">
          <div className="flex items-center gap-2">
            <span className="h-px w-4 bg-clay" aria-hidden />
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-taupe">
              {brochure.label}
            </p>
          </div>
          <h3 className="mt-2 text-lg font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-clay">
            {brochure.title}
          </h3>

          <div className="mt-6">
            <Button href={brochure.file} download variant="primary">
              Download PDF
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2">
                <path
                  d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
