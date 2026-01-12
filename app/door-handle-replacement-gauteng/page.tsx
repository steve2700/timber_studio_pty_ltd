// app/door-handle-replacement-gauteng/page.tsx
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Phone, MapPin, Clock, Award, Shield, Hammer, Home } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Door Handle Replacement Gauteng | Fast Fixes 2026',
  description:
    'Door handle replacement across Gauteng. Replace broken handles, latches and locksets for bathroom and internal doors. Fast turnaround. Call 067 601 4490',
  keywords:
    'door handle replacement Gauteng, replace door handle near me, door latch replacement, internal door handle replacement, bathroom door handle replacement, lockset replacement Gauteng, door handle repair Johannesburg',
  openGraph: {
    title: 'Door Handle Replacement Gauteng | Fast Fixes 2026',
    description:
      'Replace broken door handles, latches and locksets quickly across Gauteng. Clean finishing and fast turnaround.',
    url: 'https://granitecarpentry.co.za/door-handle-replacement-gauteng',
    siteName: 'Granite Carpentry',
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://granitecarpentry.co.za/door-handle-replacement-gauteng',
  },
}

export default function DoorHandleReplacementGautengPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/door-handle-replacement.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Door Handle Replacement Across Gauteng</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 text-pretty">
              Replace broken handles, faulty latches, and worn locksets for bathroom and internal doors. Fast turnaround and clean installation.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Replace</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Quick jobs that solve daily door issues fast</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Handle & Latch Replacement</CardTitle>
                <CardDescription>Fix loose or broken handles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">We replace handles and latches for internal doors with clean finishing.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Loose handle fixes</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Latch replacement</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Strike plate alignment</span></li>
                </ul>
                <Button className="w-full" asChild><Link href="/same-day-carpenter-gauteng">Same-Day Service</Link></Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Bathroom Privacy Locks</CardTitle>
                <CardDescription>Common rental repair</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Replace bathroom privacy locks and internal door locksets.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Privacy lock installation</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Lockset replacement</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Clean finish & testing</span></li>
                </ul>
                <Button className="w-full" asChild><Link href="/privacy-lock-installation-gauteng">Learn More</Link></Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Hammer className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Door Not Closing Fix</CardTitle>
                <CardDescription>Handle + alignment combo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">If the door isn’t closing properly, we align the latch and adjust hinges too.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Latch alignment</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Hinge adjustments</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Smooth closing test</span></li>
                </ul>
                <Button className="w-full" asChild><Link href="/door-repair-gauteng">Learn More</Link></Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Award className="h-8 w-8 text-white" /></div>
              <h3 className="text-xl font-bold mb-2">Experienced</h3>
              <p className="text-gray-600">Fast, clean work with durable hardware solutions.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Shield className="h-8 w-8 text-white" /></div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">We test the handle and latch for smooth operation.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Clock className="h-8 w-8 text-white" /></div>
              <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Perfect for quick jobs and rental maintenance.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><MapPin className="h-8 w-8 text-white" /></div>
              <h3 className="text-xl font-bold mb-2">Gauteng Coverage</h3>
              <p className="text-gray-600">Johannesburg, Pretoria, Sandton, Midrand & more.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Door Handle Replaced Today?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Call now for quick door handle and latch replacement across Gauteng.</p>
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
