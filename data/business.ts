export const BUSINESS = {
  name: "Tom Carter Drain & Plumbing",
  phone: "(402) 882-9595",
  phoneLink: "tel:+14028829595",
  address: {
    street: "1013 E Niobrara Ave",
    city: "Chadron",
    region: "NE",
    postalCode: "69337",
    country: "US",
  },
  hours: "Open 24/7 — Emergency Service Available",
  website: "https://chadrondrainhero.com",
  primaryCity: "Chadron, NE",
  region: "Northwest Nebraska",
  coordinates: { latitude: 42.83530392, longitude: -102.9882355 },
  description:
    "Professional plumbing and drain cleaning services in Chadron, NE and surrounding northwest Nebraska communities.",
  image: "/assets/images/hero-plumber.png",
} as const;

export const ADDRESS_LINE = `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.region} ${BUSINESS.address.postalCode}`;
export const SITE_URL = BUSINESS.website;
