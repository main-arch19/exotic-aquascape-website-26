import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useBodyScrollLock } from "../../hooks";
import type { GalleryItem } from "../../data";
import Placeholder from "./Placeholder";
import BeforeAfterSlider from "./BeforeAfterSlider";

type Props = {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
};

export default function Lightbox({ items, index, onClose, onNavigate }: Props) {
  const open = index !== null;
  useBodyScrollLock(open);

  const go = useCallback(
    (dir: number) => {
      if (index === null) return;
      onNavigate((index + dir + items.length) % items.length);
    },
    [index, items.length, onNavigate],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, go]);

  const item = index !== null ? items[index] : null;
  const hasBeforeAfter = item?.beforeSrc !== undefined && item?.afterSrc !== undefined;

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-deep-water/95 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-sand/10 text-sand transition-colors hover:bg-sand/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-sand/10 text-sand transition-colors hover:bg-sand/20 sm:left-6"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-sand/10 text-sand transition-colors hover:bg-sand/20 sm:right-6"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <motion.figure
            key={item.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl">
              {hasBeforeAfter ? (
                <BeforeAfterSlider
                  className="h-full w-full"
                  before={<Placeholder src={item.beforeSrc || undefined} label="Before" seed={2} rounded="rounded-none" />}
                  after={<Placeholder src={item.afterSrc || undefined} label="After" seed={0} rounded="rounded-none" />}
                />
              ) : (
                <Placeholder src={item.src} label={item.title} seed={index ?? 0} rounded="rounded-none" />
              )}
            </div>
            <figcaption className="mt-4 flex items-center justify-between text-sand">
              <span className="font-display text-lg">{item.title}</span>
              <span className="text-sm text-sand/60">{item.location}</span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
