import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Phone, Mail, MapPin, Clock, Award, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Drywall Installation Fourways | Expert Drywalling Contractors 2026",
  description:
    "Professional drywall installation in Fourways, Monte Casino & Dainfern. Expert drywalling contractors for new builds, extensions & renovations. Call 0676014490 for free quotes.",
  keywords:
    "drywall fourways, drywalling fourways, drywall installation fourways, drywall contractors fourways, fourways drywall, monte casino drywall, dainfern drywall",
  openGraph: {
    title: "Drywall Installation Fourways | Expert Drywalling Contractors 2026",
    description:
      "Professional drywall installation in Fourways, Monte Casino & Dainfern. Expert drywalling contractors for new builds, extensions & renovations.",
    url: "https://granitecarpentry.co.za/drywall-fourways",
    siteName: "Granite Carpentry & Joinery Experts",
    locale: "en_ZA",
    type: "website",
  },
}

export default function DrywallFourwaysPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Drywall Installation in Fourways
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 text-balance">
              Expert Drywalling Services for Monte Casino, Dainfern & Fourways Estates | 2026
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white text-slate-900 hover:bg-slate-100">
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
            <p className="text-lg leading-relaxed mb-6">
              Fourways has experienced explosive growth over the past decade, transforming from a quiet suburb into one
              of Johannesburg's most sought-after residential and commercial hubs. With developments like Monte Casino,
              Dainfern Estate, Cedar Square, and countless new residential estates, the demand for professional drywall
              installation in Fourways has never been higher.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              At Granite Carpentry & Joinery Experts, we've been at the forefront of Fourways' transformation,
              completing over 200 drywall projects in the area since 2020. From luxury homes in Dainfern Golf Estate to
              modern apartments near Monte Casino, and commercial spaces in Cedar Square, we understand the unique
              requirements of Fourways properties.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're building a new home in one of Fourways' premium estates, extending your existing property,
              or renovating a commercial space, our expert drywalling contractors deliver precision workmanship that
              stands the test of time. We specialize in modern drywall solutions that complement Fourways' contemporary
              architectural style while meeting the highest quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Drywall Services in Fourways</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                    New Build Drywall Installation
                  </h3>
                  <p className="text-muted-foreground">
                    Complete drywall installation for new homes and developments across Fourways estates. We work with
                    architects and builders to deliver flawless finishes for modern properties.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                    Home Extensions & Additions
                  </h3>
                  <p className="text-muted-foreground">
                    Expanding your Fourways home? We seamlessly integrate new drywall with existing structures, ensuring
                    perfect color and texture matching for extensions and room additions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                    Commercial Drywall Solutions
                  </h3>
                  <p className="text-muted-foreground">
                    Office partitions, retail spaces, and commercial fit-outs near Monte Casino and Cedar Square. Fast
                    turnaround times to minimize business disruption.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                    Ceiling Installation & Repairs
                  </h3>
                  <p className="text-muted-foreground">
                    Suspended ceilings, bulkheads, and decorative ceiling features. We repair water damage, cracks, and
                    sagging ceilings common in Fourways properties.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                    Soundproofing Solutions
                  </h3>
                  <p className="text-muted-foreground">
                    Essential for townhouses and apartments in Fourways' high-density developments. Double-layer drywall
                    with acoustic insulation for maximum noise reduction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                    Feature Walls & Custom Designs
                  </h3>
                  <p className="text-muted-foreground">
                    Curved walls, archways, and modern design elements that complement Fourways' contemporary
                    architectural style. Perfect for luxury homes and high-end properties.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Fourways Homeowners Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fourways Area Expertise</h3>
                  <p className="text-muted-foreground">
                    We've completed over 200 projects in Fourways, from Dainfern Golf Estate to Monte Casino apartments.
                    We understand the building codes, estate regulations, and architectural styles unique to this area.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Estate-Approved Contractors</h3>
                  <p className="text-muted-foreground">
                    We're approved contractors for major Fourways estates including Dainfern, Steyn City, and
                    Broadacres. We handle all estate paperwork and comply with strict building regulations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Premium Quality Standards</h3>
                  <p className="text-muted-foreground">
                    Fourways properties demand the highest quality finishes. We use premium materials and Level 5
                    finishing techniques to deliver showroom-quality results that match the area's luxury standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fast Project Completion</h3>
                  <p className="text-muted-foreground">
                    We understand that time is money in Fourways' fast-paced property market. Our efficient teams
                    complete projects on schedule without compromising quality, minimizing disruption to your life or
                    business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Common Drywall Challenges in Fourways Properties
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">New Development Settlement Issues</h3>
                  <p className="text-muted-foreground mb-4">
                    With Fourways' rapid development, many new homes experience settlement cracks in the first 2-3
                    years. We see this frequently in estates like Steyn City and Waterfall Estate. These cracks appear
                    at wall joints, corners, and around door frames as the building settles.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Our Solution:</strong> We use flexible joint compounds and proper taping techniques that
                    accommodate natural settlement. For new builds, we recommend waiting 12-18 months before final
                    finishing to allow for initial settlement.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Soundproofing in High-Density Developments</h3>
                  <p className="text-muted-foreground mb-4">
                    Fourways has seen a surge in townhouse complexes and apartment buildings near Monte Casino and Cedar
                    Square. Noise transfer between units is a major complaint we hear from residents. Standard
                    single-layer drywall provides minimal sound insulation.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Our Solution:</strong> We install double-layer drywall with acoustic insulation and
                    resilient channels. This reduces noise transfer by up to 60%, creating peaceful living spaces even
                    in high-density developments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Water Damage from Summer Storms</h3>
                  <p className="text-muted-foreground mb-4">
                    Fourways experiences intense summer thunderstorms and occasional hail. We frequently repair ceiling
                    damage from roof leaks, especially in older properties around Lonehill and Paulshof. Water-damaged
                    drywall must be replaced, not just painted over.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Our Solution:</strong> We identify and repair the source of leaks before replacing damaged
                    drywall. We use moisture-resistant drywall in vulnerable areas and apply proper sealing to prevent
                    future damage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Fourways Drywall Installation Process
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Free On-Site Consultation</h3>
                  <p className="text-muted-foreground">
                    We visit your Fourways property to assess the project scope, take measurements, and discuss your
                    requirements. For estate properties, we review building regulations and obtain necessary approvals.
                    You'll receive a detailed quote within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Material Selection & Preparation</h3>
                  <p className="text-muted-foreground">
                    We source premium drywall materials suitable for Fourways' climate and your specific needs. For
                    soundproofing projects, we use acoustic-rated materials. For moisture-prone areas, we select
                    water-resistant boards. All materials are delivered to your property on schedule.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
                  <p className="text-muted-foreground">
                    Our certified installers frame, hang, and secure drywall sheets with precision. We ensure perfect
                    alignment, proper spacing, and secure fastening. For commercial projects near Monte Casino, we work
                    after hours to minimize disruption.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Taping, Mudding & Finishing</h3>
                  <p className="text-muted-foreground">
                    We apply multiple coats of joint compound, sanding between each layer to achieve a flawless finish.
                    For luxury Fourways homes, we provide Level 5 finishing—the highest quality standard that eliminates
                    all imperfections.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Inspection & Cleanup</h3>
                  <p className="text-muted-foreground">
                    We conduct a thorough inspection to ensure every surface meets our quality standards. We clean the
                    work area completely, removing all dust and debris. Your property is left ready for painting or
                    final finishing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Drywall Installation Pricing in Fourways
            </h2>
            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-lg mb-6">
                  Drywall installation costs in Fourways vary based on project complexity, materials, and finishing
                  requirements. Here's what you can expect for 2026:
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Standard Drywall Installation</span>
                    <span className="text-amber-600 font-bold">R180 - R250 per m²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Soundproof Double-Layer Drywall</span>
                    <span className="text-amber-600 font-bold">R320 - R420 per m²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Ceiling Installation (Suspended)</span>
                    <span className="text-amber-600 font-bold">R200 - R280 per m²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Feature Walls & Custom Designs</span>
                    <span className="text-amber-600 font-bold">R350 - R550 per m²</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Ceiling Repairs (Water Damage)</span>
                    <span className="text-amber-600 font-bold">R150 - R200 per m²</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  *Prices include materials, labor, and finishing. Estate access fees and after-hours work may incur
                  additional charges. Contact us for a detailed quote specific to your Fourways project.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Recent Fourways Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-amber-500">★★★★★</div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "We hired Granite Carpentry for a complete drywall installation in our new Dainfern home. The team
                    was professional, punctual, and delivered exceptional quality. They handled all the estate paperwork
                    and completed the project in just 3 weeks. The finish is absolutely flawless—better than we
                    expected!"
                  </p>
                  <p className="font-semibold">— Michael & Sarah T.</p>
                  <p className="text-sm text-muted-foreground">Dainfern Golf Estate, Fourways</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-amber-500">★★★★★</div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Our townhouse in Cedar Square had terrible noise issues from neighbors. Granite Carpentry installed
                    soundproof drywall in our bedrooms and living areas. The difference is incredible—we can finally
                    sleep peacefully! The team was clean, efficient, and respectful of our property. Highly recommend
                    for Fourways residents."
                  </p>
                  <p className="font-semibold">— James K.</p>
                  <p className="text-sm text-muted-foreground">Cedar Square, Fourways</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-amber-500">★★★★★</div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "We needed urgent ceiling repairs after a storm damaged our roof. Granite Carpentry responded within
                    24 hours, identified the leak source, and replaced the damaged ceiling perfectly. You can't even
                    tell where the repair was done. Excellent service and fair pricing for Fourways area."
                  </p>
                  <p className="font-semibold">— Linda M.</p>
                  <p className="text-sm text-muted-foreground">Lonehill, Fourways</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-amber-500">★★★★★</div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Our office near Monte Casino needed new partitions for a growing team. Granite Carpentry worked
                    after hours to avoid disrupting our business. The soundproof partitions look great and provide
                    excellent privacy. Professional service from start to finish. Will definitely use them again."
                  </p>
                  <p className="font-semibold">— David R.</p>
                  <p className="text-sm text-muted-foreground">Monte Casino Area, Fourways</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">We Also Serve These Nearby Areas</h2>
            <p className="text-center text-muted-foreground mb-8">
              Professional drywall installation services throughout Northern Johannesburg
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                href="/drywall-sandton"
                className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <MapPin className="h-6 w-6 mx-auto mb-2 text-amber-600" />
                <span className="font-semibold">Sandton</span>
              </Link>
              <Link
                href="/drywall-midrand"
                className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <MapPin className="h-6 w-6 mx-auto mb-2 text-amber-600" />
                <span className="font-semibold">Midrand</span>
              </Link>
              <Link
                href="/ceiling-repairs-randburg"
                className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <MapPin className="h-6 w-6 mx-auto mb-2 text-amber-600" />
                <span className="font-semibold">Randburg</span>
              </Link>
              <Link
                href="/drywall-rosebank"
                className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <MapPin className="h-6 w-6 mx-auto mb-2 text-amber-600" />
                <span className="font-semibold">Rosebank</span>
              </Link>
              <Link
                href="/suspended-ceilings-johannesburg"
                className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <MapPin className="h-6 w-6 mx-auto mb-2 text-amber-600" />
                <span className="font-semibold">Johannesburg</span>
              </Link>
              <Link
                href="/drywalling-contractors-johannesburg"
                className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <MapPin className="h-6 w-6 mx-auto mb-2 text-amber-600" />
                <span className="font-semibold">Joburg Central</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Fourways Drywall Project?</h2>
            <p className="text-xl mb-8 text-amber-50">
              Get a free, no-obligation quote for your Fourways property today. Fast response times and competitive
              pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-amber-700 hover:bg-slate-100">
                <Link href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-amber-800 bg-transparent"
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Request Quote Online
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-amber-100">
              Serving Fourways, Monte Casino, Dainfern, Cedar Square, Lonehill, Paulshof & surrounding areas
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
