import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Star,
  Award,
  Building2,
  MapPin,
  Clock,
  Shield,
  Users,
  MessageCircle,
  Home,
  Hammer,
} from "lucide-react"

const CITY = "Johannesburg"
const REGION = "Gauteng"
const SLUG = "door-hanging-johannesburg"
const CANONICAL = `https://granitecarpentry.co.za/${SLUG}`

export const metadata: Metadata = {
  title: `Door Hanging ${CITY} 2026 | Door Fitters, Hinges, Locks & Door Repairs | Same-Day Quotes`,
  description:
    `★★★★★ Door hanging in ${CITY}. We hang internal & external doors, fix doors that don’t close, replace hinges, align doors, and install locksets/handles. Fast turnaround. Call 067 601 4490`,
  keywords:
    `door hanging ${CITY}, door fitters ${CITY}, hang a door ${CITY}, interior door hanging ${CITY}, external door hanging ${CITY}, door won’t close repair ${CITY}, door hinge repair ${CITY}, door alignment ${CITY}, bathroom door replacement ${CITY}, lockset installation ${CITY}, door handle replacement ${CITY}`,
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: `Door Hanging ${CITY} 2026 | Door Fitters, Hinges, Locks & Door Repairs`,
    description:
      `★★★★★ Door hanging in ${CITY}. Hanging, alignment, hinges, locks and fast door repairs. Call 067 601 4490`,
    url: CANONICAL,
    images: [
      {
        url: "https://granitecarpentry.co.za/door-hanging.jpg",
        width: 1200,
        height: 630,
        alt: `Door Hanging ${CITY} - Door Fitters & Repairs`,
      },
    ],
  },
}

// JSON-LD Schema Markup
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${CANONICAL}#door-hanging-${CITY.toLowerCase()}`,
      "name": `Granite Carpentry - Door Hanging ${CITY}`,
      "image": "https://granitecarpentry.co.za/door-hanging.jpg",
      "telephone": "+27676014490",
      "priceRange": "R450-R25000",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": CITY,
        "addressRegion": REGION,
        "addressCountry": "ZA",
      },
      "geo": {
        "@type": "GeoCoordinates",
        // update these to the city center or your preferred pin
        "latitude": "-26.2041",
        "longitude": "28.0473",
      },
      "url": CANONICAL,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "37",
        "bestRating": "5",
        "worstRating": "1",
      },
      "areaServed": {
        "@type": "City",
        "name": CITY,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "14:00",
        },
      ],
    },

    // Service Schema (optional but nice)
    {
      "@type": "Service",
      "@id": `${CANONICAL}#service`,
      "serviceType": `Door Hanging & Door Repairs in ${CITY}`,
      "provider": {
        "@id": `${CANONICAL}#door-hanging-${CITY.toLowerCase()}`,
      },
      "areaServed": {
        "@type": "City",
        "name": CITY,
      },
    },

    // Breadcrumbs
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://granitecarpentry.co.za" },
        { "@type": "ListItem", "position": 2, "name": "Areas", "item": "https://granitecarpentry.co.za/areas" },
        { "@type": "ListItem", "position": 3, "name": CITY, "item": `https://granitecarpentry.co.za/areas/${CITY.toLowerCase().replace(" ", "-")}` },
        { "@type": "ListItem", "position": 4, "name": `Door Hanging ${CITY}` },
      ],
    },

    // FAQ Schema
    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": `How much does door hanging cost in ${CITY}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              `Door hanging in ${CITY} typically starts from around R450 for basic labour, depending on the door type, hinges, lockset work, trimming and alignment. For an accurate quote, send a photo of the door + frame and your location.`,
          },
        },
        {
          "@type": "Question",
          "name": `Can you fix a door that doesn’t close?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              `Yes. Most “door won’t close” issues are hinge sag, frame movement, latch/strike misalignment, or a door scraping the floor. We adjust hinges, align the door, trim if needed, and realign the lock/strike.`,
          },
        },
        {
          "@type": "Question",
          "name": `Do you supply doors and hardware?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              `Yes. We can supply and fit doors, hinges, locksets and handles, or install customer-supplied materials. We’ll advise the best option based on budget and door type.`,
          },
        },
      ],
    },
  ],
}

