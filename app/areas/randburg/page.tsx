import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Phone, Star, Award, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Trusted Carpenter & Plumber Randburg | Kitchen Renovations, Built-in Cupboards & Emergency Plumbing",
  description:
    "Trusted carpenter & plumber in Randburg with 5-star rating. Expert kitchen renovations, built-in cupboards, granite installation & emergency plumbing for Randburg, Northcliff, Ferndale. Affordable quality carpentry & plumbing. Free quotes.",
  keywords:
    "carpenter Randburg, plumber Randburg, kitchen renovation Randburg, built-in cupboards Randburg, granite installation Randburg, emergency plumbing Randburg, carpenter Northcliff, kitchen cabinets Ferndale, affordable carpenter Randburg, trusted carpenter Randburg, best carpenter Randburg, custom carpentry Randburg, 24/7 plumber Randburg",
}

export default function RandburgPage() {
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
                <span className="text-slate-600 font-medium text-sm sm:text-base">
                  Trusted Randburg Carpenter & Plumber
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
                Trusted <span className="text-amber-600">Carpenter & Plumber</span> in{" "}
                <span className="text-amber-600">Randburg</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Professional carpentry and plumbing services in Randburg, Northcliff, and Ferndale. Specializing in
                kitchen renovations, built-in cupboards, granite installations, and emergency plumbing for Randburg
                families. Quality workmanship at affordable prices.
              </p>

              <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button
                  size="lg"
                  asChild
                  className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  <Link href="/contact">
                    Get Free Quote
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
                    <a href="tel:+27633977498">
                      <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      Call: 063 397 7498
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
                  <Home className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mr-2" />
                  <span>Local Randburg</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mr-2" />
                  <span>Trusted Service</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/trusted-carpenter-randburg.jpg?height=600&width=800"
                alt="Trusted carpenter in Randburg - kitchen renovation and built-in cupboards"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
                <div className="text-xl sm:text-2xl font-bold text-slate-800">5★</div>
                <div className="text-slate-600 text-sm sm:text-base">Trusted Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Randburg Areas Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Serving All Randburg Areas
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Professional carpentry and plumbing services throughout Randburg and surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Randburg CBD",
              "Northcliff",
              "Ferndale",
              "Blackheath",
              "Blairgowrie",
              "Bordeaux",
              "Cresta",
              "Darrenwood",
              "Fairland",
              "Fontainebleau",
              "Jukskei Park",
              "Kensington B",
              "Malanshof",
              "Northgate",
              "Olivedale",
              "Randpark Ridge",
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
              Carpentry & Plumbing Services in Randburg
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Quality carpentry and plumbing services for Randburg homeowners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">Kitchen Renovations</h3>
                <p className="text-slate-600 mb-4 text-sm sm:text-base">
                  Transform your Randburg kitchen with our professional renovation services. Modern designs that suit
                  family living.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6 text-sm sm:text-base">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom kitchen cabinets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Granite countertops
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Kitchen islands
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent">
                  <Link href="/kitchen-renovations">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">Built-in Storage</h3>
                <p className="text-slate-600 mb-4 text-sm sm:text-base">
                  Maximize your Randburg home's storage with custom built-in solutions. Perfect for growing families.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6 text-sm sm:text-base">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Bedroom wardrobes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Study storage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Living room units
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent">
                  <Link href="/built-in-cupboards">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4">Trusted Plumbing Services</h3>
                <p className="text-slate-600 mb-4 text-sm sm:text-base">
                  Professional plumbing services for Randburg families. Reliable repairs and installations at fair
                  prices.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6 text-sm sm:text-base">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Family plumbing services
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Emergency repairs 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Bathroom renovations
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent">
                  <Link href="/bathroom-renovations">Learn More</Link>
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
            Ready to Start Your Randburg Project?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
            Contact Randburg's trusted carpentry and plumbing specialists today. Quality workmanship, fair pricing, and
            reliable service for your home improvement needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
            <Button
              size="lg"
              asChild
              className="bg-white text-amber-600 hover:bg-slate-50 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-amber-600 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto bg-transparent"
            >
              <a href="tel:+27633977498">
                <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Call: 063 397 7498
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
