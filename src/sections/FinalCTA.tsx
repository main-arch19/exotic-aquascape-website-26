import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { BRAND } from "../data";
import Button from "../components/ui/Button";
import Reveal from "../components/motion/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-deep-water py-20 sm:py-28">
      {/* Background motion */}
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          background:
            "radial-gradient(120% 100% at 50% 50%, rgba(21,159,218,0.2), transparent 60%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-5xl text-sand sm:text-6xl">Ready to talk?</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-sand/70">
            Let's discuss your vision. No pressure, no obligation — just helpful advice from aquascaping experts.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Button href="#quiz" variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Take the quiz
          </Button>
          <Button href={`tel:${BRAND.phoneTel}`} variant="outlineLight" size="lg" icon={<Phone className="h-4 w-4" />}>
            {BRAND.phoneDisplay}
          </Button>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-sm text-sand/50">
            Response within 1–2 business days. Island-wide consultations.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
