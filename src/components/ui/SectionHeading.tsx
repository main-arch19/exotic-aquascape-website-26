import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import Reveal from "../motion/Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className,
}: Props) {
  const onDark = tone === "light"; // light text used on dark backgrounds
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <p
            className={cn(
              "mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em]",
              onDark ? "text-lagoon" : "text-emerald",
            )}
          >
            <span className={cn("h-px w-6", onDark ? "bg-lagoon/60" : "bg-emerald/50")} />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "font-display text-4xl leading-[1.05] sm:text-5xl",
            onDark ? "text-sand" : "text-deep-water",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed",
              onDark ? "text-sand/70" : "text-ink-600",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
