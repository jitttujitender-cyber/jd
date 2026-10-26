import type { Metadata } from "next";
import { BUSINESS, SITE_URL } from "@/data/business";

const DEFAULT_OG_IMAGE = `${SITE_URL}${BUSINESS.image}`;
const BRAND_SUFFIX = `Tom Carter Drain & Plumbing | Chadron, NE ${BUSINESS.phone}`;

function trimToWords(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;
  const clipped = value.slice(0, maxLength + 1);
  const lastSpace = clipped.lastIndexOf(" ");
  return clipped.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim();
}

export function buildMetaDescription(topic: string, city: string, focus: string): string {
  const prefix = `${topic} in ${city}, NE. `;
  const suffix = ` Local service across northwest Nebraska. Call ${BUSINESS.phone} for 24/7 help.`;
  const target = 155;
  const available = target - prefix.length - suffix.length - 1;
  const filler = "with clear, practical guidance";
  let center = focus.replace(/[.!?]+$/, "").trim();

  if (center.length < available) {
    const padding = ` ${filler}`;
    while (center.length + padding.length <= available) center += padding;
  }
  center = trimToWords(center, available);
  if (center.length < 16) center = trimToWords(`${center} ${filler}`, available);

  return `${prefix}${center}.${suffix}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const canonicalPath = path.endsWith("/") ? path : `${path}/`;
  const absoluteUrl = `${SITE_URL}${canonicalPath}`;
  const fullTitle = `${title} | ${BRAND_SUFFIX}`;

  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl,
      siteName: BUSINESS.name,
      locale: "en_US",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: `${title} — ${BUSINESS.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
