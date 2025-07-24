import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { AIChatWidget } from "@/components/ai-chat-widget"
import { GoogleBusinessSchema } from "@/components/google-business-schema"
import { AnalyticsProvider } from "@/components/analytics-provider"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: {
    default: "Professional Carpenter & Granite Installation Johannesburg | 5-Star Rated Experts",
    template: "%s | Granite & Carpentry Johannesburg",
  },
  description:
    "Leading professional carpentry and granite installation specialists in Johannesburg, Gauteng. Expert kitchen renovations, built-in cupboards, quartz countertops, decking, drywall, and ceiling services. 5-star rated with 47+ completed projects across Sandton, Randburg, Kempton Park, Midrand, Fourways, Boksburg, Centurion, Pretoria. Licensed, insured, and offering free professional quotes plus carpentry training courses.",
  keywords: [
    "professional carpenter Johannesburg",
    "granite installation specialists Gauteng",
    "kitchen renovation experts Sandton",
    "built-in cupboards Randburg",
    "quartz countertops Kempton Park",
    "best carpenter Johannesburg South",
    "affordable carpenter Gauteng",
    "licensed carpenter services",
    "insured carpentry contractor",
    "5-star rated carpenter",
    "professional joinery services",
    "custom kitchen cabinets",
    "stone installation experts",
    "decking installation specialists",
    "drywall contractors",
    "ceiling installation experts",
    "flooring specialists",
    "carpentry training courses",
    "commercial carpentry services",
    "residential renovation specialists",
  ],
  authors: [{ name: "Granite & Carpentry Johannesburg" }],
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
    title: "Professional Carpenter & Granite Installation Johannesburg | 5-Star Rated Experts",
    description:
      "Leading professional carpentry and granite installation specialists in Johannesburg, Gauteng. 5-star rated with 47+ completed projects.",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Carpenter and Granite Installation Services in Johannesburg - Kitchen Renovations and Built-in Cupboards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Carpenter & Granite Installation Johannesburg",
    description:
      "Leading professional carpentry and granite installation specialists in Johannesburg, Gauteng. 5-star rated with 47+ completed projects.",
    images: ["/og-home.jpg"],
    creator: "@granitecarpentry",
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
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-ZA" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="preconnect" href="https://vitals.vercel-analytics.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//vitals.vercel-analytics.com" />
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 days" />
        <meta name="distribution" content="global" />
        <meta name="language" content="en-ZA" />
        <meta name="geo.region" content="ZA-GP" />
        <meta name="geo.placename" content="Johannesburg" />
        <meta name="geo.position" content="-26.2041;28.0473" />
        <meta name="ICBM" content="-26.2041, 28.0473" />
        <meta name="business:contact_data:street_address" content="Johannesburg South" />
        <meta name="business:contact_data:locality" content="Johannesburg" />
        <meta name="business:contact_data:region" content="Gauteng" />
        <meta name="business:contact_data:postal_code" content="2190" />
        <meta name="business:contact_data:country_name" content="South Africa" />
        <meta name="business:contact_data:phone_number" content="+27676014490" />
        <meta name="business:contact_data:email" content="info@granitecarpentry.co.za" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Granite & Carpentry Johannesburg",
              url: "https://granitecarpentry.co.za",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://granitecarpentry.co.za/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Suspense fallback={null}>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>

            <AIChatWidget />
            <FloatingWhatsApp />
            <AnalyticsProvider />
          </Suspense>
        </ThemeProvider>

        <GoogleBusinessSchema
          businessName="Granite & Carpentry Johannesburg"
          description="Leading professional carpentry and granite installation specialists in Johannesburg, Gauteng. Expert kitchen renovations, built-in cupboards, quartz countertops, decking, drywall, and ceiling services."
          address={{
            street: "123 Main Street",
            city: "Johannesburg South",
            region: "Gauteng",
            postalCode: "2190",
            country: "ZA",
          }}
          phone="+27676014490"
          email="info@granitecarpentry.co.za"
          website="https://granitecarpentry.co.za"
          services={[
            "Kitchen Renovations",
            "Built-in Cupboards",
            "Granite Installation",
            "Quartz Countertops",
            "Decking Installation",
            "Drywall Installation",
            "Ceiling Installation",
            "Flooring Services",
            "Carpentry Training",
            "Custom Joinery",
          ]}
          areas={[
            "Johannesburg South",
            "Sandton",
            "Randburg",
            "Kempton Park",
            "Midrand",
            "Fourways",
            "Boksburg",
            "Centurion",
            "Pretoria",
            "Alberton",
            "Edenvale",
            "Benoni",
          ]}
          rating={5.0}
          reviewCount={47}
          openingHours={["Mo-Fr 08:00-17:00", "Sa 08:00-13:00", "Su closed"]}
          socialMedia={{
            facebook: "https://facebook.com/granitecarpentry",
            instagram: "https://instagram.com/granitecarpentry",
            linkedin: "https://linkedin.com/company/granitecarpentry",
          }}
          images={{
            logo: "https://granitecarpentry.co.za/placeholder-logo.png",
            photos: [
              "https://granitecarpentry.co.za/granite-countertop.jpg",
              "https://granitecarpentry.co.za/kitchen-renovation-granite-installation-johannesburg.jpg",
              "https://granitecarpentry.co.za/carpenter-johannesburg-installing-kitchen-cupboards.jpg",
            ],
          }}
        />
      </body>
    </html>
  )
}
