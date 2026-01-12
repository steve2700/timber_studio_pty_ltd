// app/move-out-repairs-gauteng/page.tsx
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Phone, MapPin, Clock, Award, Shield, Hammer, Home } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Move Out Repairs Gauteng | Rental Inspection Fixes 2026',
  description:
    'Move out repairs across Gauteng for landlords and tenants. Doors, locks, cupboards, small carpentry fixes before inspection. Fast turnaround. Call 067 601 4490',
  keywords:
    'move out repairs Gauteng, rental inspection repairs, move out maintenance near me, tenant damage repairs, landlord punch list repairs, door repairs before inspection, cupboard repairs rental property',
  openGraph: {
    title: 'Move Out Repairs Gauteng | Rental Inspection Fixes 2026',
    description:
      'Fast move-out repairs across Gauteng. Doors, locks, cupboards and small carpentry fixes before rental inspections.',
    url: 'https://granitecarpentry.co.za/move-out-repairs-gauteng',
    siteName: 'Granite Carpentry',
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://granitecarpentry.co.za/move-out-repairs-gauteng',
  },
}

export default function MoveOutRepairsGautengPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/move-out-repairs.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Move-Out Repairs Across Gauteng</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 text-pretty">
              Quick repairs before inspections. We fix doors, locks, handles, cupboard hinges and small carpentry issues—ideal for landlords, agents and tenants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8" asChild>
                <a href="tel:0676014490"><Phone className="mr-2 h-5 w-5" />Call 067 601 4490</a>
              </Button>
              <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-gray-900 text-lg px-8" asChild>
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Inspection Repairs We Handle</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Fast punch-list fixes to help you pass inspections and avoid deductions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Door Repairs & Replacement</CardTitle>
                <CardDescription>Close properly, align, or replace</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">We fix doors that won’t close, stick, or are damaged. Replacement options available.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Door alignment & rehanging</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Bathroom door replacement</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Hinge repairs</span></li>
                </ul>
                <Button className="w-full" asChild><Link href="/door-repair-gauteng">Learn More</Link></Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Locks, Latches & Handles</CardTitle>
                <CardDescription>Quick replacements</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Replace faulty privacy locks, latches and door handles—common rental inspection items.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Latch replacement</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Privacy lock installation</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Handle replacements</span></li>
                </ul>
                <Button className="w-full" asChild><Link href="/door-handle-replacement-gauteng">Learn More</Link></Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Hammer className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Cupboards & Hinges</CardTitle>
                <CardDescription>Kitchen + wardrobe fixes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Fix cupboard doors, hinge issues and handle replacements before inspection.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Hinge replacement</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Door alignment</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Handles fixed/replaced</span></li>
                </ul>
                <Button className="w-full" asChild><Link href="/rental-property-repairs-gauteng">Rental Repairs</Link></Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why This Service Helps You Save Money</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Clock className="h-8 w-8 text-white" /></div>
              <h3 className="text-xl font-bold mb-2">Fast Repairs</h3>
              <p className="text-gray-600">Quick jobs before inspection deadlines.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Shield className="h-8 w-8 text-white" /></div>
              <h3 className="text-xl font-bold mb-2">Practical Fixes</h3>
              <p className="text-gray-600">We focus on the most common inspection items.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Award className="h-8 w-8 text-white" /></div>
              <h3 className="text-xl font-bold mb-2">Clean Finishing</h3>
              <p className="text-gray-600">Neat repairs that look good in handovers.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><MapPin className="h-8 w-8 text-white" /></div>
              <h3 className="text-xl font-bold mb-2">Gauteng Coverage</h3>
              <p className="text-gray-600">Landlords and agents across Gauteng.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Repairs Before Inspection?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Call now and send your list/photos. We’ll help you finish fast.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-amber-600 hover:bg-gray-100 text-lg px-8" asChild>
              <a href="tel:0676014490"><Phone className="mr-2 h-5 w-5" />Call 067 601 4490</a>
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
