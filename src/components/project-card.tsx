"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { ExternalLink, ArrowRight, Eye } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const desktopImg =
    project.images.find((img) => img.kind === "desktop") || project.images[0];

  return (
    <article className="group relative flex flex-col rounded-2xl border border-sand-300/80 dark:border-coastal-800 bg-sand-50/70 dark:bg-coastal-900/60 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/40 transition-all duration-300 card-interactive-container">
      {/* Whole card clickable link to case study */}
      <Link
        href={`/work/${project.slug}`}
        className="absolute inset-0 z-10 focus-visible:ring-2 focus-visible:ring-coastal-500 rounded-2xl"
        aria-label={`View case study for ${project.name}`}
      >
        <span className="sr-only">View {project.name} case study</span>
      </Link>

      {/* Hero Screenshot with Standout Hover-Scroll Preview Interaction */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] bg-sand-200/50 dark:bg-coastal-950/80 overflow-hidden border-b border-sand-200 dark:border-coastal-800/80">
        {/* Device top chrome / mockup bar */}
        <div className="absolute top-0 left-0 right-0 z-20 h-7 bg-sand-100/90 dark:bg-coastal-950/90 backdrop-blur-sm border-b border-sand-200/60 dark:border-coastal-800/60 px-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-clay-400/80" />
            <span className="w-2 h-2 rounded-full bg-sand-400/80" />
            <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
          </div>
          <div className="text-[10px] font-mono tracking-tight text-coastal-600/70 dark:text-sand-400/70 truncate max-w-[200px]">
            {project.liveUrl.replace(/^https?:\/\//, "")}
          </div>
          <div className="w-8" />
        </div>

        {/* Scrollable image container */}
        <div className="relative w-full h-full pt-7 overflow-hidden">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={desktopImg.src}
              alt={desktopImg.alt}
              width={1440}
              height={900}
              priority={priority}
              className="card-preview-img w-full h-auto object-cover object-top"
            />
          </div>

          {/* Interactive preview cue pill */}
          <div className="absolute bottom-3 right-3 z-20 pointer-events-none hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-coastal-950/70 text-sand-100 text-[11px] font-medium backdrop-blur-md opacity-80 group-hover:opacity-100 transition-opacity">
            <Eye className="w-3 h-3 text-clay-400" />
            <span>Hover to preview full page</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5">
        <div className="space-y-3">
          {/* Header Row: Client Type Badge & Live Site Button */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center px-2.5 py-0.8 rounded-full text-xs font-semibold bg-sand-200/80 dark:bg-coastal-800 text-coastal-900 dark:text-sand-200">
              {project.clientType}
            </span>

            {/* Live site link (clickable without triggering card navigation) */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="relative z-20 inline-flex items-center gap-1 text-xs font-medium text-clay-700 dark:text-clay-400 hover:text-clay-900 dark:hover:text-clay-200 transition-colors p-1 -m-1 focus-visible:ring-2 focus-visible:ring-coastal-500 rounded"
              title={`Open live site for ${project.name}`}
            >
              <span>Live site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Project Name */}
          <h2 className="font-display text-2xl font-bold text-coastal-950 dark:text-sand-50 group-hover:text-coastal-600 dark:group-hover:text-coastal-300 transition-colors">
            {project.name}
          </h2>

          {/* One-line result / summary */}
          <p className="text-sm text-coastal-800/85 dark:text-sand-300/85 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Footer: Tech Stack Tags & Case Study CTA */}
        <div className="pt-2 border-t border-sand-200/80 dark:border-coastal-800/60 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.stack.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-sand-100 dark:bg-coastal-950 text-coastal-700 dark:text-sand-400 border border-sand-200/60 dark:border-coastal-800/60"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="text-[11px] font-mono text-coastal-500 dark:text-sand-500">
                +{project.stack.length - 3}
              </span>
            )}
          </div>

          <div className="inline-flex items-center gap-1 text-xs font-semibold text-coastal-800 dark:text-sand-200 group-hover:translate-x-1 transition-transform">
            <span>Read Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </article>
  );
}

