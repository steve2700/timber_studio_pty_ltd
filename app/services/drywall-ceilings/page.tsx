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
  Home,
  Hammer,
  Palette,
  Wrench,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Drywall & Ceilings Installation Johannesburg 2025 | Professional Drywalling Contractors | 5-Star Rated",
  description:
    "Professional drywall & ceiling installation Johannesburg. Gypsum board, suspended ceilings, partition walls. 5-star service, 24-month warranty. Licensed contractors. Free quotes. Call 067 601 4490.",
  keywords:
    "drywall installation Johannesburg 2025, ceiling installation Johannesburg, drywalling contractors Johannesburg, gypsum board installation Johannesburg, suspended ceilings Johannesburg, partition walls Johannesburg, drywall contractors Sandton, ceiling contractors Randburg, drywalling services Johannesburg South, gypsum ceiling installation Johannesburg, office partitions Johannesburg, residential drywalling Johannesburg, commercial drywalling Johannesburg, ceiling repair Johannesburg, drywall finishing Johannesburg",
  openGraph: {
    title: "Drywall & Ceilings Installation Johannesburg 2025 | Professional Drywalling Contractors",
    description:
      "Professional drywall & ceiling installation Johannesburg. Gypsum board, suspended ceilings, partition walls. 5-star service, 24-month warranty.",
    images: [{ url: "/drywall-contractor.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/services/drywall-ceilings",
  },
}

export default function DrywallCeilingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Drywall & Ceilings Installation Johannesburg",
            description:
              "Professional drywall and ceiling installation in Johannesburg. Gypsum board, suspended ceilings, and partition wall installations.",
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
            serviceType: "Drywall & Ceiling Installation",
            offers: {
              "@type": "Offer",
              priceCurrency: "ZAR",
              priceRange: "R180-R450",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  5-Star Rated Service
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Drywall & Ceilings
                  <span className="block text-blue-600">Installation 2025</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional drywall and ceiling installation services. Gypsum board, suspended ceilings, partition
                  walls with expert finishing and 24-month warranty.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 067 601 4490
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">47+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24</div>
                  <div className="text-sm text-gray-600">Month Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5.0</div>
                  <div className="text-sm text-gray-600">Star Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/drywall-contractor.jpg"
                  alt="Professional drywall and ceiling installation in Johannesburg"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Expert Finishing</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Drywall & Ceiling Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential partition walls to commercial suspended ceilings, we provide comprehensive drywall and
              ceiling solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="w-8 h-8" />,
                title: "Gypsum Board Installation",
                description: "Professional gypsum board installation with seamless joints and smooth finishing.",
                features: ["Seamless joints", "Smooth finishing", "Quality materials", "Expert installation"],
                image: "/drywall-contractor.jpg",
              },
              {
                icon: <Hammer className="w-8 h-8" />,
                title: "Suspended Ceilings",
                description: "Modern suspended ceiling systems for offices, retail spaces, and commercial buildings.",
                features: ["Grid systems", "Acoustic tiles", "LED integration", "Easy access"],
                image: "/drywalling-installers.webp",
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Partition Walls",
                description: "Custom partition walls for offices, homes, and commercial spaces with sound insulation.",
                features: ["Sound insulation", "Custom designs", "Quick installation", "Cost effective"],
                image: "/drywall-contractor.jpg",
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Ceiling Repairs",
                description:
                  "Professional ceiling repair services including crack repair and water damage restoration.",
                features: ["Crack repair", "Water damage", "Texture matching", "Paint preparation"],
                image: "/drywalling-installers.webp",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Drywall Finishing",
                description: "Expert drywall finishing with multiple coat applications and smooth surface preparation.",
                features: ["Multiple coats", "Smooth surfaces", "Paint ready", "Professional finish"],
                image: "/drywall-contractor.jpg",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Commercial Drywalling",
                description: "Large-scale commercial drywalling projects with project management and quality control.",
                features: ["Project management", "Quality control", "Timeline adherence", "Commercial grade"],
                image: "/drywalling-installers.webp",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
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

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Drywall & Ceiling Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive pricing for professional drywall and ceiling installation. All prices include materials and
              labor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Gypsum Board",
                price: "R180 - R280/m²",
                description: "Standard gypsum board installation",
                features: ["12.5mm gypsum board", "Standard finishing", "Joint compound", "Basic installation"],
                image: "/drywall-contractor.jpg",
              },
              {
                title: "Suspended Ceiling",
                price: "R320 - R450/m²",
                description: "Complete suspended ceiling system",
                features: ["Grid system", "Acoustic tiles", "Professional installation", "Clean finish"],
                image: "/drywalling-installers.webp",
              },
              {
                title: "Partition Walls",
                price: "R250 - R380/m²",
                description: "Complete partition wall construction",
                features: ["Metal framework", "Gypsum boarding", "Insulation included", "Paint ready finish"],
                image: "/drywall-contractor.jpg",
              },
              {
                title: "Premium Finishing",
                price: "R350 - R480/m²",
                description: "High-end finishing with multiple coats",
                features: ["Multiple coat finish", "Smooth surfaces", "Premium materials", "Paint ready"],
                image: "/drywalling-installers.webp",
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={300}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <div className="text-2xl font-bold text-blue-600 mt-2">{service.price}</div>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
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
              Our systematic approach ensures quality drywall and ceiling installation with professional finishing.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Site Assessment",
                description: "Detailed assessment of the installation area and structural requirements.",
                icon: <MapPin className="w-6 h-6" />,
              },
              {
                step: "02",
                title: "Framework Installation",
                description: "Professional metal framework installation with precise measurements.",
                icon: <Hammer className="w-6 h-6" />,
              },
              {
                step: "03",
                title: "Board Installation",
                description: "Gypsum board installation with proper spacing and secure fixing.",
                icon: <Home className="w-6 h-6" />,
              },
              {
                step: "04",
                title: "Joint Treatment",
                description: "Professional joint treatment with compound application and sanding.",
                icon: <Wrench className="w-6 h-6" />,
              },
              {
                step: "05",
                title: "Final Finishing",
                description: "Final finishing with smooth surfaces ready for painting or decoration.",
                icon: <CheckCircle className="w-6 h-6" />,
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto group-hover:bg-blue-700 transition-colors">
                    {process.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-sm border-2 border-blue-600">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Drywall Installation Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional drywall and ceiling installation throughout the Greater Johannesburg area.
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
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{area}</h3>
                <p className="text-sm text-gray-600 mt-1">Drywall & Ceilings</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for Professional Drywall Installation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your spaces with quality drywall and ceiling installation. Get your free consultation and quote
            today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call 067 601 4490
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Quote
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="w-8 h-8 text-blue-200 mx-auto mb-3" />
              <div className="text-white font-semibold">Quick Installation</div>
              <div className="text-blue-100 text-sm">3-7 working days</div>
            </div>
            <div>
              <Shield className="w-8 h-8 text-blue-200 mx-auto mb-3" />
              <div className="text-white font-semibold">24-Month Warranty</div>
              <div className="text-blue-100 text-sm">Full coverage included</div>
            </div>
            <div>
              <Star className="w-8 h-8 text-blue-200 mx-auto mb-3" />
              <div className="text-white font-semibold">5-Star Service</div>
              <div className="text-blue-100 text-sm">47+ satisfied customers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
