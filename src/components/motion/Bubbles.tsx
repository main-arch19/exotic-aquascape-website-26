import { useMemo } from "react";
import { useReducedMotion } from "motion/react";

/** Gentle rising bubbles. Purely decorative; disabled under reduced motion. */
export default function Bubbles({ count = 18 }: { count?: number }) {
  const reduce = useReducedMotion();
  const bubbles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        // deterministic pseudo-random so SSR/rerenders are stable
        const r = (n: number) => ((Math.sin(i * 999.13 + n) + 1) / 2);
        const size = 4 + r(1) * 16;
        return {
          left: r(2) * 100,
          size,
          duration: 12 + r(3) * 14,
          delay: -r(4) * 20,
          opacity: 0.12 + r(5) * 0.28,
          drift: (r(6) - 0.5) * 60,
        };
      }),
    [count],
  );

  if (reduce) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="absolute bottom-[-40px] rounded-full animate-rise"
          style={
            {
              left: `${b.left}%`,
              width: b.size,
              height: b.size,
              background:
                "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.9), rgba(143,212,239,0.35) 45%, rgba(21,159,218,0.05) 70%)",
              boxShadow: "inset 0 0 4px rgba(255,255,255,0.4)",
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
              ["--bubble-opacity" as string]: b.opacity,
              ["--bubble-drift" as string]: `${b.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
