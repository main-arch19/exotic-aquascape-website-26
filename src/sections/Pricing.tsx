import { SERVICES, PRICING_NOTE, PRICING_DRIVERS, CONSULT_CREDIT, BRAND } from "../data";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/motion/Reveal";
import Button from "../components/ui/Button";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-deep-water-800 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Investment"
          title="Transparent starting prices"
          subtitle={PRICING_NOTE}
          tone="light"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08} className="flex flex-col rounded-2xl border border-sand/10 bg-deep-water/50 p-6 backdrop-blur">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-lagoon">{s.eyebrow}</p>
                <h3 className="mt-2 font-display text-xl text-sand">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand/60">{s.description}</p>
              </div>
              <div className="mt-8 border-t border-sand/10 pt-6">
                <p className="text-xs text-sand/50">Starting from</p>
                <div className="mt-1 font-display text-3xl text-koi">
                  {BRAND.currencySymbol}
                  {s.priceFrom}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* What drives cost */}
        <Reveal delay={0.3} className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl text-sand">What shapes the cost</h3>
            <ul className="mt-6 space-y-3">
              {PRICING_DRIVERS.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sand/70">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-lagoon shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl text-sand">Next steps</h3>
            <p className="mt-6 text-sand/75">{CONSULT_CREDIT}</p>
            <div className="mt-6 flex flex-col gap-3">
              <Button href="#quiz" variant="primary" size="lg">
                Start the quiz
              </Button>
              <Button href="#contact" variant="outlineLight" size="lg">
                Let's talk directly
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
