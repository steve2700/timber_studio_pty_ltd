import type { MetadataRoute } from "next"

const baseUrl = "https://www.timberstudio.co.za"

type SitemapEntry = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}

// Core pages
const corePages: SitemapEntry[] = [
  { path: "", changeFrequency: "daily", priority: 1 },
  { path: "/areas", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/portfolio", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
]

// Core service pages (each has a live route at /<slug>)
const serviceSlugs = [
  "kitchen-renovations",
  "bathroom-renovations",
  "built-in-cupboards",
  "decking-flooring",
  "drywall-ceilings",
  "door-installation",
]

// Studio Collections - bespoke joinery SEO landing pages
const collectionSlugs = ["custom-furniture", "home-office-fit-outs", "outdoor-timber-structures"]

// Specialist / high-intent SEO landing pages
const specialistSlugs = [
  "carpenter-sandhurst",
  "carpenter-near-me-johannesburg",
  "drywall-sandton",
  "drywalling-contractors-johannesburg",
]

// Every area page that actually exists under app/areas/<slug>
const areaSlugs = [
  "alberton",
  "bedfordview",
  "benoni",
  "boksburg",
  "carletonville",
  "centurion",
  "edenvale",
  "fourways",
  "germiston",
  "heidelberg",
  "johannesburg",
  "johannesburg-south",
  "kempton-park",
  "krugersdorp",
  "midrand",
  "nigel",
  "pretoria",
  "randburg",
  "roodepoort",
  "sandton",
  "springs",
  "vanderbijlpark",
  "vereeniging",
  "westonaria",
]

const pages: SitemapEntry[] = [
  ...corePages,
  ...serviceSlugs.map((slug) => ({
    path: `/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
  ...collectionSlugs.map((slug) => ({
    path: `/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
  ...specialistSlugs.map((slug) => ({
    path: `/${slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  })),
  ...areaSlugs.map((slug) => ({
    path: `/areas/${slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  })),
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
