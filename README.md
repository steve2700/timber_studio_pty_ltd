# Granite & Carpentry Website

*Professional carpentry and granite installation services in Johannesburg, Gauteng*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/nyaruwatastewart27-gmailcoms-projects/v0-granite-website-project)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/x8K74VTCego)

## 🚀 Live Website

**Production URL:** [https://granitecarpentry.co.za](https://granitecarpentry.co.za)

## 📋 Overview

Professional website for Granite & Carpentry - Johannesburg's leading carpentry and granite installation specialists. Features include:

- ⚡ **Lightning-fast performance** with Next.js 15
- 📱 **Fully responsive** design for all devices
- 🔍 **SEO optimized** for search engines and AI
- ♿ **Accessibility compliant** with WCAG guidelines
- 🎨 **Modern design** with Tailwind CSS
- 📞 **WhatsApp integration** for instant communication
- 🌐 **Social media ready** with Facebook integration

## 🛠️ Services Featured

- Kitchen Renovations & Joinery
- Built-in Cupboards & Wardrobes
- Quartz & Granite Installation
- Decking & Flooring
- Drywall & Ceilings
- Professional Carpentry Training

## 🌍 Service Areas

Serving all major areas across Gauteng:
- Johannesburg South (Primary)
- Sandton & Rosebank
- Randburg & Northcliff
- Kempton Park & Edenvale
- Midrand & Fourways
- Boksburg & Benoni
- Centurion & Pretoria
-capetown areas will be added soon

## 🏗️ Technical Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS with custom optimizations
- **UI Components:** Radix UI with shadcn/ui
- **Icons:** Lucide React
- **Typography:** Inter font with display swap
- **Deployment:** Vercel with automatic deployments

## 📊 Performance Features

- **Core Web Vitals optimized**
- **Image optimization** with Next.js Image
- **Font optimization** with preloading
- **CSS optimization** with Tailwind purging
- **JavaScript optimization** with SWC minification
- **Caching strategies** for static assets

## 🔧 Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 📱 Contact Information

- **Phone:** 067 601 4490
- **Email:** info@granitecarpentry.co.za
- **WhatsApp:** Available via floating widget
- **Facebook:** [facebook.com/granitecarpentry](https://www.facebook.com/granitecarpentry)
- **Google Reviews:** [5-Star Rating](https://g.co/kgs/epZT5BY)

## 🎯 SEO & Marketing

- **5-star Google rating** with 47+ reviews
- **Local SEO optimized** for Johannesburg searches
- **Structured data** for rich search results
- **Social media integration** for brand presence
- **Mobile-first indexing** ready
- **AI search engine optimized**

## 📈 Business Highlights

- ⭐ **5.0 star rating** from customers
- 🏆 **47+ completed projects**
- 💯 **100% quality guarantee**
- ⚡ **24-hour quote response**
- 🛡️ **Licensed & insured**
- 📞 **Free professional quotes**

---

*Built with ❤️ for professional carpentry excellence in Johannesburg*
\`\`\`

```plaintext file="vercel.json"
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/sitemap.xml",
      "dest": "/api/sitemap"
    },
    {
      "src": "/robots.txt",
      "dest": "/api/robots"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    },
    {
      "source": "/favicon.ico",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
