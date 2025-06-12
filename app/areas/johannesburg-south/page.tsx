import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Phone, Star, MapPin, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Best Carpenter Johannesburg South | Kitchen Renovations & Built-in Cupboards",
  description:
    "#1 rated carpenter in Johannesburg South. Professional kitchen renovations, built-in cupboards, granite installations. Affordable, quality carpentry services. Free quotes. Call 067 601 4490.",
  keywords:
    "best carpenter Johannesburg South, cheap carpenter Johannesburg South, kitchen renovation Johannesburg South, built-in cupboards Johannesburg South, granite installation Johannesburg South, affordable carpenter Johannesburg South, professional carpentry Johannesburg South",
}

export default function JohannesburgSouthPage() {
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
                <span className="text-slate-600 font-medium text-sm sm:text-base">#1 Carpenter Johannesburg South</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
                Best <span className="text-amber-600">Carpenter</span> in{" "}
                <span className="text-amber-600">Johannesburg South</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Professional carpentry services in Johannesburg South. Specializing in kitchen renovations, built-in
                cupboards, granite installations, and custom joinery. Affordable rates with 5-star quality guaranteed.
              </p>

              <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button
                  size="lg"
                  asChild
                  className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  <Link href="/contact">
                    Get Free Quote Today
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
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
                    className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-amber-600 text-amber-600 hover:bg-amber-50 w-full sm:w-auto"
                  >
                    <a href="https://g.co/kgs/epZT5BY" target="_blank" rel="noopener noreferrer">
                      <Star className="mr-2 w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                      <span className="hidden sm:inline">See Our 5-Star Reviews</span>
                      <span className="sm:hidden">Reviews</span>
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-slate-600 text-sm sm:text-base">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mr-2" />
                  <span>Local Johannesburg South</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mr-2" />
                  <span>47+ Projects</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Best carpenter in Johannesburg South - kitchen renovation and built-in cupboards"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
                <div className="text-xl sm:text-2xl font-bold text-slate-800">#1</div>
                <div className="text-slate-600 text-sm sm:text-base">Rated Carpenter</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Why We're Johannesburg South's #1 Carpenter
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Local expertise, affordable pricing, and exceptional quality have made us the most trusted carpenter in
              Johannesburg South.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">5-Star Rated Service</h3>
                <p className="text-slate-600 text-sm sm:text-base">
                  Consistently rated 5 stars by Johannesburg South customers. 47+ completed projects with 100%
                  satisfaction rate.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Local Johannesburg South</h3>
                <p className="text-slate-600 text-sm sm:text-base">
                  Born and raised in Johannesburg South. We understand local homes, architectural styles, and customer
                  needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Affordable Excellence</h3>
                <p className="text-slate-600 text-sm sm:text-base">
                  Best value carpenter in Johannesburg South. Quality workmanship at competitive prices with transparent
                  quotes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Carpentry Services in Johannesburg South
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Professional carpentry and renovation services for Johannesburg South homeowners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">Kitchen Renovations</h3>
                <p className="text-slate-600 mb-4 text-sm sm:text-base">
                  Complete kitchen makeovers for Johannesburg South homes. Custom cabinetry, countertops, and modern
                  designs.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6 text-sm sm:text-base">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom kitchen cabinets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Granite & quartz countertops
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Kitchen islands & breakfast bars
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href="/services/kitchen-renovations">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">Built-in Cupboards</h3>
                <p className="text-slate-600 mb-4 text-sm sm:text-base">
                  Custom storage solutions for Johannesburg South homes. Maximize space with professional built-ins.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6 text-sm sm:text-base">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Bedroom wardrobes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Study & office storage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Entertainment units
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href="/services/built-in-cupboards">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Areas Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Serving All Johannesburg South Areas
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Professional carpentry services throughout the greater Johannesburg South region
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Alberton",
              "Bassonia",
              "Booysens",
              "City Deep",
              "Elandsfontein",
              "Glenvista",
              "Johannesburg CBD",
              "Kibler Park",
              "La Rochelle",
              "Meyerton",
              "Mondeor",
              "Ormonde",
              "Rosettenville",
              "Southdale",
              "Turffontein",
              "Winchester Hills",
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

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Start Your Johannesburg South Project?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Contact Johannesburg South's #1 rated carpenter today. Free quotes, professional service, and quality
            guaranteed for all your carpentry needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
            <Button
              size="lg"
              asChild
              className="bg-white text-amber-600 hover:bg-slate-50 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-amber-600 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
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
