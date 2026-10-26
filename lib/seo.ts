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
  const regionalLine = " Northwest Nebraska plumbing and drain support.";
  const callLine = ` Call ${BUSINESS.phone} for 24/7 service.`;
  const fixedLength = prefix.length + regionalLine.length + callLine.length + 1;
  const minFocusLength = 150 - fixedLength;
  const maxFocusLength = 160 - fixedLength;
  let center = trimToWords(focus.replace(/[.!?]+$/, "").trim(), maxFocusLength)
    .replace(/[,:;]+$/, "")
    .replace(/\s+(and|or|with|for|to|of|in|at)$/i, "");

  const fillers = ["and clear next steps", "with practical guidance", "for local homes", "with local service"];
  for (const filler of fillers) {
    if (center.length >= minFocusLength) break;
    const candidate = `${center}${center ? " " : ""}${filler}`;
    if (candidate.length <= maxFocusLength) center = candidate;
  }

  return `${prefix}${center}.${regionalLine}${callLine}`;
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
