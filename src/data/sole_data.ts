export interface SoleType {
  id: number;
  slug: string;
  category: string;
  shortTitle: string;
  title: string;
  mainH2?: string;
  homeTitle?: string;
  imageAlt?: string;
  specs: string;
  durometer: string;
  material: string;
  energyRebound: string;
  moq: string;
  leadTime: string;
  soleTypeLabel?: string;
  supportDesign?: string;
  desc: string;
  detailedDesc: string;
  featuresHeading?: string;
  features: string[];
  image: string;
  gallery: string[];
  galleryHeading?: string;
  galleryAlts?: string[];
  mainCtaText?: string;
}

export const SOLE_TYPES_DATA: SoleType[] = [
  {
    id: 1,
    slug: 'pu-sole-gents',
    category: "MEN'S FORMAL & CASUAL",
    shortTitle: 'P.U Sole Gents',
    title: 'P.U Gents Sole',
    homeTitle: 'P.U Gents Sole Manufacturer',
    mainH2: 'P.U Gents Soles for Men’s Formal & Casual Shoes',
    imageAlt: 'P.U Gents Shoe Sole Manufacturer in Pakistan - MP Sole',
    specs: 'Shore 50-55A • Micro-Cellular P.U • Anti-Hydrolysis',
    durometer: 'Shore 50-55A (Lightweight Resilience)',
    material: 'High-Density Liquid Polyurethane (P.U) Injection',
    energyRebound: '75% Comfort Shock Absorption',
    moq: '300 - 500 Pairs (Flexible for Trial Orders)',
    leadTime: '7-12 Days Tooling / 15-20 Days Production',
    desc: 'MP Sole® manufactures P.U Gents shoe soles in Pakistan for men’s executive dress shoes, formal footwear, casual shoes, and leather boots. Our micro-cellular polyurethane (P.U) sole formulation is engineered for lightweight comfort, flexibility, abrasion resistance, and reliable performance in everyday footwear production.',
    detailedDesc: 'Our P.U Gents sole formulation balances structural support, flexibility, and all-day comfort. Manufactured at our shoe sole factory in Karachi using polyurethane injection molding, each sole is developed with an abrasion-resistant outer surface and lightweight micro-cellular structure. Anti-hydrolysis formulation helps improve durability in humid conditions, making these P.U soles suitable for footwear brands, shoe manufacturers, and wholesale buyers in Pakistan.',
    featuresHeading: 'P.U Gents Sole Features & Manufacturing Highlights',
    features: [
      'High-Density Micro-Cellular Polyurethane (P.U) Construction',
      'Advanced Anti-Hydrolysis Formula Preventing Material Decay & Crumble',
      'Superior Abrasion Resistance for Men’s Formal & Casual Shoes',
      'Smooth Heel Transition with Pre-Engineered Stitching Welts'
    ],
    image: '/assets/images/soles/sole-pu-gents-1.webp',
    gallery: [
      '/assets/images/soles/sole-pu-gents-1.webp',
      '/assets/images/soles/sole-pu-gents-2.webp',
      '/assets/images/soles/sole-pu-gents-3.webp',
      '/assets/images/soles/sole-pu-gents-4.webp',
    ],
    galleryHeading: 'P.U Gents Sole Manufacturing Gallery',
    galleryAlts: [
      'P.U Gents shoe sole manufacturing - MP Sole Pakistan',
      'P.U Gents shoe sole manufacturing - MP Sole Pakistan',
      'P.U Gents shoe sole manufacturing - MP Sole Pakistan',
      'P.U Gents shoe sole manufacturing - MP Sole Pakistan',
    ],
    mainCtaText: 'Inquire For This Sole'
  },
  {
    id: 2,
    slug: 'ladies-jelly-sole',
    category: "WOMEN'S FASHION & SANDALS",
    shortTitle: 'Ladies Jelly Sole',
    title: 'Ladies Jelly Sole',
    homeTitle: 'Ladies Jelly Sole Manufacturer',
    mainH2: 'Ladies Jelly Soles for Women’s Sandals & Fashion Footwear',
    imageAlt: 'Ladies Jelly Sole Manufacturer in Pakistan - MP Sole',
    specs: 'Shore 60A • Crystal Transparent • Ultra-Flexible',
    durometer: 'Shore 60A (Supple Fashion Flex)',
    material: 'Virgin Transparent PVC / Thermoplastic Jelly Compound',
    energyRebound: '68% Elastic Return',
    moq: '300 - 500 Pairs (Custom Colors Available)',
    leadTime: '7-10 Days Tooling / 12-15 Days Production',
    desc: 'MP Sole® manufactures Ladies Jelly soles in Pakistan for women’s sandals, flats, slippers, and fashion footwear. Our transparent jelly sole formulation combines flexibility, a smooth glossy finish, and durable thermoplastic material for footwear brands, manufacturers, and wholesale buyers.',
    detailedDesc: 'Our Ladies Jelly soles are manufactured at our shoe sole factory in Karachi using transparent thermoplastic compounds suitable for women’s footwear production. Custom colors, transparent finishes, smoky shades, pastel tones, and glitter effects can be developed according to brand requirements. The flexible construction and micro-tread design provide comfort and grip for sandals, flats, and other fashion footwear.',
    featuresHeading: 'Ladies Jelly Sole Features & Manufacturing Highlights',
    features: [
      'Optical-Grade Crystal Transparency with UV Yellowing Inhibitors',
      'Ultra-Soft Elasticity that Bends 180° Without Creasing or Whitening',
      'Custom Tint Formulation (Clear, Rose, Amber, Smoke, Glitters)',
      'Anti-Skid Micro-Grip Underfoot Pattern for Wet & Tile Surfaces'
    ],
    image: '/assets/images/soles/sole-ladies-jelly-1.webp',
    gallery: [
      '/assets/images/soles/sole-ladies-jelly-1.webp',
      '/assets/images/soles/sole-ladies-jelly-2.webp',
    ],
    galleryHeading: 'Ladies Jelly Sole Manufacturing Gallery',
    galleryAlts: [
      'Transparent Ladies Jelly Sole by MP Sole Pakistan',
      'Women’s Jelly Shoe Sole Manufacturing in Karachi'
    ],
    mainCtaText: 'Request Quote for Ladies Jelly Soles'
  },
  {
    id: 3,
    slug: 'tr-sole',
    category: 'CASUAL, ATHLETIC & UTILITY',
    shortTitle: 'T.R Sole',
    title: 'T.R Sole',
    homeTitle: 'T.R Sole Manufacturer',
    mainH2: 'TR Soles for Casual, Athletic & Utility Footwear',
    imageAlt: 'TR Shoe Sole Manufacturer in Pakistan - MP Sole',
    specs: 'Shore 62A • High-Traction TR • Extreme Cold Resistant',
    durometer: 'Shore 62A (High-Grip Toughness)',
    material: 'Premium Thermoplastic Rubber (TR) Compound',
    energyRebound: '72% Kinetic Impact Absorption',
    moq: '300 - 500 Pairs (Custom Logos / Sizes)',
    leadTime: '10-14 Days Tooling / 15-20 Days Production',
    desc: 'MP Sole® manufactures TR shoe soles in Pakistan for sneakers, casual shoes, athletic footwear, utility shoes, and outdoor boots. Our Thermoplastic Rubber (TR) sole formulation combines flexibility, grip, and abrasion resistance with efficient injection molding for durable footwear production.',
    detailedDesc: 'Our TR sole formulation is developed for footwear brands and shoe manufacturers requiring durable, flexible, and high-traction outsoles. Manufactured at our shoe sole factory in Karachi, Pakistan, TR soles provide strong abrasion resistance, defined tread patterns, reliable footwear bonding, and custom color options. They are suitable for casual shoes, sneakers, utility footwear, and outdoor applications where grip and long-term durability are important.',
    featuresHeading: 'TR Sole Features & Manufacturing Highlights',
    features: [
      'High-Friction Slip Resistance on Wet, Oily & Rough Surfaces',
      'Flexible TR Compound Designed for Low-Temperature Performance',
      'Dual-Color and Dual-Density Injection Molding Ready',
      'High Abrasion Resistance for Extended Sole Durability'
    ],
    image: '/assets/images/soles/sole-tr-1.webp',
    gallery: [
      '/assets/images/soles/sole-tr-1.webp',
      '/assets/images/soles/sole-tr-2.webp',
      '/assets/images/soles/sole-tr-3.webp',
      '/assets/images/soles/sole-tr-4.webp',
    ],
    galleryHeading: 'TR Shoe Sole Manufacturing Gallery',
    galleryAlts: [
      'TR Shoe Sole by MP Sole Pakistan',
      'Thermoplastic Rubber Sole Tread Design',
      'TR Sole Manufacturing in Karachi Pakistan',
      'TR Outsole for Casual & Athletic Footwear'
    ],
    mainCtaText: 'Request Quote for TR Shoe Soles'
  },
  {
    id: 4,
    slug: 'medicated-sole',
    category: 'ORTHOPEDIC & COMFORT FOOTWEAR',
    shortTitle: 'Medicated Sole',
    title: 'Medicated & Orthopedic Soles',
    homeTitle: 'Medicated & Orthopedic Sole Manufacturer',
    mainH2: 'Medicated & Orthopedic Soles for Comfort Footwear',
    imageAlt: 'Medicated Shoe Sole Manufacturer in Pakistan - MP Sole',
    specs: 'Shore 35-40C • Anatomical Arch Support • Heel Cushioning',
    durometer: 'Shore 35-40C (Comfort Cushioning)',
    soleTypeLabel: 'Medicated / Orthopedic Comfort Sole',
    supportDesign: 'Anatomical Arch Support & Heel Cushioning',
    material: 'Bio-Engineered Memory Polymer & Shock-Absorbing EVA/PU',
    energyRebound: '85% Peak Shock Redistribution',
    moq: '300 - 500 Pairs (Custom Requirements Available)',
    leadTime: 'Based on Design & Production Requirements',
    desc: 'MP Sole® manufactures Medicated shoe soles in Pakistan for orthopedic, comfort, and supportive footwear applications. Our Medicated soles are designed with anatomical arch support, heel cushioning, and pressure-distributing structures to provide enhanced underfoot comfort for footwear brands, manufacturers, and wholesale buyers.',
    detailedDesc: 'Manufactured at our shoe sole factory in Karachi, MP Sole® Medicated soles combine supportive sole geometry with cushioning and flexible construction for comfort-focused footwear. Custom sole designs, sizes, hardness specifications, and mold development can be produced according to footwear brand and manufacturing requirements.',
    featuresHeading: 'Medicated Sole Features & Manufacturing Highlights',
    features: [
      'Anatomical Arch Support for Comfort-Focused Footwear',
      'Deep Heel Cushioning & Supportive Sole Geometry',
      'Flexible Construction for Everyday Comfort Footwear',
      'Custom Hardness, Sizes & Sole Design Options',
      'Suitable for Orthopedic & Supportive Footwear Applications'
    ],
    image: '/assets/images/soles/sole-medicated-1.webp',
    gallery: [
      '/assets/images/soles/sole-medicated-1.webp',
      '/assets/images/soles/sole-medicated-2.webp',
      '/assets/images/soles/sole-medicated-3.webp',
      '/assets/images/soles/sole-medicated-4.webp',
    ],
    galleryHeading: 'Medicated Shoe Sole Manufacturing Gallery',
    galleryAlts: [
      'Medicated Shoe Sole Manufacturer in Pakistan - MP Sole',
      'Medicated Sole Arch Support Design - MP Sole Pakistan',
      'Orthopedic Footwear Sole Production Karachi',
      'Comfort Footwear Sole Cushioning - MP Sole'
    ],
    mainCtaText: 'Request Quote for Medicated Shoe Soles'
  },
];
