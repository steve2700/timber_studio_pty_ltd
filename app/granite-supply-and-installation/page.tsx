import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Package } from "lucide-react"

export const metadata: Metadata = {
  title: "Granite Supply & Installation Johannesburg | Premium Stone Suppliers 2025",
  description:
    "Complete granite supply and installation services in Johannesburg. Import & local granite slabs, expert fabrication, professional installation from R900/m². Free quotes & delivery available.",
  keywords:
    "granite supply johannesburg, granite installation gauteng, granite suppliers sandton, stone supply pretoria, granite slabs centurion, kitchen granite midrand, granite fabrication randburg",
  openGraph: {
    title: "Granite Supply & Installation Johannesburg | Premium Stone Suppliers",
    description:
      "Complete granite supply and installation services. Premium imported and local granite slabs with expert fabrication and professional installation.",
    url: "https://granitecarpentry.co.za/granite-supply-and-installation",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/granite-supply-and-installation",
  },
}

export default function GraniteSupplyAndInstallationPage() {
  const graniteTypes = [
    {
      name: "Imported Granite",
      varieties: "Brazilian, Italian, Indian, Spanish origins",
      price: "From R1,500/m²",
      features: ["Exotic patterns", "Premium quality", "Wide color range", "Unique veining"],
    },
    {
      name: "Local Granite",
      varieties: "South African quarries - Rustenburg, Mpumalanga",
      price: "From R900/m²",
      features: ["Cost-effective", "Quality materials", "Supporting local", "Fast delivery"],
    },
    {
      name: "Commercial Grade",
      varieties: "High-traffic durability for businesses",
      price: "From R1,200/m²",
      features: ["Heavy-duty", "Stain-resistant", "Heat-resistant", "Low maintenance"],
    },
    {
      name: "Premium Exotics",
      varieties: "Rare colors and patterns",
      price: "From R2,500/m²",
      features: ["Luxury finishes", "One-of-a-kind", "Statement pieces", "Designer selection"],
    },
  ]

  const servicePackages = [
    {
      name: "Supply Only",
      description: "Granite slabs delivered to your location",
      price: "From R900/m²",
      features: [
        "Premium granite slabs",
        "Quality inspection",
        "Delivery to site",
        "Material warranty",
        "Technical specifications",
      ],
    },
    {
      name: "Supply & Fabrication",
      description: "Cut and polished to your specifications",
      price: "From R1,200/m²",
      features: [
        "Professional templating",
        "CNC cutting precision",
        "Edge profiling options",
        "Polishing & sealing",
        "Quality control checks",
      ],
    },
    {
      name: "Complete Installation",
      description: "End-to-end granite solution",
      price: "From R1,800/m²",
      features: [
        "Site measurement",
        "Custom fabrication",
        "Professional installation",
        "Plumbing adjustments",
        "Sealing & finishing",
        "24-month warranty",
      ],
    },
  ]

  const popularGraniteColors = [
    { name: "Black Galaxy", origin: "India", style: "Modern luxury" },
    { name: "Absolute Black", origin: "India", style: "Contemporary elegance" },
    { name: "Kashmir White", origin: "India", style: "Bright & spacious" },
    { name: "Raw Silk", origin: "Brazil", style: "Neutral sophistication" },
    { name: "Nero Impala", origin: "South Africa", style: "Local premium" },
    { name: "Tropic Brown", origin: "Brazil", style: "Warm traditional" },
    { name: "Santa Cecilia", origin: "Brazil", style: "Golden elegance" },
    { name: "Uba Tuba", origin: "Brazil", style: "Dark & dramatic" },
  ]

  const areas = [
    { name: "Johannesburg", href: "/areas/johannesburg" },
    { name: "Johannesburg South", href: "/areas/johannesburg-south" },
    { name: "Sandton", href: "/areas/sandton" },
    { name: "Randburg", href: "/areas/randburg" },
    { name: "Pretoria", href: "/areas/pretoria" },
    { name: "Centurion", href: "/areas/centurion" },
    { name: "Midrand", href: "/areas/midrand" },
    { name: "Kempton Park", href: "/areas/kempton-park" },
    { name: "Roodepoort", href: "/areas/roodepoort" },
    { name: "Fourways", href: "/areas/fourways" },
    { name: "Edenvale", href: "/areas/edenvale" },
    { name: "Boksburg", href: "/areas/boksburg" },
    { name: "Alberton", href: "/areas/alberton" },
    { name: "Benoni", href: "/areas/benoni" },
    { name: "Germiston", href: "/areas/germiston" },
    { name: "Springs", href: "/areas/springs" },
    { name: "Vanderbijlpark", href: "/areas/vanderbijlpark" },
    { name: "Vereeniging", href: "/areas/vereeniging" },
    { name: "Nigel", href: "/areas/nigel" },
    { name: "Heidelberg", href: "/areas/heidelberg" },
    { name: "Carletonville", href: "/areas/carletonville" },
    { name: "Krugersdorp", href: "/areas/krugersdorp" },
    { name: "Westonaria", href: "/areas/westonaria" },
    { name: "Bedfordview", href: "/areas/bedfordview" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="bg-amber-600 text-white px-4 py-2 mb-6">
              Complete Granite Supply & Installation Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Granite Supply & Installation Services Johannesburg
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Johannesburg's most trusted granite supply and installation specialists. We source premium imported and
              local granite slabs, provide expert fabrication services, and deliver professional installation for
              residential and commercial projects across Gauteng. From R900/m² with 24-month warranty.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                <a href="tel:+27676014490">Call 067 601 4490</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Premium Granite Suppliers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Expert Fabrication Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Professional Installation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>24-Month Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Granite Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Premium Granite Selection</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Extensive Granite Slab Collection - Imported & Local
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We supply premium granite from trusted quarries worldwide and locally. Choose from hundreds of colors,
              patterns, and finishes to match your design vision and budget.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {graniteTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Package className="h-10 w-10 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{type.name}</h3>
                  <p className="text-sm text-slate-600 mb-3">{type.varieties}</p>
                  <p className="text-2xl font-bold text-amber-600 mb-4">{type.price}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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

      {/* Service Packages Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Flexible Granite Service Packages</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the service level that fits your project needs - from supply-only to complete turnkey installation.
              All packages include quality assurance and professional service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-shadow ${
                  index === 2 ? "border-2 border-amber-600 relative" : ""
                }`}
              >
                {index === 2 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-amber-600 text-white px-4 py-2">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <p className="text-slate-600 mb-4">{pkg.description}</p>
                  <p className="text-3xl font-bold text-amber-600 mb-6">{pkg.price}</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6 bg-amber-600 hover:bg-amber-700">
                    <Link href="/contact">Select Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Granite Colors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Popular Granite Colors & Patterns 2025
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trending granite selections for Johannesburg homes and businesses. Each slab features unique natural
              patterns making your installation truly one-of-a-kind.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularGraniteColors.map((granite, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-32 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg mb-4"></div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{granite.name}</h3>
                  <p className="text-sm text-slate-600 mb-1">Origin: {granite.origin}</p>
                  <p className="text-sm text-amber-600 font-medium">{granite.style}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                View Full Granite Catalog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Complete Granite Supply & Installation Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From initial consultation to final installation - we manage every step with precision, professionalism,
              and attention to detail ensuring flawless results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <span className="text-xl font-bold text-amber-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Consultation & Selection</h3>
                <p className="text-slate-600">
                  Free in-home consultation to discuss your requirements, budget, and design preferences. View samples
                  and select your perfect granite from our extensive collection.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <span className="text-xl font-bold text-amber-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Precise Templating</h3>
                <p className="text-slate-600">
                  Professional measurement and templating of your space using laser technology for millimeter-perfect
                  accuracy ensuring seamless installation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <span className="text-xl font-bold text-amber-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Fabrication</h3>
                <p className="text-slate-600">
                  CNC cutting, edge profiling, and polishing in our workshop. Quality inspection at every stage to
                  ensure premium finishing.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <span className="text-xl font-bold text-amber-600">4</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Secure Delivery</h3>
                <p className="text-slate-600">
                  Protected delivery of fabricated granite to your location using specialized vehicles and handling
                  equipment to prevent damage.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <span className="text-xl font-bold text-amber-600">5</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Installation</h3>
                <p className="text-slate-600">
                  Skilled installers complete the fitting with precision leveling, secure mounting, and seamless joint
                  finishing for a flawless result.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                  <span className="text-xl font-bold text-amber-600">6</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Sealing & Finishing</h3>
                <p className="text-slate-600">
                  Application of premium sealant for stain protection, plumbing installation, thorough cleanup, and
                  final quality inspection with care instructions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Granite Supply & Installation Throughout Gauteng
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We provide complete granite supply and installation services across all major areas in Johannesburg,
              Pretoria, and Gauteng Province. Free delivery on orders over R15,000.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="group p-4 rounded-lg border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all"
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-amber-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-900 group-hover:text-amber-700">{area.name}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-slate-600 mb-4">
              Don't see your area? We serve all of Gauteng Province. Contact us for a custom quote.
            </p>
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Request Service in Your Area</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Granite Supply & Installation FAQs</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  What's the difference between imported and local granite?
                </h3>
                <p className="text-slate-600">
                  Imported granite typically offers more exotic colors and unique patterns from Brazil, Italy, and
                  India, with prices from R1,500/m². Local South African granite provides excellent quality at
                  competitive prices (from R900/m²), supporting local quarries with faster delivery times.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  How long does the complete supply and installation process take?
                </h3>
                <p className="text-slate-600">
                  From selection to final installation typically takes 10-14 working days. This includes templating (1
                  day), fabrication (5-7 days), and installation (1-2 days). Rush services available for urgent projects
                  at additional cost.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Do you offer delivery services for granite slabs?
                </h3>
                <p className="text-slate-600">
                  Yes, we provide secure delivery throughout Gauteng using specialized vehicles with protective padding.
                  Free delivery on orders over R15,000. Standard delivery fee of R800-R1,500 depending on distance and
                  slab size for smaller orders.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  What edge profiles are available for granite countertops?
                </h3>
                <p className="text-slate-600">
                  We offer 10+ edge profiles: standard straight edge, beveled, bullnose, ogee, waterfall, dupont, triple
                  pencil, and custom profiles. Edge profiling is included in fabrication pricing. Premium edges like
                  ogee may have additional costs of R150-R250 per linear meter.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Can I visit your showroom to view granite samples?
                </h3>
                <p className="text-slate-600">
                  Yes, we welcome showroom visits by appointment. We also offer free in-home consultations where we
                  bring samples directly to your property, allowing you to see how different granites look in your
                  actual lighting conditions. Call 067 601 4490 to schedule.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  What warranty do you provide on granite installation?
                </h3>
                <p className="text-slate-600">
                  We provide a comprehensive 24-month warranty on workmanship and installation, plus a 12-month warranty
                  on granite materials against manufacturing defects. This covers issues like cracking from improper
                  installation, loose fittings, or sealant failure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Do you supply granite for commercial projects?
                </h3>
                <p className="text-slate-600">
                  Absolutely. We supply and install granite for restaurants, hotels, office buildings, retail stores,
                  and large residential developments. We offer volume discounts, flexible scheduling, and dedicated
                  project management for commercial clients throughout Gauteng.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">What payment methods do you accept?</h3>
                <p className="text-slate-600">
                  We accept bank EFT, credit/debit cards, and cash payments. Standard payment terms: 50% deposit upon
                  order confirmation, 40% before installation, and final 10% upon completion and satisfaction. Financing
                  options available through selected partners.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Is granite suitable for outdoor applications?</h3>
                <p className="text-slate-600">
                  Yes, granite is excellent for outdoor use - BBQ areas, outdoor kitchens, patio tables, and pool
                  coping. Its natural resistance to weathering, UV rays, and temperature changes makes it ideal for
                  Johannesburg's climate. We recommend regular resealing for outdoor installations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">What if I need to match existing granite?</h3>
                <p className="text-slate-600">
                  Bring us a sample or photo of your existing granite. While natural stone varies, we can identify the
                  type and find the closest match from current stock. For additions to existing installations, we
                  recommend selecting slabs from the same quarry batch when possible for best color consistency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Related Services</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Granite Countertops</h3>
                <p className="text-slate-600 mb-4">Premium natural granite countertop installation services.</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/granite-countertops">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Quartz Countertops</h3>
                <p className="text-slate-600 mb-4">Engineered quartz surfaces with consistent patterns.</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/quartz-countertops">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Kitchen Renovations</h3>
                <p className="text-slate-600 mb-4">Complete kitchen makeovers with custom cabinetry.</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/kitchen-renovations">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Kitchen Cupboards</h3>
                <p className="text-slate-600 mb-4">Custom kitchen cabinetry with premium finishes.</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/kitchen-cupboards">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Source Your Perfect Granite?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get expert guidance on granite selection, fabrication, and installation. Free consultation, competitive
            pricing, and professional service throughout Gauteng.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-slate-100">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Request Free Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 bg-transparent"
            >
              <a href="tel:+27676014490">Call 067 601 4490</a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Premium Quality Granite</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Expert Fabrication</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Professional Installation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>24-Month Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-amber-400" />
              <a href="tel:+27676014490" className="hover:text-amber-400 transition-colors">
                067 601 4490
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-amber-400" />
              <a href="mailto:info@granitecarpentry.co.za" className="hover:text-amber-400 transition-colors">
                info@granitecarpentry.co.za
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-amber-400" />
              <span>Serving All Gauteng Province</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-amber-400" />
              <span>Mon-Sat: 7AM-5PM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
