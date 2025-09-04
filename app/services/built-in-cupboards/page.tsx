import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Shield, Award, Phone } from "lucide-react"
import { FAQAccordion } from "@/components/faq-accordion"

export const metadata: Metadata = {
  title: "Built-in Cupboards Johannesburg | Custom Wardrobes & Storage Solutions",
  description:
    "Expert built-in cupboard installation in Johannesburg, Sandton, Randburg & Midrand. Custom wardrobes, bedroom cupboards, and storage solutions. Quality guaranteed.",
  keywords:
    "built-in cupboards johannesburg, custom wardrobes sandton, bedroom cupboards randburg, built-in storage midrand, fitted wardrobes gauteng",
  openGraph: {
    title: "Built-in Cupboards Johannesburg | Custom Wardrobes & Storage Solutions",
    description:
      "Expert built-in cupboard installation in Johannesburg, Sandton, Randburg & Midrand. Custom wardrobes, bedroom cupboards, and storage solutions. Quality guaranteed.",
    images: ["/Custom-Bedroom-Built-In-Cupboards-and-Wardrobes-JHB.png"],
  },
}

const cupboardFAQs = [
  {
    question: "What types of built-in cupboards do you install in Johannesburg?",
    answer:
      "We specialize in all types of built-in storage solutions including bedroom wardrobes, walk-in closets, study cupboards, linen cupboards, entertainment units, and custom storage solutions. Our designs are tailored to maximize space utilization while complementing your home's aesthetic. We work with various materials including melamine, wood veneer, and solid wood finishes.",
  },
  {
    question: "How long does it take to install built-in cupboards?",
    answer:
      "Installation time varies depending on the size and complexity of the project. Simple bedroom wardrobes typically take 2-3 days, while larger walk-in closets or multiple room installations may take 1-2 weeks. We provide accurate timelines during our initial consultation and work efficiently to minimize disruption to your daily routine.",
  },
  {
    question: "Do you provide design services for custom wardrobes in Sandton?",
    answer:
      "Yes, we offer comprehensive design services throughout Johannesburg, including Sandton, Randburg, and Midrand. Our experienced designers visit your home to assess the space, understand your storage needs, and create custom solutions that maximize functionality. We provide detailed drawings and 3D visualizations to help you see the final result before installation begins.",
  },
  {
    question: "What materials and finishes are available for built-in cupboards?",
    answer:
      "We offer a wide range of materials and finishes including melamine in various colors and wood grains, natural wood veneers, painted MDF, and solid wood options. Hardware choices include soft-close hinges, drawer slides, handles, and internal accessories like shoe racks, tie holders, and jewelry drawers. We help you select the best combination based on your budget, style preferences, and functional requirements.",
  },
]

export default function BuiltInCupboardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Custom Storage Solutions</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Built-in Cupboards & Custom Wardrobes in Johannesburg
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Maximize your space with our expertly crafted built-in cupboards and wardrobes. Custom designs, quality
                materials, and professional installation throughout Johannesburg, Sandton, Randburg, and Midrand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Measure
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/portfolio">View Our Designs</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Custom Designs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>Quality Materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-600" />
                  <span>Expert Installation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Custom-Bedroom-Built-In-Cupboards-and-Wardrobes-JHB.png"
                alt="Custom bedroom built-in cupboards and wardrobes in Johannesburg"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                </div>
                <p className="text-sm font-semibold">Premium Quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Custom Built-in Storage Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From bedroom wardrobes to walk-in closets, we create custom storage solutions that maximize space and
              enhance your home's functionality and value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Bedroom Wardrobes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Custom bedroom wardrobes designed to fit your space perfectly. Multiple compartments, hanging space,
                  and drawers for optimal organization.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Walk-in Closets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Luxurious walk-in closets with custom shelving, hanging rails, and specialized storage for shoes,
                  accessories, and clothing.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Study Cupboards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Built-in study and office storage solutions with desks, bookshelves, and filing systems for a
                  productive workspace.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Entertainment Units
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Custom entertainment centers with TV mounting, media storage, and cable management for a clean,
                  organized living space.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Linen Cupboards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Efficient linen and bathroom storage with adjustable shelving and specialized compartments for towels,
                  bedding, and toiletries.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Custom Storage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bespoke storage solutions for unique spaces and requirements. Under-stair storage, alcove cupboards,
                  and specialized units.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Materials & Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Materials & Features</h2>
            <p className="text-lg text-gray-600">
              We use only the finest materials and hardware to ensure your built-in cupboards are both beautiful and
              built to last.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/Built-Built-in-Cupboards-Midrand.jpg"
                alt="High-quality built-in cupboards installation in Midrand"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Premium Melamine Finishes</h3>
                  <p className="text-gray-600">
                    Durable melamine boards in various colors and wood grain patterns. Scratch-resistant, easy to clean,
                    and available in modern and classic styles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Soft-Close Hardware</h3>
                  <p className="text-gray-600">
                    Premium Blum and Hettich hardware with soft-close hinges and drawer slides. Quiet operation and
                    extended lifespan for daily use.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Custom Internal Fittings</h3>
                  <p className="text-gray-600">
                    Specialized internal accessories including shoe racks, tie holders, jewelry drawers, and adjustable
                    shelving systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">LED Lighting Options</h3>
                  <p className="text-gray-600">
                    Integrated LED lighting systems with motion sensors and dimming controls. Energy-efficient
                    illumination for better visibility and ambiance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
            <p className="text-lg text-gray-600">
              From initial consultation to final installation, we ensure a smooth and professional experience every step
              of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
              <p className="text-gray-600">
                Home visit to assess your space, discuss requirements, and provide design recommendations tailored to
                your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Design & Quote</h3>
              <p className="text-gray-600">
                Detailed design drawings, material selection, and comprehensive quote with no hidden costs or surprises.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
              <p className="text-gray-600">
                Precision manufacturing in our workshop using advanced machinery and quality control processes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
              <p className="text-gray-600">
                Expert installation by our skilled craftsmen with minimal disruption to your home and complete cleanup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Built-in Cupboard Projects</h2>
            <p className="text-lg text-gray-600">
              Browse our portfolio of custom built-in cupboards and wardrobes installed throughout Johannesburg and
              surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/built-in-wardrobes-sliding (1) (1).webp"
                alt="Built-in wardrobes with sliding doors"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Sliding Wardrobes - Sandton</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/built-in-study-1 (1).webp"
                alt="Built-in study cupboards and desk"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Study Unit - Randburg</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/entertainment unit.jpg"
                alt="Custom entertainment unit with storage"
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our built-in cupboard services.
            </p>
          </div>
          <FAQAccordion faqs={cupboardFAQs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Maximize Your Storage Space?</h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today for a free consultation and quote. Let's create the perfect storage solution for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              Call (011) 234-5678
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-green-600 bg-transparent"
              asChild
            >
              <Link href="/contact">Get Free Measure</Link>
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
            name: "Built-in Cupboards Johannesburg",
            description:
              "Expert built-in cupboard installation in Johannesburg, Sandton, Randburg, and Midrand. Custom wardrobes, bedroom cupboards, and storage solutions.",
            provider: {
              "@type": "Organization",
              name: "Granite Carpentry & Joinery Experts",
              url: "https://granitejoineryexperts.co.za",
            },
            areaServed: ["Johannesburg", "Sandton", "Randburg", "Midrand", "Gauteng"],
            serviceType: "Built-in Cupboards",
          }),
        }}
      />
    </div>
  )
}
