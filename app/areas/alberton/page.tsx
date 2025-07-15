import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Phone, Star, Award, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Trusted Carpenter Alberton | Kitchen Renovations & Built-in Cupboards South Rand",
  description:
    "Trusted carpenter in Alberton South Rand. Professional kitchen renovations, built-in cupboards, granite installation for Alberton, Meyerton, Vereeniging. Quality family carpentry services.",
  keywords:
    "carpenter Alberton, kitchen renovation Alberton, built-in cupboards Alberton, granite installation Alberton, carpenter Meyerton, kitchen cabinets Vereeniging, trusted carpenter South Rand, family carpenter Alberton, custom carpentry Alberton",
}

export default function AlbertonPage() {
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
                <span className="text-slate-600 font-medium text-sm sm:text-base">Trusted Alberton Carpenter</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
                Trusted <span className="text-amber-600">Carpenter</span> in{" "}
                <span className="text-amber-600">Alberton</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Professional carpentry services in Alberton, Meyerton, and Vereeniging. Trusted kitchen renovations,
                built-in cupboards, and granite installations for South Rand families. Quality workmanship with a
                personal touch.
              </p>

              <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button
                  size="lg"
                  asChild
                  className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  <Link href="/contact">
                    Get Trusted Quote
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
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mr-2" />
                  <span>Family Focused</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mr-2" />
                  <span>Trusted Service</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Trusted carpenter in Alberton - family kitchen renovation and built-in cupboards"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
                <div className="text-xl sm:text-2xl font-bold text-slate-800">Family</div>
                <div className="text-slate-600 text-sm sm:text-base">Focused</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alberton Areas Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Serving All Alberton Areas
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Trusted carpentry services throughout Alberton and South Rand areas
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Alberton CBD",
              "Meyerton",
              "Vereeniging",
              "Vanderbijlpark",
              "Sasolburg",
              "Heidelberg",
              "Nigel",
              "Balfour",
              "Standerton",
              "Bethal",
              "Secunda",
              "Evaton",
              "Sebokeng",
              "Sharpeville",
              "Boipatong",
              "Bophelong",
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

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Family Carpentry Services in Alberton
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Trusted carpentry and renovation services for South Rand families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">Family Kitchen Solutions</h3>
                <p className="text-slate-600 mb-4 text-sm sm:text-base">
                  Trusted kitchen renovations for Alberton families. Practical designs that work for everyday family
                  life and entertaining.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6 text-sm sm:text-base">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Family-friendly layouts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Durable finishes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Safe materials
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent">
                  <Link href="/services/kitchen-renovations">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">Reliable Storage Solutions</h3>
                <p className="text-slate-600 mb-4 text-sm sm:text-base">
                  Dependable built-in storage for Alberton homes. Quality solutions that grow with your family's needs.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6 text-sm sm:text-base">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Children's wardrobes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Family storage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Study areas
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
            Ready for Trusted Alberton Service?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Contact Alberton's trusted carpentry specialists today. Family-focused service, reliable workmanship, and
            fair pricing for all your home improvement needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
            <Button
              size="lg"
              asChild
              className="bg-white text-amber-600 hover:bg-slate-50 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              <Link href="/contact">
                Get Trusted Quote
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
