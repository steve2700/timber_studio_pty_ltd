"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ChevronRight } from "lucide-react"

const BASE_URL = "https://www.timberstudio.co.za"

// Human-friendly labels for known slugs. Anything not listed falls back to
// a title-cased version of the slug.
const LABELS: Record<string, string> = {
  areas: "Service Areas",
  "kitchen-renovations": "Kitchen Renovations",
  "bathroom-renovations": "Bathroom Renovations",
  "built-in-cupboards": "Built-in Cupboards",
  "decking-flooring": "Decking & Flooring",
  "drywall-ceilings": "Drywall & Ceilings",
  "door-installation": "Door Installation",
  "carpenter-sandhurst": "Carpenter Sandhurst",
  "carpenter-near-me-johannesburg": "Carpenter Near Me Johannesburg",
  "drywall-sandton": "Drywall Sandton",
  "drywalling-contractors-johannesburg": "Drywalling Contractors Johannesburg",
  about: "About",
  contact: "Contact",
  portfolio: "Portfolio",
  faq: "FAQ",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
}

function labelFor(segment: string): string {
  if (LABELS[segment]) return LABELS[segment]
  return segment
    .split("-")
    .map((word) => (word.length > 0 ? word[0].toUpperCase() + word.slice(1) : word))
    .join(" ")
}

export function Breadcrumbs() {
  const pathname = usePathname()

  // Never render on the home page.
  if (!pathname || pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)
  if (segments.length === 0) return null

  const crumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/")
    return { name: labelFor(segment), href }
  })

  const trail = [{ name: "Home", href: "/" }, ...crumbs]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.href === "/" ? "" : item.href}`,
    })),
  }

  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-slate-50">
      <div className="container mx-auto px-4">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 py-3 text-sm text-slate-500">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1
            return (
              <li key={item.href} className="flex items-center gap-x-1.5">
                {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />}
                {isLast ? (
                  <span className="font-medium text-slate-900" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center gap-x-1 hover:text-amber-600 transition-colors"
                  >
                    {index === 0 && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  )
}
