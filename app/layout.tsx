import type React from "react"
import type { Metadata } from "next"
import { Manrope, Fraunces } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
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
    default: "The Timber Studio | Bespoke Carpentry & Custom Joinery in Gauteng",
    template: "%s | The Timber Studio - Bespoke Carpentry & Joinery",
  },
  description:
    "The Timber Studio is a bespoke carpentry and custom joinery studio serving Gauteng. Custom kitchens, built-in cupboards, solid timber doors, decking & flooring. Free quotes. Call 063 397 7498.",
  keywords:
    "bespoke carpentry Johannesburg, custom joinery Johannesburg, The Timber Studio, timber studio Johannesburg, kitchen renovations Johannesburg, built-in cupboards Johannesburg, custom kitchen cabinets Johannesburg, solid timber doors Johannesburg, wooden doors Johannesburg, carpenter Sandton, carpenter Randburg, joinery Sandton, decking installation Johannesburg, wooden flooring Johannesburg, bathroom renovations Johannesburg, drywall contractor Johannesburg, best carpenter Johannesburg",
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
    title: "The Timber Studio | Bespoke Carpentry & Custom Joinery in Gauteng",
    description:
      "Gauteng's bespoke carpentry & custom joinery studio. Custom kitchens, built-in cupboards, solid timber doors, decking & flooring.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "The Timber Studio - Bespoke Carpentry & Custom Joinery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Timber Studio | Bespoke Carpentry & Custom Joinery",
    description:
      "Gauteng's bespoke carpentry & joinery studio. Custom kitchens, built-in cupboards, solid timber doors.",
    images: ["/og-default.jpg"],
  },
  // Search engine verification codes removed — the placeholder strings here
  // did nothing but risk confusion. Add this block back once you have real
  // codes from Google Search Console / Bing Webmaster Tools, e.g.:
  // verification: { google: "abc123...", other: { "msvalidate.01": "..." } },
  alternates: {
    canonical: "https://www.timberstudio.co.za",
  },
  category: "Construction & Home Improvement",
  classification: "Business",
  other: {
    "geo.region": "ZA-GP",
    "geo.placename": "Gauteng, South Africa",
    // Update these to your real coordinates if you have a fixed studio/office address.
    "geo.position": "-26.2041;28.0473",
    ICBM: "-26.2041, 28.0473",
    "business:contact_data:locality": "Johannesburg",
    "business:contact_data:region": "Gauteng",
    "business:contact_data:country_name": "South Africa",
    "business:contact_data:phone_number": "+27633977498",
    "business:contact_data:email": "info@timberstudio.co.za",
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
        {/* Confirm this is your real GA4 measurement ID before relying on the data */}
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

        {/* Favicon & Icons — generated from the real logo, replacing the old placeholder paths */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#b36a3d" />
        <meta name="msapplication-TileColor" content="#1c1b19" />
        <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="The Timber Studio" />
        <meta name="apple-mobile-web-app-title" content="The Timber Studio" />
        <meta name="msapplication-tooltip" content="The Timber Studio - Bespoke Carpentry & Custom Joinery" />
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

        {/*
          NOTE: The manual @graph JSON-LD block that was here before has been
          removed. It duplicated the same Organization/LocalBusiness data that
          <GoogleBusinessSchema /> already receives as props below — having
          both risks Google seeing two conflicting LocalBusiness entries for
          the same site. If <GoogleBusinessSchema /> turns out to only render
          visual UI and NOT its own JSON-LD, tell me and I'll add a single,
          correct JSON-LD script back in here instead.
        */}
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <AnalyticsProvider>
            <Suspense fallback={null}>
              <div className="flex flex-col min-h-screen">
                <Header />
                <Breadcrumbs />
                <main className="flex-grow">{children}</main>
                <Footer />
              </div>
              <FloatingWhatsApp />
              <AIChatWidget />
              <GoogleBusinessSchema
                businessName="The Timber Studio"
                description="Bespoke carpentry and custom joinery studio serving Gauteng. Custom kitchens, built-in cupboards, solid timber doors, decking and flooring."
                address={{
                  city: "Johannesburg",
                  region: "Gauteng",
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
                // rating/reviewCount removed — add these back only once you have a
                // real, verifiable review count (e.g. from Google Business Profile).
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
                }}
                images={{
                  logo: "/timber-studio-logo.png",
                  // Replace with real project photos once you have them —
                  // the old filenames here referenced images that don't exist
                  // in this build and would 404.
                  photos: ["/timber-studio-logo.png"],
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
