import { img } from "./images";

export interface StoneType {
  id: string;
  name: string;
  description: string;
  finish: string;
  colour: string;
  image: string;
}

/** The 5 Natural Stone categories/types Strata offers — shown as category cards. */
export const naturalStoneTypes: StoneType[] = [
  {
    id: "sandstone",
    name: "Sandstone",
    description: "Warm, textured sandstone with a natural cleft finish — ideal for landscaping and outdoor flooring.",
    finish: "Natural Cleft",
    colour: "Rustic Beige",
    image: img.naturalStoneSandstone1,
  },
  {
    id: "kota-stone",
    name: "Kota Stone",
    description: "A classic blue-grey stone polished smooth — a long-standing favourite for courtyards and interior flooring.",
    finish: "Polished",
    colour: "Blue Grey",
    image: img.naturalStoneKotaStone1,
  },
  {
    id: "tandur-stones",
    name: "Tandur Stones",
    description: "Durable slate-grey stone with a natural cleft texture, well suited to outdoor paving.",
    finish: "Natural Cleft",
    colour: "Slate Grey",
    image: img.naturalStoneTandurStones1,
  },
  {
    id: "kadapa-black",
    name: "Kadapa Black",
    description: "Rich, deep black stone polished to a refined finish — a striking choice for flooring and countertops.",
    finish: "Polished",
    colour: "Deep Black",
    image: img.naturalStoneKadapaBlack1,
  },
  {
    id: "limestones",
    name: "Limestones",
    description: "Soft beige limestone with a honed finish, bringing understated elegance to flooring and facades.",
    finish: "Honed",
    colour: "Soft Beige",
    image: img.naturalStoneLimestones1,
  },
];

export const naturalStoneSubcategories = naturalStoneTypes.map((t) => t.name);

export interface StoneCollectionItem {
  id: string;
  category: string;
  image: string;
}

/** The full Natural Stone collection gallery — actual photography, organised by type. */
export const naturalStoneCollection: StoneCollectionItem[] = [
  { id: "sandstone-a", category: "Sandstone", image: img.naturalStoneSandstoneA },
  { id: "sandstone-b", category: "Sandstone", image: img.naturalStoneSandstoneB },
  { id: "sandstone-c", category: "Sandstone", image: img.naturalStoneSandstoneC },
  { id: "sandstone-d", category: "Sandstone", image: img.naturalStoneSandstoneD },
  { id: "sandstone-e", category: "Sandstone", image: img.naturalStoneSandstoneE },
  { id: "sandstone-f", category: "Sandstone", image: img.naturalStoneSandstoneF },
  { id: "sandstone-g", category: "Sandstone", image: img.naturalStoneSandstoneG },
  { id: "sandstone-h", category: "Sandstone", image: img.naturalStoneSandstoneH },
  { id: "kota-stone-a", category: "Kota Stone", image: img.naturalStoneKotaStoneA },
  { id: "kota-stone-b", category: "Kota Stone", image: img.naturalStoneKotaStoneB },
  { id: "kota-stone-c", category: "Kota Stone", image: img.naturalStoneKotaStoneC },
  { id: "kota-stone-d", category: "Kota Stone", image: img.naturalStoneKotaStoneD },
  { id: "kota-stone-e", category: "Kota Stone", image: img.naturalStoneKotaStoneE },
  { id: "tandur-stones-a", category: "Tandur Stones", image: img.naturalStoneTandurStonesA },
  { id: "tandur-stones-b", category: "Tandur Stones", image: img.naturalStoneTandurStonesB },
  { id: "tandur-stones-c", category: "Tandur Stones", image: img.naturalStoneTandurStonesC },
  { id: "kadapa-black-a", category: "Kadapa Black", image: img.naturalStoneKadapaBlackA },
  { id: "kadapa-black-b", category: "Kadapa Black", image: img.naturalStoneKadapaBlackB },
  { id: "kadapa-black-c", category: "Kadapa Black", image: img.naturalStoneKadapaBlackC },
  { id: "limestones-a", category: "Limestones", image: img.naturalStoneLimestonesA },
  { id: "limestones-b", category: "Limestones", image: img.naturalStoneLimestonesB },
  { id: "limestones-c", category: "Limestones", image: img.naturalStoneLimestonesC },
];
