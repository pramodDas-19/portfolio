"use client";

import { useTheme } from "./theme-provider";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full border border-sand-200 dark:border-coastal-800 bg-sand-100/50 dark:bg-coastal-950/50 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`inline-flex items-center justify-center w-9 h-9 rounded-full border border-sand-300 dark:border-coastal-800 bg-sand-100 dark:bg-coastal-900/80 text-coastal-900 dark:text-sand-200 hover:bg-sand-200 dark:hover:bg-coastal-800 transition-colors focus-visible:ring-2 focus-visible:ring-coastal-500 ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-sand-300" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4 text-coastal-800" aria-hidden="true" />
      )}
    </button>
  );
}

