import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Star, CheckCircle, ArrowRight, Shield, Award, Clock, Users, MapPin, Wrench, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Drywall Installation Midrand 2025 | Professional Drywalling Services",
  description:
    "Expert drywall installation in Midrand. Residential & commercial drywalling, plasterboard walls, ceiling installation. 5-star service, 24-month warranty. Free quotes. Call 067 601 4490.",
  keywords:
    "drywall installation Midrand, drywalling contractors Midrand, plasterboard installation Midrand, drywall repair Midrand, ceiling installation Midrand, residential drywall Midrand, commercial drywalling Midrand, drywall finishing Midrand, plasterboard walls Midrand, drywall services Midrand, professional drywalling Midrand, drywall contractors near me",
  openGraph: {
    title: "Drywall Installation Midrand 2025 | Professional Drywalling Services",
    description:
      "Expert drywall installation in Midrand. Residential & commercial services with 5-star rating and 24-month warranty.",
    images: [{ url: "/drywall-contractor.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/drywall-midrand",
  },
}

export default function DrywallMidrandPage() {
  const services = [
    {
      title: "Residential Drywall Installation",
      description: "Complete drywall solutions for Midrand homes including new construction and renovations",
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
      description: "Professional drywalling for Midrand offices, retail spaces, and commercial properties",
      features: [
        "Fire-rated drywall options",
        "Soundproof wall systems",
        "Quick installation timelines",
        "Minimal business disruption",
      ],
      price: "From R140/m²",
    },
    {
      title: "Drywall Repair & Patching",
      description: "Expert repair services for damaged drywall, holes, cracks, and water damage",
      features: ["Hole and crack repair", "Water damage restoration", "Texture matching", "Seamless finishing"],
      price: "From R350/repair",
    },
    {
      title: "Ceiling Installation",
      description: "Professional ceiling installation including standard and suspended ceiling systems",
      features: [
        "Plasterboard ceilings",
        "Suspended ceiling systems",
        "Acoustic ceiling options",
        "Recessed lighting integration",
      ],
      price: "From R150/m²",
    },
  ]

  const whyChoose = [
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "Midrand Specialists",
      description: "Extensive experience with Midrand properties and local building requirements",
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Skilled Craftsmen",
      description: "Professional installers with years of drywalling experience",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Quality Guaranteed",
      description: "24-month warranty on all workmanship and materials",
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-600" />,
      title: "On-Time Completion",
      description: "Projects completed on schedule with minimal disruption",
    },
  ]

  const faqs = [
    {
      question: "How much does drywall installation cost in Midrand?",
      answer:
        "Drywall installation costs in Midrand typically range from R120-R180 per square meter depending on project complexity, board type, and finishing requirements. Standard residential installations start at R120/m², while commercial projects with fire-rated or soundproof boards cost R140-R180/m². Additional costs may include framing (if needed), insulation, and special finishes. We provide detailed quotes after site assessment to ensure accurate pricing for your specific project requirements.",
    },
    {
      question: "What's the difference between standard and moisture-resistant drywall?",
      answer:
        "Standard drywall (white/grey board) is suitable for most interior applications in living rooms, bedrooms, and offices. Moisture-resistant drywall (green board) is specifically designed for high-humidity areas like bathrooms, kitchens, and laundry rooms. It contains additives that resist mold and moisture damage. For Midrand homes, we recommend moisture-resistant boards in all wet areas to prevent future issues. Purple board offers even better mold resistance for extreme moisture conditions.",
    },
    {
      question: "How long does drywall installation take for a typical Midrand home?",
      answer:
        "Installation timelines depend on project size and scope. A single room typically takes 2-3 days including hanging, taping, mudding, and finishing. Whole-house installations for average Midrand homes (3-4 bedrooms) require 1-2 weeks. The process includes: Day 1-2 hanging boards, Day 3-4 first mud coat and taping, Day 5-6 second coat, Day 7-8 final coat and sanding. Each mud coat requires 24-hour drying time. We provide realistic timelines during consultation and coordinate with other trades for efficient project completion.",
    },
    {
      question: "Do you provide drywall services for Midrand commercial properties?",
      answer:
        "Yes, we specialize in commercial drywalling for Midrand offices, retail spaces, warehouses, and industrial properties. Our commercial services include fire-rated drywall installations meeting SANS building codes, soundproof wall systems for offices and meeting rooms, and quick installation schedules to minimize business disruption. We work after hours when necessary and coordinate with other contractors for seamless project execution. All commercial installations include proper documentation and compliance certificates.",
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
            name: "Drywall Installation Midrand",
            description:
              "Professional drywall installation services in Midrand including residential and commercial drywalling, plasterboard walls, and ceiling installation.",
            provider: {
              "@type": "LocalBusiness",
              name: "Granite Carpentry",
              telephone: "+27676014490",
              email: "info@granitecarpentry.co.za",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Midrand",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
            areaServed: {
              "@type": "City",
              name: "Midrand",
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
                  Serving Midrand
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Professional <span className="text-amber-400">Drywall Installation</span> in Midrand
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Expert drywall installation services for Midrand residential and commercial properties. From new
                  construction to renovations, we deliver quality craftsmanship with professional finishing and
                  long-lasting results.
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
                  alt="Professional Drywall Installation Midrand"
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
              Expert Drywall Installation Services in Midrand
            </h2>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                Midrand's strategic location between Johannesburg and Pretoria has driven significant residential and
                commercial development, creating strong demand for professional drywall installation services. Our team
                specializes in both residential and commercial drywalling projects throughout Midrand, from new
                construction in estates like Waterfall and Carlswald to renovations in established neighborhoods. With
                extensive experience in Midrand properties, we understand local building requirements, climate
                considerations, and the quality standards expected by homeowners and businesses in this growing area.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Residential Drywall Installation for Midrand Homes
              </h3>
              <p>
                Residential drywall installation in Midrand requires attention to detail and expertise in creating
                smooth, durable wall surfaces that enhance your home's interior. We provide complete drywalling services
                for new home construction, home additions, basement finishing, and interior renovations. Our residential
                services include standard drywall for living areas and bedrooms, moisture-resistant boards for bathrooms
                and kitchens, and fire-rated drywall where required by building codes. Every installation includes
                professional taping, multiple mud coats, thorough sanding, and priming to create paint-ready surfaces
                that meet the highest quality standards.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Commercial Drywalling for Midrand Businesses
              </h3>
              <p>
                Midrand's commercial sector, including office parks in Waterfall City and industrial areas, requires
                professional drywalling services that meet strict building codes and business timelines. Our commercial
                drywalling services include fire-rated installations complying with SANS regulations, soundproof wall
                systems for offices and meeting rooms, and efficient installation schedules that minimize business
                disruption. We work with property developers, office fit-out contractors, and business owners to deliver
                quality installations on time and within budget. After-hours installation is available when necessary to
                avoid disrupting business operations.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Drywall Repair and Restoration Services</h3>
              <p>
                Drywall damage from accidents, water leaks, or structural settling requires professional repair to
                restore both appearance and structural integrity. Our repair services include hole and crack patching,
                water damage restoration, texture matching, and seamless finishing that blends with existing walls. We
                assess damage extent, remove affected materials when necessary, perform structural repairs, and complete
                finishing work that makes repairs virtually invisible. Emergency services are available for severe
                damage situations requiring immediate attention.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Quality Materials and Professional Installation
              </h3>
              <p>
                We use premium drywall materials from trusted suppliers including Gyproc and Lafarge that perform well
                in South African conditions. Our installation process follows industry best practices including proper
                framing preparation, correct fastener spacing and placement, professional joint treatment with quality
                compounds, and thorough quality control at every stage. Every project includes comprehensive site
                cleanup and our 24-month warranty covering both materials and workmanship for complete peace of mind.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Why Choose Our Midrand Drywall Services</h3>
              <p>
                Our extensive experience with Midrand properties gives us unique insight into local building
                requirements and homeowner expectations. We understand the quality standards expected in Midrand's
                upscale residential estates and commercial developments. Our team includes skilled craftsmen with years
                of drywalling experience, and we maintain strong relationships with local suppliers ensuring material
                availability and competitive pricing. We provide transparent quotes, realistic timelines, and
                professional communication throughout your project. Our 5-star rating and growing portfolio of completed
                Midrand projects demonstrate our commitment to excellence.
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Why Choose Our Midrand Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Local expertise combined with professional craftsmanship for exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
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
              <p className="text-xl text-slate-600">Common questions about drywall installation in Midrand</p>
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
                <h3 className="text-xl font-bold text-slate-800 mb-4">Drywall Fourways</h3>
                <p className="text-slate-600 mb-6">Expert drywalling services in Fourways area</p>
                <Button asChild variant="outline">
                  <Link href="/drywall-fourways">View Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Ceiling Repairs Randburg</h3>
                <p className="text-slate-600 mb-6">Professional ceiling repair services in Randburg</p>
                <Button asChild variant="outline">
                  <Link href="/ceiling-repairs-randburg">View Services</Link>
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
              Get a free consultation and detailed quote for your Midrand drywall project. Contact us today for expert
              installation services.
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
