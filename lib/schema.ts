import { BUSINESS, SITE_URL } from "@/data/business";
import { CITIES, type City } from "@/data/cities";
import type { Service } from "@/data/services";

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Plumber", "LocalBusiness"],
    name: BUSINESS.name,
    url: `${SITE_URL}/`,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.coordinates.latitude,
      longitude: BUSINESS.coordinates.longitude,
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    image: `${SITE_URL}${BUSINESS.image}`,
    description: BUSINESS.description,
    areaServed: CITIES.map((city) => ({ "@type": "City", name: city.name })),
  };
}

export function citySchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: BUSINESS.name,
    url: `${SITE_URL}/service-areas/${city.slug}/`,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    areaServed: { "@type": "City", name: city.name },
    openingHours: "Mo-Su 00:00-23:59",
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.coordinates.latitude,
      longitude: city.coordinates.longitude,
    },
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.summary,
    image: `${SITE_URL}${service.image}`,
    url: `${SITE_URL}/services/${service.slug}/`,
    provider: {
      "@type": "Plumber",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.region,
        postalCode: BUSINESS.address.postalCode,
        addressCountry: BUSINESS.address.country,
      },
    },
    areaServed: { "@type": "City", name: BUSINESS.address.city },
  };
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
