import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

/** Sree Balaji "SB" monogram. Fills with currentColor so it adapts to light and dark surfaces. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 360"
      aria-hidden="true"
      focusable="false"
      className={twMerge("h-8 w-8 shrink-0", className)}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M 258.32 255.36 C 247.23 254.96 221.34 255.36 217.91 255.36 C 205.93 255.36 82.14 255.14 80.79 255.14 C 80.79 255.99 80.37 295.04 80.74 295.44 C 81.1 295.84 228.86 296.45 258.36 295.64 C 261.08 292.32 263.29 288.49 264.66 284.43 C 265.86 280.82 266.45 276.88 265.84 273.1 C 264.7 266.07 262.18 260.14 258.32 255.36 Z M 79.81 38.73 C 79.81 39.32 79.81 40.16 79.81 40.16 C 79.81 40.16 81.76 40.14 84.31 40.16 L 256.83 40.17 C 310.43 40.18 320.37 128 250.58 127.99 C 234.75 127.99 79.83 127.93 79.81 127.93 L 79.81 167.93 C 79.81 167.93 263.44 168.12 275.57 168.12 C 307.8 168.12 329.29 201.66 315.86 229.87 C 315.65 230.3 315.46 230.68 315.29 231.04 C 322.89 245.7 326.66 262.39 326.14 278.96 C 371.42 244.61 370.75 179.63 327.33 145.54 C 325.2 143.86 319.68 140.59 318.9 139.86 C 320.02 136.7 340.18 119.53 340.18 83.41 C 340.18 53.51 322.79 24.78 297.64 10.9 C 274.78 -1.72 259.38 0.09 234 0.09 L 79.82 0.1 C 79.81 1.67 79.81 35.24 79.81 38.73 M 233.77 318.85 C 218.87 318.98 81.16 318.95 79.82 318.97 C 79.82 321.21 79.8 357.27 79.81 360 C 85.75 360.01 197.07 359.83 209.25 359.83 C 241.36 359.83 264.37 360.3 288.17 338.34 C 300.94 326.55 309.96 311.33 313.78 294.3 C 326.66 236.73 284.09 191.43 226.8 191.43 C 216.61 191.43 83.26 191.67 80.12 191.17 C 51.26 186.6 33.01 161.16 43.42 132.82 C 48.81 118.13 62.29 107.13 77.58 105.02 C 85.36 103.94 213.22 105 230.17 104.73 C 231.35 104.7 231.31 104.71 231.63 103.94 C 231.64 103.92 231.92 64.83 231.36 64.37 C 231.34 64.36 144.03 63.95 102.44 64.14 C 80.45 64.24 59.59 63.89 40.34 76.7 C 0.71 103.05 -13.29 153.7 14.57 194.49 C 25.52 210.52 47.91 228.43 68.16 231 C 100.51 235.11 229.74 229.41 243.77 233.88 C 294.88 250.14 280.07 318.46 233.77 318.85"
      />
    </svg>
  );
}

const sizes = {
  sm: { mark: "h-7 w-7", name: "text-lg", tagline: "text-[8px]" },
  md: { mark: "h-8 w-8 sm:h-9 sm:w-9", name: "text-lg sm:text-xl", tagline: "text-[8px] sm:text-[9px]" },
  lg: { mark: "h-11 w-11", name: "text-2xl", tagline: "text-[10px]" },
};

interface LogoProps {
  /** Link target; omit to render a non-clickable lockup. */
  to?: string;
  size?: keyof typeof sizes;
  /** Colour of the mark and business name (inherited via currentColor). */
  className?: string;
  taglineClassName?: string;
  /** Hide "Granites & Tiles" on small screens to keep the header compact. */
  collapseTagline?: boolean;
}

/** Full logo lockup: monogram beside the stacked business name and descriptor. */
export default function Logo({
  to = "/",
  size = "md",
  className,
  taglineClassName,
  collapseTagline = false,
}: LogoProps) {
  const s = sizes[size];
  const content = (
    <>
      <LogoMark className={s.mark} />
      <span className="flex flex-col leading-none">
        <span className={twMerge("font-display tracking-tight", s.name)}>Sree Balaji</span>
        <span
          className={twMerge(
            "mt-1 font-semibold uppercase tracking-[0.3em] text-taupe",
            s.tagline,
            collapseTagline && "hidden sm:inline",
            taglineClassName,
          )}
        >
          Granites &amp; Tiles
        </span>
      </span>
    </>
  );
  const rootClass = twMerge("inline-flex items-center gap-2.5 text-ink", className);

  return to ? (
    <Link to={to} aria-label="Sree Balaji Granites & Tiles — home" className={rootClass}>
      {content}
    </Link>
  ) : (
    <span className={rootClass}>{content}</span>
  );
}
