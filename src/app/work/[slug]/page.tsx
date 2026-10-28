import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getAllProjects,
  getProjectBySlug,
  getAdjacentProjects,
  agencyInfo,
} from "@/data/projects";
import {
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Layers,
  Sparkles,
  Palette,
  CheckCircle2,
  Cpu,
  Monitor,
  Smartphone,
  Quote as QuoteIcon,
  MessageSquare,
} from "lucide-react";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const desktopImg =
    project.images.find((img) => img.kind === "desktop") || project.images[0];

  return {
    title: `${project.name} Case Study | ${agencyInfo.name}`,
    description: project.summary,
    openGraph: {
      title: `${project.name} | Web Design Case Study`,
      description: project.summary,
      url: `https://daspatil.studio/work/${project.slug}`,
      siteName: agencyInfo.name,
      images: [
        {
          url: desktopImg.src,
          width: 1200,
          height: 630,
          alt: `${project.name} Desktop Preview`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${agencyInfo.name}`,
      description: project.summary,
      images: [desktopImg.src],
    },
    alternates: {
      canonical: `https://daspatil.studio/work/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(project.slug);

  const desktopImage =
    project.images.find((img) => img.kind === "desktop") || project.images[0];
  const mobileImage =
    project.images.find((img) => img.kind === "mobile") || project.images[1];

  const whatsappInquiry = `https://wa.me/91${agencyInfo.phones[0]}?text=${encodeURIComponent(
    `Hi Pramod & Kalyani, I saw your ${project.name} case study and want a similar website for my business.`
  )}`;

  // JSON-LD CreativeWork Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    headline: project.summary,
    author: {
      "@type": "Organization",
      name: agencyInfo.name,
    },
    creator: {
      "@type": "Organization",
      name: agencyInfo.name,
    },
    datePublished: `${project.year}-01-01`,
    description: project.overview,
    url: `https://daspatil.studio/work/${project.slug}`,
    image: `https://daspatil.studio${desktopImage.src}`,
  };

  return (
    <article className="min-h-screen py-12 sm:py-20">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Back Link */}
        <div>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-semibold text-coastal-700 dark:text-sand-400 hover:text-coastal-950 dark:hover:text-sand-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* 1. HEADER SECTION */}
        <header className="space-y-8 pb-12 border-b border-sand-200/80 dark:border-coastal-800/80">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-clay-100 dark:bg-clay-950/60 text-clay-700 dark:text-clay-300 border border-clay-500/20">
              {project.clientType}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-coastal-600 dark:text-sand-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{project.year}</span>
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4 max-w-4xl">
              <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-coastal-950 dark:text-sand-50 tracking-tight leading-[1.1]">
                {project.name}
              </h1>
              <p className="text-xl sm:text-2xl text-coastal-800/90 dark:text-sand-200/90 leading-relaxed font-normal">
                {project.summary}
              </p>
            </div>

            {/* Live Site Button */}
            <div className="shrink-0">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-coastal-900 dark:bg-sand-50 text-sand-50 dark:text-coastal-950 font-semibold text-sm shadow-md hover:bg-coastal-800 dark:hover:bg-sand-200 transition-all hover:translate-y-[-1px] focus-visible:ring-2 focus-visible:ring-coastal-500"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Metadata Grid: Client, Year, Our Role */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-sand-200/60 dark:border-coastal-800/60">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-coastal-600 dark:text-sand-400">
                Client
              </div>
              <div className="mt-1 text-sm font-bold text-coastal-950 dark:text-sand-100">
                {project.client}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-coastal-600 dark:text-sand-400">
                Industry
              </div>
              <div className="mt-1 text-sm font-bold text-coastal-950 dark:text-sand-100">
                {project.clientType}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-coastal-600 dark:text-sand-400">
                Year
              </div>
              <div className="mt-1 text-sm font-bold text-coastal-950 dark:text-sand-100">
                {project.year}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-coastal-600 dark:text-sand-400">
                Our Role
              </div>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {project.role.map((r, i) => (
                  <span
                    key={i}
                    className="inline-block text-[11px] font-medium px-2 py-0.5 rounded bg-sand-200/70 dark:bg-coastal-800 text-coastal-800 dark:text-sand-300"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* HERO IMAGE SHOWCASE */}
        <section className="relative rounded-2xl overflow-hidden border border-sand-300 dark:border-coastal-800 bg-sand-200/50 dark:bg-coastal-950 shadow-lg">
          <div className="h-8 bg-sand-100 dark:bg-coastal-900 border-b border-sand-200 dark:border-coastal-800 px-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-clay-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-sand-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="text-xs font-mono text-coastal-600 dark:text-sand-400">
              {project.liveUrl}
            </div>
            <div className="w-8" />
          </div>
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
            <Image
              src={desktopImage.src}
              alt={desktopImage.alt}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>
        </section>

        {/* 2. OVERVIEW, PROBLEM & SOLUTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-widest font-bold text-clay-600 dark:text-clay-400">
              Context & Objectives
            </div>
            <h2 className="font-display text-3xl font-bold text-coastal-950 dark:text-sand-50">
              Project Narrative
            </h2>
            <p className="text-sm text-coastal-700/80 dark:text-sand-400">
              Transforming business objectives into high-velocity digital flagships.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-wider font-bold text-coastal-900 dark:text-sand-100">
                The Client & Business
              </h3>
              <p className="text-base sm:text-lg text-coastal-800/90 dark:text-sand-200/90 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Problem */}
            <div className="p-6 rounded-2xl border border-sand-300 dark:border-coastal-800 bg-sand-100/50 dark:bg-coastal-900/40 space-y-3">
              <div className="flex items-center gap-2 text-clay-600 dark:text-clay-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>The Challenge Beforehand</span>
              </div>
              <p className="text-base text-coastal-800/90 dark:text-sand-200/90 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-50/30 dark:bg-emerald-950/20 space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>What We Built & Key Decisions</span>
              </div>
              <p className="text-base text-coastal-900/90 dark:text-sand-100/90 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* 3. KEY FEATURES (4-6 items with explanation) */}
        {project.features && project.features.length > 0 && (
          <section className="space-y-8 pt-8 border-t border-sand-200/80 dark:border-coastal-800/80">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest font-bold text-clay-600 dark:text-clay-400">
                Core Capabilities
              </div>
              <h2 className="font-display text-3xl font-bold text-coastal-950 dark:text-sand-50">
                Key Features Built
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-sand-200 dark:border-coastal-800 bg-sand-50 dark:bg-coastal-900/60 space-y-2.5 hover:border-sand-300 dark:hover:border-coastal-700 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sand-200 dark:bg-coastal-800 text-xs font-bold text-coastal-900 dark:text-sand-200">
                      {idx + 1}
                    </span>
                    <h3 className="font-display text-lg font-bold text-coastal-950 dark:text-sand-50">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-sm text-coastal-800/80 dark:text-sand-300/80 leading-relaxed pl-8">
                    {feat.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. DESIGN: SCREENSHOTS (DESKTOP & MOBILE), COLORS, FONTS */}
        <section className="space-y-12 pt-8 border-t border-sand-200/80 dark:border-coastal-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest font-bold text-clay-600 dark:text-clay-400">
                Visual Art Direction
              </div>
              <h2 className="font-display text-3xl font-bold text-coastal-950 dark:text-sand-50">
                Design System & Screen Fidelity
              </h2>
            </div>
            {project.design && (
              <div className="flex items-center gap-2 text-xs text-coastal-600 dark:text-sand-400">
                <Palette className="w-4 h-4 text-clay-500" />
                <span>Bespoke Typography & Palette</span>
              </div>
            )}
          </div>

          {/* Responsive Screens Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Desktop View */}
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-coastal-800 dark:text-sand-200">
                <Monitor className="w-4 h-4 text-coastal-600 dark:text-sand-400" />
                <span>Desktop Experience (1440px)</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-sand-300 dark:border-coastal-800 bg-sand-200 dark:bg-coastal-950 shadow-md aspect-[16/10]">
                <Image
                  src={desktopImage.src}
                  alt={desktopImage.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
            </div>

            {/* Mobile View */}
            {mobileImage && (
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-coastal-800 dark:text-sand-200">
                  <Smartphone className="w-4 h-4 text-coastal-600 dark:text-sand-400" />
                  <span>Mobile Viewport (390px)</span>
                </div>
                <div className="relative mx-auto max-w-[280px] lg:max-w-none rounded-3xl overflow-hidden border-4 border-sand-300 dark:border-coastal-800 bg-sand-200 dark:bg-coastal-950 shadow-md aspect-[9/16]">
                  <Image
                    src={mobileImage.src}
                    alt={mobileImage.alt}
                    fill
                    className="object-cover object-top"
                    sizes="320px"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Colors & Fonts Used */}
          {project.design && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8 rounded-2xl border border-sand-200 dark:border-coastal-800 bg-sand-100/40 dark:bg-coastal-900/30">
              {/* Colors */}
              {project.design.colors && project.design.colors.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-coastal-900 dark:text-sand-100">
                    Primary Brand Colors
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.design.colors.map((c, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span
                          className="w-8 h-8 rounded-full border border-sand-300/80 dark:border-coastal-700 shadow-sm"
                          style={{ backgroundColor: c }}
                          title={c}
                        />
                        <span className="text-xs font-mono font-medium text-coastal-800 dark:text-sand-300">
                          {c}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Fonts */}
              {project.design.fonts && project.design.fonts.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-coastal-900 dark:text-sand-100">
                    Typography Pairing
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.design.fonts.map((f, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg border border-sand-200 dark:border-coastal-800 bg-sand-50 dark:bg-coastal-900 text-xs font-semibold text-coastal-900 dark:text-sand-200"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* 5. TECH: STACK AND WHY WE CHOSE IT */}
        <section className="space-y-8 pt-8 border-t border-sand-200/80 dark:border-coastal-800/80">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-widest font-bold text-clay-600 dark:text-clay-400">
              Engineering Architecture
            </div>
            <h2 className="font-display text-3xl font-bold text-coastal-950 dark:text-sand-50">
              Technology Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-sand-200 dark:border-coastal-800 bg-sand-50 dark:bg-coastal-900/60 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-coastal-900 dark:text-sand-100 uppercase tracking-wider">
                <Cpu className="w-4 h-4 text-coastal-600 dark:text-coastal-400" />
                <span>Next.js App Router</span>
              </div>
              <p className="text-sm text-coastal-800/80 dark:text-sand-300/80 leading-relaxed">
                Server-side rendering, streaming HTML, and edge CDN prerendering provide sub-second load times and flawless SEO crawlers.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-sand-200 dark:border-coastal-800 bg-sand-50 dark:bg-coastal-900/60 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-coastal-900 dark:text-sand-100 uppercase tracking-wider">
                <Layers className="w-4 h-4 text-clay-600 dark:text-clay-400" />
                <span>Tailwind CSS & TypeScript</span>
              </div>
              <p className="text-sm text-coastal-800/80 dark:text-sand-300/80 leading-relaxed">
                Strict type safety prevents runtime crashes, while utility styling yields zero unused CSS bundles for maximal Lighthouse performance.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-sand-200 dark:border-coastal-800 bg-sand-50 dark:bg-coastal-900/60 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-coastal-900 dark:text-sand-100 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Vercel Edge Global Network</span>
              </div>
              <p className="text-sm text-coastal-800/80 dark:text-sand-300/80 leading-relaxed">
                Deployed close to end-users worldwide with automated image optimization, SSL encryption, and instant rollbacks.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-coastal-600 dark:text-sand-400 mr-2">
              Stack tokens:
            </span>
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-mono font-semibold px-3 py-1 rounded-md bg-sand-200/60 dark:bg-coastal-800 text-coastal-900 dark:text-sand-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 6. RESULTS (REAL NUMBERS ONLY - OMIT IF NONE) */}
        {project.results && project.results.length > 0 && (
          <section className="space-y-6 pt-8 border-t border-sand-200/80 dark:border-coastal-800/80">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest font-bold text-emerald-600 dark:text-emerald-400">
                Measurable Impact
              </div>
              <h2 className="font-display text-3xl font-bold text-coastal-950 dark:text-sand-50">
                Verified Launch Results
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {project.results.map((res, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-sand-200 dark:border-coastal-800 bg-sand-50 dark:bg-coastal-900 space-y-1"
                >
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-coastal-900 dark:text-sand-50">
                    {res.value}
                  </div>
                  <div className="text-xs text-coastal-700 dark:text-sand-400 font-medium">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. CLIENT QUOTE (ONLY IF REAL - OMIT IF NONE) */}
        {project.quote && project.quote.text && (
          <section className="pt-8 border-t border-sand-200/80 dark:border-coastal-800/80">
            <div className="relative p-8 sm:p-12 rounded-3xl border border-sand-300 dark:border-coastal-800 bg-sand-100/50 dark:bg-coastal-900/50 space-y-4 max-w-3xl mx-auto text-center">
              <QuoteIcon className="w-8 h-8 text-clay-500 mx-auto opacity-70" />
              <blockquote className="text-lg sm:text-xl font-medium text-coastal-900 dark:text-sand-100 italic leading-relaxed">
                &ldquo;{project.quote.text}&rdquo;
              </blockquote>
              <div className="text-sm font-bold text-coastal-800 dark:text-sand-200">
                — {project.quote.author}
              </div>
            </div>
          </section>
        )}

        {/* 8. NEXT PROJECT NAVIGATION */}
        <nav
          aria-label="Case Study Navigation"
          className="pt-12 border-t border-sand-300 dark:border-coastal-800 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Previous Project */}
          <Link
            href={`/work/${prev.slug}`}
            className="group flex items-center gap-3 p-4 rounded-xl border border-sand-200 dark:border-coastal-800 bg-sand-50 dark:bg-coastal-900 hover:border-sand-300 dark:hover:border-coastal-700 transition-colors max-w-sm w-full"
          >
            <ArrowLeft className="w-4 h-4 text-coastal-600 dark:text-sand-400 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-wider text-coastal-600 dark:text-sand-400">
                Previous Project
              </div>
              <div className="text-sm font-bold text-coastal-900 dark:text-sand-100 group-hover:text-coastal-600 dark:group-hover:text-coastal-300 transition-colors">
                {prev.name}
              </div>
            </div>
          </Link>

          {/* Quick WhatsApp Inquiry for this project */}
          <a
            href={whatsappInquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Inquire About A Site Like {project.name}</span>
          </a>

          {/* Next Project */}
          <Link
            href={`/work/${next.slug}`}
            className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-sand-200 dark:border-coastal-800 bg-sand-50 dark:bg-coastal-900 hover:border-sand-300 dark:hover:border-coastal-700 transition-colors max-w-sm w-full text-right"
          >
            <div className="text-right flex-1">
              <div className="text-[10px] uppercase tracking-wider text-coastal-600 dark:text-sand-400">
                Next Project
              </div>
              <div className="text-sm font-bold text-coastal-900 dark:text-sand-100 group-hover:text-coastal-600 dark:group-hover:text-coastal-300 transition-colors">
                {next.name}
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-coastal-600 dark:text-sand-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </nav>
      </div>
    </article>
  );
}

