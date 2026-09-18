import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav, productsMegaMenu } from "@/data/navigation";
import { whatsappHref } from "@/config/site";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";

type MenuKey = "Products" | null;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6 lg:px-16 lg:pt-8 xl:px-24">
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          onMouseLeave={() => setOpenMenu(null)}
          className={`relative mx-auto flex w-full max-w-[1320px] items-center justify-between gap-6 rounded-full border border-stone-200/70 bg-warm-white/80 pl-6 pr-3 backdrop-blur-xl transition-all duration-500 sm:pl-8 sm:pr-4 ${
            scrolled ? "py-2.5 bg-warm-white/92 shadow-[0_8px_30px_-12px_rgba(28,27,25,0.3)]" : "py-3.5 shadow-[0_8px_30px_-14px_rgba(28,27,25,0.18)]"
          }`}
        >
          <Logo collapseTagline />

          <nav className="hidden lg:flex items-center gap-8">
            {primaryNav.map((item) => {
              const hasMega = item.label === "Products";
              const isActive =
                item.href === "/" ? location.pathname === "/" : location.pathname.startsWith(item.href);
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasMega && setOpenMenu(item.label as MenuKey)}
                >
                  <Link
                    to={item.href}
                    className={`relative text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:text-clay ${
                      isActive ? "text-clay" : "text-charcoal"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-clay transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-clay px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-warm-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay-deep"
            >
              Enquire Now
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="flex flex-col gap-1.5 rounded-full p-2.5 text-ink lg:hidden"
            >
              <span className="block h-[1.5px] w-5 bg-current" />
              <span className="block h-[1.5px] w-5 bg-current" />
              <span className="block h-[1.5px] w-3.5 self-end bg-current" />
            </button>
          </div>

          <AnimatePresence>
            {openMenu === "Products" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="absolute inset-x-0 top-[calc(100%+12px)] rounded-[28px] border border-stone-200/70 bg-warm-white shadow-2xl"
              >
                <div className="grid grid-cols-4 gap-10 px-10 py-10">
                  {productsMegaMenu.map((col) => (
                    <div key={col.heading}>
                      <Link
                        to={col.href}
                        className="eyebrow mb-4 block hover:text-ink transition-colors"
                      >
                        {col.heading}
                      </Link>
                      <ul className="space-y-2.5">
                        {col.links.map((l) => (
                          <li key={l.label}>
                            <Link
                              to={l.href}
                              className="text-[15px] text-charcoal-light hover:text-clay transition-colors"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
