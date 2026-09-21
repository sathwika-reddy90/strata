/**
 * Centralized image registry. Every image URL in the app is resolved through
 * this file so photography can be swapped for real product and project
 * photography without touching UI components.
 *
 * Replace any key's value with a new file under public/images/... once real
 * photography is available — nothing else in the app needs to change.
 */

/** Granite slab renders: /images/granite/slab-01.webp … slab-40.webp */
export const graniteSlab = (n: number) => `/images/granite/slab-${String(n).padStart(2, "0")}.webp`;

export const img = {
  // ---- Hero ----
  heroBanner1: "/images/hero/banner1.webp",
  heroBanner2: "/images/hero/banner2.webp",
  heroBanner3: "/images/hero/banner3.webp",

  // ---- Lookbook ----
  lookMinimalist: "/images/lookbook/minimalist.webp",
  lookNaturalOrganic: "/images/lookbook/natural-organic.webp",
  lookClassicTimeless: "/images/lookbook/classic-timeless.webp",
  lookIndustrialUrban: "/images/lookbook/industrial-urban.webp",

  // ---- Interiors / lifestyle (Explore by Space, hero, editorial) ----
  adviceBanner: "/images/interiors/advice-banner.webp",
  livingRoomWarm: "/images/interiors/living-room-warm.jpg",
  livingRoomModern: "/images/interiors/living-room-modern.jpg",
  livingRoomGrey: "/images/interiors/living-room-grey.jpg",
  livingRoomMinimal: "/images/interiors/living-room-minimal.jpg",
  livingRoomNeutral: "/images/interiors/living-room-neutral.jpg",
  livingRoomArchitectural: "/images/interiors/living-room-architectural.jpg",
  livingRoomEclectic: "/images/interiors/living-room-eclectic.jpg",
  livingRoomStoneWall: "/images/interiors/living-room-stone-wall.jpg",
  diningModern: "/images/interiors/dining-modern.jpg",
  kitchenMarbleNew: "/images/interiors/kitchen-marble-new.jpg",
  bathroomTileNew: "/images/interiors/bathroom-tile-new.jpg",
  facadeModernOne: "/images/interiors/facade-modern-1.jpg",
  facadeModernTwo: "/images/interiors/facade-modern-2.jpg",

  // ---- Granite (named picks from the slab set; catalogue uses graniteSlab(n)) ----
  graniteBlack: graniteSlab(19),
  graniteWhiteVeined: graniteSlab(28),
  graniteGreyWave: graniteSlab(5),
  graniteCharcoalWave: graniteSlab(14),
  graniteEarthMulti: graniteSlab(9),

  // ---- Quartz ----
  kitchenQuartzWaterfall: "/images/quartz/kitchen-quartz-waterfall.jpg",
  kitchenCountertopA: "/images/quartz/kitchen-countertop-a.jpg",
  kitchenCountertopB: "/images/quartz/kitchen-countertop-b.jpg",
  kitchenCountertopC: "/images/quartz/kitchen-countertop-c.jpg",
  kitchenCountertopD: "/images/quartz/kitchen-countertop-d.jpg",

  // ---- Porcelain / marble-look & bathrooms ----
  bathroomMarbleDoorway: "/images/porcelain/bathroom-marble-doorway.jpg",
  bathroomMarbleVanity: "/images/porcelain/bathroom-marble-vanity.jpg",
  bathroomHotelMarble: "/images/porcelain/bathroom-hotel-marble.jpg",
  marbleWhiteYule: "/images/porcelain/marble-white-yule.jpg",
  marbleBrownWhite: "/images/porcelain/marble-brown-white.jpg",
  marbleBlackWhite: "/images/porcelain/marble-black-white.jpg",
  marbleCheckeredFloor: "/images/porcelain/marble-checkered-floor.jpg",

  // ---- Tiles ----
  tileTerracotta: "/images/tiles/tile-terracotta.jpg",
  tilePacificBlue: "/images/tiles/tile-pacific-blue.jpg",
  tileCreamSpeckled: "/images/tiles/tile-cream-speckled.jpg",
  tileGarnetRed: "/images/tiles/tile-garnet-red.jpg",

  // ---- Outdoor / patio / pool / facades ----
  outdoorPatioStone: "/images/gallery/outdoor-patio-stone.jpg",
  outdoorTiledWalkway: "/images/gallery/outdoor-tiled-walkway.jpg",
  outdoorPoolside: "/images/gallery/outdoor-poolside.jpg",
  facadeTravertine: "/images/gallery/facade-travertine.jpg",

  // ---- Commercial / hospitality ----
  hotelLobbyMarble: "/images/projects/hotel-lobby-marble.jpg",

  // ---- Blog ----
  journalWarmInterior: "/images/blog/journal-warm-interior.jpg",

  // ---- Natural Stone type cards (Sandstone, Kota, Tandur, Kadapa Black, Limestone) ----
  naturalStoneSandstone1: "/images/natural-stone/sandstone/sandstone-1.jpg",
  naturalStoneKotaStone1: "/images/natural-stone/kota-stone/kota-stone-1.jpg",
  naturalStoneTandurStones1: "/images/natural-stone/tandur-stones/tandur-stones-1.jpg",
  naturalStoneKadapaBlack1: "/images/natural-stone/kadapa-black/kadapa-black-1.jpg",
  naturalStoneLimestones1: "/images/natural-stone/limestones/limestones-1.jpg",

  // ---- Natural Stone collection gallery (sourced from client-provided photography) ----
  naturalStoneSandstoneA: "/images/natural-stone/sandstone/sandstone-1.jpg",
  naturalStoneSandstoneB: "/images/natural-stone/sandstone/sandstone-2.jpg",
  naturalStoneSandstoneC: "/images/natural-stone/sandstone/sandstone-3.jpg",
  naturalStoneSandstoneD: "/images/natural-stone/sandstone/sandstone-4.jpg",
  naturalStoneSandstoneE: "/images/natural-stone/sandstone/sandstone-5.jpg",
  naturalStoneSandstoneF: "/images/natural-stone/sandstone/sandstone-6.jpg",
  naturalStoneSandstoneG: "/images/natural-stone/sandstone/sandstone-7.jpg",
  naturalStoneSandstoneH: "/images/natural-stone/sandstone/sandstone-8.jpg",
  naturalStoneKotaStoneA: "/images/natural-stone/kota-stone/kota-stone-1.jpg",
  naturalStoneKotaStoneB: "/images/natural-stone/kota-stone/kota-stone-2.jpg",
  naturalStoneKotaStoneC: "/images/natural-stone/kota-stone/kota-stone-3.jpg",
  naturalStoneKotaStoneD: "/images/natural-stone/kota-stone/kota-stone-4.jpg",
  naturalStoneKotaStoneE: "/images/natural-stone/kota-stone/kota-stone-5.jpg",
  naturalStoneTandurStonesA: "/images/natural-stone/tandur-stones/tandur-stones-1.jpg",
  naturalStoneTandurStonesB: "/images/natural-stone/tandur-stones/tandur-stones-2.jpg",
  naturalStoneTandurStonesC: "/images/natural-stone/tandur-stones/tandur-stones-3.jpg",
  naturalStoneKadapaBlackA: "/images/natural-stone/kadapa-black/kadapa-black-1.jpg",
  naturalStoneKadapaBlackB: "/images/natural-stone/kadapa-black/kadapa-black-2.jpg",
  naturalStoneKadapaBlackC: "/images/natural-stone/kadapa-black/kadapa-black-3.jpg",
  naturalStoneLimestonesA: "/images/natural-stone/limestones/limestones-1.jpg",
  naturalStoneLimestonesB: "/images/natural-stone/limestones/limestones-2.jpg",
  naturalStoneLimestonesC: "/images/natural-stone/limestones/limestones-3.jpg",

  // ---- Tile brochure thumbnails (extracted from PDF catalogues) ----
  tilesDiamondSeries: "/images/tiles/diamond-series.jpg",
  tilesPosheCarving: "/images/tiles/poshe-carving.jpg",
  tilesPosheCollection: "/images/tiles/poshe-collection.jpg",
  tilesMarbleFinish: "/images/tiles/marble-finish.jpg",
  tilesSlab: "/images/tiles/slab.jpg",
  tilesConceptA: "/images/tiles/concept-a.jpg",
  tilesGlossyBath: "/images/tiles/glossy-bath.jpg",
  tilesGlossyPuja: "/images/tiles/glossy-puja.jpg",
  tilesGlossyA: "/images/tiles/glossy-a.jpg",
  tilesGlossyB: "/images/tiles/glossy-b.jpg",
  tilesHexa: "/images/tiles/hexa.jpg",
  tilesEndless: "/images/tiles/endless.jpg",
  tilesGoldSeries: "/images/tiles/gold-series.jpg",
  tilesMono: "/images/tiles/mono.jpg",
  tilesMoroccan: "/images/tiles/moroccan.jpg",
  tilesPlainSeries: "/images/tiles/plain-series.jpg",
  tilesCarlo: "/images/tiles/carlo.jpg",
  tilesGrid: "/images/tiles/grid.jpg",
  tilesLuxy: "/images/tiles/luxy.jpg",
  tilesCadbury: "/images/tiles/cadbury.jpg",
  tilesLouvers: "/images/tiles/louvers.jpg",
  tilesCrossy: "/images/tiles/crossy.jpg",
  tilesGlossy2026: "/images/tiles/glossy-2026.jpg",
  tilesElgres: "/images/tiles/elgres.jpg",
  tilesCarving: "/images/tiles/carving.webp",
  tilesCarvingDecor: "/images/tiles/carving-decor.webp",
  tilesCarvingGolden: "/images/tiles/carving-golden.webp",
  tilesWoodCarving: "/images/tiles/wood-carving.webp",
  tilesGhr: "/images/tiles/ghr.webp",
  tilesGlossyGranula: "/images/tiles/glossy-granula.webp",
  tilesMattEndless: "/images/tiles/matt-endless.webp",
  tilesMattMarble: "/images/tiles/matt-marble.webp",
  tilesMattSpecialColor: "/images/tiles/matt-special-color.webp",
  tilesMattWood: "/images/tiles/matt-wood.webp",
  tilesSugar: "/images/tiles/sugar.webp",
  tilesSugarGranula: "/images/tiles/sugar-granula.webp",

  // ---- Quartz brochure thumbnails (extracted from PDF catalogues) ----
  quartzKalingaBrochure: "/images/quartz/kalingastone-brochure.jpg",
  quartzCalacattaVein: "/images/quartz/calacatta-vein-series.jpg",
} as const;

export type ImageKey = keyof typeof img;
