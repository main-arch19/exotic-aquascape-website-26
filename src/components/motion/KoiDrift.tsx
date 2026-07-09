import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

/**
 * A koi silhouette that drifts across the hero as you scroll.
 * Decorative; falls back to a single static koi under reduced motion.
 */
export default function KoiDrift() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const x = useTransform(scrollYProgress, [0, 1], ["-12%", "115%"]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ["8%", "22%", "12%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-6, 4, -2]);

  const Koi = ({ className, style, w = 130 }: { className?: string; style?: React.CSSProperties; w?: number }) => (
    <svg
      width={w}
      viewBox="0 0 200 90"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden
    >
      {/* stylised koi: body + tail + fins */}
      <path d="M8 45c26-30 70-34 104-22 14 5 24 3 34-6 6-5 10-2 8 5-3 9-3 15 0 24 2 7-2 10-8 5-10-9-20-11-34-6C78 79 34 75 8 45Z" />
      <path d="M150 45c14-10 30-16 44-16-8 9-8 23 0 32-14 0-30-6-44-16Z" opacity="0.85" />
      <path d="M96 20c-4-10-2-16 6-18 2 8 1 14-6 18Z" opacity="0.7" />
      <path d="M96 70c-4 10-2 16 6 18 2-8 1-14-6-18Z" opacity="0.7" />
      <circle cx="42" cy="40" r="4" fill="#06302b" />
    </svg>
  );

  if (reduce) {
    return (
      <div aria-hidden className="pointer-events-none absolute right-[12%] top-1/3 text-koi/25">
        <Koi w={110} />
      </div>
    );
  }

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div style={{ x, y, rotate }} className="absolute top-0 text-koi/25 blur-[0.3px]">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Koi w={140} />
        </motion.div>
      </motion.div>
      {/* a smaller, slower companion koi */}
      <motion.div
        style={{ x: useTransform(scrollYProgress, [0, 1], ["108%", "-14%"]), y: "62%" }}
        className="absolute top-0 -scale-x-100 text-lagoon/20"
      >
        <Koi w={80} />
      </motion.div>
    </div>
  );
}
