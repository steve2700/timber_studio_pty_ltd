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
  Plane,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "Best Carpenter & Plumber Kempton Park 2026 | Kitchen Renovations, Joinery Services & Airport Area Plumbing | Free Quotes",
  description:
    "★★★★★ #1 Rated Carpenter & Plumber in Kempton Park near OR Tambo. Expert kitchen renovations, professional joinery, built-in cupboards & airport area plumbing. Serving Edenvale, Bedfordview, Boksburg. Licensed & insured. Call 063 397 7498",
  keywords:
    "carpenter Kempton Park, plumber Kempton Park, kitchen renovation Kempton Park, built-in cupboards Kempton Park, granite installation Kempton Park, airport plumbing Kempton Park, carpenter Edenvale, carpenter Bedfordview, joinery Kempton Park, kitchen cabinets Kempton Park, best carpenter Kempton Park, affordable carpenter Kempton Park, OR Tambo carpenter, East Rand carpenter, emergency plumbing Kempton Park",
  alternates: {
    canonical: "https://www.timberstudio.co.za/areas/kempton-park",
  },
  openGraph: {
    title: "Best Carpenter & Plumber Kempton Park 2026 | Kitchen Renovations & Joinery Services",
    description:
      "★★★★★ #1 Rated Carpenter & Plumber in Kempton Park. Expert kitchen renovations, joinery services & airport area plumbing. Free quotes. Call 063 397 7498",
    url: "https://www.timberstudio.co.za/areas/kempton-park",
    images: [
      {
        url: "https://www.timberstudio.co.za/granitecarpentry.webp",
        width: 1200,
        height: 630,
        alt: "Best Carpenter & Plumber Kempton Park - Kitchen Renovation & Joinery Services",
      },
    ],
  },
}

export default function KemptonParkPage() {
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
                  Kempton Park's #1 Carpenter & Plumber
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Best <span className="text-amber-400">Carpenter & Plumber</span> in{" "}
                <span className="text-amber-400 underline decoration-amber-500/60">Kempton Park</span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-200 mb-8 leading-relaxed">
                ★★★★★ Rated #1 Carpenter & Plumber in Kempton Park near OR Tambo Airport. Expert kitchen renovations,
                professional joinery, built-in cupboards & airport area plumbing. Serving Edenvale, Bedfordview,
                Boksburg & East Rand.
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
                  <a href="tel:+27633977498">
                    <Phone className="mr-2 w-5 h-5" />
                    Call: 063 397 7498
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
                  <span className="text-sm font-medium">350+ Jobs</span>
                </div>
                <div className="flex flex-col items-center">
                  <Plane className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">OR Tambo</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/granitecarpentry.webp"
                alt="Best Carpenter & Plumber Kempton Park - Expert Joinery & Kitchen Renovation near OR Tambo"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-amber-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">#1 Rated</div>
                <div className="text-sm">Kempton Park Carpenter & Plumber</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kempton Park Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Serving All Kempton Park & East Rand Areas
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional carpentry services throughout Kempton Park and East Rand. Same-day quotes, licensed
              craftsmen, 5-year warranty.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Kempton Park CBD",
              "Edenvale",
              "Bedfordview",
              "Boksburg",
              "Benoni",
              "Germiston",
              "Brakpan",
              "Springs",
              "Alberton",
              "Isando",
              "Rhodesfield",
              "Bredell",
              "Greenstone",
              "Modderfontein",
              "Tembisa",
              "Katlehong",
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
              Expert Carpentry & Plumbing Services in Kempton Park
            </h2>
            <p className="text-xl text-slate-600">
              Professional joinery and renovation services for East Rand homeowners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Building2 className="w-6 h-6 text-amber-600 mr-2" />
                  Kitchen Renovations Kempton Park
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Expert kitchen transformations for Kempton Park homes. Professional joinery, quality materials, expert
                  installation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom kitchen cabinets & joinery
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Granite & quartz countertops
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Professional installation service
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R18,000</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/kitchen-renovations">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Award className="w-6 h-6 text-amber-600 mr-2" />
                  Built-in Cupboards Kempton Park
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Custom storage solutions for Kempton Park properties. Expert joinery and precision craftsmanship.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom wardrobes & closets
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Office storage solutions
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Entertainment & media units
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R10,000</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/built-in-cupboards">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Star className="w-6 h-6 text-amber-600 mr-2" />
                  Professional Joinery Kempton Park
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Expert joinery services for Kempton Park homes. Custom woodwork and precision craftsmanship.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom joinery & woodwork
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Precision cutting & fitting
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Quality materials & finishes
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R6,500</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Plane className="w-6 h-6 text-amber-600 mr-2" />
                  Airport Area Plumbing Kempton Park
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Expert plumbing services near OR Tambo Airport. Residential and commercial plumbing for Kempton Park
                  properties.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Airport area plumbing services
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Residential & commercial repairs
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Emergency plumbing 24/7
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R360/hour</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Why Kempton Park Chooses Us</h2>
            <p className="text-xl text-slate-600">
              The most trusted carpenter & plumber in Kempton Park with 350+ completed projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600 fill-current" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">5-Star Rated</h3>
              <p className="text-slate-600">Consistently rated 5 stars by Kempton Park clients on Google Reviews</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Licensed & Insured</h3>
              <p className="text-slate-600">Fully licensed carpenter & plumber with comprehensive insurance coverage</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Same Day Quotes</h3>
              <p className="text-slate-600">Free quotes within 24 hours for all Kempton Park areas</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Near OR Tambo</h3>
              <p className="text-slate-600">Convenient location near OR Tambo Airport for easy access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Kempton Park Property?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join 350+ satisfied Kempton Park clients. Get your FREE quote today from Kempton Park's #1 rated carpenter &
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
              <a href="tel:+27633977498">
                <Phone className="mr-2 w-5 h-5" />
                Call: 063 397 7498
              </a>
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg opacity-90">
              {'⭐⭐⭐⭐⭐ "Professional joinery work! Excellent kitchen renovation." - Mike R., Edenvale'}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
