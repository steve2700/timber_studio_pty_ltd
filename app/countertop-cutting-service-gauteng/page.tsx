// app/countertop-cutting-service-gauteng/page.tsx
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Phone, MapPin, Clock, Award, Shield, Hammer, Home } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Countertop Cutting Service Gauteng | Stove & Hob Cutouts 2026',
  description:
    'Professional countertop cutting service across Gauteng. Stove and hob cutouts, sink cutouts, edge finishing, and cabinet modifications. Fast turnaround. Call 067 601 4490',
  keywords:
    'countertop cutting service Gauteng, granite countertop cutting, quartz countertop cutting, hob cutout service, sink cutout service, stove space modification, countertop edge finishing, cabinet modification for stove, kitchen modification Gauteng',
  openGraph: {
    title: 'Countertop Cutting Service Gauteng | Stove & Hob Cutouts 2026',
    description:
      'Professional countertop cutting across Gauteng. Hob/sink cutouts, edge finishing, and kitchen modifications with clean results.',
    url: 'https://granitecarpentry.co.za/countertop-cutting-service-gauteng',
    siteName: 'Granite Carpentry',
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://granitecarpentry.co.za/countertop-cutting-service-gauteng',
  },
}

export default function CountertopCuttingServiceGautengPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/countertop-cutting.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Countertop Cutting Service Across Gauteng</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 text-pretty">
              Professional hob and sink cutouts, stove space modifications, edge finishing, and cabinet adjustments.
              Serving Johannesburg, Sandton, Midrand, Pretoria, Kempton Park, Edenvale & more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8" asChild>
                <a href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-gray-900 text-lg px-8" asChild>
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Countertop Cutting & Modification Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clean, precise cutting and finishing for kitchens across Gauteng — ideal for upgrades and appliance changes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Hammer className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Hob Cutouts</CardTitle>
                <CardDescription>Professional cutting and edge finishing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Accurate hob cutouts with smooth edges and clean finishing for safe installation.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Precise measurements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Smooth edge finishing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Clean work area</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Sink Cutouts</CardTitle>
                <CardDescription>Neat cutting for new sinks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cutouts for sinks with clean finishing and careful handling of stone surfaces.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Template-based cutting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Edge finishing included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Minimal dust methods</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Stove Space Modification</CardTitle>
                <CardDescription>Cut countertop + modify cabinets</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Create space for free-standing stoves, gas stoves or wider appliances. Includes cutting and cabinet adjustments.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Countertop cutting & finishing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Cabinet modification/removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Site cleanup included</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Countertop Cutting Service</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
              <p className="text-gray-600">Clean and accurate cutting with professional finishing.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Finish</h3>
              <p className="text-gray-600">Smooth edges and proper fit for safe appliance installation.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Most countertop cutouts completed in a single visit.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gauteng-Wide Service</h3>
              <p className="text-gray-600">Serving Johannesburg, Pretoria, Sandton, Midrand, Kempton Park, Edenvale & more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Countertop Cutting By Location</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/areas/johannesburg" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Countertop Cutting Johannesburg</h3>
              <p className="text-gray-600 text-sm">Hob and sink cutouts throughout Johannesburg</p>
            </Link>
            <Link href="/areas/sandton" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Countertop Cutting Sandton</h3>
              <p className="text-gray-600 text-sm">Clean countertop cutting and finishing in Sandton</p>
            </Link>
            <Link href="/areas/midrand" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Countertop Cutting Midrand</h3>
              <p className="text-gray-600 text-sm">Stove space modifications and cutouts in Midrand</p>
            </Link>
            <Link href="/areas/kempton-park" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Countertop Cutting Kempton Park</h3>
              <p className="text-gray-600 text-sm">Hob cutouts and cabinet modifications in Kempton Park</p>
            </Link>
            <Link href="/areas/edenvale" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Countertop Cutting Edenvale</h3>
              <p className="text-gray-600 text-sm">Fast countertop modifications in Edenvale</p>
            </Link>
            <Link href="/areas/pretoria" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Countertop Cutting Pretoria</h3>
              <p className="text-gray-600 text-sm">Professional cutting and finishing in Pretoria</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Countertop Cutting Process</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Confirm Measurements</h3>
                <p className="text-gray-600">We confirm appliance/sink dimensions and the cutting area (photos help a lot).</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Professional Cutting & Finishing</h3>
                <p className="text-gray-600">We cut with the correct tools and finish edges for a clean, safe result.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Cleanup & Final Check</h3>
                <p className="text-gray-600">We clean the workspace and confirm fit before leaving.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Countertop Cutting Pricing Guide</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="font-bold text-lg">Hob Cutout</h3>
                      <p className="text-sm text-gray-600">Cut + edge finishing</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R650 - R1,800</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="font-bold text-lg">Sink Cutout</h3>
                      <p className="text-sm text-gray-600">Cut + finishing (template required)</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R750 - R2,200</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">Stove Space Modification</h3>
                      <p className="text-sm text-gray-600">Cut + cabinet modification</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R1,800 - R4,500</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Pricing depends on material (granite/quartz), thickness, access, and cut complexity. Share photos for a fast quote.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Cutout or Modification?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We offer clean countertop cutting across Gauteng. Call or WhatsApp for a quick quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-amber-600 hover:bg-gray-100 text-lg px-8" asChild>
              <a href="tel:0676014490">
                <Phone className="mr-2 h-5 w-5" />
                Call 067 601 4490
              </a>
            </Button>
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8" asChild>
              <Link href="/contact">Request Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
