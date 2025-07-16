import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Phone, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Built-in Cupboards & Wardrobes Johannesburg | Custom Storage Solutions",
  description:
    "Professional built-in cupboards and wardrobes in Johannesburg South, Randburg. Custom storage solutions for bedrooms, studies, and living areas. Affordable carpenter with 5-star rating.",
  keywords:
    "built-in cupboards Johannesburg, wardrobes Johannesburg South, custom cupboards Randburg, bedroom cupboards, cheap carpenter Johannesburg South",
}

export default function BuiltInCupboardsPage() {
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
                <span className="text-slate-600 font-medium">5-Star Storage Specialists</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Custom <span className="text-amber-600">Built-in Cupboards</span> & Wardrobes
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Maximize your space with custom-designed built-in storage solutions. Professional carpentry for
                bedrooms, studies, and living areas across Johannesburg.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 flex-wrap">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <Link href="/contact">
                    Get Free Storage Quote
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
                src="/Custom-Bedroom-Built-In-Cupboards-and-Wardrobes-JHB.png?height=600&width=800"
                alt="Custom built-in wardrobes and cupboards by Johannesburg carpenter"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Custom Storage Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From bedroom wardrobes to study storage, we create custom built-in solutions that maximize space and add
              value to your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Bedroom Wardrobes</h3>
                <p className="text-slate-600 mb-4">
                  Custom bedroom wardrobes designed to fit your space perfectly. Maximize storage with hanging space,
                  shelving, and drawers.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Walk-in wardrobes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Sliding door systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom organization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Study & Office Storage</h3>
                <p className="text-slate-600 mb-4">
                  Built-in desks, bookshelves, and storage solutions for home offices and study areas. Functional and
                  stylish designs.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Built-in desks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Floor-to-ceiling shelving
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Cable management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Living Area Storage</h3>
                <p className="text-slate-600 mb-4">
                  Entertainment units, display cabinets, and storage solutions for living rooms and family areas.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    TV entertainment units
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Display cabinets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Under-stair storage
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">Why Choose Built-in Storage?</h2>
              <p className="text-xl text-slate-600 mb-8">
                Built-in cupboards and wardrobes offer superior space utilization and add significant value to your
                property.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Maximize Space</h3>
                    <p className="text-slate-600">
                      Custom-fit solutions that use every inch of available space efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Add Property Value</h3>
                    <p className="text-slate-600">Quality built-ins significantly increase your home's market value.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Perfect Fit</h3>
                    <p className="text-slate-600">
                      Custom measurements ensure perfect fit for any space or architectural feature.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Quality Materials</h3>
                    <p className="text-slate-600">
                      Durable materials and professional craftsmanship for long-lasting results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/Built-Built-in-Cupboards-Midrand.jpg?height=500&width=600"
                alt="Custom built-in storage solutions showing space optimization"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Transform Your Storage Today</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free quote for custom built-in cupboards and wardrobes. Professional carpentry services across
            Johannesburg and Gauteng.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-amber-600 hover:bg-slate-50 text-lg px-8">
              <Link href="/contact">
                Get Free Storage Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8"
            >
              <Link href="/portfolio">View Storage Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
