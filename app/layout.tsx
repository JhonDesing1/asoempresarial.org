import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.fullName}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "asociación trabajadores independientes",
    "ASOEMPRESARIAL",
    "Pereira",
    "Colombia",
    "afiliación",
    "trabajadores independientes",
    "Risaralda",
  ],
  openGraph: {
    title: `${site.name} — ${site.fullName}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.fullName}`,
    description: site.description,
  },
  alternates: {
    canonical: site.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CO" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans text-slate-800 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
