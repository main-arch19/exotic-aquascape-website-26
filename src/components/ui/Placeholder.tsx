import { Camera } from "lucide-react";
import { cn } from "../../lib/cn";

/**
 * Watery gradient stand-in for real project photography.
 * When a real image `src` exists it renders that instead.
 * TODO: drop real photos in /public/images and pass `src`.
 */
const GRADIENTS = [
  "linear-gradient(150deg, #0a3d36 0%, #1b7a5a 55%, #3fb8af 120%)",
  "linear-gradient(160deg, #06302b 0%, #0e4a41 60%, #1f8a66 120%)",
  "linear-gradient(140deg, #0e4a41 0%, #3fb8af 90%, #8fd8d2 130%)",
  "linear-gradient(155deg, #06302b 0%, #1b7a5a 70%, #7cc4a9 130%)",
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
    return (
      <img
        src={src}
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
            "radial-gradient(60% 45% at 30% 20%, rgba(143,216,210,0.55), transparent 60%), radial-gradient(50% 40% at 75% 70%, rgba(63,184,175,0.45), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-sand/70">
        <Camera className="h-6 w-6" strokeWidth={1.4} />
        {label && <span className="px-4 text-center text-xs font-medium tracking-wide">{label}</span>}
      </div>
    </div>
  );
}
