import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "motion/react";

/** Mounts Lenis smooth scroll (with anchor offset for the sticky nav). Skipped under reduced motion. */
export default function SmoothScroll() {
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const lenis = new Lenis({
      lerp: 0.11,
      anchors: { offset: -96 },
    });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [reduce]);
  return null;
}
