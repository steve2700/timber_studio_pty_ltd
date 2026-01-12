// app/rental-property-repairs-gauteng/page.tsx
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Phone, MapPin, Clock, Award, Shield, Hammer, Home } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rental Property Repairs Gauteng | Landlords & Agents 2026',
  description:
    'Rental property repairs across Gauteng for landlords and estate agents. Doors, locks, cupboards, small carpentry fixes, fast turnaround and clean work. Call 067 601 4490',
  keywords:
    'rental property repairs Gauteng, landlord maintenance carpenter, estate agent maintenance Gauteng, tenant fix doors locks, rental maintenance Johannesburg, cupboard repairs rental, door replacement rental property, apartment maintenance carpenter, move in move out repairs',
  openGraph: {
    title: 'Rental Property Repairs Gauteng | Landlords & Agents 2026',
    description:
      'Fast rental property repairs across Gauteng. Doors, locks, cupboards and small carpentry jobs with clean finishing for landlords and agents.',
    url: 'https://granitecarpentry.co.za/rental-property-repairs-gauteng',
    siteName: 'Granite Carpentry',
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://granitecarpentry.co.za/rental-property-repairs-gauteng',
  },
}

export default function RentalPropertyRepairsGautengPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/rental-property-repairs.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Rental Property Repairs Across Gauteng</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 text-pretty">
              Reliable maintenance for landlords, property managers and estate agents. We handle doors, locks, cupboards and small carpentry repairs—fast turnaround and clean work.
              Serving Johannesburg, Sandton, Midrand, Pretoria, Centurion, Kempton Park, Edenvale & more.
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
                <Link href="/contact">Request Maintenance Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Rental Maintenance Repairs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast and practical repairs for move-in, move-out, inspections, and tenant maintenance requests
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Door Repairs & Replacements</CardTitle>
                <CardDescription>Internal doors, bathroom doors, frames</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Fix doors that don’t close properly, replace damaged doors, adjust hinges and align latches for smooth operation.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Door alignment & rehanging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Bathroom door replacements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Frame fixes (if needed)</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/bathroom-door-replacement-gauteng">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Lock, Latch & Handle Fixes</CardTitle>
                <CardDescription>Tenant lock issues resolved fast</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Replace faulty latches, privacy locks and handles—ideal for bathrooms and internal doors that tenants use daily.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Latch replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Privacy lock installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Handles / locksets replaced</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/door-lock-replacement-gauteng">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Hammer className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Cupboard Repairs</CardTitle>
                <CardDescription>Kitchen + wardrobe fixes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Fix loose hinges, misaligned cupboard doors and broken handles. Great for inspection punch-lists.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Hinge replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Door alignment fixes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Handle replacement</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/cupboard-door-repair-gauteng">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Move-In / Move-Out Touch-Ups</CardTitle>
                <CardDescription>Quick fixes before handover</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Fast punch-list repairs to help you hand over the unit in good condition: doors, cupboards and small fixes.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Inspection-list repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Fast booking options</span>
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
                <Clock className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Fast Turnaround</CardTitle>
                <CardDescription>Less tenant downtime</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We work efficiently to minimize disruption for tenants and help landlords keep units in good condition.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Quick scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Clear communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Job completion updates</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Request Maintenance Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Gauteng-Wide Coverage</CardTitle>
                <CardDescription>Landlords • Agents • Property Managers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We service major areas across Gauteng for repeat maintenance work and one-off repairs.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Johannesburg & surrounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Pretoria & Centurion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Midrand, Kempton Park, Edenvale</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Request Maintenance Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Landlords & Agents Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliable Work</h3>
              <p className="text-gray-600">Consistent quality and practical solutions for common maintenance issues.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Clean Finishing</h3>
              <p className="text-gray-600">We aim to keep units looking neat, presentable, and tenant-ready.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Quick scheduling and efficient repairs to reduce tenant downtime.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gauteng Coverage</h3>
              <p className="text-gray-600">Service across Johannesburg, Pretoria, Midrand and surrounding areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location-Specific Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Rental Property Repairs By Location</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/areas/johannesburg" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Rental Repairs Johannesburg</h3>
              <p className="text-gray-600 text-sm">Door, lock and cupboard repairs across Johannesburg</p>
            </Link>
            <Link href="/areas/sandton" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Rental Repairs Sandton</h3>
              <p className="text-gray-600 text-sm">Maintenance work for Sandton rentals and apartments</p>
            </Link>
            <Link href="/areas/midrand" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Rental Repairs Midrand</h3>
              <p className="text-gray-600 text-sm">Fast repairs and punch-list work in Midrand</p>
            </Link>
            <Link href="/areas/kempton-park" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Rental Repairs Kempton Park</h3>
              <p className="text-gray-600 text-sm">Door fixes, lock replacement and cupboard repairs</p>
            </Link>
            <Link href="/areas/edenvale" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Rental Repairs Edenvale</h3>
              <p className="text-gray-600 text-sm">Reliable maintenance for Edenvale rental properties</p>
            </Link>
            <Link href="/areas/pretoria" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Rental Repairs Pretoria</h3>
              <p className="text-gray-600 text-sm">Maintenance carpentry for Pretoria and Centurion rentals</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Maintenance Process</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Send the List / Photos</h3>
                <p className="text-gray-600">
                  Send a punch-list, photos and location. We confirm scope and give a fast estimate.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Schedule Access</h3>
                <p className="text-gray-600">
                  We coordinate access with tenants/agents and arrive with tools and common spares (where possible).
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Complete Repairs + Report Back</h3>
                <p className="text-gray-600">
                  We fix the issues, test everything, tidy up, and send completion updates (photos on request).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Rental Repair Pricing Guide</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="font-bold text-lg">Small Maintenance Fixes</h3>
                      <p className="text-sm text-gray-600">Minor adjustments and repairs</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R350 - R950</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="font-bold text-lg">Door / Lock Repairs</h3>
                      <p className="text-sm text-gray-600">Alignment, latch, handle or lockset fixes</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R450 - R1,800</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">Cupboard Repairs</h3>
                      <p className="text-sm text-gray-600">Hinges, doors, handles</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R250 - R1,500</p>
                      <p className="text-sm text-gray-600">estimated</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Pricing depends on the number of items, travel distance and hardware required. Send your list/photos for a detailed quote.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Reliable Rental Maintenance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Landlords and agents—send your list and we’ll handle the repairs. Fast turnaround, clean work, clear updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-amber-600 hover:bg-gray-100 text-lg px-8" asChild>
              <a href="tel:0676014490">
                <Phone className="mr-2 h-5 w-5" />
                Call 067 601 4490
              </a>
            </Button>
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8" asChild>
              <Link href="/contact">Request Maintenance Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
