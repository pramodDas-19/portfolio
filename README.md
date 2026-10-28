# D & P Web Studio — Portfolio Website

A bespoke, production-ready portfolio website engineered for **D & P Web Studio** (Pramod Das & Kalyani Patil), showcasing custom web flagships and digital platforms built for luxury hospitality, real estate, venues, and modern SaaS ventures.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌊 Aesthetic & Brand Direction: Goa Coastal

- **Palette**: Deep Oceanic Teal (`#041B1A`, `#135752`), Warm Sunlit Sand & Linen (`#FBF9F5`, `#EADFCB`), and Terracotta Clay accents (`#D36545`).
- **Typography**: Bold characterful display typography paired with crisp, high-legibility body type (`Syne` + `Plus Jakarta Sans` via `next/font/google`).
- **Dual Themes**: Both light (warm sand / linen) and dark (deep oceanic obsidian) modes.
- **Standout Interaction**: Screenshot hover-scroll preview on each project card, allowing prospective clients to preview the entire landing page below the fold before opening the case study.
- **Strict Content Fidelity**: Incorporates only real project links, accurate business models, and verified architectural decisions.

---

## 🚀 Live Client Projects Featured

1. **Aurelia Sands Resort** (`/work/aurelia-sands-resort`) — Luxury boutique coastal resort in Goa. [Live site](https://aurelia-sands-resort.vercel.app/)
2. **Élan Events** (`/work/elan-events`) — Destination weddings and bespoke celebrations in Goa. [Live site](https://elan-events-gamma.vercel.app/)
3. **The Ivory Hall** (`/work/the-ivory-hall`) — Refined banquet, hall, and grand event venue. [Live site](https://the-ivory-hall.vercel.app/)
4. **NOIR BEAT** (`/work/noir-beat`) — DJ performances, concert sound, and nightlife audio-visual production. [Live site](https://nor-bit.vercel.app/)
5. **SAVOUR Catering** (`/work/savour-catering`) — Bespoke culinary experiences for weddings and private estates. [Live site](https://savour-catering.vercel.app/)
6. **Royal Orchard & Spice Farm** (`/work/spice-farm`) — Agro-tourism and authentic spice plantation experience in Sattari, Goa. [Live site](https://spice-farm.vercel.app/)
7. **SOLAR. Clean Energy** (`/work/solar-site`) — High-efficiency rooftop solar installations for villas and businesses across Goa. [Live site](https://solar-site-virid-mu.vercel.app/)
8. **SHALOM Paradise** (`/work/shalom-paradise`) — 1BHK vacation home with private pool in Seraulim, Goa. [Live site](https://shalomparadise.com/)
9. **Global Estate Consultancy** (`/work/global-estate-consultancy`) — Luxury villas and verified real estate in Goa. [Live site](https://globalestateconsultancy.com/)
10. **Velasca Vintage & Luxury Rentals** (`/work/velasca-goa`) — Vintage car rentals for weddings and editorial shoots in Goa. [Live site](https://www.velascagoa.com/)
11. **BillEase** (`/work/billease`) — Multi-tenant billing, quotation, invoice, and payment ledger SaaS. [Live site](https://billease-v1.vercel.app/)

---

## 🛠️ Technology Stack & Architecture

- **Framework**: Next.js 15.1.7 (App Router with Static Site Generation - SSG)
- **Language**: TypeScript 5 (Strict type checking)
- **Styling**: Tailwind CSS with custom coastal tokens & CSS variables
- **Motion**: Framer Motion 12 (respects `prefers-reduced-motion`)
- **Icons**: Lucide React
- **SEO & Social**: Dynamic Metadata, OpenGraph cards, JSON-LD (`Organization` & `CreativeWork`), `sitemap.xml`, and `robots.txt`
- **Deployment**: Deploy-ready for Vercel Edge Network

---

## 📁 How to Add a New Project

Adding a new project requires **only 2 steps**:

1. Add your project images in `/public/work/<slug>/`:
   - `desktop.png` (Desktop screenshot preview)
   - `mobile.png` (Mobile responsive screenshot)

2. Add a new typed object to `src/data/projects.ts`:
```ts
{
  slug: "your-project-slug",
  name: "Project Name",
  client: "Client Name",
  clientType: "Hospitality | Real estate | SaaS | etc.",
  year: 2026,
  liveUrl: "https://example.com",
  summary: "One-line result / promise.",
  role: ["UI/UX Design", "Full Stack Development"],
  stack: ["Next.js 15", "TypeScript", "Tailwind CSS"],
  overview: "2-3 lines about the client and their business.",
  problem: "What they struggled with before.",
  solution: "What was built and key architectural decisions.",
  features: [
    { title: "Feature 1", text: "Explanation..." },
    { title: "Feature 2", text: "Explanation..." },
  ],
  design: {
    colors: ["#0F2B28", "#E6DFD5"],
    fonts: ["Display Font", "Body Font"]
  },
  images: [
    { src: "/work/your-project-slug/desktop.png", alt: "Desktop view", kind: "desktop" },
    { src: "/work/your-project-slug/mobile.png", alt: "Mobile view", kind: "mobile" }
  ],
  // Optional:
  results: [
    { label: "Launch Speed Score", value: "99/100" }
  ],
  quote: {
    text: "Real client quote only",
    author: "Client Author"
  }
}
```

The home grid, filter chips, search engine, sitemap, and dynamic case study route (`/work/[slug]`) will automatically generate for the new project!

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Create production build
npm run build

# 4. Start production server
npm start
```

---

## 📞 Studio Contact

- **Agency Principals**: Pramod Das & Kalyani Patil
- **Discipline**: Web Design and Development
- **WhatsApp Lines**: `+91 8767049312` | `+91 8237858587`
- **Location**: Goa, India (Deploying worldwide)

