// ═══════════════════════════════════════════════════════════════
// Health Index — Wellness Products Data Layer
// ═══════════════════════════════════════════════════════════════

export type ProductCategory = 
  | 'sauna' 
  | 'red-light' 
  | 'cryotherapy' 
  | 'pemf' 
  | 'compression' 
  | 'massage' 
  | 'cold-plunge'
  | 'air-purifier'
  | 'hyperbaric'

export interface Product {
  id: string
  name: string
  brand: string
  category: ProductCategory
  description: string
  priceRange: { min: number; max: number }
  priceDisplay: string
  keyFeatures: string[]
  specs: Record<string, string>
  affiliateLink?: string
  affiliateNetwork?: string
  imageUrl?: string
  rating?: number
  reviewCount?: number
  isFeatured?: boolean
  isNew?: boolean
}

export interface CategoryInfo {
  id: ProductCategory
  name: string
  description: string
  icon: string
  color: string
}

// ═══════════════════════════════════════════════════════════════
// Category Definitions
// ═══════════════════════════════════════════════════════════════

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'sauna',
    name: 'Infrared Saunas',
    description: 'Full-spectrum infrared saunas and portable sauna blankets for detox and recovery',
    icon: '🧖',
    color: '#E85D04'
  },
  {
    id: 'red-light',
    name: 'Red Light Therapy',
    description: 'Red and near-infrared light panels, masks, and devices for skin health and cellular energy',
    icon: '🔴',
    color: '#DC2626'
  },
  {
    id: 'cryotherapy',
    name: 'Cryotherapy',
    description: 'Whole-body cryo chambers and localized cold therapy devices',
    icon: '❄️',
    color: '#06B6D4'
  },
  {
    id: 'pemf',
    name: 'PEMF Therapy',
    description: 'Pulsed electromagnetic field mats and devices for pain relief and recovery',
    icon: '⚡',
    color: '#8B5CF6'
  },
  {
    id: 'compression',
    name: 'Compression Therapy',
    description: 'Normatec-style recovery boots and compression systems',
    icon: '🦵',
    color: '#10B981'
  },
  {
    id: 'massage',
    name: 'Massage Guns',
    description: 'Percussive therapy devices for muscle recovery and pain relief',
    icon: '💪',
    color: '#F59E0B'
  },
  {
    id: 'cold-plunge',
    name: 'Cold Plunge',
    description: 'Ice baths and cold plunge systems for recovery and mental resilience',
    icon: '🧊',
    color: '#3B82F6'
  },
  {
    id: 'air-purifier',
    name: 'Air Purifiers',
    description: 'HEPA and H13 air filtration systems for clean indoor air',
    icon: '🌬️',
    color: '#14B8A6'
  },
  {
    id: 'hyperbaric',
    name: 'Hyperbaric Chambers',
    description: 'Mild hyperbaric oxygen therapy chambers for home use',
    icon: '💨',
    color: '#3B82F6'
  }
]

// ═══════════════════════════════════════════════════════════════
// Wellness Products Database
// ═══════════════════════════════════════════════════════════════

