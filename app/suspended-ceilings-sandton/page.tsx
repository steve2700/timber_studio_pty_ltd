import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Phone, Clock, Shield, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Suspended Ceilings Sandton | Commercial Ceiling Installation 2026",
  description:
    "Professional suspended ceiling installation in Sandton. Expert commercial and office ceiling solutions. Call 0676014490 for a free quote.",
  keywords:
    "suspended ceilings Sandton, ceiling installation Sandton, commercial ceilings Sandton, office ceilings Sandton, drop ceilings Sandton",
}

export default function SuspendedCeilingsSandtonPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Suspended Ceiling Installation in Sandton
            </h1>
            <p className="text-xl text-slate-300 mb-8 text-pretty">
              Premium commercial ceiling solutions for Sandton's business district. Transform your office space with
              professional suspended ceiling systems.
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
              Sandton's status as Africa's richest square mile demands office spaces that reflect professionalism and
              sophistication. Whether you're fitting out a new office in Sandton City, upgrading your workspace near
              Nelson Mandela Square, or renovating commercial premises along Rivonia Road, our suspended ceiling
              solutions deliver the perfect combination of aesthetics, functionality, and cost-effectiveness.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 200 commercial projects completed across Sandton's CBD, we understand the unique requirements of
              corporate environments. From acoustic performance to fire ratings and easy access to services, we deliver
              suspended ceiling systems that meet all building regulations while enhancing your workspace.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Suspended Ceiling Services in Sandton</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Office Ceiling Systems</h3>
                  <p className="text-muted-foreground">
                    Complete suspended ceiling installation for corporate offices, including acoustic tiles, lighting
                    integration, and HVAC access panels. Perfect for Sandton's premium office buildings.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Retail & Commercial Spaces</h3>
                  <p className="text-muted-foreground">
                    Suspended ceilings for retail stores, showrooms, and commercial premises in Sandton City, Nelson
                    Mandela Square, and surrounding shopping centers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Acoustic Ceiling Solutions</h3>
                  <p className="text-muted-foreground">
                    High-performance acoustic suspended ceilings for conference rooms, boardrooms, and open-plan
                    offices. Reduce noise and improve productivity in your Sandton workspace.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Medical & Healthcare Facilities</h3>
                  <p className="text-muted-foreground">
                    Specialized hygienic ceiling systems for medical practices, clinics, and healthcare facilities.
                    Compliant with health regulations and easy to clean.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Fire-Rated Ceiling Systems</h3>
                  <p className="text-muted-foreground">
                    Fire-rated suspended ceilings that meet SANS building regulations. Essential for commercial
                    buildings and multi-story offices in Sandton.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Ceiling Maintenance & Repairs</h3>
                  <p className="text-muted-foreground">
                    Ongoing maintenance, tile replacement, and repair services for existing suspended ceiling systems
                    across Sandton's commercial properties.
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
            <h2 className="text-3xl font-bold mb-12 text-center">Why Sandton Businesses Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Building2 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Commercial Expertise</h3>
                <p className="text-muted-foreground">
                  Over 200 commercial projects completed in Sandton, from small offices to entire floor fitouts in
                  premium buildings like Sandton City Towers and Alice Lane.
                </p>
              </div>

              <div className="text-center">
                <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Minimal Business Disruption</h3>
                <p className="text-muted-foreground">
                  We work efficiently around your business hours, including after-hours and weekend installations to
                  minimize disruption to your Sandton operations.
                </p>
              </div>

              <div className="text-center">
                <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fully Compliant & Certified</h3>
                <p className="text-muted-foreground">
                  All installations meet SANS building regulations and fire safety standards. Comprehensive insurance
                  coverage for commercial projects.
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
            <h2 className="text-3xl font-bold mb-8">Common Ceiling Challenges in Sandton Commercial Spaces</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Acoustic Performance in Open-Plan Offices</h3>
                  <p className="text-muted-foreground">
                    Sandton's modern office buildings often feature open-plan layouts that can suffer from poor
                    acoustics. Our specialized acoustic suspended ceiling systems reduce noise reverberation by up to
                    70%, creating more productive work environments in buildings across Sandton CBD.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Service Access & Maintenance</h3>
                  <p className="text-muted-foreground">
                    Commercial buildings require regular access to electrical, HVAC, and data cabling above ceilings.
                    Our suspended ceiling systems provide easy access panels while maintaining a professional
                    appearance, essential for Sandton's high-standard office environments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Fire Safety Compliance</h3>
                  <p className="text-muted-foreground">
                    Multi-story buildings in Sandton must meet strict fire safety regulations. We install fire-rated
                    ceiling systems that comply with SANS 10400 Part T, ensuring your commercial property meets all
                    legal requirements while protecting occupants.
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
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Sandton Commercial Ceiling Installation Process
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Site Survey & Consultation</h3>
                  <p className="text-muted-foreground">
                    We visit your Sandton premises to assess the space, measure accurately, and discuss your
                    requirements including acoustic performance, lighting integration, and access needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Detailed Quotation & Planning</h3>
                  <p className="text-muted-foreground">
                    Receive a comprehensive quote including materials, labor, and project timeline. We coordinate with
                    your building management and schedule work to minimize business disruption.
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
                    Our experienced commercial team installs your suspended ceiling system efficiently, working around
                    your business hours if required. All work areas are protected and kept clean.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Assurance & Testing</h3>
                  <p className="text-muted-foreground">
                    Thorough inspection to ensure all tiles are level, lighting is properly integrated, and access
                    panels function correctly. We test acoustic performance where specified.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Handover & Warranty</h3>
                  <p className="text-muted-foreground">
                    Complete handover with maintenance guidelines and comprehensive warranty. We provide ongoing support
                    for your Sandton commercial ceiling system.
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
            <h2 className="text-3xl font-bold mb-8 text-center">Suspended Ceiling Pricing in Sandton</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Our commercial ceiling pricing is competitive and transparent. Costs vary based on ceiling type, area
                  size, and project complexity:
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Standard Suspended Ceiling (600x600mm tiles)</span>
                    <span className="text-orange-600 font-bold">R220 - R280/m²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Acoustic Ceiling Systems</span>
                    <span className="text-orange-600 font-bold">R280 - R380/m²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Fire-Rated Ceiling Systems</span>
                    <span className="text-orange-600 font-bold">R320 - R420/m²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Hygienic Ceiling (Medical/Healthcare)</span>
                    <span className="text-orange-600 font-bold">R380 - R480/m²</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Ceiling Tile Replacement</span>
                    <span className="text-orange-600 font-bold">From R45/tile</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  *Prices include materials, grid system, and installation. Volume discounts available for large
                  commercial projects. Lighting integration quoted separately.
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
            <h2 className="text-3xl font-bold mb-12 text-center">Recent Commercial Projects in Sandton</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-xl">DM</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">David Mthembu</h4>
                      <p className="text-sm text-muted-foreground">Facilities Manager, Sandton City</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We needed to upgrade 800m² of office ceiling with minimal disruption. The team worked after hours
                    and completed the project ahead of schedule. The acoustic improvement in our open-plan office is
                    remarkable. Highly professional service."
                  </p>
                  <div className="flex text-orange-600">★★★★★</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-xl">LN</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Lisa Naidoo</h4>
                      <p className="text-sm text-muted-foreground">Practice Manager, Medical Centre</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Excellent work installing hygienic ceiling systems in our medical practice. They understood the
                    compliance requirements and delivered a solution that meets all health regulations. The finish is
                    perfect and easy to maintain."
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
              <Link href="/drywall-sandton" className="text-orange-600 hover:underline">
                Drywall Sandton
              </Link>
              <Link href="/ceiling-repairs-sandton" className="text-orange-600 hover:underline">
                Ceiling Repairs Sandton
              </Link>
              <Link href="/drywall-rosebank" className="text-orange-600 hover:underline">
                Drywall Rosebank
              </Link>
              <Link href="/drywall-bryanston" className="text-orange-600 hover:underline">
                Drywall Bryanston
              </Link>
              <Link href="/suspended-ceilings-johannesburg" className="text-orange-600 hover:underline">
                Suspended Ceilings Johannesburg
              </Link>
              <Link href="/drywall-fourways" className="text-orange-600 hover:underline">
                Drywall Fourways
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Transform Your Sandton Commercial Space</h2>
            <p className="text-xl mb-8 text-orange-100">
              Get a free, no-obligation quote for your suspended ceiling project. Call us now or request a quote online.
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
