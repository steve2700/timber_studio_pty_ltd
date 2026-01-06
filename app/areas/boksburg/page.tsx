import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Star, MapPin, Award, Users, Clock, Shield, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title:
    "★★★★★ Best Carpenter & Plumber Boksburg 2026 | #1 Reliable Kitchen Renovations, Built-in Cupboards & Emergency Plumbing",
  description:
    "★★★★★ #1 reliable carpenter & plumber in Boksburg 2026. Professional kitchen renovations, built-in cupboards, granite installations & emergency plumbing services. 400+ East Rand projects. FREE quotes. Licensed & insured. Call 067 601 4490.",
  keywords:
    "best carpenter Boksburg, reliable plumber Boksburg 2026, kitchen renovation Boksburg, built-in cupboards Boksburg, granite installation Boksburg, emergency plumbing Boksburg, affordable carpenter Boksburg, professional carpentry Boksburg, #1 carpenter Boksburg, carpenter near me Boksburg, Benoni carpenter, Germiston carpenter, East Rand carpenter, 24/7 plumber Boksburg, Boksburg kitchen renovations 2026, Boksburg plumber 2026",
  openGraph: {
    title: "★★★★★ Best Carpenter & Plumber Boksburg 2026 | #1 Reliable Services",
    description:
      "★★★★★ #1 reliable carpenter & plumber in Boksburg. Professional kitchen renovations, built-in cupboards, granite installations & emergency plumbing services. 400+ East Rand projects. FREE quotes.",
    url: "https://granitecarpentry.co.za/areas/boksburg",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/boksburg",
  },
}

export default function BoksburgPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-amber-400" />
              <Badge variant="secondary" className="bg-amber-600/20 text-amber-200 border-amber-400/30">
                ★★★★★ #1 Reliable Carpenter & Plumber Boksburg
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Best Reliable Carpenter & Plumber
              <span className="block text-amber-400">Boksburg 2026</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
              ★★★★★ #1 reliable carpenter & plumber in Boksburg for 2026. Professional kitchen renovations, built-in
              cupboards, granite installations, and emergency plumbing services for East Rand homes. 400+ completed
              projects with 5-year warranty. FREE quotes & dependable service. Serving Boksburg, Benoni, Germiston, and
              all East Rand areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                <Link href="/contact">Get Reliable Quote</Link>
              </Button>
              <a
                href="tel:+27676014490"
                className="flex items-center gap-2 text-lg hover:text-amber-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                067 601 4490
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <span>★★★★★ 5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-400" />
                <span>400+ East Rand Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                <span>5-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Reliable Carpentry & Plumbing Services Boksburg 2026
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Serving Boksburg, Benoni, Germiston, and East Rand areas with dependable carpentry and plumbing solutions.
              Expert kitchen renovations, custom built-in cupboards, granite installations, and 24/7 emergency plumbing
              services available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Kitchen Renovations</h3>
                    <p className="text-sm text-amber-600">Starting from R35,000</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Reliable custom kitchen cabinets
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Professional granite & quartz installation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Kitchen islands & breakfast bars
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Complete kitchen transformations
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/kitchen-renovations">View Kitchen Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Built-in Cupboards</h3>
                    <p className="text-sm text-amber-600">Starting from R10,500</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Reliable bedroom wardrobes & closets
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Study & office built-in solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    TV units & entertainment centers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Dependable storage solutions
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/built-in-cupboards">View Cupboard Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Granite & Stone Work</h3>
                    <p className="text-sm text-amber-600">Starting from R550/m²</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Professional granite countertops
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Reliable quartz surface fitting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Bathroom vanity tops
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Precision templating service
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/quartz-granite">View Stone Services</Link>
                </Button>
              </CardContent>
              </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
            <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              
      <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
        <Star className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-800">
          Decking & Flooring
        </h3>
        <p className="text-sm text-amber-600">
          Starting from R450/m²
        </p>
      </div>
    </div>

    <ul className="space-y-2 text-sm mb-4">
      <li className="flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-green-600" />
        Composite & timber decking installations
      </li>
      <li className="flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-green-600" />
        Laminate, vinyl & wooden flooring
      </li>
      <li className="flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-green-600" />
        Indoor & outdoor solutions
      </li>
      <li className="flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-green-600" />
        Supply, installation & finishing
      </li>
    </ul>

    <Button asChild className="w-full">
      <Link href="/decking-flooring">
        View Decking & Flooring
      </Link>
    </Button>
  </CardContent>
