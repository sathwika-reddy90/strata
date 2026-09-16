import { img } from "./images";
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "The Kondapur Residence",
    location: "Hyderabad, India",
    category: "Residential",
    materials: ["Alpine Frost Granite", "Cloudmarble Field Tiles"],
    application: "Kitchen Countertops & Living Room Flooring",
    image: img.kitchenGraniteIsland,
    gallery: [img.kitchenGraniteIsland, img.kitchenGraniteVaulted, img.tilesMarbleFinish],
    description:
      "A full-home renovation pairing warm granite countertops with large-format marble-look tiles across open-plan living areas.",
  },
  {
    id: "proj-2",
    name: "Meridian Business Park Lobby",
    location: "Bengaluru, India",
    category: "Commercial",
    materials: ["Imperial Reserve Quartz", "Grand Format Onyx Tiles"],
    application: "Reception Desk & Lobby Flooring",
    image: img.quartzCalacattaVein,
    gallery: [img.quartzCalacattaVein, img.graniteSurfacePolished],
    description:
      "A statement lobby featuring a book-matched reception desk in premium quartz and large-format tile flooring.",
  },
  {
    id: "proj-3",
    name: "Blue Horizon Boutique Hotel",
    location: "Goa, India",
    category: "Hospitality",
    materials: ["Bookmatched Calacatta Quartz", "Harbour Stone Outdoor Tiles"],
    application: "Lobby Walls & Poolside Decking",
    image: img.naturalStoneTandurStonesB,
    gallery: [img.naturalStoneTandurStonesB, img.naturalStoneSandstoneC, img.facadeTravertine],
    description:
      "A resort-style renovation using book-matched quartz feature walls indoors and anti-skid stone tiles poolside.",
  },
  {
    id: "proj-4",
    name: "Jubilee Hills Show Kitchen",
    location: "Hyderabad, India",
    category: "Kitchens",
    materials: ["Pure Frost Quartz", "Steel Cascade Granite"],
    application: "Waterfall Island & Backsplash",
    image: img.kitchenQuartzWaterfall,
    gallery: [img.kitchenQuartzWaterfall, img.quartzKalingaBrochure, img.kitchenGraniteSteel],
    description:
      "A show kitchen built around a dramatic waterfall quartz island with a complementary granite prep counter.",
  },
  {
    id: "proj-5",
    name: "Whitefield Spa Bathrooms",
    location: "Bengaluru, India",
    category: "Bathrooms",
    materials: ["Statuario Vein Natural Stone", "Storm Cloud Quartz"],
    application: "Vanity Tops & Wall Cladding",
    image: img.naturalStoneLimestonesB,
    gallery: [img.naturalStoneLimestonesB, img.quartzCalacattaVein, img.naturalStoneLimestonesC],
    description:
      "A spa-inspired bathroom suite finished with veined natural stone wall panels and a honed quartz vanity top.",
  },
  {
    id: "proj-6",
    name: "Lakeview Villa Facade",
    location: "Pune, India",
    category: "Exterior",
    materials: ["Facade Travertine Cladding", "Bedrock Slab Granite"],
    application: "Facade Cladding & Entrance Steps",
    image: img.facadeTravertine,
    gallery: [img.facadeTravertine, img.granitePatagonia],
    description:
      "A contemporary villa exterior clad in warm travertine-finish stone with matching granite entrance steps.",
  },
  {
    id: "proj-7",
    name: "Marina Bay Serviced Apartments",
    location: "Chennai, India",
    category: "Residential",
    materials: ["Ashgrey Plank Tiles", "Cloud Nine Quartz"],
    application: "Flooring & Kitchen Countertops",
    image: img.quartzKalingaBrochure,
    gallery: [img.quartzKalingaBrochure, img.tilesMono],
    description:
      "Wood-look tile flooring throughout, paired with soft matte quartz countertops for a calm, livable palette.",
  },
  {
    id: "proj-8",
    name: "Skyline Corporate Suites",
    location: "Mumbai, India",
    category: "Commercial",
    materials: ["Sovereign Onyx Quartz", "Skyline Slab XL Natural Stone"],
    application: "Reception Desk & Executive Floor Cladding",
    image: img.graniteSurfacePolished,
    gallery: [img.graniteSurfacePolished, img.naturalStoneKadapaBlackB],
    description:
      "A high-rise office fit-out finished with dark statement quartz surfaces and large-format natural stone cladding.",
  },
];

export const projectCategories = [
  "Residential",
  "Commercial",
  "Hospitality",
  "Kitchens",
  "Bathrooms",
  "Exterior",
] as const;
