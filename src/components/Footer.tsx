import { Link } from "react-router-dom";
import { footerLinks } from "@/data/navigation";
import { siteConfig, whatsappHref } from "@/config/site";
import Logo from "./Logo";

function SocialIcon({ label, path }: { label: string; path: string }) {
  return (
    <span
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center border border-warm-white/25 text-warm-white/80 transition-colors duration-300 hover:border-gold hover:text-gold"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d={path} />
      </svg>
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-ink text-warm-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-clay to-transparent" />
      <div className="container-edge grid grid-cols-1 gap-12 py-20 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo size="lg" className="text-warm-white" taglineClassName="text-stone-300" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-200">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex gap-3">
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
              <SocialIcon
                label="Instagram"
                path="M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.42.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.42.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.3 2 12 2zm0 1.8c-2.66 0-2.97.01-4.02.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65C4.31 7.03 4.3 7.34 4.3 10v0c0 2.66.01 2.97.06 4.02.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.36.06 4.02.06s2.97-.01 4.02-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.36.06-4.02s-.01-2.97-.06-4.02c-.04-.87-.18-1.34-.3-1.65a2.74 2.74 0 0 0-.66-1.02 2.74 2.74 0 0 0-1.02-.66c-.31-.12-.78-.26-1.65-.3C14.97 3.81 14.66 3.8 12 3.8zm0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3zm0 8.5a3.35 3.35 0 1 0 0-6.7 3.35 3.35 0 0 0 0 6.7zm5.35-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"
              />
            </a>
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">
              <SocialIcon
                label="Facebook"
                path="M13.5 21v-7.9h2.66l.4-3.09h-3.06V8.1c0-.9.25-1.5 1.54-1.5h1.65V3.85A22 22 0 0 0 14.2 3.7c-2.4 0-4.05 1.47-4.05 4.16v2.15H7.5v3.1h2.65V21h3.35z"
              />
            </a>
            <a href={siteConfig.social.pinterest} target="_blank" rel="noopener noreferrer">
              <SocialIcon
                label="Pinterest"
                path="M12 2C6.48 2 2 6.35 2 11.7c0 3.98 2.44 7.39 5.9 8.85-.08-.75-.15-1.9.03-2.72.17-.75 1.1-4.75 1.1-4.75s-.28-.56-.28-1.4c0-1.3.77-2.28 1.72-2.28.81 0 1.2.6 1.2 1.32 0 .8-.52 2-.79 3.13-.22.94.48 1.71 1.43 1.71 1.71 0 2.94-2.15 2.94-4.7 0-1.94-1.36-3.4-3.83-3.4-2.8 0-4.53 2.03-4.53 4.3 0 .78.24 1.33.62 1.76.17.2.2.28.13.5-.04.16-.14.56-.18.71-.06.22-.24.3-.44.22-1.24-.5-1.82-1.85-1.82-3.36 0-2.5 2.15-5.5 6.4-5.5 3.42 0 5.68 2.42 5.68 5.02 0 3.44-1.94 6-4.83 6-.97 0-1.87-.52-2.19-1.1l-.6 2.3c-.18.7-.55 1.55-.87 2.15 1.02.3 2.1.47 3.22.47 5.52 0 10-4.35 10-9.7C22 6.35 17.52 2 12 2z"
              />
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
              <SocialIcon
                label="LinkedIn"
                path="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.5 4.77 5.75V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9z"
              />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Products</h3>
          <ul className="mt-5 space-y-3">
            {footerLinks.products.map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="text-sm text-stone-200 hover:text-warm-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Company</h3>
          <ul className="mt-5 space-y-3">
            {footerLinks.company.map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="text-sm text-stone-200 hover:text-warm-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Explore</h3>
          <ul className="mt-5 space-y-3">
            {footerLinks.explore.map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="text-sm text-stone-200 hover:text-warm-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-warm-white/10">
        <div className="container-edge grid grid-cols-1 gap-6 py-10 sm:grid-cols-3">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Contact</h3>
            <a href={siteConfig.phoneHref} className="mt-3 block text-sm text-stone-200 hover:text-warm-white">
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-sm text-stone-200 hover:text-warm-white">
              {siteConfig.email}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm text-stone-200 hover:text-warm-white"
            >
              WhatsApp Us
            </a>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Address</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-200">
              {siteConfig.address.line1}, {siteConfig.address.line2}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}
              <br />
              {siteConfig.address.country}
            </p>
          </div>
          <div className="flex flex-col justify-between text-sm text-stone-300 sm:items-end sm:text-right">
            <div className="flex gap-6 sm:justify-end">
              <a href="#" className="hover:text-warm-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-warm-white transition-colors">
                Terms
              </a>
            </div>
            <p className="mt-4 sm:mt-0">&copy; {new Date().getFullYear()} Strata Surfaces. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
