import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Shield, Award, Phone, ArrowRight, Home, ChefHat } from "lucide-react"
import { FAQAccordion } from "@/components/faq-accordion"

export const metadata: Metadata = {
  title: "Kitchen Renovations Johannesburg 2026 | Expert Kitchen Remodeling Services",
  description:
    "Transform your kitchen with expert renovation services in Johannesburg, Sandton, Randburg & Midrand. Custom designs, premium countertops, built-in cupboards. 5-star rated. Free quotes. Call 063 397 7498.",
  keywords:
    "kitchen renovations johannesburg, kitchen remodeling sandton, kitchen renovation randburg, kitchen design midrand, custom kitchens gauteng, kitchen cupboards johannesburg, premium countertops kitchen, kitchen renovation cost johannesburg, modern kitchen design sandton, kitchen contractors johannesburg",
  openGraph: {
    title: "Kitchen Renovations Johannesburg 2026 | Expert Kitchen Remodeling Services",
    description:
      "Transform your kitchen with expert renovation services in Johannesburg. Custom designs, premium countertops, professional installation. 5-star rated service.",
    images: [{ url: "/Kitchen-renovations-sandton.webp", width: 1200, height: 630 }],
    url: "https://www.timberstudio.co.za/services/kitchen-renovations",
  },
  alternates: {
    canonical: "https://www.timberstudio.co.za/services/kitchen-renovations",
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

const kitchenFAQs = [
  {
    question: "How much does a kitchen renovation cost in Johannesburg?",
    answer:
      "Kitchen renovation costs in Johannesburg vary based on size, materials, and scope of work. Basic renovations start from R80,000, mid-range renovations R120,000-R250,000, and luxury renovations R300,000+. Factors affecting cost include cabinet quality, countertop materials, appliances, plumbing changes, and electrical work. We provide detailed quotes with no hidden costs during our free consultation.",
  },
  {
    question: "How long does a kitchen renovation take in Sandton and Randburg?",
    answer:
      "Kitchen renovation timelines depend on project complexity. Simple updates (painting, countertops, hardware) take 1-2 weeks. Full renovations with new cabinets, countertops, and appliances take 3-4 weeks. Major renovations involving plumbing, electrical, and structural changes take 5-8 weeks. We provide detailed project schedules and coordinate with other trades to minimize delays. Weather and permit approvals can affect timelines in Johannesburg.",
  },
  {
    question: "What kitchen renovation services do you provide in Johannesburg?",
    answer:
      "We provide comprehensive kitchen renovation services including custom cabinet design and installation, premium countertops, kitchen islands, backsplash installation, plumbing and electrical work, flooring installation, lighting design, appliance installation, and project management. Our team handles everything from initial design consultation to final cleanup, ensuring a seamless renovation experience throughout Johannesburg, Sandton, Randburg, and Midrand.",
  },
  {
    question: "Do you provide kitchen design services with 3D visualization?",
    answer:
      "Yes, we provide complete kitchen design services with 3D modeling and visualization. Our experienced designers create detailed plans showing layout, materials, colors, and finishes before construction begins. This helps you visualize your new kitchen and make informed decisions about design elements. We offer multiple design revisions and work closely with you to ensure the final design meets your functional needs and aesthetic preferences.",
  },
]

export default function KitchenRenovationsPage() {
  return (
    <div className="min-h-screen">
      {/* Structured Data for Better Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.timberstudio.co.za/services/kitchen-renovations#service",
                name: "Kitchen Renovations Johannesburg",
                description:
                  "Professional kitchen renovation services in Johannesburg including custom cabinet installation, premium countertops, and complete kitchen remodeling.",
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
                  "Randburg",
                  "Midrand",
                  "Centurion",
                  "Pretoria",
                  "Kempton Park",
                  "Boksburg",
                  "Edenvale",
                  "Roodepoort",
                  "Fourways",
                  "Alberton",
                ],
                serviceType: "Kitchen Renovation",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "ZAR",
                  priceRange: "R80000-R500000",
                  availability: "https://schema.org/InStock",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Kitchen Renovation Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Custom Kitchen Cabinets",
                        description: "Custom-built kitchen cabinets with premium materials and hardware",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Custom Countertops",
                        description: "Premium custom countertop installation for kitchens",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Kitchen Design",
                        description: "Professional kitchen design with 3D visualization",
                      },
                    },
                  ],
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.timberstudio.co.za",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://www.timberstudio.co.za/services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Kitchen Renovations",
                    item: "https://www.timberstudio.co.za/services/kitchen-renovations",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: kitchenFAQs.map((faq) => ({
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

      {/* Breadcrumb Navigation */}
      <section className="bg-slate-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-slate-600 hover:text-amber-600 flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Services</span>
            <span className="text-slate-400">/</span>
            <span className="text-amber-600 font-medium">Kitchen Renovations</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-600 hover:bg-amber-700 text-white">
                  <ChefHat className="h-3 w-3 mr-1" />
                  Kitchen Renovation Specialists
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Professional <span className="text-amber-400">Kitchen Renovations</span> Johannesburg
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Transform your kitchen with expert renovation services in Johannesburg. Custom designs, premium
                  materials, and professional installation from Johannesburg's most trusted kitchen renovation
                  specialists.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <Link href="/contact">
                    Get Free Quote
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
                  <span>5.0 Rating • 150+ Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>Licensed & Insured</span>
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
                  src="/Kitchen-renovations-sandton.webp"
                  alt="Professional Kitchen Renovation Johannesburg - Modern kitchen with premium countertops and custom cabinets"
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
                        <p className="text-sm text-slate-600">Modern Kitchen - Sandton</p>
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
              Expert Kitchen Renovations in Johannesburg
            </h2>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                Kitchen renovations in Johannesburg require specialized expertise in design, materials, and installation
                techniques that work well in South African homes. Our comprehensive renovation services transform
                outdated kitchens into modern, functional spaces that enhance both your daily life and property value.
                Serving homeowners throughout Johannesburg, Sandton, Randburg, and Midrand, we understand the unique
                requirements of local homes and deliver exceptional results that exceed expectations.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Custom Kitchen Design and Planning Services
              </h3>
              <p>
                Our kitchen renovation process begins with comprehensive design consultation and space planning. We
                assess your current kitchen layout, understand your cooking habits and lifestyle requirements, and
                create custom designs that maximize functionality while reflecting your personal style. Using advanced
                3D modeling software, we provide detailed visualizations that help you see exactly how your renovated
                kitchen will look before construction begins.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Premium Kitchen Cabinets and Storage Solutions
              </h3>
              <p>
                Custom kitchen cabinets form the foundation of every successful renovation. We design and build cabinets
                using premium materials including solid wood, high-quality MDF, and durable melamine finishes. Our
                cabinet solutions maximize storage capacity with innovative features like soft-close drawers, pull-out
                shelves, lazy Susans, and specialized organizers for utensils, spices, and cookware. All cabinets are
                built to withstand Johannesburg's climate conditions and daily use.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Premium Countertop Installation
              </h3>
              <p>
                Premium countertops are essential for both functionality and aesthetics in modern kitchens. We install a
                wide range of durable countertop surfaces, offering extensive selections of colors and patterns to
                complement your kitchen design. Our fabrication process includes precise templating, custom edge
                profiles, and professional installation with seamless joints for a flawless, long-lasting finish.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Complete Project Management and Quality Assurance
              </h3>
              <p>
                Kitchen renovations involve coordinating multiple trades including plumbing, electrical, tiling, and
                painting. Our project management approach ensures seamless coordination, adherence to timelines, and
                quality control at every stage. We handle permit applications, material procurement, trade scheduling,
                and final inspections. Our 24-month warranty covers all workmanship and materials, providing peace of
                mind for your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Complete Kitchen Renovation Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From initial design to final installation, we handle every aspect of your kitchen renovation with
              precision and care. Our experienced team delivers exceptional results that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  Custom Kitchen Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Personalized kitchen designs that maximize space, functionality, and style. Our designers work closely
                  with you to create the perfect layout for your lifestyle and cooking needs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  Premium Cabinetry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Custom-built cabinets using high-quality materials and hardware. Choose from various styles, finishes,
                  and storage solutions to suit your needs and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  Countertop Installation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Professional installation of premium countertop surfaces. Precision cutting and seamless
                  installation for a flawless finish that lasts for decades.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  Plumbing & Electrical
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Complete plumbing and electrical services for your kitchen renovation. Licensed professionals ensure
                  all work meets safety standards and South African building codes.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  Flooring Installation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Professional installation of tiles, hardwood, laminate, and luxury vinyl flooring. Durable, beautiful
                  floors that complement your kitchen design and withstand daily use.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  Project Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Comprehensive project management from start to finish. We coordinate all trades, manage timelines, and
                  ensure quality at every stage of your renovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Recent Kitchen Renovations</h2>
            <p className="text-lg text-slate-600">
              See some of our recent kitchen renovation projects in Johannesburg and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/modern-kitchen renovation.webp"
                alt="Modern kitchen renovation with white cabinets and premium countertops in Sandton"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Modern Kitchen - Sandton</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/kitchen-renovation-granite-installation-johannesburg.jpg"
                alt="Kitchen renovation in Johannesburg showing custom cabinets and premium countertops"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Custom Kitchen - Johannesburg</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/carpenter-johannesburg-installing-kitchen-cupboards.jpg"
                alt="Professional carpenter installing kitchen cupboards in Johannesburg renovation project"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Custom Cupboards - Randburg</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">View Complete Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600">
                Get answers to common questions about our kitchen renovation services in Johannesburg.
              </p>
            </div>
            <FAQAccordion faqs={kitchenFAQs} />
          </div>
        </div>
      </section>

      {/* Internal Linking Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Related Services</h2>
            <p className="text-lg text-slate-600">Complete your kitchen renovation with our additional services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Built-in Cupboards</h3>
                <p className="text-slate-600 mb-6">
                  Custom built-in storage solutions to complement your new kitchen renovation.
                </p>
                <Button asChild variant="outline">
                  <Link href="/built-in-cupboards">View Storage</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Bathroom Renovations</h3>
                <p className="text-slate-600 mb-6">
                  Complete bathroom makeovers with modern fixtures, tiling, and waterproofing.
                </p>
                <Button asChild variant="outline">
                  <Link href="/bathroom-renovations">View Bathrooms</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Door Installation</h3>
                <p className="text-slate-600 mb-6">
                  Premium pivot, barn, security, and French door installation for your home.
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
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Transform Your Kitchen?</h2>
            <p className="text-xl text-amber-100">
              Get a free consultation and detailed quote from Johannesburg's most trusted kitchen renovation
              specialists. Let's create the kitchen of your dreams together.
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
