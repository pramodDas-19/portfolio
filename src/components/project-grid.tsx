"use client";

import { useState, useMemo } from "react";
import { Project } from "@/types/project";
import { ProjectCard } from "./project-card";
import { Search, X, SlidersHorizontal } from "lucide-react";

interface ProjectGridProps {
  initialProjects: Project[];
}

export function ProjectGrid({ initialProjects }: ProjectGridProps) {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Compute unique client types
  const categories = useMemo(() => {
    const types = new Set<string>();
    initialProjects.forEach((p) => types.add(p.clientType));
    return ["All", ...Array.from(types).sort()];
  }, [initialProjects]);

  // Filter projects based on category & query
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesCategory =
        selectedType === "All" || project.clientType === selectedType;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        project.name.toLowerCase().includes(q) ||
        project.client.toLowerCase().includes(q) ||
        project.clientType.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.stack.some((tech) => tech.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [initialProjects, selectedType, searchQuery]);

  return (
    <section id="work" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-sand-200/80 dark:border-coastal-800/80">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-clay-600 dark:text-clay-400">
            <span>Portfolio Work</span>
            <span>•</span>
            <span>35+ Websites Delivered</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-coastal-950 dark:text-sand-50 tracking-tight">
            Selected Websites & Client Platforms
          </h2>
          <p className="text-base sm:text-lg text-coastal-800/80 dark:text-sand-300/80">
            Every website is custom engineered from scratch for performance, aesthetic distinction, and conversion.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-80">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-coastal-500 dark:text-sand-400" />
            <input
              id="project-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, client, tech..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-sand-300 dark:border-coastal-800 bg-sand-100/70 dark:bg-coastal-900/80 text-sm text-coastal-950 dark:text-sand-100 placeholder:text-coastal-600/70 dark:placeholder:text-sand-400/70 focus-visible:ring-2 focus-visible:ring-coastal-500 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded text-coastal-500 dark:text-sand-400 hover:text-coastal-900 dark:hover:text-sand-100"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="py-8 flex items-center gap-2 overflow-x-auto scrollbar-none pb-4">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-coastal-600 dark:text-sand-400 mr-2 shrink-0">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Filter:</span>
        </div>
        {categories.map((cat) => {
          const isActive = selectedType === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedType(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-coastal-500 ${
                isActive
                  ? "bg-coastal-900 dark:bg-sand-50 text-sand-50 dark:text-coastal-950 font-semibold shadow-sm"
                  : "bg-sand-100/90 dark:bg-coastal-900/70 text-coastal-800 dark:text-sand-300 hover:bg-sand-200 dark:hover:bg-coastal-800 border border-sand-200 dark:border-coastal-800/80"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div className="pb-6 text-xs text-coastal-600 dark:text-sand-400 flex items-center justify-between">
        <span>
          Showing {filteredProjects.length} of {initialProjects.length} project
          {initialProjects.length === 1 ? "" : "s"}
        </span>
        {(selectedType !== "All" || searchQuery !== "") && (
          <button
            type="button"
            onClick={() => {
              setSelectedType("All");
              setSearchQuery("");
            }}
            className="text-clay-600 dark:text-clay-400 hover:underline font-medium"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Grid of Cards */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={idx < 4}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center rounded-2xl border border-dashed border-sand-300 dark:border-coastal-800 p-8 space-y-4">
          <p className="text-lg font-medium text-coastal-900 dark:text-sand-100">
            No projects found matching &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="text-sm text-coastal-700/80 dark:text-sand-400">
            Try adjusting your search terms or selecting another industry category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedType("All");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-full bg-coastal-800 dark:bg-sand-100 text-sand-50 dark:text-coastal-950 text-xs font-semibold"
          >
            Clear all filters
          </button>
        </div>
      )}
    </section>
  );
}

