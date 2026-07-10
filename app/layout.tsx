import type React from "react"
import type { Metadata } from "next"
import { Manrope, Fraunces } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoogleBusinessSchema } from "@/components/google-business-schema"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { AIChatWidget } from "@/components/ai-chat-widget"
import { AnalyticsProvider } from "@/components/analytics-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.timberstudio.co.za"),
  title: {
    default: "The Timber Studio | Bespoke Carpentry & Custom Joinery in Johannesburg",
    template: "%s | The Timber Studio - Bespoke Carpentry & Joinery",
  },
  description:
    "The Timber Studio is Johannesburg's premier bespoke carpentry and custom joinery studio. Custom kitchens, built-in cupboards, solid timber doors, decking & flooring. 5-star service, 1000+ projects, 24-month workmanship warranty. Free quotes. Call 063 397 7498.",
  keywords:
    "bespoke carpentry Johannesburg, custom joinery Johannesburg, The Timber Studio, timber studio Johannesburg, kitchen renovations Johannesburg, built-in cupboards Johannesburg, custom kitchen cabinets Johannesburg, solid timber doors Johannesburg, wooden doors Johannesburg, carpenter Sandton, carpenter Randburg, joinery Sandton, decking installation Johannesburg, wooden flooring Johannesburg, bathroom renovations Johannesburg, drywall contractor Johannesburg, best carpenter Johannesburg, licensed carpenter Gauteng",
  authors: [{ name: "The Timber Studio", url: "https://www.timberstudio.co.za" }],
  creator: "The Timber Studio",
  publisher: "The Timber Studio",
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
    url: "https://www.timberstudio.co.za",
    siteName: "The Timber Studio - Bespoke Carpentry & Custom Joinery",
    title: "The Timber Studio | Bespoke Carpentry & Custom Joinery in Johannesburg",
    description:
      "Johannesburg's premier bespoke carpentry & custom joinery studio. Custom kitchens, built-in cupboards, solid timber doors, decking & flooring. 5-star service with 24-month warranty.",
    images: [
      {
        url: "/timber-studio-logo.png",
        width: 1200,
        height: 630,
        alt: "The Timber Studio - Bespoke Carpentry & Custom Joinery Johannesburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Timber Studio | Bespoke Carpentry & Custom Joinery Johannesburg",
    description:
      "Johannesburg's premier bespoke carpentry & joinery studio. Custom kitchens, built-in cupboards, solid timber doors. 5-star service, 24-month warranty.",
    images: ["/timber-studio-logo.png"],
    creator: "@timberstudio",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://www.timberstudio.co.za",
  },
  category: "Construction & Home Improvement",
  classification: "Business",
  other: {
    "geo.region": "ZA-GP",
    "geo.placename": "Johannesburg, Gauteng, South Africa",
    "geo.position": "-26.2041;28.0473",
    ICBM: "-26.2041, 28.0473",
    "business:contact_data:street_address": "Greater Johannesburg Area",
    "business:contact_data:locality": "Johannesburg",
    "business:contact_data:region": "Gauteng",
    "business:contact_data:postal_code": "2000",
    "business:contact_data:country_name": "South Africa",
    "business:contact_data:phone_number": "+27633977498",
    "business:contact_data:email": "info@timberstudio.co.za",
    "business:hours:day": "monday,tuesday,wednesday,thursday,friday",
    "business:hours:start": "07:00",
    "business:hours:end": "17:00",
    "business:hours:day": "saturday",
    "business:hours:start": "08:00",
    "business:hours:end": "14:00",
  },
  generator: "The Timber Studio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en-ZA"
      className={`${manrope.variable} ${fraunces.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-H6B51FH166"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H6B51FH166');
            `,
          }}
        />

        {/* Updated Favicon and Icon References */}
        <link rel="icon" href="/timber-studio-logo.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/timber-studio-logo.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/timber-studio-logo.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#b36a3d" />
        <meta name="msapplication-TileColor" content="#1c1b19" />
        <meta name="msapplication-TileImage" content="/timber-studio-logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="The Timber Studio" />
        <meta name="apple-mobile-web-app-title" content="The Timber Studio" />
        <meta name="msapplication-tooltip" content="The Timber Studio - Bespoke Carpentry & Custom Joinery Johannesburg" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Structured Data for AI Platforms */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.timberstudio.co.za/#organization",
                  name: "The Timber Studio",
                  alternateName: "The Timber Studio Johannesburg",
                  description:
                    "Bespoke carpentry and custom joinery studio in Johannesburg. Custom kitchens, built-in cupboards, solid timber doors, decking and flooring with 5-star service.",
                  url: "https://www.timberstudio.co.za",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.timberstudio.co.za/timber-studio-logo.png",
                    width: 300,
                    height: 100,
                  },
                  image: {
                    "@type": "ImageObject",
                    url: "https://www.timberstudio.co.za/timber-studio-logo.png",
                    width: 1200,
                    height: 630,
                  },
                  telephone: "+27633977498",
                  email: "info@timberstudio.co.za",
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
                  areaServed: [
                    {
                      "@type": "City",
                      name: "Johannesburg",
                      addressRegion: "Gauteng",
                      addressCountry: "ZA",
                    },
                    {
                      "@type": "City",
                      name: "Sandton",
                      addressRegion: "Gauteng",
                      addressCountry: "ZA",
                    },
                    {
                      "@type": "City",
                      name: "Randburg",
                      addressRegion: "Gauteng",
                      addressCountry: "ZA",
                    },
                    {
                      "@type": "City",
                      name: "Pretoria",
                      addressRegion: "Gauteng",
                      addressCountry: "ZA",
                    },
                  ],
                  sameAs: [
                    "https://www.facebook.com/timberstudio",
                    "https://www.instagram.com/timberstudio",
                    "https://www.linkedin.com/company/timberstudio",
                  ],
                  foundingDate: "2020",
                  numberOfEmployees: "5-10",
                  slogan: "Johannesburg's Premier Bespoke Carpentry & Custom Joinery Studio",
                  knowsAbout: [
                    "Bespoke Carpentry",
                    "Custom Joinery",
                    "Kitchen Renovations",
                    "Built-in Cupboards",
                    "Solid Timber Doors",
                    "Decking & Flooring",
                    "Home Renovations",
                  ],
                  hasCredential: [
                    {
                      "@type": "EducationalOccupationalCredential",
                      name: "Licensed Carpentry Business",
                      credentialCategory: "Professional License",
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      name: "Public Liability Insurance",
                      credentialCategory: "Insurance Coverage",
                    },
                  ],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.timberstudio.co.za/#localbusiness",
                  name: "The Timber Studio",
                  image: "https://www.timberstudio.co.za/timber-studio-logo.png",
                  telephone: "+27633977498",
                  email: "info@timberstudio.co.za",
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
                  url: "https://www.timberstudio.co.za",
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      opens: "07:00",
                      closes: "17:00",
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: "Saturday",
                      opens: "08:00",
                      closes: "14:00",
                    },
                  ],
                  priceRange: "$$",
                  currenciesAccepted: "ZAR",
                  paymentAccepted: "Cash, Bank Transfer, Card",
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "5.0",
                    reviewCount: "150",
                    bestRating: "5",
                    worstRating: "1",
                  },
                  serviceArea: {
                    "@type": "GeoCircle",
                    geoMidpoint: {
                      "@type": "GeoCoordinates",
                      latitude: -26.2041,
                      longitude: 28.0473,
                    },
                    geoRadius: "50000",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.timberstudio.co.za/#website",
                  url: "https://www.timberstudio.co.za",
                  name: "The Timber Studio - Bespoke Carpentry & Custom Joinery",
                  description:
                    "Johannesburg's premier bespoke carpentry and custom joinery studio. Custom kitchens, built-in cupboards, solid timber doors, decking and flooring with 5-star service.",
                  publisher: {
                    "@id": "https://www.timberstudio.co.za/#organization",
                  },
                  inLanguage: "en-ZA",
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate: "https://www.timberstudio.co.za/search?q={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <AnalyticsProvider>
            <Suspense fallback={null}>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
              </div>
              <FloatingWhatsApp />
              <AIChatWidget />
              <GoogleBusinessSchema
                businessName="The Timber Studio"
                description="Bespoke carpentry and custom joinery studio in Johannesburg. Custom kitchens, built-in cupboards, solid timber doors, decking and flooring with 5-star service."
                address={{
                  street: "Greater Johannesburg Area",
                  city: "Johannesburg",
                  region: "Gauteng",
                  postalCode: "2000",
                  country: "ZA",
                }}
                phone="+27633977498"
                email="info@timberstudio.co.za"
                website="https://www.timberstudio.co.za"
                services={[
                  "Bespoke Carpentry",
                  "Custom Joinery",
                  "Kitchen Renovations",
                  "Built-in Cupboards",
                  "Solid Timber Doors",
                  "Decking & Flooring",
                ]}
                areas={["Johannesburg", "Sandton", "Randburg", "Pretoria", "Centurion", "Midrand"]}
                rating={5.0}
                reviewCount={150}
                openingHours={[
                  "Monday 07:00-17:00",
                  "Tuesday 07:00-17:00",
                  "Wednesday 07:00-17:00",
                  "Thursday 07:00-17:00",
                  "Friday 07:00-17:00",
                  "Saturday 08:00-14:00",
                ]}
                socialMedia={{
                  facebook: "https://www.facebook.com/timberstudio",
                  instagram: "https://www.instagram.com/timberstudio",
                  linkedin: "https://www.linkedin.com/company/timberstudio",
                }}
                images={{
                  logo: "/timber-studio-logo.png",
                  photos: [
                    "/timber-studio-logo.png",
                    "/carpenter-johannesburg-installing-kitchen-cupboards.jpg",
                    "/Built-Built-in-Cupboards-Midrand.jpg",
                  ],
                }}
              />
              <Toaster />
            </Suspense>
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
