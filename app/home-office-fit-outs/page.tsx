import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Shield, Award, Phone, ArrowRight, Briefcase, MapPin } from "lucide-react"
import { FAQAccordion } from "@/components/faq-accordion"

export const metadata: Metadata = {
  title: "Home Office & Study Fit-Outs Johannesburg | Built-in Desks & Shelving",
  description:
    "Custom home office and study fit-outs in Johannesburg. Built-in desks, floor-to-ceiling shelving, cabinetry and cable management for work-from-home professionals in Sandton, Bryanston, Fourways & Midrand. 5-star rated, 24-month warranty. Free consultation. Call 063 397 7498.",
  keywords:
    "home office fit out johannesburg, study fit out johannesburg, built in desk johannesburg, home office cabinetry sandton, custom study johannesburg, work from home office design gauteng, built in shelving study, home office joinery johannesburg, study room design sandton, custom desk johannesburg, home office renovation johannesburg",
  openGraph: {
    title: "Home Office & Study Fit-Outs Johannesburg | Built-in Desks & Shelving",
    description:
      "Custom home office and study fit-outs in Johannesburg. Built-in desks, shelving and cabinetry designed for productive work from home. 5-star rated craftsmanship.",
    images: [{ url: "/home-office-study-fit-out-johannesburg.png", width: 1200, height: 630 }],
    url: "https://www.timberstudio.co.za/home-office-fit-outs",
  },
  alternates: {
    canonical: "https://www.timberstudio.co.za/home-office-fit-outs",
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

const officeFAQs = [
  {
    question: "How much does a home office fit-out cost in Johannesburg?",
    answer:
      "Home office fit-out costs in Johannesburg depend on the size of the space and the extent of the joinery. A compact built-in desk with overhead shelving typically starts from R15,000, a mid-range study with a desk, drawers and full shelving wall ranges from R30,000 to R70,000, and a large executive study with premium timber, integrated storage and cabling can exceed R90,000. We provide a detailed, itemised quote after a free on-site consultation.",
  },
  {
    question: "How long does a home office or study fit-out take?",
    answer:
      "Most home office fit-outs take 2 to 5 weeks from approved design to completed installation. Simple built-in desks are usually installed within 2 to 3 weeks, while full study rooms with floor-to-ceiling shelving and cabinetry take 4 to 6 weeks. The bulk of the work is completed in our Johannesburg workshop, so on-site installation is quick and causes minimal disruption to your home.",
  },
  {
    question: "Can you design a home office to fit a small or awkward space?",
    answer:
      "Yes. Built-in joinery is ideal for small or awkward spaces such as alcoves, under-stair voids, spare bedrooms and open-plan corners. Because every desk, cabinet and shelf is made to measure in our workshop, we use every centimetre efficiently, including custom cable management, integrated lighting and hidden storage. This is one of the biggest advantages of a bespoke fit-out over off-the-shelf office furniture.",
  },
  {
    question: "Do you include cable management and lighting in the fit-out?",
    answer:
      "Absolutely. We design in concealed cable routing, grommets, power and USB integration points and space for routers, docks and monitors so your workspace stays tidy. We can also incorporate integrated LED task and shelf lighting. For any electrical connections we coordinate with a licensed electrician to ensure everything meets South African standards.",
  },
  {
    question: "Which areas of Johannesburg do you fit out home offices in?",
    answer:
      "We design and install home office and study fit-outs throughout Greater Johannesburg, including Sandton, Bryanston, Fourways, Randburg, Rosebank, Midrand, Roodepoort and Pretoria. Every project starts with a free on-site consultation where we measure the space and discuss timber, finish and layout options before we prepare your design and quote.",
  },
]

const serviceAreas = [
  "Sandton",
  "Bryanston",
  "Fourways",
  "Randburg",
  "Rosebank",
  "Midrand",
  "Roodepoort",
  "Centurion",
  "Pretoria",
  "Edenvale",
]

export default function HomeOfficeFitOutsPage() {
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
                "@id": "https://www.timberstudio.co.za/home-office-fit-outs#service",
                name: "Home Office & Study Fit-Outs Johannesburg",
                description:
                  "Custom home office and study fit-outs in Johannesburg including built-in desks, floor-to-ceiling shelving, cabinetry and integrated cable management.",
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
                  "Rosebank",
                  "Midrand",
                  "Roodepoort",
                  "Pretoria",
                  "Centurion",
                ],
                serviceType: "Home Office & Study Fit-Out",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "ZAR",
                  priceRange: "R15000-R120000",
                  availability: "https://schema.org/InStock",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Home Office Fit-Out Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Built-in Desks",
                        description: "Made-to-measure desks and workstations built into your available space.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Study Shelving & Storage",
                        description: "Floor-to-ceiling shelving, cabinetry and filing storage for study rooms.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Cable Management & Lighting",
                        description: "Concealed cabling, power integration and integrated task lighting.",
                      },
                    },
                  ],
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: officeFAQs.map((faq) => ({
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
                  <Briefcase className="h-3 w-3 mr-1" />
                  Home Office Specialists
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Home Office &amp; <span className="text-amber-400">Study Fit-Outs</span> Johannesburg
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Purpose-built home offices and studies designed for focus and productivity. Built-in desks,
                  floor-to-ceiling shelving and clever storage crafted to fit your space and the way you work from home.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <Link href="/contact">
                    Book a Free Consultation
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
                  src="/home-office-study-fit-out-johannesburg.png"
                  alt="Custom built-in home office with timber desk and floor-to-ceiling shelving fitted for a Johannesburg home"
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
                        <p className="text-sm text-slate-600">Built-in Study - Bryanston</p>
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
              Custom Home Office &amp; Study Fit-Outs in Johannesburg
            </h2>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                Working from home has become a permanent part of life for thousands of Johannesburg professionals, and a
                dedicated, well-designed workspace makes all the difference to comfort and productivity. The Timber
                Studio designs and builds bespoke home offices and studies that turn spare rooms, alcoves and open-plan
                corners into calm, organised places to work, right across Sandton, Bryanston, Fourways and greater
                Gauteng.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Built-in Desks &amp; Workstations</h3>
              <p>
                A built-in desk uses your available space far more efficiently than freestanding office furniture. We
                design workstations at the correct ergonomic height with generous work surfaces, integrated drawers and
                dedicated space for monitors, laptops and docking stations. Whether you need a single desk in a bedroom
                nook or a dual workstation for a shared study, every surface is made to measure in our workshop.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Floor-to-Ceiling Shelving &amp; Storage
              </h3>
              <p>
                Books, files, folders and equipment quickly clutter a home office without proper storage. We build
                floor-to-ceiling shelving, closed cabinetry, filing drawers and display niches tailored to what you need
                to store. Adjustable shelving keeps the space flexible as your needs change, and closed storage keeps
                paperwork and cables neatly out of sight during video calls.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Cable Management, Power &amp; Integrated Lighting
              </h3>
              <p>
                A professional workspace needs to stay tidy. We design in concealed cable routing, grommets, and space
                for power, USB and networking points so cables never take over your desk. Integrated LED task and shelf
                lighting keeps the space bright for long working days, and we coordinate with licensed electricians for
                any new connections to keep everything compliant and safe.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Made to Measure for Small &amp; Awkward Spaces
              </h3>
              <p>
                Bespoke joinery excels where standard furniture fails. Under-stair voids, sloped ceilings, narrow
                alcoves and tricky corners become fully functional workspaces when every component is built to fit.
                Backed by our 24-month workmanship warranty, your new home office is built to last and designed to make
                working from home in Johannesburg genuinely enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Build Into Your Study</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Every home office is designed around your work, your equipment and your space, then crafted to order in
              our Johannesburg workshop.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Built-in Desks",
                body: "Ergonomic, made-to-measure desks and dual workstations with integrated drawers and cable ports.",
              },
              {
                title: "Shelving Walls",
                body: "Floor-to-ceiling shelving and bookcases with adjustable shelves to grow with your needs.",
              },
              {
                title: "Filing & Cabinetry",
                body: "Closed storage, filing drawers and lockable cabinets to keep documents secure and tidy.",
              },
              {
                title: "Cable & Power Integration",
                body: "Concealed cabling, grommets and space for routers, docks and power so your desk stays clear.",
              },
              {
                title: "Integrated Lighting",
                body: "LED task and shelf lighting designed for comfortable, glare-free long working days.",
              },
              {
                title: "Meeting & Media Zones",
                body: "Tidy backdrops, display niches and acoustic-friendly layouts for professional video calls.",
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
              Home Office Fit-Outs Across Johannesburg &amp; Gauteng
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We design and install custom studies and home offices throughout the northern suburbs and greater
              Johannesburg, starting with a free on-site consultation.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Recent Home Office Projects</h2>
            <p className="text-lg text-slate-600">
              A selection of studies and home offices fitted out for clients across Johannesburg.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "/home-office-study-fit-out-johannesburg.png",
                alt: "Built-in home office with timber desk and shelving in a Bryanston home",
                caption: "Built-in Study - Bryanston",
              },
              {
                src: "/built-in-study-1 (1).webp",
                alt: "Custom built-in study with shelving and desk in a Johannesburg home",
                caption: "Study Fit-Out - Sandton",
              },
              {
                src: "/office-fit-outs-johannesburg.png",
                alt: "Home office fit-out with cabinetry and workstations in Johannesburg",
                caption: "Home Office - Fourways",
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
                Common questions about home office and study fit-outs in Johannesburg.
              </p>
            </div>
            <FAQAccordion faqs={officeFAQs} />
          </div>
        </div>
      </section>

      {/* Internal Linking Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Related Services</h2>
            <p className="text-lg text-slate-600">Explore our other bespoke joinery services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Built-in Cupboards</h3>
                <p className="text-slate-600 mb-6">
                  Custom wardrobes and storage solutions designed to maximise every room in your home.
                </p>
                <Button asChild variant="outline">
                  <Link href="/built-in-cupboards">View Storage</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Bespoke Furniture</h3>
                <p className="text-slate-600 mb-6">
                  Handcrafted tables, shelving and statement pieces made to measure for your home.
                </p>
                <Button asChild variant="outline">
                  <Link href="/custom-furniture">View Furniture</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Door Installation</h3>
                <p className="text-slate-600 mb-6">
                  Premium pivot, barn, security and French door installation for your home or study.
                </p>
                <Button asChild variant="outline">
                  <Link href="/door-installation">View Doors</Link>
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
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Build Your Home Office?</h2>
            <p className="text-xl text-amber-100">
              Book a free on-site consultation with The Timber Studio and let&apos;s design a workspace that helps you
              do your best work from home.
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
