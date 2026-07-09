# Exotic Aquascape Brand Guidelines

**Brand Name:** Exotic Aquascape & Landscape Contractors  
**Tagline:** The Outdoor Specialist  
**Established:** 2008  
**Service Area:** All-island Jamaica  

---

## Brand Promise

We build living water — custom koi ponds, fountains, water gardens, and planted "living art" aquariums that transform space into tranquil, thriving ecosystems.

---

## Logo

![Exotic Aquascape Logo](/public/logo.jpeg)

The logo combines four distinct visual elements:
- **Koi silhouette** — black, representing the craft and attention to detail
- **Tropical flower** — magenta petals with purple/violet center and gold stamen, symbolizing growth and natural beauty
- **Green reeds/leaf** — representing planted ecosystems and organic life
- **Water swoosh** (bright blue) — forming the "A" in Aquascape, representing fluidity and movement

---

## Color Palette

Extracted directly from the logo for brand consistency:

| Role | Hex | RGB | Usage | Tailwind Token |
|------|-----|-----|-------|------------------|
| **Koi Black** | `#0B0B0C` | 11, 11, 12 | Primary dark text, silhouettes | `--color-ink` |
| **Water Blue** | `#159FDA` | 21, 159, 218 | Links, accents, water elements, motion | `--color-lagoon` |
| **Leaf Green** | `#2FA84F` | 47, 168, 79 | Plant/nature elements, primary brand color | `--color-emerald` |
| **Koi Red** | `#E12F44` | 225, 47, 68 | **CTAs only** — buttons, action links | `--color-koi` |
| **Violet Bloom** | `#7B3FA6` | 123, 63, 166 | Rare accent (badges, highlights) | `--color-bloom` |
| **Sunbeam Yellow** | `#F0C400` | 240, 196, 0 | Rare highlight (eye, sparkle) | `--color-sunbeam` |
| **Soft Sand** | `#F5F1E8` | 245, 241, 232 | Light backgrounds, off-white | `--color-sand` |

### Color Usage Rules

