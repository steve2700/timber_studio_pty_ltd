import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, Star, Wrench, Hammer, Droplets } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Carpenter & Plumber Vereeniging | River City Experts | R380/hr",
  description:
    "Expert carpenter & plumber in Vereeniging. Heritage kitchen renovations, built-in cupboards, granite installation & reliable plumbing. River city specialists since 2010.",
  keywords:
    "carpenter Vereeniging, plumber Vereeniging, kitchen renovations Vereeniging, built-in cupboards Vereeniging, granite installation Vereeniging, emergency plumbing Vereeniging, river city carpenter",
  openGraph: {
    title: "Professional Carpenter & Plumber Vereeniging | River City Experts",
    description: "Expert carpenter & plumber in Vereeniging. Heritage craftsmanship with modern reliability.",
    url: "https://granitecarpentry.co.za/areas/vereeniging",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
}

export default function VereenigingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">
              <MapPin className="w-4 h-4 mr-2" />
              Vereeniging River City Heritage
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Carpenter & Plumber
              <span className="block text-orange-400">Vereeniging</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Heritage craftsmanship meets modern reliability in the river city
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 067 468 7400
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-900 bg-transparent"
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
              River City Carpentry & Plumbing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving Vereeniging with traditional craftsmanship and modern techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Carpentry Services */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-green-900">
                  <Hammer className="w-6 h-6 mr-2 text-orange-500" />
                  Heritage Carpentry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Traditional Kitchen Renovations</li>
                  <li>• Custom Built-in Cupboards</li>
                  <li>• Granite & Quartz Installation</li>
                  <li>• Heritage Wardrobes</li>
                  <li>• River Wood Decking</li>
                  <li>• Classic Drywall & Ceilings</li>
                </ul>
                <Badge className="mt-4 bg-green-100 text-green-800">From R350/hour</Badge>
              </CardContent>
            </Card>

            {/* Plumbing Services */}
            <Card className="hover:shadow-lg transition-shadow border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-900">
                  <Droplets className="w-6 h-6 mr-2 text-orange-500" />
                  Reliable Plumbing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Emergency Plumbing Repairs</li>
                  <li>• Heritage Bathroom Renovations</li>
                  <li>• Kitchen Plumbing Systems</li>
                  <li>• Geyser Installation & Repair</li>
                  <li>• Pipe Repairs & Replacements</li>
                  <li>• Drain Cleaning Services</li>
                </ul>
                <Badge className="mt-4 bg-orange-100 text-orange-800">From R380/hour</Badge>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-green-900">
                  <Star className="w-6 h-6 mr-2 text-orange-500" />
                  River City Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 15+ Years Experience</li>
                  <li>• Heritage Craftsmanship</li>
                  <li>• Licensed & Insured</li>
                  <li>• Community Focused</li>
                  <li>• Free Consultations</li>
                  <li>• Traditional Values</li>
                </ul>
                <Badge className="mt-4 bg-blue-100 text-blue-800">Lifetime Guarantee</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Area Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vereeniging Service Areas</h2>
            <p className="text-xl text-gray-600">
              Comprehensive coverage across the river city and surrounding communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Vereeniging Central",
              "Vereeniging North",
              "Vereeniging South",
              "Three Rivers",
              "Peacehaven",
              "Duncanville",
              "Riverside",
              "Arcon Park",
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Vereeniging Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Oosthuizen",
                location: "Vereeniging Central",
                text: "Beautiful heritage kitchen renovation! They respected our home's character while adding modern functionality.",
                rating: 5,
              },
              {
                name: "David Molefe",
                location: "Three Rivers",
                text: "Reliable plumbing service with honest pricing. Fixed our bathroom issues professionally and quickly.",
                rating: 5,
              },
              {
                name: "Anna van Wyk",
                location: "Peacehaven",
                text: "Traditional craftsmanship at its finest. Our built-in cupboards are works of art!",
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
      <section className="py-16 bg-gradient-to-r from-green-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Heritage Quality?</h2>
          <p className="text-xl mb-8 text-green-100">
            Get your free quote today for traditional carpentry & reliable plumbing in Vereeniging
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Call: 067 468 7400
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-900 bg-transparent"
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
