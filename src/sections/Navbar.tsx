import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { BRAND, NAV_LINKS } from "../data";
import { useScrolled, useBodyScrollLock } from "../hooks";
import { cn } from "../lib/cn";
import Button from "../components/ui/Button";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <a href="#top" onClick={onClick} className="flex items-center gap-2.5" aria-label={BRAND.name}>
      <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-sand p-1 shadow-sm">
        <img src="/logo.jpeg" alt="" className="h-full w-full object-contain" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg tracking-tight text-sand">Exotic Aquascape</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-lagoon">The Outdoor Specialist</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  useBodyScrollLock(open);

  return (
    <nav
      className={cn(
        "transition-all duration-500",
        scrolled ? "bg-deep-water/85 backdrop-blur-md border-b border-sand/10 shadow-lg shadow-deep-water/20" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-sand/75 transition-colors hover:text-sand"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button href="#quiz" variant="primary" size="md" className="hidden sm:inline-flex">
            Take the quiz
          </Button>
          <button
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-lg text-sand lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-deep-water lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-16 items-center justify-between px-4 sm:px-6">
              <Logo onClick={() => setOpen(false)} />
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-lg text-sand"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.div
              className="flex flex-col gap-1 px-6 pt-6"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
            >
              {NAV_LINKS.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}
                  className="border-b border-sand/10 py-4 font-display text-2xl text-sand"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-8 flex flex-col gap-3">
                <Button href="#quiz" variant="primary" size="lg" onClick={() => setOpen(false)}>
                  Take the free quiz
                </Button>
                <Button href={`tel:${BRAND.phoneTel}`} variant="outlineLight" size="lg" icon={<Phone className="h-4 w-4" />}>
                  {BRAND.phoneDisplay}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
