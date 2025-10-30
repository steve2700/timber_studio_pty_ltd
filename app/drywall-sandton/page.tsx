import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Star,
  Award,
  Building2,
  MapPin,
  Clock,
  Shield,
  Users,
  Home,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Drywall Installation Sandton 2025 | Professional Drywalling Services | Free Quotes",
  description:
    "★★★★★ Expert drywall installation in Sandton. Premium drywalling for luxury homes & offices in Rosebank, Hyde Park, Bryanston. Licensed contractors, 5-year warranty. Call 067 601 4490 for free quotes.",
  keywords:
    "drywall installation Sandton, drywalling Sandton, drywall contractors Sandton, plasterboard installation Sandton, drywall Rosebank, drywall Hyde Park, drywall Bryanston, drywall Sandton City, luxury drywall Sandton, commercial drywall Sandton, residential drywall Sandton, drywall finishing Sandton, drywall repairs Sandton, professional drywalling Sandton 2025",
  alternates: {
    canonical: "https://granitecarpentry.co.za/drywall-sandton",
  },
  openGraph: {
    title: "Drywall Installation Sandton 2025 | Professional Drywalling Services",
    description:
      "★★★★★ Expert drywall installation in Sandton. Premium drywalling for luxury homes & offices. Licensed contractors, 5-year warranty. Free quotes.",
    url: "https://granitecarpentry.co.za/drywall-sandton",
    images: [{ url: "/drywall-contractor.jpg", width: 1200, height: 630 }],
  },
}

