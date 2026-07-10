import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Star, MapPin, Award, Users, Clock, Shield, Heart } from "lucide-react"

export const metadata: Metadata = {
  title:
    "★★★★★ Best Carpenter & Plumber Alberton 2026 | #1 Trusted Kitchen Renovations, Built-in Cupboards & Family Plumbing",
  description:
    "★★★★★ #1 trusted carpenter & plumber in Alberton 2026. Family-focused kitchen renovations, built-in cupboards, granite installations & family plumbing services. 350+ South Rand projects. FREE quotes. Licensed & insured. Call 063 397 7498.",
  keywords:
    "best carpenter Alberton, trusted plumber Alberton 2026, kitchen renovation Alberton, built-in cupboards Alberton, granite installation Alberton, family plumbing Alberton, professional carpentry Alberton, #1 carpenter Alberton, carpenter near me Alberton, Meyerton carpenter, Vereeniging carpenter, South Rand carpenter, family plumber Alberton, emergency plumber Alberton, affordable carpenter Alberton, Alberton kitchen renovations 2026",
  openGraph: {
    title: "★★★★★ Best Carpenter & Plumber Alberton 2026 | #1 Trusted Family Services",
    description:
      "★★★★★ #1 trusted carpenter & plumber in Alberton. Family-focused kitchen renovations, built-in cupboards, granite installations & family plumbing services. 350+ South Rand projects. FREE quotes.",
    url: "https://www.timberstudio.co.za/areas/alberton",
  },
  alternates: {
    canonical: "https://www.timberstudio.co.za/areas/alberton",
  },
}

