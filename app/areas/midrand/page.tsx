import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Star,
  Award,
  Building2,
  MapPin,
  Clock,
  Shield,
  Users,
  Building,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "Best Carpenter & Plumber Midrand 2026 | Kitchen Renovations, Commercial Carpentry & Business Plumbing | Free Quotes",
  description:
    "★★★★★ #1 Rated Carpenter & Plumber in Midrand business hub. Expert kitchen renovations, commercial carpentry, built-in solutions & business plumbing services. Serving Fourways, Waterfall City, Grand Central. Licensed & insured. Call 067 601 4490",
  keywords:
    "carpenter Midrand, plumber Midrand, kitchen renovation Midrand, commercial carpentry Midrand, built-in cupboards Midrand, business plumbing Midrand, carpenter Fourways, carpenter Waterfall City, kitchen cabinets Midrand, office carpentry Midrand, best carpenter Midrand, affordable carpenter Midrand, Midrand kitchen contractor, business carpentry Midrand, commercial plumbing Midrand",
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/midrand",
  },
  openGraph: {
    title: "Best Carpenter & Plumber Midrand 2026 | Kitchen Renovations & Commercial Carpentry",
    description:
      "★★★★★ #1 Rated Carpenter & Plumber in Midrand. Expert kitchen renovations, commercial carpentry & business plumbing services. Free quotes. Call 067 601 4490",
    url: "https://granitecarpentry.co.za/areas/midrand",
    images: [
      {
        url: "https://granitecarpentry.co.za/professional-carpenter-midrand.jpeg",
        width: 1200,
        height: 630,
        alt: "Best Carpenter & Plumber Midrand - Kitchen Renovation & Commercial Carpentry Services",
      },
    ],
  },
}

export default function MidrandPage() {
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
                  Midrand's #1 Carpenter & Plumber
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Best <span className="text-amber-400">Carpenter & Plumber</span> in{" "}
                <span className="text-amber-400 underline decoration-amber-500/60">Midrand</span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-200 mb-8 leading-relaxed">
                ★★★★★ Rated #1 Carpenter & Plumber in Midrand business hub. Expert kitchen renovations, commercial
                carpentry, built-in solutions & business plumbing services. Serving Fourways, Waterfall City, Grand
                Central & all Midrand areas.
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
                    Call: 067 601 4490
                  </a>
                </Button>
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
                  <span className="text-sm font-medium">300+ Jobs</span>
                </div>
                <div className="flex flex-col items-center">
                  <Building className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">Business Hub</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/professional-carpenter-midrand.jpeg"
                alt="Best Carpenter & Plumber Midrand - Professional Commercial & Residential Carpentry Services"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-amber-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">#1 Rated</div>
                <div className="text-sm">Midrand Carpenter & Plumber</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Midrand Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Serving All Midrand Business Areas</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional carpentry services throughout Midrand and surrounding business areas. Same-day quotes,
              licensed craftsmen, 5-year warranty.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Midrand CBD",
              "Fourways",
              "Waterfall City",
              "Grand Central",
              "Halfway House",
              "Kyalami",
              "Carlswald",
              "Blue Hills",
              "Vorna Valley",
              "Noordwyk",
              "Randjesfontein",
              "Allandale",
              "Ivory Park",
              "Rabie Ridge",
              "Ebony Park",
              "Centurion",
            ].map((area) => (
              <Card key={area} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-slate-800">{area}</h3>
                  <p className="text-sm text-slate-600 mt-1">Same Day Service</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Professional Carpentry & Plumbing Services in Midrand
            </h2>
            <p className="text-xl text-slate-600">
              Residential and commercial carpentry and plumbing solutions for Midrand's business community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Building2 className="w-6 h-6 text-amber-600 mr-2" />
                  Kitchen Renovations Midrand
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Modern kitchen transformations for Midrand homes and offices. Professional designs, quality materials.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Modern kitchen designs & layouts
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Commercial kitchen solutions
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Granite & quartz countertops
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R19,000</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/kitchen-renovations">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Building className="w-6 h-6 text-amber-600 mr-2" />
                  Commercial Carpentry Midrand
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Professional carpentry services for Midrand offices and commercial spaces. Quality workmanship for
                  business environments.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Office fit-outs & partitions
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Reception counters & desks
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Commercial storage solutions
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R15,000</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Award className="w-6 h-6 text-amber-600 mr-2" />
                  Built-in Cupboards Midrand
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Custom storage solutions for Midrand homes and offices. Modern designs that maximize space and
                  functionality.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Modern wardrobes & closets
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Home & office storage
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Entertainment & media centers
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R9,500</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/built-in-cupboards">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Building className="w-6 h-6 text-amber-600 mr-2" />
                  Commercial Plumbing Midrand
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Professional plumbing services for Midrand's business hub. Commercial and residential plumbing
                  solutions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Commercial plumbing systems
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Office bathroom installations
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Emergency business repairs
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R390/hour</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/plumbing">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Why Midrand Chooses Us</h2>
            <p className="text-xl text-slate-600">
              The most trusted carpenter and plumber in Midrand with 300+ completed projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600 fill-current" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">5-Star Rated</h3>
              <p className="text-slate-600">Consistently rated 5 stars by Midrand clients on Google Reviews</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Licensed & Insured</h3>
              <p className="text-slate-600">
                Fully licensed carpenter and plumber with comprehensive insurance coverage
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Same Day Quotes</h3>
              <p className="text-slate-600">Free quotes within 24 hours for all Midrand areas</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Business Specialist</h3>
              <p className="text-slate-600">Specialized in both residential and commercial carpentry and plumbing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Midrand Property?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join 300+ satisfied Midrand clients. Get your FREE quote today from Midrand's #1 rated carpenter and
            plumber. Licensed, insured, and guaranteed.
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
                Call: 067 601 4490
              </a>
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg opacity-90">
              ⭐⭐⭐⭐⭐ "Professional commercial carpentry and plumbing! Great office fit-out and bathroom
              installations." - David L., Waterfall City
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
