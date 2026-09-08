# The Timber Studio (Pty) Ltd

*Custom carpentry, joinery and home renovations across Gauteng, South Africa*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)]()

## 🌐 Live Website

**Production URL:** [https://www.timberstudio.co.za](https://www.timberstudio.co.za)

## 📋 Overview

The Timber Studio designs, crafts and builds custom kitchens, built-in cupboards, bathroom renovations, decking, drywall/ceilings and door installations for homes across Gauteng. This repo is the marketing site: a Next.js App Router build with per-page SEO metadata, JSON-LD structured data, and a set of geo-targeted landing pages for local search.

> ⚠️ **Fix before launch:** the previous version of this README (inherited from the old Granite & Carpentry business) had a phone number mismatch — the displayed number and the `tel:` link pointed to two different numbers. Confirm every `tel:` href across the site actually points to **063 397 7498** before going live.

## 🎨 Brand

| Token | Value | Use |
|---|---|---|
| Charcoal | `#1C1B19` | Primary dark, headings |
| Copper | `#B36A3D` (light `#C98356`, dark `#8A4E2A`) | Primary accent, buttons, links |
| Gold | `#C6A15B` (light `#DEC084`) | Secondary accent |
| Walnut | `#4A2F1C` | Dark section backgrounds |
| Cream | `#F4EFE6` | Light backgrounds, text-on-dark |
| Paper | `#FBF8F2` | Page background |

**Tagline:** Design · Craft · Build
**Typography:** Serif display font for headings (Fraunces/Playfair Display), Inter for body copy.

## 🏗️ Technical Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS with custom brand tokens |
| Images | `next/image` — local placeholder JPGs under `/public/images/placeholders/` until real project photos are added |
| SEO | Next.js Metadata API per route + JSON-LD structured data |
| Icons | Inline SVG — no icon library dependency |
| Deployment | Vercel, auto-deploy on push to `main` |

## 🔍 SEO Implementation

- **Per-route metadata** — unique `title`, `description`, canonical URL (`www.timberstudio.co.za`), `robots` directives (`max-snippet`, `max-image-preview`), OpenGraph (`en_ZA` locale, sized image), Twitter `summary_large_image` card, geo-targeted `keywords` on every page.
- **JSON-LD structured data:**
  - `HomeAndConstructionBusiness` (sitewide, root layout)
  - `Service` schema on each of the 6 core service pages
  - `FAQPage` schema on the FAQ page and homepage FAQ teaser, matched exactly to on-page content
  - `BreadcrumbList` on nested routes
- **`sitemap.ts`** — generates the full sitemap from typed slug arrays (see Site Structure below) rather than a hand-maintained list, so new pages register automatically.
- **`robots.ts`** — points crawlers at the sitemap, allows indexing.

## 🗺️ Site Structure

**Core pages (8)**
```
/                    Home
/about
/contact
/portfolio
/faq
/privacy
/terms
/areas               Areas-served hub
```

**Core services (6)**
```
/kitchen-renovations
/bathroom-renovations
/built-in-cupboards
/decking-flooring
/drywall-ceilings
/door-installation
```

**Studio Collections (3)** — bespoke joinery landing pages
```
/custom-furniture
/home-office-fit-outs
/outdoor-timber-structures
```

**Specialist / high-intent landing pages (4)**
```
/carpenter-sandhurst                    High-value suburb
/carpenter-near-me-johannesburg         High-volume generic search intent
/drywall-sandton                        High-value suburb
/drywalling-contractors-johannesburg    High-volume generic search intent
```

**Area pages (24)** — `/areas/[slug]`
```
alberton, bedfordview, benoni, boksburg, carletonville, centurion,
edenvale, fourways, germiston, heidelberg, johannesburg,
johannesburg-south, kempton-park, krugersdorp, midrand, nigel,
pretoria, randburg, roodepoort, sandton, springs, vanderbijlpark,
vereeniging, westonaria
```

**Total: 45 routes.**

> Note: this list grew from an earlier, more conservative 18-page trim once full area pages and the Studio Collections pages were built out. If you're tracking build/hosting costs or v0 credit usage, that's worth knowing — 45 unique pages of real content is a bigger ongoing commitment than 18.

## 🛠️ Services Offered

- **Kitchen Renovations** — custom kitchen design and installation
- **Built-In Cupboards** — bespoke storage and wardrobes
- **Bathroom Renovations**
- **Decking & Flooring** — indoor and outdoor
- **Drywall & Ceilings**
- **Door Installation** — supply, fitting, and repair

*(Granite and quartz countertop services from the previous business are no longer offered — do not reference them anywhere in copy, metadata, or schema.)*

## 🌍 Service Area

**Gauteng only** — Johannesburg, Johannesburg South, Sandton, Randburg, Pretoria, Centurion, Midrand, Kempton Park, Roodepoort, Fourways, Edenvale, Boksburg, Alberton, Benoni, Germiston, Springs, Vanderbijlpark, Vereeniging, Nigel, Heidelberg, Carletonville, Krugersdorp, Westonaria, Bedfordview.

The business does not serve outside Gauteng — don't imply otherwise in copy or metadata.

## 📁 Project Structure

```
├── app/
│   ├── areas/[slug]/           # 24 area landing pages
│   ├── kitchen-renovations/    # Core service pages
│   ├── built-in-cupboards/
│   ├── bathroom-renovations/
│   ├── decking-flooring/
│   ├── drywall-ceilings/
│   ├── door-installation/
│   ├── custom-furniture/       # Studio Collections
│   ├── home-office-fit-outs/
│   ├── outdoor-timber-structures/
│   ├── carpenter-sandhurst/    # Specialist landing pages
│   ├── carpenter-near-me-johannesburg/
│   ├── drywall-sandton/
│   ├── drywalling-contractors-johannesburg/
│   ├── about/ contact/ portfolio/ faq/ privacy/ terms/
│   ├── layout.tsx              # Root layout, sitewide JSON-LD
│   ├── page.tsx                # Homepage
│   ├── sitemap.ts
│   └── robots.ts
├── components/                 # Header, Footer, shared UI blocks
├── lib/
│   ├── data/                   # services, areas, home-faqs — typed data sources
│   └── seo.ts                  # buildMetadata, schema helpers
└── public/
    └── images/placeholders/    # Placeholder JPGs — replace with real project photos
```

## 📱 Contact

- **Phone:** [063 397 7498](tel:+27633977498) — *verify this `tel:` href matches on every page before launch*
- **Email:** info@timberstudio.co.za *(confirm this is a live, monitored inbox)*
- **Address:** Gauteng, South Africa

## 🔧 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🚀 Deployment

1. Connect this repository to Vercel.
2. Add `www.timberstudio.co.za` as the custom domain in Vercel project settings.
3. Update DNS records as instructed by Vercel.
4. Push to `main` — Vercel auto-deploys, HTTPS is provisioned automatically.

## ✅ Pre-Launch Checklist

- [ ] Fix the phone number `tel:` link mismatch flagged above
- [ ] Replace all placeholder images in `/public/images/placeholders/` with real project photos
- [ ] Confirm `info@timberstudio.co.za` is a monitored inbox
- [ ] Write real, locally-specific copy for the 4 specialist landing pages and 24 area pages — avoid template-with-city-swapped content, which search engines treat as low-value
- [ ] Verify no granite/quartz/countertop language remains anywhere (copy, metadata, JSON-LD)
- [ ] Confirm the JSON-LD `HomeAndConstructionBusiness` schema has accurate `name`, `telephone`, `url`, and `logo` fields
- [ ] Remove any leftover "Built with v0" or AI-disclosure component if one still exists in the layout
