import { Camera } from "lucide-react";
import { cn } from "../../lib/cn";
import { OPTIMIZED_PHOTOS } from "../../lib/optimizedImages";

/**
 * Watery gradient stand-in for real project photography.
 * When a real image `src` exists it renders that instead — real photos
 * (src/assets/images/**\/*.jpg) automatically get a responsive WebP
 * srcSet via vite-imagetools; anything else (SVGs) renders as a plain img.
 */
const GRADIENTS = [
  "linear-gradient(150deg, #123245 0%, #2fa84f 55%, #159fda 120%)",
  "linear-gradient(160deg, #0b2430 0%, #1a4560 60%, #24893f 120%)",
  "linear-gradient(140deg, #1a4560 0%, #159fda 90%, #8fd4ef 130%)",
  "linear-gradient(155deg, #0b2430 0%, #2fa84f 70%, #8fd4a3 130%)",
];

type Props = {
  src?: string;
  alt?: string;
  label?: string;
  seed?: number;
  className?: string;
  rounded?: string;
};

export default function Placeholder({
  src,
  alt = "",
  label,
  seed = 0,
  className,
  rounded = "rounded-2xl",
}: Props) {
  if (src) {
    const optimized = OPTIMIZED_PHOTOS[src];
    return (
      <img
        src={optimized?.src ?? src}
        srcSet={optimized?.srcSet}
        sizes={optimized?.sizes}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn("h-full w-full object-cover", rounded, className)}
      />
    );
  }
  const bg = GRADIENTS[seed % GRADIENTS.length];
  return (
    <div
      role="img"
      aria-label={alt || label || "Project photo placeholder"}
      className={cn("relative h-full w-full overflow-hidden grain", rounded, className)}
      style={{ background: bg }}
    >
      {/* caustic light sheen */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen animate-caustics"
        style={{
          background:
            "radial-gradient(60% 45% at 30% 20%, rgba(143,212,239,0.55), transparent 60%), radial-gradient(50% 40% at 75% 70%, rgba(21,159,218,0.45), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-sand/70">
        <Camera className="h-6 w-6" strokeWidth={1.4} />
        {label && <span className="px-4 text-center text-xs font-medium tracking-wide">{label}</span>}
      </div>
    </div>
  );
}
