import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://granitecarpentry.co.za"

  // Static pages
  const staticPages = ["", "/about", "/contact", "/portfolio", "/blog", "/faq", "/privacy", "/terms"]

  const servicePages = [
    "/kitchen-renovations",
    "/built-in-cupboards",
    "/quartz-granite",
    "/granite-countertops",
    "/quartz-countertops",
    "/decking-flooring",
    "/drywall-ceilings",
    "/plumbing",
  ]

  const doorPages = [
    "/door-installation", // Main hub page
    "/pivot-doors",
    "/barn-doors",
    "/security-doors",
    "/french-doors",
    "/wooden-doors",
    "/pivot-doors-sandton",
    "/barn-doors-cape-town",
    "/security-doors-johannesburg",
    "/solid-wood-doors-pretoria",
    "/french-doors-sandton",
  ]

  const drywallLocationPages = [
    "/drywall-sandton",
    "/ceiling-repairs-randburg",
    "/drywall-rosebank",
    "/suspended-ceilings-johannesburg",
    "/drywalling-contractors-johannesburg",
    "/drywall-fourways",
    "/ceiling-repairs-sandton",
    "/drywall-midrand",
    "/ceiling-repairs-vereeniging",
    "/drywall-johannesburg-south",
    "/drywall-bryanston",
    "/suspended-ceilings-sandton",
    "/drywall-centurion",
    "/ceiling-repairs-pretoria",
    "/drywall-edenvale",
    "/ceiling-installation-bryanston",
    "/drywall-pretoria",
    "/ceiling-repairs-centurion",
    "/drywall-boksburg",
    "/ceiling-installation-edenvale",
  ]

  // Area pages - all 24 areas including new Johannesburg + areas hub page
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

  const allPages = [...staticPages, ...servicePages, ...doorPages, ...drywallLocationPages, ...areaPages, ...blogPages]

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
            : // Set drywall location pages to weekly updates
              page.startsWith("/drywall-") ||
                page.startsWith("/ceiling-repairs-") ||
                page.startsWith("/suspended-ceilings-") ||
                page.startsWith("/drywalling-contractors-") ||
                page.startsWith("/ceiling-installation-")
              ? "weekly"
              : // Set door pages to weekly updates for local SEO
                page.startsWith("/door-") ||
                  page.startsWith("/pivot-doors") ||
                  page.startsWith("/barn-doors") ||
                  page.startsWith("/security-doors") ||
                  page.startsWith("/french-doors") ||
                  page.startsWith("/wooden-doors") ||
                  page.startsWith("/solid-wood-doors")
                ? "weekly"
                : page === "/kitchen-renovations" ||
                    page === "/built-in-cupboards" ||
                    page === "/quartz-granite" ||
                    page === "/plumbing" ||
                    page === "/decking-flooring" ||
                    page === "/drywall-ceilings" ||
                    page === "/granite-countertops" ||
                    page === "/quartz-countertops"
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
            : // Set door pages to 0.85 priority (high priority for local SEO)
              page.startsWith("/door-") ||
                page.startsWith("/pivot-doors") ||
                page.startsWith("/barn-doors") ||
                page.startsWith("/security-doors") ||
                page.startsWith("/french-doors") ||
                page.startsWith("/wooden-doors") ||
                page.startsWith("/solid-wood-doors")
              ? 0.85
              : // Set drywall location pages to 0.85 priority (high priority for local SEO)
                page.startsWith("/drywall-") ||
                  page.startsWith("/ceiling-repairs-") ||
                  page.startsWith("/suspended-ceilings-") ||
                  page.startsWith("/drywalling-contractors-") ||
                  page.startsWith("/ceiling-installation-")
                ? 0.85
                : page === "/kitchen-renovations" ||
                    page === "/built-in-cupboards" ||
                    page === "/quartz-granite" ||
                    page === "/plumbing" ||
                    page === "/decking-flooring" ||
                    page === "/drywall-ceilings" ||
                    page === "/granite-countertops" ||
                    page === "/quartz-countertops"
                  ? 0.8
                  : page.startsWith("/blog")
                    ? 0.7
                    : 0.6,
  }))
}
