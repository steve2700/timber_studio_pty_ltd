import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
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

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Granite Carpentry & Joinery Experts | Professional Carpentry Services Johannesburg",
    template: "%s | Granite Carpentry & Joinery Experts",
  },
  description:
    "Professional carpentry and joinery services in Johannesburg, Sandton, Pretoria. Expert kitchen renovations, built-in cupboards, granite installations, decking, and custom woodwork. 15+ years experience.",
  keywords: [
    "carpentry johannesburg",
    "joinery services",
    "kitchen renovations",
    "built-in cupboards",
    "granite installation",
    "custom woodwork",
    "decking installation",
    "carpenter sandton",
    "carpenter pretoria",
    "professional carpentry",
  ],
  authors: [{ name: "Granite Carpentry & Joinery Experts" }],
  creator: "Granite Carpentry & Joinery Experts",
  publisher: "Granite Carpentry & Joinery Experts",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://granitecarpentry.co.za"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Granite Carpentry & Joinery Experts | Professional Carpentry Services",
    description:
      "Professional carpentry and joinery services in Johannesburg, Sandton, Pretoria. Expert kitchen renovations, built-in cupboards, granite installations.",
    url: "https://granitecarpentry.co.za",
    siteName: "Granite Carpentry & Joinery Experts",
    images: [
      {
        url: "/granite-carpentry.webp",
        width: 1200,
        height: 630,
        alt: "Granite Carpentry & Joinery Experts - Professional Carpentry Services",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Granite Carpentry & Joinery Experts | Professional Carpentry Services",
    description: "Professional carpentry and joinery services in Johannesburg, Sandton, Pretoria.",
    images: ["/granite-carpentry.webp"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleBusinessSchema />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AnalyticsProvider>
            <Suspense fallback={null}>
              <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
              <FloatingWhatsApp />
              <AIChatWidget />
              <Toaster />
            </Suspense>
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
