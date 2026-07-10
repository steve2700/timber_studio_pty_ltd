import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Star, MapPin, Award, Users, Clock, Shield, Gem } from "lucide-react"

export const metadata: Metadata = {
  title:
    "★★★★★ Best Carpenter & Plumber Fourways 2025 | #1 Luxury Kitchen Renovations, Built-in Cupboards & Premium Plumbing Services",
  description:
    "★★★★★ #1 luxury carpenter & plumber in Fourways 2025. Premium kitchen renovations, custom built-in cupboards, granite installations & luxury plumbing services. 700+ upmarket projects completed. FREE quotes & flexible scheduling. Licensed & insured. Call 063 397 7498.",
  keywords:
    "best carpenter Fourways 2025, luxury plumber Fourways, kitchen renovation Fourways, built-in cupboards Fourways, granite installation Fourways, premium plumbing Fourways, professional carpentry Fourways, #1 carpenter Fourways, upmarket carpenter Fourways, carpenter near me Fourways, Dainfern carpenter, Bryanston carpenter, Steyn City carpenter, luxury plumbing Fourways, emergency plumber Fourways, kitchen cabinets Fourways, custom cupboards Fourways",
  openGraph: {
    title: "★★★★★ Best Carpenter & Plumber Fourways 2025 | #1 Luxury Services",
    description:
      "★★★★★ #1 luxury carpenter & plumber in Fourways 2025. Premium kitchen renovations, custom built-in cupboards, granite installations & luxury plumbing services. 700+ upmarket projects. FREE quotes.",
    url: "https://www.timberstudio.co.za/areas/fourways",
  },
  alternates: {
    canonical: "https://www.timberstudio.co.za/areas/fourways",
  },
}

