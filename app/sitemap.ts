import type { Sitemap } from "next-sitemap"

const sitemap: Sitemap = {
  areas: [
    {
      url: "https://granitecarpentry.co.za/areas/johannesburg",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Add other area pages here with priority 0.9 and weekly change frequency
  ],
  // Other configurations here
}

export default sitemap
