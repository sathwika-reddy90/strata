import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  variant?: "primary" | "inverse" | "outline" | "outlineLight" | "ghost";
  className?: string;
  type?: "button" | "submit";
}

const variants = {
  primary: "bg-ink text-warm-white hover:bg-clay",
  inverse: "bg-warm-white text-ink hover:bg-gold",
  outline: "border border-ink text-ink hover:bg-ink hover:text-warm-white",
  outlineLight: "border border-warm-white/70 text-warm-white hover:bg-warm-white hover:text-ink",
  ghost: "text-ink hover:text-clay",
};

export default function Button({
  children,
  href,
  external,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5";
  const classes = twMerge(base, variants[variant], className);

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
