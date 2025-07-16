import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Star, CheckCircle, Award, Users, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Reliable Carpenter Boksburg | Kitchen Renovations & Built-in Cupboards East Rand",
  description:
    "Trusted carpentry services in Boksburg, East Rand. Professional kitchen renovations, built-in cupboards, granite installations, and quality joinery. Serving Boksburg, Benoni, Germiston, and East Rand areas. Licensed professionals with 5-star rating and affordable pricing.",
  keywords:
    "carpenter Boksburg, kitchen renovation Boksburg, built-in cupboards Boksburg, granite installation Boksburg, reliable carpenter East Rand, professional carpenter Benoni, quality joinery Germiston, Boksburg carpenter near me, affordable carpentry services, East Rand kitchen renovations, trusted carpenter Boksburg, licensed carpenter East Rand",
  openGraph: {
    title: "Reliable Carpenter Boksburg | Kitchen Renovations East Rand",
    description:
      "Trusted carpentry services in Boksburg, East Rand. Professional kitchen renovations, built-in cupboards, granite installations. 5-star rated with affordable pricing.",
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-amber-400" />
              <Badge variant="secondary" className="bg-amber-600/20 text-amber-200 border-amber-400/30">
                Serving Boksburg & East Rand
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Reliable Carpenter
              <span className="block text-amber-400">Boksburg</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
              Your trusted carpentry partner in Boksburg and the East Rand. Delivering quality kitchen renovations,
              built-in cupboards, and professional joinery services with reliable, affordable excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                <Link href="/contact">Get Free Quote</Link>
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
                <span>5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-400" />
                <span>47+ Projects</span>
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
              Professional Carpentry Services in Boksburg
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Serving Boksburg, Benoni, Germiston, and surrounding East Rand areas with reliable, quality carpentry
              solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-amber-600" />
                  Kitchen Renovations
                </CardTitle>
                <CardDescription>Complete kitchen transformations for East Rand homes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Custom kitchen cabinets & cupboards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Granite & quartz countertop installation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Kitchen islands & breakfast nooks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Pantry & storage solutions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-amber-600" />
                  Built-in Cupboards
                </CardTitle>
                <CardDescription>Custom storage solutions for every room</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Bedroom wardrobes & closets
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Study & office built-ins
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    TV units & entertainment centers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Linen cupboards & storage
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-amber-600" />
                  Granite & Stone Work
                </CardTitle>
                <CardDescription>Professional stone installations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Granite countertop installation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Quartz surface fitting
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
              Why Boksburg Residents Trust Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">East Rand Specialists</h3>
                    <p className="text-slate-600">
                      Deep understanding of Boksburg and East Rand homes, with extensive experience in the area's
                      diverse architectural styles and requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Reliable & Punctual</h3>
                    <p className="text-slate-600">
                      We respect your time and schedule. Our team arrives on time, works efficiently, and completes
                      projects within agreed timeframes.
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">East Rand Area Coverage</h2>
            <p className="text-xl text-slate-600 mb-12">
              Proudly serving Boksburg and the greater East Rand with reliable carpentry services
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800">Boksburg</h3>
                <p className="text-sm text-slate-600">Main Area</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800">Benoni</h3>
                <p className="text-sm text-slate-600">East Rand</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800">Germiston</h3>
                <p className="text-sm text-slate-600">Industrial Hub</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800">Brakpan</h3>
                <p className="text-sm text-slate-600">Mining Town</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800">Springs</h3>
                <p className="text-sm text-slate-600">East Rand</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800">Nigel</h3>
                <p className="text-sm text-slate-600">Agricultural Area</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800">Heidelberg</h3>
                <p className="text-sm text-slate-600">Historic Town</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800">Daveyton</h3>
                <p className="text-sm text-slate-600">Township Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Carpentry Project?</h2>
          <p className="text-xl mb-8 text-amber-100">
            Contact Boksburg's trusted carpentry specialists for a free consultation and competitive quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-amber-700 hover:bg-slate-100">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <a
              href="tel:+27676014490"
              className="flex items-center gap-2 text-lg hover:text-amber-200 transition-colors"
            >
              <Phone className="w-5 h-5" />
              067 601 4490
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
