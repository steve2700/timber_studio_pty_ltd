import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, Star, Wrench, Hammer, Droplets } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Carpenter & Plumber Vanderbijlpark | Steel City Experts | R420/hr",
  description:
    "Expert carpenter & plumber in Vanderbijlpark. Industrial-grade kitchen renovations, built-in cupboards, granite installation & emergency plumbing. Steel city specialists since 2010.",
  keywords:
    "carpenter Vanderbijlpark, plumber Vanderbijlpark, kitchen renovations Vanderbijlpark, built-in cupboards Vanderbijlpark, granite installation Vanderbijlpark, emergency plumbing Vanderbijlpark, steel city carpenter",
  openGraph: {
    title: "Professional Carpenter & Plumber Vanderbijlpark | Steel City Experts",
    description: "Expert carpenter & plumber in Vanderbijlpark. Industrial-grade services with 15+ years experience.",
    url: "https://granitecarpentry.co.za/areas/vanderbijlpark",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
}

export default function VanderbijlparkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">
              <MapPin className="w-4 h-4 mr-2" />
              Vanderbijlpark Steel City Specialists
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Carpenter & Plumber
              <span className="block text-orange-400">Vanderbijlpark</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Industrial-grade carpentry & plumbing services for Vanderbijlpark's steel city community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 067 468 7400
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                <Clock className="w-5 h-5 mr-2" />
                24/7 Emergency Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Steel City Carpentry & Plumbing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving Vanderbijlpark with industrial-strength solutions and traditional craftsmanship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Carpentry Services */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900">
                  <Hammer className="w-6 h-6 mr-2 text-orange-500" />
                  Carpentry Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Kitchen Renovations</li>
                  <li>• Built-in Cupboards</li>
                  <li>• Granite & Quartz Installation</li>
                  <li>• Custom Wardrobes</li>
                  <li>• Decking & Flooring</li>
                  <li>• Drywall & Ceilings</li>
                </ul>
                <Badge className="mt-4 bg-green-100 text-green-800">From R380/hour</Badge>
              </CardContent>
            </Card>

            {/* Plumbing Services */}
            <Card className="hover:shadow-lg transition-shadow border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900">
                  <Droplets className="w-6 h-6 mr-2 text-orange-500" />
                  Plumbing Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Emergency Plumbing Repairs</li>
                  <li>• Bathroom Renovations</li>
                  <li>• Kitchen Plumbing Installation</li>
                  <li>• Geyser Installation & Repair</li>
                  <li>• Pipe Repairs & Replacements</li>
                  <li>• Drain Cleaning & Unblocking</li>
                </ul>
                <Badge className="mt-4 bg-orange-100 text-orange-800">From R420/hour</Badge>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-900">
                  <Star className="w-6 h-6 mr-2 text-orange-500" />
                  Why Choose Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 15+ Years Experience</li>
                  <li>• Industrial-Grade Quality</li>
                  <li>• Licensed & Insured</li>
                  <li>• 24/7 Emergency Service</li>
                  <li>• Free Quotes</li>
                  <li>• Steel City Specialists</li>
                </ul>
                <Badge className="mt-4 bg-blue-100 text-blue-800">5-Year Warranty</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Area Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vanderbijlpark Service Areas</h2>
            <p className="text-xl text-gray-600">Comprehensive coverage across the steel city and surrounding areas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Vanderbijlpark Central",
              "Vanderbijlpark SW",
              "Vanderbijlpark SE",
              "Bophelong",
              "Boipatong",
              "Sharpeville",
              "Sebokeng",
              "Evaton",
            ].map((area) => (
              <Card key={area} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <MapPin className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                  <h3 className="font-semibold text-gray-900">{area}</h3>
                  <p className="text-sm text-gray-600 mt-1">Same-day service</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Vanderbijlpark Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Pieter van der Merwe",
                location: "Vanderbijlpark Central",
                text: "Outstanding kitchen renovation! The team understood our steel city lifestyle and delivered industrial-grade quality.",
                rating: 5,
              },
              {
                name: "Sarah Mthembu",
                location: "Bophelong",
                text: "Emergency plumbing service was incredible. Fixed our burst pipe within 2 hours on a Sunday!",
                rating: 5,
              },
              {
                name: "Johan Pretorius",
                location: "Vanderbijlpark SW",
                text: "Built-in cupboards exceeded expectations. Professional service from quote to completion.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Steel City Quality?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get your free quote today for professional carpentry & plumbing services in Vanderbijlpark
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Call: 067 468 7400
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              <Wrench className="w-5 h-5 mr-2" />
              Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
