import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Phone, Clock, Shield, Award, MapPin, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Drywall Installation Pretoria | Professional Drywalling Services 2025",
  description:
    "Expert drywall installation in Pretoria. Residential & commercial drywalling, partitions, ceilings. Licensed contractors, 5-year warranty. Call 067 601 4490 free quotes.",
  keywords:
    "drywall Pretoria, drywalling Pretoria, drywall installation Pretoria, drywall contractors Pretoria, partition walls Pretoria, gypsum board installation",
  openGraph: {
    title: "Drywall Installation Pretoria | Professional Drywalling Services 2025",
    description:
      "Expert drywall installation in Pretoria. Residential & commercial drywalling, partitions, ceilings. Licensed contractors, 5-year warranty.",
    url: "https://granitecarpentry.co.za/drywall-pretoria",
    siteName: "Granite Carpentry & Joinery Experts",
    locale: "en_ZA",
    type: "website",
  },
}

export default function DrywallPretoriaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              Serving Pretoria & Surrounding Areas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Drywall Installation in Pretoria
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Transform your Pretoria property with expert drywall installation services. Residential and commercial
              drywalling solutions backed by 5-year warranties and professional craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg">
                <Link href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 0676014490
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg bg-transparent">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Licensed Contractors</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>5-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Same-Day Quotes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3,200+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5-Year</div>
              <div className="text-sm text-muted-foreground">Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Drywall Installation Services in Pretoria</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Pretoria's diverse architectural landscape, from historic homes in Brooklyn to modern developments in
              Waterkloof Ridge, demands drywall installation services that combine traditional craftsmanship with
              contemporary techniques. Our professional drywalling team serves the entire Pretoria metropolitan area,
              delivering solutions that enhance property value while meeting the highest standards of quality and
              durability.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From residential renovations in Menlyn to commercial fit-outs in the CBD, we've completed thousands of
              drywall installations across Pretoria. Whether you're dividing office space in Hatfield, creating
              additional rooms in Centurion, or renovating a family home in Lynnwood, our team brings expertise in
              partition walls, ceiling installations, and complete interior transformations that meet Pretoria's
              building standards.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">
              Comprehensive Drywall Solutions for Pretoria Properties
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our drywall installation services in Pretoria cover every aspect of modern interior construction. We
              specialize in partition wall installations that maximize space utilization, ceiling systems that enhance
              aesthetics and functionality, and complete interior renovations that transform properties. Each project
              receives the same attention to detail and commitment to quality that has made us Pretoria's trusted
              drywall specialists.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Partition Wall Installation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Office space division and reconfiguration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Residential room additions and conversions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Soundproof partition walls</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Fire-rated wall systems</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Ceiling Installation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Suspended ceiling systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Gypsum board ceiling installations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Decorative ceiling designs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Acoustic ceiling solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Commercial Drywalling</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Office fit-outs and renovations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Retail space construction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Medical facility partitioning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Educational facility construction</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Specialty Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Moisture-resistant drywall for bathrooms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Impact-resistant drywall for high-traffic areas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Curved wall installations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Bulkhead and feature wall construction</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">Why Pretoria Chooses Our Drywall Services</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Pretoria's status as South Africa's administrative capital brings unique requirements for both residential
              and commercial properties. Our drywall installation services are designed to meet these demands, providing
              solutions that combine functionality, aesthetics, and compliance with local building regulations.
            </p>

            <div className="bg-muted/50 rounded-lg p-8 my-12">
              <h3 className="text-2xl font-semibold mb-6">The Pretoria Difference</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Local Expertise
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    With over 15 years serving Pretoria, we understand the city's unique architectural styles and
                    building requirements. From heritage properties to modern developments, we deliver drywall
                    installations that respect the character of each area while meeting contemporary standards.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Quality Materials
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We use premium drywall materials from trusted suppliers, ensuring durability and performance in
                    Pretoria's climate. Our materials meet SANS standards and come with manufacturer warranties for your
                    peace of mind.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Efficient Service
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We respect your time and minimize disruption to your daily routine. Our team works efficiently,
                    maintains clean work sites, and completes projects on schedule without compromising quality.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Comprehensive Warranty
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Every drywall installation comes with our 5-year warranty covering materials and workmanship. We
                    stand behind our work and provide ongoing support to ensure your complete satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">Our Drywall Installation Process</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We follow a systematic approach to drywall installation that ensures quality results and client
              satisfaction. From initial consultation to final inspection, every step is carefully managed to deliver
              installations that exceed expectations.
            </p>

            <div className="space-y-6 my-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Site Assessment & Consultation</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We begin with a thorough assessment of your Pretoria property. Our team evaluates the existing
                        structure, discusses your requirements, and provides expert recommendations on drywall solutions
                        that best suit your space and budget.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Detailed Quotation</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        You receive a comprehensive quotation detailing materials, labor, and timeline. We explain all
                        aspects of the installation process and answer any questions to ensure you're completely
                        comfortable before work begins.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Our experienced team arrives on schedule with all necessary materials and equipment. We protect
                        your property, complete the installation efficiently, and maintain a clean work environment
                        throughout the project.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Quality Inspection & Handover</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We conduct a thorough quality inspection and walk you through the completed installation. You
                        receive warranty documentation and care instructions to ensure your drywall maintains its
                        appearance and performance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">Drywall Installation Pricing in Pretoria</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We provide transparent, competitive pricing for all drywall installation services in Pretoria. Our
              quotations include all materials, labor, and finishing work, with no hidden costs. Pricing varies based on
              project scope, materials selected, and complexity of the installation.
            </p>

            <div className="bg-primary/5 rounded-lg p-8 my-12">
              <h3 className="text-2xl font-semibold mb-6">Typical Drywall Installation Costs</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <div className="font-semibold">Standard Partition Wall</div>
                    <div className="text-sm text-muted-foreground">Single layer, taped and finished</div>
                  </div>
                  <div className="text-lg font-semibold">R320 - R480/m²</div>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <div className="font-semibold">Soundproof Partition</div>
                    <div className="text-sm text-muted-foreground">Double layer with insulation</div>
                  </div>
                  <div className="text-lg font-semibold">R550 - R750/m²</div>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <div className="font-semibold">Ceiling Installation</div>
                    <div className="text-sm text-muted-foreground">Gypsum board with cornice</div>
                  </div>
                  <div className="text-lg font-semibold">R280 - R420/m²</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Complete Room Addition</div>
                    <div className="text-sm text-muted-foreground">Walls, ceiling, finishing</div>
                  </div>
                  <div className="text-lg font-semibold">R450 - R680/m²</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Prices include materials, labor, and finishing. Contact us for a detailed quotation based on your
                specific requirements.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">Frequently Asked Questions</h2>

            <div className="space-y-6 my-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">How long does drywall installation take?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Installation time varies based on project scope. A standard partition wall (10-15m²) typically takes
                    2-3 days including finishing. Larger projects are scheduled based on specific requirements, with
                    detailed timelines provided in your quotation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Can you work in occupied buildings?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes, we regularly work in occupied residential and commercial properties throughout Pretoria. We
                    minimize disruption by working efficiently, maintaining clean work areas, and coordinating schedules
                    to suit your needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Do you handle electrical and plumbing integration?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We coordinate with licensed electricians and plumbers to integrate services into your drywall
                    installation. We can accommodate electrical outlets, switches, plumbing fixtures, and HVAC systems
                    as part of the installation process.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">What areas of Pretoria do you serve?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We serve all areas of Pretoria including Brooklyn, Waterkloof, Menlyn, Hatfield, Lynnwood,
                    Centurion, and surrounding suburbs. Our team is familiar with the building requirements and
                    architectural styles across the region.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">What warranty do you provide?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All drywall installations come with our comprehensive 5-year warranty covering materials and
                    workmanship. This warranty ensures your installation maintains its structural integrity and
                    appearance. We also provide ongoing support for any questions or concerns.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 my-12">
              <h3 className="text-2xl font-semibold mb-4">Related Drywall Services</h3>
              <p className="text-muted-foreground mb-6">
                Explore our comprehensive range of drywall and ceiling services:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/drywall-sandton" className="text-primary hover:underline flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Drywall Installation Sandton
                </Link>
                <Link href="/ceiling-repairs-randburg" className="text-primary hover:underline flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Ceiling Repairs Randburg
                </Link>
                <Link href="/drywall-centurion" className="text-primary hover:underline flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Drywall Centurion
                </Link>
                <Link href="/ceiling-repairs-pretoria" className="text-primary hover:underline flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Ceiling Repairs Pretoria
                </Link>
                <Link href="/drywall-fourways" className="text-primary hover:underline flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Drywall Fourways
                </Link>
                <Link
                  href="/ceiling-installation-bryanston"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Ceiling Installation Bryanston
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Pretoria Property?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free, no-obligation quote for professional drywall installation services. Our team is ready to
              discuss your project and provide expert recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg">
                <Link href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 0676014490
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/contact">Request Free Quote</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              Licensed contractors • 5-year warranty • Same-day quotes available
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
