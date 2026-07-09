import { STATS, type Stat } from "../data";
import { useCountUp } from "../hooks";
import Reveal from "../components/motion/Reveal";

function StatItem({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className="text-center">
      <div className="font-display text-4xl text-sand sm:text-5xl">
        {stat.prefix}
        <span ref={ref}>{value.toLocaleString()}</span>
        {stat.suffix}
      </div>
      <p className="mt-2 text-sm text-sand/55">{stat.label}</p>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className="relative border-y border-sand/10 bg-deep-water-800 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <StatItem key={s.label} stat={s} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
