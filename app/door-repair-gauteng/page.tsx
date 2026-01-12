// app/door-repair-gauteng/page.tsx
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Phone, MapPin, Clock, Award, Shield, Hammer, Home } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Door Repair Gauteng | Fix Sticking & Misaligned Doors 2026',
  description:
    'Professional door repair services across Gauteng. Fix doors that won’t close, stick, scrape the floor, or sag. Fast turnaround. Free quotes. Call 067 601 4490',
  keywords:
    'door repair Gauteng, door won’t close repair, fix sticking door, door scraping floor repair, door sagging repair, door hinge repair, door alignment repair, emergency door repair near me, door repair Johannesburg',
  openGraph: {
    title: 'Door Repair Gauteng | Fix Sticking & Misaligned Doors 2026',
    description:
      'Fix doors that won’t close, stick, scrape the floor or sag. Fast door repairs across Gauteng.',
    url: 'https://granitecarpentry.co.za/door-repair-gauteng',
    siteName: 'Granite Carpentry',
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://granitecarpentry.co.za/door-repair-gauteng',
  },
}

export default function DoorRepairGautengPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/door-repair.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Door Repair Services Across Gauteng</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 text-pretty">
              Fix doors that won’t close, stick, scrape the floor, or sag. We handle hinge adjustments, alignment, latch issues and quick replacements.
              Serving Johannesburg, Sandton, Midrand, Pretoria, Centurion, Kempton Park, Edenvale & more.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Door Repair Problems We Fix</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick solutions that restore smooth closing, correct alignment and a clean finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Door Won’t Close</CardTitle>
                <CardDescription>Alignment and latch fixes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We adjust hinges, align the latch and strike plate, and ensure your door closes smoothly.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Latch alignment</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Hinge adjustments</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Door squareness checks</span></li>
                </ul>
                <Button className="w-full" asChild><Link href="/door-alignment-repair-gauteng">Learn More</Link></Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Hammer className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Door Sticking / Scraping</CardTitle>
                <CardDescription>Fix rubbing and floor scraping</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We fix doors that rub the frame or scrape the floor using correct adjustments and clean finishing.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Hinge tightening</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Frame alignment checks</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Clean adjustments</span></li>
                </ul>
                <Button className="w-full" asChild><Link href="/same-day-carpenter-gauteng">Same-Day Service</Link></Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Hinges, Locks & Handles</CardTitle>
                <CardDescription>Replace faulty hardware</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We replace worn hinges, faulty latches and damaged handles—ideal for bathrooms and rentals.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Hinge replacement</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Latch / lock repairs</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Handle replacement</span></li>
                </ul>
                <Button className="w-full" asChild><Link href="/door-handle-replacement-gauteng">Learn More</Link></Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Door Repair Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Award className="h-8 w-8 text-white" /></div>
              <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
              <p className="text-gray-600">15+ years experience with clean finishes and lasting fixes.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Shield className="h-8 w-8 text-white" /></div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">We aim for durable solutions, not temporary hacks.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Clock className="h-8 w-8 text-white" /></div>
              <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Quick booking options for urgent repairs.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><MapPin className="h-8 w-8 text-white" /></div>
              <h3 className="text-xl font-bold mb-2">Gauteng-Wide Service</h3>
              <p className="text-gray-600">Serving major areas across Gauteng and surrounding suburbs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Door Repair Process</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Send Photos + Location</h3>
                <p className="text-gray-600">Share photos of the door and the issue. We estimate quickly and confirm availability.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fix & Align</h3>
                <p className="text-gray-600">We adjust hinges, align the latch, and ensure smooth operation.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Check & Cleanup</h3>
                <p className="text-gray-600">We test the door, confirm smooth closing, and leave the area clean and tidy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Your Door Fixed Fast?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Call now for quick door repairs across Gauteng. Free quote and fast turnaround.</p>
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
