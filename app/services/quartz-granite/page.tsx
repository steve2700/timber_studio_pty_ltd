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
  Gem,
  Hammer,
  Palette,
  Wrench,
  Ruler,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Quartz & Granite Countertops Johannesburg 2025 | Kitchen & Bathroom Installation | 5-Star Rated",
  description:
    "Professional quartz & granite countertop installation Johannesburg. Kitchen countertops, bathroom vanities, island tops. 5-star service, 12-month warranty. Licensed installers. Free quotes. Call 067 601 4490.",
  keywords:
    "quartz countertops Johannesburg 2025, granite countertops Johannesburg, kitchen countertops Johannesburg, granite installation Sandton, quartz installation Randburg, bathroom countertops Johannesburg, granite kitchen island Johannesburg, quartz bathroom vanity Johannesburg, stone countertops Johannesburg South, granite specialists Johannesburg, quartz fabrication Johannesburg, kitchen renovation countertops Johannesburg, granite installation company Johannesburg, quartz stone installation Johannesburg, countertop replacement Johannesburg",
  openGraph: {
    title: "Quartz & Granite Countertops Johannesburg 2025 | Kitchen & Bathroom Installation",
    description:
      "Professional quartz & granite countertop installation Johannesburg. Kitchen countertops, bathroom vanities, and stone installations.",
    images: [{ url: "/granite-countertop.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/services/quartz-granite",
  },
}

export default function QuartzGranitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Quartz & Granite Countertops Johannesburg",
            description:
              "Professional quartz and granite countertop installation in Johannesburg. Kitchen countertops, bathroom vanities, and stone installations.",
            provider: {
              "@type": "LocalBusiness",
              name: "Granite Carpentry",
              telephone: "+27676014490",
              email: "info@granitecarpentry.co.za",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Johannesburg",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
            areaServed: ["Johannesburg", "Sandton", "Randburg", "Pretoria", "Centurion"],
            serviceType: "Quartz & Granite Installation",
            offers: {
              "@type": "Offer",
              priceCurrency: "ZAR",
              priceRange: "R8000-R25000",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-600/10 to-gray-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-stone-100 text-stone-800 border-stone-200">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  5-Star Rated Service
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Quartz & Granite
                  <span className="block text-stone-600">Countertops 2025</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your kitchen and bathroom with premium quartz and granite countertops. Professional
                  installation with precision templating and 12-month warranty.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-stone-600 hover:bg-stone-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 067 601 4490
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-stone-600 text-stone-600 hover:bg-stone-50 bg-transparent"
                >
                  Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-stone-600">47+</div>
                  <div className="text-sm text-gray-600">Installations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-stone-600">12</div>
                  <div className="text-sm text-gray-600">Month Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-stone-600">5.0</div>
                  <div className="text-sm text-gray-600">Star Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/granite-countertop.jpg"
                  alt="Professional quartz and granite countertop installation in Johannesburg"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-stone-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Precision Installation</div>
                    <div className="text-sm text-gray-600">Professional Templating</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quartz & Granite Installation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From kitchen countertops to bathroom vanities, we provide professional stone installation with precision
              templating and expert craftsmanship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Gem className="w-8 h-8" />,
                title: "Kitchen Countertops",
                description:
                  "Premium quartz and granite kitchen countertops with precision cutting and seamless installation.",
                features: ["Precision templating", "Seamless joints", "Undermount sinks", "Edge profiling"],
                image: "/granite-installation-Johannesburg.jpg",
              },
              {
                icon: <Hammer className="w-8 h-8" />,
                title: "Bathroom Vanities",
                description: "Custom bathroom vanity tops with integrated basins and waterproof sealing.",
                features: ["Integrated basins", "Waterproof sealing", "Custom sizing", "Modern finishes"],
                image: "/bathroom-vanity (1).webp",
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Kitchen Islands",
                description: "Stunning kitchen island tops with overhang support and premium stone selection.",
                features: ["Overhang support", "Premium stones", "Custom shapes", "Breakfast bars"],
                image: "/granitecarpentry.webp",
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Granite Installation",
                description: "Natural granite installation with professional sealing and lifetime beauty.",
                features: ["Natural stone", "Professional sealing", "Heat resistant", "Unique patterns"],
                image: "/granite-installation-sandton.jpg",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Quartz Installation",
                description: "Engineered quartz countertops with consistent patterns and non-porous surfaces.",
                features: ["Non-porous surface", "Consistent patterns", "Stain resistant", "Low maintenance"],
                image: "/kitchen-renovation-granite-installation-johannesburg.jpg",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Stone Restoration",
                description:
                  "Professional stone restoration, polishing, and sealing services for existing countertops.",
                features: ["Stone polishing", "Chip repair", "Re-sealing", "Color restoration"],
                image: "/modern-kitchen renovation.webp",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-stone-100 rounded-xl flex items-center justify-center text-stone-600 mb-4 group-hover:bg-stone-600 group-hover:text-white transition-colors">
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
                        <CheckCircle className="w-4 h-4 text-stone-600 mr-2 flex-shrink-0" />
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

      {/* Material Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Quartz vs Granite Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect stone for your project. Both materials offer unique benefits for different
              applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gem className="w-10 h-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Engineered Quartz</CardTitle>
                <CardDescription className="text-gray-600">
                  Modern engineered stone with consistent patterns
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/kitchen-renovation-granite-installation-johannesburg.jpg"
                    alt="Quartz countertop installation"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Benefits:</h4>
                  <ul className="space-y-2">
                    {[
                      "Non-porous surface",
                      "Consistent patterns",
                      "Stain resistant",
                      "Low maintenance",
                      "Wide color selection",
                      "Uniform thickness",
                    ].map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <div className="text-2xl font-bold text-blue-600">R450 - R850/m²</div>
                    <div className="text-sm text-gray-600">Including installation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gem className="w-10 h-10 text-amber-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Natural Granite</CardTitle>
                <CardDescription className="text-gray-600">
                  Natural stone with unique patterns and character
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/granite-installation-sandton.jpg"
                    alt="Granite countertop installation"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Benefits:</h4>
                  <ul className="space-y-2">
                    {[
                      "Natural beauty",
                      "Heat resistant",
                      "Unique patterns",
                      "Durable surface",
                      "Adds property value",
                      "Timeless appeal",
                    ].map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <div className="text-2xl font-bold text-amber-600">R350 - R650/m²</div>
                    <div className="text-sm text-gray-600">Including installation</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Professional Installation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our precision installation process ensures perfect fit and finish for your stone countertops.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Site Measurement",
                description: "Precise measurements and site assessment for accurate templating.",
                icon: <Ruler className="w-6 h-6" />,
              },
              {
                step: "02",
                title: "Stone Selection",
                description: "Choose from our extensive selection of premium quartz and granite slabs.",
                icon: <Palette className="w-6 h-6" />,
              },
              {
                step: "03",
                title: "Template Creation",
                description: "Create precise templates for perfect fit and seamless installation.",
                icon: <Hammer className="w-6 h-6" />,
              },
              {
                step: "04",
                title: "Fabrication",
                description: "Professional cutting, polishing, and edge profiling in our workshop.",
                icon: <Wrench className="w-6 h-6" />,
              },
              {
                step: "05",
                title: "Installation",
                description: "Expert installation with sealing and final quality inspection.",
                icon: <CheckCircle className="w-6 h-6" />,
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-stone-600 rounded-full flex items-center justify-center text-white mx-auto group-hover:bg-stone-700 transition-colors">
                    {process.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-stone-600 font-bold text-sm border-2 border-stone-600">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Stone Installation Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional quartz and granite installation throughout the Greater Johannesburg area.
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
                <MapPin className="w-8 h-8 text-stone-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{area}</h3>
                <p className="text-sm text-gray-600 mt-1">Quartz & Granite</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-stone-600 to-gray-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready for Premium Stone Countertops?</h2>
          <p className="text-xl text-stone-100 mb-8 max-w-2xl mx-auto">
            Transform your kitchen and bathroom with professional quartz and granite installation. Get your free
            consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-stone-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call 067 601 4490
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-stone-600 bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Quote
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="w-8 h-8 text-stone-200 mx-auto mb-3" />
              <div className="text-white font-semibold">Quick Installation</div>
              <div className="text-stone-100 text-sm">2-5 working days</div>
            </div>
            <div>
              <Shield className="w-8 h-8 text-stone-200 mx-auto mb-3" />
              <div className="text-white font-semibold">12-Month Warranty</div>
              <div className="text-stone-100 text-sm">Installation guarantee</div>
            </div>
            <div>
              <Star className="w-8 h-8 text-stone-200 mx-auto mb-3" />
              <div className="text-white font-semibold">5-Star Service</div>
              <div className="text-stone-100 text-sm">47+ satisfied customers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
