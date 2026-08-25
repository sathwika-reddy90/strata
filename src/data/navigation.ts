export interface NavLink {
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  heading: string;
  href: string;
  links: NavLink[];
}

export const productsMegaMenu: MegaMenuColumn[] = [
  {
    heading: "Granite",
    href: "/products/granite",
    links: [
      { label: "Granite Slabs", href: "/products/granite#slabs" },
      { label: "Granite Flooring", href: "/products/granite#flooring" },
      { label: "Granite Countertops", href: "/products/granite#countertops" },
      { label: "Granite Applications", href: "/products/granite#applications" },
    ],
  },
  {
    heading: "Tiles & Porcelain",
    href: "/products/tiles",
    links: [
      { label: "Floor Tiles", href: "/products/tiles#floor" },
      { label: "Wall Tiles", href: "/products/tiles#wall" },
      { label: "Porcelain Tiles", href: "/products/porcelain" },
      { label: "Large Format Tiles", href: "/products/tiles#large-format" },
      { label: "Outdoor Tiles", href: "/products/tiles#outdoor" },
    ],
  },
  {
    heading: "Quartz",
    href: "/products/quartz",
    links: [
      { label: "Quartz Slabs", href: "/products/quartz#slabs" },
      { label: "Kitchen Countertops", href: "/products/quartz#kitchen" },
      { label: "Bathroom Surfaces", href: "/products/quartz#bathroom" },
      { label: "Interior Applications", href: "/products/quartz#interior" },
    ],
  },
];

export const collectionsMegaMenu: NavLink[] = [
  { label: "Product Collections", href: "/collections#product-collections" },
  { label: "Gallery of Installed Work", href: "/gallery" },
];

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Collections", href: "/collections" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Resources", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  products: [
    { label: "Granite", href: "/products/granite" },
    { label: "Tiles", href: "/products/tiles" },
    { label: "Porcelain", href: "/products/porcelain" },
    { label: "Quartz", href: "/products/quartz" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Testimonials", href: "/testimonials" },
  ],
  explore: [
    { label: "Collections", href: "/collections" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/blog" },
  ],
};
