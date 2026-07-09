import { Sparkles } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import Placeholder from "../components/ui/Placeholder";
import Reveal from "../components/motion/Reveal";
import Button from "../components/ui/Button";

export default function LivingArt() {
  return (
    <section id="living-art" className="bg-deep-water py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="A category we own"
          title={'Planted "Living Art" Aquariums'}
          subtitle="Bespoke aquascaped aquariums designed as living art — for the home, the studio, or a hotel lobby that people photograph and remember."
          tone="light"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <div className="space-y-6 text-sand/75">
              <p className="text-lg leading-relaxed">
                An aquascaped aquarium is more than a fish tank — it's a living composition. Carefully selected plants, wood, stone and water create a miniature ecosystem that calms the space and draws the eye.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're looking for a centerpiece for your living room, a signature feature for your office, or a memorable installation for a hotel lobby, we design and maintain every detail.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  "Bespoke aquascape design tailored to your space",
                  "Full installation with premium plants & aquascaping materials",
                  "Complete maintenance packages — we keep it thriving",
                  "Educational follow-up so you understand the ecosystem",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-lagoon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Button href="#quiz" variant="primary" size="lg">
                  Design your aquarium
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="aspect-[4/3] lg:aspect-auto">
            <Placeholder label="Living Art Aquarium" seed={3} className="h-full rounded-2xl" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
