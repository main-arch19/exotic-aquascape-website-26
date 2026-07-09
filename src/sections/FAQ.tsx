import { FAQ } from "../data";
import SectionHeading from "../components/ui/SectionHeading";
import Accordion from "../components/ui/Accordion";
import Reveal from "../components/motion/Reveal";

export default function FAQSection() {
  return (
    <section id="faq" className="bg-sand py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Questions"
          title="Answers from 16+ years in the water"
        />

        <Reveal delay={0.1} className="mt-14">
          <Accordion items={FAQ} />
        </Reveal>
      </div>
    </section>
  );
}
