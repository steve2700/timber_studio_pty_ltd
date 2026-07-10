import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Phone, MapPin, Clock, Award, Shield, Hammer, Home } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional Door Installation Services Gauteng | Expert Fitters 2026',
  description: 'Premium door installation services across Gauteng. Pivot doors, barn doors, security doors, French doors & wooden doors. 15+ years experience. Free quotes. Call 063 397 7498',
  keywords: 'door installation Gauteng, door fitters Johannesburg, pivot door installation, barn door installation, security door installation, French door installation, wooden door installation, door hanging services, professional door installers',
  openGraph: {
    title: 'Professional Door Installation Services Gauteng | Expert Fitters 2026',
    description: 'Premium door installation services across Gauteng. Pivot doors, barn doors, security doors & more. 15+ years experience.',
    url: 'https://www.timberstudio.co.za/door-installation',
    siteName: 'The Timber Studio',
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.timberstudio.co.za/door-installation',
  },
}

export default function DoorInstallationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/modern-door-installation.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Professional Door Installation Services Across Gauteng
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 text-pretty">
              Expert door fitters specializing in pivot doors, barn doors, security doors, French doors & wooden doors. 15+ years experience serving Johannesburg, Pretoria, Sandton & beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8" asChild>
                <a href="tel:0633977498">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 063 397 7498
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-gray-900 text-lg px-8" asChild>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Door Installation Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive door installation solutions for residential and commercial properties throughout Gauteng
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Pivot Door Installation</CardTitle>
                <CardDescription>Modern pivot doors with premium hardware</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional pivot door installation services featuring top-hung and floor-mounted systems. Expert fitting for residential and commercial properties.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Floor-mounted pivot systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Top-hung pivot mechanisms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Custom sizing available</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact?service=pivot-door-installation">Get a Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Hammer className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Barn Door Installation</CardTitle>
                <CardDescription>Stylish sliding barn door systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Expert barn door installation with premium sliding hardware. Perfect for modern homes and rustic interiors.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Premium sliding hardware</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Custom track installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Soft-close mechanisms</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact?service=barn-door-installation">Get a Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Security Door Installation</CardTitle>
                <CardDescription>Enhanced security with steel reinforcement</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional security door installation with multi-point locking systems and steel reinforcement for maximum protection.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Multi-point lock systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Steel reinforced frames</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Anti-lift hinges</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact?service=security-door-installation">Get a Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>French Door Installation</CardTitle>
                <CardDescription>Elegant double door systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Beautiful French door installation for patios, balconies, and interior spaces. Premium hardware and weather sealing.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Weather-sealed systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Energy-efficient glazing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Custom sizing options</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact?service=french-door-installation">Get a Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Wooden Door Installation</CardTitle>
                <CardDescription>Premium solid wood & engineered doors</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Expert installation of solid wood and engineered wood doors. Custom finishing and hardware installation included.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Solid wood options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Engineered wood systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Custom finishing services</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact?service=wooden-door-installation">Get a Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle>Custom Door Solutions</CardTitle>
                <CardDescription>Bespoke door installation services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Specialized installation for unique door requirements including oversized doors, custom designs, and heritage restoration.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Oversized door installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Heritage restoration work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Custom design fabrication</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Door Installation Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">15+ Years Experience</h3>
              <p className="text-gray-600">
                Extensive experience installing all door types across residential and commercial properties throughout Gauteng.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                All installations backed by comprehensive warranties. We use only premium materials and hardware for lasting results.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">
                Most door installations completed within 1-2 days. Same-day service available for emergency door replacements.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Gauteng-Wide Service</h3>
              <p className="text-gray-600">
                Serving all major areas including Johannesburg, Pretoria, Sandton, Midrand, Centurion, and surrounding suburbs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location-Specific Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Door Installation Services By Location</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/areas/sandton" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Pivot Doors Sandton</h3>
              <p className="text-gray-600 text-sm">Premium pivot door installation in Sandton's luxury properties</p>
            </Link>
            <Link href="/areas/fourways" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Barn Doors Fourways</h3>
              <p className="text-gray-600 text-sm">Stylish barn door installation throughout Fourways</p>
            </Link>
            <Link href="/areas/johannesburg" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Security Doors Johannesburg</h3>
              <p className="text-gray-600 text-sm">Enhanced security door solutions for Johannesburg homes</p>
            </Link>
            <Link href="/areas/pretoria" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">Wooden Doors Pretoria</h3>
              <p className="text-gray-600 text-sm">Premium solid wood door installation in Pretoria</p>
            </Link>
            <Link href="/areas/sandton" className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg mb-2">French Doors Sandton</h3>
              <p className="text-gray-600 text-sm">Elegant French door installation for Sandton properties</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Door Installation Process</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Consultation & Measurement</h3>
                <p className="text-gray-600">
                  We start with a comprehensive site visit to assess your requirements, take precise measurements, and discuss door options that suit your needs and budget.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Door Selection & Quote</h3>
                <p className="text-gray-600">
                  Choose from our extensive range of doors and hardware. We provide detailed quotes with no hidden costs, covering materials, installation, and finishing.
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
                  Our expert team arrives on schedule with all necessary tools and materials. We complete the installation efficiently while maintaining the highest quality standards.
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
                  After installation, we conduct thorough quality checks to ensure proper alignment, smooth operation, and secure fitting. We leave your property clean and tidy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Door Installation Pricing Guide</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="font-bold text-lg">Standard Interior Door</h3>
                      <p className="text-sm text-gray-600">Basic installation with standard hardware</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R1,500 - R2,500</p>
                      <p className="text-sm text-gray-600">per door</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="font-bold text-lg">Pivot Door Installation</h3>
                      <p className="text-sm text-gray-600">Premium pivot system with hardware</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R4,500 - R8,000</p>
                      <p className="text-sm text-gray-600">per door</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="font-bold text-lg">Barn Door Installation</h3>
                      <p className="text-sm text-gray-600">Sliding hardware and track system</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R3,500 - R6,500</p>
                      <p className="text-sm text-gray-600">per door</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <h3 className="font-bold text-lg">Security Door Installation</h3>
                      <p className="text-sm text-gray-600">Steel reinforced with multi-point locks</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R5,000 - R12,000</p>
                      <p className="text-sm text-gray-600">per door</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg">French Door Installation</h3>
                      <p className="text-sm text-gray-600">Double door system with weather sealing</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-2xl text-amber-600">R6,000 - R15,000</p>
                      <p className="text-sm text-gray-600">per set</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Prices include standard installation labor and basic hardware. Custom sizing, premium hardware, and additional structural work may affect final pricing. Contact us for a detailed quote.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Professional Door Installation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert door installation services throughout Gauteng. Free quotes, fast turnaround, and quality guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-amber-600 hover:bg-gray-100 text-lg px-8" asChild>
              <a href="tel:0633977498">
                <Phone className="mr-2 h-5 w-5" />
                Call 063 397 7498
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
