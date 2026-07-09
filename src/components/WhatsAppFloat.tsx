import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { BRAND } from "../data";

/** Floating WhatsApp click-to-chat — table stakes for the Jamaica market. */
export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [bubble, setBubble] = useState(false);
  const href = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappText)}`;

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = setTimeout(() => setBubble(true), 3500);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-5 right-5 z-50 flex items-end gap-3 sm:bottom-7 sm:right-7"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <AnimatePresence>
            {bubble && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="mb-1 hidden max-w-[220px] items-center gap-2 rounded-2xl rounded-br-sm bg-white px-4 py-2.5 text-sm text-deep-water shadow-xl sm:flex"
              >
                <span>Chat with us on WhatsApp 🌿</span>
                <button onClick={() => setBubble(false)} aria-label="Dismiss" className="text-ink-400 hover:text-deep-water">
                  <X className="h-3.5 w-3.5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lagoon"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
            <MessageCircle className="relative h-7 w-7" fill="currentColor" strokeWidth={0} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
