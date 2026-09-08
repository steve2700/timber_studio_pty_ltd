import type { Metadata } from "next"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Droplets,
  Home,
  Lightbulb,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Bathroom Renovations Sandton 2026 | Luxury Bathroom Design & Installation | Free Quote",
  description:
    "★★★★★ Premium bathroom renovations in Sandton. Complete design, waterproofing, tiling, plumbing, vanities and luxury finishes for homes in Sandton, Bryanston, Hyde Park and Morningside. Call 067 601 4490.",
  keywords:
    "bathroom renovations Sandton, bathroom renovation Sandton, luxury bathroom Sandton, bathroom makeover Sandton, bathroom design Sandton, bathroom installers Sandton, bathroom tiling Sandton, bathroom plumbing Sandton, ensuite renovation Sandton, Sandton bathroom contractor",
  alternates: {
    canonical: "https://granitecarpentry.co.za/bathroom-renovations-sandton",
  },
  openGraph: {
    title: "Bathroom Renovations Sandton 2026 | Luxury Design & Installation",
    description:
      "Premium bathroom renovations for Sandton homes, apartments and luxury properties. Design, waterproofing, tiling, plumbing and finishing.",
    url: "https://granitecarpentry.co.za/bathroom-renovations-sandton",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
}

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://granitecarpentry.co.za/#bathroom-renovations-sandton",
      name: "Granite Carpentry - Bathroom Renovations Sandton",
      url: "https://granitecarpentry.co.za/bathroom-renovations-sandton",
      telephone: "+27676014490",
      areaServed: ["Sandton", "Bryanston", "Hyde Park", "Morningside", "Rivonia", "Rosebank"],
      priceRange: "R45000-R250000+",
      serviceType: "Bathroom Renovations",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://granitecarpentry.co.za/#breadcrumb-bathroom-renovations-sandton",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://granitecarpentry.co.za",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Bathroom Renovations Sandton",
        },
      ],
    },
  ],
}

const serviceCards = [
  {
    title: "Complete Bathroom Remodels",
    description:
      "Full strip-out and rebuilds with layout changes, plumbing upgrades, electrical work, waterproofing and finishing.",
    icon: Home,
  },
  {
    title: "Luxury Ensuite Upgrades",
    description:
      "Walk-in showers, floating vanities, premium fixtures and spa-style finishes tailored to Sandton properties.",
    icon: Sparkles,
  },
  {
    title: "Waterproofing & Tiling",
    description:
      "Professional tanking, membrane systems, floor and wall tiling, grout sealing and moisture control.",
    icon: Droplets,
  },
  {
    title: "Plumbing & Fixtures",
    description:
      "Baths, basins, toilets, mixers, shower systems and all plumbing coordination handled by one team.",
    icon: Wrench,
  },
]

const process = [
  {
    step: "01",
    title: "Site Visit & Quote",
    description:
      "We assess the bathroom, discuss your goals, measure the space and prepare a clear, itemised proposal.",
  },
  {
    step: "02",
    title: "Design & Specification",
    description:
      "We finalize the layout, finishes, fixtures, lighting and storage details before work begins.",
  },
  {
    step: "03",
    title: "Build & Installation",
    description:
      "Our team handles demolition, waterproofing, tiling, plumbing, cabinetry, painting and final fit-off.",
  },
  {
    step: "04",
    title: "Handover & Support",
    description:
      "We inspect the finished space, clean up thoroughly and hand over a bathroom that is ready to use.",
  },
]

const faqs = [
  {
    q: "How long does a Sandton bathroom renovation take?",
    a: "Most projects take 2-6 weeks depending on the size of the bathroom, the amount of plumbing work required and the finish level selected.",
  },
  {
    q: "Do you handle luxury bathroom finishes?",
    a: "Yes. We regularly install premium vanities, frameless glass, feature tiling, freestanding baths and other high-end finishes.",
  },
  {
    q: "Can you work in apartments and complexes?",
    a: "Yes. We work in Sandton apartments, townhouses and estates and can coordinate access and site rules where needed.",
  },
  {
    q: "Do you provide waterproofing and plumbing?",
    a: "Yes. We manage the full renovation scope including waterproofing, plumbing, tiling, electrical and fit-off work.",
  },
]

