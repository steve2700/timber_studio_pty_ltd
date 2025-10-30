import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Star, CheckCircle, ArrowRight, Shield, Award, Users, MapPin, Wrench, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Drywall Installation Johannesburg South 2025 | Professional Drywalling",
  description:
    "Expert drywall installation in Johannesburg South. Residential & commercial drywalling, plasterboard walls, ceiling installation. 5-star service, 24-month warranty. Call 067 601 4490.",
  keywords:
    "drywall installation Johannesburg South, drywalling contractors Johannesburg South, plasterboard installation Johannesburg South, drywall repair Johannesburg South, ceiling installation Johannesburg South, residential drywall Johannesburg South, commercial drywalling Johannesburg South, drywall finishing Johannesburg South, plasterboard walls Johannesburg South, drywall services Johannesburg South",
  openGraph: {
    title: "Drywall Installation Johannesburg South 2025 | Professional Drywalling",
    description:
      "Expert drywall installation in Johannesburg South. Residential & commercial services with 5-star rating.",
    images: [{ url: "/drywall-contractor.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/drywall-johannesburg-south",
  },
}

export default function DrywallJohannesburgSouthPage() {
  const services = [
    {
      title: "Residential Drywall Installation",
      description: "Complete drywall solutions for Johannesburg South homes including new builds and renovations",
      features: [
        "Standard & moisture-resistant boards",
        "Professional taping & finishing",
        "Smooth paint-ready surfaces",
        "Interior wall partitions",
      ],
      price: "From R120/m²",
    },
    {
      title: "Commercial Drywalling",
      description: "Professional drywalling for offices, retail spaces, and commercial properties",
      features: [
        "Fire-rated drywall options",
        "Soundproof wall systems",
        "Quick installation timelines",
        "Minimal business disruption",
      ],
      price: "From R140/m²",
    },
    {
      title: "Drywall Repair Services",
      description: "Expert repair services for damaged drywall, holes, cracks, and water damage",
      features: ["Hole and crack repair", "Water damage restoration", "Texture matching", "Seamless finishing"],
      price: "From R350/repair",
    },
    {
      title: "Ceiling Installation",
      description: "Professional ceiling installation including plasterboard and suspended ceiling systems",
      features: [
        "Plasterboard ceilings",
        "Suspended ceiling systems",
        "Acoustic ceiling options",
        "Recessed lighting integration",
      ],
      price: "From R150/m²",
    },
  ]

  const areas = [
    "Mondeor",
    "Kibler Park",
    "Bassonia",
    "Glenvista",
    "Mulbarton",
    "Meyersdal",
    "Winchester Hills",
    "Oakdene",
    "Naturena",
    "Booysens",
    "Southgate",
    "Ormonde",
  ]

  const faqs = [
    {
      question: "How much does drywall installation cost in Johannesburg South?",
      answer:
        "Drywall installation costs in Johannesburg South typically range from R120-R180 per square meter depending on project complexity, board type, and finishing requirements. Standard residential installations start at R120/m², while commercial projects with fire-rated or soundproof boards cost R140-R180/m². Additional costs may include framing (if needed), insulation, and special finishes. We provide detailed quotes after site assessment to ensure accurate pricing for your specific project. Most residential projects are completed within 1-2 weeks including all finishing work.",
    },
    {
      question: "What areas in Johannesburg South do you serve?",
      answer:
        "We provide professional drywall installation services throughout Johannesburg South including Mondeor, Kibler Park, Bassonia, Glenvista, Mulbarton, Meyersdal, Winchester Hills, Oakdene, Naturena, Booysens, Southgate, and Ormonde. Our team is familiar with properties throughout the area and understands local building requirements. We offer free consultations and site assessments for all Johannesburg South locations. Same-day quotes are available for most projects, and we can typically begin work within 3-5 business days of quote acceptance.",
    },
    {
      question: "Do you provide drywall services for commercial properties in Johannesburg South?",
      answer:
        "Yes, we specialize in commercial drywalling for Johannesburg South businesses including offices, retail spaces, warehouses, and industrial properties. Our commercial services include fire-rated drywall installations meeting SANS building codes, soundproof wall systems for offices and meeting rooms, and efficient installation schedules that minimize business disruption. We work after hours when necessary and coordinate with other contractors for seamless project execution. All commercial installations include proper documentation and compliance certificates required for building inspections.",
    },
    {
      question: "What's the difference between drywall and plasterboard?",
      answer:
        "Drywall and plasterboard are essentially the same product - sheets of gypsum plaster pressed between two thick sheets of paper. In South Africa, the term 'plasterboard' is more commonly used, while 'drywall' is the American term. Both refer to the same building material used for interior walls and ceilings. We use quality brands like Gyproc and Lafarge that meet South African building standards. Different types include standard boards for general use, moisture-resistant (green board) for wet areas, and fire-rated boards for commercial applications.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Drywall Installation Johannesburg South",
            description:
              "Professional drywall installation services in Johannesburg South including residential and commercial drywalling, plasterboard walls, and ceiling installation.",
            provider: {
              "@type": "LocalBusiness",
              name: "Granite Carpentry",
              telephone: "+27676014490",
              email: "info@granitecarpentry.co.za",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg South",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
            areaServed: {
              "@type": "City",
              name: "Johannesburg South",
            },
            serviceType: "Drywall Installation",
            offers: {
              "@type": "Offer",
              priceCurrency: "ZAR",
              price: "120",
              availability: "https://schema.org/InStock",
            },
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
                  <MapPin className="h-3 w-3 mr-1" />
                  Serving Johannesburg South
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Professional <span className="text-amber-400">Drywall Installation</span> Johannesburg South
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Expert drywall installation services for Johannesburg South residential and commercial properties.
                  From new construction to renovations, we deliver quality craftsmanship with professional finishing
                  throughout Mondeor, Kibler Park, Bassonia, and surrounding areas.
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
                  <Link href="tel:+27676014490">
                    <Phone className="mr-2 h-5 w-5" />
                    067 601 4490
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-amber-400 fill-current" />
                  <span>5.0 Rating • 47+ Projects</span>
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
                  src="/drywall-contractor.jpg"
                  alt="Professional Drywall Installation Johannesburg South"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Expert Drywall Installation Services in Johannesburg South
            </h2>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                Johannesburg South encompasses diverse residential and commercial areas including Mondeor, Kibler Park,
                Bassonia, Glenvista, and Mulbarton, each with unique property characteristics and building requirements.
                Our professional drywall installation services cater to this diversity, providing quality solutions for
                established homes, new developments, and commercial properties throughout the region. With extensive
                experience serving Johannesburg South properties, we understand local building codes, climate
                considerations, and the quality standards expected by homeowners and businesses in these
                well-established communities.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Residential Drywall Installation for Johannesburg South Homes
              </h3>
              <p>
                Residential drywall installation in Johannesburg South requires expertise in working with both older
                established homes and newer developments. We provide complete drywalling services for home renovations,
                room additions, basement conversions, and new construction. Our residential services include standard
                drywall for living areas and bedrooms, moisture-resistant boards for bathrooms and kitchens, and
                fire-rated drywall where required by building regulations. We specialize in matching existing textures
                and finishes in renovation projects, ensuring seamless integration with your home's existing interior.
                Every installation includes professional taping, multiple mud coats, thorough sanding, and priming to
                create perfect paint-ready surfaces.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Commercial Drywalling for Johannesburg South Businesses
              </h3>
              <p>
                Johannesburg South's commercial sector includes retail centers, office parks, and industrial facilities
                requiring professional drywalling services that meet strict building codes and business timelines. Our
                commercial drywalling services include fire-rated installations complying with SANS regulations,
                soundproof wall systems for offices and meeting rooms, and efficient installation schedules that
                minimize business disruption. We work with property developers, office fit-out contractors, and business
                owners to deliver quality installations on time and within budget. After-hours installation is available
                when necessary to avoid disrupting business operations during working hours.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Drywall Repair and Maintenance Services</h3>
              <p>
                Drywall damage from accidents, water leaks, or age-related deterioration requires professional repair to
                restore both appearance and structural integrity. Our repair services include hole and crack patching,
                water damage restoration, texture matching, and seamless finishing that blends with existing walls. We
                assess damage extent, remove affected materials when necessary, perform structural repairs, and complete
                finishing work that makes repairs virtually invisible. For older Johannesburg South homes, we can match
                various texture styles and finishes to ensure repairs blend perfectly with existing surfaces.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Quality Materials and Professional Installation
              </h3>
              <p>
                We use premium drywall materials from trusted suppliers including Gyproc and Lafarge that are
                specifically designed for South African conditions. Our installation process follows industry best
                practices including proper framing preparation, correct fastener spacing and placement, professional
                joint treatment with quality compounds, and thorough quality control at every stage. Every project
                includes comprehensive site cleanup and our 24-month warranty covering both materials and workmanship
                for complete peace of mind.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Serving All Johannesburg South Communities
              </h3>
              <p>
                We proudly serve all Johannesburg South communities including Mondeor, Kibler Park, Bassonia, Glenvista,
                Mulbarton, Meyersdal, Winchester Hills, Oakdene, Naturena, Booysens, Southgate, and Ormonde. Our team is
                familiar with properties throughout the area and understands the unique characteristics of each
                neighborhood. We provide free consultations and site assessments for all Johannesburg South locations,
                with same-day quotes available for most projects. Our local presence ensures quick response times and
                efficient project completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Our Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Comprehensive Drywall Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From residential installations to commercial projects, we provide complete drywalling services with
              premium materials and expert craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <Badge className="bg-amber-600 text-white">{service.price}</Badge>
                  </div>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                    <Link href="/contact">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Serving All Johannesburg South Communities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional drywall installation services throughout Johannesburg South
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-amber-600" />
                    <span className="font-medium text-slate-900">{area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600">
                Common questions about drywall installation in Johannesburg South
              </p>
            </div>

            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-slate-200 pb-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Drywall Services in Other Locations</h2>
            <p className="text-xl text-slate-600">Professional drywalling services throughout Johannesburg</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Drywall Sandton</h3>
                <p className="text-slate-600 mb-6">Premium drywall installation for Sandton properties</p>
                <Button asChild variant="outline">
                  <Link href="/drywall-sandton">View Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Drywall Midrand</h3>
                <p className="text-slate-600 mb-6">Expert drywalling services in Midrand area</p>
                <Button asChild variant="outline">
                  <Link href="/drywall-midrand">View Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Drywall Fourways</h3>
                <p className="text-slate-600 mb-6">Professional drywall installation in Fourways</p>
                <Button asChild variant="outline">
                  <Link href="/drywall-fourways">View Services</Link>
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
            <h2 className="text-3xl lg:text-4xl font-bold">Ready for Professional Drywall Installation?</h2>
            <p className="text-xl text-amber-100">
              Get a free consultation and detailed quote for your Johannesburg South drywall project. Contact us today
              for expert installation services.
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
                <Link href="tel:+27676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 067 601 4490
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-amber-100">
              <div className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Residential & Commercial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Expert Craftsmen</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="h-4 w-4" />
                <span>Quality Materials</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>24-Month Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
