"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { agencyInfo } from "@/data/projects";
import { MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = `https://wa.me/91${agencyInfo.phones[0]}?text=${encodeURIComponent(
    "Hi Pramod & Kalyani, I saw your portfolio and would like to discuss building a website for our business."
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-sand-50/85 dark:bg-coastal-950/85 border-b border-sand-200/80 dark:border-coastal-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center focus-visible:ring-2 focus-visible:ring-coastal-500 rounded-sm"
        >
          <span className="font-display text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight whitespace-nowrap text-coastal-900 dark:text-sand-50 group-hover:text-coastal-600 dark:group-hover:text-coastal-300 transition-colors">
            D &amp; P <span className="font-medium text-coastal-700 dark:text-sand-300">Web Studio</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#work"
            className="text-sm font-medium text-coastal-800 dark:text-sand-200 hover:text-coastal-600 dark:hover:text-sand-50 transition-colors"
          >
            Work
          </Link>
          <Link
            href="/#capabilities"
            className="text-sm font-medium text-coastal-800 dark:text-sand-200 hover:text-coastal-600 dark:hover:text-sand-50 transition-colors"
          >
            Capabilities
          </Link>
          <Link
            href="/#founders"
            className="text-sm font-medium text-coastal-800 dark:text-sand-200 hover:text-coastal-600 dark:hover:text-sand-50 transition-colors"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-coastal-800 dark:text-sand-200 hover:text-coastal-600 dark:hover:text-sand-50 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-coastal-800 dark:bg-sand-100 text-sand-50 dark:text-coastal-950 hover:bg-coastal-900 dark:hover:bg-sand-200 shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-coastal-500"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 rounded-lg text-coastal-900 dark:text-sand-100 hover:bg-sand-200/50 dark:hover:bg-coastal-800/50 focus-visible:ring-2 focus-visible:ring-coastal-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-sand-200 dark:border-coastal-800 bg-sand-50 dark:bg-coastal-950 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            <Link
              href="/#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-coastal-900 dark:text-sand-100 py-1"
            >
              Selected Work
            </Link>
            <Link
              href="/#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-coastal-900 dark:text-sand-100 py-1"
            >
              Capabilities
            </Link>
            <Link
              href="/#founders"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-coastal-900 dark:text-sand-100 py-1"
            >
              About Founders
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-coastal-900 dark:text-sand-100 py-1"
            >
              Contact & Inquiries
            </Link>
          </div>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-coastal-800 dark:bg-sand-100 text-sand-50 dark:text-coastal-950 font-semibold text-sm shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
              <span>WhatsApp Us: +91 {agencyInfo.phones[0]}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

