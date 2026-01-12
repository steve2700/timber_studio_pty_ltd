import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Phone, MapPin, Clock, Award, Shield, Hammer, Home } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Emergency Door Repair Gauteng | Same-Day Door Fixes 2026',
  description:
    'Fast emergency door repair across Gauteng. Same-day service for broken doors, kicked-in doors, lock failures, door alignment and urgent replacements. Free quotes. Call 067 601 4490',
  keywords:
    'emergency door repair Gauteng, same day door repair, urgent door repair near me, door kicked in repair, broken door repair, lock failure door repair, door latch replacement, door handle replacement, door alignment repair, internal door replacement Gauteng, emergency carpenter Gauteng',
  openGraph: {
    title: 'Emergency Door Repair Gauteng | Same-Day Door Fixes 2026',
    description:
      'Same-day emergency door repairs across Gauteng. Kicked-in doors, lock failures, broken doors, urgent replacements & alignment fixes.',
    url: 'https://granitecarpentry.co.za/emergency-door-repair-gauteng',
    siteName: 'Granite Carpentry',
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://granitecarpentry.co.za/emergency-door-repair-gauteng',
  },
}

export default function EmergencyDoorRepairGautengPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/emergency-door-repair.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Emergency Door Repair Services Across Gauteng
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 text-pretty">
              Same-day door repairs for lock failures, kicked-in doors, damaged frames, stuck doors, and urgent replacements.
              Serving Johannesburg, Sandton, Midrand, Pretoria, Kempton Park, Edenvale & more.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Emergency Door Repair Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick, professional solutions for urgent door problems in homes, flats, rentals, and offices throughout Gauteng
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Kicked-In Door Repair</CardTitle>
                <CardDescription>Forced entry damage repair & secure refit</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Repair or replace doors damaged by forced entry. We assess the frame, repair where needed, and ensure the
                  door closes securely and smoothly.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Frame repair where required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>New latch/handle options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Secure refit & alignment</span>
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
                <CardTitle>Lock Failure & Stuck Door</CardTitle>
                <CardDescription>Latch, lockset & handle replacements</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Doors that won’t open, won’t close, or jam due to latch and lock issues. We replace faulty hardware and
                  restore smooth operation fast.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Latch replacement & fitting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Privacy lock installation (bathrooms)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Handles & hinges replaced if needed</span>
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
                <CardTitle>Same-Day Door Replacement</CardTitle>
                <CardDescription>Fast supply & installation options</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Need a door replaced urgently? We offer quick replacement for standard internal doors with professional
                  hanging, alignment, and cleanup.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Standard internal doors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Hinges & lockset installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Clean finish & smooth close</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Door Alignment & Rehanging</CardTitle>
                <CardDescription>Fix doors that rub, sag or won’t close</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  If your door scrapes the floor, doesn’t latch properly, or swings open, we realign hinges and rehang
                  the door for a perfect fit.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Hinge adjustment & replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Strike plate alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Smooth close & secure latch</span>
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
                <CardTitle>Rental Property Door Repairs</CardTitle>
                <CardDescription>Landlord & tenant maintenance fixes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Quick repairs for rental units and move-out fixes. We help landlords and tenants resolve door issues
                  quickly with a clean, professional finish.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Fast turnarounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Hardware replacements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Clean-up included</span>
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
                <CardTitle>Bathroom Door Lock Replacement</CardTitle>
                <CardDescription>Privacy locks & latch upgrades</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Replace worn or faulty bathroom locksets with quality privacy locks. Great for safety, rentals, and
                  family homes.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Privacy lock installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Quality handles & latch mechanism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Prevent future latch issues</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Emergency Door Repair Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">15+ Years Experience</h3>
              <p className="text-gray-600">
                Experienced carpentry team handling door repairs, replacements, and hardware fixes across Gauteng.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                Professional workmanship with durable hardware options and clean finishing for long-lasting results.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Same-Day Options</h3>
              <p className="text-gray-600">
                Fast response for urgent repairs and replacements. Most quick jobs completed in a few hours.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gauteng-Wide Service</h3>
              <p className="text-gray-600">
                Serving Johannesburg, Sandton, Randburg, Midrand, Pretoria, Centurion, Kempton Park, Edenvale & more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location-Specific Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Emergency Door Repair By Location</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/areas/johannesburg" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Door Repairs Johannesburg</h3>
              <p className="text-gray-600 text-sm">Urgent door repairs and replacements across Johannesburg</p>
            </Link>
            <Link href="/areas/sandton" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Door Repairs Sandton</h3>
              <p className="text-gray-600 text-sm">Same-day door repairs for Sandton homes and apartments</p>
            </Link>
            <Link href="/areas/midrand" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Door Repairs Midrand</h3>
              <p className="text-gray-600 text-sm">Fast door repair services throughout Midrand</p>
            </Link>
            <Link href="/areas/kempton-park" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Door Repairs Kempton Park</h3>
              <p className="text-gray-600 text-sm">Emergency door repairs and hardware replacements</p>
            </Link>
            <Link href="/areas/edenvale" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Door Repairs Edenvale</h3>
              <p className="text-gray-600 text-sm">Door alignment, lock repairs and urgent replacements</p>
            </Link>
            <Link href="/areas/pretoria" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Door Repairs Pretoria</h3>
              <p className="text-gray-600 text-sm">Professional emergency door repair services in Pretoria</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Emergency Door Repair Process</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quick Assessment</h3>
                <p className="text-gray-600">
                  Share photos on WhatsApp or call us. We assess the damage, confirm the best solution, and provide a fast quote.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Materials & Scheduling</h3>
                <p className="text-gray-600">
                  Once the deposit is paid, we secure materials (if needed) and schedule the quickest available time slot.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Professional Repair / Replacement</h3>
                <p className="text-gray-600">
                  We repair the frame, replace hardware, rehang the door, and ensure alignment and smooth operation.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Check & Cleanup</h3>
                <p className="text-gray-600">
                  We test the door (open/close/lock), confirm finishing, and clean the workspace before we leave.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Emergency Door Repair Pricing Guide</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="font-bold text-lg">Lock / Latch Replacement</h3>
                      <p className="text-sm text-gray-600">Replace latch/lockset and restore smooth operation</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R650 - R1,500</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="font-bold text-lg">Door Alignment / Rehanging</h3>
                      <p className="text-sm text-gray-600">Fix rubbing doors, sagging hinges, and latch misalignment</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R450 - R1,200</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="font-bold text-lg">Kicked-In Door Repair</h3>
                      <p className="text-sm text-gray-600">Repair/replace door and repair frame where needed</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R1,500 - R3,500</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">Same-Day Door Replacement</h3>
                      <p className="text-sm text-gray-600">Supply + install (standard internal doors)</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R1,800 - R3,200</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Pricing depends on door type, hardware required, and frame condition. Share photos for a fast, accurate quote.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Door Fixed Today?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Call Granite Carpentry for fast emergency door repair across Gauteng. Same-day options available.
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
