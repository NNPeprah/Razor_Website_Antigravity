export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  image: string;
  gallery: string[];
  description: string;
  materials: string;
  architectNote: string;
  accentText: string;
  features: string[];
}

export interface ServicePillar {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  image: string;
  scope: string[];
}

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
}

export const SITE_METADATA = {
  studioName: "AURA & STONE",
  tagline: "Monolithic Architecture & Bespoke Private Residences",
  description: "Sculpting light, stone, and space into enduring residential and institutional sanctuaries worldwide.",
  contactEmail: "concierge@auraandstone.com",
  locations: ["Zurich", "London", "Geneva", "Oslo"],
  yearEstablished: "2018",
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "elysian-pavilion",
    title: "The Elysian Pavilion",
    category: "Private Residence",
    location: "Lake Lucerne, Switzerland",
    year: "2025",
    area: "1,240 m²",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=80",
    ],
    description: "A cantilevered glass and raw limestone villa balanced over alpine waters, featuring uninterrupted panoramic horizon glazing and linear evening illuminations.",
    materials: "Honed Jurassic Limestone, Low-Iron Structural Glazing, Raw Marine Concrete",
    architectNote: "Engineered to float over the lake surface while anchoring into ancient glacial bedrock behind.",
    accentText: "Explore Residence",
    features: ["Sub-surface geothermal heating", "Triple-glazed monolithic frameless facades", "Private water dock & boathouse"],
  },
  {
    id: "solarium-penthouse",
    title: "Solarium Penthouse",
    category: "Urban High-End",
    location: "Mayfair, London",
    year: "2024",
    area: "820 m²",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=80",
    ],
    description: "Multi-tiered dual-level sky sanctuary with floor-to-ceiling skylights, honed travertine flooring, and custom acoustic zoning overlooking the historic square.",
    materials: "Navona Travertine, Patinated Bronze, Acoustically Decoupled Oak Framing",
    architectNote: "A temple of silence positioned above central London, tuned for maximum natural daylight harvesting.",
    accentText: "View Penthouse",
    features: ["Acoustic decoupled chambering", "Automated light-harvesting louver arrays", "Private rooftop lap pool"],
  },
  {
    id: "nordic-monolith",
    title: "The Nordic Monolith",
    category: "Coastal Estate",
    location: "Bergen Archipelago, Norway",
    year: "2025",
    area: "1,650 m²",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=80",
    ],
    description: "Weather-resistant blackened larch and board-marked basalt concrete embedded seamlessly into rugged glacial granite cliffs and coastal pines.",
    materials: "Shou Sugi Ban Charred Larch, Board-Marked Basalt Concrete, Corten Framing",
    architectNote: "Formed to withstand sub-arctic marine gales with zero visible exterior structural fasteners.",
    accentText: "Inspect Estate",
    features: ["100% off-grid solar and micro-hydro", "Submerged subterranean wine vault", "Internal rock-face courtyard"],
  },
  {
    id: "cantilever-one",
    title: "Cantilever Villa No. 7",
    category: "Mountain Retreat",
    location: "St. Moritz, Engadin",
    year: "2026",
    area: "980 m²",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=80",
    ],
    description: "Dramatic 14-meter structural steel cantilever hovering above pristine snow pine forests, engineered for extreme thermal inertia and alpine panoramas.",
    materials: "Post-Tensioned Structural Steel, Thermal Billet Glass, Brushed Alpine Fir",
    architectNote: "A suspension bridge methodology applied to high-altitude luxury domestic living.",
    accentText: "Explore Project",
    features: ["Structural post-tensioned steel armature", "Smart radiant stone floors", "Full-height frameless corner glass"],
  },
  {
    id: "travertine-residence",
    title: "The Travertine Residence",
    category: "Mediterranean Villa",
    location: "Cap d'Antibes, Côte d'Azur",
    year: "2024",
    area: "1,420 m²",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
    ],
    description: "Monumental stone colonnades and sliding pocket glazed planes overlooking private sea-facing olive groves and reflecting infinity tiers.",
    materials: "Roman Travertine Blocks, Marine Anodized Aluminum, White Calcite Terrazzo",
    architectNote: "Reviving classical Mediterranean peristyle courtyards through modern minimal discipline.",
    accentText: "View Villa",
    features: ["Motorized disappearing glass pocket walls", "Submerged seawater lap pool", "Private olive grove & sculpture lawn"],
  },
  {
    id: "quartzite-sanctuary",
    title: "Quartzite Sanctuary",
    category: "Alpine Monolith",
    location: "Valais, Switzerland",
    year: "2026",
    area: "1,110 m²",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
    ],
    description: "Pristine orthogonal masonry and reflecting water features carved directly into high-altitude mountain terraces, creating an unyielding monolithic shelter.",
    materials: "Valser Quartzite, Solid Cast Bronze, Bush-Hammered Architectural Concrete",
    architectNote: "Monolithic purity where the boundary between mountain geology and architectural volume dissolves.",
    accentText: "Inspect Sanctuary",
    features: ["Geothermal thermal mass storage", "Underground gallery vault", "Private mountain spring fed wellness spa"],
  },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "architectural-design",
    num: "01",
    title: "Private Residences",
    subtitle: "Custom architectural design from initial land contouring to keys in hand.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "Master planning & site orientation",
      "Structural engineering & thermal envelope",
      "Frameless glazing & daylight choreography",
      "Permitting & regulatory approvals",
      "Zero-carbon sustainable building envelopes",
    ],
  },
  {
    id: "interior-architecture",
    num: "02",
    title: "Interior Architecture",
    subtitle: "Custom millwork, bespoke stone sourcing, and museum-grade tactile materials.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "Quarry selection for bespoke marble & granite",
      "Acoustic design & sensory spatial planning",
      "Custom integrated cabinetry & concealed doors",
      "Architectural lighting design & smart ambiance",
      "Rare material curation & textile finishes",
    ],
  },
  {
    id: "landscape-integration",
    num: "03",
    title: "Landscape & Terrain",
    subtitle: "Harmonizing monolithic built structures with organic natural topography.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "Topographic grading & native flora integration",
      "Infinity water features & thermal pools",
      "Outdoor pavilions, fire voids & private docks",
      "Sculptural boundary retaining walls",
      "Biophilic climate micro-zones",
    ],
  },
  {
    id: "client-advisory",
    num: "04",
    title: "Acquisitions & Advisory",
    subtitle: "Independent spatial due diligence and site feasibility for ultra-high-net-worth parcels.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    scope: [
      "Zoning & development potential auditing",
      "Historic conservation negotiation",
      "Turnkey general contractor supervision",
      "Art collection display engineering",
      "Private viewing & discreet transaction support",
    ],
  },
];

export const STUDIO_METRICS: MetricItem[] = [
  { value: "48+", label: "Bespoke Residences Completed", detail: "Across Switzerland, the UK, Scandinavia & Côte d'Azur" },
  { value: "100%", label: "Thermal Envelope Precision", detail: "Passivhaus & Net-Zero certified engineering" },
  { value: "14", label: "International Design Honors", detail: "Including ArchDaily Building of the Year & Dezeen Awards" },
  { value: "€420M", label: "Real Estate Value Created", detail: "Curated architectural equity since studio inception" },
];
