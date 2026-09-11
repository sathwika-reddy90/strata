import type { Brochure } from "@/types";
import { tilesBrochures } from "./tilesBrochures";
import { quartzBrochures } from "./quartzBrochures";

export type ResourceCategory = "tiles" | "quartz";

export interface Resource extends Brochure {
  category: ResourceCategory;
}

/**
 * Combines the brochure data already used on the Tiles and Quartz product
 * pages into one filterable list. Granite and Natural Stone have no PDF
 * brochures in the project, so they have no entry here.
 */
export const resources: Resource[] = [
  ...tilesBrochures.map((b): Resource => ({ ...b, category: "tiles" })),
  ...quartzBrochures.map((b): Resource => ({ ...b, category: "quartz" })),
];

export const resourceFilters: { key: "all" | ResourceCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "tiles", label: "Tiles" },
  { key: "quartz", label: "Quartz" },
];