export default function DrywallSandtonPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-amber-400 mr-2" />
                <Badge variant="secondary" className="bg-amber-600/20 text-amber-100 border-amber-300">
                  Sandton's Premier Drywall Specialists
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional <span className="text-amber-400">Drywall Installation</span> in{" "}
                <span className="text-amber-400">Sandton</span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-200 mb-8 leading-relaxed">
                Sandton's luxury properties demand perfect finishes. Expert drywall installation for high-rise
                apartments, modern homes, and premium office spaces near Sandton City and Nelson Mandela Square.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4 font-semibold">
                  <Link href="/contact">
                    Get FREE Quote Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <a href="tel:+27676014490">
                    <Phone className="mr-2 w-5 h-5" />
                    067 601 4490
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Star className="w-6 h-6 text-amber-400 mb-1 fill-current" />
                  <span className="text-sm font-medium">5.0 Rating</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">Licensed</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">200+ Projects</span>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">5-Year Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/drywall-contractor.jpg"
                alt="Professional Drywall Installation Sandton - Luxury Homes & Offices"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-amber-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm">Sandton Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 text-center">
            Why Sandton Homeowners & Businesses Choose Our Drywall Services
          </h2>
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <p className="text-lg mb-4">
              Sandton's reputation as Africa's richest square mile means properties here demand nothing but perfection.
              Whether you're renovating a luxury apartment in Sandton City, upgrading a corporate office near Nelson
              Mandela Square, or building a custom home in Hyde Park, professional drywall installation is the
              foundation of a flawless interior finish.
            </p>
            <p className="text-lg mb-4">
              Our team has completed over 200 drywall projects across Sandton's most prestigious addresses. From
              high-rise apartments requiring precision measurements to sprawling estates in Bryanston demanding seamless
              finishes, we understand the unique challenges of working in Sandton's premium property market.
            </p>
            <p className="text-lg mb-4">
              Sandton's modern architectural designs often feature open-plan layouts, floor-to-ceiling windows, and
              contemporary aesthetics that require expert drywall installation. We specialize in creating smooth,
              paint-ready surfaces that complement Sandton's luxury interior design standards while meeting strict
              building code requirements for high-rise and commercial properties.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Our Drywall Services in Sandton</h2>
            <p className="text-xl text-slate-600">Comprehensive drywalling solutions for Sandton's luxury properties</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Building2 className="w-6 h-6 text-amber-600 mr-2" />
                  Residential Drywall Installation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Premium drywall installation for Sandton homes, apartments, and luxury estates.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>New construction drywall hanging</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Renovation & remodeling drywall</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Feature walls & architectural details</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Moisture-resistant drywall for bathrooms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Award className="w-6 h-6 text-amber-600 mr-2" />
                  Commercial Drywall Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Professional drywall for Sandton offices, retail spaces, and commercial buildings.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Office partitions & meeting rooms</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fire-rated drywall for compliance</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Soundproof drywall systems</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Retail & restaurant fit-outs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Home className="w-6 h-6 text-amber-600 mr-2" />
                  Drywall Finishing & Repairs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Expert finishing services for smooth, paint-ready surfaces and damage repairs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Level 5 smooth finish for luxury homes</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Crack repairs & hole patching</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Water damage restoration</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Texture matching & blending</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Why Choose Us for Sandton Drywall Projects?
            </h2>
            <p className="text-xl text-slate-600">Trusted by Sandton's most discerning property owners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <Building2 className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Sandton Expertise</h3>
                    <p className="text-slate-600">
                      We've completed over 50 projects near Sandton City Mall, Nelson Mandela Square, and throughout
                      Sandton's premium suburbs. We understand the unique requirements of high-rise apartments, luxury
                      estates, and commercial properties in Africa's financial hub.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <Star className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Premium Quality Standards</h3>
                    <p className="text-slate-600">
                      Sandton properties demand perfection. We use only premium-grade materials from trusted suppliers
                      like Gyproc and Lafarge, ensuring your drywall installation meets the highest standards expected
                      in Sandton's luxury property market.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <Shield className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Licensed & Insured</h3>
                    <p className="text-slate-600">
                      Fully licensed contractors with comprehensive insurance coverage. We meet all building code
                      requirements for Sandton's high-rise and commercial properties, providing peace of mind for
                      property managers and homeowners.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Efficient Project Management</h3>
                    <p className="text-slate-600">
                      We understand Sandton's fast-paced environment. Our team provides realistic timelines, coordinates
                      with other trades, and completes projects on schedule. Minimal disruption to your home or business
                      operations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 text-center">
            Common Drywall Problems in Sandton Properties
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">High-Rise Installation Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Sandton's numerous high-rise apartments and office buildings present unique challenges including
                  material transportation, elevator scheduling, and working within strict building management rules. Our
                  team has extensive experience navigating these requirements while maintaining quality and timelines.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Modern Design Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Sandton's contemporary architecture often features open-plan layouts, curved walls, and complex
                  ceiling designs that require advanced drywall techniques. We specialize in creating seamless finishes
                  that complement modern interior design while maintaining structural integrity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Climate Control & Moisture Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Johannesburg's climate with seasonal humidity changes affects drywall performance. We use
                  moisture-resistant materials in bathrooms and kitchens, and ensure proper ventilation integration to
                  prevent future issues like mold growth or cracking in Sandton's luxury properties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 text-center">
            Sandton Drywall Installation Process
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Consultation & Site Assessment</h3>
                <p className="text-slate-600">
                  We visit your Sandton property to assess the space, discuss your requirements, and provide a detailed
                  quote. For high-rise properties, we coordinate with building management for access and scheduling.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Material Selection & Preparation</h3>
                <p className="text-slate-600">
                  We source premium drywall materials suitable for your specific needs - standard, moisture-resistant,
                  fire-rated, or soundproof. All materials are delivered to your Sandton property with proper handling
                  and storage.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Professional Installation</h3>
                <p className="text-slate-600">
                  Our skilled team hangs drywall sheets with precision, ensuring proper alignment and secure fastening.
                  We work efficiently to minimize disruption to your Sandton home or business operations.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Taping, Mudding & Finishing</h3>
                <p className="text-slate-600">
                  We apply multiple coats of joint compound (mud), allowing proper drying time between coats. Each layer
                  is carefully sanded to achieve the smooth, paint-ready finish expected in Sandton's luxury properties.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Quality Inspection & Cleanup</h3>
                <p className="text-slate-600">
                  Final inspection ensures every surface meets our quality standards. We thoroughly clean the work area,
                  removing all dust and debris, leaving your Sandton property ready for painting or final finishes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 text-center">
            Drywall Installation Pricing in Sandton
          </h2>
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-lg mb-6">
              Drywall installation costs in Sandton vary based on project size, material selection, and complexity. Our
              transparent pricing ensures you understand exactly what you're paying for:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>Residential Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Standard drywall installation:</span>
                      <span className="font-bold">R180-R250/m²</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Moisture-resistant drywall:</span>
                      <span className="font-bold">R220-R280/m²</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Level 5 smooth finish:</span>
                      <span className="font-bold">R280-R350/m²</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Commercial Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Office partitions:</span>
                      <span className="font-bold">R200-R280/m²</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Fire-rated drywall:</span>
                      <span className="font-bold">R250-R320/m²</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Soundproof systems:</span>
                      <span className="font-bold">R300-R400/m²</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="text-base text-slate-600 italic">
              Prices include materials, labor, and finishing. Free quotes provided for all Sandton properties. Volume
              discounts available for large commercial projects.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 text-center">
            Recent Drywall Projects in Sandton
          </h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-amber-600">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-700 mb-3 italic">
                      "Exceptional drywall work on our Hyde Park home renovation. The team was professional, efficient,
                      and the finish quality exceeded our expectations. Perfect smooth walls ready for our designer
                      paint finishes."
                    </p>
                    <p className="text-slate-600 font-semibold">- Michael T., Hyde Park</p>
                    <p className="text-sm text-slate-500">Residential Renovation - 180m² drywall installation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-amber-600">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-700 mb-3 italic">
                      "We needed office partitions installed in our Sandton CBD office over a weekend to avoid
                      disrupting operations. The team delivered perfectly - on time, on budget, and with minimal mess.
                      Highly recommended for commercial projects."
                    </p>
                    <p className="text-slate-600 font-semibold">- Sarah K., Sandton CBD</p>
                    <p className="text-sm text-slate-500">Commercial Office Fit-out - Fire-rated partitions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-amber-600">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-700 mb-3 italic">
                      "Outstanding service for our Bryanston estate. They handled complex curved walls and high ceilings
                      with expertise. The Level 5 finish is flawless - exactly what we needed for our luxury home."
                    </p>
                    <p className="text-slate-600 font-semibold">- David & Lisa M., Bryanston</p>
                    <p className="text-sm text-slate-500">Luxury Home - Custom architectural drywall</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Drywall Services Throughout Sandton & Nearby Areas
            </h2>
            <p className="text-xl text-slate-600">
              Professional drywalling services across Sandton and surrounding suburbs
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {[
              "Sandton CBD",
              "Rosebank",
              "Hyde Park",
              "Illovo",
              "Melrose",
              "Morningside",
              "Rivonia",
              "Bryanston",
              "Douglasdale",
              "Lonehill",
              "Paulshof",
              "Sunninghill",
            ].map((area) => (
              <Card key={area} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <MapPin className="w-5 h-5 text-amber-600 mx-auto mb-2" />
                  <p className="font-semibold text-slate-800">{area}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">We Also Serve These Nearby Areas:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/drywall-rosebank" className="text-amber-600 hover:text-amber-700 font-medium underline">
                Drywall Rosebank
              </Link>
              <span className="text-slate-400">•</span>
              <Link
                href="/ceiling-repairs-randburg"
                className="text-amber-600 hover:text-amber-700 font-medium underline"
              >
                Ceiling Repairs Randburg
              </Link>
              <span className="text-slate-400">•</span>
              <Link
                href="/suspended-ceilings-johannesburg"
                className="text-amber-600 hover:text-amber-700 font-medium underline"
              >
                Suspended Ceilings Johannesburg
              </Link>
              <span className="text-slate-400">•</span>
              <Link
                href="/drywalling-contractors-johannesburg"
                className="text-amber-600 hover:text-amber-700 font-medium underline"
              >
                Drywalling Contractors Johannesburg
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 text-center">
            Frequently Asked Questions About Drywall in Sandton
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                How long does drywall installation take for a Sandton apartment?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-slate-600">
                  For a standard 2-3 bedroom Sandton apartment (100-150m²), drywall installation typically takes 5-7
                  working days. This includes hanging, taping, mudding (multiple coats with drying time), sanding, and
                  final finishing. Larger properties or complex designs may require 2-3 weeks. We provide detailed
                  timelines during consultation and coordinate with building management for high-rise properties.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                What type of drywall is best for Sandton's luxury homes?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-slate-600">
                  For Sandton's luxury properties, we recommend moisture-resistant (green board) drywall for bathrooms
                  and kitchens, standard drywall for living areas, and fire-rated boards where required by building
                  codes. For premium finishes, we apply a Level 5 smooth finish that's perfect for high-end paint
                  finishes and designer wallpapers. We use quality brands like Gyproc and Lafarge that perform
                  excellently in Johannesburg's climate.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Do you handle drywall installation in Sandton high-rise buildings?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-slate-600">
                  Yes, we specialize in high-rise drywall installations throughout Sandton. We have extensive experience
                  working in buildings near Sandton City, Nelson Mandela Square, and throughout the Sandton CBD. We
                  coordinate with building management for elevator access, adhere to strict working hours, and ensure
                  minimal disruption to other residents. All work meets building code requirements for high-rise
                  properties.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Can you match existing drywall texture for repairs in Sandton homes?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-slate-600">
                  Absolutely. We specialize in drywall repairs that seamlessly blend with existing surfaces. Whether you
                  need crack repairs, hole patching, or water damage restoration in your Sandton property, our team can
                  match textures and finishes so repairs are virtually invisible. We use the same premium materials and
                  techniques to ensure consistent quality throughout your home.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                What's included in your Sandton drywall installation quote?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-slate-600">
                  Our comprehensive quotes include all materials (drywall sheets, joint compound, tape, screws), labor
                  for hanging and finishing, multiple coats of mud with proper drying time, sanding, primer coat, and
                  thorough cleanup. We provide transparent pricing with no hidden costs. Free site visits and quotes for
                  all Sandton properties. Volume discounts available for large commercial projects.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready for Professional Drywall Installation in Sandton?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join 200+ satisfied Sandton clients who trust us for premium drywall installation. Get your FREE quote today
            from Sandton's leading drywall specialists. Licensed, insured, and guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button
              size="lg"
              asChild
              className="bg-white text-amber-600 hover:bg-slate-50 text-lg px-8 py-4 font-semibold"
            >
              <Link href="/contact">
                Get FREE Quote Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8 py-4 bg-transparent"
            >
              <a href="tel:+27676014490">
                <Phone className="mr-2 w-5 h-5" />
                067 601 4490
              </a>
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg opacity-90">
              ⭐⭐⭐⭐⭐ "Best drywall contractors in Sandton! Flawless finish on our Hyde Park home." - Michael T.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
