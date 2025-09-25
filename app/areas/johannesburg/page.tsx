import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, Star, Wrench, Hammer, Droplets, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Carpenter & Plumber Johannesburg | City of Gold Experts | R480/hr",
  description:
    "Expert carpenter & plumber in Johannesburg CBD & surrounds. Premium kitchen renovations, built-in cupboards, granite installation & executive plumbing. City specialists since 2010.",
  keywords:
    "carpenter Johannesburg, plumber Johannesburg, kitchen renovations Johannesburg, built-in cupboards Johannesburg, granite installation Johannesburg, emergency plumbing Johannesburg, city carpenter, CBD carpenter",
  openGraph: {
    title: "Professional Carpenter & Plumber Johannesburg | City of Gold Experts",
    description: "Expert carpenter & plumber in Johannesburg. Premium city services with executive quality.",
    url: "https://granitecarpentry.co.za/areas/johannesburg",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
}

export default function JohannesburgPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-900 to-amber-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">
              <Building2 className="w-4 h-4 mr-2" />
              Johannesburg City of Gold
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Carpenter & Plumber
              <span className="block text-orange-400">Johannesburg</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-100">
              Premium city services with executive quality for Johannesburg's urban lifestyle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 067 468 7400
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-yellow-900 bg-transparent"
              >
                <Clock className="w-5 h-5 mr-2" />
                24/7 Executive Service
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
              City of Gold Carpentry & Plumbing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving Johannesburg with premium urban solutions and executive-level craftsmanship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Carpentry Services */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-900">
                  <Hammer className="w-6 h-6 mr-2 text-orange-500" />
                  Executive Carpentry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Premium Kitchen Renovations</li>
                  <li>• Executive Built-in Cupboards</li>
                  <li>• Luxury Granite & Quartz</li>
                  <li>• Designer Wardrobes</li>
                  <li>• Urban Decking Solutions</li>
                  <li>• Modern Drywall & Ceilings</li>
                </ul>
                <Badge className="mt-4 bg-yellow-100 text-yellow-800">From R450/hour</Badge>
              </CardContent>
            </Card>

            {/* Plumbing Services */}
            <Card className="hover:shadow-lg transition-shadow border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-900">
                  <Droplets className="w-6 h-6 mr-2 text-orange-500" />
                  Executive Plumbing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 24/7 Emergency Plumbing</li>
                  <li>• Luxury Bathroom Renovations</li>
                  <li>• Executive Kitchen Plumbing</li>
                  <li>• Premium Geyser Systems</li>
                  <li>• High-Rise Pipe Solutions</li>
                  <li>• Executive Drain Services</li>
                </ul>
                <Badge className="mt-4 bg-orange-100 text-orange-800">From R480/hour</Badge>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-900">
                  <Star className="w-6 h-6 mr-2 text-orange-500" />
                  City Specialists
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 15+ Years City Experience</li>
                  <li>• Executive Quality Standards</li>
                  <li>• High-Rise Certified</li>
                  <li>• 24/7 Urban Response</li>
                  <li>• Premium Warranties</li>
                  <li>• City Council Approved</li>
                </ul>
                <Badge className="mt-4 bg-blue-100 text-blue-800">Executive Guarantee</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Area Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Johannesburg Service Areas</h2>
            <p className="text-xl text-gray-600">
              Comprehensive coverage across the City of Gold and metropolitan areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Johannesburg CBD",
              "Braamfontein",
              "Newtown",
              "Marshalltown",
              "Fordsburg",
              "Doornfontein",
              "Jeppestown",
              "City Deep",
              "Turffontein",
              "La Rochelle",
              "Southdale",
              "Moffat View",
            ].map((area) => (
              <Card key={area} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <MapPin className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                  <h3 className="font-semibold text-gray-900">{area}</h3>
                  <p className="text-sm text-gray-600 mt-1">Priority service</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Johannesburg Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Thompson",
                location: "Johannesburg CBD",
                text: "Executive-level kitchen renovation in our city apartment. Professional service that exceeded expectations!",
                rating: 5,
              },
              {
                name: "Priya Patel",
                location: "Braamfontein",
                text: "24/7 plumbing service saved our business! Quick response and premium quality work.",
                rating: 5,
              },
              {
                name: "James van der Walt",
                location: "Marshalltown",
                text: "Luxury built-in cupboards that transformed our city loft. True craftsmanship!",
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
      <section className="py-16 bg-gradient-to-r from-yellow-900 to-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Executive Quality?</h2>
          <p className="text-xl mb-8 text-yellow-100">
            Get your free quote today for premium carpentry & plumbing services in Johannesburg
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Call: 067 468 7400
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-yellow-900 bg-transparent"
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
