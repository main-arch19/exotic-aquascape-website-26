/** Slow-drifting caustic light layer for dark water sections. CSS-only (reduced-motion handled globally). */
export default function Caustics({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute -inset-[15%] animate-caustics opacity-60 mix-blend-screen"
        style={{
          background:
            "radial-gradient(45% 35% at 25% 20%, rgba(21,159,218,0.45), transparent 60%), radial-gradient(40% 30% at 70% 30%, rgba(143,212,239,0.35), transparent 60%), radial-gradient(50% 40% at 55% 80%, rgba(47,168,79,0.4), transparent 65%)",
          filter: "blur(20px)",
        }}
      />
      <div
        className="absolute -inset-[15%] animate-caustics opacity-40 mix-blend-screen [animation-delay:-9s] [animation-duration:32s]"
        style={{
          background:
            "radial-gradient(35% 30% at 80% 60%, rgba(21,159,218,0.5), transparent 60%), radial-gradient(30% 25% at 15% 70%, rgba(143,212,239,0.4), transparent 60%)",
          filter: "blur(28px)",
        }}
      />
    </div>
  );
}
