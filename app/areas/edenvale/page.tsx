import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Star, MapPin, Award, Users, Clock, Shield, Gem } from "lucide-react"

export const metadata: Metadata = {
  title:
    "★★★★★ Best Carpenter & Plumber Edenvale 2025 | #1 Quality Kitchen Renovations, Built-in Cupboards & Professional Plumbing",
  description:
    "★★★★★ #1 quality carpenter & plumber in Edenvale 2025. Premium kitchen renovations, built-in cupboards, granite installations & professional plumbing services. 450+ East Rand projects. FREE quotes. Licensed & insured. Call 067 601 4490.",
  keywords:
    "best carpenter Edenvale, quality plumber Edenvale 2025, kitchen renovation Edenvale, built-in cupboards Edenvale, granite installation Edenvale, professional plumbing Edenvale, premium carpenter Edenvale, professional carpentry Edenvale, #1 carpenter Edenvale, carpenter near me Edenvale, Bedfordview carpenter, Germiston carpenter, East Rand carpenter, emergency plumbing Edenvale, Edenvale kitchen renovations 2025, Edenvale plumber 2025",
  openGraph: {
    title: "★★★★★ Best Carpenter & Plumber Edenvale 2025 | #1 Quality Services",
    description:
      "★★★★★ #1 quality carpenter & plumber in Edenvale. Premium kitchen renovations, built-in cupboards, granite installations & professional plumbing services. 450+ East Rand projects. FREE quotes.",
    url: "https://granitecarpentry.co.za/areas/edenvale",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/edenvale",
  },
}

export default function EdenvalePage() {
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
                ★★★★★ #1 Quality Carpenter & Plumber Edenvale
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Best Quality Carpenter & Plumber
              <span className="block text-amber-400">Edenvale 2025</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
              ★★★★★ #1 quality carpenter & plumber in Edenvale for 2025. Premium kitchen renovations, built-in
              cupboards, granite installations, and professional plumbing services for East Rand's upmarket areas. 450+
              completed projects with 5-year warranty. FREE quotes & professional service. Serving Edenvale,
              Bedfordview, Germiston, and all East Rand areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                <Link href="/contact">Get Quality Quote</Link>
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
                <span>450+ East Rand Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Gem className="w-5 h-5 text-amber-400" />
                <span>Quality Materials</span>
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
              Quality Carpentry & Plumbing Services Edenvale 2025
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Serving Edenvale, Bedfordview, Germiston, and East Rand upmarket areas with premium carpentry and plumbing
              solutions. Expert kitchen renovations, custom built-in cupboards, granite installations, and 24/7
              emergency plumbing services available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Gem className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Premium Kitchen Renovations</h3>
                    <p className="text-sm text-amber-600">Starting from R45,000</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Quality custom cabinetry
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Premium granite & quartz surfaces
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Designer kitchen islands
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Complete kitchen makeovers
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/kitchen-renovations">View Kitchen Services</Link>
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
                    <h3 className="text-xl font-bold text-slate-800">Quality Built-in Cupboards</h3>
                    <p className="text-sm text-amber-600">Starting from R12,500</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Designer wardrobes & closets
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Executive study & office built-ins
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Entertainment units & TV centers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Quality storage solutions
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/built-in-cupboards">View Cupboard Services</Link>
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
                    <h3 className="text-xl font-bold text-slate-800">Quality Stone Work</h3>
                    <p className="text-sm text-amber-600">Starting from R650/m²</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Premium granite countertops
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Caesarstone & quartz surfaces
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Quality vanity tops
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Precision templating & fitting
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/quartz-granite">View Stone Services</Link>
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
                    <h3 className="text-xl font-bold text-slate-800">Quality Plumbing Services</h3>
                    <p className="text-sm text-amber-600">Starting from R380/hour</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Professional plumbing repairs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Quality bathroom installations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Geyser services & maintenance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Emergency plumbing 24/7
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/plumbing">View Plumbing Services</Link>
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
              Why Edenvale Homeowners Choose Us in 2025
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gem className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">East Rand Quality Specialists</h3>
                    <p className="text-slate-600">
                      Extensive experience in Edenvale's upmarket properties and East Rand homes. Understanding of
                      quality standards expected by discerning homeowners in the area.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Quality Materials & Finishes</h3>
                    <p className="text-slate-600">
                      We source premium materials from trusted suppliers. Quality timber, granite, quartz, and hardware
                      ensure lasting beauty and durability for your investment.
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
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Professional Scheduling</h3>
                    <p className="text-slate-600">
                      Flexible scheduling to accommodate your lifestyle. Professional project management ensures timely
                      completion without compromising quality standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">5-Year Quality Guarantee</h3>
                    <p className="text-slate-600">
                      All work backed by comprehensive 5-year warranty. Fully licensed and insured with complete quality
                      guarantee for your peace of mind.
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Edenvale Area Coverage 2025</h2>
            <p className="text-xl text-slate-600 mb-12">
              Quality carpentry and plumbing services throughout Edenvale and East Rand upmarket areas. We also serve{" "}
              <Link href="/areas/bedfordview" className="text-amber-600 hover:underline">
                Bedfordview
              </Link>
              ,{" "}
              <Link href="/areas/germiston" className="text-amber-600 hover:underline">
                Germiston
              </Link>
              ,{" "}
              <Link href="/areas/boksburg" className="text-amber-600 hover:underline">
                Boksburg
              </Link>
              , and{" "}
              <Link href="/areas/benoni" className="text-amber-600 hover:underline">
                Benoni
              </Link>
              .
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Edenvale</h3>
                <p className="text-sm text-slate-600">Main Area</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Bedfordview</h3>
                <p className="text-sm text-slate-600">Upmarket</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Germiston</h3>
                <p className="text-sm text-slate-600">Industrial Hub</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Eastleigh</h3>
                <p className="text-sm text-slate-600">Residential</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Dowerglen</h3>
                <p className="text-sm text-slate-600">Family Area</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Greenstone</h3>
                <p className="text-sm text-slate-600">Shopping Hub</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Modderfontein</h3>
                <p className="text-sm text-slate-600">Industrial</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Linksfield</h3>
                <p className="text-sm text-slate-600">Established</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Edenvale Customers Say</h2>
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
                  "Outstanding quality kitchen renovation in Edenvale. The granite countertops and custom cabinetry are
                  absolutely beautiful. Professional service throughout!"
                </p>
                <div className="font-semibold text-slate-800">Lisa & Mark S.</div>
                <div className="text-sm text-slate-600">Edenvale, East Rand</div>
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
                  "Best carpenter in Edenvale! Quality built-in wardrobes exceeded our expectations. Attention to detail
                  is exceptional. Highly recommend!"
                </p>
                <div className="font-semibold text-slate-800">Patricia M.</div>
                <div className="text-sm text-slate-600">Bedfordview, East Rand</div>
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
                  "Excellent quality work and professional service. The study built-ins are perfect and completed on
                  time. 5-star service all the way!"
                </p>
                <div className="font-semibold text-slate-800">James K.</div>
                <div className="text-sm text-slate-600">Germiston, East Rand</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Quality Edenvale Project in 2025?</h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Contact Edenvale's #1 quality carpenter and plumber today. Premium materials, exceptional craftsmanship, and
            5-year warranty. FREE consultation and detailed quotes. Available 24/7 for emergency plumbing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-amber-700 hover:bg-slate-100 text-lg px-8"
            >
              <Link href="/contact">Get Quality Quote</Link>
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
