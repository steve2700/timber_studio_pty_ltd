import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Phone, Clock, Shield, Award, MapPin, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Ceiling Installation Bryanston | Professional Ceiling Contractors 2025",
  description:
    "Expert ceiling installation services in Bryanston. Suspended ceilings, gypsum ceilings, acoustic solutions. Licensed contractors, 5-year warranty. Call 079 468 7537 for free quotes.",
  keywords:
    "ceiling installation Bryanston, suspended ceilings Bryanston, gypsum ceiling Bryanston, acoustic ceiling installation, ceiling contractors Bryanston, professional ceiling installers",
  openGraph: {
    title: "Ceiling Installation Bryanston | Professional Ceiling Contractors 2025",
    description:
      "Expert ceiling installation services in Bryanston. Suspended ceilings, gypsum ceilings, acoustic solutions. Licensed contractors, 5-year warranty.",
    url: "https://granitecarpentry.co.za/ceiling-installation-bryanston",
    siteName: "Granite Carpentry & Joinery Experts",
    locale: "en_ZA",
    type: "website",
  },
}

export default function CeilingInstallationBryanstonPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              Serving Bryanston & Surrounding Areas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Ceiling Installation in Bryanston
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Transform your Bryanston property with expert ceiling installation services. Suspended ceilings, gypsum
              solutions, and acoustic installations backed by 5-year warranties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg">
                <Link href="tel:0794687537">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 079 468 7537
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
              <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-sm text-muted-foreground">Ceilings Installed</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Ceiling Installation Services in Bryanston</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Bryanston's upscale residential estates and commercial properties demand ceiling installations that
              combine aesthetic excellence with functional performance. Our professional ceiling installation services
              cater to the sophisticated requirements of Bryanston homeowners and businesses, delivering solutions that
              enhance property value while meeting the highest standards of craftsmanship.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From the luxury homes in Bryanston Hills to the modern offices along William Nicol Drive, we've installed
              thousands of ceilings that transform spaces. Whether you're renovating a family home near Bryanston
              Shopping Centre or upgrading a commercial property in the Hobart Grove area, our team brings expertise in
              suspended ceilings, gypsum installations, and acoustic solutions that meet Bryanston's premium standards.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">Comprehensive Ceiling Installation Solutions</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our ceiling installation services in Bryanston cover every aspect of modern ceiling systems. We specialize
              in suspended ceiling installations that provide easy access to services while maintaining clean,
              professional aesthetics. Our gypsum ceiling solutions offer seamless finishes perfect for residential
              applications, while our acoustic ceiling installations address sound management in commercial and
              entertainment spaces.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Suspended Ceiling Systems</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Grid ceiling installations with easy access panels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Commercial-grade suspended systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Concealed service integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Fire-rated ceiling solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Gypsum Ceiling Installation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Seamless gypsum board installations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Decorative ceiling designs and bulkheads</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Moisture-resistant solutions for bathrooms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Custom lighting integration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Acoustic Ceiling Solutions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Sound-absorbing ceiling tiles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Home theater acoustic installations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Office noise reduction systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Music room soundproofing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Specialty Installations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Coffered ceiling designs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Tray ceiling installations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Vaulted ceiling conversions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>LED lighting integration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">
              Why Bryanston Properties Choose Our Ceiling Installation Services
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Bryanston's reputation as one of Johannesburg's premier residential and commercial areas demands ceiling
              installation services that match its standards. Our team understands the unique requirements of Bryanston
              properties, from the architectural styles prevalent in the area to the expectations of discerning
              homeowners and business owners.
            </p>

            <div className="bg-muted/50 rounded-lg p-8 my-12">
              <h3 className="text-2xl font-semibold mb-6">The Bryanston Advantage</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Premium Materials
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We use only the highest quality ceiling materials that meet Bryanston's premium standards. Our
                    suppliers provide certified products with proven durability and performance, ensuring your ceiling
                    installation maintains its appearance and functionality for decades.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Expert Craftsmanship
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our ceiling installation team brings over 15 years of experience working on Bryanston properties. We
                    understand the architectural nuances and quality expectations that define the area, delivering
                    installations that enhance property value.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Efficient Project Management
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We respect your time and property. Our ceiling installations are completed efficiently with minimal
                    disruption to your daily routine. We maintain clean work sites and coordinate with other trades to
                    ensure smooth project progression.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Comprehensive Warranty
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Every ceiling installation comes with our comprehensive 5-year warranty covering materials and
                    workmanship. We stand behind our work and provide ongoing support to ensure your complete
                    satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">Our Ceiling Installation Process</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We follow a systematic approach to ceiling installation that ensures quality results and client
              satisfaction. From initial consultation to final inspection, every step is carefully managed to deliver
              ceiling installations that exceed expectations.
            </p>

            <div className="space-y-6 my-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Initial Consultation & Assessment</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We begin with a thorough site assessment at your Bryanston property. Our team evaluates the
                        existing structure, discusses your requirements, and provides expert recommendations on ceiling
                        systems that best suit your space and budget.
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
                      <h3 className="text-xl font-semibold mb-2">Detailed Quotation & Planning</h3>
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
                        receive warranty documentation and care instructions to ensure your ceiling maintains its
                        appearance and performance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">
              Ceiling Installation for Bryanston's Diverse Properties
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Bryanston encompasses a wide range of property types, each with unique ceiling installation requirements.
              Our experience spans residential estates, commercial offices, retail spaces, and hospitality venues
              throughout the area.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Residential Installations</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    From family homes to luxury estates, we install ceilings that enhance living spaces. Our residential
                    solutions focus on aesthetics, energy efficiency, and long-term durability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Commercial Projects</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Office buildings and commercial spaces require ceiling systems that balance functionality with
                    professional appearance. We deliver installations that meet building codes and enhance workplace
                    environments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Retail & Hospitality</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Retail and hospitality venues need ceiling installations that create the right atmosphere while
                    providing practical benefits. We design and install systems that support your business objectives.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">Ceiling Installation Pricing in Bryanston</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We provide transparent, competitive pricing for all ceiling installation services in Bryanston. Our
              quotations include all materials, labor, and finishing work, with no hidden costs. Pricing varies based on
              ceiling type, room size, and complexity of the installation.
            </p>

            <div className="bg-primary/5 rounded-lg p-8 my-12">
              <h3 className="text-2xl font-semibold mb-6">Typical Ceiling Installation Costs</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <div className="font-semibold">Suspended Ceiling Installation</div>
                    <div className="text-sm text-muted-foreground">Grid system with standard tiles</div>
                  </div>
                  <div className="text-lg font-semibold">R350 - R550/m²</div>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <div className="font-semibold">Gypsum Ceiling Installation</div>
                    <div className="text-sm text-muted-foreground">Seamless finish with cornice</div>
                  </div>
                  <div className="text-lg font-semibold">R280 - R450/m²</div>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <div className="font-semibold">Acoustic Ceiling Installation</div>
                    <div className="text-sm text-muted-foreground">Sound-absorbing tiles</div>
                  </div>
                  <div className="text-lg font-semibold">R420 - R680/m²</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Decorative Ceiling Installation</div>
                    <div className="text-sm text-muted-foreground">Coffered or tray ceiling designs</div>
                  </div>
                  <div className="text-lg font-semibold">R550 - R950/m²</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Prices include materials, labor, and finishing. Contact us for a detailed quotation based on your
                specific requirements.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">
              Frequently Asked Questions About Ceiling Installation
            </h2>

            <div className="space-y-6 my-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">How long does ceiling installation take?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Installation time varies based on room size and ceiling type. A standard residential room (20-30m²)
                    typically takes 2-3 days for suspended ceilings and 3-4 days for gypsum installations. Larger
                    commercial projects are scheduled based on specific requirements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Can you install ceilings in occupied buildings?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes, we regularly work in occupied residential and commercial properties. We minimize disruption by
                    working efficiently, maintaining clean work areas, and coordinating schedules to suit your needs.
                    For commercial properties, we can work after hours if required.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">What ceiling type is best for my property?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The ideal ceiling depends on your specific needs. Suspended ceilings work well for commercial spaces
                    and areas requiring service access. Gypsum ceilings provide seamless finishes for residential
                    applications. Acoustic ceilings are perfect for sound management. We assess your requirements and
                    recommend the most suitable solution.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Do you handle electrical and lighting integration?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We coordinate with licensed electricians to integrate lighting and electrical services into your
                    ceiling installation. We can accommodate downlights, LED strips, chandeliers, and other lighting
                    fixtures as part of the installation process.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">What warranty do you provide?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All ceiling installations come with our comprehensive 5-year warranty covering materials and
                    workmanship. This warranty ensures your ceiling maintains its structural integrity and appearance.
                    We also provide ongoing support for any questions or concerns.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">Serving Bryanston and Surrounding Areas</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              While we specialize in ceiling installation services throughout Bryanston, we also serve surrounding areas
              including Sandton, Fourways, Randburg, and other northern suburbs. Our team is familiar with the
              architectural styles and building requirements across the region.
            </p>

            <div className="bg-muted/50 rounded-lg p-8 my-12">
              <h3 className="text-2xl font-semibold mb-4">Related Ceiling Services</h3>
              <p className="text-muted-foreground mb-6">
                Explore our comprehensive range of ceiling services across Johannesburg:
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
                <Link
                  href="/suspended-ceilings-sandton"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Suspended Ceilings Sandton
                </Link>
                <Link href="/drywall-fourways" className="text-primary hover:underline flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Drywall Fourways
                </Link>
                <Link href="/ceiling-repairs-pretoria" className="text-primary hover:underline flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Ceiling Repairs Pretoria
                </Link>
                <Link href="/drywall-centurion" className="text-primary hover:underline flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Drywall Centurion
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Bryanston Property?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free, no-obligation quote for professional ceiling installation services. Our team is ready to
              discuss your project and provide expert recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg">
                <Link href="tel:0794687537">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 079 468 7537
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
