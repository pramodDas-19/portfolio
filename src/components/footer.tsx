import Link from "next/link";
import { agencyInfo } from "@/data/projects";
import { MessageSquare, Phone, ArrowUpRight, Compass, Code2 } from "lucide-react";

export function Footer() {
  const whatsappPrimary = `https://wa.me/91${agencyInfo.phones[0]}?text=${encodeURIComponent(
    "Hi Pramod & Kalyani, I would like to consult with you about building a new website."
  )}`;

  const whatsappSecondary = `https://wa.me/91${agencyInfo.phones[1]}?text=${encodeURIComponent(
    "Hi Kalyani & Pramod, I would like to consult with you about building a new website."
  )}`;

  return (
    <footer className="w-full bg-sand-100/70 dark:bg-coastal-950 border-t border-sand-300/70 dark:border-coastal-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-coastal-900 dark:text-sand-50">
                {agencyInfo.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-coastal-800/80 dark:text-sand-300/80 max-w-md">
              {agencyInfo.promise}
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-coastal-700 dark:text-sand-400">
              <Compass className="w-4 h-4 text-clay-500" />
              <span>Engineered from {agencyInfo.location} • Deploying worldwide</span>
            </div>
          </div>

          {/* Founders & Direct Lines */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-coastal-900 dark:text-sand-100">
              Agency Principals & Direct Lines
            </h3>
            <div className="space-y-3">
              <div className="p-3 rounded-xl border border-sand-200 dark:border-coastal-800 bg-sand-50/60 dark:bg-coastal-900/60">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-coastal-900 dark:text-sand-100">
                      {agencyInfo.founders[0].name}
                    </div>
                    <div className="text-xs text-coastal-700/80 dark:text-sand-400">
                      {agencyInfo.founders[0].role}
                    </div>
                  </div>
                  <a
                    href={whatsappPrimary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
                <div className="mt-1.5 text-xs text-coastal-700/80 dark:text-sand-400 font-mono">
                  +91 {agencyInfo.phones[0]}
                </div>
              </div>

              <div className="p-3 rounded-xl border border-sand-200 dark:border-coastal-800 bg-sand-50/60 dark:bg-coastal-900/60">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-coastal-900 dark:text-sand-100">
                      {agencyInfo.founders[1].name}
                    </div>
                    <div className="text-xs text-coastal-700/80 dark:text-sand-400">
                      {agencyInfo.founders[1].role}
                    </div>
                  </div>
                  <a
                    href={whatsappSecondary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
                <div className="mt-1.5 text-xs text-coastal-700/80 dark:text-sand-400 font-mono">
                  +91 {agencyInfo.phones[1]}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Stack */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-coastal-900 dark:text-sand-100">
              Core Discipline
            </h3>
            <ul className="space-y-2 text-sm text-coastal-800/80 dark:text-sand-300/80">
              <li>• Bespoke Web Design & Art Direction</li>
              <li>• Next.js 15 & React 19 Engineering</li>
              <li>• Conversion Architecture & Lead Funnels</li>
              <li>• Sub-Second Performance Optimization</li>
              <li>• Headless Architecture & Vercel Edge</li>
            </ul>

            <div className="pt-2">
              <Link
                href="/#work"
                className="inline-flex items-center gap-1 text-xs font-semibold text-coastal-800 dark:text-sand-200 hover:text-clay-600 dark:hover:text-clay-400"
              >
                <span>Explore all portfolio works</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sand-200 dark:border-coastal-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-coastal-700/80 dark:text-sand-400">
          <div>
            © {new Date().getFullYear()} {agencyInfo.name} — Web Design and Development. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Next.js 15</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Vercel Edge</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

