import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  download?: boolean;
  onClick?: () => void;
  variant?: "primary" | "inverse" | "outline" | "outlineLight" | "ghost";
  className?: string;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-clay text-warm-white shadow-[0_10px_24px_-8px_rgba(163,24,29,0.5)] hover:bg-clay-deep hover:shadow-[0_14px_30px_-8px_rgba(163,24,29,0.6)]",
  inverse: "bg-warm-white text-ink shadow-[0_10px_24px_-10px_rgba(28,27,25,0.35)] hover:bg-clay hover:text-warm-white",
  outline: "border border-clay text-clay hover:bg-clay hover:text-warm-white",
  outlineLight: "border border-warm-white/70 text-warm-white hover:bg-warm-white hover:text-clay",
  ghost: "text-ink hover:text-clay",
};

export default function Button({
  children,
  href,
  external,
  download,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5";
  const classes = twMerge(base, variants[variant], className);

  if (href && download) {
    return (
      <a href={href} download target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