export const PRODUCTS: Product[] = [
  // ═══════════════════════════════════════════════════════════════
  // SAUNAS
  // ═══════════════════════════════════════════════════════════════
  
  // Sun Home Saunas
  {
    id: 'sun-home-sauna-3-person',
    name: 'Sun Home 3-Person Infrared Sauna',
    brand: 'Sun Home',
    category: 'sauna',
    description: 'Full-spectrum infrared sauna with medical-grade chromotherapy, carbon/ceramic hybrid heaters, and premium cedar construction. Seats 3 comfortably.',
    priceRange: { min: 4999, max: 5999 },
    priceDisplay: '$4,999 - $5,999',
    keyFeatures: [
      'Full-spectrum infrared (near, mid, far)',
      'Medical-grade chromotherapy lighting',
      'Carbon/ceramic hybrid heaters',
      'Canadian cedar construction',
      'Bluetooth audio system',
      'Digital control panel'
    ],
    specs: {
      dimensions: '59" x 47" x 75"',
      capacity: '3 Person',
      heaters: '8 carbon/ceramic hybrid',
      wattage: '2150W',
      warranty: 'Lifetime'
    },
    affiliateLink: 'https://sunhome.com/?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.8,
    reviewCount: 127,
    isFeatured: true
  },
  {
    id: 'sun-home-sauna-blanket',
    name: 'Sun Home Infrared Sauna Blanket',
    brand: 'Sun Home',
    category: 'sauna',
    description: 'Portable infrared sauna blanket for detox and recovery. Perfect for small spaces and travel. Uses low-EMF infrared heating.',
    priceRange: { min: 599, max: 699 },
    priceDisplay: '$599 - $699',
    keyFeatures: [
      'Low-EMF infrared heating',
      'Portable and foldable design',
      'Premium non-toxic materials',
      'Easy clean interior',
      'Adjustable temperature settings',
      'Zipper closure for easy entry'
    ],
    specs: {
      dimensions: '71" x 71" (unfolded)',
      weight: '22 lbs',
      temperature: 'Up to 165°F',
      wattage: '600W',
      warranty: '1 Year'
    },
    affiliateLink: 'https://sunhome.com/sauna-blanket?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.6,
    reviewCount: 89,
    isNew: true
  },

  // Sunlighten (pending)
  {
    id: 'sunlighten-mpulse',
    name: 'Sunlighten mPulse Aspire',
    brand: 'Sunlighten',
    category: 'sauna',
    description: '3-in-1 full-spectrum infrared sauna with Android-powered control tablet and SoloCarbon heating technology.',
    priceRange: { min: 5999, max: 7999 },
    priceDisplay: '$5,999+',
    keyFeatures: [
      '3-in-1 full-spectrum heaters',
      'Android-powered control tablet',
      'SoloCarbon heating technology',
      'Chromotherapy lighting',
      'Acoustic resonance therapy',
      'Eco-certified wood options'
    ],
    specs: {
      dimensions: 'Varies by model',
      capacity: '1-4 Person options',
      heaters: 'SoloCarbon 3-in-1',
      warranty: 'Lifetime on heaters',
    },
    affiliateLink: 'https://sunlighten.com/?aff=placeholder',
    affiliateNetwork: 'Applied - Pending',
    rating: 4.9,
    reviewCount: 312
  },

  // ═══════════════════════════════════════════════════════════════
  // RED LIGHT THERAPY
  // ═══════════════════════════════════════════════════════════════

  // Mito Red Light
  {
    id: 'mito-pro-1500',
    name: 'MitoPRO 1500',
    brand: 'Mito Red Light',
    category: 'red-light',
    description: 'High-irradiance red light therapy panel with dual-chip technology delivering both 660nm red and 850nm near-infrared light.',
    priceRange: { min: 799, max: 899 },
    priceDisplay: '$799 - $899',
    keyFeatures: [
      'Dual-chip LED technology',
      '660nm red + 850nm NIR wavelengths',
      'High irradiance: >150 mW/cm² at 6"',
      'Modular design (connect multiple panels)',
      'Digital timer and controls',
      'EMF shielding'
    ],
    specs: {
      dimensions: '36" x 9"',
      leds: '300 dual-chip LEDs',
      wavelengths: '660nm, 850nm',
      irradiance: '>150 mW/cm² at 6"',
      warranty: '3 Years'
    },
    affiliateLink: 'https://mitoredlight.com/?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.7,
    reviewCount: 203,
    isFeatured: true
  },
  {
    id: 'mito-pro-300',
    name: 'MitoPRO 300',
    brand: 'Mito Red Light',
    category: 'red-light',
    description: 'Compact red light therapy panel perfect for targeted treatments like face, joints, or small muscle groups.',
    priceRange: { min: 279, max: 329 },
    priceDisplay: '$279 - $329',
    keyFeatures: [
      'Same dual-chip technology as larger panels',
      'Portable and lightweight',
      'Tabletop stand included',
      'Digital controls',
      'Low EMF emissions'
    ],
    specs: {
      dimensions: '12" x 9"',
      leds: '60 dual-chip LEDs',
      wavelengths: '660nm, 850nm',
      irradiance: '>100 mW/cm² at 6"',
      warranty: '3 Years'
    },
    affiliateLink: 'https://mitoredlight.com/mito-pro-300?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.6,
    reviewCount: 156
  },

  // Joovv (pending)
  {
    id: 'joovv-solo-3.0',
    name: 'Joovv Solo 3.0',
    brand: 'Joovv',
    category: 'red-light',
    description: 'Clinical-grade red light therapy device with patented modular design and bluetooth connectivity.',
    priceRange: { min: 1199, max: 1499 },
    priceDisplay: '$1,199 - $1,499',
    keyFeatures: [
      'Clinical-grade irradiance',
      'Modular system (build larger setup)',
      'Bluetooth app control',
      'Red + NIR wavelengths',
      'Recovery+ mode (pulsed NIR)',
      'Ambient mode for circadian lighting'
    ],
    specs: {
      dimensions: '15.75" x 8.75"',
      treatmentArea: '25" x 18" at 12"',
      wavelengths: '660nm, 850nm',
      warranty: '2 Years',
    },
    affiliateLink: 'https://joovv.com/?aff=placeholder',
    affiliateNetwork: 'Applied - Pending',
    rating: 4.8,
    reviewCount: 445
  },

  // ═══════════════════════════════════════════════════════════════
  // CRYOTHERAPY
  // ═══════════════════════════════════════════════════════════════

  // America Cryo (approved)
  {
    id: 'america-cryo-vip-session',
    name: 'America Cryo VIP Session',
    brand: 'America Cryo',
    category: 'cryotherapy',
    description: 'Whole-body cryotherapy session at America Cryo locations. Extreme cold exposure for recovery, inflammation reduction, and energy boost.',
    priceRange: { min: 45, max: 85 },
    priceDisplay: '$45 - $85 per session',
    keyFeatures: [
      'Whole-body cryotherapy (-200°F to -240°F)',
      '2-3 minute sessions',
      'Trained technician supervision',
      'Post-session recovery area',
      'Package discounts available',
      'Membership options'
    ],
    specs: {
      duration: '2-3 minutes',
      temperature: '-200°F to -240°F',
      locations: 'Multiple US cities',
      booking: 'Online or walk-in'
    },
    affiliateLink: 'https://americacryo.com/?aff=311',
    affiliateNetwork: 'Affiliately',
    rating: 4.9,
    reviewCount: 523,
    isFeatured: true
  },

  // ═══════════════════════════════════════════════════════════════
  // PEMF
  // ═══════════════════════════════════════════════════════════════

  // Higher Dose
  {
    id: 'higher-dose-pemf-mat',
    name: 'HigherDOSE PEMF Mat',
    brand: 'HigherDOSE',
    category: 'pemf',
    description: 'Infrared PEMF mat combining pulsed electromagnetic field therapy with far-infrared heat for deep relaxation and recovery.',
    priceRange: { min: 1095, max: 1295 },
    priceDisplay: '$1,095 - $1,295',
    keyFeatures: [
      'PEMF therapy (7.8Hz frequency)',
      'Far-infrared heat',
      'Amethyst and tourmaline crystals',
      'Adjustable intensity levels',
      'Portable and flexible design',
      'Travel case included'
    ],
    specs: {
      dimensions: '73" x 28"',
      weight: '19 lbs',
      pemfFrequency: '7.8Hz (Schumann resonance)',
      temperature: 'Up to 158°F',
      warranty: '1 Year'
    },
    affiliateLink: 'https://higherdose.com/pemf-mat?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.7,
    reviewCount: 178,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'higher-dose-infrared-blanket',
    name: 'HigherDOSE Infrared Sauna Blanket',
    brand: 'HigherDOSE',
    category: 'sauna',
    description: 'Premium infrared sauna blanket with amethyst, tourmaline, and clay layers for enhanced detox and relaxation.',
    priceRange: { min: 699, max: 799 },
    priceDisplay: '$699 - $799',
    keyFeatures: [
      'Far-infrared heat technology',
      'Amethyst, tourmaline, clay layers',
      'Low EMF heating elements',
      'Adjustable time and temperature',
      'Waterproof interior',
      'Carry case included'
    ],
    specs: {
      dimensions: '71" x 71"',
      weight: '19 lbs',
      temperature: 'Up to 158°F',
      warranty: '1 Year'
    },
    affiliateLink: 'https://higherdose.com/sauna-blanket?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.8,
    reviewCount: 234
  },

  // ═══════════════════════════════════════════════════════════════
  // HYPERBARIC CHAMBERS
  // ═══════════════════════════════════════════════════════════════

  // Newtowne Hyperbarics
  {
    id: 'newtowne-27-chamber',
    name: 'Newtowne Hyperbarics 27" Chamber',
    brand: 'Newtowne Hyperbarics',
    category: 'hyperbaric',
    description: 'Mild hyperbaric oxygen therapy chamber with 1.3 ATA pressure. 27-inch diameter, perfect for home use. Improves recovery, reduces inflammation, and enhances wellness.',
    priceRange: { min: 5995, max: 5995 },
    priceDisplay: '$5,995',
    keyFeatures: [
      '1.3 ATA pressure (mild HBOT)',
      '27" internal diameter',
      'Portable and foldable design',
      'Internal pressure gauge',
      'Zipperless entry system',
      'Includes air compressor'
    ],
    specs: {
      dimensions: '27" diameter x 84" long',
      pressure: '1.3 ATA (4.4 psi)',
      weight: '35 lbs',
      material: 'Medical-grade urethane',
      warranty: '2 Years'
    },
    affiliateLink: 'https://newtownehyperbarics.com/products/portable-class-4?utm_source=healthindex',
    affiliateNetwork: 'Direct / Need to verify',
    rating: 4.7,
    reviewCount: 89,
    isFeatured: true
  },
  {
    id: 'newtowne-40-chamber',
    name: 'Newtowne Hyperbarics 40" Chamber',
    brand: 'Newtowne Hyperbarics',
    category: 'hyperbaric',
    description: 'Large mild hyperbaric chamber with 40-inch diameter. Accommodates wheelchairs and allows for comfortable sitting or lying positions.',
    priceRange: { min: 10995, max: 10995 },
    priceDisplay: '$10,995',
    keyFeatures: [
      '1.3 ATA pressure (mild HBOT)',
      '40" internal diameter (wheelchair accessible)',
      'Large viewing windows',
      'Internal and external pressure gauges',
      'Reclined seating position',
      'Emergency pressure release'
    ],
    specs: {
      dimensions: '40" diameter x 102" long',
      pressure: '1.3 ATA (4.4 psi)',
      weight: '65 lbs',
      material: 'Medical-grade urethane',
      warranty: '2 Years'
    },
    affiliateLink: 'https://newtownehyperbarics.com/products/40-inch-chamber?utm_source=healthindex',
    affiliateNetwork: 'Direct / Need to verify',
    rating: 4.8,
    reviewCount: 67
  },
  {
    id: 'newtowne-32-shallow',
    name: 'Newtowne 32" Shallow Dive Chamber',
    brand: 'Newtowne Hyperbarics',
    category: 'hyperbaric',
    description: 'Mid-size hyperbaric chamber with shallow entry point. 32-inch diameter with 1.3 ATA pressure. Balance of space and accessibility.',
    priceRange: { min: 7495, max: 7495 },
    priceDisplay: '$7,495',
    keyFeatures: [
      '1.3 ATA pressure (mild HBOT)',
      '32" internal diameter',
      'Shallow entry design',
      'Double-sided zippers',
      'Anti-roll stabilizers',
      'Carry bag included'
    ],
    specs: {
      dimensions: '32" diameter x 90" long',
      pressure: '1.3 ATA (4.4 psi)',
      weight: '42 lbs',
      material: 'Medical-grade urethane',
      warranty: '2 Years'
    },
    affiliateLink: 'https://newtownehyperbarics.com/products/32-inch-shallow-dive?utm_source=healthindex',
    affiliateNetwork: 'Direct / Need to verify',
    rating: 4.6,
    reviewCount: 45,
    isNew: true
  },

  // ═══════════════════════════════════════════════════════════════
  // COLD PLUNGE
  // ═══════════════════════════════════════════════════════════════

  // The Cold Plunge
  {
    id: 'cold-plunge-pro',
    name: 'The Cold Plunge Pro',
    brand: 'The Cold Plunge',
    category: 'cold-plunge',
    description: 'Commercial-grade cold plunge tub with powerful cooling to 39°F, filtration, and ozone sanitation. Professional recovery at home.',
    priceRange: { min: 4990, max: 4990 },
    priceDisplay: '$4,990',
    keyFeatures: [
      'Cools to 39°F (colder than most)',
      '20-micron filtration system',
      'Ozone sanitation',
      'Insulated for outdoor use',
      'No plumbing needed',
      'Cell phone holder included'
    ],
    specs: {
      dimensions: '67" x 33" x 24"',
      weight: '150 lbs (empty)',
      capacity: '100 gallons',
      cooling: '39°F minimum',
      warranty: '1 Year'
    },
    affiliateLink: 'https://thecoldplunge.com/?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.8,
    reviewCount: 412,
    isFeatured: true
  },
  {
    id: 'cold-plunge-standard',
    name: 'The Cold Plunge',
    brand: 'The Cold Plunge',
    category: 'cold-plunge',
    description: 'Original cold plunge tub with cooling to 39°F. Same powerful cooling as Pro in a more compact footprint.',
    priceRange: { min: 4490, max: 4490 },
    priceDisplay: '$4,490',
    keyFeatures: [
      'Cools to 39°F',
      '20-micron filtration',
      'Ozone sanitation',
      'Indoor/outdoor use',
      'Plug-and-play setup',
      'Ergonomic design'
    ],
    specs: {
      dimensions: '67" x 24" x 24"',
      weight: '135 lbs (empty)',
      capacity: '85 gallons',
      cooling: '39°F minimum',
      warranty: '1 Year'
    },
    affiliateLink: 'https://thecoldplunge.com/original?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.7,
    reviewCount: 298
  },

  // Edge Theory Labs
  {
    id: 'edge-theory-inflatable',
    name: 'Edge Theory Inflatable Cold Plunge',
    brand: 'Edge Theory Labs',
    category: 'cold-plunge',
    description: 'Portable inflatable cold plunge with chiller. Sets up in minutes, packs down for travel. Perfect for apartments or travel.',
    priceRange: { min: 2990, max: 2990 },
    priceDisplay: '$2,990',
    keyFeatures: [
      'Inflatable design (sets up in 15 min)',
      'Includes chiller unit',
      'Cools to 37°F',
      'Military-grade materials',
      'Portable and packable',
      'Indoor/outdoor use'
    ],
    specs: {
      dimensions: '60" diameter x 30" height',
      weight: '35 lbs (without water)',
      capacity: '100 gallons',
      cooling: '37°F minimum',
      warranty: '2 Years'
    },
    affiliateLink: 'https://edgetheorylabs.com/?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.6,
    reviewCount: 156,
    isNew: true
  },

  // ═══════════════════════════════════════════════════════════════
  // COMPRESSION THERAPY
  // ═══════════════════════════════════════════════════════════════

  // Normatec (Hyperice)
  {
    id: 'normatec-3-legs',
    name: 'Normatec 3 Legs',
    brand: 'Normatec',
    category: 'compression',
    description: 'Dynamic air compression massage system for legs. Uses ZoneBoost technology for targeted recovery. Gold standard in compression therapy.',
    priceRange: { min: 799, max: 799 },
    priceDisplay: '$799',
    keyFeatures: [
      'ZoneBoost technology',
      '7 levels of compression',
      'Bluetooth app control',
      'Portable control unit',
      'Rechargeable battery (3 hr)',
      'TSA approved for travel'
    ],
    specs: {
      zones: '5 overlapping zones per leg',
      sessions: '15-30 min presets',
      battery: '3 hours',
      weight: '3.5 lbs (control unit)',
      warranty: '2 Years'
    },
    affiliateLink: 'https://hyperice.com/products/normatec-3-legs?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.8,
    reviewCount: 892,
    isFeatured: true
  },
  {
    id: 'normatec-3-full-body',
    name: 'Normatec 3 Full Body',
    brand: 'Normatec',
    category: 'compression',
    description: 'Complete compression system with leg sleeves, arm sleeves, and hip attachment. Full-body recovery solution.',
    priceRange: { min: 1999, max: 1999 },
    priceDisplay: '$1,999',
    keyFeatures: [
      'Legs, arms, and hip attachments',
      'ZoneBoost technology throughout',
      '7 compression levels',
      'Bluetooth app control',
      'Customizable sessions',
      'Professional-grade'
    ],
    specs: {
      attachments: 'Legs, arms, hips',
      zones: '5 per limb + hip zones',
      battery: '3 hours',
      weight: '4 lbs (control unit)',
      warranty: '2 Years'
    },
    affiliateLink: 'https://hyperice.com/products/normatec-3-full-body?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.9,
    reviewCount: 234
  },

  // ═══════════════════════════════════════════════════════════════
  // MASSAGE GUNS
  // ═══════════════════════════════════════════════════════════════

  // Therabody (Theragun)
  {
    id: 'theragun-pro-plus',
    name: 'Theragun PRO Plus',
    brand: 'Therabody',
    category: 'massage',
    description: 'Professional percussive therapy device with vibration, heat, and breathwork. The most advanced massage gun available.',
    priceRange: { min: 599, max: 599 },
    priceDisplay: '$599',
    keyFeatures: [
      'Percussion + vibration + heat',
      'Built-in biometric sensor',
      'Breathwork guided routines',
      'QuietForce technology',
      'OLED screen with force meter',
      '6 attachments included'
    ],
    specs: {
      percussions: 'Up to 2400 PPM',
      amplitude: '16mm',
      stallForce: '60 lbs',
      battery: '150 min total (2 swappable)',
      warranty: '2 Years'
    },
    affiliateLink: 'https://therabody.com/us/en-us/theragun-pro-plus.html?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.7,
    reviewCount: 1234,
    isFeatured: true
  },
  {
    id: 'theragun-relief',
    name: 'Theragun Relief',
    brand: 'Therabody',
    category: 'massage',
    description: 'Compact, lightweight massage gun for everyday relief. Easy to use with one-touch presets. Great entry-level option.',
    priceRange: { min: 199, max: 199 },
    priceDisplay: '$199',
    keyFeatures: [
      'Lightweight (1.5 lbs)',
      'One-touch preset routines',
      'Ergonomic triangle grip',
      '3 speed settings',
      '3 attachments included',
      'USB-C charging'
    ],
    specs: {
      percussions: 'Up to 2450 PPM',
      amplitude: '10mm',
      stallForce: '20 lbs',
      battery: '120 min',
      warranty: '1 Year'
    },
    affiliateLink: 'https://therabody.com/us/en-us/theragun-relief.html?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.5,
    reviewCount: 567
  },

  // Hyperice (Hypervolt)
  {
    id: 'hypervolt-2-pro',
    name: 'Hypervolt 2 Pro',
    brand: 'Hyperice',
    category: 'massage',
    description: 'Premium percussion device with 5 speeds and brushless high-torque motor. Bluetooth connected with guided routines.',
    priceRange: { min: 399, max: 399 },
    priceDisplay: '$399',
    keyFeatures: [
      '5 speed settings (up to 2700 PPM)',
      '90W brushless motor',
      'Quiet Glide technology',
      'Bluetooth + Hyperice app',
      '5 interchangeable heads',
      '3 hour battery life'
    ],
    specs: {
      percussions: 'Up to 2700 PPM',
      amplitude: '14mm',
      stallForce: '40 lbs',
      battery: '180 min',
      warranty: '1 Year'
    },
    affiliateLink: 'https://hyperice.com/products/hypervolt-2-pro?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.6,
    reviewCount: 789
  },

  // ═══════════════════════════════════════════════════════════════
  // RED LIGHT - FACE MASKS
  // ═══════════════════════════════════════════════════════════════

  // CurrentBody
  {
    id: 'currentbody-mask',
    name: 'CurrentBody Skin LED Light Therapy Mask',
    brand: 'CurrentBody',
    category: 'red-light',
    description: 'FDA-cleared LED face mask with red and near-infrared light. Clinically proven to reduce wrinkles in 4 weeks.',
    priceRange: { min: 380, max: 380 },
    priceDisplay: '$380',
    keyFeatures: [
      'FDA-cleared device',
      'Red (633nm) + NIR (830nm)',
      '132 LED bulbs',
      '10-minute auto sessions',
      'Flexible silicone design',
      'Clinically proven results'
    ],
    specs: {
      wavelengths: '633nm red, 830nm NIR',
      leds: '132 bulbs (66 red, 66 NIR)',
      sessionTime: '10 minutes',
      battery: 'Uses power cord',
      warranty: '2 Years'
    },
    affiliateLink: 'https://currentbody.com/products/currentbody-skin-led-mask?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.5,
    reviewCount: 892,
    isNew: true
  },

  // Omnilux
  {
    id: 'omnilux-contour',
    name: 'Omnilux Contour Face',
    brand: 'Omnilux',
    category: 'red-light',
    description: 'Flexible LED face mask using medical-grade red and infrared light. Developed by Omnilux Medical, the clinical LED therapy leader.',
    priceRange: { min: 395, max: 395 },
    priceDisplay: '$395',
    keyFeatures: [
      'Medical-grade LEDs',
      'Red (633nm) + infrared (830nm)',
      'Flexible medical silicone',
      '10-minute treatments',
      'Clinically proven wavelengths',
      'Used by dermatologists'
    ],
    specs: {
      wavelengths: '633nm, 830nm',
      leds: '132 medical-grade LEDs',
      sessionTime: '10 minutes',
      treatments: '70,000+ lamp hours',
      warranty: '2 Years'
    },
    affiliateLink: 'https://omniluxled.com/products/omnilux-contour-face?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.6,
    reviewCount: 456
  },

  // ═══════════════════════════════════════════════════════════════
  // AIR PURIFIERS
  // ═══════════════════════════════════════════════════════════════

  // IQAir
  {
    id: 'iqair-healthpro-plus',
    name: 'IQAir HealthPro Plus',
    brand: 'IQAir',
    category: 'air-purifier',
    description: 'Medical-grade air purifier with HyperHEPA filtration down to 0.003 microns. Swiss-made, used in hospitals worldwide.',
    priceRange: { min: 899, max: 899 },
    priceDisplay: '$899',
    keyFeatures: [
      'HyperHEPA (0.003 micron)',
      'V5-Cell gas/odor filter',
      'PreMax pre-filter',
      '320 CFM airflow',
      'Covers 1,125 sq ft',
      'Swiss-made quality'
    ],
    specs: {
      coverage: '1,125 sq ft',
      cadr: '320 CFM',
      filtration: '0.003 microns',
      filters: 'HyperHEPA + V5-Cell + PreMax',
      noise: '25-59 dB',
      warranty: '10 Years'
    },
    affiliateLink: 'https://iqair.com/us/air-purifiers/healthpro-series?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.8,
    reviewCount: 1234,
    isFeatured: true
  },

  // Molekule
  {
    id: 'molekule-air-pro',
    name: 'Molekule Air Pro',
    brand: 'Molekule',
    category: 'air-purifier',
    description: 'Air purifier using PECO-HEPA filtration that destroys pollutants, not just traps them. Captures 99.97% of particles.',
    priceRange: { min: 814, max: 814 },
    priceDisplay: '$814',
    keyFeatures: [
      'PECO-HEPA filtration',
      'Destroys viruses, bacteria, mold',
      'Auto mode with particle sensor',
      'Whisper quiet (30 dB)',
      'Covers 1,000 sq ft',
      'App control'
    ],
    specs: {
      coverage: '1,000 sq ft',
      filtration: 'PECO-HEPA',
      sensor: 'Particle sensor (PM1, PM2.5, PM10)',
      noise: '30-65 dB',
      connectivity: 'WiFi, iOS/Android app',
      warranty: '2 Years'
    },
    affiliateLink: 'https://molekule.com/products/air-pro?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.4,
    reviewCount: 678
  },

  // Austin Air HealthMate
  {
    id: 'austin-air-healthmate',
    name: 'Austin Air HealthMate Plus',
    brand: 'Austin Air',
    category: 'air-purifier',
    description: 'Medical-grade HEPA air purifier with activated carbon for chemicals and VOCs. 15 lbs of carbon-zeolite mix.',
    priceRange: { min: 715, max: 715 },
    priceDisplay: '$715',
    keyFeatures: [
      'Medical-grade HEPA',
      '15 lbs activated carbon',
      'Removes chemicals, VOCs, odors',
      '360° air intake',
      '3 speed settings',
      'Made in USA'
    ],
    specs: {
      coverage: '1,500 sq ft',
      hepa: '60 sq ft medical-grade',
      carbon: '15 lbs activated carbon',
      speed: '3 speeds',
      filterLife: '5 years',
      warranty: '5 Years'
    },
    affiliateLink: 'https://austinair.com/products/healthmate-plus?aff=placeholder',
    affiliateNetwork: 'Pending Application',
    rating: 4.7,
    reviewCount: 523
  }
]

