import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, CheckCircle2, Star, Shield, Wrench, Award } from 'lucide-react'
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "★★★★★ Best Pivot Doors Pretoria 2025 | Premium Installation Services",
  description: "★★★★★ #1 Pivot Door installation specialists in Pretoria. Custom luxury pivot doors, modern designs, professional installation. 500+ Pretoria projects. FREE quotes. Call 067 601 4490",
  keywords: "pivot doors Pretoria, luxury pivot doors Pretoria, custom pivot doors Pretoria, modern pivot doors Pretoria, pivot door installation Pretoria, oversized pivot doors Pretoria, glass pivot doors Pretoria, steel pivot doors Pretoria, wooden pivot doors Pretoria, pivot door specialists Pretoria, premium pivot doors Pretoria, contemporary pivot doors Pretoria, architectural pivot doors Pretoria, pivot door company Pretoria, pivot door suppliers Pretoria",
  openGraph: {
    title: "★★★★★ Best Pivot Doors Pretoria 2025 | Premium Installation Services",
    description: "★★★★★ #1 Pivot Door installation specialists in Pretoria. Custom luxury pivot doors, modern designs, professional installation. 500+ Pretoria projects.",
    url: "https://granitecarpentry.co.za/pivot-doors-pretoria",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/pivot-doors-pretoria",
  },
}

