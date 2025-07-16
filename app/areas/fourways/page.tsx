import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Star, CheckCircle, Award, Users, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Carpenter Fourways | Luxury Kitchen Renovations & Built-in Cupboards",
  description:
    "Premium carpentry services in Fourways, Johannesburg. Specializing in luxury kitchen renovations, custom built-in cupboards, granite installations, and high-end joinery. Serving Fourways, Dainfern, Bryanston, and surrounding upmarket areas. Licensed professionals with 5-star rating.",
  keywords:
    "carpenter Fourways, kitchen renovation Fourways, built-in cupboards Fourways, granite installation Fourways, luxury carpentry Fourways, professional carpenter Dainfern, custom kitchen cabinets Bryanston, quality joinery Fourways, Fourways carpenter near me, upmarket carpentry services, premium kitchen renovations, luxury built-in wardrobes, high-end carpentry Fourways, licensed carpenter Fourways",
  openGraph: {
    title: "Professional Carpenter Fourways | Luxury Kitchen Renovations",
    description:
      "Premium carpentry services in Fourways. Luxury kitchen renovations, custom built-in cupboards, granite installations. 5-star rated professionals serving upmarket Fourways area.",
    url: "https://granitecarpentry.co.za/areas/fourways",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/fourways",
  },
}

export default function FourwaysPage() {
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
                Serving Fourways & Surrounding Areas
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Carpenter
              <span className="block text-amber-400">Fourways</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
              Luxury carpentry services for Fourways' most discerning homeowners. Specializing in high-end kitchen
              renovations, custom built-in cupboards, and premium granite installations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                <Link href="/contact">Get Premium Quote</Link>
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
              Luxury Carpentry Services in Fourways
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Serving Fourways, Dainfern, Bryanston, Lonehill, and surrounding upmarket areas with premium carpentry
              solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-amber-600" />
                  Luxury Kitchen Renovations
                </CardTitle>
                <CardDescription>Premium kitchen transformations for upmarket homes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    High-end custom cabinetry
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Premium granite & quartz countertops
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Luxury kitchen islands & breakfast bars
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Designer storage solutions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-amber-600" />
                  Custom Built-in Cupboards
                </CardTitle>
                <CardDescription>Bespoke storage solutions for luxury homes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Walk-in wardrobes & dressing rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Study & home office built-ins
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Entertainment unit installations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Custom linen & storage cupboards
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-amber-600" />
                  Premium Stone Installations
                </CardTitle>
                <CardDescription>Granite, quartz & marble installations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Caesarstone & Silestone countertops
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Natural granite installations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Marble vanity tops
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Precision templating & fitting
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
              Why Fourways Homeowners Choose Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Luxury Market Specialists</h3>
                    <p className="text-slate-600">
                      Extensive experience working in Fourways' upmarket properties, understanding the quality standards
                      expected by discerning homeowners.
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
                      We source only the finest materials and work with trusted suppliers to ensure your investment
                      delivers lasting value and beauty.
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
                      We understand busy lifestyles and offer flexible scheduling to minimize disruption to your daily
                      routine while delivering exceptional results.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Personalized Service</h3>
                    <p className="text-slate-600">
                      Direct communication with our master carpenter ensures your vision is understood and executed to
                      perfection, with attention to every detail.
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Fourways Area Coverage</h2>
            <p className="text-xl text-slate-600 mb-12">
              Proudly serving Fourways and surrounding upmarket areas with premium carpentry services
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800">Fourways</h3>
                <p className="text-sm text-slate-600">Main Area</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800">Dainfern</h3>
                <p className="text-sm text-slate-600">Golf Estate</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800">Bryanston</h3>
                <p className="text-sm text-slate-600">Upmarket Suburb</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800">Lonehill</h3>
                <p className="text-sm text-slate-600">Residential Area</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800">Douglasdale</h3>
                <p className="text-sm text-slate-600">Established Area</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800">Broadacres</h3>
                <p className="text-sm text-slate-600">Luxury Homes</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800">Steyn City</h3>
                <p className="text-sm text-slate-600">Premium Estate</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-slate-800">Diepsloot</h3>
                <p className="text-sm text-slate-600">Surrounding Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Luxury Carpentry Project?</h2>
          <p className="text-xl mb-8 text-amber-100">
            Contact Fourways' trusted carpentry specialists for a premium consultation and detailed quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-amber-700 hover:bg-slate-100">
              <Link href="/contact">Get Premium Quote</Link>
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
