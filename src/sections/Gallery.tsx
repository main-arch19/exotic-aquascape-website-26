import { useState, useMemo } from "react";
import { GALLERY, GALLERY_FILTERS, type GalleryCategory } from "../data";
import SectionHeading from "../components/ui/SectionHeading";
import Placeholder from "../components/ui/Placeholder";
import BeforeAfterSlider from "../components/ui/BeforeAfterSlider";
import Lightbox from "../components/ui/Lightbox";
import Reveal from "../components/motion/Reveal";

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? GALLERY : GALLERY.filter((item) => item.category === filter)),
    [filter],
  );

  return (
    <section id="portfolio" className="bg-sand py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our work"
          title="Cinematic craftsmanship"
          subtitle="Every feature is custom-designed and built. Here's where we've brought living water to life across Jamaica."
        />

        {/* Filter tabs */}
        <Reveal delay={0.1} className="mt-12 flex flex-wrap justify-center gap-2">
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                filter === f.value
                  ? "bg-emerald text-white shadow-lg shadow-emerald/30"
                  : "border border-deep-water/15 text-deep-water hover:border-emerald hover:text-emerald"
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        {/* Masonry grid */}
        <Reveal delay={0.15} className="mt-12">
          <div className="grid auto-rows-[300px] gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[320px]">
            {filtered.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setLightboxIndex(filtered.indexOf(item))}
                className={`group relative overflow-hidden rounded-2xl transition-transform duration-500 hover:z-20 hover:scale-[1.02] ${
                  item.tall ? "lg:col-span-1 lg:row-span-2" : ""
                }`}
              >
                {item.beforeSrc !== undefined && item.afterSrc !== undefined ? (
                  <BeforeAfterSlider
                    before={
                      <Placeholder
                        src={item.beforeSrc || undefined}
                        label="Before"
                        rounded="rounded-none"
                      />
                    }
                    after={
                      <Placeholder
                        src={item.afterSrc || undefined}
                        label="After"
                        rounded="rounded-none"
                      />
                    }
                    className="h-full w-full"
                  />
                ) : (
                  <Placeholder
                    src={item.src}
                    label={item.title}
                    seed={i}
                    rounded="rounded-none"
                    className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 grid place-items-center bg-gradient-to-b from-transparent to-deep-water/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="text-center">
                    <h3 className="font-display text-xl text-sand">{item.title}</h3>
                    <p className="text-sm text-sand/70">{item.location}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Reveal>

        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      </div>
    </section>
  );
}
