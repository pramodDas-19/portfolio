import { projects, agencyInfo } from "@/data/projects";

export function StatsRow() {
  const stats = [
    {
      value: "35+",
      label: "Bespoke Websites Launched",
      subtext: "Handcrafted across Goa & nationwide",
    },
    {
      value: "35+",
      label: "Client Industries & Niches",
      subtext: "Hospitality, Real Estate, SaaS, Luxury",
    },
    {
      value: "100%",
      label: "Custom Code & Architecture",
      subtext: "Zero generic site-builder templates",
    },
    {
      value: "2",
      label: "Agency Principals",
      subtext: "Pramod Das & Kalyani Patil",
    },
  ];

  return (
    <section className="w-full bg-sand-100/50 dark:bg-coastal-900/40 border-b border-sand-200/80 dark:border-coastal-800/60 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-coastal-900 dark:text-sand-50 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-coastal-800 dark:text-sand-200">
                {stat.label}
              </div>
              <div className="text-xs text-coastal-600 dark:text-sand-400">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

