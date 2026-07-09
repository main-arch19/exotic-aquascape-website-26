/* ==================================================================
 * EXOTIC AQUASCAPE — CONTENT
 * Edit this file to update copy, prices, services, testimonials, FAQ.
 * Lines marked `TODO` need real client-supplied values before launch.
 * ================================================================== */

export const BRAND = {
  name: "Exotic Aquascape",
  fullName: "Exotic Aquascape & Landscape Contractors",
  tagline: "The Outdoor Specialist",
  promise: "We build living water.",
  since: 2008,
  serviceArea: "All-island Jamaica",
  consultOffer: "Free on-site consultation",

  // Contact — confirmed vs TODO
  phoneDisplay: "(876) 869-4080",
  phoneTel: "+18768694080",
  whatsapp: "18768694080", // wa.me digits
  whatsappText: "Hi Exotic Aquascape, I'd like a quote for a water feature.",
  email: "hello@exoticaquascape.com", // TODO: confirm real email
  addressLine: "Serving homes, hotels & commercial properties island-wide", // TODO: HQ parish/address
  hours: "Mon–Sat, 8:00am – 5:00pm", // TODO: confirm hours

  instagram: "https://instagram.com/exoticaquascape",
  igHandle: "@exoticaquascape",
  facebook: "#", // TODO: real Facebook URL

  // Currency for all displayed prices. TODO: confirm JMD vs USD.
  currency: "USD",
  currencySymbol: "$",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Living Art", href: "#living-art" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Maintenance", href: "#maintenance" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

/* ------------------------------------------------------------------ */
/* SERVICES                                                            */
/* ------------------------------------------------------------------ */
export type Service = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  priceFrom: string; // TODO: confirm figures & currency
  icon: "fish" | "droplets" | "flower" | "sparkles";
  features: string[];
  galleryFilter: GalleryCategory;
  image: string; // SVG path
};

export const SERVICES: Service[] = [
  {
    id: "koi-ponds",
    name: "Koi Ponds",
    eyebrow: "Self-sustaining ecosystems",
    description:
      "Crystal-clear, low-maintenance ecosystem ponds where koi thrive and the water balances itself. The centrepiece your garden has been missing.",
    priceFrom: "9,995", // TODO
    icon: "fish",
    features: ["Balanced ecosystem", "Crystal-clear water", "Healthy koi & fish", "Low upkeep"],
    galleryFilter: "koi-ponds",
    image: "/images/services/koi-ponds.svg",
  },
  {
    id: "fountains",
    name: "Fountains",
    eyebrow: "The sound of moving water",
    description:
      "Bubbling rocks, urns and basalt columns — compact, safe and near-maintenance-free. The calm of running water for patios, entrances and courtyards.",
    priceFrom: "2,495", // TODO
    icon: "droplets",
    features: ["Compact footprint", "Family-safe (no standing water)", "Quick install", "Minimal upkeep"],
    galleryFilter: "fountains",
    image: "/images/services/fountains-real.jpg",
  },
  {
    id: "water-gardens",
    name: "Water Gardens",
    eyebrow: "Planted & alive",
    description:
      "Lush aquatic plantings, waterfalls and streams that turn a corner of your property into a living landscape teeming with colour and movement.",
    priceFrom: "6,500", // TODO
    icon: "flower",
    features: ["Aquatic plantings", "Streams & waterfalls", "Attracts wildlife", "Year-round colour"],
    galleryFilter: "water-gardens",
    image: "/images/services/water-gardens-real.jpg",
  },
  {
    id: "living-art-aquariums",
    name: 'Planted "Living Art" Aquariums',
    eyebrow: "Indoor living sculpture",
    description:
      "Aquascaped planted aquariums designed as living art — for the home, the studio, or a hotel lobby that people photograph and remember.",
    priceFrom: "3,200", // TODO
    icon: "sparkles",
    features: ["Bespoke aquascape design", "Indoor centrepiece", "For homes & hospitality", "Full maintenance option"],
    galleryFilter: "aquariums",
    image: "/images/services/aquariums.svg",
  },
];

