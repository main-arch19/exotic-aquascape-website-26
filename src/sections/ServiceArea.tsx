import { MapPin } from "lucide-react";
import { PARISHES, BRAND } from "../data";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/motion/Reveal";

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-deep-water py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Where we work"
          title="All-island Jamaica"
          subtitle={`Proudly serving all 14 parishes since ${BRAND.since}.`}
          tone="light"
        />

        <Reveal delay={0.1} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-7">
          {PARISHES.map((p) => (
            <div
              key={p}
              className="flex items-center gap-2 rounded-xl border border-sand/10 bg-sand/5 px-4 py-3 text-center backdrop-blur"
            >
              <MapPin className="h-4 w-4 shrink-0 text-lagoon" />
              <span className="text-sm font-medium text-sand">{p}</span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.2} className="mt-12 rounded-2xl border border-sand/10 bg-sand/5 p-8 backdrop-blur text-center">
          <p className="text-sand/70">
            No matter which parish, we make site visits and deliver custom work island-wide. Let's talk about your location.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
