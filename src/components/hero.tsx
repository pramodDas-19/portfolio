"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { agencyInfo, projects } from "@/data/projects";
import {
  MessageSquare,
  ArrowDown,
  Sparkles,
  ShieldCheck,
  ExternalLink,
  ArrowUpRight,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  // 3 spotlight projects for the right-column showcase
  const spotlightSlugs = ["drone-skyline-goa", "aurelia-sands-resort", "billease"];
  const spotlightProjects = spotlightSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects;

  const [activeSpotlight, setActiveSpotlight] = useState(0);
  const currentProject = spotlightProjects[activeSpotlight] || projects[0];

  const whatsappUrl = `https://wa.me/91${agencyInfo.phones[0]}?text=${encodeURIComponent(
    "Hi Pramod & Kalyani, I saw your portfolio and want to discuss building a website for our brand."
  )}`;

  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-20 border-b border-sand-200/80 dark:border-coastal-800/60">
      {/* Background coastal ambient subtle glows */}
      <div
        className="pointer-events-none absolute -top-32 right-1/4 -z-10 h-96 w-96 rounded-full bg-coastal-200/35 dark:bg-coastal-800/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-48 -left-20 -z-10 h-80 w-80 rounded-full bg-sand-300/30 dark:bg-coastal-900/35 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN: BRAND PROMISE & ACTIONS (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Studio Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-coastal-700/20 dark:border-coastal-600/30 bg-sand-100/90 dark:bg-coastal-900/80 text-coastal-900 dark:text-sand-100 text-xs sm:text-sm font-medium backdrop-blur-sm shadow-xs"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold">{agencyInfo.name}</span>
              <span className="text-coastal-400 dark:text-coastal-600">•</span>
              <span className="text-clay-600 dark:text-clay-400 font-medium">
                Pramod Das & Kalyani Patil
              </span>
            </motion.div>

            {/* Headline - Balanced size, eliminates oversized vertical stacking */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="space-y-3"
            >
              <h1 className="font-display text-3xl sm:text-5xl lg:text-5xl xl:text-[3.3rem] font-extrabold tracking-tight text-coastal-950 dark:text-sand-50 leading-[1.12]">
                Websites crafted with coastal character and{" "}
                <span className="text-coastal-600 dark:text-coastal-300 underline decoration-clay-500/50 decoration-wavy decoration-2 underline-offset-6">
                  flawless engineering.
                </span>
              </h1>
            </motion.div>

            {/* Promise Text */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="text-base sm:text-lg text-coastal-800/90 dark:text-sand-200/90 leading-relaxed font-normal max-w-2xl"
            >
              {agencyInfo.promise}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="pt-1 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-coastal-900 dark:bg-sand-50 text-sand-50 dark:text-coastal-950 font-semibold text-sm shadow-md hover:bg-coastal-800 dark:hover:bg-sand-200 transition-all hover:translate-y-[-1px] focus-visible:ring-2 focus-visible:ring-coastal-500"
              >
                <span>View our work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-emerald-600/30 dark:border-emerald-500/40 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold text-sm hover:bg-emerald-100/90 dark:hover:bg-emerald-900/50 transition-all hover:translate-y-[-1px] focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp Us: +91 {agencyInfo.phones[0]}</span>
              </a>
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="pt-2 flex flex-wrap items-center gap-5 text-xs text-coastal-700/90 dark:text-sand-400"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-clay-500" />
                <span>100% Bespoke Code — No Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Direct Founder Collaboration</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE FEATURED WORK SPOTLIGHT CARD (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-sand-300/90 dark:border-coastal-800 bg-sand-100/80 dark:bg-coastal-900/80 backdrop-blur-md shadow-xl overflow-hidden">
              {/* Card Top Chrome Bar */}
              <div className="px-4 py-3 border-b border-sand-200 dark:border-coastal-800/80 flex items-center justify-between bg-sand-200/50 dark:bg-coastal-950/70">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-coastal-900 dark:text-sand-100 uppercase tracking-wider">
                    Recent Launch Spotlight
                  </span>
                </div>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-sand-100 dark:bg-coastal-800 text-coastal-700 dark:text-sand-300">
                  {currentProject.clientType}
                </span>
              </div>

              {/* Spotlight Selector Tabs */}
              <div className="px-4 py-2 bg-sand-50/70 dark:bg-coastal-950/40 border-b border-sand-200/60 dark:border-coastal-800/60 flex items-center gap-1.5 overflow-x-auto">
                {spotlightProjects.map((p, idx) => (
                  <button
                    key={p.slug}
                    type="button"
                    onClick={() => setActiveSpotlight(idx)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      activeSpotlight === idx
                        ? "bg-coastal-900 dark:bg-sand-100 text-sand-50 dark:text-coastal-950 font-semibold shadow-xs"
                        : "text-coastal-700 dark:text-sand-300 hover:bg-sand-200/70 dark:hover:bg-coastal-800"
                    }`}
                  >
                    {p.name.replace("Goa75", "")}
                  </button>
                ))}
              </div>

              {/* Live Image Preview Frame */}
              <div className="relative aspect-[16/10] bg-sand-200/50 dark:bg-coastal-950 overflow-hidden group">
                <Image
                  src={
                    currentProject.images.find((img) => img.kind === "desktop")
                      ?.src || currentProject.images[0].src
                  }
                  alt={currentProject.name}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />

                {/* Overlay details on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-coastal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-medium text-white flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click to open case study</span>
                  </span>
                </div>

                <Link
                  href={`/work/${currentProject.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${currentProject.name} case study`}
                />
              </div>

              {/* Card Meta & Links */}
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-coastal-950 dark:text-sand-50">
                      {currentProject.name}
                    </h3>
                    <p className="text-xs text-coastal-700/90 dark:text-sand-300/90 line-clamp-1">
                      {currentProject.summary}
                    </p>
                  </div>

                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 shrink-0 p-2 rounded-lg bg-sand-200/80 dark:bg-coastal-800 text-coastal-900 dark:text-sand-200 hover:bg-sand-300 dark:hover:bg-coastal-700 transition-colors"
                    title={`Open live site for ${currentProject.name}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="pt-2 border-t border-sand-200/70 dark:border-coastal-800/70 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    {currentProject.stack.slice(0, 2).map((tech, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-sand-200/50 dark:bg-coastal-800 text-coastal-700 dark:text-sand-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/work/${currentProject.slug}`}
                    className="font-semibold text-clay-700 dark:text-clay-400 hover:text-clay-900 dark:hover:text-clay-300 inline-flex items-center gap-1"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
