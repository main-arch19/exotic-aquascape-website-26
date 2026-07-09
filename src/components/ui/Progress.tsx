import { motion } from "motion/react";

/** Slim progress bar for the quiz. `value` is 0..1. */
export default function Progress({ value }: { value: number }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-deep-water/10">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-emerald to-lagoon"
        initial={false}
        animate={{ width: `${Math.round(Math.min(1, Math.max(0, value)) * 100)}%` }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
