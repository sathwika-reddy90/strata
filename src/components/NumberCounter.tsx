import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface NumberCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function NumberCounter({ value, suffix = "", label }: NumberCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1600, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  return (
    <div ref={ref}>
      <p className="font-display text-4xl text-ink sm:text-5xl">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.14em] text-taupe">{label}</p>
    </div>
  );
}
