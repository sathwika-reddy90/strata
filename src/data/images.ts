/**
 * Centralized image registry. Every image URL in the app is resolved through
 * this file so photography can be swapped for real product and project
 * photography without touching UI components.
 *
 * Replace any key's value with a new file under public/images/... once real
 * photography is available — nothing else in the app needs to change.
 */

export const img = {
  // ---- Hero ----
  livingRoomBright: "/images/hero/living-room-bright.jpg",

  // ---- Interiors / lifestyle (Explore by Space, hero, editorial) ----
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

  // ---- Granite ----
  graniteSurfacePolished: "/images/granite/granite-surface-polished.jpg",
  graniteBlackImpala: "/images/granite/granite-black-impala.jpg",
  granitePatagonia: "/images/granite/granite-patagonia.jpg",
  kitchenGraniteIsland: "/images/granite/kitchen-granite-island.jpg",
  kitchenGraniteVaulted: "/images/granite/kitchen-granite-vaulted.jpg",
  kitchenGraniteSteel: "/images/granite/kitchen-granite-steel.jpg",
  kitchenGraniteWhite: "/images/granite/kitchen-granite-white.jpg",
  kitchenStoneCounters: "/images/granite/kitchen-stone-counters.jpg",

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
} as const;

export type ImageKey = keyof typeof img;
