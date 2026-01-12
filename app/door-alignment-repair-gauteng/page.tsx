// app/door-alignment-repair-gauteng/page.tsx
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Phone, MapPin, Clock, Award, Shield, Hammer, Home } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Door Alignment Repair Gauteng | Fix Sagging & Stuck Doors 2026',
  description:
    'Door alignment repair across Gauteng. Fix doors that rub, sag, won’t close, or don’t latch properly. Hinge adjustments and rehanging. Free quotes. Call 067 601 4490',
  keywords:
    'door alignment repair Gauteng, door rehanging service, fix door that won’t close, door rubbing floor repair, door sagging hinge repair, strike plate alignment, door latch alignment, internal door repair near me',
  openGraph: {
    title: 'Door Alignment Repair Gauteng | Fix Sagging & Stuck Doors 2026',
    description:
      'Fix doors that rub, sag, or won’t latch. Professional door alignment, hinge adjustment and rehanging across Gauteng.',
    url: 'https://granitecarpentry.co.za/door-alignment-repair-gauteng',
    siteName: 'Granite Carpentry',
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://granitecarpentry.co.za/door-alignment-repair-gauteng',
  },
}

export default function DoorAlignmentRepairGautengPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/door-alignment-repair.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Door Alignment Repair Across Gauteng</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 text-pretty">
              Fix doors that rub, sag, don’t latch, or won’t close properly. Hinge adjustments, rehanging, and strike plate alignment.
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

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Door Alignment Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick fixes for misaligned doors in homes, flats and rental properties across Gauteng
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Hammer className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Hinge Adjustment</CardTitle>
                <CardDescription>Stop rubbing and sagging</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Fix doors that rub the floor or stick by adjusting hinges and correcting the door’s position.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Hinge adjustment & tightening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Hinge replacement if needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Smooth operation check</span>
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
                <CardTitle>Strike Plate Alignment</CardTitle>
                <CardDescription>Fix doors that won’t latch</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Doors that won’t lock or latch properly often need strike plate alignment and latch adjustment.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Latch alignment & fitting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Strike plate repositioning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Door closes cleanly</span>
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
                <CardTitle>Door Rehanging</CardTitle>
                <CardDescription>Rehang doors for correct fit</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  If your door is badly misaligned, we rehang it properly for a clean, stable fit.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Correct fit and spacing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Hardware inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Smooth open/close test</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Door Alignment Repair</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">15+ Years Experience</h3>
              <p className="text-gray-600">Fast fixes for doors that won’t close, rub, or misalign.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">We ensure smooth operation and secure latching after alignment.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">Most alignment jobs are completed within 1–2 hours.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Door Alignment Repair By Location</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/areas/johannesburg" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Door Alignment Johannesburg</h3>
              <p className="text-gray-600 text-sm">Fix doors that rub, sag or won’t close properly</p>
            </Link>
            <Link href="/areas/sandton" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Door Alignment Sandton</h3>
              <p className="text-gray-600 text-sm">Professional rehanging and hinge adjustments in Sandton</p>
            </Link>
            <Link href="/areas/midrand" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Door Alignment Midrand</h3>
              <p className="text-gray-600 text-sm">Fast door alignment services throughout Midrand</p>
            </Link>
            <Link href="/areas/kempton-park" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Door Alignment Kempton Park</h3>
              <p className="text-gray-600 text-sm">Hinge fixes and strike plate alignment in Kempton Park</p>
            </Link>
            <Link href="/areas/edenvale" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Door Alignment Edenvale</h3>
              <p className="text-gray-600 text-sm">Fix rubbing doors and misaligned locks in Edenvale</p>
            </Link>
            <Link href="/areas/pretoria" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Door Alignment Pretoria</h3>
              <p className="text-gray-600 text-sm">Door rehanging and alignment repairs in Pretoria</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Door Alignment Process</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quick Assessment</h3>
                <p className="text-gray-600">Call us or send photos. We identify whether it’s hinges, latch alignment, or frame movement.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Adjustment & Alignment</h3>
                <p className="text-gray-600">We adjust hinges, align the latch and strike plate, and correct the door’s fit for smooth closing.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Rehanging (If Needed)</h3>
                <p className="text-gray-600">If the door is badly sagging, we rehang it properly and replace hinges if required.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Final Test & Cleanup</h3>
                <p className="text-gray-600">We test operation (open/close/latch) and clean up the work area before leaving.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Door Alignment Pricing Guide</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="font-bold text-lg">Hinge Adjustment</h3>
                      <p className="text-sm text-gray-600">Fix rubbing and sagging doors</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R350 - R850</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="font-bold text-lg">Latch / Strike Plate Alignment</h3>
                      <p className="text-sm text-gray-600">Fix doors that won’t latch</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R350 - R950</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">Rehanging (If Needed)</h3>
                      <p className="text-sm text-gray-600">Remove and rehang for correct fit</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R650 - R1,500</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Pricing depends on the door condition and required adjustments. Share photos for a fast quote.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Door Not Closing Properly?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We fix sagging, rubbing and misaligned doors across Gauteng. Fast turnaround and clean finishing.
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
