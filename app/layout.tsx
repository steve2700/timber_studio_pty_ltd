import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Granite & Joinery Experts Johannesburg | Professional Carpentry & Stone Installation",
    template: "%s | Granite & Joinery Experts Johannesburg",
  },
  description:
    "Professional carpentry, granite installation, kitchen renovation, decking, drywall & ceiling services across Johannesburg, Sandton, Randburg, Kempton Park, Roodepoort, Midrand, Fourways, Boksburg, Benoni, Germiston, Alberton, Edenvale, Bedfordview, Centurion, Pretoria. 5-star rated carpenter with carpentry training courses. Free quotes.",
  keywords:
    "kitchen renovation Sandton, kitchen installation Midrand, kitchen supplies Fourways, carpenter Boksburg, built-in cupboards Benoni, granite installation Germiston, kitchen fitter Alberton, joinery Edenvale, cupboard installation Bedfordview, kitchen renovation Centurion, carpenter Pretoria, decking installation Johannesburg, drywall installation Gauteng, ceiling installation Sandton, flooring installation Randburg, carpentry training Johannesburg, quartz countertop installation Johannesburg, carpenter in Randburg, cheap carpenter Johannesburg South, best carpenter Johannesburg South, carpenter Roodepoort, granite installers near me, joinery Kempton Park",
  authors: [{ name: "Granite & Joinery Experts Johannesburg" }],
  creator: "Granite & Joinery Experts Johannesburg",
  publisher: "Granite & Joinery Experts Johannesburg",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://granitejoinery.co.za",
    siteName: "Granite & Joinery Experts Johannesburg",
    title: "Granite & Joinery Experts Johannesburg | Professional Carpentry & Stone Installation",
    description:
      "Professional carpentry and granite installation services in Johannesburg South, Kempton Park, Randburg. 5-star rated carpenter for custom work.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Granite & Joinery Experts Johannesburg",
    description: "Professional carpentry and granite installation services across Gauteng. 5-star rated.",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Granite & Joinery Experts Johannesburg",
              description:
                "Professional carpentry, granite installation, kitchen renovation, decking, drywall, ceiling, and flooring services across Johannesburg and Gauteng. We also offer carpentry training courses.",
              url: "https://granitejoinery.co.za",
              telephone: "+27676014490",
              sameAs: ["https://g.co/kgs/epZT5BY"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.2041,
                longitude: 28.0473,
              },
              openingHours: "Mo-Fr 08:00-17:00, Sa 08:00-13:00",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "47",
              },
              areaServed: [
                "Johannesburg South",
                "Randburg",
                "Kempton Park",
                "Roodepoort",
                "Sandton",
                "Midrand",
                "Fourways",
                "Boksburg",
                "Benoni",
                "Germiston",
                "Alberton",
                "Edenvale",
                "Bedfordview",
                "Centurion",
                "Pretoria",
                "Northcliff",
                "Rosebank",
                "Krugersdorp",
                "Soweto",
                "Gauteng",
              ],
              serviceType: [
                "Carpentry",
                "Granite Installation",
                "Quartz Installation",
                "Kitchen Renovations",
                "Built-in Cupboards",
                "Decking Installation",
                "Drywall Installation",
                "Ceiling Installation",
                "Flooring Installation",
                "Carpentry Training",
              ],
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
