import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Phone, Award, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Drywall Installation Bryanston | Professional Drywalling Services 2026",
  description:
    "Expert drywall installation in Bryanston. Serving affluent residential areas with premium finishes. Call 0676014490 for a free quote today.",
  keywords:
    "drywall Bryanston, drywalling Bryanston, drywall installation Bryanston, ceiling installation Bryanston, drywall contractors Bryanston",
}

export default function DrywallBryanstonPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Professional Drywall Installation in Bryanston
            </h1>
            <p className="text-xl text-slate-300 mb-8 text-pretty">
              Premium drywalling services for Bryanston's luxury homes and estates. Expert craftsmanship that matches
              your property's elegance.
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
              Bryanston is synonymous with luxury living, and your home deserves drywalling services that reflect that
              standard. Whether you're renovating a classic Bryanston property near Bryanston Drive or building a modern
              masterpiece in Bryanston East, our expert team delivers flawless drywall installation that enhances your
              home's value and aesthetic appeal.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 15 years serving Bryanston's discerning homeowners, we understand the unique requirements of
              this prestigious area. From high ceilings and custom designs to soundproofing for home theaters, we bring
              precision and professionalism to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Drywall Services in Bryanston</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Luxury Home Installations</h3>
                  <p className="text-muted-foreground">
                    Premium drywall installation for Bryanston's high-end properties, including custom ceiling designs,
                    feature walls, and architectural details that complement your home's elegance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Home Theater & Entertainment Rooms</h3>
                  <p className="text-muted-foreground">
                    Specialized soundproof drywall installation for home theaters, music rooms, and entertainment
                    spaces. Perfect acoustic solutions for Bryanston's luxury homes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Estate Renovations</h3>
                  <p className="text-muted-foreground">
                    Complete drywall renovations for older Bryanston estates, modernizing interiors while preserving
                    architectural character and charm.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Suspended & Decorative Ceilings</h3>
                  <p className="text-muted-foreground">
                    Elegant suspended ceilings, coffered designs, and decorative ceiling installations that add
                    sophistication to your Bryanston home.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Partition Walls & Room Divisions</h3>
                  <p className="text-muted-foreground">
                    Custom partition walls for home offices, guest suites, and flexible living spaces. Ideal for
                    Bryanston's spacious properties.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Ceiling Repairs & Restoration</h3>
                  <p className="text-muted-foreground">
                    Expert ceiling repairs for water damage, cracks, and aging. Restoring your Bryanston home to
                    pristine condition with seamless finishes.
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
            <h2 className="text-3xl font-bold mb-12 text-center">Why Bryanston Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Premium Quality Standards</h3>
                <p className="text-muted-foreground">
                  We've completed over 80 projects in Bryanston, from Bryanston Country Club to Bryanston East, earning
                  a reputation for excellence that matches the area's prestige.
                </p>
              </div>

              <div className="text-center">
                <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fully Insured & Certified</h3>
                <p className="text-muted-foreground">
                  Comprehensive insurance coverage and certified craftsmen give you peace of mind when working on your
                  valuable Bryanston property.
                </p>
              </div>

              <div className="text-center">
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Discreet & Professional Service</h3>
                <p className="text-muted-foreground">
                  We respect your privacy and property. Our team works efficiently with minimal disruption to your daily
                  life in your Bryanston home.
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
            <h2 className="text-3xl font-bold mb-8">Common Drywall Challenges in Bryanston Homes</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">High Ceiling Installations</h3>
                  <p className="text-muted-foreground">
                    Many Bryanston homes feature impressive ceiling heights that require specialized equipment and
                    expertise. Our team has the tools and experience to handle installations up to 6 meters high,
                    ensuring perfect finishes even in grand entrance halls and double-volume living spaces.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Soundproofing Requirements</h3>
                  <p className="text-muted-foreground">
                    Bryanston's luxury homes often include home theaters, music rooms, and entertainment areas that
                    demand superior soundproofing. We install acoustic drywall systems that provide excellent sound
                    isolation without compromising on aesthetics.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Matching Existing Finishes</h3>
                  <p className="text-muted-foreground">
                    When renovating sections of established Bryanston properties, matching existing textures and
                    finishes is crucial. Our craftsmen excel at seamlessly blending new drywall with original work,
                    maintaining your home's cohesive appearance.
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
            <h2 className="text-3xl font-bold mb-12 text-center">Our Bryanston Drywall Installation Process</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consultation & Site Assessment</h3>
                  <p className="text-muted-foreground">
                    We visit your Bryanston property to assess the space, discuss your vision, and provide expert
                    recommendations tailored to your home's architecture and your aesthetic preferences.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Detailed Quote & Planning</h3>
                  <p className="text-muted-foreground">
                    Receive a comprehensive quote with no hidden costs, plus a detailed project timeline that respects
                    your schedule and minimizes disruption.
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
                    Our certified team arrives on time with all necessary equipment, working efficiently while
                    maintaining the cleanliness and security of your Bryanston home.
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
                    Meticulous finishing work including taping, mudding, sanding, and priming to create perfectly smooth
                    surfaces ready for your chosen paint or wallpaper.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Final Inspection & Guarantee</h3>
                  <p className="text-muted-foreground">
                    Thorough walkthrough to ensure your complete satisfaction, backed by our comprehensive workmanship
                    guarantee for your peace of mind.
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
            <h2 className="text-3xl font-bold mb-8 text-center">Drywall Installation Pricing in Bryanston</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Our pricing reflects the premium quality and service that Bryanston homeowners expect. While costs
                  vary based on project scope and specifications, here's what you can typically expect:
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Standard Drywall Installation</span>
                    <span className="text-orange-600 font-bold">R180 - R250/m²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Soundproof Drywall Systems</span>
                    <span className="text-orange-600 font-bold">R320 - R450/m²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Suspended Ceiling Installation</span>
                    <span className="text-orange-600 font-bold">R280 - R380/m²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Decorative Ceiling Features</span>
                    <span className="text-orange-600 font-bold">R400 - R650/m²</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Ceiling Repairs</span>
                    <span className="text-orange-600 font-bold">From R1,200</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  *Prices include materials and labor. Final quotes provided after site assessment. Premium materials
                  and complex designs may affect pricing.
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
            <h2 className="text-3xl font-bold mb-12 text-center">Recent Projects in Bryanston</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-xl">JM</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">James Morrison</h4>
                      <p className="text-sm text-muted-foreground">Bryanston East</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "We hired them for our home theater installation and the soundproofing is exceptional. The team was
                    professional, punctual, and the finish quality exceeded our expectations. Highly recommend for any
                    Bryanston homeowner."
                  </p>
                  <div className="flex text-orange-600">★★★★★</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-xl">SP</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah Patel</h4>
                      <p className="text-sm text-muted-foreground">Bryanston Drive</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Excellent work on our estate renovation. They matched the existing finishes perfectly and completed
                    the project on schedule. The attention to detail was impressive, and they kept our home clean
                    throughout the process."
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
              <Link href="/drywall-fourways" className="text-orange-600 hover:underline">
                Drywall Fourways
              </Link>
              <Link href="/drywall-rosebank" className="text-orange-600 hover:underline">
                Drywall Rosebank
              </Link>
              <Link href="/ceiling-repairs-randburg" className="text-orange-600 hover:underline">
                Ceiling Repairs Randburg
              </Link>
              <Link href="/suspended-ceilings-sandton" className="text-orange-600 hover:underline">
                Suspended Ceilings Sandton
              </Link>
              <Link href="/drywall-midrand" className="text-orange-600 hover:underline">
                Drywall Midrand
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Bryanston Home?</h2>
            <p className="text-xl mb-8 text-orange-100">
              Get a free, no-obligation quote for your drywall project today. Call us now or request a quote online.
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
