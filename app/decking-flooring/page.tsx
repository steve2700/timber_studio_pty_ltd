import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Star, CheckCircle, ArrowRight, Shield, Award, Clock, Users, MapPin, Wrench, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Decking & Flooring Johannesburg 2026 | Professional Installation Services",
  description:
    "Professional decking & flooring installation in Johannesburg. Wooden decking, laminate flooring, vinyl flooring. 5-star service, 24-month warranty. Free quotes. Call 063 397 7498.",
  keywords:
    "decking installation Johannesburg, wooden decking Johannesburg, flooring installation Sandton, laminate flooring Johannesburg, vinyl flooring Randburg, outdoor decking Midrand, deck builders Johannesburg, flooring contractors Sandton, wooden floors Johannesburg, composite decking installation, deck construction Johannesburg, flooring services Randburg, outdoor living spaces Johannesburg, deck repair Johannesburg, flooring renovation Sandton",
  openGraph: {
    title: "Decking & Flooring Johannesburg 2026 | Professional Installation Services",
    description:
      "Professional decking & flooring installation in Johannesburg. 5-star service, 24-month warranty, free quotes available.",
    images: [{ url: "/decking-flooring.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.timberstudio.co.za/services/decking-flooring",
  },
}

export default function DeckingFlooringPage() {
  const services = [
    {
      title: "Wooden Decking",
      description: "Premium wooden decking for outdoor entertainment and relaxation spaces",
      features: [
        "Treated pine and hardwood options",
        "Weather-resistant finishes",
        "Custom designs and sizes",
        "Professional installation",
      ],
      price: "From R450/m²",
      image: "/decking-flooring.jpg",
    },
    {
      title: "Composite Decking",
      description: "Low-maintenance composite decking that looks like wood without the upkeep",
      features: ["Fade and stain resistant", "No annual maintenance", "Slip-resistant surface", "25-year warranty"],
      price: "From R650/m²",
      image: "/beautiful-decking.jpg",
    },
    {
      title: "Laminate Flooring",
      description: "High-quality laminate flooring for modern homes and offices",
      features: ["Water-resistant options", "Easy maintenance", "Wide range of styles", "Quick installation"],
      price: "From R180/m²",
      image: "/carpenter-installing-deck-joists-johannesburg.jpg",
    },
    {
      title: "Vinyl Flooring",
      description: "Durable vinyl flooring perfect for high-traffic areas and wet spaces",
      features: [
        "100% waterproof",
        "Comfortable underfoot",
        "Realistic wood and stone looks",
        "Commercial grade options",
      ],
      price: "From R120/m²",
      image: "/professional-carpenter-midrand.jpeg",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Site Assessment",
      description: "Comprehensive evaluation of your space, ground conditions, and design requirements.",
    },
    {
      step: "2",
      title: "Design & Planning",
      description: "Custom design creation with material selection and detailed project planning.",
    },
    {
      step: "3",
      title: "Preparation",
      description: "Site preparation, ground leveling, and foundation work for optimal results.",
    },
    {
      step: "4",
      title: "Installation",
      description: "Professional installation with quality control and thorough cleanup.",
    },
  ]

  const areas = [
    "Johannesburg South",
    "Sandton",
    "Randburg",
    "Kempton Park",
    "Midrand",
    "Fourways",
    "Boksburg",
    "Centurion",
    "Pretoria",
    "Alberton",
    "Edenvale",
    "Roodepoort",
  ]

  const faqs = [
    {
      question: "What type of decking is best for Johannesburg's climate?",
      answer:
        "For Johannesburg's climate with hot summers and mild winters, we recommend treated pine or hardwood decking with proper weather-resistant finishes. Composite decking is also excellent as it doesn't warp, crack, or fade in UV exposure. Treated pine costs R450-R650/m² while composite ranges R650-R950/m². Both options handle temperature fluctuations well. We apply UV-resistant stains and sealers to protect wooden decking from sun damage and ensure longevity in Johannesburg's conditions.",
    },
    {
      question: "How long does decking installation take in Sandton and Randburg?",
      answer:
        "Decking installation timeframes depend on size and complexity. Small residential decks (20-40m²) typically take 3-5 days, while larger entertainment areas (60-100m²) require 1-2 weeks. The process includes site preparation (1-2 days), foundation work (1-2 days), and decking installation (2-4 days). Weather conditions can affect outdoor work schedules. We provide accurate timelines during consultation and coordinate with your schedule for minimal disruption to your Sandton or Randburg property.",
    },
    {
      question: "Do you provide flooring installation for commercial properties in Johannesburg?",
      answer:
        "Yes, we provide comprehensive commercial flooring services throughout Johannesburg including offices, retail spaces, restaurants, and industrial facilities. Our commercial-grade vinyl, laminate, and specialized flooring options meet high-traffic requirements. We work after hours and weekends to minimize business disruption. Commercial projects include detailed planning, phased installation, and extended warranties. Our team handles large-scale projects with professional project management and quality assurance.",
    },
    {
      question: "What maintenance is required for wooden decking in Johannesburg?",
      answer:
        "Wooden decking in Johannesburg requires annual cleaning and re-staining every 2-3 years to maintain appearance and protection. We recommend pressure washing in spring, followed by UV-resistant stain application. Regular inspection for loose boards, protruding nails, and structural issues ensures safety. Composite decking requires only occasional cleaning with soap and water. We provide maintenance services including cleaning, re-staining, repairs, and board replacement to keep your deck looking perfect year-round.",
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
            name: "Decking & Flooring Installation Johannesburg",
            description:
              "Professional decking and flooring installation services in Johannesburg including wooden decking, composite decking, laminate and vinyl flooring.",
            provider: {
              "@type": "LocalBusiness",
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
            areaServed: ["Johannesburg", "Sandton", "Randburg", "Midrand", "Centurion"],
            serviceType: "Decking & Flooring Installation",
            offers: {
              "@type": "Offer",
              priceCurrency: "ZAR",
              priceRange: "R120-R950",
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
                  <Home className="h-3 w-3 mr-1" />
                  Decking & Flooring Specialists
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Professional <span className="text-amber-400">Decking & Flooring</span> Johannesburg
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Transform your indoor and outdoor spaces with premium decking and flooring solutions. From wooden
                  decks to luxury vinyl flooring, we deliver exceptional quality and professional installation
                  throughout Johannesburg.
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
                  src="/decking-flooring.jpg"
                  alt="Professional Decking & Flooring Installation Johannesburg"
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
                        <p className="text-sm text-slate-600">Wooden Decking - Sandton</p>
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

      {/* Expanded Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Professional Decking and Flooring Services in Johannesburg
            </h2>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                Decking and flooring installation in Johannesburg requires expertise in materials that can withstand our
                unique climate conditions while providing lasting beauty and functionality. Our professional
                installation services cater to homeowners throughout Johannesburg, Sandton, Randburg, and surrounding
                areas who want to enhance their indoor and outdoor living spaces. With over 47 successful projects, we
                understand the importance of quality materials, proper installation techniques, and attention to detail
                that ensures long-lasting results.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Wooden Decking Solutions for Johannesburg Homes
              </h3>
              <p>
                Wooden decking remains the most popular choice for Johannesburg homeowners seeking to create beautiful
                outdoor entertainment spaces. We specialize in treated pine and hardwood decking options that are
                specifically selected for their durability in South African conditions. Our decking installations
                include proper foundation preparation, structural support systems, and weather-resistant finishes that
                protect against UV damage, moisture, and temperature fluctuations common in the Johannesburg area.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Composite Decking: Low-Maintenance Luxury</h3>
              <p>
                Composite decking has gained popularity among Sandton and Randburg homeowners who want the beauty of
                wood without the maintenance requirements. Our composite decking options combine recycled wood fibers
                with polymer materials to create surfaces that resist fading, staining, and weathering. These products
                are ideal for busy families and commercial properties where minimal maintenance is essential while
                maintaining an attractive appearance year-round.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Indoor Flooring Solutions for Modern Living
              </h3>
              <p>
                Our indoor flooring services include laminate and vinyl flooring installation for residential and
                commercial properties throughout Johannesburg. Modern laminate flooring offers the appearance of
                hardwood, stone, or tile at a fraction of the cost, while luxury vinyl plank (LVP) and luxury vinyl tile
                (LVT) provide 100% waterproof solutions perfect for kitchens, bathrooms, and high-traffic areas.
                Professional installation ensures proper subfloor preparation, moisture barriers, and seamless
                transitions between rooms.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Quality Installation and Long-term Durability
              </h3>
              <p>
                Professional installation is crucial for the longevity and performance of both decking and flooring
                projects. Our certified installers follow manufacturer specifications and industry best practices to
                ensure proper expansion gaps, moisture management, and structural integrity. Every project includes
                comprehensive site preparation, quality materials from trusted suppliers, and thorough cleanup. Our
                24-month warranty covers both materials and workmanship, providing peace of mind for your investment.
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Decking & Flooring Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From outdoor wooden decking to indoor luxury flooring, we provide comprehensive installation services with
              premium materials and expert craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-600 text-white">{service.price}</Badge>
                  </div>
                </div>
                <CardHeader className="space-y-3">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Our Process</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Professional Installation Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From initial assessment to final installation, our systematic approach ensures exceptional results and
              complete customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
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
              <p className="text-xl text-slate-600">Common questions about decking and flooring in Johannesburg</p>
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

      {/* Areas Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Service Areas</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Decking & Flooring Throughout Johannesburg
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional decking and flooring installation services throughout Greater Johannesburg and surrounding
              areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {areas.map((area, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:border-amber-200"
              >
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

      {/* Related Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Related Services</h2>
            <p className="text-xl text-slate-600">Complete your renovation with our additional services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Kitchen Renovations</h3>
                <p className="text-slate-600 mb-6">
                  Complete kitchen renovations with custom cabinets and premium finishes.
                </p>
                <Button asChild variant="outline">
                  <Link href="/services/kitchen-renovations">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Built-in Cupboards</h3>
                <p className="text-slate-600 mb-6">
                  Custom built-in storage solutions to complement your flooring renovation.
                </p>
                <Button asChild variant="outline">
                  <Link href="/services/built-in-cupboards">View Options</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Drywall & Ceilings</h3>
                <p className="text-slate-600 mb-6">
                  Professional drywall and ceiling installation for complete renovations.
                </p>
                <Button asChild variant="outline">
                  <Link href="/services/drywall-ceilings">Explore Services</Link>
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
            <h2 className="text-3xl lg:text-4xl font-bold">Ready for Professional Decking & Flooring?</h2>
            <p className="text-xl text-amber-100">
              Transform your indoor and outdoor spaces with premium decking and flooring solutions. Get a free
              consultation and detailed quote from Johannesburg's most trusted installation specialists.
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

            <div className="flex flex-wrap justify-center gap-8 text-sm text-amber-100">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Expert Installation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="h-4 w-4" />
                <span>Premium Materials</span>
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
