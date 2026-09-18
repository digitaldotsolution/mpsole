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
    slug: 'sole-pro-max',
    category: 'SPEED & RACING',
    shortTitle: 'SOLE Pro Max',
    title: 'SOLE Pro Max — Carbon-Fiber Marathon Outsole',
    specs: 'Shore 42C • 3K Carbon-Fiber • Nitrogen TPU',
    durometer: 'Shore 42C (Super-Critical Rebound)',
    material: 'Aerospace 3K Carbon Weave + Injected PEBA Foam',
    energyRebound: '88% Kinetic Efficiency',
    moq: '500 Pairs per Mold Size',
    leadTime: '15-20 Days Tooling / 30 Days Mass Run',
    desc: 'Engineered for elite road racing and sub-3 marathoners. Features an integrated aerospace-grade 3K carbon propulsion plate sandwiched between dual-density nitrogen-infused foam, delivering up to 88% kinetic energy rebound with minimal muscle fatigue.',
    detailedDesc: 'The SOLE Pro Max formulation is custom-tailored for high-performance athletic footwear labels requiring Olympic-grade propulsion. The embedded 3K carbon plate features a spoon-like longitudinal curvature that stabilizes heel transition and levers the forefoot forward aggressively at toe-off. Encapsulated within micro-cellular supercritical nitrogen-blown elastomer, it minimizes foot fatigue while maintaining rigid structural integrity across 800+ kilometers.',
    features: [
      'Aerospace-Grade 3K Carbon-Fiber Full-Length Spoon Plate',
      'Dual-Density Supercritical Nitrogen-Infused PEBA Core',
      'Ultra-Thin 1.2mm High-Traction Rubber Grip Forefoot Layer',
      'Zero Delamination Guarantee under extreme continuous flex stress'
    ],
    image: '/assets/images/soles/sole-carbon.jpg',
    gallery: [
      '/assets/images/soles/sole-carbon.jpg',
      '/assets/images/about/hero-sole.jpg',
      '/assets/images/soles/sole-trail.jpg',
      '/assets/images/soles/sole-eco.jpg',
    ],
  },
  {
    id: 2,
    slug: 'sole-classic',
    category: 'STREETWEAR & CASUAL',
    shortTitle: 'SOLE Classic',
    title: 'SOLE Classic — Vulcanized Gum Rubber Cup-Sole',
    specs: 'Shore 58A • 100% Natural Rubber • Stitched Wall',
    durometer: 'Shore 58A (High Elastic Flex)',
    material: '100% Natural Malaysian Gum Rubber Compound',
    energyRebound: '62% Impact Cushioning',
    moq: '300 Pairs per Mold Size',
    leadTime: '10-14 Days Tooling / 25 Days Mass Run',
    desc: 'The global standard for luxury lifestyle sneakers and vulcanized skate footwear. Molded from 100% natural gum rubber with a perimeter side-wall stitching channel, high abrasion resistance, and tested for 200,000+ continuous flex cycles without cracking.',
    detailedDesc: 'Engineered specifically for boutique luxury sneaker brands and premium lifestyle footwear. The compound utilizes virgin smoked sheet natural rubber vulcanized at precise thermal thresholds to achieve an authentic honey-amber tone with exceptional grip. Featuring a pre-grooved 360-degree sidewall stitching channel, this sole guarantees zero side blowouts even under extreme board abrasion and daily metropolitan wear.',
    features: [
      '100% Virgin Natural Raw Gum Rubber Compounding',
      'Integrated 360° Sidewall Perimeter Stitching Groove Channel',
      'DIN Abrasion Volume Loss < 95 mm³ (Ultra Durable)',
      'Tested for 200,000+ Continuous Flex Cycles with Zero Micro-Cracks'
    ],
    image: '/assets/images/soles/sole-gum.jpg',
    gallery: [
      '/assets/images/soles/sole-gum.jpg',
      '/assets/images/soles/sole-eco.jpg',
      '/assets/images/soles/sole-carbon.jpg',
      '/assets/images/about/hero-sole.jpg',
    ],
  },
  {
    id: 3,
    slug: 'apex-trail-360',
    category: 'OUTDOOR & TRAIL',
    shortTitle: 'Apex Trail 360',
    title: 'Apex Trail 360 — Multi-Lug Wet Rock Outsole',
    specs: 'Shore 65A • 5.0mm Geometric Lugs • Rock-Plate',
    durometer: 'Shore 65A (Puncture-Proof Toughness)',
    material: 'Vibra-Grip Sticky Synthetic + Natural Rubber Blend',
    energyRebound: '70% Kinetic Absorption',
    moq: '500 Pairs per Mold Size',
    leadTime: '15-18 Days Tooling / 30 Days Mass Run',
    desc: 'Designed for rugged mountain terrain and unpredictable weather. Aggressive 5mm multi-directional lugs channel mud and water instantly, while an embedded internal rock-guard shield protects against sharp stone punctures on technical descents.',
    detailedDesc: 'Built for technical trail running, alpine approaches, and demanding tactical boots. The outsole pattern utilizes siped geometric lugs arranged in alternating braking and propulsion chevrons. An embedded ballistic nylon ESS rock plate shields the metatarsal bones from jagged stones without adding excess weight. Formulated to grip wet river stones and slick shale seamlessly.',
    features: [
      'Deep 5.0mm Self-Cleaning Mud Shedding Directional Lugs',
      'Embedded Ballistic ESS Puncture-Resistant Forefoot Rock Shield',
      'High-Friction Wet Surface Sticky Rubber Formulation',
      'SATRA TM144 Slip Resistance Approved for Wet and Oily Surfaces'
    ],
    image: '/assets/images/soles/sole-trail.jpg',
    gallery: [
      '/assets/images/soles/sole-trail.jpg',
      '/assets/images/soles/sole-carbon.jpg',
      '/assets/images/about/hero-sole.jpg',
      '/assets/images/soles/sole-gum.jpg',
    ],
  },
  {
    id: 4,
    slug: 'ecobio-matrix',
    category: 'ECO SUSTAINABLE',
    shortTitle: 'EcoBio Matrix',
    title: 'EcoBio Matrix — Circular Economy Recycled Sole',
    specs: 'Shore 48C • 40% Recycled Crumb • Bio-Algae EVA',
    durometer: 'Shore 48C (Featherweight Resilience)',
    material: '40% Recycled Tire Crumb + Algae-Based Bloom EVA',
    energyRebound: '75% Soft Rebound',
    moq: '500 Pairs per Mold Size',
    leadTime: '15-20 Days Tooling / 30 Days Mass Run',
    desc: 'Formulated for eco-conscious footwear labels. Replaces 40% of virgin petroleum polymers with recycled vehicle tire crumb and algae-based EVA foam, achieving remarkable durability and featherweight comfort with a significantly reduced carbon footprint.',
    detailedDesc: 'Developed for forward-thinking footwear brands prioritizing ESG certifications and circular economy sourcing. We harvest invasive freshwater algae blooms to produce bio-cellular pellets, blended with fine-mesh devulcanized tire rubber. The result is an ultra-lightweight, visually distinctive speckled sole that cuts cradle-to-gate carbon emissions by 46% compared to standard petroleum EVA outsoles.',
    features: [
      '40% Post-Industrial Devulcanized Rubber Crumb Infusion',
      'Bloom Bio-Algae Renewable Biomass Harvesting EVA Matrix',
      'Distinctive Organic Speckled Aesthetic (No Artificial Paints)',
      'Certified REACH & RoHS Compliant, 100% Phthalate Free'
    ],
    image: '/assets/images/soles/sole-eco.jpg',
    gallery: [
      '/assets/images/soles/sole-eco.jpg',
      '/assets/images/soles/sole-gum.jpg',
      '/assets/images/soles/sole-carbon.jpg',
      '/assets/images/about/hero-sole.jpg',
    ],
  },
];
