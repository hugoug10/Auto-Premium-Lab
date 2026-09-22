import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingDock } from "@/components/layout/FloatingDock";
import { business, seoKeywords } from "@/lib/site-config";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} — Mecánica, reparación y personalización de coches`,
    template: `%s — ${business.name}`,
  },
  description: business.description,
  keywords: seoKeywords,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: business.name,
    title: `${business.name} — ${business.tagline}`,
    description: business.description,
    url: business.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — ${business.tagline}`,
    description: business.description,
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: business.name,
    description: business.description,
    telephone: business.phoneDisplay,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressLine,
      addressLocality: business.city,
      addressRegion: business.province,
      postalCode: business.postalCode,
      addressCountry: business.country,
    },
    areaServed: business.workingArea,
    url: business.siteUrl,
    sameAs: [
      business.social.instagramUrl,
      business.social.tiktokUrl,
      business.social.facebookUrl,
    ].filter(Boolean),
  };

  return (
    <html lang="es" className={`${sora.variable} ${inter.variable}`}>
      <body className="flex min-h-svh flex-col pb-16 antialiased lg:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingDock />
      </body>
    </html>
  );
}