// ═══════════════════════════════════════════════════════════════
// Helper Functions
// ═══════════════════════════════════════════════════════════════

export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter(p => p.category === category)
}

export function getProductsByBrand(brand: string): Product[] {
  return PRODUCTS.filter(p => p.brand.toLowerCase() === brand.toLowerCase())
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.isFeatured)
}

export function getNewProducts(): Product[] {
  return PRODUCTS.filter(p => p.isNew)
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id)
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim()
  if (!q) return PRODUCTS
  return PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.keyFeatures.some(f => f.toLowerCase().includes(q))
  )
}

export function getCategoryById(id: ProductCategory): CategoryInfo | undefined {
  return CATEGORIES.find(c => c.id === id)
}

export function getAllBrands(): string[] {
  const brands = new Set(PRODUCTS.map(p => p.brand))
  return Array.from(brands).sort()
}

export function getAffiliateStatus(): { 
  approved: Product[]; 
  pending: Product[]; 
  notApplied: Product[] 
} {
  return {
    approved: PRODUCTS.filter(p => p.affiliateNetwork?.includes('Approved') || p.affiliateNetwork?.includes('Affiliately')),
    pending: PRODUCTS.filter(p => p.affiliateNetwork?.includes('Pending') || p.affiliateNetwork?.includes('Applied')),
    notApplied: PRODUCTS.filter(p => !p.affiliateNetwork || p.affiliateNetwork === 'None')
  }
}
