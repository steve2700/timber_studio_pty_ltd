import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
  import { CheckCircle, Star, Shield, Award, Phone, ArrowRight, Cable as Cabinet } from "lucide-react"
import { FAQAccordion } from "@/components/faq-accordion"

export const metadata: Metadata = {
  title: "Built-in Cupboards Johannesburg 2026 | Custom Wardrobes & Storage Solutions",
  description:
    "Expert built-in cupboard installation in Johannesburg, Sandton, Randburg & Midrand. Custom wardrobes, bedroom cupboards, walk-in closets. 5-star rated. Free quotes. Call 063 397 7498.",
  keywords:
    "built-in cupboards johannesburg, custom wardrobes sandton, bedroom cupboards randburg, built-in storage midrand, fitted wardrobes gauteng, walk-in closets johannesburg, custom storage solutions, built-in wardrobes johannesburg, cupboard installation sandton, bedroom storage solutions",
  openGraph: {
    title: "Built-in Cupboards Johannesburg 2026 | Custom Wardrobes & Storage Solutions",
    description:
      "Expert built-in cupboard installation in Johannesburg. Custom wardrobes, bedroom cupboards, and storage solutions. Quality guaranteed, 5-star rated service.",
    images: [{ url: "/Custom-Bedroom-Built-In-Cupboards-and-Wardrobes-JHB.png", width: 1200, height: 630 }],
    url: "https://www.timberstudio.co.za/built-in-cupboards",
  },
  alternates: {
    canonical: "https://www.timberstudio.co.za/built-in-cupboards",
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

const cupboardFAQs = [
  {
    question: "How much do built-in cupboards cost in Johannesburg?",
    answer:
      "Built-in cupboard costs in Johannesburg vary based on size, materials, and complexity. Basic melamine wardrobes start from R8,000-R15,000, mid-range options R15,000-R30,000, and luxury walk-in closets R35,000+. Factors affecting cost include cabinet size, material quality (melamine, wood veneer, solid wood), hardware quality (soft-close hinges, drawer slides), internal fittings (shoe racks, jewelry drawers), and installation complexity. We provide detailed quotes during our free consultation.",
  },
  {
    question: "How long does built-in cupboard installation take in Sandton and Randburg?",
    answer:
      "Installation timeframes depend on project size and complexity. Simple bedroom wardrobes take 2-3 days, larger walk-in closets 4-7 days, and multiple room installations 1-2 weeks. The process includes design consultation (1 day), manufacturing (5-10 days), and installation (2-7 days). We provide accurate timelines during consultation and work efficiently to minimize disruption. Custom features and complex designs may extend timelines slightly.",
  },
  {
    question: "What types of built-in cupboards do you install in Johannesburg?",
    answer:
      "We install all types of built-in storage including bedroom wardrobes, walk-in closets, study cupboards, entertainment units, linen cupboards, under-stair storage, and custom solutions. Our designs maximize space utilization while complementing your home's aesthetic. We work with melamine, wood veneer, and solid wood finishes, offering various door styles, internal configurations, and hardware options to suit your needs and budget.",
  },
  {
    question: "Do you provide design services for custom wardrobes with 3D visualization?",
    answer:
      "Yes, we provide comprehensive design services with 3D modeling and visualization. Our designers visit your Johannesburg home to measure spaces, assess requirements, and create custom solutions. We provide detailed 3D renderings showing materials, colors, and internal configurations before manufacturing begins. This helps you visualize the final result and make informed decisions about design elements, ensuring complete satisfaction with your built-in cupboards.",
  },
]

export default function BuiltInCupboardsPage() {
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
                "@id": "https://www.timberstudio.co.za/built-in-cupboards#service",
                name: "Built-in Cupboards Johannesburg",
                description:
                  "Professional built-in cupboard installation in Johannesburg including custom wardrobes, bedroom cupboards, walk-in closets, and storage solutions.",
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
                serviceType: "Built-in Cupboards",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "ZAR",
                  priceRange: "R8000-R50000",
                  availability: "https://schema.org/InStock",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Built-in Cupboard Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Bedroom Wardrobes",
                        description: "Custom bedroom wardrobes with hanging space, shelves, and drawers",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Walk-in Closets",
                        description: "Luxury walk-in closets with custom shelving and organization systems",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Study Cupboards",
                        description: "Built-in study units with desks, bookshelves, and storage",
                      },
                    },
                  ],
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: cupboardFAQs.map((faq) => ({
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
                  <Cabinet className="h-3 w-3 mr-1" />
                  Custom Storage Specialists
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Built-in <span className="text-amber-400">Cupboards & Wardrobes</span> Johannesburg
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Maximize your space with expertly crafted built-in cupboards and wardrobes. Custom designs, premium
                  materials, and professional installation throughout Johannesburg, Sandton, Randburg, and Midrand.
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
                  <span>5.0 Rating • 200+ Projects</span>
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
                  src="/Custom-Bedroom-Built-In-Cupboards-and-Wardrobes-JHB.png"
                  alt="Custom bedroom built-in cupboards and wardrobes in Johannesburg - Professional installation"
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
                        <p className="text-sm text-slate-600">Custom Wardrobes - Sandton</p>
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
              Expert Built-in Cupboards and Storage Solutions in Johannesburg
            </h2>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                Built-in cupboards and wardrobes represent one of the most effective ways to maximize storage space
                while adding significant value to your Johannesburg home. Our custom storage solutions are designed to
                work with the unique architectural features and space constraints common in South African homes. Serving
                homeowners throughout Johannesburg, Sandton, Randburg, and Midrand, we create storage solutions that
                combine functionality with aesthetic appeal, ensuring every inch of space is utilized effectively.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Custom Bedroom Wardrobes and Walk-in Closets
              </h3>
              <p>
                Bedroom storage is essential for maintaining organized, peaceful living spaces. Our custom wardrobe
                designs maximize vertical space while providing specialized storage for different clothing types,
                accessories, and personal items. Popular configurations in Johannesburg homes include his-and-hers
                sections, shoe storage systems, jewelry drawers, and hanging areas optimized for South African clothing
                styles. Walk-in closets transform spare bedrooms or large alcoves into luxury dressing areas with island
                units, perimeter storage, and integrated lighting systems.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Study Units and Home Office Storage</h3>
              <p>
                With the increasing trend toward remote work, home office storage has become crucial for productivity
                and organization. Our built-in study units combine desks, bookshelves, filing systems, and technology
                storage in cohesive designs that maximize workspace efficiency. Features include cable management
                systems, adjustable shelving, secure filing drawers, and specialized compartments for office equipment.
                These solutions are particularly popular in Sandton and Randburg homes where space optimization is
                essential.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Entertainment Centers and Living Room Storage
              </h3>
              <p>
                Modern entertainment centers go beyond simple TV stands to become comprehensive media management
                systems. Our designs accommodate large screen TVs, sound systems, gaming consoles, and extensive media
                collections while maintaining clean, uncluttered appearances. Advanced features include ventilation
                systems for electronic equipment, cable management for clean installations, and integrated lighting for
                ambiance and functionality.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Quality Materials and Professional Installation
              </h3>
              <p>
                We use premium materials specifically chosen for durability in Johannesburg's climate conditions.
                Options include high-quality melamine in various colors and wood grains, natural wood veneers, and solid
                wood for luxury applications. All hardware features soft-close mechanisms from leading manufacturers
                like Blum and Hettich. Our installation process ensures perfect alignment, secure mounting, and smooth
                operation of all moving parts, backed by our comprehensive 24-month warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Custom Built-in Storage Solutions</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From bedroom wardrobes to walk-in closets, we create custom storage solutions that maximize space and
              enhance your home's functionality and value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  Bedroom Wardrobes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Custom bedroom wardrobes designed to fit your space perfectly. Multiple compartments, hanging space,
                  and drawers for optimal organization and storage efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  Walk-in Closets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Luxurious walk-in closets with custom shelving, hanging rails, and specialized storage for shoes,
                  accessories, and clothing organization systems.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  Study Cupboards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Built-in study and office storage solutions with desks, bookshelves, and filing systems for a
                  productive and organized workspace.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  Entertainment Units
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Custom entertainment centers with TV mounting, media storage, and cable management for a clean,
                  organized living space with modern functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  Linen Cupboards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Efficient linen and bathroom storage with adjustable shelving and specialized compartments for towels,
                  bedding, and toiletries with moisture-resistant materials.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  Custom Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Bespoke storage solutions for unique spaces and requirements. Under-stair storage, alcove cupboards,
                  and specialized units tailored to your needs.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Recent Built-in Cupboard Projects</h2>
            <p className="text-lg text-slate-600">
              Browse our portfolio of custom built-in cupboards and wardrobes installed throughout Johannesburg and
              surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/built-in-wardrobes-sliding (1) (1).webp"
                alt="Built-in wardrobes with sliding doors in Johannesburg bedroom"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Sliding Wardrobes - Sandton</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/built-in-study-1 (1).webp"
                alt="Built-in study cupboards and desk installation in Johannesburg home"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Study Unit - Randburg</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/entertainment unit.jpg"
                alt="Custom entertainment unit with storage in Johannesburg living room"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Entertainment Unit - Midrand</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">View All Projects</Link>
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
                Get answers to common questions about our built-in cupboard services in Johannesburg.
              </p>
            </div>
            <FAQAccordion faqs={cupboardFAQs} />
          </div>
        </div>
      </section>

      {/* Internal Linking Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Related Services</h2>
            <p className="text-lg text-slate-600">Complete your home renovation with our additional services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Kitchen Renovations</h3>
                <p className="text-slate-600 mb-6">
                  Complete kitchen renovations with custom cabinets and premium finishes to match your built-in
                  cupboards.
                </p>
                <Button asChild variant="outline">
                  <Link href="/kitchen-renovations">View Kitchens</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Granite & Quartz</h3>
                <p className="text-slate-600 mb-6">
                  Premium granite and quartz surfaces for countertops and vanity tops in your storage areas.
                </p>
                <Button asChild variant="outline">
                  <Link href="/kitchen-renovations">View Surfaces</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Decking & Flooring</h3>
                <p className="text-slate-600 mb-6">
                  Professional flooring installation to complement your built-in storage solutions.
                </p>
                <Button asChild variant="outline">
                  <Link href="/decking-flooring">View Flooring</Link>
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
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Maximize Your Storage Space?</h2>
            <p className="text-xl text-amber-100">
              Get a free consultation and detailed quote from Johannesburg's most trusted built-in cupboard specialists.
              Let's create the perfect storage solution for your home.
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
