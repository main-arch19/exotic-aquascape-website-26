/* ==================================================================
 * OPTIMIZED PHOTOS — auto-discovers real photography and generates
 * responsive WebP srcSet + JPG fallback at build time (vite-imagetools).
 *
 * Drop any new "*-real.jpg" into src/assets/images/{services,gallery}/
 * mirroring the public/images/... path used in data.ts — it is picked
 * up automatically, no code changes needed.
 * ================================================================== */

const srcSetModules = import.meta.glob<string>("../assets/images/**/*.jpg", {
  eager: true,
  import: "default",
  query: { w: "480;768;1200", format: "webp", as: "srcset" },
});

const fallbackModules = import.meta.glob<string>("../assets/images/**/*.jpg", {
  eager: true,
  import: "default",
  query: { w: "800", format: "jpg" },
});

export type OptimizedPhoto = { src: string; srcSet: string; sizes: string };

function toPublicPath(globKey: string): string {
  // "../assets/images/services/koi-ponds-real.jpg" -> "/images/services/koi-ponds-real.jpg"
  return globKey.replace("../assets/images", "/images");
}

const DEFAULT_SIZES = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

export const OPTIMIZED_PHOTOS: Record<string, OptimizedPhoto> = {};

for (const [key, srcSet] of Object.entries(srcSetModules)) {
  OPTIMIZED_PHOTOS[toPublicPath(key)] = {
    srcSet,
    src: fallbackModules[key] ?? srcSet.split(" ")[0],
    sizes: DEFAULT_SIZES,
  };
}
