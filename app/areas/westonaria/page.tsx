import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, Star, Wrench, Hammer, Droplets } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Carpenter & Plumber Westonaria | West Rand Mining Experts | R450/hr",
  description:
    "Expert carpenter & plumber in Westonaria. Heavy-duty kitchen renovations, built-in cupboards, granite installation & industrial plumbing. West Rand mining specialists since 2010.",
  keywords:
    "carpenter Westonaria, plumber Westonaria, kitchen renovations Westonaria, built-in cupboards Westonaria, granite installation Westonaria, emergency plumbing Westonaria, west rand carpenter, mining town carpenter",
  openGraph: {
    title: "Professional Carpenter & Plumber Westonaria | West Rand Mining Experts",
    description: "Expert carpenter & plumber in Westonaria. Heavy-duty solutions for mining community needs.",
    url: "https://granitecarpentry.co.za/areas/westonaria",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
}

export default function WestonariaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">
              <MapPin className="w-4 h-4 mr-2" />
              Westonaria West Rand Mining Town
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Carpenter & Plumber
              <span className="block text-orange-400">Westonaria</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100">
              Heavy-duty solutions for the West Rand mining community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 067 468 7400
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-900 bg-transparent"
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
              West Rand Carpentry & Plumbing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving Westonaria with industrial-strength solutions for mining community needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Carpentry Services */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-amber-900">
                  <Hammer className="w-6 h-6 mr-2 text-orange-500" />
                  Heavy-Duty Carpentry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Industrial Kitchen Renovations</li>
                  <li>• Heavy-Duty Built-in Cupboards</li>
                  <li>• Mining-Grade Granite Installation</li>
                  <li>• Reinforced Wardrobes</li>
                  <li>• Industrial Decking & Flooring</li>
                  <li>• Heavy-Duty Drywall & Ceilings</li>
                </ul>
                <Badge className="mt-4 bg-amber-100 text-amber-800">From R400/hour</Badge>
              </CardContent>
            </Card>

            {/* Plumbing Services */}
            <Card className="hover:shadow-lg transition-shadow border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center text-amber-900">
                  <Droplets className="w-6 h-6 mr-2 text-orange-500" />
                  Industrial Plumbing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Emergency Industrial Repairs</li>
                  <li>• Heavy-Duty Bathroom Systems</li>
                  <li>• Industrial Kitchen Plumbing</li>
                  <li>• High-Pressure Geyser Systems</li>
                  <li>• Mining-Grade Pipe Systems</li>
                  <li>• Industrial Drain Solutions</li>
                </ul>
                <Badge className="mt-4 bg-orange-100 text-orange-800">From R450/hour</Badge>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-amber-900">
                  <Star className="w-6 h-6 mr-2 text-orange-500" />
                  Mining Town Specialists
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 15+ Years Mining Experience</li>
                  <li>• Industrial-Strength Solutions</li>
                  <li>• Mining Safety Certified</li>
                  <li>• 24/7 Emergency Response</li>
                  <li>• Heavy-Duty Warranties</li>
                  <li>• Community Focused</li>
                </ul>
                <Badge className="mt-4 bg-blue-100 text-blue-800">Industrial Warranty</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Area Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Westonaria Service Areas</h2>
            <p className="text-xl text-gray-600">Comprehensive coverage across the West Rand mining region</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Westonaria Central",
              "Bekkersdal",
              "Simunye",
              "Venterspost",
              "Libanon",
              "Zuurbekom",
              "West Village",
              "Randfontein Border",
            ].map((area) => (
              <Card key={area} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <MapPin className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                  <h3 className="font-semibold text-gray-900">{area}</h3>
                  <p className="text-sm text-gray-600 mt-1">Emergency service</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Westonaria Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Thabo Mthembu",
                location: "Westonaria Central",
                text: "Heavy-duty kitchen renovation perfect for our mining family lifestyle. Built to last generations!",
                rating: 5,
              },
              {
                name: "Kobus Steyn",
                location: "Bekkersdal",
                text: "Industrial plumbing service that handles our high-pressure needs. Reliable and professional.",
                rating: 5,
              },
              {
                name: "Nomsa Dlamini",
                location: "Simunye",
                text: "Built-in cupboards that can handle anything! Perfect for our mining community needs.",
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
      <section className="py-16 bg-gradient-to-r from-amber-900 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Industrial-Strength Quality?</h2>
          <p className="text-xl mb-8 text-amber-100">
            Get your free quote today for heavy-duty carpentry & plumbing services in Westonaria
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Call: 067 468 7400
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-900 bg-transparent"
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