</Card>
            
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
  <CardContent className="p-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
        <Wrench className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-800">
          Drywall & Ceilings
        </h3>
        <p className="text-sm text-amber-600">
          Starting from R350/m²
        </p>
      </div>
    </div>

    <ul className="space-y-2 text-sm mb-4">
      <li className="flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-green-600" />
        Drywall partitions & room divisions
      </li>
      <li className="flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-green-600" />
        Rhino board & suspended ceilings
      </li>
      <li className="flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-green-600" />
        Bulkheads, cornices & finishes
      </li>
      <li className="flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-green-600" />
        Repairs, replacements & new installs
      </li>
    </ul>

    <Button asChild className="w-full">
      <Link href="/drywall-ceilings">
        View Drywall & Ceiling Services
      </Link>
    </Button>
  </CardContent>
</Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Reliable Plumbing Services</h3>
                    <p className="text-sm text-amber-600">Starting from R370/hour</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Reliable emergency plumbing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Professional installations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Geyser repairs & replacements
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Dependable service guarantee
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/plumbing">View Plumbing Services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
              Why Boksburg Residents Trust Us in 2026
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">East Rand Reliability Specialists</h3>
                    <p className="text-slate-600">
                      Deep understanding of Boksburg and East Rand homes with extensive experience in the area's diverse
                      architectural styles and building requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Reliable & Punctual Service</h3>
                    <p className="text-slate-600">
                      We respect your time and schedule. Our team arrives on time, works efficiently, and completes
                      projects within agreed timeframes with consistent quality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Affordable Excellence</h3>
                    <p className="text-slate-600">
                      Quality carpentry doesn't have to break the bank. We offer competitive pricing without
                      compromising on craftsmanship or materials.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Local Community Focus</h3>
                    <p className="text-slate-600">
                      As part of the East Rand community, we're committed to building lasting relationships and
                      contributing to the area's growth and development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Boksburg Area Coverage 2026</h2>
            <p className="text-xl text-slate-600 mb-12">
              Reliable carpentry and plumbing services throughout Boksburg and the greater East Rand region. We also
              serve{" "}
              <Link href="/areas/benoni" className="text-amber-600 hover:underline">
                Benoni
              </Link>
              ,{" "}
              <Link href="/areas/germiston" className="text-amber-600 hover:underline">
                Germiston
              </Link>
              ,{" "}
              <Link href="/areas/alberton" className="text-amber-600 hover:underline">
                Alberton
              </Link>
              , and{" "}
              <Link href="/areas/edenvale" className="text-amber-600 hover:underline">
                Edenvale
              </Link>
              .
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Boksburg</h3>
                <p className="text-sm text-slate-600">Main Area</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Benoni</h3>
                <p className="text-sm text-slate-600">East Rand</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Germiston</h3>
                <p className="text-sm text-slate-600">Industrial Hub</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Brakpan</h3>
                <p className="text-sm text-slate-600">Mining Town</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Springs</h3>
                <p className="text-sm text-slate-600">East Rand</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Nigel</h3>
                <p className="text-sm text-slate-600">Agricultural</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Heidelberg</h3>
                <p className="text-sm text-slate-600">Historic Town</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Daveyton</h3>
                <p className="text-sm text-slate-600">Township</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Boksburg Customers Say</h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-xl font-semibold text-slate-800">5.0 out of 5 stars</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Most reliable carpenter in Boksburg! Kitchen renovation was completed on time and within budget.
                  Professional service from start to finish."
                </p>
                <div className="font-semibold text-slate-800">John & Mary D.</div>
                <div className="text-sm text-slate-600">Boksburg, East Rand</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Excellent reliable service! Built-in wardrobes are perfect and the team was professional throughout.
                  Highly recommend for East Rand projects."
                </p>
                <div className="font-semibold text-slate-800">Susan T.</div>
                <div className="text-sm text-slate-600">Benoni, East Rand</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Dependable and professional service. The granite installation was flawless and completed exactly as
                  promised. 5-star service!"
                </p>
                <div className="font-semibold text-slate-800">Peter M.</div>
                <div className="text-sm text-slate-600">Germiston, East Rand</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Reliable Boksburg Project in 2026?</h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Contact Boksburg's #1 reliable carpenter & plumber today. Dependable service, quality workmanship, and
            5-year warranty. FREE consultation and competitive quotes. Available 24/7 for emergency plumbing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-amber-700 hover:bg-slate-100 text-lg px-8"
            >
              <Link href="/contact">Get Reliable Quote</Link>
            </Button>
            <a
              href="tel:+27676014490"
              className="flex items-center gap-2 text-lg hover:text-amber-200 transition-colors"
            >
              <Phone className="w-5 h-5" />
              067 601 4490 - Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
