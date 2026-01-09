import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Phone, Clock, Award, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Drywall Installation Centurion | Professional Drywalling Services 2026",
  description:
    "Expert drywall installation in Centurion. Serving residential and commercial properties with quality finishes. Call 0676014490 for a free quote.",
  keywords:
    "drywall Centurion, drywalling Centurion, drywall installation Centurion, ceiling installation Centurion, drywall contractors Centurion",
}

export default function DrywallCenturionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Professional Drywall Installation in Centurion
            </h1>
            <p className="text-xl text-slate-300 mb-8 text-pretty">
              Quality drywalling services for Centurion's growing residential and commercial market. Expert
              craftsmanship for new builds and renovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Centurion's rapid growth as a residential and commercial hub creates constant demand for quality drywall
              installation services. Whether you're building a new home in Centurion Golf Estate, renovating an office
              in Highveld Techno Park, or upgrading a property in Irene, our expert team delivers professional
              drywalling solutions that meet the highest standards.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With extensive experience across Centurion's diverse property market, we understand the unique
              requirements of this dynamic area. From modern estates to established suburbs, we provide drywall
              installation services that enhance property value and create beautiful, functional spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Drywall Services in Centurion</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">New Build Installations</h3>
                  <p className="text-muted-foreground">
                    Complete drywall installation for new homes and developments across Centurion. From estate
                    properties to townhouse complexes, we deliver quality finishes on schedule.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Home Renovations</h3>
                  <p className="text-muted-foreground">
                    Transform your Centurion home with professional drywall renovations. Perfect for modernizing older
                    properties or creating new living spaces through extensions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Commercial Fitouts</h3>
                  <p className="text-muted-foreground">
                    Office and retail space fitouts in Centurion's business districts. Professional drywall solutions
                    for Highveld Techno Park and surrounding commercial areas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Ceiling Installation & Repairs</h3>
                  <p className="text-muted-foreground">
                    New ceiling installations and repairs for Centurion properties. From standard ceilings to decorative
                    features and suspended systems.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Partition Walls</h3>
                  <p className="text-muted-foreground">
                    Custom partition walls for homes and offices. Create flexible spaces, home offices, or divide large
                    rooms with professional drywall partitions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Water Damage Restoration</h3>
                  <p className="text-muted-foreground">
                    Expert ceiling and wall repairs for water damage. Common in Centurion's older properties, we restore
                    damaged drywall to perfect condition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Centurion Property Owners Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Home className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Over 120 projects completed across Centurion, from Irene to Centurion Golf Estate. We understand local
                  building styles and requirements.
                </p>
              </div>

              <div className="text-center">
                <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Reliable & Punctual</h3>
                <p className="text-muted-foreground">
                  We respect your time and schedule. Projects completed on time with clear communication throughout the
                  process.
                </p>
              </div>

              <div className="text-center">
                <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Guaranteed</h3>
                <p className="text-muted-foreground">
                  Premium materials and expert craftsmanship backed by comprehensive warranties. Your satisfaction is
                  our priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Common Drywall Challenges in Centurion</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">New Development Timelines</h3>
                  <p className="text-muted-foreground">
                    Centurion's booming property development sector demands contractors who can meet tight deadlines
                    without compromising quality. Our experienced team efficiently handles multiple units and
                    large-scale projects, ensuring developers and homeowners receive quality work on schedule.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Climate Considerations</h3>
                  <p className="text-muted-foreground">
                    Centurion's climate, with hot summers and occasional hailstorms, requires drywall installations that
                    can withstand temperature fluctuations and moisture. We use appropriate materials and techniques to
                    ensure long-lasting results in Centurion's conditions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Older Property Renovations</h3>
                  <p className="text-muted-foreground">
                    Many established Centurion suburbs feature older homes requiring careful renovation work. We
                    expertly handle challenges like uneven walls, outdated ceiling systems, and structural modifications
                    while maintaining the property's integrity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Centurion Drywall Installation Process</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Free Consultation & Quote</h3>
                  <p className="text-muted-foreground">
                    We visit your Centurion property to assess the project, discuss your requirements, and provide a
                    detailed, transparent quote with no hidden costs.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Project Planning</h3>
                  <p className="text-muted-foreground">
                    Detailed project timeline and material selection. We coordinate with other trades if necessary and
                    schedule work to suit your needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
                  <p className="text-muted-foreground">
                    Our skilled team arrives on time with all necessary equipment and materials. We work efficiently
                    while maintaining a clean, safe work environment.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Finishing</h3>
                  <p className="text-muted-foreground">
                    Meticulous finishing work including taping, mudding, and sanding to create perfectly smooth surfaces
                    ready for painting or wallpaper.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Final Inspection & Cleanup</h3>
                  <p className="text-muted-foreground">
                    Thorough cleanup and final walkthrough to ensure your complete satisfaction. Comprehensive warranty
                    for your peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Drywall Installation Pricing in Centurion</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Competitive pricing for quality drywall services in Centurion. Our rates reflect the value we deliver:
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Standard Drywall Installation</span>
                    <span className="text-orange-600 font-bold">R160 - R220/m²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Ceiling Installation</span>
                    <span className="text-orange-600 font-bold">R180 - R240/m²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Partition Walls</span>
                    <span className="text-orange-600 font-bold">R200 - R280/m²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Suspended Ceilings</span>
                    <span className="text-orange-600 font-bold">R220 - R320/m²</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Ceiling Repairs</span>
                    <span className="text-orange-600 font-bold">From R900</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  *Prices include materials and labor. Volume discounts available for large projects and new
                  developments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Recent Projects in Centurion</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-xl">PV</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Pieter van der Merwe</h4>
                      <p className="text-sm text-muted-foreground">Centurion Golf Estate</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Excellent work on our new home build. The team was professional, efficient, and delivered perfect
                    finishes throughout. They coordinated well with our other contractors and stayed on schedule. Highly
                    recommend for any Centurion project."
                  </p>
                  <div className="flex text-orange-600">★★★★★</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-xl">TM</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Thandi Mokoena</h4>
                      <p className="text-sm text-muted-foreground">Irene</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We needed ceiling repairs after water damage and they did an amazing job. You can't even tell where
                    the damage was. Fast, professional service and very reasonable pricing. Will definitely use them
                    again for future projects."
                  </p>
                  <div className="flex text-orange-600">★★★★★</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">We Also Serve These Nearby Areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link href="/drywall-pretoria" className="text-orange-600 hover:underline">
                Drywall Pretoria
              </Link>
              <Link href="/ceiling-installation-centurion" className="text-orange-600 hover:underline">
                Ceiling Installation Centurion
              </Link>
              <Link href="/drywall-midrand" className="text-orange-600 hover:underline">
                Drywall Midrand
              </Link>
              <Link href="/ceiling-installation-pretoria" className="text-orange-600 hover:underline">
                Ceiling Installation Pretoria
              </Link>
              <Link href="/drywall-fourways" className="text-orange-600 hover:underline">
                Drywall Fourways
              </Link>
              <Link href="/drywall-sandton" className="text-orange-600 hover:underline">
                Drywall Sandton
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Centurion Drywall Project?</h2>
            <p className="text-xl mb-8 text-orange-100">
              Get a free, no-obligation quote today. Call us now or request a quote online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-orange-600 hover:bg-orange-50">
                <Link href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <Link href="/contact">Request Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
