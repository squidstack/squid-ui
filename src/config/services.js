// Central registry of services the UI knows about.
// requiredBy: "ui" | "other"
//
// SquidStack Demo: Only includes the 4 core services we've implemented
export const SERVICES = [
  {
    key: "kraken-auth",
    name: "Kraken Auth",
    url: "/api/kraken-auth/health",
    requiredBy: "ui",
    notes: "Authentication & user management",
  },
  {
    key: "clam-catalog",
    name: "Clam Catalog",
    url: "/api/clam-catalog/health",
    requiredBy: "ui",
    notes: "Product catalog & stock management",
  },
  {
    key: "codlocker-assets",
    name: "Codlocker Assets",
    url: "/api/codlocker-assets/health",
    requiredBy: "ui",
    notes: "Static assets & product images",
  },
  {
    key: "squid-ui",
    name: "Squid UI (self)",
    url: "/squidui", // simple self-check
    requiredBy: "ui",
    notes: "This frontend",
  },
];