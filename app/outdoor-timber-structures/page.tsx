import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Shield, Award, Phone, ArrowRight, TreePine, MapPin } from "lucide-react"
import { FAQAccordion } from "@/components/faq-accordion"

export const metadata: Metadata = {
  title: "Pergolas, Patios & Outdoor Timber Johannesburg | Timber Structure Builders",
  description:
    "Custom timber pergolas, patios, carports and outdoor structures built in Johannesburg. Hardwood pergolas, covered patios, timber decking and screens for Sandton, Bryanston, Fourways & Midrand homes. 5-star rated, 24-month warranty. Free quotes. Call 063 397 7498.",
  keywords:
    "timber pergola johannesburg, pergola builders johannesburg, patio builders johannesburg, wooden pergola sandton, timber carport johannesburg, outdoor timber structures gauteng, covered patio johannesburg, wooden pergola cost johannesburg, timber decking johannesburg, garden structures johannesburg, pergola installation sandton",
  openGraph: {
    title: "Pergolas, Patios & Outdoor Timber Johannesburg | Timber Structure Builders",
    description:
      "Custom timber pergolas, patios, carports and outdoor structures built in Johannesburg. Hardwood craftsmanship built for the Highveld climate. 5-star rated.",
    images: [{ url: "/timber-pergola-patio-johannesburg.png", width: 1200, height: 630 }],
    url: "https://www.timberstudio.co.za/outdoor-timber-structures",
  },
  alternates: {
    canonical: "https://www.timberstudio.co.za/outdoor-timber-structures",
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
}

const outdoorFAQs = [
  {
    question: "How much does a timber pergola cost in Johannesburg?",
    answer:
      "Timber pergola costs in Johannesburg depend on size, timber species and roofing. A compact freestanding pergola typically starts from R25,000, a mid-size attached pergola over a patio ranges from R45,000 to R90,000, and a large hardwood structure with a polycarbonate or shingle roof and integrated lighting can exceed R120,000. We provide a detailed, itemised quote after a free on-site measure and consultation.",
  },
  {
    question: "What timber is best for outdoor structures in the Highveld climate?",
    answer:
      "For Johannesburg's dry, sunny Highveld climate with intense UV and afternoon summer storms, we recommend durable hardwoods such as balau and saligna, or pressure-treated SA pine for more budget-conscious projects. All structural timber is sealed and treated to resist UV, moisture and borer. We advise on the right species for your budget and exposure, and recommend a re-oiling schedule to keep the timber looking its best.",
  },
  {
    question: "Do I need council approval for a pergola or patio structure?",
    answer:
      "Small open pergolas often fall within permitted limits, but larger covered structures, carports and anything attached to the house may require municipal approval and an approved building plan. We are familiar with City of Johannesburg and Ekurhuleni requirements and can advise whether your project needs plans, and coordinate drawings where required, so your structure is fully compliant.",
  },
  {
    question: "How long does it take to build a pergola or covered patio?",
    answer:
      "Most timber pergolas and patio structures are completed in 1 to 3 weeks on site once materials are prepared, depending on size and roofing. Freestanding pergolas are usually the quickest, while large covered patios with roofing, lighting and decking take longer. We provide a clear schedule up front and coordinate any electrical or roofing trades so the project runs smoothly.",
  },
  {
    question: "Which areas of Johannesburg do you build outdoor timber structures in?",
    answer:
      "We build timber pergolas, patios, carports and decking throughout Greater Johannesburg including Sandton, Bryanston, Fourways, Randburg, Midrand, Roodepoort, Kempton Park and Pretoria. Every project starts with a free on-site consultation where we measure the space and discuss timber, roofing and finish options before preparing your quote.",
  },
]

const serviceAreas = [
  "Sandton",
  "Bryanston",
  "Fourways",
  "Randburg",
  "Midrand",
  "Roodepoort",
  "Kempton Park",
  "Centurion",
  "Pretoria",
  "Edenvale",
]

export default function OutdoorTimberStructuresPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.timberstudio.co.za/outdoor-timber-structures#service",
                name: "Pergolas, Patios & Outdoor Timber Johannesburg",
                description:
                  "Custom timber pergolas, covered patios, carports, screens and decking built in Johannesburg using durable hardwoods suited to the Highveld climate.",
                provider: {
                  "@type": "LocalBusiness",
                  "@id": "https://www.timberstudio.co.za/#organization",
                  name: "The Timber Studio",
                  telephone: "+27633977498",
                  email: "info@timberstudio.co.za",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Johannesburg",
                    addressRegion: "Gauteng",
                    addressCountry: "ZA",
                  },
                },
                areaServed: [
                  "Johannesburg",
                  "Sandton",
                  "Bryanston",
                  "Fourways",
                  "Randburg",
                  "Midrand",
                  "Roodepoort",
                  "Kempton Park",
                  "Pretoria",
                  "Centurion",
                ],
                serviceType: "Outdoor Timber Structure Construction",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "ZAR",
                  priceRange: "R25000-R150000",
                  availability: "https://schema.org/InStock",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Outdoor Timber Structure Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Timber Pergolas",
                        description: "Freestanding and attached hardwood pergolas built to measure.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Covered Patios",
                        description: "Roofed timber patio structures with lighting and finishing options.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Carports & Screens",
                        description: "Timber carports, privacy screens and garden structures.",
                      },
                    },
                  ],
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: outdoorFAQs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-600 hover:bg-amber-700 text-white">
                  <TreePine className="h-3 w-3 mr-1" />
                  Outdoor Timber Specialists
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Pergolas, Patios &amp; <span className="text-amber-400">Outdoor Timber</span> Johannesburg
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Custom-built timber pergolas, covered patios, carports and garden structures crafted for the Highveld
                  climate. Beautiful, durable outdoor living spaces designed and built by The Timber Studio.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <Link href="/contact">
                    Get a Free On-Site Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <Link href="tel:+27633977498">
                    <Phone className="mr-2 h-5 w-5" />
                    063 397 7498
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-amber-400 fill-current" />
                  <span>5.0 Rating • 1000+ Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>Licensed &amp; Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-blue-400" />
                  <span>24-Month Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/timber-pergola-patio-johannesburg.png"
                  alt="Custom timber pergola over a patio with decking in an upscale Johannesburg garden built by The Timber Studio"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-slate-900">Latest Project</p>
                        <p className="text-sm text-slate-600">Balau Pergola &amp; Deck - Fourways</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Custom Pergolas, Patios &amp; Outdoor Timber in Johannesburg
            </h2>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                Johannesburg&apos;s climate is made for outdoor living, and a well-built timber structure transforms a
                garden or patio into a space you use all year round. The Timber Studio designs and builds bespoke
                pergolas, covered patios, carports and garden structures using durable hardwoods chosen to withstand the
                Highveld&apos;s intense sun and summer storms, for homes across Sandton, Bryanston, Fourways and greater
                Gauteng.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Timber Pergolas Built to Measure</h3>
              <p>
                A pergola adds shade, structure and character to any outdoor space. We build both freestanding and
                house-attached pergolas from durable hardwoods such as balau and saligna, or treated SA pine for more
                budget-conscious projects. Every structure is engineered for stability, properly anchored and sealed
                against UV and moisture so it stays beautiful and safe for years.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Covered Patios &amp; Outdoor Rooms</h3>
              <p>
                Extend your living space outdoors with a covered timber patio. We design roofed structures with
                polycarbonate, shingle or slatted roofing to suit your needs, whether you want full rain protection or
                dappled shade. Integrated lighting, fans and finishing touches turn the space into a true outdoor room
                for entertaining throughout the Johannesburg year.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Carports, Screens &amp; Garden Structures
              </h3>
              <p>
                Beyond pergolas and patios, we build timber carports, privacy screens, garden gazebos and feature
                structures. Timber screens add privacy and style to boundaries and patios, while a timber carport
                protects vehicles with far more character than steel alternatives. Every structure is custom-designed to
                complement your home and garden.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Built for the Highveld &amp; Backed by Warranty
              </h3>
              <p>
                All structural timber is treated and sealed to resist UV, moisture and borer, and our builds are
                engineered for the Highveld&apos;s conditions. We advise on the right timber for your budget and
                exposure, handle any council plan requirements where needed, and back every structure with a 24-month
                workmanship warranty for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Outdoor Structures We Build</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From a simple shade pergola to a full covered outdoor room, every structure is designed and built to order
              for your Johannesburg home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Timber Pergolas",
                body: "Freestanding and attached hardwood pergolas engineered for shade, style and durability.",
              },
              {
                title: "Covered Patios",
                body: "Roofed patio structures with polycarbonate, shingle or slatted roofing for year-round use.",
              },
              {
                title: "Timber Carports",
                body: "Characterful timber carports that protect vehicles and complement your home.",
              },
              {
                title: "Timber Decking",
                body: "Hardwood and composite decking to tie your outdoor structure into the garden.",
              },
              {
                title: "Privacy Screens",
                body: "Slatted timber screens for boundaries, patios and pool areas that add privacy and style.",
              },
              {
                title: "Gazebos & Features",
                body: "Garden gazebos, feature structures and bespoke outdoor joinery built to your vision.",
              },
            ].map((item) => (
              <Card key={item.title} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-amber-600" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas (GEO) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Outdoor Timber Structures Across Johannesburg &amp; Gauteng
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We design and build pergolas, patios, carports and decking throughout the northern suburbs and greater
              Johannesburg, starting with a free on-site measure and consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  <MapPin className="h-3.5 w-3.5 text-amber-600" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Recent Outdoor Timber Projects</h2>
            <p className="text-lg text-slate-600">
              A selection of pergolas, patios and decking built for homes across Johannesburg.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "/timber-pergola-patio-johannesburg.png",
                alt: "Custom timber pergola over a patio with decking in a Fourways garden",
                caption: "Balau Pergola & Deck - Fourways",
              },
              {
                src: "/beautiful-decking.jpg",
                alt: "Beautiful timber decking installed in a Johannesburg garden",
                caption: "Hardwood Deck - Sandton",
              },
              {
                src: "/french-door-patio.jpg",
                alt: "Covered timber patio with French doors leading to a Johannesburg garden",
                caption: "Covered Patio - Bryanston",
              },
            ].map((img) => (
              <div key={img.caption} className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">View Complete Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600">
                Common questions about timber pergolas, patios and outdoor structures in Johannesburg.
              </p>
            </div>
            <FAQAccordion faqs={outdoorFAQs} />
          </div>
        </div>
      </section>

      {/* Internal Linking Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Related Services</h2>
            <p className="text-lg text-slate-600">Explore our other timber and joinery services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Decking &amp; Flooring</h3>
                <p className="text-slate-600 mb-6">
                  Premium timber decking and flooring to complete your outdoor and indoor spaces.
                </p>
                <Button asChild variant="outline">
                  <Link href="/decking-flooring">View Decking</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Door Installation</h3>
                <p className="text-slate-600 mb-6">
                  Premium French, pivot and patio doors to connect your home with your new outdoor space.
                </p>
                <Button asChild variant="outline">
                  <Link href="/door-installation">View Doors</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Bespoke Furniture</h3>
                <p className="text-slate-600 mb-6">
                  Handcrafted timber furniture and outdoor pieces made to measure for your home.
                </p>
                <Button asChild variant="outline">
                  <Link href="/custom-furniture">View Furniture</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-xl text-amber-100">
              Book a free on-site consultation with The Timber Studio and let&apos;s design a pergola or patio that
              makes the most of your Johannesburg garden.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-amber-600 bg-transparent"
              >
                <Link href="tel:+27633977498">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 063 397 7498
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