/* ------------------------------------------------------------------ */
/* TRUST / STATS                                                       */
/* ------------------------------------------------------------------ */
export type Stat = { value: number; suffix?: string; prefix?: string; label: string };
export const STATS: Stat[] = [
  { value: 2026 - BRAND.since, suffix: "+ yrs", label: "building water since 2008" },
  { value: 500, suffix: "+", label: "features installed" }, // TODO: real count
  { value: 40, suffix: "+", label: "hotels & commercial clients" }, // TODO: real count
  { value: 5, suffix: "★", label: "client-rated craft" }, // TODO: real rating source
];

export const AUDIENCES = [
  { title: "Homeowners", copy: "Backyard koi ponds & water gardens that become the heart of the garden." },
  { title: "Designers & Stylists", copy: "Living-art aquariums and features specified to elevate an interior." },
  { title: "Hotels & Commercial", copy: "Signature lobby and grounds features guests remember and photograph." },
];

/* ------------------------------------------------------------------ */
/* QUIZ / CONFIGURATOR                                                 */
/* ------------------------------------------------------------------ */
export type QuizChoice = { value: string; label: string; hint?: string };
export type QuizStep = {
  key: "space_type" | "feature_type" | "size_band" | "budget_band" | "timeline";
  question: string;
  helper?: string;
  choices: QuizChoice[];
};

export const QUIZ_STEPS: QuizStep[] = [
  {
    key: "space_type",
    question: "Where would your water feature live?",
    helper: "This shapes what we recommend.",
    choices: [
      { value: "backyard", label: "Backyard / garden" },
      { value: "patio", label: "Patio / courtyard" },
      { value: "front", label: "Front entrance" },
      { value: "indoor", label: "Indoors" },
      { value: "commercial", label: "Hotel / commercial" },
    ],
  },
  {
    key: "feature_type",
    question: "What draws you most?",
    choices: [
      { value: "sound", label: "The sound of moving water" },
      { value: "koi", label: "Koi & fish" },
      { value: "low_maintenance", label: "Low-maintenance beauty" },
      { value: "showpiece", label: "A showpiece that wows" },
      { value: "living_art", label: "Living-art aquarium" },
    ],
  },
  {
    key: "size_band",
    question: "How much space are we working with?",
    choices: [
      { value: "small", label: "Small", hint: "a corner / patio" },
      { value: "medium", label: "Medium", hint: "a garden bed" },
      { value: "large", label: "Large", hint: "a whole yard / grounds" },
      { value: "unsure", label: "Not sure yet" },
    ],
  },
  {
    key: "budget_band",
    question: "What budget band feels right?",
    helper: "Ballpark only — your consultation confirms the exact quote.",
    choices: [
      { value: "under_5k", label: "Under $5,000" }, // TODO: confirm currency/bands
      { value: "5_10k", label: "$5,000 – $10,000" },
      { value: "10_25k", label: "$10,000 – $25,000" },
      { value: "25k_plus", label: "$25,000+" },
      { value: "unsure", label: "Help me decide" },
    ],
  },
  {
    key: "timeline",
    question: "When would you like it built?",
    choices: [
      { value: "asap", label: "As soon as possible" },
      { value: "this_season", label: "This season" },
      { value: "exploring", label: "Just exploring" },
    ],
  },
];

// Maps a completed quiz to a recommended service id + headline.
export function recommendService(answers: Record<string, string>): {
  serviceId: string;
  headline: string;
  body: string;
} {
  const { feature_type, space_type } = answers;
  if (feature_type === "living_art" || space_type === "indoor")
    return {
      serviceId: "living-art-aquariums",
      headline: 'A planted "Living Art" aquarium',
      body: "A living sculpture for your interior — designed, planted and maintainable.",
    };
  if (feature_type === "koi")
    return {
      serviceId: "koi-ponds",
      headline: "A koi pond",
      body: "A self-sustaining ecosystem with crystal-clear water and thriving koi.",
    };
  if (feature_type === "sound" || space_type === "patio" || space_type === "front")
    return {
      serviceId: "fountains",
      headline: "A fountain feature",
      body: "The calm of moving water — compact, safe and near-maintenance-free.",
    };
  if (feature_type === "showpiece" || space_type === "commercial")
    return {
      serviceId: "water-gardens",
      headline: "A signature water garden",
      body: "A living landscape of plantings, streams and falls that becomes the showpiece.",
    };
  return {
    serviceId: "water-gardens",
    headline: "A custom water garden",
    body: "Based on your answers, a planted water garden is a beautiful, flexible fit.",
  };
}

