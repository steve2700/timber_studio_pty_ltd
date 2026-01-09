import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Star,
  Award,
  Wrench,
  MapPin,
  Clock,
  Shield,
  Users,
  AlertTriangle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Ceiling Repairs Randburg 2026 | Water Damage, Cracks & Restoration | 24/7 Emergency Service",
  description:
    "★★★★★ Expert ceiling repairs in Randburg. Water damage restoration, crack repairs, sagging ceilings. Serving Cresta, Northcliff, Ferndale. 24/7 emergency service. Call 067 601 4490 for immediate assistance.",
  keywords:
    "ceiling repairs Randburg, ceiling repair Randburg, water damage ceiling Randburg, ceiling cracks Randburg, sagging ceiling Randburg, ceiling restoration Randburg, emergency ceiling repairs Randburg, ceiling contractors Randburg, ceiling repair Cresta, ceiling repair Northcliff, ceiling repair Ferndale, ceiling water damage Randburg, ceiling leak repair Randburg 2026",
  alternates: {
    canonical: "https://granitecarpentry.co.za/ceiling-repairs-randburg",
  },
  openGraph: {
    title: "Ceiling Repairs Randburg 2026 | Water Damage, Cracks & Restoration",
    description:
      "★★★★★ Expert ceiling repairs in Randburg. Water damage restoration, crack repairs, sagging ceilings. 24/7 emergency service. Free quotes.",
    url: "https://granitecarpentry.co.za/ceiling-repairs-randburg",
    images: [{ url: "/drywall-contractor.jpg", width: 1200, height: 630 }],
  },
}

export default function CeilingRepairsRandburgPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-amber-400 mr-2" />
                <Badge variant="secondary" className="bg-amber-600/20 text-amber-100 border-amber-300">
                  Randburg's Ceiling Repair Experts
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional <span className="text-amber-400">Ceiling Repairs</span> in{" "}
                <span className="text-amber-400">Randburg</span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-200 mb-8 leading-relaxed">
                Many Randburg homes built in the 70s-90s need ceiling upgrades. Expert repairs for water damage, cracks,
                sagging ceilings, and complete restoration. Serving Cresta, Northcliff, Ferndale & all Randburg areas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4 font-semibold">
                  <Link href="/contact">
                    Get FREE Quote Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <a href="tel:+27676014490">
                    <Phone className="mr-2 w-5 h-5" />
                    067 601 4490
                  </a>
                </Button>
              </div>

              <div className="bg-red-600/20 border border-red-400 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <AlertTriangle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
                  <p className="text-white font-semibold">24/7 Emergency Ceiling Repairs Available</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Star className="w-6 h-6 text-amber-400 mb-1 fill-current" />
                  <span className="text-sm font-medium">5.0 Rating</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">Licensed</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">300+ Repairs</span>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">Same Day</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/drywall-contractor.jpg"
                alt="Professional Ceiling Repairs Randburg - Water Damage & Restoration"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-amber-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">300+</div>
                <div className="text-sm">Ceilings Repaired</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 text-center">
            Why Randburg Homeowners Trust Our Ceiling Repair Services
          </h2>
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <p className="text-lg mb-4">
              Randburg's established suburbs like Cresta, Northcliff, and Ferndale are home to many properties built
              between the 1970s and 1990s. While these homes have character and charm, their ceilings often show signs
              of age including cracks, water damage from aging plumbing, and sagging from structural settling.
            </p>
            <p className="text-lg mb-4">
              We've completed over 300 ceiling repair projects throughout Randburg, from minor crack repairs to complete
              ceiling replacements. Our team understands the unique challenges of working with older homes while
              maintaining the character that makes Randburg properties special.
            </p>
            <p className="text-lg mb-4">
              Whether you're dealing with water damage from a burst geyser, cracks from foundation settling, or simply
              want to upgrade your aging ceilings to modern standards, we provide professional repairs that restore both
              function and appearance. Our work comes with a comprehensive warranty and we use only premium materials
              designed to last for decades.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Our Ceiling Repair Services in Randburg
            </h2>
            <p className="text-xl text-slate-600">Comprehensive ceiling restoration for Randburg homes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Wrench className="w-6 h-6 text-amber-600 mr-2" />
                  Water Damage Restoration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Expert repair of water-damaged ceilings from leaks, burst geysers, and roof problems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Moisture testing & assessment</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Damaged material removal</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mold remediation if needed</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Complete ceiling restoration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Award className="w-6 h-6 text-amber-600 mr-2" />
                  Crack Repairs & Patching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Professional repair of ceiling cracks, holes, and surface damage with seamless finishing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Structural crack assessment</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional patching & filling</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Texture matching & blending</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Paint-ready smooth finish</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <AlertTriangle className="w-6 h-6 text-amber-600 mr-2" />
                  Sagging Ceiling Repairs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Structural repairs for sagging or bowing ceilings common in older Randburg homes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Structural integrity assessment</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Joist reinforcement if needed</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ceiling board replacement</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Complete refinishing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Why Choose Us for Randburg Ceiling Repairs?
            </h2>
            <p className="text-xl text-slate-600">Trusted by Randburg homeowners for over a decade</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <Wrench className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Older Home Specialists</h3>
                    <p className="text-slate-600">
                      We specialize in repairing ceilings in Randburg's established suburbs. Many homes in Cresta,
                      Northcliff, and Ferndale were built in the 70s-90s and require specialized knowledge of older
                      construction methods and materials. We understand these unique challenges.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">24/7 Emergency Response</h3>
                    <p className="text-slate-600">
                      Water damage doesn't wait for business hours. We offer 24/7 emergency ceiling repair services
                      throughout Randburg. Whether it's a burst geyser at midnight or a roof leak during a storm, we
                      respond quickly to minimize damage and begin restoration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <Shield className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Insurance Documentation</h3>
                    <p className="text-slate-600">
                      We work directly with insurance companies and provide comprehensive documentation for claims. Our
                      detailed reports include photos, moisture readings, and itemized repair costs, making the claims
                      process smooth and stress-free for Randburg homeowners.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <Star className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Seamless Repairs</h3>
                    <p className="text-slate-600">
                      Our repairs are virtually invisible. We match existing textures, blend finishes perfectly, and
                      ensure repaired areas are indistinguishable from the original ceiling. Your Randburg home will
                      look as good as new without the cost of complete ceiling replacement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 text-center">
            Common Ceiling Problems in Randburg Homes
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Water Damage from Aging Plumbing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Many Randburg homes have original plumbing from the 70s-90s that's reaching end of life. Burst
                  geysers, leaking pipes, and roof problems cause ceiling water damage. We provide complete restoration
                  including moisture testing, damaged material removal, mold remediation if needed, and seamless
                  refinishing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Cracks from Foundation Settling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Johannesburg's clay soil causes foundation movement over time, leading to ceiling cracks especially in
                  older Randburg properties. We assess whether cracks are cosmetic or structural, provide appropriate
                  repairs, and use flexible compounds that accommodate minor movement to prevent future cracking.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Sagging Ceilings in Older Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Ceilings in homes built 30-50 years ago can sag due to weakened joists, moisture damage, or inadequate
                  original installation. This is common in Randburg's established suburbs. We assess structural
                  integrity, reinforce joists if needed, and replace ceiling boards with modern materials for
                  long-lasting results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Repair Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 text-center">
            Our Ceiling Repair Process in Randburg
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Emergency Response & Assessment</h3>
                <p className="text-slate-600">
                  We respond quickly to your call, especially for water damage emergencies. Our team visits your
                  Randburg property to assess the damage, test for moisture, identify the cause, and provide a detailed
                  repair plan with transparent pricing.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Damage Containment & Preparation</h3>
                <p className="text-slate-600">
                  We protect your furniture and flooring, set up containment to prevent dust spread, and remove damaged
                  ceiling materials. For water damage, we ensure the area is completely dry before proceeding with
                  repairs to prevent mold growth.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Structural Repairs & Reinforcement</h3>
                <p className="text-slate-600">
                  If needed, we repair or reinforce ceiling joists and structural elements. This is especially important
                  in older Randburg homes where original construction may need upgrading to modern standards.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Ceiling Restoration & Finishing</h3>
                <p className="text-slate-600">
                  We install new ceiling boards or patch damaged areas, apply multiple coats of joint compound, sand to
                  perfection, and match existing textures. The result is a seamless repair that's virtually invisible.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Final Inspection & Warranty</h3>
                <p className="text-slate-600">
                  We conduct a thorough quality inspection, clean the work area completely, and provide you with
                  warranty documentation. For insurance claims, we supply detailed reports with photos and itemized
                  costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 text-center">
            Ceiling Repair Pricing in Randburg
          </h2>
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-lg mb-6">
              Ceiling repair costs vary based on damage extent and repair complexity. We provide transparent pricing
              with detailed quotes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>Minor Repairs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Small crack repairs:</span>
                      <span className="font-bold">R350-R600</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Hole patching (per hole):</span>
                      <span className="font-bold">R400-R800</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Texture matching:</span>
                      <span className="font-bold">R200-R400/m²</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Major Repairs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Water damage restoration:</span>
                      <span className="font-bold">R800-R1,500/m²</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sagging ceiling repair:</span>
                      <span className="font-bold">R1,200-R2,000/m²</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Complete ceiling replacement:</span>
                      <span className="font-bold">R250-R350/m²</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="text-base text-slate-600 italic">
              Emergency callout fee: R500 (credited toward repair cost). Free quotes for non-emergency repairs. We work
              with insurance companies and provide detailed documentation for claims.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 text-center">
            Recent Ceiling Repairs in Randburg
          </h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-amber-600">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-700 mb-3 italic">
                      "Our geyser burst at 2am and flooded the ceiling. They responded within an hour, contained the
                      damage, and had our ceiling completely restored within a week. Professional service and the repair
                      is invisible. Highly recommend for emergency ceiling repairs in Randburg."
                    </p>
                    <p className="text-slate-600 font-semibold">- Jennifer P., Cresta</p>
                    <p className="text-sm text-slate-500">Emergency Water Damage Restoration - 15m² ceiling</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-amber-600">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-700 mb-3 italic">
                      "Our 1980s home had multiple ceiling cracks and one sagging area. They assessed everything,
                      explained what was structural vs cosmetic, and repaired it all beautifully. The ceilings look
                      brand new and they matched the original texture perfectly."
                    </p>
                    <p className="text-slate-600 font-semibold">- Robert & Mary K., Northcliff</p>
                    <p className="text-sm text-slate-500">Multiple Crack Repairs & Sagging Ceiling Fix</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-amber-600">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-700 mb-3 italic">
                      "Excellent service for our insurance claim. They provided detailed documentation with photos and
                      moisture readings that made the claims process smooth. The repair work was top quality and
                      completed on schedule."
                    </p>
                    <p className="text-slate-600 font-semibold">- David T., Ferndale</p>
                    <p className="text-sm text-slate-500">Insurance Claim - Roof Leak Water Damage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Ceiling Repair Services Throughout Randburg & Nearby Areas
            </h2>
            <p className="text-xl text-slate-600">
              24/7 emergency ceiling repairs across Randburg and surrounding suburbs
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {[
              "Cresta",
              "Northcliff",
              "Ferndale",
              "Blairgowrie",
              "Bordeaux",
              "Bromhof",
              "Fairland",
              "Fontainebleau",
              "Kensington B",
              "Northwold",
              "Randpark Ridge",
              "Windsor",
            ].map((area) => (
              <Card key={area} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <MapPin className="w-5 h-5 text-amber-600 mx-auto mb-2" />
                  <p className="font-semibold text-slate-800">{area}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">We Also Serve These Nearby Areas:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/drywall-sandton" className="text-amber-600 hover:text-amber-700 font-medium underline">
                Drywall Sandton
              </Link>
              <span className="text-slate-400">•</span>
              <Link href="/drywall-rosebank" className="text-amber-600 hover:text-amber-700 font-medium underline">
                Drywall Rosebank
              </Link>
              <span className="text-slate-400">•</span>
              <Link
                href="/suspended-ceilings-johannesburg"
                className="text-amber-600 hover:text-amber-700 font-medium underline"
              >
                Suspended Ceilings Johannesburg
              </Link>
              <span className="text-slate-400">•</span>
              <Link
                href="/drywalling-contractors-johannesburg"
                className="text-amber-600 hover:text-amber-700 font-medium underline"
              >
                Drywalling Contractors Johannesburg
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 text-center">
            Frequently Asked Questions About Ceiling Repairs in Randburg
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                How quickly can you respond to emergency ceiling repairs in Randburg?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-slate-600">
                  We offer 24/7 emergency response for ceiling repairs throughout Randburg. For water damage emergencies
                  like burst geysers or roof leaks, we typically arrive within 1-2 hours to assess damage and begin
                  containment. Quick response is critical to minimize water damage and prevent mold growth. Emergency
                  callout fee is R500, credited toward your repair cost.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Do you work with insurance companies for ceiling damage claims?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-slate-600">
                  Yes, we work directly with insurance companies and provide comprehensive documentation for claims. Our
                  reports include detailed photos, moisture readings, damage assessment, and itemized repair costs. We
                  understand the claims process and provide all necessary documentation to make your claim smooth and
                  stress-free. Many Randburg homeowners use our services for insurance-covered repairs.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Can you match the existing ceiling texture in my older Randburg home?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-slate-600">
                  Absolutely. We specialize in matching existing ceiling textures, which is especially important in
                  Randburg's older homes with unique finishes. Whether your ceiling has a stipple, swirl, or smooth
                  finish, we can replicate it perfectly so repairs blend seamlessly. Our repairs are virtually invisible
                  once complete.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                How long does ceiling repair take in Randburg homes?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-slate-600">
                  Repair timeframes depend on damage extent. Minor crack repairs or small patches typically take 1-2
                  days. Water damage restoration requiring material removal and replacement takes 3-5 days (including
                  drying time). Sagging ceiling repairs with structural work may require 5-7 days. We provide realistic
                  timelines during assessment and keep you informed throughout the process.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                What causes ceilings to crack in Randburg homes?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-slate-600">
                  Ceiling cracks in Randburg homes are commonly caused by foundation settling (Johannesburg's clay soil
                  causes movement), temperature fluctuations, moisture damage, or aging materials. Many homes built in
                  the 70s-90s experience these issues. We assess whether cracks are cosmetic or indicate structural
                  problems, then provide appropriate repairs using flexible compounds that accommodate minor movement.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Need Emergency Ceiling Repairs in Randburg?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Don't let ceiling damage worsen. Get immediate assistance from Randburg's trusted ceiling repair
            specialists. 24/7 emergency response, insurance documentation, and seamless repairs. Call now for FREE
            assessment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button
              size="lg"
              asChild
              className="bg-white text-amber-600 hover:bg-slate-50 text-lg px-8 py-4 font-semibold"
            >
              <Link href="/contact">
                Get FREE Quote Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8 py-4 bg-transparent"
            >
              <a href="tel:+27676014490">
                <Phone className="mr-2 w-5 h-5" />
                067 601 4490
              </a>
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg opacity-90">
              ⭐⭐⭐⭐⭐ "Saved our ceiling after a burst geyser! Fast response and perfect repair." - Jennifer P.,
              Cresta
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
