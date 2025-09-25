import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, Star, CheckCircle, Clock, Shield, Award, MapPin, ArrowRight, Quote, Building2, Zap } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Industrial Carpenter & Plumber Krugersdorp | Commercial Carpentry, Granite Installation & Industrial Plumbing | Granite Carpentry",
  description:
    "Industrial carpenter & plumber services in Krugersdorp. Commercial carpentry, kitchen renovations, built-in cupboards, granite installation & industrial plumbing. Licensed & insured for industrial projects. Call 067 601 4490 for free quote.",
  keywords:
    "carpenter Krugersdorp, industrial plumber Krugersdorp, commercial carpentry Krugersdorp, kitchen renovations Krugersdorp, built-in cupboards Krugersdorp, granite installation Krugersdorp, industrial plumbing Krugersdorp",
  openGraph: {
    title: "Industrial Carpenter & Plumber Krugersdorp | Commercial Carpentry & Granite Installation",
    description:
      "Industrial carpenter & plumber services in Krugersdorp. Commercial carpentry, kitchen renovations, built-in cupboards, granite installation & industrial plumbing. Licensed & insured for industrial projects.",
    url: "https://granitecarpentry.co.za/areas/krugersdorp",
    siteName: "Granite Carpentry",
    images: [
      {
        url: "https://granitecarpentry.co.za/granitecarpentry-logo.png",
        width: 1200,
        height: 630,
        alt: "Industrial Carpenter & Plumber Krugersdorp - Granite Carpentry",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Carpenter & Plumber Krugersdorp | Commercial Carpentry & Granite Installation",
    description:
      "Industrial carpenter & plumber services in Krugersdorp. Commercial carpentry, kitchen renovations, built-in cupboards, granite installation & industrial plumbing. Licensed & insured for industrial projects.",
    images: ["https://granitecarpentry.co.za/granitecarpentry-logo.png"],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/krugersdorp",
  },
}

export default function KrugersdorpPage() {
  const services = [
    {
      title: "Industrial Kitchen Renovations Krugersdorp",
      description: "Commercial-grade kitchen makeovers built for Krugersdorp's industrial and business community.",
      image: "/Kitchen-renovations-sandton.webp",
      href: "/services/kitchen-renovations",
      price: "From R55,000",
      duration: "9-17 days",
    },
    {
      title: "Commercial Built-in Cupboards Krugersdorp",
      description: "Industrial-strength custom wardrobes and storage solutions for Krugersdorp businesses and homes.",
      image: "/Built-Built-in-Cupboards-Midrand.jpg",
      href: "/services/built-in-cupboards",
      price: "From R18,000",
      duration: "5-9 days",
    },
    {
      title: "Industrial Granite Installation Krugersdorp",
      description: "Heavy-duty granite and quartz installations designed for Krugersdorp's industrial environment.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/quartz-granite",
      price: "From R10,000",
      duration: "3-7 days",
    },
    {
      title: "Commercial Decking & Flooring Krugersdorp",
      description: "Industrial-grade outdoor decking and flooring solutions for Krugersdorp's commercial properties.",
      image: "/beautiful-decking.jpg",
      href: "/services/decking-flooring",
      price: "From R15,000",
      duration: "5-11 days",
    },
    {
      title: "Industrial Plumbing Services Krugersdorp",
      description: "Commercial-grade plumbing services for Krugersdorp's industrial and business properties.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/plumbing",
      price: "From R410/hour",
      duration: "Industrial Service",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Building2 className="h-8 w-8 text-amber-600" />,
      title: "Industrial Specialists",
      description: "Deep expertise in Krugersdorp's industrial environment and commercial carpentry requirements",
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-600" />,
      title: "Commercial Grade",
      description: "Specialized in heavy-duty construction that meets industrial standards and commercial demands",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Industrial Warranty",
      description: "Extended warranty coverage designed for the demanding conditions of industrial environments",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "West Rand Leader",
      description: "Leading carpentry service throughout Krugersdorp and surrounding West Rand industrial areas",
    },
  ]

  const testimonials = [
    {
      name: "Pieter van der Merwe",
      location: "Krugersdorp Central",
      rating: 5,
      text: "Outstanding industrial kitchen renovation that handles our business demands perfectly. Built to commercial standards with excellent attention to detail.",
      service: "Industrial Kitchen",
    },
    {
      name: "Sarah Molefe",
      location: "Krugersdorp North",
      rating: 5,
      text: "Excellent commercial built-in cupboards that are built for heavy use. Quality workmanship that meets our industrial facility requirements perfectly.",
      service: "Commercial Built-ins",
    },
    {
      name: "Johan Steyn",
      location: "Krugersdorp West",
      rating: 5,
      text: "Heavy-duty granite installation that looks professional and handles our industrial kitchen demands. Perfect for our commercial property!",
      service: "Industrial Granite",
    },
  ]

  const nearbyAreas = [
    "Krugersdorp Central",
    "Krugersdorp North",
    "Krugersdorp West",
    "Krugersdorp South",
    "Munsieville",
    "Kagiso",
    "Randfontein",
    "Westonaria",
    "Carletonville",
    "Roodepoort",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2">
                  Industrial Carpenter & Plumber Krugersdorp
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  Industrial Carpenter & <span className="text-amber-400">Commercial</span>{" "}
                  <span className="block">Carpentry in Krugersdorp</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                  Transform your Krugersdorp property with the West Rand's most trusted industrial carpentry and granite
                  installation experts. Commercial-grade kitchen renovations, built-in cupboards, and stone
                  installations built for industrial demands since 2020.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 items-center text-sm sm:text-base">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 fill-current" />
                  ))}
                  <span className="ml-2 font-semibold">5.0 Rating</span>
                </div>
                <Separator orientation="vertical" className="h-6 bg-slate-600 hidden sm:block" />
                <span className="font-semibold">Industrial Specialists</span>
                <Separator orientation="vertical" className="h-6 bg-slate-600 hidden sm:block" />
                <span className="font-semibold">Commercial Grade</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Get Industrial Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent"
                >
                  <Link href="tel:+27676014490">Call 067 601 4490</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Industrial Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Commercial Grade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Business Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Industrial Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/granite-installation-sandton.jpg"
                  alt="Industrial Carpenter Krugersdorp - Commercial Carpentry and Built-in Solutions"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-slate-900 text-sm sm:text-base">Industrial Specialists</p>
                        <p className="text-xs sm:text-sm text-slate-600">Commercial Grade</p>
                      </div>
                      <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Krugersdorp Industrial Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Commercial Carpentry Solutions for Industrial Krugersdorp
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              From industrial-strength kitchens to commercial built-ins, we deliver robust craftsmanship with premium
              materials and professional installation throughout Krugersdorp and the West Rand industrial areas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-amber-600 text-white">{service.price}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white">Industrial</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-slate-500">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Why Choose Us in Krugersdorp</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Krugersdorp's Leading Industrial Carpentry Specialists
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              With specialized experience in Krugersdorp's industrial environment and commercial demands, we deliver
              carpentry solutions that meet the highest standards for business and industrial applications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => (
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

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-amber-600 text-white px-4 py-2 mb-4">Krugersdorp Client Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our Industrial Clients Say</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied Krugersdorp clients have to say about our
              industrial carpentry and commercial installation services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 text-white">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-amber-400 mr-3 flex-shrink-0" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t border-slate-700 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-slate-400">{testimonial.location}</p>
                      </div>
                      <Badge variant="outline" className="border-amber-400 text-amber-400">
                        {testimonial.service}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Areas We Serve</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Industrial Carpentry Throughout Krugersdorp & West Rand
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              We provide specialized industrial carpentry and granite installation services throughout Krugersdorp and
              surrounding West Rand areas with the same commercial-grade expertise and quality craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {nearbyAreas.map((area, index) => (
              <div
                key={index}
                className="group p-4 rounded-lg border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-600 group-hover:text-amber-700 flex-shrink-0" />
                  <span className="font-medium text-slate-900 group-hover:text-amber-700 text-sm">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready for Industrial Carpentry in Krugersdorp?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free consultation and quote for your commercial carpentry or granite installation project in
            Krugersdorp. We're ready to deliver industrial-strength solutions built for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-amber-600 hover:bg-slate-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Get Industrial Quote
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-amber-600 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent"
            >
              <Link href="tel:+27676014490">Call 067 601 4490</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