const nearbyAreas = ["Bryanston", "Hyde Park", "Morningside", "Rivonia", "Rosebank", "Illovo"]

export default function BathroomRenovationsSandtonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.25),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.2),transparent_40%)]" />
        <div className="container relative mx-auto px-4 py-20 sm:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <Badge className="border-amber-300/30 bg-amber-500/15 text-amber-100 hover:bg-amber-500/15">
                  Sandton Bathroom Specialists
                </Badge>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <MapPin className="h-4 w-4 text-amber-400" />
                  Sandton, Bryanston, Hyde Park and nearby suburbs
                </div>
              </div>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Bathroom Renovations in <span className="text-amber-300">Sandton</span> for modern homes and luxury
                apartments
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                Build a bathroom that feels intentional, durable and high-end. We deliver complete Sandton bathroom
                renovations with design, waterproofing, tiling, plumbing and finishing managed by one experienced team.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-amber-500 text-slate-950 hover:bg-amber-400">
                  <Link href="/contact">
                    Request a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white hover:text-slate-950"
                >
                  <a href="tel:+27676014490">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 067 601 4490
                  </a>
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <Star className="h-5 w-5 text-amber-300" />
                  <p className="mt-2 text-sm text-slate-200">Premium workmanship with a clean, high-end finish.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <Shield className="h-5 w-5 text-amber-300" />
                  <p className="mt-2 text-sm text-slate-200">Waterproofing, plumbing and installation handled properly.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <Clock className="h-5 w-5 text-amber-300" />
                  <p className="mt-2 text-sm text-slate-200">Clear timelines and consistent communication from start to finish.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { value: "20+", label: "Years of renovation experience" },
                  { value: "Sandton", label: "Targeted local SEO page" },
                  { value: "4-6", label: "Week typical project range" },
                  { value: "1 team", label: "Design to handover managed" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                    <div className="text-3xl font-bold text-amber-300">{item.value}</div>
                    <div className="mt-2 text-sm text-slate-200">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 p-5 text-slate-950">
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">Local focus</p>
                <p className="mt-2 text-lg font-medium">
                  Designed for Sandton homeowners who want a bathroom that looks refined and performs for years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">What we do</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Sandton bathroom renovation services built around quality and practicality
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Whether you are updating an ensuite, upgrading a guest bathroom or planning a complete luxury remodel,
              we build around your layout, budget and finish preferences.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="border-slate-200 shadow-sm transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl text-slate-950">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600">{service.description}</CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Why Sandton</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A bathroom renovation page written for high-intent Sandton search traffic
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                This route is focused on the exact intent behind a Sandton bathroom renovation search: fast quote
                discovery, luxury finish expectations and a clear path to booking a site visit.
              </p>
              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 text-slate-900">
                  <Lightbulb className="h-5 w-5 text-amber-700" />
                  <span className="font-semibold">Nearby suburbs we commonly serve</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {nearbyAreas.map((area) => (
                    <Badge key={area} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-100">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Layout changes for better space and flow",
                "Moisture control and proper waterproofing",
                "Premium tiles, vanities and fixtures",
                "Plumbing, electrical and fit-off coordination",
                "Clean handover and practical maintenance advice",
                "Experience with apartments, estates and houses",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <p className="mt-3 text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Our process</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A simple renovation process that keeps the project moving
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {process.map((item) => (
              <Card key={item.step} className="border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">{item.step}</div>
                  <CardTitle className="text-xl text-slate-950">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">{item.description}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">FAQs</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Bathroom renovation questions we hear most often
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.q} value={`faq-${index}`}>
                  <AccordionTrigger className="px-5 text-left text-lg text-slate-900">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 text-slate-600">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to plan your Sandton bathroom renovation?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Get a focused quote for a Sandton bathroom project with clear scope, practical advice and a team that can
            handle the full build.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-amber-500 text-slate-950 hover:bg-amber-400">
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:bg-white hover:text-slate-950"
            >
              <a href="tel:+27676014490">
                <Phone className="mr-2 h-5 w-5" />
                067 601 4490
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}