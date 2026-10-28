"use client";

import { agencyInfo } from "@/data/projects";
import { MessageSquare, Mail, Phone, Sparkles, ArrowUpRight } from "lucide-react";

export function ClosingCta() {
  const whatsapp1 = `https://wa.me/91${agencyInfo.phones[0]}?text=${encodeURIComponent(
    "Hi Pramod & Kalyani, I love your portfolio and need a website like this for my business. Can we talk?"
  )}`;

  const whatsapp2 = `https://wa.me/91${agencyInfo.phones[1]}?text=${encodeURIComponent(
    "Hi Kalyani & Pramod, I love your portfolio and need a website like this for my business. Can we talk?"
  )}`;

  const emailUrl = `mailto:${agencyInfo.emails[0]}?subject=${encodeURIComponent(
    `Website Project Inquiry | ${agencyInfo.name}`
  )}&body=${encodeURIComponent(
    "Hi Pramod & Kalyani,\n\nI came across your portfolio and would like to discuss building a website for our business.\n\nProject details:\n- Business Name:\n- Timeline:\n- Budget:\n\nLooking forward to speaking with you!"
  )}`;

  return (
    <section id="contact" className="py-24 sm:py-32 bg-sand-100/60 dark:bg-coastal-950/70 border-t border-sand-200/80 dark:border-coastal-800/80 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-clay-500/30 bg-clay-50/80 dark:bg-clay-950/40 text-clay-700 dark:text-clay-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Founder Consultation • Fast Turnarounds</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-coastal-950 dark:text-sand-50 tracking-tight max-w-3xl mx-auto">
            Need a site like this for your business?
          </h2>

          <p className="text-lg sm:text-xl text-coastal-800/80 dark:text-sand-300/80 max-w-2xl mx-auto leading-relaxed">
            We work directly with founders and business owners to build high-converting, lightning-fast digital flagships that command attention.
          </p>
        </div>

        {/* WhatsApp & Email CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2">
          {/* Primary WhatsApp */}
          <a
            href={whatsapp1}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white font-semibold text-base shadow-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all hover:translate-y-[-1px] focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span>WhatsApp Pramod: +91 {agencyInfo.phones[0]}</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </a>

          {/* Secondary WhatsApp */}
          <a
            href={whatsapp2}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-coastal-800 dark:bg-coastal-800 border border-sand-300 dark:border-coastal-700 text-sand-50 font-semibold text-base shadow-sm hover:bg-coastal-900 transition-all hover:translate-y-[-1px] focus-visible:ring-2 focus-visible:ring-coastal-500"
          >
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            <span>WhatsApp Kalyani: +91 {agencyInfo.phones[1]}</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </a>

          {/* Email Button */}
          <a
            href={emailUrl}
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-sand-300 dark:border-coastal-700 bg-sand-50 dark:bg-coastal-900 text-coastal-900 dark:text-sand-100 font-semibold text-base hover:bg-sand-200 dark:hover:bg-coastal-800 transition-all hover:translate-y-[-1px] focus-visible:ring-2 focus-visible:ring-coastal-500"
          >
            <Mail className="w-5 h-5 text-clay-600 dark:text-clay-400" />
            <span>Send Email Brief</span>
          </a>
        </div>

        {/* Agency Credentials Pill */}
        <div className="pt-6 border-t border-sand-200/80 dark:border-coastal-800/60 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-coastal-700/80 dark:text-sand-400">
          <div>
            <span className="font-semibold text-coastal-900 dark:text-sand-200">
              Agency Principals:
            </span>{" "}
            Pramod Das & Kalyani Patil
          </div>
          <span className="hidden sm:inline">•</span>
          <div>
            <span className="font-semibold text-coastal-900 dark:text-sand-200">
              Discipline:
            </span>{" "}
            Web Design and Development
          </div>
        </div>
      </div>
    </section>
  );
}

