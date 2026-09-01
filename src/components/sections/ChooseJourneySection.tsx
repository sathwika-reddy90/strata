import { useState, useEffect, useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Reveal from "../Reveal";
import Button from "../Button";

interface Journey {
  id: string;
  label: string;
  href: string;
  icon: ReactNode;
}

const journeys: Journey[] = [
  {
    id: "granite",
    label: "Granite",
    href: "/products/granite",
    icon: <path d="M12 2 3 9l3 12h12l3-12-9-7Z" />,
  },
  {
    id: "tiles",
    label: "Tiles & Porcelain",
    href: "/products/tiles",
    icon: (
      <>
        <rect x="3" y="3" width="7.5" height="7.5" />
        <rect x="13.5" y="3" width="7.5" height="7.5" />
        <rect x="3" y="13.5" width="7.5" height="7.5" />
        <rect x="13.5" y="13.5" width="7.5" height="7.5" />
      </>
    ),
  },
  {
    id: "quartz",
    label: "Quartz",
    href: "/products/quartz",
    icon: <path d="M12 2 16 8.5 12 22 8 8.5 12 2ZM7.5 8.5h9" />,
  },
];

const stats = [
  { value: 18, suffix: "+", label: "Years in Business" },
  { value: 4200, suffix: "+", label: "Projects Delivered" },
  { value: 60, suffix: "+", label: "Surface Collections" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
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
    <div ref={ref} className="relative rounded-[24px] bg-white p-5">
      <span className="absolute right-4 top-4 h-3 w-3 border-r-2 border-t-2 border-[#DD2227]" aria-hidden />
      <p className="font-barlow text-[44px] font-semibold leading-[1] tracking-[-1px] text-[#DD2227] sm:text-[56px] sm:tracking-[-2px] lg:text-[72px] lg:leading-[76px]">
        {display}
        {suffix}
      </p>
      <span className="mt-4 block h-px w-8 bg-[#AEB4B7]" aria-hidden />
      <p className="mt-3 font-albert text-[18px] font-medium leading-[20px] text-[#6C6C6C]">{label}</p>
    </div>
  );
}

export default function ChooseJourneySection() {
  const [active, setActive] = useState(journeys[0].id);

  return (
    <section className="bg-[#F7F6F5] py-24 sm:py-28">
      <div className="container-edge mb-20 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-6">
        <Reveal className="flex rounded-[24px] bg-white p-8 sm:p-10">
          <div className="flex flex-col justify-center">
            <h2 className="max-w-md font-barlow text-[32px] font-bold leading-[1] tracking-normal text-[#191B1C] sm:text-[39px]">
              A Material-First Approach to Every Project
            </h2>
            <p className="mt-5 max-w-md font-albert text-[18px] font-normal leading-[20px] tracking-normal text-[#6C6C6C]">
              Strata Surfaces began with a simple frustration: too many surface suppliers sold on
              price and availability, not on whether a material actually suited the space it was
              going into. We set out to do it differently.
            </p>
            <div className="mt-7">
              <Button
                href="/about"
                variant="primary"
                className="rounded-[30px] px-6 py-3 text-[14px] font-normal normal-case tracking-normal"
              >
                About Us
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2">
                  <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </Reveal>
      </div>

      <div className="container-edge text-center">
        <Reveal>
          <h2 className="font-barlow text-[39px] font-bold leading-[44px] tracking-normal text-[#191B1C]">
            Choose Your Journey
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-[10px] max-w-xl font-albert text-[18px] font-medium leading-[20px] tracking-normal text-[#6C6C6C]">
            What are you looking for today? Begin your exploration below.
          </p>
        </Reveal>

        <Reveal delay={0.16} className="mt-12 flex justify-center">
          <div
            onMouseLeave={() => setActive(journeys[0].id)}
            className="inline-flex w-full max-w-md flex-col gap-1.5 rounded-[2rem] bg-white p-2 sm:w-auto sm:max-w-none sm:flex-row sm:rounded-full sm:gap-1"
          >
            {journeys.map((journey) => {
              const isActive = journey.id === active;
              return (
                <Link
                  key={journey.id}
                  to={journey.href}
                  onMouseEnter={() => setActive(journey.id)}
                  onFocus={() => setActive(journey.id)}
                  className={`flex w-full items-center justify-center gap-3 rounded-full px-8 py-3 font-albert text-base font-medium transition-colors duration-300 sm:w-auto ${
                    isActive ? "bg-[#1A1A1A] text-warm-white" : "text-charcoal hover:text-ink"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 shrink-0 fill-none stroke-current"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {journey.icon}
                  </svg>
                  {journey.label}
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
