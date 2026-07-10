import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/", "/_next/", "/api/", "/tmp/", "/*.json$", "/search", "/404", "/500"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/", "/tmp/"],
        crawlDelay: 1,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/", "/tmp/"],
        crawlDelay: 1,
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/"],
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/"],
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/"],
      },
      {
        userAgent: "WhatsApp",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/"],
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/"],
      },
      {
        userAgent: "YouBot",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/"],
      },
    ],
    sitemap: "https://www.timberstudio.co.za/sitemap.xml",
    host: "https://www.timberstudio.co.za",
  }
}