export default function DoorHangingCityPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Breadcrumb Navigation */}
      <section className="bg-slate-50 py-4">
        <div className="container mx-auto">
          <nav className="flex items-center text-sm text-slate-600">
            <Link href="/" className="hover:text-amber-600 flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/areas" className="hover:text-amber-600">
              Areas
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/areas/${CITY.toLowerCase().replace(" ", "-")}`} className="hover:text-amber-600">
              {CITY}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">{`Door Hanging ${CITY}`}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-amber-400 mr-2" />
                <Badge variant="secondary" className="bg-amber-600/20 text-amber-100 border-amber-300">
                  {CITY} Door Hanging Specialists
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-amber-400">{`Door Hanging ${CITY}`}</span>
                <br />
                Hinges • Locks • Alignment • Door Repairs
              </h1>

              <p className="text-xl sm:text-2xl text-slate-200 mb-8 leading-relaxed">
                ★★★★★ Fast “quick jobs” that convert: hang internal & external doors, fix doors that don’t close,
                replace hinges, align frames, install locksets/handles, and bathroom door replacements.
                Same-day quotes in {CITY}.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4 font-semibold">
                  <Link href="/contact">
                    Get FREE Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <a href="tel:+27676014490">
                    <Phone className="mr-2 w-5 h-5" />
                    Call: 067 601 4490
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Star className="w-6 h-6 text-amber-400 mb-1 fill-current" />
                  <span className="text-sm font-medium">5.0 Rating</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">Trusted Team</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">Fast Turnaround</span>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">Same Day</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/door-hanging.jpg"
                alt={`Door Hanging ${CITY} - Door Fitters & Repairs`}
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-amber-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">Quick Jobs</div>
                <div className="text-sm">High Intent Leads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Why {CITY} Clients Choose Us for Door Hanging
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Doors that close properly. Clean finish. No excuses. Perfect for landlords, rentals, apartments and homes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Hammer className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Proper Alignment & Fit</h3>
                <p className="text-slate-600">
                  We hang doors square, set correct gaps, align hinges, and adjust latch/strike so it closes smoothly.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Fast Turnaround</h3>
                <p className="text-slate-600">
                  Same-day quotes and quick installations for urgent door replacements or repairs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Apartment-Friendly</h3>
                <p className="text-slate-600">
                  We work clean and efficiently. Great for complexes, body corporates, rentals and move-in deadlines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services + Pricing Mini Guide */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Door Hanging Services in {CITY}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              High-converting services: door replacement, hinges, locks, alignment, and “door won’t close” fixes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Interior Doors (Bedrooms & Bathrooms)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {[
                    "Hang interior door + hinge alignment",
                    "Fix door scraping the floor",
                    "Replace lockset/handle & align latch",
                    "Bathroom door replacement (quick job)",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-slate-100 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-slate-800 mb-1">Typical quick jobs from R450</p>
                  <p className="text-xs text-slate-600">Final pricing depends on door, hinges, trimming & hardware.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-amber-400">
              <CardHeader>
                <CardTitle className="text-2xl">Exterior Doors (Security & Entry)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {[
                    "Hang external door & secure fit",
                    "Heavy-duty hinge replacement",
                    "Lockset + strike alignment",
                    "Supply & fit options available",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-slate-800 mb-1">Secure installs • Clean finish</p>
                  <p className="text-xs text-slate-600">Great for landlords, rentals, and security upgrades.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">{`Get Your Free ${CITY} Door Quote`}</Link>
            </Button>
            <p className="text-sm text-slate-600 mt-4">
              Explore:{" "}
              <Link href="/door-installation" className="text-amber-600 hover:underline font-semibold">
                Door Installation
              </Link>{" "}
              •{" "}
              <Link href="/wooden-doors" className="text-amber-600 hover:underline font-semibold">
                Wooden Doors
              </Link>{" "}
              •{" "}
              <Link href={`/areas/${CITY.toLowerCase().replace(" ", "-")}`} className="text-amber-600 hover:underline font-semibold">
                {CITY} Areas
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              What {CITY} Clients Say
            </h2>
            <p className="text-xl text-slate-600">★★★★★ 5.0 Rating • Door hanging & repairs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "“Our bathroom door was not closing properly. They fixed the alignment and replaced the lockset — fast and clean work.”",
                name: "Thabo M.",
                area: `${CITY}`,
                date: "January 2026",
              },
              {
                text: "“Best door fitters. Door was scraping the floor, now it closes smoothly. Same-day service.”",
                name: "Lerato K.",
                area: `${CITY}`,
                date: "December 2025",
              },
              {
                text: "“Quick job for our rental unit — replaced hinges and fixed the latch. Professional and on time.”",
                name: "Michael R.",
                area: `${CITY}`,
                date: "November 2025",
              },
            ].map((r) => (
              <Card key={r.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">{r.text}</p>
                  <p className="font-semibold text-slate-800">{r.name}</p>
                  <p className="text-sm text-slate-600">{r.area}</p>
                  <p className="text-xs text-slate-500 mt-1">{r.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (matches schema) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              FAQ — Door Hanging {CITY}
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: `How much does door hanging cost in ${CITY}?`,
                a: `Door hanging in ${CITY} typically starts from around R450 for basic labour, depending on the door type, hinges, lockset work, trimming and alignment. Send a photo + location for an accurate quote.`,
              },
              {
                q: `Can you fix a door that doesn’t close?`,
                a: `Yes. Most issues are hinge sag, latch/strike misalignment, or the door scraping the floor. We adjust hinges, align the door, trim if needed, and realign the lock/strike.`,
              },
              {
                q: `Do you supply doors and hardware?`,
                a: `Yes. We can supply and fit doors, hinges, locksets and handles, or install customer-supplied items.`,
              },
            ].map((item) => (
              <Card key={item.q}>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <MessageCircle className="w-5 h-5 text-amber-600 mr-2" />
                    {item.q}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {`Need Door Hanging in ${CITY} Today?`}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Send a photo of the door + your location. We’ll quote fast and book you in.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button size="lg" asChild className="bg-white text-amber-600 hover:bg-slate-50 text-lg px-8 py-4 font-semibold">
              <Link href="/contact">
                Get FREE Quote Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8 py-4 bg-transparent"
            >
              <a href="tel:+27676014490">
                <Phone className="mr-2 w-5 h-5" />
                Call: 067 601 4490
              </a>
            </Button>
          </div>

          <div className="mt-6 text-sm opacity-80">
            <p>
              Also explore:{" "}
              <Link href="/door-installation" className="underline hover:text-amber-200">Door Installation</Link>{" "}
              |{" "}
              <Link href="/wooden-doors" className="underline hover:text-amber-200">Wooden Doors</Link>{" "}
              |{" "}
              <Link href={`/areas/${CITY.toLowerCase().replace(" ", "-")}`} className="underline hover:text-amber-200">{CITY} Areas</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