export default function PivotDoorsPretoriaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/luxury-modern-pivot-door-entrance.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <span className="text-yellow-400 font-semibold ml-2">5.0 Rating | 500+ Pretoria Projects</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Pivot Door Installation in <span className="text-yellow-400">Pretoria</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
              Transform your entrance with custom luxury pivot doors. Professional installation, modern designs, and superior craftsmanship serving Pretoria and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold text-lg px-8" asChild>
                <a href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold text-lg px-8" asChild>
                <Link href="/contact">Get FREE Quote</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>Same-Day Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>10-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
              <div className="text-slate-600">Pretoria Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">15+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">10-Year</div>
              <div className="text-slate-600">Warranty</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
              <div className="text-slate-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Premium Pivot Door Services in Pretoria
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expert installation and customization for residential and commercial properties across Pretoria's most prestigious suburbs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-600" />
                  Custom Pivot Door Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Bespoke pivot door designs tailored to your architectural vision. Work with our designers to create statement entrances that reflect your style and enhance property value.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>3D design visualization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Material selection guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Custom sizing up to 4m high</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-6 w-6 text-yellow-600" />
                  Professional Installation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Expert installation by certified technicians with precision engineering. We ensure perfect balance, smooth operation, and weatherproof sealing for long-lasting performance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Precise frame preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Hydraulic hinge systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Complete weatherproofing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-yellow-600" />
                  Luxury Materials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Premium materials including solid wood, steel, aluminum, and glass. All materials sourced from trusted suppliers with quality guarantees and finish options.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Solid wood (oak, meranti, pine)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Steel & aluminum frames</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Tempered & laminated glass</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-yellow-600" />
                  Residential Pivot Doors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Transform your home entrance with modern pivot doors. Perfect for security estates, luxury homes, and contemporary properties throughout Pretoria.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Front entrance doors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Garden & patio access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Internal feature doors</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-yellow-600" />
                  Commercial Pivot Doors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Impressive commercial entrances for offices, hotels, restaurants, and retail spaces. Create lasting first impressions with architectural pivot doors.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Office building entrances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Hotel & hospitality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>High-traffic applications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-600" />
                  Maintenance & Repairs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Keep your pivot doors operating smoothly with our maintenance services. From hinge adjustments to hardware replacement, we service all pivot door brands.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Hinge adjustment & lubrication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Hardware replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Seal & weatherstrip renewal</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Transparent Pivot Door Pricing in Pretoria
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Competitive rates with no hidden fees. All quotes include materials, installation, and warranty coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-slate-100">
                <CardTitle className="text-center">Standard Pivot Doors</CardTitle>
                <CardDescription className="text-center text-2xl font-bold text-slate-900 mt-2">
                  R25,000 - R45,000
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Standard sizes up to 2.4m high</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Solid wood or steel construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Quality pivot hinge system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Professional installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>5-year warranty</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-500 hover:shadow-xl transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardHeader className="bg-yellow-50">
                <CardTitle className="text-center">Premium Pivot Doors</CardTitle>
                <CardDescription className="text-center text-2xl font-bold text-slate-900 mt-2">
                  R45,000 - R85,000
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Custom sizes up to 3.5m high</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Premium materials & finishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Hydraulic pivot system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Glass panel options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>10-year warranty</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-slate-100">
                <CardTitle className="text-center">Luxury Pivot Doors</CardTitle>
                <CardDescription className="text-center text-2xl font-bold text-slate-900 mt-2">
                  R85,000 - R150,000+
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Oversized doors up to 4m+ high</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Exotic wood or designer steel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>German pivot hardware</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Custom glass & metalwork</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Lifetime warranty</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold" asChild>
              <Link href="/contact">Request Detailed Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Serving Pretoria's Premier Suburbs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional pivot door installation across all Pretoria suburbs and surrounding areas with same-day quotes and flexible scheduling.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              "Waterkloof", "Brooklyn", "Menlyn", "Lynnwood", "Garsfontein",
              "Faerie Glen", "Moreleta Park", "Silver Lakes", "Woodlands", "Mooikloof",
              "Olympus", "Erasmuskloof", "Equestria", "Waverley", "Arcadia",
              "Hatfield", "Groenkloof", "Muckleneuk", "Pretoria East", "Pretoria North"
            ].map((area) => (
              <div key={area} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg hover:bg-yellow-50 transition-colors">
                <MapPin className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How much does a pivot door cost in Pretoria?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Pivot door costs in Pretoria range from R25,000 for standard doors to R150,000+ for luxury custom designs. Price depends on size, materials, hardware quality, and design complexity. We provide detailed quotes including all materials, installation, and warranty coverage.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does pivot door installation take?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Standard pivot door installation takes 1-2 days including frame preparation and hanging. Custom or oversized doors may require 3-5 days for manufacturing and installation. We coordinate all work to minimize disruption to your property.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What materials are best for Pretoria's climate?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                For Pretoria's hot summers and occasional rain, we recommend treated solid wood with UV-resistant finishes, powder-coated aluminum, or stainless steel frames. All materials include proper weatherproofing and sealing to withstand temperature fluctuations and weather exposure.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can pivot doors be used for security purposes?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Yes, pivot doors can be highly secure. We offer reinforced steel frames, multi-point locking systems, laminated security glass, and integration with alarm systems. Many security estates in Pretoria feature pivot doors as their primary entrance with excellent security ratings.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer warranties on pivot door installations?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Yes, all pivot door installations include comprehensive warranties: 5-10 years on hardware and installation, material warranties from manufacturers, and lifetime support. We also offer maintenance plans to keep your pivot door operating perfectly for years.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's the maximum size pivot door you can install?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                We regularly install pivot doors up to 4 meters high and 1.5 meters wide. For larger custom applications, we can engineer solutions up to 5+ meters with specialized hydraulic pivot systems. Contact us to discuss your specific size requirements.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can you match existing architectural styles?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Absolutely. Our design team works with your architect or interior designer to create pivot doors that complement your property's style. We can match existing finishes, replicate historic details, or create contemporary contrasts depending on your vision.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you service and repair existing pivot doors?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Yes, we service all brands of pivot doors. Common repairs include hinge adjustments, hardware replacement, seal renewal, and balance corrections. We stock parts for major pivot door brands and can source specialty components for custom installations.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is your company licensed and insured in Pretoria?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Yes, we're fully licensed, insured, and compliant with all South African building regulations. Our technicians are certified, and all installations meet SABS standards. We provide all necessary documentation for insurance and estate compliance requirements.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can pivot doors be automated?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Yes, we offer motorized pivot door systems with remote control, smartphone app integration, and automatic opening sensors. Perfect for commercial applications or luxury homes where convenience and accessibility are priorities.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Internal Linking */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Explore Our Door Installation Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Browse our complete range of professional door installation services across Pretoria and Gauteng.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/pivot-doors" className="group">
              <Card className="h-full border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="group-hover:text-yellow-600 transition-colors">Pivot Doors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">Complete pivot door solutions with custom designs and premium materials.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/barn-doors" className="group">
              <Card className="h-full border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="group-hover:text-yellow-600 transition-colors">Barn Doors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">Stylish barn door installations for modern and rustic interiors.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/security-doors" className="group">
              <Card className="h-full border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="group-hover:text-yellow-600 transition-colors">Security Doors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">Maximum protection with stylish security door solutions.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/french-doors" className="group">
              <Card className="h-full border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="group-hover:text-yellow-600 transition-colors">French Doors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">Elegant French door installations for patios and indoor spaces.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/wooden-doors" className="group">
              <Card className="h-full border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="group-hover:text-yellow-600 transition-colors">Wooden Doors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">Premium wooden door craftsmanship with custom finishes.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/pivot-doors-johannesburg" className="group">
              <Card className="h-full border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="group-hover:text-yellow-600 transition-colors">Pivot Doors Johannesburg</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">Pivot door specialists serving Johannesburg and surrounding areas.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/pivot-doors-sandton" className="group">
              <Card className="h-full border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="group-hover:text-yellow-600 transition-colors">Pivot Doors Sandton</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">Luxury pivot door installations in Sandton's premier estates.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/door-installation" className="group">
              <Card className="h-full border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="group-hover:text-yellow-600 transition-colors">All Door Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">View our complete door installation service portfolio.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Entrance with Premium Pivot Doors?
          </h2>
          <p className="text-xl mb-8 text-slate-200 max-w-3xl mx-auto">
            Contact Granite Carpentry today for a FREE consultation and quote. Serving Pretoria and surrounding areas with professional pivot door installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold text-lg px-8" asChild>
              <a href="tel:0676014490">
                <Phone className="mr-2 h-5 w-5" />
                Call 067 601 4490
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold text-lg px-8" asChild>
              <Link href="/contact">Get FREE Quote</Link>
            </Button>
          </div>
          <p className="mt-6 text-slate-300">
            <Clock className="inline h-5 w-5 mr-2" />
            Available 24/7 for emergencies | Same-day quotes available
          </p>
        </div>
      </section>
    </div>
  )
}
