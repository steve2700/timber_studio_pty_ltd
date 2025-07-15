import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Phone, Star, Award, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Carpenter Sandton | Kitchen Renovations & Granite Installation",
  description:
    "Leading professional carpenter in Sandton. Expert kitchen renovations, built-in cupboards, granite countertops for Sandton, Rosebank, Hyde Park. Premium carpentry services with 5-star rating. Free quotes.",
  keywords:
    "carpenter Sandton, kitchen renovation Sandton, granite installation Sandton, built-in cupboards Sandton, professional carpenter Rosebank, kitchen cabinets Hyde Park, quartz countertops Sandton City, custom carpentry Sandton, affordable carpenter Sandton, best carpenter Sandton",
}

export default function SandtonPage() {
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
                <span className="text-slate-600 font-medium text-sm sm:text-base">Premium Sandton Carpenter</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
                Professional <span className="text-amber-600">Carpenter</span> in{" "}
                <span className="text-amber-600">Sandton</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Premium carpentry and granite installation services in Sandton, Rosebank, and Hyde Park. Specializing in
                luxury kitchen renovations, executive built-in cupboards, and high-end stone installations for Sandton's
                discerning homeowners.
              </p>

              <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button
                  size="lg"
                  asChild
                  className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  <Link href="/contact">
                    Get Premium Quote
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
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mr-2" />
                  <span>Sandton Specialist</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mr-2" />
                  <span>Premium Service</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Professional carpenter in Sandton - luxury kitchen renovation and granite installation"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
                <div className="text-xl sm:text-2xl font-bold text-slate-800">Premium</div>
                <div className="text-slate-600 text-sm sm:text-base">Sandton Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sandton Areas Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Serving All Sandton Areas
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Premium carpentry services throughout Sandton and surrounding upmarket areas
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Sandton CBD",
              "Rosebank",
              "Hyde Park",
              "Illovo",
              "Melrose",
              "Morningside",
              "Rivonia",
              "Bryanston",
              "Douglasdale",
              "Lonehill",
              "Paulshof",
              "Sunninghill",
              "Woodmead",
              "Marlboro",
              "Alexandra",
              "Wynberg",
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
              Premium Carpentry Services in Sandton
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Luxury carpentry and stone installation for Sandton's finest homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">Executive Kitchen Renovations</h3>
                <p className="text-slate-600 mb-4 text-sm sm:text-base">
                  Luxury kitchen transformations for Sandton executives and professionals. Premium materials and
                  sophisticated designs.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6 text-sm sm:text-base">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    High-end custom cabinetry
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Premium granite & quartz
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Designer kitchen islands
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
                  Sophisticated storage solutions for upmarket Sandton homes. Custom designs that complement your
                  lifestyle.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6 text-sm sm:text-base">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Walk-in wardrobes
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
            Ready for Premium Sandton Service?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Contact Sandton's premier carpentry specialists today. Luxury service, premium materials, and exceptional
            craftsmanship for discerning homeowners.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
            <Button
              size="lg"
              asChild
              className="bg-white text-amber-600 hover:bg-slate-50 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              <Link href="/contact">
                Get Premium Quote
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
