// app/bathroom-door-replacement-gauteng/page.tsx
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Phone, MapPin, Clock, Award, Shield, Hammer, Home } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bathroom Door Replacement Gauteng | Fast Supply & Install 2026',
  description:
    'Bathroom door replacement across Gauteng. Fast supply and installation of white internal doors with hinges, latch and privacy lock options. Free quotes. Call 067 601 4490',
  keywords:
    'bathroom door replacement Gauteng, bathroom door repair near me, bathroom door installation, white bathroom door installation, bathroom door lock replacement, privacy lock installation, internal door replacement Gauteng, same day bathroom door replacement, bathroom door latch repair',
  openGraph: {
    title: 'Bathroom Door Replacement Gauteng | Fast Supply & Install 2026',
    description:
      'Fast bathroom door replacement across Gauteng. Supply + installation with quality hardware and clean finishing.',
    url: 'https://granitecarpentry.co.za/bathroom-door-replacement-gauteng',
    siteName: 'Granite Carpentry',
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://granitecarpentry.co.za/bathroom-door-replacement-gauteng',
  },
}

export default function BathroomDoorReplacementGautengPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/bathroom-door-replacement.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Bathroom Door Replacement Across Gauteng
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 text-pretty">
              Fast supply and installation of white bathroom doors with quality hinges, latch and privacy locks. Serving
              Johannesburg, Sandton, Midrand, Pretoria, Kempton Park, Edenvale & more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8" asChild>
                <a href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-black border-white hover:bg-white hover:text-gray-900 text-lg px-8"
                asChild
              >
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Door Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Bathroom Door Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick, professional bathroom door replacements and lock upgrades for homes, flats, and rental properties
              across Gauteng
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Complete Door Replacement</CardTitle>
                <CardDescription>Supply + installation with clean finishing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Replace a damaged or old bathroom door with a new white internal door. We handle removal, hanging,
                  alignment and hardware fitting.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Standard sizes available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Professional hanging & alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Old door removal & cleanup</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Hammer className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Privacy Lock Installation</CardTitle>
                <CardDescription>Quality latch & handle replacement</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Upgrade your bathroom door with a reliable privacy lock and handle set. Prevent future latch issues and
                  ensure smooth operation.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Privacy lock + handles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Latch replacement & fitting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Smooth close guaranteed</span>
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
                <CardTitle>Frame Repair (If Needed)</CardTitle>
                <CardDescription>Fix damaged frames & hinges</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  If the frame is damaged (forced entry or wear), we repair and reinforce where needed before fitting the
                  new door and hardware.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Frame reinforcement options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Hinge replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Proper fit & alignment</span>
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

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Bathroom Door Replacement</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">15+ Years Experience</h3>
              <p className="text-gray-600">Trusted workmanship for door replacements and lock upgrades across Gauteng.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Durable doors and reliable locksets installed professionally with clean finishing.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Most bathroom door replacements completed within hours once scheduled.</p>
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

      {/* Location-Specific Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Bathroom Door Replacement By Location</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/areas/johannesburg" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Bathroom Doors Johannesburg</h3>
              <p className="text-gray-600 text-sm">Door replacements and privacy lock upgrades in Johannesburg</p>
            </Link>
            <Link href="/areas/sandton" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Bathroom Doors Sandton</h3>
              <p className="text-gray-600 text-sm">Premium door fitting and clean finishing for Sandton homes</p>
            </Link>
            <Link href="/areas/midrand" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Bathroom Doors Midrand</h3>
              <p className="text-gray-600 text-sm">Fast bathroom door replacements in Midrand and surrounds</p>
            </Link>
            <Link href="/areas/kempton-park" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Bathroom Doors Kempton Park</h3>
              <p className="text-gray-600 text-sm">Door replacements and lock repairs in Kempton Park</p>
            </Link>
            <Link href="/areas/edenvale" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Bathroom Doors Edenvale</h3>
              <p className="text-gray-600 text-sm">Bathroom door installation and lock replacements in Edenvale</p>
            </Link>
            <Link href="/areas/pretoria" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Bathroom Doors Pretoria</h3>
              <p className="text-gray-600 text-sm">Supply and installation for Pretoria homes and flats</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Bathroom Door Replacement Process</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Share Photos / Measurements</h3>
                <p className="text-gray-600">
                  Send a photo of your current door and measurements. We confirm sizing, hardware needs, and provide a fast quote.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Door & Hardware Selection</h3>
                <p className="text-gray-600">
                  Choose standard white internal doors and privacy lock options. We source materials and schedule installation.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
                <p className="text-gray-600">
                  We remove the old door, install the new one, fit hinges and locksets, align properly, and ensure smooth operation.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Final Check & Cleanup</h3>
                <p className="text-gray-600">
                  We test the door (open/close/lock), confirm the finish, and clean the workspace before leaving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Bathroom Door Replacement Pricing Guide</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="font-bold text-lg">Door Replacement (Install Only)</h3>
                      <p className="text-sm text-gray-600">Client supplies door and hardware</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R450 - R1,200</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="font-bold text-lg">Supply + Install (Standard White Door)</h3>
                      <p className="text-sm text-gray-600">Door + hinges + installation (lockset optional)</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R1,800 - R3,200</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">Privacy Lock Upgrade</h3>
                      <p className="text-sm text-gray-600">Replace latch/handles with bathroom privacy lock</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R650 - R1,500</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Pricing depends on door size, frame condition, and hardware choice. Share photos for a fast quote.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Bathroom Door Replaced Fast?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a quick quote and professional installation across Gauteng. Quality hardware and clean finishing.
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