/* ------------------------------------------------------------------ */
/* PROCESS                                                             */
/* ------------------------------------------------------------------ */
export const PROCESS = [
  {
    step: "01",
    title: "Free on-site consultation",
    copy: "About an hour on your property. We bring ideas, you share your vision — and you get a custom design direction and quote.",
  },
  {
    step: "02",
    title: "Design & proposal",
    copy: "A clear plan and transparent proposal — features, plantings, materials and timeline, with no surprises.",
  },
  {
    step: "03",
    title: "We build it",
    copy: "Our crew handles everything, cleanly and on schedule. Most installations take a few days to a couple of weeks.",
  },
  {
    step: "04",
    title: "Enjoy & maintain",
    copy: "You enjoy living water. We offer maintenance plans so it stays crystal-clear and thriving, year-round.",
  },
];

/* ------------------------------------------------------------------ */
/* PRICING                                                             */
/* ------------------------------------------------------------------ */
export const PRICING_NOTE =
  "Every feature is custom, so final cost depends on size, features and site conditions. Here's where projects typically start."; // TODO: confirm figures/currency

export const PRICING_DRIVERS = [
  "Overall size & water volume",
  "Waterfalls, streams & lighting",
  "Plantings, rockwork & fish",
  "Site access & groundworks",
];

export const CONSULT_CREDIT =
  "Your on-site consultation is free — and if you proceed, there's nothing to lose by starting the conversation."; // TODO: confirm if a credited fee applies

/* ------------------------------------------------------------------ */
/* MAINTENANCE PLANS                                                   */
/* ------------------------------------------------------------------ */
export type Plan = {
  id: string;
  name: string;
  price: string; // TODO
  cadence: string;
  best: string;
  includes: string[];
  featured?: boolean;
};

export const MAINTENANCE_PLANS: Plan[] = [
  {
    id: "seasonal",
    name: "Seasonal Care",
    price: "from 120",
    cadence: "per visit",
    best: "Best for established ponds",
    includes: ["Seasonal clean & check", "Water testing", "Pump & filter service", "Plant tidy"],
  },
  {
    id: "monthly",
    name: "Monthly Living Care",
    price: "from 220",
    cadence: "per month",
    best: "Most popular for koi ponds",
    includes: ["Monthly service visit", "Water quality management", "Fish health check", "Filter & pump upkeep", "Plant care"],
    featured: true,
  },
  {
    id: "commercial",
    name: "Commercial & Hospitality",
    price: "Custom",
    cadence: "tailored",
    best: "Hotels, resorts & offices",
    includes: ["Scheduled priority visits", "Guaranteed water clarity", "Dedicated account contact", "Reporting on request"],
  },
];

/* ------------------------------------------------------------------ */
/* GALLERY                                                             */
/* ------------------------------------------------------------------ */
export type GalleryCategory = "koi-ponds" | "fountains" | "water-gardens" | "aquariums" | "commercial";

export const GALLERY_FILTERS: { value: GalleryCategory | "all"; label: string }[] = [
  { value: "all", label: "All work" },
  { value: "koi-ponds", label: "Koi Ponds" },
  { value: "fountains", label: "Fountains" },
  { value: "water-gardens", label: "Water Gardens" },
  { value: "aquariums", label: "Living Art" },
  { value: "commercial", label: "Commercial" },
];

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  title: string;
  location: string; // parish
  // TODO: drop real photos in /public/images and set src here.
  src?: string;
  beforeSrc?: string; // if set, renders a before/after slider
  afterSrc?: string;
  tall?: boolean;
};

