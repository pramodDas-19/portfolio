import { Project, AgencyInfo } from "@/types/project";

export const agencyInfo: AgencyInfo = {
  name: "D & P Web Studio",
  shortName: "D & P",
  tagline: "Web Design and Development Studio",
  promise:
    "We design and build bespoke, high-converting digital flagships and modern web applications for luxury hospitality, real estate, and ambitious ventures.",
  location: "Goa, India",
  phones: ["8767049312", "8237858587"],
  emails: ["contact@dpwebstudio.com"],
  founders: [
    { name: "Pramod Das", role: "Co-Founder & Lead Engineer" },
    { name: "Kalyani Patil", role: "Co-Founder & Design Director" },
  ],
  specialty: "Web Design & Development",
};

export const projects: Project[] = [
  {
    slug: "drone-skyline-goa",
    name: "DroneSkylineGoa75",
    client: "Drone Skyline Goa 75",
    clientType: "Aerial Production & Media",
    year: 2025,
    liveUrl: "https://www.droneskylinegoa75.com/",
    summary:
      "DGCA-certified drone cinematography and 4K aerial videography for luxury resorts, destination weddings, and prime real estate in Goa.",
    role: [
      "Brand Strategy",
      "UI/UX Design",
      "Full Stack Development",
      "Fast Media Optimization",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    overview:
      "DroneSkylineGoa75 is Goa's premier DGCA-certified aerial cinematography studio delivering 4K 60FPS drone visuals for luxury beach resorts, destination weddings, real estate developers, and commercial film productions.",
    problem:
      "International film directors, hotel marketing teams, and wedding couples needed a fast, high-impact portfolio to review aerial footage, verify DGCA compliance, and book shoot dates without lengthy coordination.",
    solution:
      "Constructed a cinematic, high-velocity media portal with instant video reel discovery, DGCA safety credentials, service package comparisons, and direct WhatsApp flight booking.",
    features: [
      {
        title: "4K 60FPS Aerial Reel Discovery",
        text: "Ultra-fast media streaming displaying cinematic footage across Goa beaches, luxury resorts, and cliffside villas.",
      },
      {
        title: "DGCA Compliance & Licensing Hub",
        text: "Prominently displays government drone certifications, safety protocols, and insurance validation.",
      },
      {
        title: "Direct WhatsApp Shoot Booking",
        text: "Frictionless concierge inquiry connecting clients directly with the chief drone pilot for dates and permits.",
      },
      {
        title: "Tailored Production Packages",
        text: "Dedicated service tiers for wedding cinematography, resort marketing, real estate walkthroughs, and cinema shoots.",
      },
    ],
    design: {
      colors: ["#0B1B2B", "#0088FF", "#F5F8FA", "#1D3249"],
      fonts: ["Syne", "Plus Jakarta Sans"],
    },
    images: [
      {
        src: "/work/drone-skyline-goa/desktop.png",
        alt: "DroneSkylineGoa75 desktop homepage preview",
        kind: "desktop",
      },
      {
        src: "/work/drone-skyline-goa/mobile.png",
        alt: "DroneSkylineGoa75 mobile responsive preview",
        kind: "mobile",
      },
    ],
    featured: true,
  },
  {
    slug: "aurelia-sands-resort",
    name: "Aurelia Sands Resort",
    client: "Aurelia Sands Resort",
    clientType: "Hospitality",
    year: 2025,
    liveUrl: "https://aurelia-sands-resort.vercel.app/",
    summary:
      "Where the ocean meets quiet luxury — a bespoke digital flagship for a modern coastal resort.",
    role: ["UI/UX Design", "Full Stack Development", "Performance Engineering"],
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    overview:
      "Aurelia Sands is a coastal luxury boutique resort in Goa designed around quiet aesthetics, slow mornings, curated suites, and authentic oceanfront living.",
    problem:
      "The resort required a refined digital presence that conveyed serenity and exclusivity, replacing standard booking templates with a fluid, editorial experience.",
    solution:
      "Engineered an ocean-inspired web experience with tactile layout pacing, immersive room highlights, dynamic dining menus, and frictionless WhatsApp reservation triggers.",
    features: [
      {
        title: "Immersive Suite Showcase",
        text: "Interactive suite gallery highlighting floor plans, ocean panoramas, interior aesthetics, and direct booking actions.",
      },
      {
        title: "Direct WhatsApp Booking Concierge",
        text: "Eliminated third-party booking friction by connecting prospective guests instantly with resort hosts.",
      },
      {
        title: "Dining & Wellness Portals",
        text: "Curated menus and atmosphere previews for the coastal restaurant, sunset deck, and Ayurvedic wellness center.",
      },
      {
        title: "Optimized Visual Delivery",
        text: "Fast loading times and silky transitions across mobile devices and international connections.",
      },
    ],
    design: {
      colors: ["#0F2B28", "#E6DFD5", "#C49A6C", "#FAF8F5"],
      fonts: ["Cormorant Garamond", "Plus Jakarta Sans"],
    },
    images: [
      {
        src: "/work/aurelia-sands-resort/desktop.png",
        alt: "Aurelia Sands Resort desktop homepage preview",
        kind: "desktop",
      },
      {
        src: "/work/aurelia-sands-resort/mobile.png",
        alt: "Aurelia Sands Resort mobile responsive preview",
        kind: "mobile",
      },
    ],
    featured: true,
  },
  {
    slug: "elan-events",
    name: "Élan Events",
    client: "Élan Events Goa",
    clientType: "Events & Celebrations",
    year: 2025,
    liveUrl: "https://elan-events-gamma.vercel.app/",
    summary:
      "Beautifully planned, effortlessly remembered destination weddings and bespoke celebrations.",
    role: ["Brand Design", "Frontend Development", "Visual Storytelling"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    overview:
      "Élan Events is an event production and destination wedding planning agency in Goa, specializing in high-concept weddings, private celebrations, and corporate galas.",
    problem:
      "High-net-worth couples and international event planners needed an editorial portfolio that conveyed production caliber, previous grand setups, and clear inquiry workflows.",
    solution:
      "Built an editorial, high-contrast visual portfolio featuring curated event narratives, category filtering, vendor capabilities, and an inquiry system.",
    features: [
      {
        title: "Curated Event Portfolios",
        text: "Visual narrative albums for grand destination weddings, coastal ceremonies, and corporate galas.",
      },
      {
        title: "Multi-Parameter Inquiry Flow",
        text: "Structured consultation form capturing dates, guest counts, venue preferences, and aesthetic vision.",
      },
      {
        title: "Full-Scale Production Overview",
        text: "Detailed breakdowns of decor styling, artist curation, logistics, and on-day execution.",
      },
      {
        title: "Smooth Image Optimization",
        text: "Staggered transitions and responsive media delivery built for photo-heavy event galleries.",
      },
    ],
    design: {
      colors: ["#141414", "#F4F1EA", "#D4AF37", "#2A2A2A"],
      fonts: ["Playfair Display", "Plus Jakarta Sans"],
    },
    images: [
      {
        src: "/work/elan-events/desktop.png",
        alt: "Élan Events desktop preview",
        kind: "desktop",
      },
      {
        src: "/work/elan-events/mobile.png",
        alt: "Élan Events mobile view",
        kind: "mobile",
      },
    ],
    featured: true,
  },
  {
    slug: "the-ivory-hall",
    name: "The Ivory Hall",
    client: "The Ivory Hall",
    clientType: "Hospitality & Venues",
    year: 2025,
    liveUrl: "https://the-ivory-hall.vercel.app/",
    summary:
      "A refined event venue designed for weddings, banquets, and unforgettable celebrations.",
    role: ["Web Architecture", "UI Design", "Local SEO"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide React"],
    overview:
      "The Ivory Hall is an architectural banquet and convention venue offering air-conditioned grand halls, open-air lawns, and full banquet support.",
    problem:
      "Event hosts needed clear spatial metrics, hall capacity figures, stage configurations, and quick access to inspect date availability without endless phone tags.",
    solution:
      "Crafted an architectural digital presence detailing hall dimensions, banquet services, visual tour galleries, and direct venue visit bookings.",
    features: [
      {
        title: "Hall & Lawn Capacity Visualizer",
        text: "Clear breakdowns of banquet, theater, and floating capacities across individual indoor and outdoor spaces.",
      },
      {
        title: "Venue Walkthrough Gallery",
        text: "High-resolution photo tours of dining areas, stage setups, green rooms, and architectural details.",
      },
      {
        title: "Inspection & Availability Scheduling",
        text: "Direct calendar inquiry allowing prospective clients to book in-person site walk-throughs.",
      },
      {
        title: "In-House Vendor Directory",
        text: "Highlights catering facilities, valet parking, sound integration, and bridal preparation suites.",
      },
    ],
    design: {
      colors: ["#1A1A1A", "#F9F8F5", "#C5A880", "#EAE6DE"],
      fonts: ["Cinzel", "Plus Jakarta Sans"],
    },
    images: [
      {
        src: "/work/the-ivory-hall/desktop.png",
        alt: "The Ivory Hall desktop preview",
        kind: "desktop",
      },
      {
        src: "/work/the-ivory-hall/mobile.png",
        alt: "The Ivory Hall mobile view",
        kind: "mobile",
      },
    ],
    featured: true,
  },
  {
    slug: "noir-beat",
    name: "NOIR BEAT",
    client: "NOIR BEAT Entertainment",
    clientType: "Entertainment & Creative",
    year: 2025,
    liveUrl: "https://nor-bit.vercel.app/",
    summary:
      "Premier DJ performances, club residencies, sound, lighting, and nightlife production.",
    role: ["Creative Direction", "Web Development", "Audio-Visual Styling"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    overview:
      "NOIR BEAT is an audio-visual entertainment collective delivering high-energy DJ performances, state-of-the-art concert sound systems, and lighting for festivals and clubs.",
    problem:
      "The brand required a high-energy, dark-aesthetic digital presence to showcase live sets, technical stage riders, sound equipment, and quick booking access for promoters.",
    solution:
      "Engineered an electric dark-mode aesthetic with neon accents, dynamic mix previews, gear inventory specifications, and promoter booking forms.",
    features: [
      {
        title: "High-Energy Dark Aesthetics",
        text: "Deep black background paired with pulse accents mirroring stage lighting and nightlife vibes.",
      },
      {
        title: "Live Sets & Musical Genres",
        text: "Showcases previous festival performances, curated mixes, and sound styles.",
      },
      {
        title: "Technical Equipment & Rider Specs",
        text: "Detailed inventory of professional acoustics, line arrays, lighting rigs, and DJ consoles.",
      },
      {
        title: "Express Promoter Booking",
        text: "Direct booking channel for event organizers, clubs, and wedding planners.",
      },
    ],
    design: {
      colors: ["#0A0A0A", "#FF2A5F", "#00F0FF", "#1F1F1F"],
      fonts: ["Syne", "Plus Jakarta Sans"],
    },
    images: [
      {
        src: "/work/noir-beat/desktop.png",
        alt: "NOIR BEAT desktop showcase",
        kind: "desktop",
      },
      {
        src: "/work/noir-beat/mobile.png",
        alt: "NOIR BEAT mobile view",
        kind: "mobile",
      },
    ],
  },
  {
    slug: "savour-catering",
    name: "SAVOUR Catering",
    client: "SAVOUR Culinary Group",
    clientType: "Hospitality & Culinary",
    year: 2025,
    liveUrl: "https://savour-catering.vercel.app/",
    summary:
      "Exceptional food for unforgettable moments — premium bespoke catering and culinary artistry.",
    role: ["UI/UX Design", "Full Stack Development", "Menu Architecture"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    overview:
      "SAVOUR is a gourmet catering studio crafting tailored multi-course dining experiences for luxury weddings, private estates, and corporate banquets.",
    problem:
      "Clients found standard PDF catering sheets uninspired and struggled to explore live food stations, dietary alternatives, and tasting session bookings.",
    solution:
      "Built an appetizing, tactile culinary platform featuring interactive menus, live cooking counter showcases, and bespoke tasting session inquiries.",
    features: [
      {
        title: "Interactive Course Navigation",
        text: "Exploration across coastal Goan delicacies, international culinary spreads, and artisanal live counters.",
      },
      {
        title: "Dietary Labeling & Customization",
        text: "Clear indicators for vegetarian, vegan, gluten-free, and chef-curated menus.",
      },
      {
        title: "Private Chef Tasting Inquiries",
        text: "Direct pipeline for wedding couples and corporate event hosts to schedule custom tastings.",
      },
      {
        title: "Banqueting Scale Calculator",
        text: "Demonstrates catering capacity from intimate private dinners to grand 1,500-guest gatherings.",
      },
    ],
    design: {
      colors: ["#1B261D", "#FAF7F2", "#D48B54", "#2B3A2E"],
      fonts: ["Cormorant Garamond", "Plus Jakarta Sans"],
    },
    images: [
      {
        src: "/work/savour-catering/desktop.png",
        alt: "SAVOUR Catering desktop view",
        kind: "desktop",
      },
      {
        src: "/work/savour-catering/mobile.png",
        alt: "SAVOUR Catering mobile view",
        kind: "mobile",
      },
    ],
  },
  {
    slug: "spice-farm",
    name: "Royal Orchard & Spice Farm",
    client: "Royal Orchard & Spice Farm",
    clientType: "Agro-tourism & Experiences",
    year: 2025,
    liveUrl: "https://spice-farm.vercel.app/",
    summary:
      "Discover the flavours of Goa naturally — an authentic agro-tourism experience in Sattari, Goa.",
    role: ["Brand Strategy", "Website Development", "Local SEO"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide React"],
    overview:
      "Royal Orchard & Spice Farm offers immersive tours through spice plantations, tropical fruit groves, and traditional wood-fired Goan buffet lunches in Codiem Village, Sattari.",
    problem:
      "Prospective visitors were unsure about visiting hours, farm inclusions, meal packages, and rural driving directions into Sattari.",
    solution:
      "Created an earthy, nature-inspired web experience with tour itineraries, spice education, visiting hours, ticket packages, and interactive route directions.",
    features: [
      {
        title: "Guided Spice Tour Itinerary",
        text: "Explains cardamom, black pepper, vanilla, nutmeg cultivation, and traditional organic farming methods.",
      },
      {
        title: "Wood-Fired Buffet Showcase",
        text: "Highlights the traditional Goan lunch served in clay pots with local spices and heritage recipes.",
      },
      {
        title: "Route & Directions Guide",
        text: "Step-by-step driving directions from Panjim, Mapusa, and South Goa into Sattari Taluka.",
      },
      {
        title: "Group Tour WhatsApp Trigger",
        text: "Quick-connect booking for school trips, tourist excursions, and family day-outs.",
      },
    ],
    design: {
      colors: ["#173820", "#F6F7F0", "#C78330", "#3E5738"],
      fonts: ["Syne", "Plus Jakarta Sans"],
    },
    images: [
      {
        src: "/work/spice-farm/desktop.png",
        alt: "Spice Farm desktop website",
        kind: "desktop",
      },
      {
        src: "/work/spice-farm/mobile.png",
        alt: "Spice Farm mobile website",
        kind: "mobile",
      },
    ],
  },
  {
    slug: "solar-site",
    name: "SOLAR. Clean Energy",
    client: "SOLAR. Renewable Engineering",
    clientType: "Clean Tech & Engineering",
    year: 2025,
    liveUrl: "https://solar-site-virid-mu.vercel.app/",
    summary:
      "High-efficiency rooftop solar systems engineered for homes, luxury villas, and businesses in Goa.",
    role: ["UX Architecture", "Frontend Development", "Energy Calculator UI"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide React"],
    overview:
      "SOLAR. engineers turnkey rooftop solar installations, battery storage, and net-metering systems for luxury residences, boutique resorts, and commercial properties across Goa.",
    problem:
      "Property owners needed to understand estimated power savings, payback timelines, government subsidies, and aesthetic panel integration before booking site visits.",
    solution:
      "Constructed an authoritative clean-tech portal featuring interactive savings calculations, technical architecture specifications, and site survey bookings.",
    features: [
      {
        title: "Rooftop Savings Calculator",
        text: "Interactive estimation tool projecting monthly electricity bill savings and capital payback horizons.",
      },
      {
        title: "Commercial & Residential Specs",
        text: "Detailed blueprints for on-grid, off-grid, and hybrid energy systems.",
      },
      {
        title: "Salt-Resistant Coastal Engineering",
        text: "Highlights low-profile black-frame panels built to withstand coastal Goa humidity and monsoons.",
      },
      {
        title: "Instant Feasibility Assessment",
        text: "Rapid survey form capturing roof dimensions and average electricity bills for fast engineering quotes.",
      },
    ],
    design: {
      colors: ["#173F35", "#F7FAF8", "#70A95A", "#244E43"],
      fonts: ["Manrope", "Plus Jakarta Sans"],
    },
    images: [
      {
        src: "/work/solar-site/desktop.png",
        alt: "SOLAR. Clean Energy desktop view",
        kind: "desktop",
      },
      {
        src: "/work/solar-site/mobile.png",
        alt: "SOLAR. Clean Energy mobile view",
        kind: "mobile",
      },
    ],
  },
  {
    slug: "shalom-paradise",
    name: "SHALOM Paradise",
    client: "SHALOM Vacation Stay",
    clientType: "Hospitality & Vacation Stay",
    year: 2025,
    liveUrl: "https://shalomparadise.com/",
    summary:
      "Cozy 1BHK apartment stay with private pool in Seraulim, Goa — 2.5 km from Colva Beach.",
    role: ["Full Stack Development", "Direct Booking Flow", "Local SEO"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    overview:
      "SHALOM is a boutique 1BHK holiday apartment located in Seraulim, South Goa, featuring a private swimming pool, garden-view balcony, kitchenette, and high-speed Wi-Fi.",
    problem:
      "Relying solely on OTA platforms resulted in heavy platform commissions and limited personal communication with recurring guests.",
    solution:
      "Engineered an inviting direct-booking landing page highlighting verified amenities, beach proximity, house guidelines, and direct WhatsApp reservation.",
    features: [
      {
        title: "Apartment & Balcony Virtual Tour",
        text: "Crisp photography showing the air-conditioned bedroom, pool-facing balcony, and equipped kitchen.",
      },
      {
        title: "South Goa Neighborhood Guide",
        text: "Curated distances and drive times to Colva Beach, Benaulim, local bakeries, and cafes.",
      },
      {
        title: "Zero-Commission Direct Booking",
        text: "Frictionless direct WhatsApp reservation saving guest fees and giving hosts full control.",
      },
      {
        title: "Host Transparency & Amenities",
        text: "Transparent checklist detailing high-speed Wi-Fi, pool access hours, power backup, and parking.",
      },
    ],
    design: {
      colors: ["#10354A", "#F8FBFD", "#2A9D8F", "#1D5470"],
      fonts: ["Syne", "Plus Jakarta Sans"],
    },
    images: [
      {
        src: "/work/shalom-paradise/desktop.png",
        alt: "SHALOM Paradise desktop showcase",
        kind: "desktop",
      },
      {
        src: "/work/shalom-paradise/mobile.png",
        alt: "SHALOM Paradise mobile view",
        kind: "mobile",
      },
    ],
  },
  {
    slug: "global-estate-consultancy",
    name: "Global Estate Consultancy",
    client: "Global Estate Consultancy Goa",
    clientType: "Real Estate",
    year: 2025,
    liveUrl: "https://globalestateconsultancy.com/",
    summary:
      "Verified luxury villas, sea-view apartments, and commercial land across North & South Goa.",
    role: ["UI/UX Design", "Property Directory Engine", "Lead Generation"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide React"],
    overview:
      "Global Estate Consultancy is a luxury real estate advisory firm specializing in verified villas, beachfront land, and high-yield investment properties across Goa.",
    problem:
      "Real estate buyers and NRI investors struggled with unverified listings, unclear legal titles, and fragmented communication across realtors.",
    solution:
      "Constructed a luxury real estate directory featuring verified listings, region-based filtering (Assagao, Anjuna, Candolim, South Goa), legal documentation checks, and consultation booking.",
    features: [
      {
        title: "Verified Property Directory",
        text: "Detailed filters by luxury villas, sea-view apartments, commercial plots, and RERA verification.",
      },
      {
        title: "Goa Micro-Market Filtering",
        text: "Targeted browsing across prime Goa corridors including Assagao, Candolim, and South Goa beaches.",
      },
      {
        title: "Private Site Visit Scheduling",
        text: "Direct calendar integration for out-of-state buyers flying into Goa for property tours.",
      },
      {
        title: "Legal & NRI Investment Guidance",
        text: "Clear breakdowns of title due diligence, transfer procedures, and expected rental yields.",
      },
    ],
    design: {
      colors: ["#0F1E2E", "#F9FAFC", "#C5A059", "#1B3047"],
      fonts: ["Syne", "Plus Jakarta Sans"],
    },
    images: [
      {
        src: "/work/global-estate-consultancy/desktop.png",
        alt: "Global Estate Consultancy desktop",
        kind: "desktop",
      },
      {
        src: "/work/global-estate-consultancy/mobile.png",
        alt: "Global Estate Consultancy mobile",
        kind: "mobile",
      },
    ],
    featured: true,
  },
  {
    slug: "velasca-goa",
    name: "Velasca Vintage & Luxury Rentals",
    client: "Velasca Goa",
    clientType: "Luxury Rentals & Automotive",
    year: 2025,
    liveUrl: "https://www.velascagoa.com/",
    summary:
      "Curated fleet of vintage convertibles and luxury chauffeur-driven vehicles for weddings and film.",
    role: ["Art Direction", "Web Engineering", "Booking Flow"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    overview:
      "Velasca Goa provides a handpicked fleet of classic vintage cars, modern luxury convertibles, and chauffeured VIP vehicles for destination weddings, VIP transfers, and cinema shoots.",
    problem:
      "Clients and film crews needed high-res vehicle views, clear package inclusions, chauffeur terms, and guaranteed date reservation without lengthy negotiations.",
    solution:
      "Crafted an editorial automotive showcase detailing fleet specifications, wedding grand-entry packages, and direct date confirmation via WhatsApp.",
    features: [
      {
        title: "Curated Fleet Showcase",
        text: "Detailed vehicle specifications, vintage heritage, color options, and styling suggestions for weddings.",
      },
      {
        title: "Wedding & Production Packages",
        text: "Transparent hourly and full-day packages inclusive of professional uniform chauffeurs and fuel.",
      },
      {
        title: "Live Date Availability & Reservation",
        text: "Direct WhatsApp connection with fleet managers to lock dates with immediate confirmation.",
      },
      {
        title: "High-Resolution Visual Showcase",
        text: "Editorial photography showing cars against historic Goan architecture and coastal palm avenues.",
      },
    ],
    design: {
      colors: ["#1C1B19", "#F8F5EE", "#C29B38", "#332E27"],
      fonts: ["Cinzel", "Plus Jakarta Sans"],
    },
    images: [
      {
        src: "/work/velasca-goa/desktop.png",
        alt: "Velasca Goa desktop fleet view",
        kind: "desktop",
      },
      {
        src: "/work/velasca-goa/mobile.png",
        alt: "Velasca Goa mobile view",
        kind: "mobile",
      },
    ],
  },
  {
    slug: "billease",
    name: "BillEase",
    client: "BillEase Platform",
    clientType: "SaaS & Fintech",
    year: 2026,
    liveUrl: "https://billease-v1.vercel.app",
    summary:
      "Multi-tenant billing, quotation, invoice, and payment ledger SaaS for modern businesses.",
    role: ["Full Stack Architecture", "Tactile Neo-Clay UI", "Database & Auth"],
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase PostgreSQL", "React 19"],
    overview:
      "BillEase is a multi-tenant billing, quotation, and accounting platform engineered for agencies, service providers, contractors, and growing SMBs.",
    problem:
      "Businesses were struggling with manual spreadsheets, delayed receivables, and tedious manual recreation of invoices from estimates.",
    solution:
      "Engineered an all-in-one financial operating system with 1-click quotation conversion, tactile neo-claymorphism UI, real-time ledgers, and UPI QR invoicing.",
    features: [
      {
        title: "Tactile Neo-Claymorphism UI",
        text: "Bespoke physical press physics and dual-layer depth shadows creating an enjoyable accounting workflow.",
      },
      {
        title: "1-Click Quotation to Invoice",
        text: "Instantly transforms approved estimates into legal GST/tax invoices without duplicate data entry.",
      },
      {
        title: "Dynamic UPI QR Code Generator",
        text: "Generates bank-linked UPI QR codes on every customer invoice for zero-delay payment settlement.",
      },
      {
        title: "Automated WhatsApp Reminders",
        text: "1-click pre-filled payment reminders with outstanding balances sent straight to client phones.",
      },
      {
        title: "Real-Time Payments & Client CRM",
        text: "Multi-tenant audit ledger tracking partial payments, advance tokens, and customer valuation.",
      },
    ],
    design: {
      colors: ["#0F172A", "#F8FAFC", "#38BDF8", "#1E293B"],
      fonts: ["Syne", "Plus Jakarta Sans"],
    },
    images: [
      {
        src: "/work/billease/desktop.png",
        alt: "BillEase SaaS desktop dashboard",
        kind: "desktop",
      },
      {
        src: "/work/billease/mobile.png",
        alt: "BillEase SaaS mobile preview",
        kind: "mobile",
      },
    ],
    featured: true,
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(currentSlug: string): {
  prev: Project;
  next: Project;
} {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;
  return {
    prev: projects[prevIndex],
    next: projects[nextIndex],
  };
}

export function getClientTypes(): string[] {
  const types = new Set<string>();
  projects.forEach((p) => types.add(p.clientType));
  return Array.from(types).sort();
}

