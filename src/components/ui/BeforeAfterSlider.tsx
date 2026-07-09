import { useState } from "react";
import type { ReactNode } from "react";
import { MoveHorizontal } from "lucide-react";

/** Accessible before/after comparison. Drag the handle or use arrow keys. */
export default function BeforeAfterSlider({
  before,
  after,
  className,
}: {
  before: ReactNode;
  after: ReactNode;
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  return (
    <div className={`relative overflow-hidden rounded-2xl select-none ${className ?? ""}`}>
      {/* After (base layer) */}
      <div className="absolute inset-0">{after}</div>
      <span className="absolute right-3 top-3 z-10 rounded-full bg-deep-water/70 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-sand backdrop-blur">
        After
      </span>

      {/* Before (clipped top layer) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {before}
        <span className="absolute left-3 top-3 rounded-full bg-deep-water/70 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-sand backdrop-blur">
          Before
        </span>
      </div>

      {/* Handle line */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-sand shadow-[0_0_0_1px_rgba(6,48,43,0.3)]"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sand text-deep-water shadow-lg">
          <MoveHorizontal className="h-4 w-4" />
        </span>
      </div>

      {/* Range input drives it — draggable + keyboard accessible */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        aria-label="Compare before and after"
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
      />
    </div>
  );
}
