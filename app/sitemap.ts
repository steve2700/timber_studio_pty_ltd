import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://granitecarpentry.co.za"

  // Static pages
  const staticPages = ["", "/about", "/contact", "/portfolio", "/blog", "/faq", "/privacy", "/terms"]

  const servicePages = [
    "/kitchen-renovations",
    "/built-in-cupboards",
    "/quartz-granite",
    "/decking-flooring",
    "/drywall-ceilings",
    "/carpentry-training",
    "/plumbing",
  ]

  // Area pages - all 23 areas including new Johannesburg + areas hub page
  const areaPages = [
    "/areas", // Hub page for all service areas
    "/areas/johannesburg",
    "/areas/johannesburg-south",
    "/areas/sandton",
    "/areas/randburg",
    "/areas/pretoria",
    "/areas/centurion",
    "/areas/midrand",
    "/areas/kempton-park",
    "/areas/roodepoort",
    "/areas/fourways",
    "/areas/edenvale",
    "/areas/boksburg",
    "/areas/alberton",
    "/areas/benoni",
    "/areas/germiston",
    "/areas/springs",
    "/areas/vanderbijlpark",
    "/areas/vereeniging",
    "/areas/nigel",
    "/areas/heidelberg",
    "/areas/carletonville",
    "/areas/krugersdorp",
    "/areas/westonaria",
    "/areas/bedfordview",
  ]

  // Blog pages
  const blogPages = [
    "/blog/kitchen-renovation-trends-2025",
    "/blog/choosing-granite-vs-quartz",
    "/blog/built-in-cupboard-design-ideas",
  ]

  const allPages = [...staticPages, ...servicePages, ...areaPages, ...blogPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency:
      page === ""
        ? "daily"
        : page.startsWith("/blog")
          ? "weekly"
          : // Set /areas hub page to weekly updates with high priority
            page === "/areas" || page.startsWith("/areas/")
            ? "weekly"
            : page === "/kitchen-renovations" ||
                page === "/built-in-cupboards" ||
                page === "/quartz-granite" ||
                page === "/plumbing" ||
                page === "/decking-flooring" ||
                page === "/drywall-ceilings" ||
                page === "/carpentry-training"
              ? "monthly"
              : "yearly",
    priority:
      page === ""
        ? 1
        : // Set /areas hub page to 0.9 priority (same as individual area pages)
          page === "/areas"
          ? 0.9
          : page.startsWith("/areas/")
            ? 0.9
            : page === "/kitchen-renovations" ||
                page === "/built-in-cupboards" ||
                page === "/quartz-granite" ||
                page === "/plumbing" ||
                page === "/decking-flooring" ||
                page === "/drywall-ceilings" ||
                page === "/carpentry-training"
              ? 0.8
              : page.startsWith("/blog")
                ? 0.7
                : 0.6,
  }))
}
