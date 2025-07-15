import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Professional Carpenter & Granite Installation Johannesburg | Granite & Carpentry Experts",
    template: "%s | Granite & Carpentry Johannesburg",
  },
  description:
    "Leading professional carpentry and granite installation specialists in Johannesburg, Gauteng. Expert kitchen renovations, built-in cupboards, quartz countertops, decking, drywall, and ceiling services. 5-star rated with 47+ completed projects. Serving Sandton, Randburg, Kempton Park, Midrand, Fourways, Boksburg, Centurion, Pretoria. Free professional quotes and carpentry training courses available.",
  keywords:
    "professional carpenter Johannesburg, granite installation specialists Gauteng, kitchen renovation experts Sandton, built-in cupboards Randburg, quartz countertops Kempton Park, decking installation Midrand, drywall contractors Fourways, ceiling installation Boksburg, flooring specialists Centurion, carpentry training Pretoria, granite countertops Johannesburg South, custom kitchen cabinets, professional joinery services, stone installation experts, affordable carpenter Gauteng, quality carpentry workmanship, licensed carpenter Johannesburg, insured carpentry services, commercial carpentry contractor, residential renovation specialists",
  authors: [{ name: "Granite & Carpentry Johannesburg", url: "https://granitecarpentry.co.za" }],
  creator: "Granite & Carpentry Johannesburg",
  publisher: "Granite & Carpentry Johannesburg",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://granitecarpentry.co.za"),
  alternates: {
    canonical: "https://granitecarpentry.co.za",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://granitecarpentry.co.za",
    siteName: "Granite & Carpentry Johannesburg",
    title: "Professional Carpenter & Granite Installation Johannesburg | Granite & Carpentry Experts",
    description:
      "Leading professional carpentry and granite installation specialists in Johannesburg, Gauteng. Expert kitchen renovations, built-in cupboards, quartz countertops. 5-star rated with 47+ completed projects.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Carpenter and Granite Installation Services in Johannesburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Carpenter & Granite Installation Johannesburg",
    description:
      "Leading carpentry and granite installation specialists in Johannesburg, Gauteng. 5-star rated professional services.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Construction & Home Improvement",
  classification: "Business",
  other: {
    "theme-color": "#d97706",
    "color-scheme": "light",
    "format-detection": "telephone=no",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-ZA">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#d97706" />
        <meta name="color-scheme" content="light" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Granite & Carpentry" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://granitecarpentry.co.za/#business",
              name: "Granite & Carpentry Johannesburg",
              alternateName: "Granite & Carpentry",
              description:
                "Professional carpentry, granite installation, kitchen renovation, built-in cupboards, decking, drywall, ceiling, and flooring services across Johannesburg and Gauteng. Licensed and insured contractors with carpentry training courses.",
              url: "https://granitecarpentry.co.za",
              telephone: "+27676014490",
              email: "info@granitecarpentry.co.za",
              sameAs: [
                "https://g.co/kgs/epZT5BY",
                "https://www.facebook.com/granitecarpentry",
                "https://www.instagram.com/granitecarpentry",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
                postalCode: "2000",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.2041,
                longitude: 28.0473,
              },
              openingHours: ["Mo-Fr 08:00-17:00", "Sa 08:00-13:00"],
              priceRange: "$$",
              paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "EFT"],
              currenciesAccepted: "ZAR",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "47",
                bestRating: "5",
                worstRating: "1",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Johannesburg",
                  containedInPlace: {
                    "@type": "State",
                    name: "Gauteng",
                  },
                },
                {
                  "@type": "City",
                  name: "Sandton",
                },
                {
                  "@type": "City",
                  name: "Randburg",
                },
                {
                  "@type": "City",
                  name: "Kempton Park",
                },
                {
                  "@type": "City",
                  name: "Midrand",
                },
                {
                  "@type": "City",
                  name: "Fourways",
                },
                {
                  "@type": "City",
                  name: "Boksburg",
                },
                {
                  "@type": "City",
                  name: "Centurion",
                },
                {
                  "@type": "City",
                  name: "Pretoria",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Professional Carpentry and Granite Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Kitchen Renovations",
                      description:
                        "Complete kitchen renovation services including custom cabinetry, countertops, and professional installation.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Built-in Cupboards",
                      description: "Custom built-in storage solutions for bedrooms, studies, and living areas.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Granite & Quartz Installation",
                      description: "Professional stone countertop installation with precision templating and fitting.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Carpentry Training",
                      description: "Professional carpentry training courses with job placement guarantee.",
                    },
                  },
                ],
              },
              founder: {
                "@type": "Person",
                name: "Master Carpenter",
                jobTitle: "Founder & Lead Carpenter",
              },
              employee: [
                {
                  "@type": "Person",
                  name: "Professional Carpentry Team",
                  jobTitle: "Certified Carpenters",
                },
              ],
              knowsAbout: [
                "Kitchen Renovations",
                "Built-in Cupboards",
                "Granite Installation",
                "Quartz Countertops",
                "Decking Installation",
                "Drywall Installation",
                "Ceiling Installation",
                "Flooring Installation",
                "Carpentry Training",
                "Custom Joinery",
              ],
              slogan: "Professional Carpentry & Granite Excellence in Johannesburg",
              award: "5-Star Customer Rating",
              numberOfEmployees: "5-10",
              foundingDate: "2020",
              legalName: "Granite & Carpentry (Pty) Ltd",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://granitecarpentry.co.za/#service",
              name: "Professional Carpentry and Granite Installation Services",
              description: "Expert carpentry and granite installation services in Johannesburg, Gauteng",
              provider: {
                "@id": "https://granitecarpentry.co.za/#business",
              },
              areaServed: {
                "@type": "State",
                name: "Gauteng",
                containsPlace: [
                  "Johannesburg",
                  "Sandton",
                  "Randburg",
                  "Kempton Park",
                  "Midrand",
                  "Fourways",
                  "Boksburg",
                  "Centurion",
                  "Pretoria",
                ],
              },
              serviceType: [
                "Kitchen Renovations",
                "Built-in Cupboards",
                "Granite Installation",
                "Quartz Installation",
                "Decking Installation",
                "Drywall Installation",
                "Ceiling Installation",
                "Flooring Installation",
                "Carpentry Training",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Professional Services Catalog",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Free Professional Quote",
                    description: "Comprehensive project assessment and detailed quotation",
                    price: "0",
                    priceCurrency: "ZAR",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