- **Koi Red** (`#E12F44`): Reserved exclusively for call-to-action buttons and action links. Never use as a background for large sections.
- **Water Blue** (`#159FDA`): Primary accent for links, highlights, and water-motion elements. Generates calm, aquatic feeling.
- **Leaf Green** (`#2FA84F`): Primary brand green, used for section accents and plant imagery. Conveys growth and natural life.
- **Violet & Yellow**: Rare, tertiary accents only — never as section backgrounds. Use sparingly for icons, badges, or single-point highlights (e.g., a fish's eye).
- **Koi Black** & **Soft Sand**: Frame and background usage. Dark text on light, light text on dark.

---

## Typography

### Serif — Headline Font

**Fraunces Variable**  
- Origin: Free, open-source (Google Fonts)
- Weight: Variable (200–900)
- Use: All headlines, section titles, branding text
- Rationale: Organic, crafted feel; reads as "living art" and premium hand-built work

### Sans-Serif — Body Font

**Inter Variable**  
- Origin: Free, open-source (Google Fonts)
- Weight: Variable (100–900)
- Use: Body text, UI labels, navigation, form inputs
- Rationale: Clean readability; pairs with Fraunces for elegant, uncluttered layouts

### Hierarchy

- **H1 (Hero/Hero text):** Fraunces 60–80px, bold or extra-bold, brand green or koi red
- **H2 (Section headers):** Fraunces 42–48px, semi-bold, deep-water or brand green
- **H3 (Subsection):** Fraunces 28–32px, medium, brand green
- **H4 (Card titles):** Fraunces 20–24px, medium, deep-water
- **Body / Paragraph:** Inter 16–18px, regular, ink (near-black)
- **Small text / Captions:** Inter 12–14px, regular, ink-600 (mid-tone gray)
- **UI labels / Buttons:** Inter 14–16px, medium/semi-bold, white or ink

---

## Voice & Tone

### Brand Voice

**Calm, Sensory, Confident**

- **Calm:** Language is tranquil and reassuring. Avoid aggressive sales language.
- **Sensory:** Emphasize what the client will *experience* — the sound of water, the sight of koi, the feel of a living ecosystem.
- **Confident:** We are experts. We've built 500+ features across Jamaica since 2008. Tone is assured without being boastful.

### Writing Examples

✅ **Good (brief, tactile, confident):**
- "We build living water."
- "Crystal-clear water, thriving koi, zero fuss."
- "A fountain that makes you smile every time you walk in."

❌ **Avoid (salesy, generic, unclear):**
- "Aquatic installation solutions for homeowners and businesses."
- "Our cutting-edge water-feature technology will transform your property value."
- "We provide comprehensive ecosystem management services."

---

## Imagery Style

### Photography

- **Real project photos** (primary): Use high-quality photos of completed installations, showing water in motion, koi/plants thriving, and people enjoying the features.
- **Before/after sliders**: Showcase transformation. "Before" is usually bare earth or plain space; "after" is the thriving installation.
- **Lifestyle moments**: Clients actually using and enjoying the features — sitting beside a pond, watching koi, relaxing near a fountain.

### Illustration (Current)

While we build toward a photography-first brand, the site currently uses **custom SVG illustrations** styled in the brand palette:
- Cohesive visual system using shared motifs (water, plants, koi, stone)
- Reusable components recomposed per scene (water-band gradient, lily pads, koi silhouettes, rockwork)
- Color-consistent with the palette above
- Completely replaceable with real photography (no code changes required)

### Imagery Rules

- **No stock photos.** All imagery should feel authentic to the brand and the Jamaican context.
- **Water is a star.** Use photos/illustrations that showcase water in motion — flowing, clear, thriving.
- **Show life.** Include plants, koi, wildlife thriving in the features. Empty ponds feel sad.
- **Natural lighting.** Prefer daylight or warm, natural-feeling lighting. Avoid harsh studio lights.

---

## Motion & Animation

### Philosophy

Motion reinforces calm and tranquility. Animations guide the eye toward calls to action without distraction.

### Principles

- **Easing:** Use ease-out curves (slow-start, fast-end). Never bouncy or aggressive.
- **Duration:** 200–600ms for micro-interactions, 1–3s for scroll reveals.
- **Reduced motion:** Always respect `prefers-reduced-motion: reduce`. Disable ambient animation for users who request it.
- **Restraint:** One signature motion per page section. Too much animation feels chaotic.

### Signature Hero Motion

The hero features ambient water-like motion:
- Drifting caustic light (slow 24s loop)
- Rising bubble particles (staggered 14s loops)
- Subtle parallax on the hero image
- Optional: koi silhouette drifting across on scroll

This is the single most distinctive visual element on the page — every competitor should wish they had it.

---

## Accessibility

- **Contrast:** All text meets WCAG AA standard (4.5:1 for body, 3:1 for large text).
- **Color dependency:** Never convey information with color alone. Use text labels, icons, or patterns.
- **Keyboard navigation:** All interactive elements must be navigable via keyboard (tab, enter, arrow keys).
- **Reduced motion:** All animation respects `prefers-reduced-motion` system setting.
- **Alt text:** Every image has descriptive alt text, especially project photos.

---

## Components & Patterns

### Buttons

- **Primary (CTA):** Koi Red background (`#E12F44`), white text, pill-shaped, 12–16px padding
- **Secondary:** Deep-water outline, ink text, pill-shaped
- **Hover state:** Lift slightly (-2px translate), deepen shadow
- **Focus state:** 2px lagoon outline, 3px offset

### Cards

- White or translucent white background (`bg-white/70`)
- Soft shadow, rounded corners (16px)
- Hover: lift on scroll reveal, deepen shadow

### Links

- Inherit text color, underline on hover (lagoon blue)
- No color alone — always include underline or icon for clarity

### Form Inputs

- 12px rounded corners
- Emerald border on focus
- Generous padding (12px + 16px horizontal)
- Light, readable placeholder text

---

## File Structure (Design Assets)

All visual assets live in:

```
public/
  logo.jpeg                          # Primary brand mark
  images/
    services/
      koi-ponds.svg                  # Service card illustrations
      fountains.svg
      water-gardens.svg
      aquariums.svg
    gallery/
      g1-before.svg, g1-after.svg    # Before/after pair
      g2.svg ... g9.svg              # Single-image gallery pieces
    living-art.svg                   # Large feature aquarium
```

---

## Quick Reference

| Element | Token / Value | Note |
|---------|---|---|
| Primary Accent | `#2FA84F` (emerald) | Green from logo |
| Action CTA | `#E12F44` (koi red) | Warm, high-contrast |
| Link / Motion | `#159FDA` (water blue) | Lagoon, calm |
| Dark Section Base | `#0B2430` (deep water) | Hero, dark sections |
| Light Background | `#F5F1E8` (sand) | Off-white, warm |
| Display Font | Fraunces Variable | Serif, warm, organic |
| Body Font | Inter Variable | Sans, clean, readable |
| Responsive breakpoint | 640px (sm) | Mobile-first |
| Motion default | ease-out, 300–500ms | Calm, not bouncy |

---

## Support

For questions about brand implementation, color specifications, or imagery guidelines, contact the design and product team. This guide is living — update it when brand decisions change.

**Last updated:** July 2026
