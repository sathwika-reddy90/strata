export type ProductCategory = "granite" | "tiles" | "porcelain" | "quartz";

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

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
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

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  category: ProductCategory | "mixed";
  size: "large" | "medium" | "small";
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

export interface KnowledgeTopic {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
}
