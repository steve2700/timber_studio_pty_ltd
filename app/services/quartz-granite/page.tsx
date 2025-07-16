import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Phone, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Quartz & Granite Countertop Installation Johannesburg | Stone Specialists",
  description:
    "Professional quartz countertop installation Johannesburg. Premium granite installers near me for kitchen and bathroom countertops. Expert stone installation across Gauteng.",
  keywords:
    "quartz countertop installation Johannesburg, granite installers near me, stone countertops Johannesburg, quartz installation Randburg, granite Kempton Park",
}

export default function QuartzGranitePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-slate-600 font-medium">5-Star Stone Specialists</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Premium <span className="text-amber-600">Quartz & Granite</span> Installations
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Professional stone countertop installation for kitchens and bathrooms. Expert templating, fabrication,
                and installation across Johannesburg and Gauteng.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 flex-wrap">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <Link href="/contact">
                    Get Free Stone Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8">
                  <a href="tel:+27676014490">
                    <Phone className="mr-2 w-5 h-5" />
                    Call: 067 601 4490
                  </a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  variant="outline"
                  className="text-lg px-8 border-amber-600 text-amber-600 hover:bg-amber-50"
                >
                  <a href="https://g.co/kgs/epZT5BY" target="_blank" rel="noopener noreferrer">
                    <Star className="mr-2 w-5 h-5 fill-current" />
                    See Our Reviews
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/granite-installation-sandton.jpg?height=600&width=800"
                alt="Premium quartz and granite countertop installation by Johannesburg specialists"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stone Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Premium Stone Options</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our selection of premium quartz and granite surfaces, each offering unique beauty and
              durability for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Quartz Countertops</h3>
                <p className="text-slate-600 mb-6">
                  Engineered quartz surfaces offer superior durability, non-porous properties, and consistent patterns.
                  Perfect for busy kitchens and bathrooms.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Non-porous and stain-resistant
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Consistent patterns and colors
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Low maintenance requirements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Heat and scratch resistant
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Granite Countertops</h3>
                <p className="text-slate-600 mb-6">
                  Natural granite offers timeless beauty with unique patterns and colors. Extremely durable and adds
                  significant value to your home.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Natural stone beauty
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Unique patterns and colors
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Extremely durable surface
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Increases property value
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Professional Installation Process</h2>
            <p className="text-xl text-slate-600">
              From templating to final installation, we ensure precision at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Site Measurement</h3>
              <p className="text-slate-600">Precise measurements and site assessment for perfect fit</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Template Creation</h3>
              <p className="text-slate-600">Professional templating for accurate stone cutting</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Fabrication</h3>
              <p className="text-slate-600">Expert cutting and edge finishing of your stone</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Installation</h3>
              <p className="text-slate-600">Professional installation with seamless finish</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Stone Installation Applications</h2>
            <p className="text-xl text-slate-600">
              Professional stone installation for various applications throughout your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Kitchen Countertops</h3>
                <p className="text-slate-600 mb-4">
                  Transform your kitchen with premium stone countertops. Perfect for food preparation and entertaining
                  areas.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Island countertops
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Breakfast bars
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Backsplashes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Bathroom Vanities</h3>
                <p className="text-slate-600 mb-4">
                  Elegant bathroom vanity tops that resist moisture and add luxury to your bathroom space.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Single & double vanities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom edge profiles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Integrated sinks
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Commercial Applications</h3>
                <p className="text-slate-600 mb-4">
                  Professional stone installation for commercial kitchens, reception areas, and office spaces.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Restaurant counters
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Reception desks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Office surfaces
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready for Premium Stone Surfaces?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact Johannesburg's trusted stone installation experts today. Professional quartz and granite
            installation with quality guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-amber-600 hover:bg-slate-50 text-lg px-8">
              <Link href="/contact">
                Get Free Stone Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8"
            >
              <Link href="/portfolio">View Stone Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
