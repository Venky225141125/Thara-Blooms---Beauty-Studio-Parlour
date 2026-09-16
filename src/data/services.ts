export interface ServiceItem {
  id: string;
  title: string;
  category: "Hair" | "Skincare" | "Bridal" | "Makeup" | "Nails & Spa" | "Grooming";
  duration: string;
  tagline: string;
  description: string;
  image: string;
  popular?: boolean;
  featured?: boolean;
  treatments: string[];
}

export const services: ServiceItem[] = [
  {
    id: "bridal-couture",
    title: "Bridal Makeup & Couture",
    category: "Bridal",
    duration: "180 - 240 mins",
    tagline: "Unforgettable Radiance for Your Special Day",
    description: "Complete bridal transformations tailored to your style, jewelry, and occasion. Includes bespoke skin priming, airbrush finishes, and veil/dupatta draping.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
    popular: true,
    featured: true,
    treatments: [
      "High-Definition Airbrush Base",
      "Traditional & Contemporary Draping",
      "Pre-Bridal Luminosity Glow Ritual",
      "Haute Bridal Hair Architecture"
    ]
  },
  {
    id: "bespoke-facials",
    title: "Signature Glow Facials",
    category: "Skincare",
    duration: "60 - 90 mins",
    tagline: "Deep Cellular Hydration & Luminous Radiance",
    description: "Multi-step botanical facial therapies infused with rose quartz massage, ultrasound infusion, and peptide-rich masks to revive natural elasticity.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
    popular: true,
    featured: true,
    treatments: [
      "Rose Quartz Lymphatic Sculpting",
      "Botanical Oxygen Infusion",
      "Gold Peptide Radiance Mask",
      "Gentle AHA/BHA Skin Smoothing"
    ]
  },
  {
    id: "haute-hair-styling",
    title: "Haute Hair Styling & Blowouts",
    category: "Hair",
    duration: "45 - 90 mins",
    tagline: "Effortless Movement, Volume & Polish",
    description: "From romantic soft waves and red carpet sleek styles to bespoke occasion up-dos crafted to frame your unique features.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
    popular: true,
    featured: true,
    treatments: [
      "Signature Glass-Finish Blowout",
      "Vintage Glamour Soft Waves",
      "Textured Editorial Chignon",
      "Thermal Defense Silk Press"
    ]
  },
  {
    id: "hair-rituals",
    title: "Botanical Hair Spa & Care",
    category: "Hair",
    duration: "60 - 75 mins",
    tagline: "Restorative Nourishment from Root to Tip",
    description: "Deep conditioning therapies enriched with camellia oil, keratin botanicals, and warm scalp massage for silky, mirror-shine tresses.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    treatments: [
      "Cold-Pressed Botanical Oil Elixir",
      "Steam Moisture Lock Bath",
      "Anti-Frizz Keratin Nourishment",
      "Harmonizing Scalp Reflexology"
    ]
  },
  {
    id: "party-glam-makeup",
    title: "Celebration & Party Glam",
    category: "Makeup",
    duration: "60 - 75 mins",
    tagline: "Camera-Ready Glamour with Featherlight Wear",
    description: "Custom makeup looks customized for cocktail evenings, engagements, galas, and photography sessions with seamless skin finish.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    treatments: [
      "Featherlight Satin Base",
      "Soft Smokey & Shimmer Eyes",
      "Individual Lash Clustering",
      "All-Night Longwear Setting Mist"
    ]
  },
  {
    id: "manicure-pedicure-spa",
    title: "Nourishing Manicure & Pedicure",
    category: "Nails & Spa",
    duration: "60 - 80 mins",
    tagline: "Relaxing Hand & Foot Sanctuary",
    description: "Rose petal soaks, gentle exfoliating scrubs, therapeutic reflex points, and immaculate cuticle detailing topped with long-wear shades.",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    treatments: [
      "Milk & Rose Petal Floral Bath",
      "Gentle Apricot Kernel Exfoliation",
      "Warm Paraffin Softening Mask",
      "Gel Couture Glass Gloss Polish"
    ]
  },
  {
    id: "precision-grooming",
    title: "Threading & Gentle Waxing",
    category: "Grooming",
    duration: "20 - 45 mins",
    tagline: "Clean Lines & Feather-Smooth Skin",
    description: "Ultra-precise eyebrow contouring and sensitive skin-safe waxing using soothing chamomile balms and aloe vera cooling treatments.",
    image: "https://images.unsplash.com/photo-1512290900672-1f48ec3a0d5c?q=80&w=1000&auto=format&fit=crop",
    featured: false,
    treatments: [
      "Artisanal Thread Eyebrow Architecture",
      "Upper Lip & Chin Precision",
      "Sensitive Peel Waxing Formula",
      "Calming Aloe Vera Ice Compress"
    ]
  },
  {
    id: "skin-brightening-ritual",
    title: "Skin Rejuvenation & Detox",
    category: "Skincare",
    duration: "75 - 90 mins",
    tagline: "Pollution Defense & Pore Refining Clarity",
    description: "Revitalizing skin detox using ultrasonic cleansing, enzyme peels, and iced jade rollers to tighten pores and clarify the complexion.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop",
    featured: false,
    treatments: [
      "Deep Micro-Exfoliation",
      "Vitamin C & Niacinamide Infusion",
      "Cryo-Globe Pore Tightening",
      "Botanical Barrier Repair Balm"
    ]
  }
];
