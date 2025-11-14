import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Clock, Shield, Star, Phone, MapPin, Award, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Ceiling Repairs Pretoria | Expert Ceiling Repair Services 2025",
  description:
    "★★★★★ Professional ceiling repair services in Pretoria. Expert repairs for cracks, water damage, sagging ceilings, gypsum repairs & more. 24/7 emergency service. 500+ repairs completed. Free quotes. Licensed & insured. Call 067 601 4490!",
  keywords:
    "ceiling repairs Pretoria, ceiling repair services Pretoria, ceiling crack repair Pretoria, water damaged ceiling repair Pretoria, sagging ceiling repair Pretoria, gypsum ceiling repair Pretoria, ceiling contractors Pretoria 2025, ceiling repair cost Pretoria, emergency ceiling repair Pretoria, professional ceiling repair Pretoria, ceiling board replacement Pretoria, ceiling texture matching Pretoria",
  openGraph: {
    title: "Ceiling Repairs Pretoria | Expert Ceiling Repair Services 2025",
    description:
      "Professional ceiling repair services in Pretoria. Expert repairs for cracks, water damage, sagging ceilings & more. 24/7 emergency service.",
    url: "https://granitecarpentry.co.za/ceiling-repairs-pretoria",
    siteName: "Granite Carpentry & Joinery Experts",
    locale: "en_ZA",
    type: "website",
  },
}

export default function CeilingRepairsPretoriaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Expert Ceiling Repairs in Pretoria | Professional Gypsum & Water Damage Repair
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 text-balance">
              Professional ceiling repair services for homes and businesses across Pretoria, Centurion, and Tshwane.
              Fast, reliable, and guaranteed quality repairs for all ceiling types. 500+ successful repairs completed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <a href="tel:+27676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 067 601 4490
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-3 text-orange-600" />
              <p className="font-semibold">15+ Years Experience</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-3 text-orange-600" />
              <p className="font-semibold">Fully Insured</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-3 text-orange-600" />
              <p className="font-semibold">500+ Happy Clients</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-3 text-orange-600" />
              <p className="font-semibold">24/7 Emergency Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Ceiling Repair Services in Pretoria</h2>
            <p className="text-lg text-muted-foreground mb-6">
              When your ceiling shows signs of damage, whether from water leaks, structural settling, or general wear
              and tear, you need expert ceiling repair services you can trust. At Granite Carpentry & Joinery Experts,
              we've been providing professional ceiling repair services to homes and businesses across Pretoria for over
              15 years.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Pretoria's unique climate, with its hot summers and occasional severe storms, can take a toll on ceilings.
              From the historic suburbs of Arcadia and Hatfield to the modern developments in Waterkloof and Menlyn,
              we've repaired thousands of ceilings across the capital city. Our team understands the specific challenges
              that Pretoria properties face, from thermal expansion issues to water damage from summer thunderstorms.
            </p>

            {/* Ceiling Repair Pricing in Pretoria */}
            <h3 className="text-2xl font-bold mb-4 mt-8">Ceiling Repair Pricing in Pretoria</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We believe in transparent pricing for all our ceiling repair services in Pretoria. Here's a comprehensive
              breakdown of our ceiling repair costs to help you budget for your project:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    Minor Ceiling Repairs
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    Small cracks, minor holes, and cosmetic damage repairs throughout Pretoria.
                  </p>
                  <p className="text-2xl font-bold text-orange-600">R350 - R800</p>
                  <p className="text-sm text-muted-foreground">Per repair | 1-2 hours</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    Water Damage Repairs
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    Water-damaged ceiling repairs including stain removal and moisture treatment in Pretoria homes.
                  </p>
                  <p className="text-2xl font-bold text-orange-600">R1,200 - R4,500</p>
                  <p className="text-sm text-muted-foreground">Per section | 1-3 days</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    Ceiling Board Replacement
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    Complete ceiling board replacement for extensively damaged sections in Pretoria properties.
                  </p>
                  <p className="text-2xl font-bold text-orange-600">R95 - R180/m²</p>
                  <p className="text-sm text-muted-foreground">Materials & labor included</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    Emergency Repairs
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    24/7 emergency ceiling repair services for urgent situations across Pretoria and Centurion.
                  </p>
                  <p className="text-2xl font-bold text-orange-600">From R1,500</p>
                  <p className="text-sm text-muted-foreground">Call-out fee + repairs</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Common Ceiling Problems We Fix in Pretoria</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Pretoria homeowners and business owners face various ceiling issues that require professional attention.
              Our experienced team has seen and successfully repaired every type of ceiling problem imaginable:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    Water Damage Repairs
                  </h4>
                  <p className="text-muted-foreground">
                    Pretoria's summer storms can cause roof leaks that damage ceilings. We repair water-damaged
                    ceilings, fix stains, and address the underlying moisture issues to prevent mold growth.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    Crack Repairs
                  </h4>
                  <p className="text-muted-foreground">
                    Structural settling and temperature fluctuations cause ceiling cracks. We expertly repair cracks of
                    all sizes, ensuring seamless finishes that blend perfectly with your existing ceiling.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    Sagging Ceiling Repairs
                  </h4>
                  <p className="text-muted-foreground">
                    Sagging ceilings are dangerous and require immediate attention. We reinforce ceiling structures,
                    replace damaged boards, and restore your ceiling to perfect condition.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    Hole & Dent Repairs
                  </h4>
                  <p className="text-muted-foreground">
                    From accidental damage to old fixture removals, we repair holes and dents of any size, leaving your
                    ceiling looking brand new with invisible repairs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    Texture Matching
                  </h4>
                  <p className="text-muted-foreground">
                    We expertly match existing ceiling textures, whether stipple, smooth, or decorative finishes,
                    ensuring repairs blend seamlessly with the surrounding area.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    Ceiling Board Replacement
                  </h4>
                  <p className="text-muted-foreground">
                    When damage is extensive, we replace entire ceiling boards with precision, ensuring structural
                    integrity and a flawless finish that matches your existing ceiling.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Why Pretoria Residents Choose Us for Ceiling Repairs</h3>
            <p className="text-lg text-muted-foreground mb-6">
              When you need ceiling repairs in Pretoria, you want a company that combines expertise, reliability, and
              exceptional customer service. Here's why hundreds of Pretoria homeowners and businesses trust us with
              their ceiling repair needs:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <Star className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Local Pretoria Expertise</h4>
                  <p className="text-muted-foreground">
                    We understand Pretoria's unique building styles, from heritage homes in Brooklyn to modern
                    apartments in Menlyn Maine. Our team knows the specific ceiling challenges that Pretoria properties
                    face and how to address them effectively.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Star className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Fast Emergency Response</h4>
                  <p className="text-muted-foreground">
                    Ceiling damage can worsen quickly, especially water damage. We offer 24/7 emergency ceiling repair
                    services across Pretoria, with rapid response times to minimize damage and get your property back to
                    normal fast.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Star className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Quality Workmanship Guaranteed</h4>
                  <p className="text-muted-foreground">
                    Every ceiling repair we complete comes with our comprehensive workmanship guarantee. We use premium
                    materials and proven techniques to ensure repairs that last for years, not months.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Star className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Transparent Pricing</h4>
                  <p className="text-muted-foreground">
                    No hidden costs or surprise charges. We provide detailed, upfront quotes for all ceiling repair
                    work, so you know exactly what to expect before we start.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Star className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Minimal Disruption</h4>
                  <p className="text-muted-foreground">
                    We understand that ceiling repairs can be disruptive. Our efficient team works quickly and cleanly,
                    protecting your furniture and floors, and leaving your space spotless after completion.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Our Ceiling Repair Process</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We follow a systematic approach to ensure every ceiling repair is completed to the highest standards:
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-orange-600 pl-4">
                <h4 className="font-semibold text-lg mb-2">1. Thorough Inspection & Assessment</h4>
                <p className="text-muted-foreground">
                  We begin with a comprehensive inspection of your ceiling damage, identifying not just the visible
                  issues but also underlying problems that could cause future damage. We check for structural issues,
                  moisture problems, and assess the extent of repairs needed.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h4 className="font-semibold text-lg mb-2">2. Detailed Quote & Timeline</h4>
                <p className="text-muted-foreground">
                  After our assessment, we provide a detailed written quote outlining all work to be done, materials
                  needed, and a realistic timeline for completion. We explain everything clearly so you can make an
                  informed decision.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h4 className="font-semibold text-lg mb-2">3. Professional Repair Work</h4>
                <p className="text-muted-foreground">
                  Our skilled craftsmen carry out the repair work using premium materials and proven techniques. We
                  protect your property, work efficiently, and maintain high standards throughout the project.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h4 className="font-semibold text-lg mb-2">4. Quality Finishing</h4>
                <p className="text-muted-foreground">
                  We don't just fix the problem – we ensure the repair blends seamlessly with your existing ceiling.
                  This includes texture matching, priming, painting, and any finishing touches needed for a perfect
                  result.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h4 className="font-semibold text-lg mb-2">5. Final Inspection & Cleanup</h4>
                <p className="text-muted-foreground">
                  Before we consider the job complete, we conduct a thorough final inspection and complete cleanup. We
                  walk you through the completed work and ensure you're completely satisfied with the results.
                </p>
              </div>
            </div>

            {/* Comprehensive Ceiling Repair Coverage Across Pretoria */}
            <h3 className="text-2xl font-bold mb-4 mt-8">Comprehensive Ceiling Repair Coverage Across Pretoria</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We provide professional ceiling repair services throughout Pretoria, Centurion, and the greater Tshwane
              metropolitan area. Our experienced team serves over 50 suburbs across Pretoria, ensuring fast response
              times and local expertise wherever you are in the capital city.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div>
                <h4 className="font-semibold mb-3 text-orange-600">Central Pretoria</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Arcadia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Hatfield</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Brooklyn</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Sunnyside</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Groenkloof</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-orange-600">East Pretoria</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Menlyn</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Lynnwood</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Faerie Glen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Garsfontein</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Moreleta Park</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-orange-600">South Pretoria</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Waterkloof</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Centurion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Irene</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Highveld</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Lyttelton</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-orange-600">North Pretoria</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Montana</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Sinoville</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Wonderboom</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Akasia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-600" />
                    <span>Mabopane</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Frequently Asked Questions About Ceiling Repairs in Pretoria */}
            <h3 className="text-2xl font-bold mb-4 mt-8">
              Frequently Asked Questions About Ceiling Repairs in Pretoria
            </h3>
            <div className="space-y-4 mb-8">
              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">How much do ceiling repairs cost in Pretoria?</h4>
                <p className="text-muted-foreground">
                  Ceiling repair costs vary depending on the extent of damage, ceiling type, and repair complexity.
                  Minor crack repairs typically start from R800-R1,500, while more extensive water damage repairs can
                  range from R3,000-R8,000. We provide free, detailed quotes after inspecting your ceiling.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">How long do ceiling repairs take?</h4>
                <p className="text-muted-foreground">
                  Most ceiling repairs can be completed within 1-3 days, depending on the extent of damage and drying
                  times required. Emergency repairs can often be started within hours of your call. We'll provide a
                  realistic timeline during our initial assessment.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Do you offer emergency ceiling repair services?</h4>
                <p className="text-muted-foreground">
                  Yes! We provide 24/7 emergency ceiling repair services across Pretoria. If you have a ceiling
                  emergency such as severe water damage, sagging, or collapse risk, call us immediately for rapid
                  response.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Will the repair be visible after completion?</h4>
                <p className="text-muted-foreground">
                  Our skilled craftsmen specialize in invisible repairs. We carefully match textures, prime, and paint
                  to ensure repairs blend seamlessly with your existing ceiling. Most clients can't tell where the
                  repair was done after we're finished.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Do you fix the cause of ceiling damage or just the symptoms?</h4>
                <p className="text-muted-foreground">
                  We address both the visible damage and underlying causes. For water damage, we identify and recommend
                  solutions for leak sources. For structural issues, we reinforce as needed. This comprehensive approach
                  prevents recurring problems.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Are your ceiling repairs guaranteed?</h4>
                <p className="text-muted-foreground">
                  Yes, all our ceiling repair work comes with a comprehensive workmanship guarantee. We stand behind the
                  quality of our repairs and will address any issues that arise from our workmanship.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">What causes ceiling cracks in Pretoria homes?</h4>
                <p className="text-muted-foreground">
                  Ceiling cracks in Pretoria are commonly caused by structural settling, temperature fluctuations
                  (Pretoria's hot summers cause expansion), roof movement, water damage from leaks, or poor initial
                  installation. Pretoria's clay-rich soil can also cause foundation movement that leads to ceiling
                  cracks. We assess the root cause and provide lasting solutions.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Can you match my existing ceiling texture in Pretoria?</h4>
                <p className="text-muted-foreground">
                  Yes! We specialize in texture matching for all ceiling types common in Pretoria homes - from smooth
                  finishes to stipple, knockdown, and decorative textures. Our craftsmen have years of experience
                  matching textures so repairs blend seamlessly. We bring samples to ensure perfect matching before
                  starting work.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Do you handle insurance claims for ceiling damage in Pretoria?</h4>
                <p className="text-muted-foreground">
                  Yes, we regularly work with insurance companies for ceiling damage claims in Pretoria. We provide
                  detailed quotes, photographic documentation, and professional reports for your insurance claim. We can
                  communicate directly with your insurer and ensure all repairs meet insurance requirements and building
                  standards.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">How long does ceiling repair take in Pretoria?</h4>
                <p className="text-muted-foreground">
                  Most ceiling repairs in Pretoria are completed within 1-3 days depending on damage extent. Minor crack
                  repairs can be done in a few hours, while extensive water damage repairs may take 2-3 days including
                  drying time. We provide accurate timelines during our free assessment and work efficiently to minimize
                  disruption to your Pretoria home or business.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">What areas of Pretoria do you serve for ceiling repairs?</h4>
                <p className="text-muted-foreground">
                  We provide ceiling repair services throughout greater Pretoria including Arcadia, Hatfield,
                  Waterkloof, Menlyn, Brooklyn, Lynnwood, Centurion, Faerie Glen, Garsfontein, Moreleta Park, Montana,
                  Silverton, and all surrounding suburbs. We offer fast response times across all Pretoria areas with
                  same-day emergency service available.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Do you repair both gypsum and plaster ceilings in Pretoria?</h4>
                <p className="text-muted-foreground">
                  Yes, we repair all ceiling types in Pretoria including gypsum board (drywall), plaster ceilings,
                  suspended ceilings, acoustic tiles, and decorative ceilings. Our team has specialized experience with
                  both modern gypsum installations and older plaster ceilings common in Pretoria's heritage homes. We
                  use appropriate techniques and materials for each ceiling type.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Can you fix sagging ceilings in Pretoria homes?</h4>
                <p className="text-muted-foreground">
                  Yes, sagging ceilings require immediate attention as they pose safety risks. We repair sagging
                  ceilings in Pretoria by reinforcing ceiling joists, replacing damaged boards, and addressing
                  underlying structural issues. Sagging is often caused by water damage, inadequate support, or age. We
                  provide comprehensive solutions that restore safety and appearance.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">What's included in your ceiling repair warranty in Pretoria?</h4>
                <p className="text-muted-foreground">
                  All our ceiling repairs in Pretoria come with a comprehensive workmanship warranty covering materials
                  and labor. We guarantee our repairs against defects, cracking, or failure due to workmanship issues.
                  The warranty period varies by repair type but typically ranges from 12-24 months. We stand behind our
                  work and will address any warranty issues promptly.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Do you provide free quotes for ceiling repairs in Pretoria?</h4>
                <p className="text-muted-foreground">
                  Yes! We provide completely free, no-obligation quotes for all ceiling repair work in Pretoria. Our
                  experienced team will visit your property, assess the damage, explain the repair process, and provide
                  a detailed written quote. There's no pressure to proceed - we want you to make an informed decision.
                  Call 067 601 4490 to schedule your free assessment.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Can you repair water-damaged ceilings in Pretoria?</h4>
                <p className="text-muted-foreground">
                  Yes, water damage is one of our specialties in Pretoria. We repair water-damaged ceilings by first
                  addressing the moisture source, then removing damaged materials, treating for mold if necessary,
                  replacing ceiling boards, and finishing with seamless texture matching and painting. Pretoria's summer
                  storms often cause roof leaks - we provide comprehensive water damage solutions.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Related Ceiling Services in Pretoria</h3>
            <p className="text-lg text-muted-foreground mb-6">
              In addition to ceiling repairs, we offer comprehensive ceiling services across Pretoria:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Link
                href="/ceiling-installation-pretoria"
                className="block p-4 border rounded-lg hover:border-orange-600 transition-colors"
              >
                <h4 className="font-semibold mb-2">Ceiling Installation Pretoria</h4>
                <p className="text-sm text-muted-foreground">
                  Professional new ceiling installations for homes and businesses
                </p>
              </Link>
              <Link
                href="/drywall-pretoria"
                className="block p-4 border rounded-lg hover:border-orange-600 transition-colors"
              >
                <h4 className="font-semibold mb-2">Drywall Pretoria</h4>
                <p className="text-sm text-muted-foreground">Expert drywall installation and partition services</p>
              </Link>
              <Link
                href="/drywall-centurion"
                className="block p-4 border rounded-lg hover:border-orange-600 transition-colors"
              >
                <h4 className="font-semibold mb-2">Drywall Centurion</h4>
                <p className="text-sm text-muted-foreground">Comprehensive drywall services in nearby Centurion</p>
              </Link>
              <Link
                href="/ceiling-repairs-centurion"
                className="block p-4 border rounded-lg hover:border-orange-600 transition-colors"
              >
                <h4 className="font-semibold mb-2">Ceiling Repairs Centurion</h4>
                <p className="text-sm text-muted-foreground">Expert ceiling repair services in Centurion area</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Expert Ceiling Repairs in Pretoria?</h2>
            <p className="text-xl mb-8 text-orange-50">
              Don't let ceiling damage worsen. Contact us today for fast, professional ceiling repair services across
              Pretoria. Free quotes available!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-orange-600 hover:bg-orange-50">
                <Link href="/contact">Request Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <a href="tel:+27676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 067 601 4490
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
