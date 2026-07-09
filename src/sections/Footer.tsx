import { Phone, Mail, Instagram, Facebook, MessageCircle, MapPin } from "lucide-react";
import { BRAND, NAV_LINKS, SERVICES, PARISHES } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();
  const waHref = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappText)}`;

  return (
    <footer className="bg-deep-water text-sand/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-sand p-1">
                <img src="/logo.jpeg" alt="" className="h-full w-full object-contain" />
              </span>
              <span className="font-display text-lg text-sand">Exotic Aquascape</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Family-run since {BRAND.since}. We design and build living water — koi ponds, fountains,
              water gardens and living-art aquariums — across Jamaica.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-sand/15 transition-colors hover:border-lagoon hover:text-lagoon">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={BRAND.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-sand/15 transition-colors hover:border-lagoon hover:text-lagoon">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={waHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-sand/15 transition-colors hover:border-lagoon hover:text-lagoon">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-sand">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-sand">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sand">What we build</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="transition-colors hover:text-sand">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sand">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`tel:${BRAND.phoneTel}`} className="flex items-center gap-2.5 transition-colors hover:text-sand">
                  <Phone className="h-4 w-4 text-lagoon" /> {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2.5 transition-colors hover:text-sand">
                  <Mail className="h-4 w-4 text-lagoon" /> {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lagoon" /> {BRAND.serviceArea}
              </li>
            </ul>
          </div>
        </div>

        {/* Service area for local SEO */}
        <div className="mt-14 border-t border-sand/10 pt-8">
          <p className="text-xs uppercase tracking-[0.18em] text-sand/40">Proudly serving all 14 parishes</p>
          <p className="mt-3 text-sm leading-relaxed text-sand/55">{PARISHES.join(" · ")}</p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-sand/10 pt-8 text-xs text-sand/40 sm:flex-row sm:items-center">
          <p>
            © {year} {BRAND.fullName}. Family-owned since {BRAND.since}.
          </p>
          <p>Built to showcase living water.</p>
        </div>
      </div>
    </footer>
  );
}
