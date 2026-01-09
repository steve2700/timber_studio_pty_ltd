import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, CheckCircle2, Star, Home, Wrench, Award } from 'lucide-react'
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "★★★★★ Best Barn Doors Sandton 2026 | Stylish Sliding Door Installation",
  description: "★★★★★ #1 Barn Door installation specialists in Sandton. Modern sliding barn doors, custom designs, space-saving solutions. 600+ Sandton projects. FREE quotes. Call 067 601 4490",
  keywords: "barn doors Sandton, sliding barn doors Sandton, rustic barn doors Sandton, modern barn doors Sandton, barn door installation Sandton, custom barn doors Sandton, barn door hardware Sandton, interior barn doors Sandton, barn door track Sandton, barn door specialists Sandton, space saving doors Sandton, barn door company Sandton, barn door suppliers Sandton, farmhouse doors Sandton",
  openGraph: {
    title: "★★★★★ Best Barn Doors Sandton 2026 | Stylish Sliding Door Installation",
    description: "★★★★★ #1 Barn Door installation specialists in Sandton. Modern sliding barn doors, custom designs, space-saving solutions. 600+ Sandton projects.",
    url: "https://granitecarpentry.co.za/barn-doors-sandton",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/barn-doors-sandton",
  },
}

export default function BarnDoorsSandtonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/modern-barn-door-interior.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <span className="text-yellow-400 font-semibold ml-2">5.0 Rating | 600+ Sandton Projects</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Barn Door Installation in <span className="text-yellow-400">Sandton</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
              Transform your space with stylish sliding barn doors. Custom designs, expert installation, and space-saving solutions for Sandton's luxury homes and offices.
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
                <span>5-Year Warranty</span>
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
              <div className="text-4xl font-bold text-slate-900 mb-2">600+</div>
              <div className="text-slate-600">Sandton Installations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">15+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">5-Year</div>
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
              Barn Door Services in Sandton
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional barn door installation and custom design for residential and commercial properties across Sandton's most sought-after neighborhoods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-6 w-6 text-yellow-600" />
                  Custom Barn Door Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Bespoke barn door designs tailored to your interior style. Choose from rustic farmhouse, modern minimalist, or industrial designs with custom finishes and hardware.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Free design consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Material & finish selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Custom sizing available</span>
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
                  Expert installation by certified technicians. We ensure smooth sliding operation, secure track mounting, and perfect alignment for long-lasting performance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Wall stud reinforcement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Quality track systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Smooth roller bearings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-yellow-600" />
                  Quality Materials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Premium barn door materials including solid wood, MDF, and steel. All hardware sourced from trusted manufacturers with rust-proof finishes.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Solid wood (oak, pine, meranti)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Steel & aluminum tracks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Designer hardware finishes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-yellow-600" />
                  Residential Barn Doors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Transform your home with stylish barn doors. Perfect for bedrooms, bathrooms, closets, pantries, and living spaces throughout Sandton.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Bedroom & bathroom doors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Walk-in closet entrances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Pantry & laundry room access</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-yellow-600" />
                  Commercial Barn Doors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Stylish barn doors for offices, restaurants, retail spaces, and hotels. Create unique spatial divisions while maintaining open-concept flexibility.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Office meeting rooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Restaurant & cafe dividers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Retail fitting rooms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-6 w-6 text-yellow-600" />
                  Hardware & Repairs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Professional barn door hardware upgrades and repairs. From track replacement to roller maintenance, we keep your barn doors sliding smoothly.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Track & roller replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Hardware upgrades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span>Alignment adjustments</span>
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
              Transparent Barn Door Pricing in Sandton
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Competitive rates with no hidden fees. All quotes include materials, hardware, installation, and warranty.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-slate-100">
                <CardTitle className="text-center">Standard Barn Doors</CardTitle>
                <CardDescription className="text-center text-2xl font-bold text-slate-900 mt-2">
                  R8,000 - R15,000
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Standard sizes up to 2.1m high</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Quality MDF or pine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Basic track & hardware</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Professional installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>2-year warranty</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-500 hover:shadow-xl transition-all relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardHeader className="bg-yellow-50">
                <CardTitle className="text-center">Premium Barn Doors</CardTitle>
                <CardDescription className="text-center text-2xl font-bold text-slate-900 mt-2">
                  R15,000 - R28,000
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Custom sizes & designs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Solid wood construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Premium hardware & finishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Custom staining options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>5-year warranty</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader className="bg-slate-100">
                <CardTitle className="text-center">Luxury Barn Doors</CardTitle>
                <CardDescription className="text-center text-2xl font-bold text-slate-900 mt-2">
                  R28,000 - R50,000+
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Oversized custom designs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Exotic wood species</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Designer hardware systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Glass panels & metalwork</span>
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
              Serving Sandton's Premier Neighborhoods
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional barn door installation across all Sandton suburbs with same-day quotes and flexible scheduling.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              "Hyde Park", "Sandhurst", "Bryanston", "Morningside", "Rivonia",
              "Illovo", "Inanda", "Wendywood", "Gallo Manor", "Atholl",
              "Benmore", "Hurlingham", "Lonehill", "Sunninghill", "Fourways",
              "Dainfern", "Steyn City", "Waterfall", "Midrand", "Kyalami"
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
                <CardTitle className="text-lg">How much does a barn door cost in Sandton?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Barn door costs in Sandton range from R8,000 for standard doors to R50,000+ for luxury custom designs. Price depends on size, materials, hardware quality, and finish. We provide detailed quotes including all materials, installation, and warranty.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does barn door installation take?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Standard barn door installation takes 2-4 hours including wall preparation and hardware mounting. Custom doors may require additional time for finishing. We complete most installations in a single day with minimal disruption.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can barn doors be used for bathrooms?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Yes, barn doors are excellent for bathrooms. We install privacy locks, soft-close mechanisms, and use moisture-resistant materials. Many Sandton homes feature barn doors in master ensuites and guest bathrooms with complete privacy.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do barn doors provide sound insulation?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Barn doors provide moderate sound insulation. For better acoustics, we offer solid core doors with sealing strips. While not as soundproof as traditional hinged doors, barn doors significantly reduce noise transfer between rooms.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What wall preparation is needed for barn doors?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Barn doors require wall studs or reinforcement for track mounting. We assess wall structure during consultation and install blocking or backing boards if needed. Our team handles all preparation to ensure secure, long-lasting installation.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can you match existing decor styles?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Absolutely. We create barn doors to match any style from rustic farmhouse to modern minimalist. Choose custom stains, paints, hardware finishes, and design details to complement your existing interior design perfectly.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you service existing barn doors?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Yes, we service all barn door brands. Common repairs include track adjustment, roller replacement, hardware upgrades, and door refinishing. We stock parts for major manufacturers and can source specialty components.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are barn doors space-saving?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Yes, barn doors save space by eliminating door swing clearance. Perfect for tight hallways, small rooms, and maximizing usable floor area. However, they require wall space beside the opening for the door to slide.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What hardware finishes are available?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                We offer multiple hardware finishes including matte black, brushed nickel, oil-rubbed bronze, stainless steel, and antique brass. All hardware is rust-proof and designed for smooth, quiet operation with long-lasting durability.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can barn doors be motorized?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Yes, we install motorized barn door systems with remote control or smartphone app integration. Ideal for accessibility needs, heavy doors, or commercial applications where automated operation enhances convenience and functionality.
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
              Browse our complete range of professional door installation services across Sandton and Gauteng.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/barn-doors" className="group">
              <Card className="h-full border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="group-hover:text-yellow-600 transition-colors">Barn Doors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">Complete barn door solutions with custom designs and quality hardware.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/pivot-doors" className="group">
              <Card className="h-full border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="group-hover:text-yellow-600 transition-colors">Pivot Doors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">Luxury pivot door installations with modern designs and premium materials.</p>
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

            <Link href="/barn-doors-cape-town" className="group">
              <Card className="h-full border-2 hover:border-yellow-500 transition-all hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="group-hover:text-yellow-600 transition-colors">Barn Doors Cape Town</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">Barn door specialists serving Cape Town and surrounding areas.</p>
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
            Ready to Transform Your Space with Stylish Barn Doors?
          </h2>
          <p className="text-xl mb-8 text-slate-200 max-w-3xl mx-auto">
            Contact Granite Carpentry today for a FREE consultation and quote. Serving Sandton and surrounding areas with professional barn door installation.
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
