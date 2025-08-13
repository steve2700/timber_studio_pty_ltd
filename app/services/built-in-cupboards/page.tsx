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
  Ruler,
  Palette,
  Shield,
  Clock,
  Award,
  MapPin,
  Calculator,
  Users,
  Wrench,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Built-in Cupboards Johannesburg 2025 | Custom Wardrobes & Storage Solutions",
  description:
    "Professional built-in cupboards & custom wardrobes in Johannesburg. Bedroom cupboards, study units, kitchen pantries. 5-star service, 24-month warranty. Free quotes. Call 067 601 4490.",
  keywords:
    "built-in cupboards Johannesburg, custom wardrobes Johannesburg, bedroom cupboards Johannesburg, built-in wardrobes Sandton, custom cupboards Randburg, study units Johannesburg, kitchen pantry cupboards, walk-in closets Johannesburg, built-in storage solutions, custom furniture Johannesburg, wardrobe installation Johannesburg, cupboard makers Johannesburg, built-in bedroom furniture, custom storage Johannesburg, wardrobe designers Johannesburg",
  openGraph: {
    title: "Built-in Cupboards Johannesburg 2025 | Custom Wardrobes & Storage Solutions",
    description:
      "Professional built-in cupboards & custom wardrobes in Johannesburg. 5-star service, 24-month warranty. Free quotes available.",
    images: [{ url: "/Built-Built-in-Cupboards-Midrand.jpg", width: 1200, height: 630 }],
  },
}

export default function BuiltInCupboardsPage() {
  const cupboardTypes = [
    {
      title: "Bedroom Wardrobes",
      description: "Custom built-in wardrobes with hanging space, shelving, and drawers",
      features: ["Sliding or hinged doors", "Internal organizers", "LED lighting options", "Mirror integration"],
      price: "From R15,000",
      image: "/Custom-Bedroom-Built-In-Cupboards-and-Wardrobes-JHB.png",
    },
    {
      title: "Study Units",
      description: "Built-in study desks with storage, shelving, and filing solutions",
      features: ["Integrated desk space", "Book shelving", "Filing drawers", "Cable management"],
      price: "From R12,000",
      image: "/built-in-study-1 (1).webp",
    },
    {
      title: "Kitchen Pantries",
      description: "Custom pantry cupboards with adjustable shelving and storage",
      features: ["Adjustable shelving", "Pull-out drawers", "Spice racks", "Soft-close doors"],
      price: "From R8,000",
      image: "/Kitchen-renovations-sandton.webp",
    },
    {
      title: "Entertainment Units",
      description: "Built-in TV units with media storage and display shelving",
      features: ["TV mounting space", "Media storage", "Display shelves", "Cable management"],
      price: "From R10,000",
      image: "/entertainment unit.jpg",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Free Consultation",
      description: "We visit your home to assess the space and discuss your storage needs and design preferences.",
    },
    {
      step: "2",
      title: "Design & Quote",
      description: "Our team creates detailed designs and provides a comprehensive quote with no hidden costs.",
    },
    {
      step: "3",
      title: "Manufacturing",
      description: "We manufacture your custom cupboards using premium materials and precision craftsmanship.",
    },
    {
      step: "4",
      title: "Installation",
      description: "Professional installation with minimal disruption to your daily routine and thorough cleanup.",
    },
  ]

  const features = [
    {
      icon: Ruler,
      title: "Custom Measurements",
      description: "Perfectly fitted to your space with precise measurements and professional installation",
    },
    {
      icon: Palette,
      title: "Design Options",
      description: "Wide range of finishes, colors, and hardware to match your home's aesthetic",
    },
    {
      icon: Shield,
      title: "Quality Materials",
      description: "Premium melamine, solid wood, and hardware from trusted suppliers",
    },
    {
      icon: Award,
      title: "24-Month Warranty",
      description: "Comprehensive warranty on all workmanship and materials for peace of mind",
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Built-in Cupboard Specialists
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Custom Built-in Cupboards &<span className="text-amber-400"> Wardrobes</span>
                  Johannesburg
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Transform your home with custom built-in cupboards and wardrobes designed specifically for your space.
                  Professional installation, premium materials, and 24-month warranty on all workmanship.
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
                  src="/Built-Built-in-Cupboards-Midrand.jpg"
                  alt="Custom Built-in Cupboards Johannesburg - Professional Installation"
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
                        <p className="text-sm text-slate-600">Built-in Wardrobes - Midrand</p>
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

      {/* Features Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cupboard Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Our Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Custom Built-in Cupboard Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From bedroom wardrobes to study units and kitchen pantries, we create custom storage solutions that
              maximize your space and complement your home's design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cupboardTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={type.image || "/placeholder.svg"}
                    alt={type.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-600 text-white">{type.price}</Badge>
                  </div>
                </div>
                <CardHeader className="space-y-3">
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription className="text-slate-600">{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
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
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Our Process</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              How We Create Your Perfect Storage Solution
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From initial consultation to final installation, our streamlined process ensures your built-in cupboards
              are delivered on time and to your exact specifications.
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

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Pricing</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Transparent Built-in Cupboard Pricing</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our pricing is transparent with no hidden costs. All quotes include materials, installation, and our
              comprehensive warranty.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-slate-200 hover:border-amber-200 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Basic Package</CardTitle>
                <div className="text-3xl font-bold text-amber-600">R15,000 - R25,000</div>
                <CardDescription>Standard built-in wardrobes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Melamine finish</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Standard hardware</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Basic internal fittings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">24-month warranty</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-amber-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Premium Package</CardTitle>
                <div className="text-3xl font-bold text-amber-600">R25,000 - R45,000</div>
                <CardDescription>High-quality custom solutions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Premium finishes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Soft-close mechanisms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Custom internal organizers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">LED lighting options</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">24-month warranty</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200 hover:border-amber-200 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Luxury Package</CardTitle>
                <div className="text-3xl font-bold text-amber-600">R45,000+</div>
                <CardDescription>Bespoke luxury solutions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Solid wood options</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Designer hardware</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Integrated mirrors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Smart storage solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">24-month warranty</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              All prices include materials, professional installation, and cleanup. Final pricing depends on size,
              materials, and complexity.
            </p>
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">
                Get Detailed Quote
                <Calculator className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Service Areas</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Built-in Cupboards Throughout Johannesburg
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We provide professional built-in cupboard installation services throughout Greater Johannesburg and
              surrounding areas in Gauteng.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {areas.map((area, index) => (
              <Link key={index} href={`/areas/${area.toLowerCase().replace(/\s+/g, "-")}`} className="group">
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group-hover:border-amber-200">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin className="h-4 w-4 text-amber-600" />
                      <span className="font-medium text-slate-900 group-hover:text-amber-600 transition-colors">
                        {area}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/areas">
                View All Service Areas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready for Custom Built-in Cupboards?</h2>
            <p className="text-xl text-amber-100">
              Transform your home with custom storage solutions designed specifically for your space. Get a free
              consultation and detailed quote from Johannesburg's most trusted cupboard specialists.
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
