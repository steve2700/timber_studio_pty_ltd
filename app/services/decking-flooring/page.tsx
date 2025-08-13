import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Star,
  Clock,
  Shield,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  TreePine,
  Hammer,
  Palette,
  Wrench,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Decking & Flooring Installation Johannesburg 2025 | Wooden Decks & Laminate Floors | 5-Star Rated",
  description:
    "Professional decking & flooring installation Johannesburg. Wooden decks, laminate flooring, vinyl floors. 5-star service, 24-month warranty. Licensed installers. Free quotes. Call 067 601 4490.",
  keywords:
    "decking installation Johannesburg 2025, wooden decks Johannesburg, laminate flooring Johannesburg, vinyl flooring Johannesburg, deck installation Sandton, flooring installation Randburg, outdoor decking Johannesburg South, composite decking Johannesburg, hardwood flooring Johannesburg, deck builders Johannesburg, flooring contractors Johannesburg, wooden deck construction Johannesburg, laminate floor installation Johannesburg, deck repair Johannesburg, flooring renovation Johannesburg",
  openGraph: {
    title: "Decking & Flooring Installation Johannesburg 2025 | Wooden Decks & Laminate Floors",
    description:
      "Professional decking & flooring installation Johannesburg. Wooden decks, laminate flooring, vinyl floors. 5-star service, 24-month warranty.",
    images: [{ url: "/beautiful-decking.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/services/decking-flooring",
  },
}

export default function DeckingFlooringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Decking & Flooring Installation Johannesburg",
            description:
              "Professional decking and flooring installation in Johannesburg. Wooden decks, laminate flooring, and vinyl floor installations.",
            provider: {
              "@type": "LocalBusiness",
              name: "Granite Carpentry",
              telephone: "+27676014490",
              email: "granitecarpentry5@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
            areaServed: ["Johannesburg", "Sandton", "Randburg", "Pretoria", "Centurion"],
            serviceType: "Decking & Flooring Installation",
            offers: {
              "@type": "Offer",
              priceCurrency: "ZAR",
              priceRange: "R350-R1200",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  5-Star Rated Service
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Decking & Flooring
                  <span className="block text-green-600">Installation 2025</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your outdoor and indoor spaces with professional decking and flooring installation. Wooden
                  decks, laminate floors, and vinyl installations with 24-month warranty.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 067 601 4490
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">47+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">24</div>
                  <div className="text-sm text-gray-600">Month Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">5.0</div>
                  <div className="text-sm text-gray-600">Star Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/beautiful-decking.jpg"
                  alt="Professional decking and flooring installation in Johannesburg"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Quality Materials</div>
                    <div className="text-sm text-gray-600">Professional Installation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Decking & Flooring Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From outdoor wooden decks to indoor laminate flooring, we provide comprehensive installation services for
              all your flooring needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TreePine className="w-8 h-8" />,
                title: "Wooden Decking",
                description: "Premium wooden deck installation with treated timber and professional finishing.",
                features: ["Treated timber", "Waterproof sealing", "Custom designs", "Balustrade options"],
                image: "/beautiful-decking.jpg",
              },
              {
                icon: <Hammer className="w-8 h-8" />,
                title: "Laminate Flooring",
                description:
                  "High-quality laminate flooring installation with moisture barriers and precision fitting.",
                features: ["Moisture barriers", "Precision fitting", "Underlay included", "Skirting installation"],
                image: "/decking-flooring.jpg",
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Vinyl Flooring",
                description: "Durable vinyl flooring installation for kitchens, bathrooms, and high-traffic areas.",
                features: ["Waterproof options", "Easy maintenance", "Wide selection", "Professional fitting"],
                image: "/carpenter-installing-deck-joists-johannesburg.jpg",
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Composite Decking",
                description: "Low-maintenance composite decking with long-lasting durability and modern aesthetics.",
                features: ["Low maintenance", "Weather resistant", "Modern aesthetics", "Eco-friendly options"],
                image: "/beautiful-decking.jpg",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Hardwood Flooring",
                description: "Premium hardwood flooring installation with sanding, staining, and protective finishes.",
                features: ["Premium hardwood", "Professional sanding", "Custom staining", "Protective finishes"],
                image: "/decking-flooring.jpg",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Floor Restoration",
                description: "Professional floor restoration services including sanding, refinishing, and repair work.",
                features: ["Floor sanding", "Refinishing", "Repair work", "Protective coatings"],
                image: "/carpenter-installing-deck-joists-johannesburg.jpg",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Flooring Material Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our extensive range of quality flooring materials, each with unique benefits for different
              applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Laminate Flooring",
                price: "R350 - R650/m²",
                description: "Durable and affordable with wood-look finishes",
                features: ["Water resistant", "Easy installation", "Wide selection", "Cost effective"],
                image: "/decking-flooring.jpg",
              },
              {
                title: "Vinyl Flooring",
                price: "R280 - R550/m²",
                description: "Waterproof and versatile for any room",
                features: ["100% waterproof", "Soft underfoot", "Easy maintenance", "Realistic textures"],
                image: "/decking-flooring.jpg",
              },
              {
                title: "Wooden Decking",
                price: "R450 - R850/m²",
                description: "Natural beauty for outdoor spaces",
                features: ["Natural timber", "Weather treated", "Custom designs", "Long lasting"],
                image: "/beautiful-decking.jpg",
              },
              {
                title: "Composite Decking",
                price: "R650 - R1200/m²",
                description: "Low maintenance alternative to wood",
                features: ["No maintenance", "Weather proof", "Eco friendly", "Modern look"],
                image: "/beautiful-decking.jpg",
              },
            ].map((material, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={material.image || "/placeholder.svg"}
                      alt={material.title}
                      width={300}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{material.title}</CardTitle>
                  <div className="text-2xl font-bold text-green-600 mt-2">{material.price}</div>
                  <CardDescription className="text-gray-600">{material.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {material.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Professional Installation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures quality installation with attention to detail and long-lasting results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Site Assessment",
                description: "Thorough assessment of the installation area and subfloor preparation requirements.",
                icon: <MapPin className="w-6 h-6" />,
              },
              {
                step: "02",
                title: "Material Selection",
                description: "Choose from our extensive range of quality flooring materials and finishes.",
                icon: <Palette className="w-6 h-6" />,
              },
              {
                step: "03",
                title: "Preparation Work",
                description: "Professional subfloor preparation, leveling, and moisture barrier installation.",
                icon: <Hammer className="w-6 h-6" />,
              },
              {
                step: "04",
                title: "Expert Installation",
                description: "Precision installation with quality finishing and final inspection.",
                icon: <CheckCircle className="w-6 h-6" />,
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white mx-auto group-hover:bg-green-700 transition-colors">
                    {process.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-600 font-bold text-sm border-2 border-green-600">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Decking & Flooring Installation Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional decking and flooring installation throughout the Greater Johannesburg area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Johannesburg South",
              "Sandton",
              "Randburg",
              "Pretoria",
              "Centurion",
              "Midrand",
              "Edenvale",
              "Kempton Park",
              "Boksburg",
              "Roodepoort",
              "Fourways",
              "Alberton",
            ].map((area, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{area}</h3>
                <p className="text-sm text-gray-600 mt-1">Decking & Flooring</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for Professional Flooring Installation?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Transform your spaces with quality decking and flooring. Get your free consultation and quote today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call 067 601 4490
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Quote
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="w-8 h-8 text-green-200 mx-auto mb-3" />
              <div className="text-white font-semibold">Quick Installation</div>
              <div className="text-green-100 text-sm">5-10 working days</div>
            </div>
            <div>
              <Shield className="w-8 h-8 text-green-200 mx-auto mb-3" />
              <div className="text-white font-semibold">24-Month Warranty</div>
              <div className="text-green-100 text-sm">Full coverage included</div>
            </div>
            <div>
              <Star className="w-8 h-8 text-green-200 mx-auto mb-3" />
              <div className="text-white font-semibold">5-Star Service</div>
              <div className="text-green-100 text-sm">47+ satisfied customers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
