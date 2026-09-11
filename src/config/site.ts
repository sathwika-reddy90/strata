export const siteConfig = {
  name: "Strata Surfaces",
  shortName: "Strata",
  tagline: "Surfaces That Define Spaces",
  description:
    "Granite, tiles, quartz and natural stone crafted to bring lasting beauty, character and performance to every space.",

  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",

  whatsappNumber: "919876543210",
  whatsappDefaultMessage:
    "Hello Strata Surfaces, I'd like to know more about your granite, tiles, quartz and natural stone collections.",

  email: "hello@stratasurfaces.example",

  address: {
    line1: "Plot 42, Stonecraft Industrial Estate",
    line2: "Kondapur Main Road",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500084",
    country: "India",
  },

  businessHours: [
    { day: "Monday – Saturday", hours: "9:30 AM – 7:30 PM" },
    { day: "Sunday", hours: "10:00 AM – 2:00 PM" },
  ],

  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60945.5!2d78.348!3d17.459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzMyLjQiTiA3OMKwMjAnNTIuOCJF!5e0!3m2!1sen!2sin!4v1700000000000",

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    pinterest: "https://pinterest.com/",
    linkedin: "https://linkedin.com/",
  },
} as const;

export function whatsappHref(message: string = siteConfig.whatsappDefaultMessage): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