export default function AlbertonPage() {
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
                ★★★★★ #1 Trusted Family Carpenter & Plumber Alberton
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Best Trusted Carpenter & Plumber
              <span className="block text-amber-400">Alberton 2026</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
              ★★★★★ #1 trusted family carpenter & plumber in Alberton for 2026. Professional kitchen renovations, custom
              built-in cupboards, premium granite installations, and reliable family plumbing services for South Rand
              families. 350+ completed projects with 5-year warranty. FREE quotes & family-focused service. Serving
              Alberton, Meyerton, Vereeniging, and all South Rand areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                <Link href="/contact">Get Trusted Quote</Link>
              </Button>
              <a
                href="tel:+27633977498"
                className="flex items-center gap-2 text-lg hover:text-amber-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                063 397 7498
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
                <span>350+ Family Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-amber-400" />
                <span>Family Focused</span>
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
              Family Carpentry & Plumbing Services Alberton 2026
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Serving Alberton, Meyerton, Vereeniging, and South Rand families with trusted carpentry and plumbing
              solutions. Expert kitchen renovations, custom built-in cupboards, granite installations, and emergency
              plumbing services available 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Family Kitchen Solutions</h3>
                    <p className="text-sm text-amber-600">Starting from R30,000</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Family-friendly kitchen layouts & designs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Safe, durable granite & quartz surfaces
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Child-safe kitchen islands & breakfast bars
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Complete family kitchen makeovers
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
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Family Storage Solutions</h3>
                    <p className="text-sm text-amber-600">Starting from R9,500</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Children's wardrobes & closets
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Family study & homework areas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Entertainment & toy storage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Trusted storage solutions
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
                    <h3 className="text-xl font-bold text-slate-800">Safe Stone Work</h3>
                    <p className="text-sm text-amber-600">Starting from R500/m²</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Family-safe granite countertops
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Trusted quartz installations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Child-friendly rounded edges
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Professional templating service
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
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Family Plumbing Services</h3>
                    <p className="text-sm text-amber-600">Starting from R350/hour</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Family-safe plumbing repairs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Child-friendly installations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Emergency family service 24/7
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Trusted family plumber
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
              Why Alberton Families Trust Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Family-Focused Service</h3>
                    <p className="text-slate-600">
                      We understand family needs and create safe, functional spaces for children and adults. All
                      materials and finishes are family-friendly and durable.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Trusted Local Reputation</h3>
                    <p className="text-slate-600">
                      350+ satisfied families in Alberton and South Rand. Word-of-mouth referrals from neighbors and
                      friends who trust our quality and reliability.
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
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Family-Friendly Scheduling</h3>
                    <p className="text-slate-600">
                      We work around family routines and school schedules. Minimal disruption to daily life while
                      delivering exceptional results on time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">5-Year Family Guarantee</h3>
                    <p className="text-slate-600">
                      All work backed by comprehensive 5-year warranty. Fully licensed and insured with complete peace
                      of mind for your family's investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
              Why Choose Our Alberton Carpentry & Plumbing Services in 2026?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Local Alberton Expertise</h3>
                  <p className="text-slate-600">
                    As Alberton's leading carpenter and plumber in 2026, we understand the unique needs of South Rand
                    families. Our team has completed over 350 projects in Alberton, Meyerton, and Vereeniging, making us
                    the most trusted choice for kitchen renovations, built-in cupboards, and plumbing services.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Comprehensive Services</h3>
                  <p className="text-slate-600">
                    From custom kitchen renovations to emergency plumbing repairs, we offer complete carpentry and
                    plumbing solutions. Our services include granite installations, built-in cupboards, bathroom
                    renovations, and 24/7 emergency plumbing for Alberton families.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Quality & Affordability</h3>
                  <p className="text-slate-600">
                    We believe quality carpentry and plumbing shouldn't break the bank. Our competitive pricing starts
                    from R9,500 for built-in cupboards and R30,000 for kitchen renovations, with flexible payment
                    options available for Alberton homeowners.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Extended Warranty & Support</h3>
                  <p className="text-slate-600">
                    Every project comes with our comprehensive 5-year warranty, giving you peace of mind. We also offer
                    ongoing support and maintenance services to ensure your kitchen, cupboards, and plumbing systems
                    remain in perfect condition.
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Alberton Family Area Coverage 2026</h2>
            <p className="text-xl text-slate-600 mb-12">
              Trusted family carpentry and plumbing services throughout Alberton and South Rand areas. We also serve{" "}
              <Link href="/areas/johannesburg-south" className="text-amber-600 hover:underline">
                Johannesburg South
              </Link>
              ,{" "}
              <Link href="/areas/benoni" className="text-amber-600 hover:underline">
                Benoni
              </Link>
              ,{" "}
              <Link href="/areas/boksburg" className="text-amber-600 hover:underline">
                Boksburg
              </Link>
              , and{" "}
              <Link href="/areas/germiston" className="text-amber-600 hover:underline">
                Germiston
              </Link>
              .
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Alberton CBD</h3>
                <p className="text-sm text-slate-600">Main Area</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Meyerton</h3>
                <p className="text-sm text-slate-600">Family Area</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Vereeniging</h3>
                <p className="text-sm text-slate-600">South Rand</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Vanderbijlpark</h3>
                <p className="text-sm text-slate-600">Industrial</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Sasolburg</h3>
                <p className="text-sm text-slate-600">Chemical Hub</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Heidelberg</h3>
                <p className="text-sm text-slate-600">Historic</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Nigel</h3>
                <p className="text-sm text-slate-600">Agricultural</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Balfour</h3>
                <p className="text-sm text-slate-600">Rural Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Alberton Families Say</h2>
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
                  "Most trusted carpenter in Alberton! Family kitchen renovation was perfect - safe for our children and
                  beautiful. Professional family-focused service."
                </p>
                <div className="font-semibold text-slate-800">The Johnson Family</div>
                <div className="text-sm text-slate-600">Alberton, South Rand</div>
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
                  "Excellent family service! Children's wardrobes and study area are perfect. They understood our family
                  needs completely. Highly recommend!"
                </p>
                <div className="font-semibold text-slate-800">The Smith Family</div>
                <div className="text-sm text-slate-600">Meyerton, South Rand</div>
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
                  "Trusted and reliable family carpenter. Granite countertops are child-safe and beautiful. Professional
                  service with family values. 5 stars!"
                </p>
                <div className="font-semibold text-slate-800">The Williams Family</div>
                <div className="text-sm text-slate-600">Vereeniging, South Rand</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Trusted Alberton Family Project in 2026?
          </h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Contact Alberton's #1 trusted family carpenter and plumber today. Family-focused service, safe materials,
            and 5-year warranty. FREE consultation for South Rand families. Available 24/7 for emergency plumbing
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-amber-700 hover:bg-slate-100 text-lg px-8"
            >
              <Link href="/contact">Get Trusted Quote</Link>
            </Button>
            <a
              href="tel:+27633977498"
              className="flex items-center gap-2 text-lg hover:text-amber-200 transition-colors"
            >
              <Phone className="w-5 h-5" />
              063 397 7498 - Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
