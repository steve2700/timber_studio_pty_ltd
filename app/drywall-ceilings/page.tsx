import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Star,
  CheckCircle,
  ArrowRight,
  Shield,
  Award,
  Clock,
  Users,
  MapPin,
  Wrench,
  Building,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Drywall & Ceilings Johannesburg 2025 | Professional Installation Services",
  description:
    "Professional drywall & ceiling installation in Johannesburg. Suspended ceilings, plasterboard walls, ceiling repairs. 5-star service, 24-month warranty. Free quotes. Call 067 601 4490.",
  keywords:
    "drywall installation Johannesburg, ceiling installation Johannesburg, suspended ceilings Sandton, plasterboard installation Randburg, ceiling contractors Johannesburg, drywall contractors Midrand, ceiling repairs Johannesburg, office ceilings Sandton, residential drywall Johannesburg, commercial ceilings Randburg, ceiling tiles installation, acoustic ceilings Johannesburg, false ceilings installation, ceiling renovation Johannesburg, drywall finishing Sandton",
  openGraph: {
    title: "Drywall & Ceilings Johannesburg 2025 | Professional Installation Services",
    description:
      "Professional drywall & ceiling installation in Johannesburg. 5-star service, 24-month warranty, free quotes available.",
    images: [{ url: "/drywall-contractor.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/services/drywall-ceilings",
  },
}

export default function DrywallCeilingsPage() {
  const services = [
    {
      title: "Suspended Ceilings",
      description: "Professional suspended ceiling systems for offices and commercial spaces",
      features: ["Acoustic ceiling tiles", "Easy access to utilities", "Fire-rated options", "Modern grid systems"],
      price: "From R180/m²",
      image: "/drywall-contractor.jpg",
    },
    {
      title: "Plasterboard Walls",
      description: "High-quality plasterboard wall installation for residential and commercial properties",
      features: [
        "Moisture-resistant boards",
        "Sound insulation options",
        "Smooth finish ready for paint",
        "Quick installation",
      ],
      price: "From R120/m²",
      image: "/drywalling-installers.webp",
    },
    {
      title: "Ceiling Repairs",
      description: "Professional ceiling repair services for water damage, cracks, and structural issues",
      features: ["Water damage restoration", "Crack repair and patching", "Texture matching", "Paint-ready finish"],
      price: "From R350/repair",
      image: "/drywall-contractor.jpg",
    },
    {
      title: "Acoustic Ceilings",
      description: "Specialized acoustic ceiling solutions for noise control and sound management",
      features: ["Sound absorption", "Noise reduction", "Professional installation", "Various design options"],
      price: "From R220/m²",
      image: "/drywalling-installers.webp",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Site Assessment",
      description: "Comprehensive evaluation of your space, structural requirements, and project specifications.",
    },
    {
      step: "2",
      title: "Planning & Design",
      description: "Detailed planning with material selection and installation methodology for optimal results.",
    },
    {
      step: "3",
      title: "Preparation",
      description: "Site preparation, protection of existing surfaces, and setup of installation equipment.",
    },
    {
      step: "4",
      title: "Installation",
      description: "Professional installation with quality control, finishing, and thorough cleanup.",
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
      question: "What are the benefits of suspended ceilings in Johannesburg offices?",
      answer:
        "Suspended ceilings offer numerous benefits for Johannesburg commercial properties including easy access to utilities (electrical, HVAC, plumbing), improved acoustics, energy efficiency, and professional appearance. They're ideal for offices in Sandton and Randburg as they allow for recessed lighting, air conditioning integration, and future modifications without major construction. Costs range R180-R350/m² depending on tile quality and grid system. Fire-rated options meet building code requirements for commercial properties.",
    },
    {
      question: "How long does drywall installation take for homes in Sandton and Randburg?",
      answer:
        "Drywall installation timeframes depend on project size and complexity. Single room installations typically take 2-3 days, while whole-house projects require 1-2 weeks. The process includes framing preparation (if needed), drywall hanging, taping and mudding (2-3 coats), sanding, and priming. Each mud coat requires 24-hour drying time. We coordinate with other trades and provide realistic timelines during consultation. Weather and humidity can affect drying times in Johannesburg's climate.",
    },
    {
      question: "Do you provide ceiling repair services for water damage in Johannesburg?",
      answer:
        "Yes, we specialize in ceiling repair services throughout Johannesburg including water damage restoration, crack repairs, and structural fixes. Our process includes damage assessment, moisture testing, affected material removal, structural repairs, and complete refinishing. We work with insurance companies and provide detailed documentation. Emergency services are available for severe damage. Repairs typically cost R350-R800 depending on extent of damage and may include mold remediation if necessary.",
    },
    {
      question: "What drywall materials are best for Johannesburg's climate?",
      answer:
        "For Johannesburg's climate with seasonal humidity changes, we recommend moisture-resistant drywall for bathrooms and kitchens, standard drywall for living areas, and fire-rated boards where required by building codes. Green board (moisture-resistant) is essential in wet areas, while purple board offers superior mold resistance. We use quality brands like Gyproc and Lafarge that perform well in South African conditions. Proper installation with appropriate joint compound and primer ensures long-lasting results.",
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
            name: "Drywall & Ceiling Installation Johannesburg",
            description:
              "Professional drywall and ceiling installation services in Johannesburg including suspended ceilings, plasterboard walls, and ceiling repairs.",
            provider: {
              "@type": "LocalBusiness",
              name: "Granite Carpentry",
              telephone: "+27676014490",
              email: "info@granitecarpentry.co.za",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
            areaServed: ["Johannesburg", "Sandton", "Randburg", "Midrand", "Centurion"],
            serviceType: "Drywall & Ceiling Installation",
            offers: {
              "@type": "Offer",
              priceCurrency: "ZAR",
              priceRange: "R120-R350",
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
                  <Building className="h-3 w-3 mr-1" />
                  Drywall & Ceiling Specialists
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Professional <span className="text-amber-400">Drywall & Ceilings</span> Johannesburg
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Expert drywall and ceiling installation services for residential and commercial properties. From
                  suspended ceilings to plasterboard walls, we deliver quality craftsmanship and professional results
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
                  alt="Professional Drywall & Ceiling Installation Johannesburg"
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
                        <p className="text-sm text-slate-600">Office Ceilings - Sandton</p>
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
              Expert Drywall and Ceiling Installation in Johannesburg
            </h2>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                Drywall and ceiling installation in Johannesburg requires specialized knowledge of local building codes,
                climate considerations, and quality materials that perform well in South African conditions. Our
                professional installation services cater to both residential and commercial clients throughout
                Johannesburg, Sandton, Randburg, and surrounding areas. With over 47 successful projects, we understand
                the importance of proper installation techniques, quality materials, and attention to detail that
                ensures long-lasting, professional results.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Suspended Ceiling Systems for Commercial Properties
              </h3>
              <p>
                Suspended ceilings are the preferred choice for commercial properties in Sandton and Randburg business
                districts due to their functionality, accessibility, and professional appearance. Our suspended ceiling
                installations include acoustic tiles for noise control, easy access panels for utilities, and fire-rated
                options that meet South African building regulations. These systems are ideal for offices, retail
                spaces, and medical facilities where access to electrical, HVAC, and plumbing systems is essential for
                maintenance and future modifications.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Residential Drywall Installation and Finishing
              </h3>
              <p>
                Residential drywall installation requires precision and expertise to achieve smooth, paint-ready
                surfaces that enhance your home's interior. We specialize in standard drywall for living areas,
                moisture-resistant boards for bathrooms and kitchens, and fire-rated drywall where required by building
                codes. Our finishing process includes professional taping, multiple mud coats, sanding, and priming to
                ensure perfect surfaces ready for your chosen paint or wallpaper finish.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Ceiling Repair and Restoration Services</h3>
              <p>
                Ceiling damage from water leaks, structural settling, or age-related issues requires professional repair
                to restore both function and appearance. Our ceiling repair services include water damage assessment,
                structural repairs, texture matching, and complete refinishing. We work with insurance companies when
                applicable and provide detailed documentation of repairs. Emergency services are available for severe
                damage situations that require immediate attention to prevent further property damage.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Quality Materials and Professional Installation
              </h3>
              <p>
                We use premium drywall materials from trusted suppliers including Gyproc and Lafarge that are
                specifically designed for South African conditions. Our installation process follows industry best
                practices including proper framing preparation, correct fastener spacing, professional joint treatment,
                and thorough quality control. Every project includes comprehensive cleanup and our 24-month warranty
                covering both materials and workmanship for complete peace of mind.
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Drywall & Ceiling Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From commercial suspended ceilings to residential drywall installation, we provide comprehensive services
              with premium materials and expert craftsmanship.
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
              <p className="text-xl text-slate-600">
                Common questions about drywall and ceiling installation in Johannesburg
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

      {/* Areas Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Service Areas</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Drywall & Ceiling Services Throughout Johannesburg
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional drywall and ceiling installation services throughout Greater Johannesburg and surrounding
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Drywall Services by Location</h2>
            <p className="text-xl text-slate-600">
              Professional drywall and ceiling services available in key Johannesburg areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Drywall Sandton</h3>
                <p className="text-slate-600 mb-6">
                  Premium drywall installation services for Sandton's residential and commercial properties.
                </p>
                <Button asChild variant="outline">
                  <Link href="/drywall-sandton">View Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Ceiling Repairs Randburg</h3>
                <p className="text-slate-600 mb-6">
                  Expert ceiling repair and restoration services throughout Randburg area.
                </p>
                <Button asChild variant="outline">
                  <Link href="/ceiling-repairs-randburg">View Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Drywall Rosebank</h3>
                <p className="text-slate-600 mb-6">
                  Professional drywall solutions for Rosebank's modern homes and offices.
                </p>
                <Button asChild variant="outline">
                  <Link href="/drywall-rosebank">View Services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Suspended Ceilings Johannesburg</h3>
                <p className="text-slate-600 mb-6">
                  Commercial suspended ceiling systems for Johannesburg businesses and offices.
                </p>
                <Button asChild variant="outline">
                  <Link href="/suspended-ceilings-johannesburg">View Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Drywalling Contractors Johannesburg</h3>
                <p className="text-slate-600 mb-6">
                  Licensed drywalling contractors serving all of Johannesburg and surrounding areas.
                </p>
                <Button asChild variant="outline">
                  <Link href="/drywalling-contractors-johannesburg">View Services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Drywall Fourways</h3>
                <p className="text-slate-600 mb-6">
                  Expert drywall installation for Fourways residential and commercial properties.
                </p>
                <Button asChild variant="outline">
                  <Link href="/drywall-fourways">View Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Ceiling Repairs Sandton</h3>
                <p className="text-slate-600 mb-6">
                  Professional ceiling repair services for Sandton homes and offices.
                </p>
                <Button asChild variant="outline">
                  <Link href="/ceiling-repairs-sandton">View Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Drywall Midrand</h3>
                <p className="text-slate-600 mb-6">Quality drywall installation services throughout Midrand area.</p>
                <Button asChild variant="outline">
                  <Link href="/drywall-midrand">View Services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Ceiling Repairs Vereeniging</h3>
                <p className="text-slate-600 mb-6">Emergency ceiling repair services available 24/7 in Vereeniging.</p>
                <Button asChild variant="outline">
                  <Link href="/ceiling-repairs-vereeniging">View Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Drywall Johannesburg South</h3>
                <p className="text-slate-600 mb-6">Professional drywalling for all Johannesburg South communities.</p>
                <Button asChild variant="outline">
                  <Link href="/drywall-johannesburg-south">View Services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Other Services Section */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Other Services</h3>
              <p className="text-lg text-slate-600">Complete your renovation with our additional services</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Kitchen Renovations</h3>
                  <p className="text-slate-600 mb-6">
                    Complete kitchen renovations with custom cabinets and professional finishes.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/kitchen-renovations">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Built-in Cupboards</h3>
                  <p className="text-slate-600 mb-6">
                    Custom built-in storage solutions to complement your interior renovations.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/built-in-cupboards">View Options</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Decking & Flooring</h3>
                  <p className="text-slate-600 mb-6">
                    Professional flooring installation to complete your renovation project.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/decking-flooring">Explore Services</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready for Professional Drywall & Ceilings?</h2>
            <p className="text-xl text-amber-100">
              Transform your space with professional drywall and ceiling installation. Get a free consultation and
              detailed quote from Johannesburg's most trusted installation specialists.
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
