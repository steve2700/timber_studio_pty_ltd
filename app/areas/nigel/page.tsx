import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, Star, CheckCircle, Clock, Shield, Award, MapPin, ArrowRight, Quote, TreePine, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Country Carpenter & Plumber Nigel | Rural Carpentry, Granite Installation & Country Plumbing | Granite Carpentry",
  description:
    "Country carpenter & plumber services in Nigel. Rural carpentry, kitchen renovations, built-in cupboards, granite installation & country plumbing. Licensed & insured with country service. Call 067 601 4490 for free quote.",
  keywords:
    "carpenter Nigel, country plumber Nigel, rural carpentry Nigel, kitchen renovations Nigel, built-in cupboards Nigel, granite installation Nigel, country plumbing Nigel, East Rand carpenter",
  openGraph: {
    title: "Country Carpenter & Plumber Nigel | Rural Carpentry & Granite Installation",
    description:
      "Country carpenter & plumber services in Nigel. Rural carpentry, kitchen renovations, built-in cupboards, granite installation & country plumbing. Licensed & insured with country service.",
    url: "https://granitecarpentry.co.za/areas/nigel",
    siteName: "Granite Carpentry",
    images: [
      {
        url: "https://granitecarpentry.co.za/granitecarpentry-logo.png",
        width: 1200,
        height: 630,
        alt: "Country Carpenter & Plumber Nigel - Granite Carpentry",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Country Carpenter & Plumber Nigel | Rural Carpentry & Granite Installation",
    description:
      "Country carpenter & plumber services in Nigel. Rural carpentry, kitchen renovations, built-in cupboards, granite installation & country plumbing. Licensed & insured with country service.",
    images: ["https://granitecarpentry.co.za/granitecarpentry-logo.png"],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/nigel",
  },
}

export default function NigelPage() {
  const services = [
    {
      title: "Country Kitchen Renovations Nigel",
      description: "Rustic kitchen makeovers with custom cabinets and granite countertops for Nigel's country homes.",
      image: "/Kitchen-renovations-sandton.webp",
      href: "/services/kitchen-renovations",
      price: "From R48,000",
      duration: "7-14 days",
    },
    {
      title: "Rural Built-in Cupboards Nigel",
      description: "Custom wardrobes and storage solutions designed for Nigel's rural and country properties.",
      image: "/Built-Built-in-Cupboards-Midrand.jpg",
      href: "/services/built-in-cupboards",
      price: "From R14,000",
      duration: "3-7 days",
    },
    {
      title: "Country Granite Installation Nigel",
      description: "Premium granite and quartz countertops with professional installation throughout rural Nigel.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/quartz-granite",
      price: "From R8,500",
      duration: "2-5 days",
    },
    {
      title: "Rural Decking & Flooring Nigel",
      description: "Beautiful outdoor decking and indoor flooring solutions for Nigel's country lifestyle.",
      image: "/beautiful-decking.jpg",
      href: "/services/decking-flooring",
      price: "From R13,000",
      duration: "3-8 days",
    },
    {
      title: "Country Plumbing Services Nigel",
      description: "Rural plumbing services designed for Nigel's country properties and agricultural needs.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/plumbing",
      price: "From R370/hour",
      duration: "Rural Service",
    },
  ]

  const whyChooseUs = [
    {
      icon: <TreePine className="h-8 w-8 text-amber-600" />,
      title: "Country Specialists",
      description: "Deep understanding of Nigel's rural lifestyle and country home carpentry requirements",
    },
    {
      icon: <Leaf className="h-8 w-8 text-amber-600" />,
      title: "Rural Service",
      description: "Specialized service for country properties with understanding of rural access and logistics",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Country Warranty",
      description: "Comprehensive warranty coverage designed for rural properties and country living",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "East Rand Coverage",
      description: "Extensive coverage throughout Nigel and surrounding East Rand rural areas",
    },
  ]

  const testimonials = [
    {
      name: "Willem Botha",
      location: "Nigel Rural",
      rating: 5,
      text: "Excellent country kitchen renovation that perfectly suits our rural lifestyle. The team understood our needs and delivered exceptional quality work.",
      service: "Country Kitchen",
    },
    {
      name: "Precious Mthembu",
      location: "Nigel Central",
      rating: 5,
      text: "Beautiful built-in cupboards that maximize our space perfectly. Professional service with attention to country home details. Highly recommended!",
      service: "Rural Built-ins",
    },
    {
      name: "Kobus van Zyl",
      location: "Nigel Farms",
      rating: 5,
      text: "Outstanding granite installation for our farmhouse kitchen. Quality workmanship that handles our country lifestyle perfectly.",
      service: "Country Granite",
    },
  ]

  const nearbyAreas = [
    "Nigel Central",
    "Nigel Rural",
    "Nigel Farms",
    "Duduza",
    "Dunnottar",
    "Heidelberg",
    "Springs",
    "Benoni",
    "Boksburg",
    "Germiston",
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
                  Country Carpenter & Plumber Nigel
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  Country Carpenter & <span className="text-amber-400">Plumber</span>{" "}
                  <span className="block">Services in Nigel</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                  Transform your Nigel country home with the East Rand's most trusted rural carpentry, granite
                  installation, and country plumbing experts. Specializing in country kitchen renovations, built-in
                  cupboards, and stone installations with personalized country service since 2020.
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
                <span className="font-semibold">Country Specialists</span>
                <Separator orientation="vertical" className="h-6 bg-slate-600 hidden sm:block" />
                <span className="font-semibold">Rural Service</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Get Country Quote
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
                  <span>Rural Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Country Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Free Consultations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>24-Month Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/beautiful-decking.jpg"
                  alt="Country Carpenter & Plumber Nigel - Rural Carpentry and Built-in Solutions"
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
                        <p className="font-semibold text-slate-900 text-sm sm:text-base">Country Specialists</p>
                        <p className="text-xs sm:text-sm text-slate-600">Rural Service</p>
                      </div>
                      <TreePine className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Nigel Country Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Rural Carpentry Solutions for Country Living
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              From country kitchens to rural built-ins, we deliver exceptional craftsmanship with premium materials and
              professional installation throughout Nigel and the East Rand rural areas.
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
                    <Badge className="bg-green-600 text-white">Country</Badge>
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Why Choose Us in Nigel</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Nigel's Leading Country Carpentry Specialists
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              With specialized experience in Nigel's rural environment, we understand country living and deliver
              carpentry solutions that complement the rural lifestyle with modern functionality.
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
            <Badge className="bg-amber-600 text-white px-4 py-2 mb-4">Nigel Client Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our Country Clients Say</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied Nigel clients have to say about our country
              carpentry and rural installation services.
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
              Country Carpentry Throughout Nigel & East Rand
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              We provide specialized country carpentry and granite installation services throughout Nigel and
              surrounding East Rand rural areas with the same high standards and rural expertise.
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready for Country Carpentry in Nigel?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free consultation and quote for your country carpentry or granite installation project in Nigel. We're
            ready to deliver rural solutions that complement your country lifestyle.
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
                Get Country Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
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
