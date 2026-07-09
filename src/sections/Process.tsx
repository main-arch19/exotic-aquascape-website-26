import { PROCESS } from "../data";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/motion/Reveal";

export default function Process() {
  return (
    <section id="process" className="bg-sand py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From consultation to completion"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={i} delay={i * 0.08} className="relative">
              {i < PROCESS.length - 1 && (
                <div className="absolute -right-3 top-8 hidden h-px w-6 bg-emerald/30 lg:block" />
              )}
              <div className="flex flex-col">
                <span className="font-display text-4xl text-koi/40">{p.step}</span>
                <h3 className="mt-3 font-display text-lg text-deep-water">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
