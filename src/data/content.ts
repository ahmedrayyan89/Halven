export const siteConfig = {
  name: "HALVEN",
  tagline: "Luxury Curated Travel",
  year: "2026",
};

export const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experience", href: "#experience" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  label: "LUXURY CURATED TRAVEL",
  heading: "Beyond The Last Horizon",
  subtext:
    "Private expeditions to the world's most extraordinary destinations. Experience places no ordinary itinerary has ever reached.",
  primaryCTA: "Explore Destinations",
  secondaryCTA: "Watch The Journey",
};

export const destinations = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    tagline: "The Golden Kingdom",
    distance: "India",
    travelTime: "12 days",
    description:
      "Amber palaces at sunrise. Private dinners in 400-year-old forts. Camel caravans across the Thar dunes under a canopy of stars. Our most requested journey — limited to 20 guests per season.",
    price: "From $18,000",
    featured: true,
  },
  {
    id: "dubai",
    name: "Dubai & Abu Dhabi",
    tagline: "The Modern Mirage",
    distance: "UAE",
    travelTime: "8 days",
    description:
      "Desert safari at dawn. Michelin dining 800 feet above sea level. Gold souks, private yacht charters, and sunrise over dunes that meet the Arabian Gulf. Return clients: 91%.",
    price: "From $14,000",
    featured: false,
  },
  {
    id: "montana",
    name: "Montana",
    tagline: "The Untouched Wild",
    distance: "USA",
    travelTime: "10 days",
    description:
      "Glacier National Park by helicopter. Private ranch stays in the Bitterroot Valley. Fly-fishing, horseback trails, and zero light pollution — the last great American frontier.",
    price: "From $12,000",
    featured: false,
  },
  {
    id: "kerala",
    name: "Kerala",
    tagline: "The Emerald Waterway",
    distance: "India",
    travelTime: "9 days",
    description:
      "Private houseboat through the backwaters. Ayurvedic retreats nestled in spice plantations. Tea hills at 6,000 feet. Kathakali at dusk. Access to temples closed to the general public.",
    price: "From $15,000",
    featured: false,
  },
];

export const techFeatures = [
  {
    title: "Private Aviation",
    description:
      "Door-to-destination on our fleet of long-range jets. No layovers, no terminals, no waiting. Wheels up when you say so — anywhere on three continents.",
    stat: "14",
    statLabel: "Aircraft Fleet",
  },
  {
    title: "Boutique Stays",
    description:
      "Heritage palaces, desert camps, overwater villas — each handpicked and privately reserved. No hotel chains. No shared lobbies. Every property is yours alone.",
    stat: "60+",
    statLabel: "Exclusive Properties",
  },
  {
    title: "Personal Concierge",
    description:
      "A dedicated team from the moment you book until the moment you land home. Local fixers, private guides, on-call chefs. One guest, one team — no exceptions.",
    stat: "1:4",
    statLabel: "Guest-to-Staff Ratio",
  },
];

export const packages = [
  {
    tier: "Voyager",
    price: "$12K",
    description:
      "One destination. Expertly planned. The essential first journey.",
    features: [
      "One destination — you choose",
      "Boutique hotel stays",
      "Private airport transfers",
      "Dedicated travel concierge",
      "Curated local experiences",
    ],
    highlighted: false,
  },
  {
    tier: "Signature",
    price: "$38K",
    description:
      "Two destinations. Private aviation. The trip people talk about.",
    features: [
      "Two destinations — seamless routing",
      "Private jet transfers between cities",
      "Heritage palace & villa stays",
      "Dedicated concierge team on-ground",
      "Exclusive cultural access & private tours",
      "Fine dining — chef's table reservations",
      "Luxury adventure excursions",
    ],
    highlighted: true,
  },
  {
    tier: "Sovereign",
    price: "$120K",
    description:
      "Unlimited destinations. Your schedule. We build the route around you.",
    features: [
      "Unlimited itinerary — travel until you're done",
      "Full-time private jet at your disposal",
      "Presidential suites & private compounds",
      "Personal staff of four — 24/7",
      "Advance team prepares each location before arrival",
      "Unrestricted baggage & cargo",
      "Private event hosting at any destination",
    ],
    highlighted: false,
  },
];

export const footerText = {
  copyright: `© ${siteConfig.year} Halven Travel. All rights reserved.`,
  legal: "Licensed travel operator. All journeys are fully insured and comply with international travel regulations.",
};
