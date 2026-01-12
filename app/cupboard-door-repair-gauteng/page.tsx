// app/cupboard-door-repair-gauteng/page.tsx
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Phone, MapPin, Clock, Award, Shield, Hammer, Home } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cupboard Door Repair Gauteng | Hinges & Alignment Fixes 2026',
  description:
    'Cupboard door repair across Gauteng. Fix loose hinges, broken cupboard doors, misalignment and handle replacements for kitchens and bedrooms. Free quotes. Call 067 601 4490',
  keywords:
    'cupboard door repair Gauteng, cabinet hinge replacement, kitchen cupboard door repair, cupboard hinge repair near me, cupboard door alignment, cabinet door won’t close, cupboard handle replacement, small carpentry repairs Gauteng',
  openGraph: {
    title: 'Cupboard Door Repair Gauteng | Hinges & Alignment Fixes 2026',
    description:
      'Fast cupboard door repairs across Gauteng. Fix hinges, alignment, handles and cupboard doors that won’t close.',
    url: 'https://granitecarpentry.co.za/cupboard-door-repair-gauteng',
    siteName: 'Granite Carpentry',
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://granitecarpentry.co.za/cupboard-door-repair-gauteng',
  },
}

export default function CupboardDoorRepairGautengPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/cupboard-door-repair.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Cupboard Door Repair Across Gauteng</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 text-pretty">
              Fix loose hinges, misaligned cupboard doors, broken handles and doors that won’t close. Ideal for kitchens, bedrooms, rentals and offices.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cupboard Door Repair Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick repairs for kitchens, built-in cupboards, wardrobes and vanities across Gauteng
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Hammer className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Hinge Replacement</CardTitle>
                <CardDescription>Fix loose and broken hinges fast</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Replace worn hinges and repair mounting points so cupboard doors open and close smoothly.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Hinge replacement & alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Fix stripped screw holes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Clean finishing</span>
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
                <CardTitle>Door Alignment</CardTitle>
                <CardDescription>Fix doors that won’t close properly</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Adjust hinges and spacing to fix cupboard doors that rub, sag or don’t close evenly.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Even gaps and clean closure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Adjust hinges & mounting</span>
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

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Handle Replacement</CardTitle>
                <CardDescription>Swap handles and improve usability</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Replace old or broken cupboard handles and tighten fittings for a clean, modern look.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Handle replacement & tightening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Hardware recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Clean finishing</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Cupboard Door Repair</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">15+ Years Experience</h3>
              <p className="text-gray-600">Fast repairs for kitchens, wardrobes, and built-in cupboards.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Clean, strong fixes that last—no quick hacks.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">Most cupboard door repairs completed within 1–3 hours.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Cupboard Door Repair By Location</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/areas/johannesburg" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Cupboard Repairs Johannesburg</h3>
              <p className="text-gray-600 text-sm">Hinge and cupboard door repairs across Johannesburg</p>
            </Link>
            <Link href="/areas/sandton" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Cupboard Repairs Sandton</h3>
              <p className="text-gray-600 text-sm">Kitchen cupboard hinge repairs and alignment fixes in Sandton</p>
            </Link>
            <Link href="/areas/midrand" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Cupboard Repairs Midrand</h3>
              <p className="text-gray-600 text-sm">Fast cupboard door repairs throughout Midrand</p>
            </Link>
            <Link href="/areas/kempton-park" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Cupboard Repairs Kempton Park</h3>
              <p className="text-gray-600 text-sm">Cupboard door repair and hinge replacement in Kempton Park</p>
            </Link>
            <Link href="/areas/edenvale" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Cupboard Repairs Edenvale</h3>
              <p className="text-gray-600 text-sm">Fix cupboard doors that won’t close properly in Edenvale</p>
            </Link>
            <Link href="/areas/pretoria" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Cupboard Repairs Pretoria</h3>
              <p className="text-gray-600 text-sm">Wardrobe and kitchen cupboard repairs in Pretoria</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Cupboard Door Repair Process</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Send Photos</h3>
                <p className="text-gray-600">Send a photo of the cupboard door and hinges. We confirm the best fix and quote quickly.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Repair / Replace Hinges</h3>
                <p className="text-gray-600">We replace hinges or repair mounting points and align the door for an even close.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Final Test & Cleanup</h3>
                <p className="text-gray-600">We test opening/closing, tighten everything, and clean the work area.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Cupboard Door Repair Pricing Guide</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="font-bold text-lg">Hinge Replacement</h3>
                      <p className="text-sm text-gray-600">Replace hinges and align door</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R350 - R950</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="font-bold text-lg">Alignment Fix</h3>
                      <p className="text-sm text-gray-600">Fix doors that won’t close evenly</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R250 - R750</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">Handle Replacement</h3>
                      <p className="text-sm text-gray-600">Replace cupboard handles</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R150 - R650</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Pricing depends on number of doors and hinge type. Share photos for a fast quote.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Cupboard Doors Fixed Fast?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We repair cupboard doors across Gauteng—hinges, alignment and handles. Fast turnaround and clean work.
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
