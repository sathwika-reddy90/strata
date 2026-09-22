export interface NavLink {
  label: string;
  href: string;
}

export const productsMenu: NavLink[] = [
  { label: "Granite", href: "/products/granite" },
  { label: "Tiles", href: "/products/tiles" },
  { label: "Quartz", href: "/products/quartz" },
  { label: "Natural Stone", href: "/products/natural-stone" },
];

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Resources", href: "/blog" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  products: productsMenu,
  company: [
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Testimonials", href: "/testimonials" },
  ],
  explore: [
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/blog" },
  ],
};
