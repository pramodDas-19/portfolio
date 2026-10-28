import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 sm:px-6 lg:px-8 text-center">
      <div className="max-w-md space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sand-200 dark:bg-coastal-900 border border-sand-300 dark:border-coastal-800 text-clay-600 dark:text-clay-400">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <div className="font-mono text-xs uppercase tracking-widest text-clay-600 dark:text-clay-400 font-bold">
            404 Error • Page Not Found
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-coastal-950 dark:text-sand-50 tracking-tight">
            Off the charted coastline.
          </h1>
          <p className="text-sm text-coastal-700/80 dark:text-sand-300/80 leading-relaxed">
            The project or page you are looking for doesn&rsquo;t exist or may have been relocated.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coastal-900 dark:bg-sand-50 text-sand-50 dark:text-coastal-950 text-sm font-semibold hover:bg-coastal-800 dark:hover:bg-sand-200 transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

