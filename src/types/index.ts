export type ProductCategory = "granite" | "tiles" | "quartz" | "natural-stone";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subcategory: string;
  image: string;
  description: string;
  finish: string;
  colour: string;
  size: string;
  application: string[];
  style?: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  category: "Residential" | "Commercial" | "Hospitality" | "Kitchens" | "Bathrooms" | "Exterior";
  materials: string[];
  application: string;
  image: string;
  gallery?: string[];
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  customer: string;
  project: string;
  location: string;
}

export interface Brand {
  id: string;
  name: string;
}

export interface SpaceCategory {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface LookbookSlide {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
}

export interface Brochure {
  id: string;
  title: string;
  label: string;
  file: string;
  image?: string;
  featured?: boolean;
}
