import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav, productsMegaMenu } from "@/data/navigation";
import { whatsappHref } from "@/config/site";
import Logo from "./Logo";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const location = useLocation();
  const isActive = (href: string) => (href === "/" ? location.pathname === "/" : location.pathname.startsWith(href));

  const toggle = (label: string) => setExpanded((prev) => (prev === label ? null : label));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[60] flex flex-col bg-ink text-warm-white lg:hidden"
        >
          <div className="container-edge flex items-center justify-between py-6">
            <Logo to={undefined} size="sm" className="text-warm-white" taglineClassName="text-stone-300" />
            <button aria-label="Close menu" onClick={onClose} className="p-2 text-2xl leading-none">
              &times;
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-10">
            <nav className="flex flex-col divide-y divide-warm-white/10">
              {primaryNav.map((item) => {
                const hasAccordion = item.label === "Products";

                if (!hasAccordion) {
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={onClose}
                      className={`py-4 text-lg font-display transition-colors duration-300 ${
                        isActive(item.href) ? "text-clay-light" : "hover:text-clay-light"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const isOpen = expanded === item.label;
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => toggle(item.label)}
                      className={`flex w-full items-center justify-between py-4 text-lg font-display transition-colors duration-300 ${
                        isActive(item.href) ? "text-clay-light" : ""
                      }`}
                    >
                      {item.label}
                      <span
                        className={`text-clay-light transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 pl-2">
                            {productsMegaMenu.map((col) => (
                              <div key={col.heading} className="mb-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light mb-2">
                                  {col.heading}
                                </p>
                                {col.links.map((l) => (
                                  <Link
                                    key={l.label}
                                    to={l.href}
                                    onClick={onClose}
                                    className="block py-1.5 text-sm text-stone-200 transition-colors duration-300 hover:text-clay-light"
                                  >
                                    {l.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-warm-white transition-colors duration-300 hover:bg-clay-deep"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
