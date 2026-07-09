import { Phone, Instagram, Leaf } from "lucide-react";
import { BRAND } from "../data";

export default function AnnouncementBar() {
  return (
    <div className="relative z-40 bg-deep-water text-sand/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6">
        <p className="flex items-center gap-2 truncate">
          <Leaf className="h-3.5 w-3.5 shrink-0 text-lagoon" />
          <span className="truncate">
            <span className="hidden sm:inline">Dry season is the perfect time to build — </span>
            book a free on-site consultation.
          </span>
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${BRAND.phoneTel}`}
            className="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-sand"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>{BRAND.phoneDisplay}</span>
          </a>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-sand"
            aria-label="Instagram"
          >
            <Instagram className="h-3.5 w-3.5" />
            <span className="hidden md:inline">{BRAND.igHandle}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
