import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronDown, ShieldCheck, MapPin, CalendarCheck } from "lucide-react";
import { BRAND } from "../data";
import { useMousePosition } from "../hooks";
import Button from "../components/ui/Button";
import Caustics from "../components/motion/Caustics";
import Bubbles from "../components/motion/Bubbles";
import KoiDrift from "../components/motion/KoiDrift";

// TODO: add an ambient water clip at /videos/ambient-water.mp4 (muted, looping,
// ~8s, compressed) for the cinematic hero. Leave empty to use the layered CSS motion.
const HERO_VIDEO_SRC = "";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const mouse = useMousePosition();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-deep-water text-sand grain"
    >
      {/* Base water gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 20% 0%, #1a4560 0%, #0b2430 55%, #040d13 100%)",
        }}
      />

      {/* Optional ambient video */}
      {HERO_VIDEO_SRC && !reduce && (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          poster="/logo.jpeg"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      )}

      {/* Motion layers */}
      <Caustics />
      <KoiDrift />
      <Bubbles />

      {/* Parallax light orb */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(21,159,218,0.5), transparent 65%)",
          transform: `translate3d(calc(-50% + ${mouse.x * 22}px), ${mouse.y * 18}px, 0)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-24 sm:px-6">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-sand/20 bg-sand/5 px-4 py-1.5 text-xs font-medium tracking-wide text-lagoon backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-koi" />
            Aquascaping &amp; landscape craft · Jamaica · since {BRAND.since}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl leading-[0.98] text-sand sm:text-7xl lg:text-8xl"
          >
            We build
            <br />
            <span className="italic text-lagoon">living water.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl text-lg leading-relaxed text-sand/75">
            Custom koi ponds, fountains, water gardens and planted living-art aquariums —
            designed for tranquility, built to last. For homes, hotels and commercial spaces
            across Jamaica.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#quiz" variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              Take the free quiz
            </Button>
            <Button href="#portfolio" variant="outlineLight" size="lg">
              See our work
            </Button>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-sand/60"
          >
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-lagoon" /> No pressure, no obligation
            </li>
            <li className="flex items-center gap-2">
              <CalendarCheck className="h-4 w-4 text-lagoon" /> {BRAND.consultOffer}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-lagoon" /> Island-wide
            </li>
          </motion.ul>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-sand/50"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-deep-water" />
    </section>
  );
}
