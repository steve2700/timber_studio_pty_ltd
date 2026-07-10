import type { MetadataRoute } from "next"

const baseUrl = "https://www.timberstudio.co.za"

/**
 * Exactly 18 pages, matched to the routes that actually exist after
 * cleanup-to-18.sh. Each entry is explicit rather than pattern-matched —
 * at this page count a flat list is easier to audit and keep in sync
 * with the app/ directory than prefix-based rules.
 */
const pages: {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}[] = [
  // Core pages
  { path: "", changeFrequency: "daily", priority: 1 },
  { path: "/areas", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/portfolio", changeFrequency: "yearly", priority: 0.6 },
  { path: "/faq", changeFrequency: "yearly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },

  // 6 core services
  { path: "/kitchen-renovations", changeFrequency: "monthly", priority: 0.8 },
  { path: "/built-in-cupboards", changeFrequency: "monthly", priority: 0.8 },
  { path: "/bathroom-renovations", changeFrequency: "monthly", priority: 0.8 },
  { path: "/decking-flooring", changeFrequency: "monthly", priority: 0.8 },
  { path: "/drywall-ceilings", changeFrequency: "monthly", priority: 0.8 },
  { path: "/door-installation", changeFrequency: "monthly", priority: 0.8 },

  // Top 2 carpenter pages — highest-value suburb + highest-volume generic intent
  { path: "/carpenter-sandhurst", changeFrequency: "weekly", priority: 0.85 },
  { path: "/carpenter-near-me-johannesburg", changeFrequency: "weekly", priority: 0.85 },

  // Top 2 drywall/ceiling pages — highest-value suburb + highest-volume generic intent
  { path: "/drywall-sandton", changeFrequency: "weekly", priority: 0.85 },
  { path: "/drywalling-contractors-johannesburg", changeFrequency: "weekly", priority: 0.85 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
