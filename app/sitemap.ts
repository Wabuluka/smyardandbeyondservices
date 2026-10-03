import type { MetadataRoute } from "next";
import { business, towns } from "@/lib/data";

/**
 * Bump when page content meaningfully changes. Kept fixed (not `new Date()`)
 * because Google ignores lastmod once it sees it change on every build.
 */
const LAST_MODIFIED = new Date("2026-10-03");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.url;
  const entries: MetadataRoute.Sitemap = [
    { url: base, priority: 1 },
    { url: `${base}/services`, priority: 0.9 },
    { url: `${base}/service-areas`, priority: 0.9 },
    { url: `${base}/about`, priority: 0.6 },
    { url: `${base}/contact`, priority: 0.7 },
    { url: `${base}/cookie-policy`, priority: 0.3 },
    ...towns.map((town) => ({
      url: `${base}/service-areas/${town.slug}`,
      priority: 0.8,
    })),
  ];
  return entries.map((entry) => ({ ...entry, lastModified: LAST_MODIFIED }));
}
