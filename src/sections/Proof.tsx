import { Star } from "lucide-react";
import { TESTIMONIALS, HOSPITALITY_CLIENTS } from "../data";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/motion/Reveal";

export default function Proof() {
  return (
    <section id="proof" className="bg-deep-water py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Trusted by"
          title="Homes, hotels & commercial spaces"
          subtitle="Here's what our clients say about the experience and the outcome."
          tone="light"
        />

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className="flex flex-col rounded-2xl border border-sand/10 bg-sand/5 p-6 backdrop-blur"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-koi text-koi" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-sand/80">"{t.quote}"</p>
              <div className="mt-6 border-t border-sand/10 pt-4">
                <p className="font-medium text-sand">{t.name}</p>
                {t.role && <p className="text-xs text-sand/60">{t.role}</p>}
                <p className="text-xs text-sand/50">{t.location}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Client logos */}
        <Reveal delay={0.35} className="mt-16 border-t border-sand/10 pt-12">
          <p className="text-center text-xs uppercase tracking-widest text-sand/50">As featured in</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {HOSPITALITY_CLIENTS.map((c) => (
              <div key={c} className="text-center">
                <p className="font-medium text-sand/70">{c}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
