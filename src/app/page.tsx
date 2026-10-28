import { Hero } from "@/components/hero";
import { StatsRow } from "@/components/stats-row";
import { ProjectGrid } from "@/components/project-grid";
import { ClosingCta } from "@/components/closing-cta";
import { projects, agencyInfo } from "@/data/projects";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: agencyInfo.name,
    description: agencyInfo.promise,
    url: "https://daspatil.studio",
    logo: "https://daspatil.studio/work/aurelia-sands-resort/desktop.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Goa",
      addressCountry: "IN",
    },
    founder: agencyInfo.founders.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: f.role,
    })),
    telephone: `+91${agencyInfo.phones[0]}`,
    knowsAbout: [
      "Web Design",
      "Next.js Development",
      "Full Stack Development",
      "UI/UX Design",
      "Performance Engineering",
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <StatsRow />
      <ProjectGrid initialProjects={projects} />
      <ClosingCta />
    </>
  );
}

