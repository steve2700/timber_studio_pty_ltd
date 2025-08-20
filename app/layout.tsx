import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { AIChatWidget } from "@/components/ai-chat-widget"
import { GoogleBusinessSchema } from "@/components/google-business-schema"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://granitecarpentry.co.za"),
  title: {
    default: "Professional Carpenter & Granite Installation Johannesburg 2025 | 5-Star Rated Experts",
    template: "%s | Granite Carpentry - Professional Carpentry Services",
  },
  description:
    "Johannesburg's #1 rated carpenter & granite installation specialists. Kitchen renovations, built-in cupboards, quartz countertops. 5-star service, 47+ projects, 24-month warranty. Licensed & insured. Free quotes. Call 067 601 4490.",
  keywords:
    "professional carpenter Johannesburg 2025, granite installation Johannesburg, kitchen renovations Johannesburg, built-in cupboards Johannesburg, quartz countertops Johannesburg, carpenter Sandton, carpenter Randburg, granite installation Sandton, kitchen renovation company Johannesburg, best carpenter Johannesburg South, affordable carpenter Johannesburg, licensed carpenter Gauteng, granite specialists Johannesburg, custom kitchen cabinets Johannesburg, bathroom renovations Johannesburg, decking installation Johannesburg, drywall contractor Johannesburg, carpentry training Johannesburg",
  authors: [{ name: "Granite Carpentry", url: "https://granitecarpentry.co.za" }],
  creator: "Granite Carpentry",
  publisher: "Granite Carpentry",
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
    url: "https://granitecarpentry.co.za",
    siteName: "Granite Carpentry - Professional Carpentry & Granite Installation",
    title: "Professional Carpenter & Granite Installation Johannesburg 2025 | 5-Star Rated",
    description:
      "Johannesburg's #1 rated carpenter & granite installation specialists. Kitchen renovations, built-in cupboards, quartz countertops. 5-star service with 24-month warranty.",
    images: [
      {
        url: "/granite-carpentry.webp",
        width: 1200,
        height: 630,
        alt: "Granite Carpentry - Professional Carpenter & Granite Installation Johannesburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Carpenter & Granite Installation Johannesburg 2025",
    description:
      "Johannesburg's #1 rated carpenter. Kitchen renovations, built-in cupboards, granite installation. 5-star service, 24-month warranty.",
    images: ["/granite-carpentry.webp"],
    creator: "@granitecarpentry",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za",
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
    "business:contact_data:phone_number": "+27676014490",
    "business:contact_data:email": "info@granitecarpentry.co.za",
    "business:hours:day": "monday,tuesday,wednesday,thursday,friday",
    "business:hours:start": "07:00",
    "business:hours:end": "17:00",
    "business:hours:day": "saturday",
    "business:hours:start": "08:00",
    "business:hours:end": "14:00",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-ZA" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#d97706" />
        <meta name="msapplication-TileColor" content="#d97706" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Granite Carpentry" />
        <meta name="apple-mobile-web-app-title" content="Granite Carpentry" />
        <meta name="msapplication-tooltip" content="Professional Carpenter & Granite Installation Johannesburg" />
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
                  "@id": "https://granitecarpentry.co.za/#organization",
                  name: "Granite Carpentry",
                  alternateName: "Granite Carpentry Johannesburg",
                  description:
                    "Professional carpenter and granite installation specialists in Johannesburg. Kitchen renovations, built-in cupboards, and stone installations with 5-star service.",
                  url: "https://granitecarpentry.co.za",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://granitecarpentry.co.za/placeholder-logo.svg",
                    width: 300,
                    height: 100,
                  },
                  image: {
                    "@type": "ImageObject",
                    url: "https://granitecarpentry.co.za/granite-carpentry.webp",
                    width: 1200,
                    height: 630,
                  },
                  telephone: "+27676014490",
                  email: "info@granitecarpentry.co.za",
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
                    "https://www.facebook.com/granitecarpentry",
                    "https://www.instagram.com/granitecarpentry",
                    "https://www.linkedin.com/company/granite-carpentry",
                  ],
                  foundingDate: "2020",
                  numberOfEmployees: "5-10",
                  slogan: "Johannesburg's #1 Rated Carpenter & Granite Installation Specialists",
                  knowsAbout: [
                    "Kitchen Renovations",
                    "Built-in Cupboards",
                    "Granite Installation",
                    "Quartz Countertops",
                    "Custom Carpentry",
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
                  "@id": "https://granitecarpentry.co.za/#localbusiness",
                  name: "Granite Carpentry",
                  image: "https://granitecarpentry.co.za/granite-carpentry.webp",
                  telephone: "+27676014490",
                  email: "info@granitecarpentry.co.za",
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
                  url: "https://granitecarpentry.co.za",
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
                    reviewCount: "47",
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
                  "@id": "https://granitecarpentry.co.za/#website",
                  url: "https://granitecarpentry.co.za",
                  name: "Granite Carpentry - Professional Carpentry & Granite Installation",
                  description:
                    "Johannesburg's #1 rated carpenter and granite installation specialists. Kitchen renovations, built-in cupboards, quartz countertops with 5-star service.",
                  publisher: {
                    "@id": "https://granitecarpentry.co.za/#organization",
                  },
                  inLanguage: "en-ZA",
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate: "https://granitecarpentry.co.za/search?q={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                },
              ],
            }),
          }}
        />

        {/* FAQ Schema for AI Platforms */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What carpentry services does Granite Carpentry offer in Johannesburg?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Granite Carpentry offers comprehensive carpentry services including kitchen renovations, built-in cupboards, granite and quartz countertop installation, decking, drywall installation, and custom carpentry work throughout Johannesburg and Gauteng.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does a kitchen renovation cost in Johannesburg?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Kitchen renovation costs in Johannesburg vary based on size, materials, and complexity. Our kitchen renovations typically range from R50,000 to R200,000+. We provide free consultations and detailed quotes for accurate pricing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide warranties on carpentry work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Granite Carpentry provides a comprehensive 24-month warranty on all carpentry workmanship and a 12-month warranty on granite installations. We stand behind our quality work with full warranty coverage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which areas in Johannesburg do you serve?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We serve the entire Greater Johannesburg area including Johannesburg South, Sandton, Randburg, Kempton Park, Pretoria, Centurion, Midrand, Edenvale, Boksburg, Roodepoort, and surrounding areas in Gauteng province.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does a typical kitchen renovation take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most kitchen renovations take 7-14 working days depending on the scope of work. Built-in cupboards typically take 3-7 days, while granite installations take 2-5 days. We provide detailed timelines during consultation.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <FloatingWhatsApp />
          <AIChatWidget />
          <GoogleBusinessSchema
            businessName="Granite Carpentry"
            description="Professional carpenter and granite installation specialists in Johannesburg. Kitchen renovations, built-in cupboards, and stone installations with 5-star service."
            address={{
              street: "Greater Johannesburg Area",
              city: "Johannesburg",
              region: "Gauteng",
              postalCode: "2000",
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
              "Custom Carpentry",
              "Home Renovations",
            ]}
            areas={["Johannesburg", "Sandton", "Randburg", "Pretoria", "Centurion", "Midrand"]}
            rating={5.0}
            reviewCount={47}
            openingHours={[
              "Monday 07:00-17:00",
              "Tuesday 07:00-17:00",
              "Wednesday 07:00-17:00",
              "Thursday 07:00-17:00",
              "Friday 07:00-17:00",
              "Saturday 08:00-14:00",
            ]}
            socialMedia={{
              facebook: "https://www.facebook.com/granitecarpentry",
              instagram: "https://www.instagram.com/granitecarpentry",
              linkedin: "https://www.linkedin.com/company/granite-carpentry",
            }}
            images={{
              logo: "/placeholder-logo.svg",
              photos: [
                "/granite-carpentry.webp",
                "/granite-installation-Johannesburg.jpg",
                "/Built-Built-in-Cupboards-Midrand.jpg",
              ],
            }}
          />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
