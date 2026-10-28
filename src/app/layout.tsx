import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { agencyInfo } from "@/data/projects";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf9f5" },
    { media: "(prefers-color-scheme: dark)", color: "#071514" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://daspatil.studio"),
  title: {
    default: `${agencyInfo.name} | ${agencyInfo.specialty}`,
    template: `%s | ${agencyInfo.name}`,
  },
  description: agencyInfo.promise,
  keywords: [
    "Web Design Goa",
    "Web Development Goa",
    "Next.js Agency",
    "Bespoke Web Design",
    "Luxury Hospitality Websites",
    "Real Estate Web Design",
    "Pramod Das",
    "Kalyani Patil",
    "D & P Web Studio",
  ],
  authors: [{ name: "Pramod Das" }, { name: "Kalyani Patil" }],
  creator: "D & P Web Studio",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://daspatil.studio",
    title: `${agencyInfo.name} — ${agencyInfo.specialty}`,
    description: agencyInfo.promise,
    siteName: agencyInfo.name,
    images: [
      {
        url: "/work/aurelia-sands-resort/desktop.png",
        width: 1200,
        height: 630,
        alt: `${agencyInfo.name} Portfolio Showcase`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${agencyInfo.name} | ${agencyInfo.specialty}`,
    description: agencyInfo.promise,
    images: ["/work/aurelia-sands-resort/desktop.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans antialiased selection:bg-coastal-600 selection:text-white dark:selection:bg-coastal-400 dark:selection:text-coastal-950">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

