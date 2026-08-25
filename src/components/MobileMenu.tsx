import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav, productsMegaMenu, collectionsMegaMenu } from "@/data/navigation";
import { whatsappHref } from "@/config/site";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

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
            <span className="font-display text-2xl">STRATA</span>
            <button aria-label="Close menu" onClick={onClose} className="p-2 text-2xl leading-none">
              &times;
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-10">
            <nav className="flex flex-col divide-y divide-warm-white/10">
              {primaryNav.map((item) => {
                const hasAccordion = item.label === "Products" || item.label === "Collections";
                const items = item.label === "Products" ? productsMegaMenu : collectionsMegaMenu;

                if (!hasAccordion) {
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={onClose}
                      className="py-4 text-lg font-display"
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
                      className="flex w-full items-center justify-between py-4 text-lg font-display"
                    >
                      {item.label}
                      <span className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
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
                            {"heading" in (items[0] ?? {}) ? (
                              (items as typeof productsMegaMenu).map((col) => (
                                <div key={col.heading} className="mb-4">
                                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light mb-2">
                                    {col.heading}
                                  </p>
                                  {col.links.map((l) => (
                                    <Link
                                      key={l.label}
                                      to={l.href}
                                      onClick={onClose}
                                      className="block py-1.5 text-sm text-stone-200"
                                    >
                                      {l.label}
                                    </Link>
                                  ))}
                                </div>
                              ))
                            ) : (
                              (items as typeof collectionsMegaMenu).map((l) => (
                                <Link
                                  key={l.label}
                                  to={l.href}
                                  onClick={onClose}
                                  className="block py-1.5 text-sm text-stone-200"
                                >
                                  {l.label}
                                </Link>
                              ))
                            )}
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
              className="mt-8 inline-flex w-full items-center justify-center gap-2 border border-warm-white/70 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em]"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