export default function FourwaysPage() {
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
                ★★★★★ #1 Luxury Carpenter & Plumber Fourways
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Best Luxury Carpenter & Plumber
              <span className="block text-amber-400">Fourways 2025</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
              ★★★★★ #1 luxury carpenter & plumber in Fourways 2025. Specializing in premium kitchen renovations, custom
              built-in cupboards, granite & Caesarstone installations, and luxury plumbing services for upmarket homes
              in Fourways, Dainfern, Steyn City, and Bryanston. 700+ completed projects with 5-year warranty. FREE
              quotes, flexible scheduling & same-day emergency plumbing available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                <Link href="/contact">Get Premium Quote</Link>
              </Button>
              <a
                href="tel:+27633977498"
                className="flex items-center gap-2 text-lg hover:text-amber-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                063 397 7498
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm flex-wrap">
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
                <span>700+ Luxury Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Gem className="w-5 h-5 text-amber-400" />
                <span>Premium Materials</span>
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
              Luxury Carpentry & Plumbing Services Fourways 2025
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Serving Fourways, Dainfern Golf Estate, Steyn City, Bryanston, Lonehill, Broadacres, and all upmarket
              areas with premium carpentry and plumbing solutions. Trusted by Fourways' most discerning homeowners.
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
                    <h3 className="text-xl font-bold text-slate-800">Luxury Kitchen Renovations</h3>
                    <p className="text-sm text-amber-600">Starting from R85,000</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    High-end custom cabinetry & soft-close hinges
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Premium granite, Caesarstone & Silestone
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Designer kitchen islands & breakfast bars
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Complete luxury makeovers & renovations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Integrated appliances & smart storage
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
                    <h3 className="text-xl font-bold text-slate-800">Custom Built-in Cupboards</h3>
                    <p className="text-sm text-amber-600">Starting from R18,500</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Walk-in wardrobes & luxury dressing rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Executive study & home office built-ins
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Entertainment centers & media walls
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Luxury storage solutions & organizers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Custom finishes & premium hardware
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
                    <h3 className="text-xl font-bold text-slate-800">Premium Stone Work</h3>
                    <p className="text-sm text-amber-600">Starting from R850/m²</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Caesarstone & Silestone countertops
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Natural granite & marble installations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Luxury vanity tops & bathroom surfaces
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Precision templating & expert fitting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Waterfall edges & custom designs
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
                    <Gem className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Luxury Plumbing Services</h3>
                    <p className="text-sm text-amber-600">Starting from R450/hour</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    High-end bathroom & spa installations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Luxury kitchen plumbing & fixtures
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Premium geyser systems & solar
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    24/7 emergency plumbing service
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Water filtration & purification systems
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
              Why Fourways Homeowners Choose Us in 2025
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gem className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Luxury Market Specialists</h3>
                    <p className="text-slate-600">
                      Extensive experience in Fourways' upmarket properties including Dainfern Golf Estate, Steyn City,
                      Broadacres, and luxury developments. Deep understanding of high-end finishes, quality
                      expectations, and sophisticated design requirements for executive homes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Premium Materials Only</h3>
                    <p className="text-slate-600">
                      We source only the finest materials from trusted suppliers. Caesarstone, Silestone, natural
                      granite, high-grade timber, and premium fixtures ensure lasting beauty, durability, and value for
                      your Fourways property.
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
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Flexible Scheduling</h3>
                    <p className="text-slate-600">
                      We understand busy executive lifestyles and offer flexible scheduling including evenings and
                      weekends to minimize disruption to your routine. Professional project management ensures timely
                      completion without compromising quality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">5-Year Warranty & Insurance</h3>
                    <p className="text-slate-600">
                      All work backed by comprehensive 5-year warranty. Fully licensed and insured with R2 million
                      public liability coverage for complete peace of mind. Professional indemnity insurance protects
                      your investment.
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Fourways Luxury Area Coverage 2025</h2>
            <p className="text-xl text-slate-600 mb-12">
              Premium carpentry and plumbing services throughout Fourways and surrounding upmarket areas. Trusted by
              homeowners in Gauteng's most prestigious estates and suburbs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Fourways</h3>
                <p className="text-sm text-slate-600">Main Hub</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Dainfern</h3>
                <p className="text-sm text-slate-600">Golf Estate</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Bryanston</h3>
                <p className="text-sm text-slate-600">Upmarket</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Lonehill</h3>
                <p className="text-sm text-slate-600">Residential</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Steyn City</h3>
                <p className="text-sm text-slate-600">Premium Estate</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Broadacres</h3>
                <p className="text-sm text-slate-600">Luxury Homes</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Douglasdale</h3>
                <p className="text-sm text-slate-600">Established</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Lanseria</h3>
                <p className="text-sm text-slate-600">Airport Area</p>
              </div>
            </div>
            <div className="mt-12 p-6 bg-amber-50 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">We Also Serve Nearby Areas:</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/areas/sandton" className="text-amber-600 hover:text-amber-700 font-medium">
                  Sandton
                </Link>
                <span className="text-slate-400">•</span>
                <Link href="/areas/randburg" className="text-amber-600 hover:text-amber-700 font-medium">
                  Randburg
                </Link>
                <span className="text-slate-400">•</span>
                <Link href="/areas/roodepoort" className="text-amber-600 hover:text-amber-700 font-medium">
                  Roodepoort
                </Link>
                <span className="text-slate-400">•</span>
                <Link href="/areas/midrand" className="text-amber-600 hover:text-amber-700 font-medium">
                  Midrand
                </Link>
                <span className="text-slate-400">•</span>
                <Link href="/areas/centurion" className="text-amber-600 hover:text-amber-700 font-medium">
                  Centurion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Fourways Customers Say</h2>
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
                  "Exceptional luxury kitchen renovation in Dainfern. The Caesarstone countertops and custom cabinetry
                  exceeded our expectations. True craftsmanship and attention to detail!"
                </p>
                <div className="font-semibold text-slate-800">David & Emma R.</div>
                <div className="text-sm text-slate-600">Dainfern Golf Estate</div>
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
                  "Best carpenter in Fourways! Walk-in wardrobe and study built-ins are absolutely stunning.
                  Professional service throughout and completed on time."
                </p>
                <div className="font-semibold text-slate-800">Amanda K.</div>
                <div className="text-sm text-slate-600">Bryanston, Fourways</div>
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
                  "Outstanding attention to detail and premium materials. The granite installation was flawless. Highly
                  recommend for luxury projects in Steyn City!"
                </p>
                <div className="font-semibold text-slate-800">Robert M.</div>
                <div className="text-sm text-slate-600">Steyn City, Fourways</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Luxury Fourways Project in 2025?</h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Contact Fourways' #1 luxury carpenter & plumber today. Premium materials, exceptional craftsmanship, and
            5-year warranty. FREE consultation and detailed quotes for all services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-amber-700 hover:bg-slate-100 text-lg px-8"
            >
              <Link href="/contact">Get Premium Quote</Link>
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
