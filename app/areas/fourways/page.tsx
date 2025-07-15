import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Phone, Star, Award, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Premium Carpenter Fourways | Luxury Kitchen Renovations & Built-in Cupboards",
  description:
    "Premium carpenter in Fourways. Luxury kitchen renovations, executive built-in cupboards, granite installation for Fourways, Lonehill, Dainfern. Upmarket carpentry services with 5-star rating.",
  keywords:
    "carpenter Fourways, luxury kitchen renovation Fourways, premium built-in cupboards Fourways, granite installation Fourways, carpenter Lonehill, kitchen cabinets Dainfern, upmarket carpenter Fourways, executive carpentry Fourways, custom carpentry Fourways",
}

export default function FourwaysPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ))}
                </div>
                <span className="text-slate-600 font-medium text-sm sm:text-base">Premium Fourways Carpenter</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
                Premium <span className="text-amber-600">Carpenter</span> in{" "}
                <span className="text-amber-600">Fourways</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Premium carpentry services in Fourways, Lonehill, and Dainfern. Specializing in luxury kitchen
                renovations, executive built-in cupboards, and high-end granite installations for Fourways' upmarket
                properties.
              </p>

              <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button
                  size="lg"
                  asChild
                  className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  <Link href="/contact">
                    Get Luxury Quote
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto bg-transparent"
                  >
                    <a href="tel:+27676014490">
                      <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      Call: 067 601 4490
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    asChild
                    variant="outline"
                    className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-amber-600 text-amber-600 hover:bg-amber-50 w-full sm:w-auto bg-transparent"
                  >
                    <a href="https://g.co/kgs/epZT5BY" target="_blank" rel="noopener noreferrer">
                      <Star className="mr-2 w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                      <span className="hidden sm:inline">5-Star Reviews</span>
                      <span className="sm:hidden">Reviews</span>
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-slate-600 text-sm sm:text-base">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mr-2" />
                  <span>Fourways Area</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mr-2" />
                  <span>Luxury Service</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Premium carpenter in Fourways - luxury kitchen renovation and executive built-in cupboards"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
                <div className="text-xl sm:text-2xl font-bold text-slate-800">Luxury</div>
                <div className="text-slate-600 text-sm sm:text-base">Craftsmanship</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourways Areas Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Serving All Fourways Areas
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Premium carpentry services throughout Fourways and surrounding upmarket areas
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Fourways",
              "Lonehill",
              "Dainfern",
              "Broadacres",
              "Bryanston",
              "Douglasdale",
              "Sunninghill",
              "Paulshof",
              "Magaliessig",
              "Chartwell",
              "Cedar Lakes",
              "Steyn City",
              "Lanseria",
              "Honeydew",
              "Northgate",
              "Randburg",
            ].map((area) => (
              <Card key={area} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-3 sm:p-4">
                  <h3 className="font-semibold text-slate-800 text-sm sm:text-base">{area}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Luxury Carpentry Services in Fourways
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Executive carpentry and stone installation for Fourways' finest properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">Executive Kitchen Design</h3>
                <p className="text-slate-600 mb-4 text-sm sm:text-base">
                  Luxury kitchen transformations for Fourways executives. Premium materials, sophisticated designs, and
                  flawless execution.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6 text-sm sm:text-base">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Designer kitchen islands
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Premium stone surfaces
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    High-end cabinetry
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent">
                  <Link href="/services/kitchen-renovations">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">Luxury Built-in Solutions</h3>
                <p className="text-slate-600 mb-4 text-sm sm:text-base">
                  Bespoke storage solutions for upmarket Fourways homes. Custom designs that reflect your lifestyle and
                  status.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6 text-sm sm:text-base">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Walk-in dressing rooms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Executive home offices
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Entertainment centers
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent">
                  <Link href="/services/built-in-cupboards">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Ready for Luxury Fourways Service?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Contact Fourways' premier luxury carpentry specialists today. Executive service, premium materials, and
            exceptional craftsmanship for discerning homeowners.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
            <Button
              size="lg"
              asChild
              className="bg-white text-amber-600 hover:bg-slate-50 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              <Link href="/contact">
                Get Luxury Quote
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-amber-600 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto bg-transparent"
            >
              <a href="tel:+27676014490">
                <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Call: 067 601 4490
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
