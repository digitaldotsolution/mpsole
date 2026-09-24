export interface SoleType {
  id: number;
  slug: string;
  category: string;
  shortTitle: string;
  title: string;
  specs: string;
  durometer: string;
  material: string;
  energyRebound: string;
  moq: string;
  leadTime: string;
  desc: string;
  detailedDesc: string;
  features: string[];
  image: string;
  gallery: string[];
}

export const SOLE_TYPES_DATA: SoleType[] = [
  {
    id: 1,
    slug: 'pio-sole-gents',
    category: "MEN'S FORMAL & CASUAL",
    shortTitle: 'Pio Sole Gents',
    title: 'Pio Sole Gents',
    specs: 'Shore 50-55A • Micro-Cellular PU • Anti-Hydrolysis',
    durometer: 'Shore 50-55A (Lightweight Resilience)',
    material: 'High-Density Liquid Polyurethane (PU) Injection',
    energyRebound: '75% Comfort Shock Absorption',
    moq: '500 Pairs per Mold Size',
    leadTime: '12-16 Days Tooling / 25 Days Mass Run',
    desc: "Engineered specifically for men's executive dress shoes, daily formal footwear, and premium leather boots. Formulated with high-grade micro-cellular polyurethane to deliver featherlight weight, exceptional flex resistance, and zero bottom cracking across continuous heavy use.",
    detailedDesc: "Our Gents PU Sole formulation balances structural firmness with all-day foot support. Using automated low-pressure and high-pressure liquid PU injection machines, the compound forms a dense outer skin that resists abrasion while maintaining an air-cushioned micro-cellular inner core. Enhanced with premium anti-hydrolysis additives to withstand humid climates and prevent sole crumble, guaranteeing over 250,000 continuous flex cycles.",
    features: [
      'High-Density Micro-Cellular Polyurethane Construction',
      'Advanced Anti-Hydrolysis Formula Preventing Material Decay & Crumble',
      'Superior Abrasion Resistance for Men Formal & Casual Shoes',
      'Smooth Heel Transition with Pre-Engineered Stitching Welts'
    ],
    image: '/assets/images/soles/sole-pio-gents-1.webp',
    gallery: [
      '/assets/images/soles/sole-pio-gents-1.webp',
      '/assets/images/soles/sole-pio-gents-2.webp',
      '/assets/images/soles/sole-pio-gents-3.webp',
      '/assets/images/soles/sole-pio-gents-4.webp',
    ],
  },
  {
    id: 2,
    slug: 'ladies-jelly-sole',
    category: "WOMEN'S FASHION & SANDALS",
    shortTitle: 'Ladies Jelly Sole',
    title: 'Ladies Jelly Sole',
    specs: 'Shore 60A • Crystal Transparent • Ultra-Flexible',
    durometer: 'Shore 60A (Supple Fashion Flex)',
    material: 'Virgin Transparent PVC / Thermoplastic Jelly Compound',
    energyRebound: '68% Elastic Return',
    moq: '500 Pairs per Colorway',
    leadTime: '10-14 Days Tooling / 20 Days Mass Run',
    desc: "Designed for trendy women's sandals, elegant flats, and chic fashion footwear. Features crystal-clear transparency, glossy finish, and high-tensile elasticity that flexes naturally with every step without whitening or stiffness.",
    detailedDesc: "The Ladies Jelly Sole line offers unmatched clarity and color versatility for high-street fashion labels. Molded from non-toxic, virgin-grade clear thermoplastic compound, it allows custom tinting in smoky black, pastel hues, or glitter infusion. The slip-resistant micro-tread pattern provides secure grip on smooth tiles, while its soft tactile hand feel ensures blister-free all-day wear.",
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
      '/assets/images/soles/sole-ladies-jelly-3.webp',
      '/assets/images/soles/sole-ladies-jelly-4.webp',
    ],
  },
  {
    id: 3,
    slug: 'tr-sole',
    category: 'CASUAL, ATHLETIC & UTILITY',
    shortTitle: 'T.R Sole',
    title: 'T.R Sole',
    specs: 'Shore 62A • High-Traction TR • Extreme Cold Resistant',
    durometer: 'Shore 62A (High-Grip Toughness)',
    material: 'Premium Thermoplastic Rubber (TR) Compound',
    energyRebound: '72% Kinetic Impact Absorption',
    moq: '500 Pairs per Mold Size',
    leadTime: '12-15 Days Tooling / 25 Days Mass Run',
    desc: 'The industry benchmark for durable sneakers, rugged casual shoes, and outdoor boots. Thermoplastic Rubber (TR) combines the superior grip and abrasion resilience of rubber with the injection efficiency of thermoplastics for maximum longevity.',
    detailedDesc: 'Our T.R Sole formulation is engineered for brands demanding high abrasion performance and dependable grip across extreme temperatures (-20°C to +50°C). Unlike conventional PVC soles, TR maintains flexible traction without freezing stiff in winter or turning gummy in summer heat. It easily bonds with all standard shoe adhesives, offering deep tread definition, sharp mold edging, and two-tone color injection capabilities.',
    features: [
      'High-Friction Slip Resistance on Wet, Oily & Rough Surfaces',
      'Exceptional Low-Temperature Flexibility (-20°C Cold Crack Proof)',
      'Dual-Color and Dual-Density Injection Molding Ready',
      'Low DIN Abrasion Loss < 110 mm³ for Extended Sole Lifespan'
    ],
    image: '/assets/images/soles/sole-tr-1.webp',
    gallery: [
      '/assets/images/soles/sole-tr-1.webp',
      '/assets/images/soles/sole-tr-2.webp',
      '/assets/images/soles/sole-tr-3.webp',
      '/assets/images/soles/sole-tr-4.webp',
    ],
  },
  {
    id: 4,
    slug: 'medicated-sole',
    category: 'ORTHOPEDIC & COMFORT CARE',
    shortTitle: 'Medicated Sole',
    title: 'Medicated Sole',
    specs: 'Shore 35-40C • Anatomical Arch Support • Heel Shock Cup',
    durometer: 'Shore 35-40C (Ultra-Plush Therapeutic Rebound)',
    material: 'Bio-Engineered Memory Polymer & Shock-Absorbing EVA/PU',
    energyRebound: '85% Peak Shock Redistribution',
    moq: '300 Pairs per Size Mold',
    leadTime: '12-15 Days Tooling / 25 Days Mass Run',
    desc: 'Engineered specifically for therapeutic footwear, diabetic care, plantar fasciitis relief, and medical professionals on their feet all day. Features biomechanically tuned anatomical arch support, deep heel cupping, and pressure-dispersing cushioning.',
    detailedDesc: 'The Medicated Sole formulation is crafted to minimize joint strain, plantar stress, and lumbar fatigue. Featuring calibrated dual-zone durometers, it combines an ultra-soft shock-dispersing heel cavity with a rigid midfoot torsional shank that guides proper walking gait. Clinically approved for diabetic footwear and orthopedic doctor-recommended shoes, it absorbs up to 85% of ground strike shock.',
    features: [
      'Biomechanical Anatomical Arch Cradle & Deep Heel Shock Cup',
      'Ultra-Soft Therapeutic Foam Rebound Reducing Knee & Joint Stress',
      'Pressure-Relief Metatarsal Zone for Diabetic & Orthopedic Care',
      'Broad Stable Outsole Perimeter Base to Prevent Ankle Roll'
    ],
    image: '/assets/images/soles/sole-medicated-1.webp',
    gallery: [
      '/assets/images/soles/sole-medicated-1.webp',
      '/assets/images/soles/sole-medicated-2.webp',
      '/assets/images/soles/sole-medicated-3.webp',
      '/assets/images/soles/sole-medicated-4.webp',
    ],
  },
];
