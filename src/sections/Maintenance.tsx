import { Check } from "lucide-react";
import { MAINTENANCE_PLANS } from "../data";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/motion/Reveal";
import Button from "../components/ui/Button";

export default function Maintenance() {
  return (
    <section id="maintenance" className="bg-sand py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Recurring care"
          title="Keep it thriving"
          subtitle="Your feature is built to last. Optional maintenance plans keep the water crystal-clear and everything healthy, year-round."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {MAINTENANCE_PLANS.map((plan, i) => (
            <Reveal
              key={plan.id}
              delay={i * 0.08}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                plan.featured
                  ? "border-koi bg-white shadow-xl shadow-koi/20"
                  : "border-deep-water/10 bg-white/60"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-koi px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl text-deep-water">{plan.name}</h3>
              <p className="mt-2 text-sm text-ink-400">{plan.best}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-3xl text-koi">{plan.price}</span>
                <span className="text-sm text-ink-600">{plan.cadence}</span>
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {plan.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-3 text-sm text-ink-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" /> {inc}
                  </li>
                ))}
              </ul>
              <Button
                href="#contact"
                variant={plan.featured ? "primary" : "outlineDark"}
                size="md"
                className="mt-6 w-full"
              >
                Learn more
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
