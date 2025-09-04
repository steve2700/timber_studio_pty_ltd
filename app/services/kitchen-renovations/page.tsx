import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Shield, Award, Phone } from "lucide-react"
import { FAQAccordion } from "@/components/faq-accordion"

export const metadata: Metadata = {
  title: "Kitchen Renovations Johannesburg | Expert Kitchen Remodeling Services",
  description:
    "Transform your kitchen with our expert renovation services in Johannesburg, Sandton, Randburg & Midrand. Custom designs, quality materials, professional installation.",
  keywords:
    "kitchen renovations johannesburg, kitchen remodeling sandton, kitchen renovation randburg, kitchen design midrand, custom kitchens gauteng",
  openGraph: {
    title: "Kitchen Renovations Johannesburg | Expert Kitchen Remodeling Services",
    description:
      "Transform your kitchen with our expert renovation services in Johannesburg, Sandton, Randburg & Midrand. Custom designs, quality materials, professional installation.",
    images: ["/Kitchen-renovations-sandton.webp"],
  },
}

const kitchenFAQs = [
  {
    question: "How long does a typical kitchen renovation take in Johannesburg?",
    answer:
      "A complete kitchen renovation typically takes 3-6 weeks depending on the scope of work. Simple updates like cabinet refacing and countertop replacement can be completed in 1-2 weeks, while full renovations with plumbing and electrical work may take 6-8 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process.",
  },
  {
    question: "What's included in your kitchen renovation services?",
    answer:
      "Our comprehensive kitchen renovation services include design consultation, custom cabinetry, countertop installation (granite, quartz, marble), plumbing and electrical work, flooring installation, painting, lighting installation, and project management. We handle everything from initial design to final cleanup, ensuring a seamless renovation experience.",
  },
  {
    question: "Do you provide kitchen design services in Sandton and Randburg?",
    answer:
      "Yes, we provide complete kitchen design services throughout Johannesburg, including Sandton, Randburg, Midrand, and surrounding areas. Our experienced designers work with you to create functional, beautiful kitchens that match your lifestyle and budget. We use 3D modeling to help you visualize your new kitchen before construction begins.",
  },
  {
    question: "What types of kitchen countertops do you install?",
    answer:
      "We specialize in premium countertop materials including granite, quartz, marble, and engineered stone. Each material offers unique benefits - granite provides natural beauty and durability, quartz offers low maintenance and consistency, while marble adds luxury and elegance. We help you choose the best option based on your cooking habits, maintenance preferences, and budget.",
  },
]

export default function KitchenRenovationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Kitchen Renovation Specialists</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Transform Your Kitchen with Expert Renovations in Johannesburg
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Create the kitchen of your dreams with our comprehensive renovation services. From custom cabinetry to
                premium countertops, we deliver exceptional results throughout Johannesburg, Sandton, Randburg, and
                Midrand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-600" />
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Kitchen-renovations-sandton.webp"
                alt="Modern kitchen renovation in Sandton showing custom cabinetry and granite countertops"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                </div>
                <p className="text-sm font-semibold">500+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Kitchen Renovation Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial design to final installation, we handle every aspect of your kitchen renovation with
              precision and care. Our experienced team delivers exceptional results that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  Custom Kitchen Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Personalized kitchen designs that maximize space, functionality, and style. Our designers work closely
                  with you to create the perfect layout for your lifestyle.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  Premium Cabinetry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Custom-built cabinets using high-quality materials and hardware. Choose from various styles, finishes,
                  and storage solutions to suit your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  Countertop Installation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional installation of granite, quartz, and marble countertops. Precision cutting and seamless
                  installation for a flawless finish.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  Plumbing & Electrical
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete plumbing and electrical services for your kitchen renovation. Licensed professionals ensure
                  all work meets safety standards and building codes.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  Flooring Installation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional installation of tiles, hardwood, laminate, and luxury vinyl flooring. Durable, beautiful
                  floors that complement your kitchen design.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  Project Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive project management from start to finish. We coordinate all trades, manage timelines, and
                  ensure quality at every stage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Kitchen Renovation Process</h2>
            <p className="text-lg text-gray-600">
              A streamlined approach that ensures your kitchen renovation is completed on time, within budget, and to
              the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation & Design</h3>
              <p className="text-gray-600">
                Initial consultation to understand your needs, preferences, and budget. Our designers create detailed
                plans and 3D renderings.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Planning & Permits</h3>
              <p className="text-gray-600">
                Detailed project planning, material selection, and obtaining necessary permits. We handle all the
                paperwork and approvals.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Construction</h3>
              <p className="text-gray-600">
                Professional construction and installation by our experienced team. Regular updates and quality checks
                throughout the process.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Final Inspection</h3>
              <p className="text-gray-600">
                Thorough final inspection, cleanup, and walkthrough. We ensure everything meets our high standards
                before completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Kitchen Renovations</h2>
            <p className="text-lg text-gray-600">
              See some of our recent kitchen renovation projects in Johannesburg and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/modern-kitchen renovation.webp"
                alt="Modern kitchen renovation with white cabinets and granite countertops"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Modern Kitchen - Sandton</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/kitchen-renovation-granite-installation-johannesburg.jpg"
                alt="Kitchen renovation with granite installation in Johannesburg"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Granite Kitchen - Johannesburg</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/carpenter-johannesburg-installing-kitchen-cupboards.jpg"
                alt="Professional carpenter installing kitchen cupboards in Johannesburg"
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our kitchen renovation services.
            </p>
          </div>
          <FAQAccordion faqs={kitchenFAQs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Kitchen?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and quote. Let's create the kitchen of your dreams together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              Call (011) 234-5678
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Kitchen Renovations Johannesburg",
            description:
              "Expert kitchen renovation services in Johannesburg, Sandton, Randburg, and Midrand. Custom designs, quality materials, professional installation.",
            provider: {
              "@type": "Organization",
              name: "Granite Carpentry & Joinery Experts",
              url: "https://granitejoineryexperts.co.za",
            },
            areaServed: ["Johannesburg", "Sandton", "Randburg", "Midrand", "Gauteng"],
            serviceType: "Kitchen Renovation",
          }),
        }}
      />
    </div>
  )
}
