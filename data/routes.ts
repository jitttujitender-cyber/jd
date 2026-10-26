import { CITIES } from "@/data/cities";
import { SERVICES } from "@/data/services";

export const MAIN_ROUTES = [
  "/",
  "/about/",
  "/services/",
  "/service-areas/",
  "/contact/",
  "/privacy-policy/",
];

export const ALL_ROUTES = [
  ...MAIN_ROUTES,
  ...CITIES.map((city) => `/service-areas/${city.slug}/`),
  ...SERVICES.map((service) => `/services/${service.slug}/`),
];
