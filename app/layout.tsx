import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { BUSINESS, SITE_URL } from "@/data/business";
import { buildMetaDescription } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingCallButton } from "@/components/floating-call-button";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Home | ${BUSINESS.name} | Chadron, NE ${BUSINESS.phone}`,
    template: `%s | ${BUSINESS.name} | Chadron, NE ${BUSINESS.phone}`,
  },
  description: buildMetaDescription("Plumbing and drain service", "Chadron", "Emergency plumbing and drain cleaning from a local team"),
  applicationName: BUSINESS.name,
  category: "Home Services",
  alternates: { canonical: "/" },
  openGraph: {
    title: `Home | ${BUSINESS.name} | Chadron, NE ${BUSINESS.phone}`,
    description: buildMetaDescription("Plumbing and drain service", "Chadron", "Emergency plumbing and drain cleaning from a local team"),
    url: `${SITE_URL}/`,
    siteName: BUSINESS.name,
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}${BUSINESS.image}`, width: 1200, height: 630, alt: "Plumber working on a residential repair in Chadron, Nebraska" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Home | ${BUSINESS.name} | Chadron, NE ${BUSINESS.phone}`,
    description: buildMetaDescription("Plumbing and drain service", "Chadron", "Emergency plumbing and drain cleaning from a local team"),
    images: [`${SITE_URL}${BUSINESS.image}`],
  },
  icons: { icon: "/assets/images/favicon.png", apple: "/assets/images/favicon.png" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0d1f3c",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} min-h-screen bg-canvas text-ink antialiased`}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <FloatingCallButton />
      </body>
    </html>
  );
}
