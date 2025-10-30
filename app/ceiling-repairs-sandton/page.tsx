import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Phone, Mail, MapPin, Clock, Award, Shield, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Ceiling Repairs Sandton | Professional Ceiling Contractors 2025",
  description:
    "Expert ceiling repairs in Sandton, Sandton City & Nelson Mandela Square. Water damage, cracks, sagging ceilings fixed fast. Call 0676014490 for emergency repairs.",
  keywords:
    "ceiling repairs sandton, ceiling contractors sandton, ceiling repair sandton city, water damage ceiling sandton, sagging ceiling repair sandton, ceiling specialists sandton",
  openGraph: {
    title: "Ceiling Repairs Sandton | Professional Ceiling Contractors 2025",
    description:
      "Expert ceiling repairs in Sandton, Sandton City & Nelson Mandela Square. Water damage, cracks, sagging ceilings fixed fast.",
    url: "https://granitecarpentry.co.za/ceiling-repairs-sandton",
    siteName: "Granite Carpentry & Joinery Experts",
    locale: "en_ZA",
    type: "website",
  },
}

export default function CeilingRepairsSandtonPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Ceiling Repairs in Sandton
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 text-balance">
              Expert Ceiling Contractors for Sandton City, Morningside & Hyde Park | Emergency Repairs Available 2025
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href="/contact">Get Emergency Quote</Link>
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
              Sandton's status as Africa's richest square mile comes with high expectations for property maintenance and
              aesthetics. Whether you own a luxury apartment near Sandton City, a corporate office in the CBD, or a
              prestigious home in Hyde Park, ceiling damage can significantly impact your property's value and
              appearance.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              At Granite Carpentry & Joinery Experts, we've been Sandton's trusted ceiling repair specialists since
              2015, completing over 500 ceiling repair projects across the area. From emergency water damage repairs in
              high-rise apartments to cosmetic crack repairs in heritage homes, we understand the unique challenges
              Sandton properties face.
            </p>
            <p className="text-lg leading-relaxed">
              Sandton's mix of modern high-rises, older residential properties, and premium commercial spaces each
              present distinct ceiling repair challenges. Our expert team has the experience and equipment to handle
              everything from minor cosmetic repairs to complete ceiling replacements, always delivering the flawless
              finishes that Sandton properties demand.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Ceiling Repair Services in Sandton</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                    Water Damage Ceiling Repairs
                  </h3>
                  <p className="text-muted-foreground">
                    Emergency repairs for water-damaged ceilings from burst pipes, roof leaks, or geyser failures.
                    Common in Sandton's high-rise apartments and older homes. We identify the source, repair structural
                    damage, and restore ceilings to perfect condition.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                    Crack Repair & Resurfacing
                  </h3>
                  <p className="text-muted-foreground">
                    Professional repair of ceiling cracks caused by building settlement, temperature changes, or
                    structural movement. We use flexible compounds that prevent cracks from reappearing, essential for
                    Sandton's older properties.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                    Sagging Ceiling Repairs
                  </h3>
                  <p className="text-muted-foreground">
                    Urgent repairs for sagging or bowing ceilings—a safety hazard that requires immediate attention. We
                    reinforce ceiling structures, replace damaged boards, and restore structural integrity to prevent
                    collapse.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                    Suspended Ceiling Repairs
                  </h3>
                  <p className="text-muted-foreground">
                    Repairs and tile replacement for suspended ceilings in Sandton's commercial buildings and offices.
                    We match existing tiles perfectly and repair damaged grid systems for seamless results.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                    Mold & Moisture Damage
                  </h3>
                  <p className="text-muted-foreground">
                    Complete mold remediation and ceiling replacement for moisture-damaged areas. Critical for Sandton
                    apartments with bathroom or kitchen ceiling damage. We address the moisture source and prevent
                    future mold growth.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                    Cosmetic Ceiling Restoration
                  </h3>
                  <p className="text-muted-foreground">
                    Restoration of decorative ceiling features, cornices, and ornate designs in Sandton's heritage
                    properties. We match existing textures and styles perfectly for invisible repairs that maintain
                    property value.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Sandton Property Owners Trust Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Emergency Response Available</h3>
                  <p className="text-muted-foreground">
                    We understand that ceiling damage often requires urgent attention, especially water damage that can
                    worsen quickly. We offer same-day emergency response for Sandton properties, with teams available
                    24/7 for critical repairs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Premium Quality Standards</h3>
                  <p className="text-muted-foreground">
                    Sandton properties demand flawless finishes. We use Level 5 finishing techniques and premium
                    materials to ensure repairs are completely invisible. Our work matches the high standards expected
                    in Sandton's luxury market.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Wrench className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complete Problem Solving</h3>
                  <p className="text-muted-foreground">
                    We don't just patch symptoms—we identify and fix root causes. Whether it's a hidden leak, structural
                    issue, or ventilation problem, we solve the underlying issue to prevent future damage and save you
                    money long-term.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Minimal Disruption</h3>
                  <p className="text-muted-foreground">
                    We understand that Sandton residents and businesses can't afford extended downtime. Our efficient
                    teams complete most repairs within 1-3 days, working around your schedule to minimize disruption to
                    your life or business operations.
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
              Common Ceiling Problems in Sandton Properties
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">High-Rise Water Damage</h3>
                  <p className="text-muted-foreground mb-4">
                    Sandton's numerous high-rise apartments face unique ceiling damage risks. Leaks from units above,
                    burst pipes in ceiling voids, and geyser failures can cause extensive water damage. We see this
                    frequently in buildings around Sandton City and along Rivonia Road.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Our Solution:</strong> We respond within hours for emergency water damage. We use moisture
                    meters to assess damage extent, remove affected materials, dry the area completely, and replace
                    damaged ceiling sections. We coordinate with building management and insurance companies for
                    seamless claims processing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Settlement Cracks in Older Homes</h3>
                  <p className="text-muted-foreground mb-4">
                    Many of Sandton's prestigious homes in Hyde Park, Sandhurst, and Morningside were built 30-50 years
                    ago. These properties commonly develop ceiling cracks at joints and corners as the building
                    continues to settle. Standard repairs often fail within months as the building continues to move.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Our Solution:</strong> We use flexible joint compounds and fiberglass mesh tape that
                    accommodate ongoing movement. For severe cases, we install expansion joints that allow natural
                    building movement without visible cracking. This prevents recurring repairs and maintains your
                    home's pristine appearance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Commercial Ceiling Tile Damage</h3>
                  <p className="text-muted-foreground mb-4">
                    Sandton's CBD is filled with office buildings using suspended ceiling systems. Tiles become stained
                    from water leaks, damaged during maintenance work, or simply age and discolor. Mismatched
                    replacement tiles look unprofessional and impact your business image.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Our Solution:</strong> We maintain extensive tile inventories to match existing systems
                    perfectly. For discontinued tiles, we can replace entire sections with modern alternatives or source
                    specialty tiles. We work after hours to avoid disrupting your business operations.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Sandton Ceiling Repair Process</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Emergency Assessment</h3>
                  <p className="text-muted-foreground">
                    For urgent repairs, we respond within 2-4 hours to assess damage and prevent further deterioration.
                    For non-emergency repairs, we schedule a convenient inspection time. We provide detailed damage
                    assessment, identify root causes, and explain repair options clearly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Transparent Quotation</h3>
                  <p className="text-muted-foreground">
                    We provide detailed quotes within 24 hours, breaking down materials, labor, and any additional work
                    required. For insurance claims, we provide comprehensive documentation and photos. No hidden
                    fees—what we quote is what you pay.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Root Cause Resolution</h3>
                  <p className="text-muted-foreground">
                    Before repairing ceiling damage, we identify and fix the underlying cause. This might involve
                    coordinating with plumbers for leak repairs, addressing ventilation issues, or reinforcing
                    structural supports. This prevents recurring problems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Repair Work</h3>
                  <p className="text-muted-foreground">
                    Our certified technicians remove damaged materials, prepare surfaces properly, and install new
                    ceiling sections. We match textures, colors, and finishes perfectly. For Sandton's luxury
                    properties, we use Level 5 finishing for completely invisible repairs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xl">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
                  <p className="text-muted-foreground">
                    We conduct thorough quality inspections and clean the work area completely. All repairs come with
                    our workmanship guarantee. We follow up after completion to ensure your complete satisfaction and
                    address any concerns immediately.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Ceiling Repair Pricing in Sandton</h2>
            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-lg mb-6">
                  Ceiling repair costs vary based on damage extent, ceiling type, and access difficulty. Here's what
                  Sandton property owners can expect for 2025:
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Minor Crack Repairs</span>
                    <span className="text-amber-600 font-bold">R800 - R1,500</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Water Damage Repair (per m²)</span>
                    <span className="text-amber-600 font-bold">R250 - R400 per m²</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Sagging Ceiling Repair</span>
                    <span className="text-amber-600 font-bold">R3,500 - R8,000</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold">Suspended Ceiling Tile Replacement</span>
                    <span className="text-amber-600 font-bold">R150 - R250 per tile</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Complete Ceiling Replacement</span>
                    <span className="text-amber-600 font-bold">R220 - R350 per m²</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  *Prices include materials, labor, and finishing. Emergency call-outs and after-hours work may incur
                  additional charges. High-rise access fees may apply for apartments above 10 floors. Contact us for a
                  detailed quote specific to your Sandton property.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Sandton Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-amber-500">★★★★★</div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Our apartment near Sandton City had severe water damage from a burst pipe in the unit above.
                    Granite Carpentry responded within 3 hours, assessed the damage, and started repairs the next day.
                    The ceiling looks perfect now—you can't tell there was ever any damage. Professional service and
                    fair pricing."
                  </p>
                  <p className="font-semibold">— Robert & Jennifer M.</p>
                  <p className="text-sm text-muted-foreground">Sandton City Area</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-amber-500">★★★★★</div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Our Hyde Park home had persistent ceiling cracks that kept reappearing despite multiple repairs.
                    Granite Carpentry explained the settlement issue and used flexible materials that finally solved the
                    problem. Two years later, the ceilings still look perfect. Highly recommend their expertise!"
                  </p>
                  <p className="font-semibold">— Patricia K.</p>
                  <p className="text-sm text-muted-foreground">Hyde Park, Sandton</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-amber-500">★★★★★</div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Our office building needed suspended ceiling repairs after a roof leak. Granite Carpentry worked
                    over the weekend to avoid disrupting our business. They matched the tiles perfectly and completed
                    everything in two days. Excellent service and professionalism throughout."
                  </p>
                  <p className="font-semibold">— David L.</p>
                  <p className="text-sm text-muted-foreground">Sandton CBD</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-amber-500">★★★★★</div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "We had a sagging ceiling in our Morningside home that was becoming dangerous. Granite Carpentry
                    assessed it immediately and completed urgent repairs within 48 hours. They reinforced the structure
                    and the ceiling is now completely safe. Very grateful for their quick response and quality work."
                  </p>
                  <p className="font-semibold">— Susan T.</p>
                  <p className="text-sm text-muted-foreground">Morningside, Sandton</p>
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
              Professional ceiling repair services throughout Johannesburg's Northern Suburbs
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                href="/drywall-sandton"
                className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <MapPin className="h-6 w-6 mx-auto mb-2 text-amber-600" />
                <span className="font-semibold">Drywall Sandton</span>
              </Link>
              <Link
                href="/drywall-rosebank"
                className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <MapPin className="h-6 w-6 mx-auto mb-2 text-amber-600" />
                <span className="font-semibold">Rosebank</span>
              </Link>
              <Link
                href="/ceiling-repairs-randburg"
                className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <MapPin className="h-6 w-6 mx-auto mb-2 text-amber-600" />
                <span className="font-semibold">Randburg</span>
              </Link>
              <Link
                href="/drywall-fourways"
                className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <MapPin className="h-6 w-6 mx-auto mb-2 text-amber-600" />
                <span className="font-semibold">Fourways</span>
              </Link>
              <Link
                href="/drywall-midrand"
                className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <MapPin className="h-6 w-6 mx-auto mb-2 text-amber-600" />
                <span className="font-semibold">Midrand</span>
              </Link>
              <Link
                href="/suspended-ceilings-johannesburg"
                className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <MapPin className="h-6 w-6 mx-auto mb-2 text-amber-600" />
                <span className="font-semibold">Johannesburg</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Emergency Ceiling Repairs in Sandton?</h2>
            <p className="text-xl mb-8 text-amber-50">
              Fast response times for urgent repairs. Call now for same-day service or request a free quote online.
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
                  Request Emergency Quote
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-amber-100">
              Serving Sandton CBD, Hyde Park, Morningside, Sandhurst, Bryanston & all Sandton areas
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
