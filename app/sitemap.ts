import type { MetadataRoute } from "next";
import { CITIES } from "@/data/cities";
import { SERVICES } from "@/data/services";
import { SITE_URL } from "@/data/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes = ["", "about/", "services/", "service-areas/", "contact/", "privacy-policy/"];
  const lastModified = new Date("2026-10-26T00:00:00.000Z");

  return [
    ...mainRoutes.map((route) => ({
      url: `${SITE_URL}/${route}`,
      lastModified,
      changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...CITIES.map((city) => ({
      url: `${SITE_URL}/service-areas/${city.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...SERVICES.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
