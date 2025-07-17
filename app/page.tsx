import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Star, CheckCircle, ArrowRight, Hammer, Home, Gem, Award, Users, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Carpenter & Granite Installation Johannesburg | 5-Star Rated Experts",
  description:
    "Leading professional carpentry and granite installation specialists in Johannesburg, Gauteng. Expert kitchen renovations, built-in cupboards, quartz countertops, decking, drywall, and ceiling services. 5-star rated with 47+ completed projects across Sandton, Randburg, Kempton Park, Midrand, Fourways, Boksburg, Centurion, Pretoria. Licensed, insured, and offering free professional quotes plus carpentry training courses.",
  keywords:
    "professional carpenter Johannesburg, granite installation specialists Gauteng, kitchen renovation experts Sandton, built-in cupboards Randburg, quartz countertops Kempton Park, best carpenter Johannesburg South, affordable carpenter Gauteng, licensed carpenter services, insured carpentry contractor, 5-star rated carpenter, professional joinery services, custom kitchen cabinets, stone installation experts, decking installation specialists, drywall contractors, ceiling installation experts, flooring specialists, carpentry training courses, commercial carpentry services, residential renovation specialists",
  alternates: {
    canonical: "https://granitecarpentry.co.za",
  },
  openGraph: {
    title: "Professional Carpenter & Granite Installation Johannesburg | 5-Star Rated Experts",
    description:
      "Leading professional carpentry and granite installation specialists in Johannesburg, Gauteng. 5-star rated with 47+ completed projects.",
    url: "https://granitecarpentry.co.za",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Carpenter and Granite Installation Services in Johannesburg - Kitchen Renovations and Built-in Cupboards",
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ))}
                </div>
                <span className="text-slate-600 font-medium text-sm sm:text-base">5-Star Professional Service</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
                Professional <span className="text-amber-600">Carpentry</span> &{" "}
                <span className="text-amber-600">Granite</span> Installation Experts
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Leading professional carpentry and granite installation specialists in Johannesburg, Gauteng. Expert
                kitchen renovations, built-in cupboards, and premium stone installations with 5-star rated service
                across all major areas.
              </p>

              <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button
                  size="lg"
                  asChild
                  className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  <Link href="/contact">
                    Get Free Professional Quote
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
                      <span className="hidden sm:inline">View 5-Star Google Reviews</span>
                      <span className="sm:hidden">Google Reviews</span>
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-600 text-sm sm:text-base">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" />
                  <span>Free Professional Quotes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2" />
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <Image
                src="/granite-countertop.jpg?height=600&width=800"
                alt="Professional kitchen renovation with granite countertops by Johannesburg carpentry experts"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg">
                <div className="text-xl sm:text-2xl font-bold text-slate-800">47+</div>
                <div className="text-slate-600 text-sm sm:text-base">Completed Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Professional Carpentry & Granite Services
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto">
              Comprehensive professional carpentry and stone installation services across Johannesburg and Gauteng.
              Licensed, insured, and committed to excellence in every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-amber-200 transition-colors">
                  <Home className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                  Expert Kitchen Renovations
                </h3>
                <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Complete professional kitchen transformations with custom cabinetry, premium countertops, and expert
                  joinery work. Transform your kitchen into a beautiful, functional space with our comprehensive
                  renovation services.
                </p>
                <Button asChild variant="outline" className="group-hover:bg-amber-50 w-full sm:w-auto bg-transparent">
                  <Link href="/services/kitchen-renovations">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-amber-200 transition-colors">
                  <Hammer className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                  Custom Built-in Storage Solutions
                </h3>
                <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Professional custom-designed storage solutions that maximize space and add significant value to your
                  property. Expert craftsmanship for bedrooms, studies, living areas, and commercial spaces.
                </p>
                <Button asChild variant="outline" className="group-hover:bg-amber-50 w-full sm:w-auto bg-transparent">
                  <Link href="/services/built-in-cupboards">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200 md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-amber-200 transition-colors">
                  <Gem className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                  Premium Stone Installations
                </h3>
                <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  Professional granite and quartz countertop installations with precision templating, expert
                  fabrication, and flawless installation. Premium materials with comprehensive warranties.
                </p>
                <Button asChild variant="outline" className="group-hover:bg-amber-50 w-full sm:w-auto bg-transparent">
                  <Link href="/services/quartz-granite">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Excellence Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">
                Why Choose Granite Carpentry Experts?
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8">
                As Johannesburg's leading professional carpentry and granite specialists, we combine years of expertise
                with competitive pricing, comprehensive warranties, and exceptional customer service.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-base sm:text-lg">
                      Licensed & Insured Professionals
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      Fully licensed carpentry contractors with comprehensive insurance coverage for your peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-base sm:text-lg">
                      5-Star Customer Rating
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      Consistently rated 5 stars with 47+ completed projects and 100% customer satisfaction rate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-base sm:text-lg">
                      Comprehensive Warranties
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      All work backed by comprehensive warranties - 2 years on carpentry, 5 years on stone
                      installations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-base sm:text-lg">
                      Gauteng-Wide Service
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      Professional services across all major Gauteng areas with local expertise and understanding.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <Image
                src="/carpenter-johannesburg-installing-kitchen-cupboards.jpg?height=500&width=600"
                alt="Professional carpenter working on built-in cupboards in Johannesburg - quality craftsmanship"
                width={600}
                height={500}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Statistics Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Professional Track Record
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Numbers that demonstrate our commitment to professional excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">47+</div>
                <div className="text-slate-600 text-sm sm:text-base">Completed Projects</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">5.0</div>
                <div className="text-slate-600 text-sm sm:text-base">Star Rating</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">100%</div>
                <div className="text-slate-600 text-sm sm:text-base">Quality Guarantee</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">24hr</div>
                <div className="text-slate-600 text-sm sm:text-base">Quote Response</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Professional Services Across Gauteng
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Licensed and insured carpentry and granite installation services throughout the region
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
            {[
              { code: "JS", name: "Johannesburg South", desc: "Primary Service Area" },
              { code: "SD", name: "Sandton", desc: "Commercial & Residential" },
              { code: "RB", name: "Randburg", desc: "Kitchen Specialists" },
              { code: "KP", name: "Kempton Park", desc: "Built-in Experts" },
              { code: "MD", name: "Midrand", desc: "Stone Installation" },
              { code: "FW", name: "Fourways", desc: "Premium Services" },
              { code: "BK", name: "Boksburg", desc: "Professional Work" },
              { code: "BN", name: "Benoni", desc: "Quality Carpentry" },
              { code: "GM", name: "Germiston", desc: "Expert Installation" },
              { code: "AB", name: "Alberton", desc: "Custom Solutions" },
              { code: "CT", name: "Centurion", desc: "Professional Service" },
              { code: "PT", name: "Pretoria", desc: "Licensed Contractors" },
            ].map((area) => (
              <div key={area.code} className="p-3 sm:p-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-sm sm:text-lg font-bold text-amber-600">{area.code}</span>
                </div>
                <h3 className="font-semibold text-slate-800 text-xs sm:text-sm leading-tight mb-1">{area.name}</h3>
                <p className="text-xs text-slate-500">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready for Professional Results?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
            Contact Johannesburg's leading professional carpentry and granite installation experts today. Licensed,
            insured, and committed to excellence with comprehensive warranties and 5-star service guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
            <Button
              size="lg"
              asChild
              className="bg-white text-amber-600 hover:bg-slate-50 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              <Link href="/contact">
                Get Professional Quote
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