// SVG illustration set — customized for brand, replaceable with real photography.
export const GALLERY: GalleryItem[] = [
  { id: "g1", category: "koi-ponds", title: "Hillside Koi Pond", location: "St. Andrew", tall: true, beforeSrc: "/images/gallery/g1-before.svg", afterSrc: "/images/gallery/g1-after.svg" },
  { id: "g2", category: "fountains", title: "Courtyard Basalt Fountain", location: "Kingston", src: "/images/gallery/g2.svg" },
  { id: "g3", category: "water-gardens", title: "Terraced Water Garden", location: "Manchester", src: "/images/gallery/g3.svg" },
  { id: "g4", category: "aquariums", title: "Living-Art Aquarium", location: "Montego Bay", tall: true, src: "/images/gallery/g4.svg" },
  { id: "g5", category: "commercial", title: "Resort Lobby Feature", location: "St. James", src: "/images/gallery/g5-commercial-real.jpg" },
  { id: "g6", category: "koi-ponds", title: "Garden Ecosystem Pond", location: "St. Catherine", src: "/images/gallery/g6.svg" },
  { id: "g7", category: "water-gardens", title: "Stream & Waterfall", location: "Portland", tall: true, src: "/images/gallery/g7-water-gardens-real.jpg" },
  { id: "g8", category: "fountains", title: "Entrance Urn Fountain", location: "St. Ann", src: "/images/gallery/g8.svg" },
  { id: "g9", category: "commercial", title: "Hotel Grounds Pondscape", location: "Trelawny", src: "/images/gallery/g9.svg" },
];

/* ------------------------------------------------------------------ */
/* TESTIMONIALS                                                        */
/* ------------------------------------------------------------------ */
export type Testimonial = { quote: string; name: string; location: string; rating: number; role?: string };

// TODO: replace with real client testimonials.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I was nervous to even call — but the team made it effortless. No pushy sales, just genuinely helpful advice, and a pond I stare at every morning.",
    name: "Marlene R.",
    location: "St. Andrew",
    rating: 5,
  },
  {
    quote:
      "Our lobby feature is the first thing guests photograph. It has completely changed the feel of the space.",
    name: "Hospitality Client",
    location: "Montego Bay",
    role: "Resort General Manager",
    rating: 5,
  },
  {
    quote:
      "Clean install, on schedule, and the water has stayed crystal-clear. Exactly what they promised.",
    name: "Dwight P.",
    location: "Kingston",
    rating: 5,
  },
];

// TODO: replace with real hotel/commercial client names or logo files.
export const HOSPITALITY_CLIENTS = [
  "Resort Group",
  "Boutique Hotel",
  "Villa Collection",
  "Golf & Spa",
  "Beach Resort",
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
export const FAQ = [
  {
    q: "How much does a water feature cost?",
    a: "It depends on size, features and site conditions. Fountains typically start lower, while koi ponds and larger water gardens are a bigger investment. Your free on-site consultation gives you a transparent, custom quote — no guesswork.",
  },
  {
    q: "How much maintenance is involved?",
    a: "Far less than most people expect. A well-built ecosystem largely balances itself. We design for low upkeep, and offer maintenance plans if you'd rather we handle it entirely.",
  },
  {
    q: "How long does installation take?",
    a: "Most features take from a few days to a couple of weeks, depending on scale and site access. We give you a clear timeline in your proposal and keep the site clean throughout.",
  },
  {
    q: "Will it work in my space and climate?",
    a: "Almost certainly. We've been building across Jamaica since 2008 — from small patios to hotel grounds. The consultation is where we confirm exactly what suits your space.",
  },
  {
    q: "Will my koi and plants stay healthy?",
    a: "Yes. We build balanced ecosystems with proper filtration and planting so fish thrive and water stays clear. We'll also show you the simple routine to keep it that way.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes — our workmanship is guaranteed, and we stand behind every build. We'll walk you through the specifics during your consultation.", // TODO: confirm warranty terms
  },
];

/* ------------------------------------------------------------------ */
/* SERVICE AREA — Jamaica parishes                                    */
/* ------------------------------------------------------------------ */
export const PARISHES = [
  "Kingston",
  "St. Andrew",
  "St. Catherine",
  "Clarendon",
  "Manchester",
  "St. Elizabeth",
  "Westmoreland",
  "Hanover",
  "St. James",
  "Trelawny",
  "St. Ann",
  "St. Mary",
  "Portland",
  "St. Thomas",
];
