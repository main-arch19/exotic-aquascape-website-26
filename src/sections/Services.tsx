import { Fish, Droplets, Flower2, Sparkles, ArrowUpRight, Check, Home, Palette, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SERVICES, AUDIENCES, BRAND, type Service } from "../data";
import SectionHeading from "../components/ui/SectionHeading";
import Placeholder from "../components/ui/Placeholder";
import Reveal from "../components/motion/Reveal";

const ICONS: Record<Service["icon"], LucideIcon> = {
  fish: Fish,
  droplets: Droplets,
  flower: Flower2,
  sparkles: Sparkles,
};

const AUDIENCE_ICONS = [Home, Palette, Building2];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = ICONS[service.icon];
  return (
    <Reveal delay={index * 0.08} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-deep-water/10 bg-white/70 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-deep-water/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Placeholder label={service.name} seed={index} rounded="rounded-none" className="transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-xl bg-deep-water/70 text-lagoon backdrop-blur">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald">{service.eyebrow}</p>
        <h3 className="mt-1.5 font-display text-2xl text-deep-water">{service.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-600">{service.description}</p>
        <ul className="mt-4 space-y-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-ink-600">
              <Check className="h-4 w-4 shrink-0 text-lagoon" /> {f}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-end justify-between border-t border-deep-water/10 pt-4">
          <div>
            <p className="text-xs text-ink-400">Starting from</p>
            <p className="font-display text-xl text-deep-water">
              {BRAND.currencySymbol}
              {service.priceFrom}
            </p>
          </div>
          <a
            href="#quiz"
            className="inline-flex items-center gap-1 text-sm font-medium text-emerald transition-colors hover:text-koi"
          >
            Explore <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-sand py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What we build"
          title="Four ways to bring water to life"
          subtitle="Every feature is custom-designed for your space, style and budget — with transparent starting prices, so there are no surprises."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

        {/* Audience lanes */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {AUDIENCES.map((a, i) => {
            const Icon = AUDIENCE_ICONS[i];
            return (
              <Reveal key={a.title} delay={i * 0.08} className="flex items-start gap-4 rounded-2xl border border-deep-water/10 bg-white/40 p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald/10 text-emerald">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg text-deep-water">{a.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{a.copy}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
