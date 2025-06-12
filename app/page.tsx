import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Star, CheckCircle, ArrowRight, Hammer, Home, Gem } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Carpenter & Granite Installers Johannesburg | 5-Star Rated",
  description:
    "Best carpenter in Johannesburg South for kitchen renovations, built-in cupboards, quartz & granite installations, decking, drywall & ceilings. Affordable, professional service in Randburg, Sandton, Midrand, Kempton Park, Fourways, Boksburg. Carpentry training available. Free quotes.",
  keywords:
    "best carpenter Johannesburg South, cheap carpenter Johannesburg South, kitchen renovation Sandton, kitchen installation Midrand, kitchen supplies Fourways, carpenter Boksburg, built-in cupboards Benoni, granite installation Germiston, kitchen fitter Alberton, joinery Edenvale, cupboard installation Bedfordview, kitchen renovation Centurion, carpenter Pretoria, decking installation Johannesburg, drywall installation Gauteng, ceiling installation Sandton, flooring installation Randburg, carpentry training Johannesburg, quartz countertop installation Johannesburg, granite installers near me, carpenter in Randburg, joinery Kempton Park",
}

export default function HomePage() {
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
                <span className="text-slate-600 font-medium">5-Star Rated Service</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                Professional <span className="text-amber-600">Carpentry</span> &{" "}
                <span className="text-amber-600">Granite</span> Experts
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Trusted carpenter in Johannesburg South specializing in kitchen renovations, built-in cupboards, and
                premium quartz & granite installations across Gauteng.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 flex-wrap">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <Link href="/contact">
                    Get Free Quote Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8">
                  <a href="tel:+27676014490">
                    <Phone className="mr-2 w-5 h-5" />
                    Call Now: 067 601 4490
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
                    See Our 5-Star Reviews on Google
                  </a>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-slate-600">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Free Quotes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Affordable Rates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Professional kitchen renovation with granite countertops by Johannesburg carpenter"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-slate-800">47+</div>
                <div className="text-slate-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Our Professional Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From kitchen renovations to custom built-ins, we're your trusted carpentry and stone installation experts
              across Johannesburg and Gauteng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                  <Home className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Kitchen Renovations & Joinery</h3>
                <p className="text-slate-600 mb-6">
                  Complete kitchen makeovers with custom cabinetry, countertops, and professional joinery work.
                  Transform your kitchen into a beautiful, functional space.
                </p>
                <Button asChild variant="outline" className="group-hover:bg-amber-50">
                  <Link href="/services/kitchen-renovations">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                  <Hammer className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Built-in Cupboards & Wardrobes</h3>
                <p className="text-slate-600 mb-6">
                  Custom-designed storage solutions that maximize space and add value to your home. Quality
                  craftsmanship for bedrooms, studies, and living areas.
                </p>
                <Button asChild variant="outline" className="group-hover:bg-amber-50">
                  <Link href="/services/built-in-cupboards">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-amber-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                  <Gem className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Quartz & Granite Installations</h3>
                <p className="text-slate-600 mb-6">
                  Premium stone countertop installations for kitchens and bathrooms. Professional templating,
                  fabrication, and installation services.
                </p>
                <Button asChild variant="outline" className="group-hover:bg-amber-50">
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                Why Choose Granite & Joinery Experts?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                As the best carpenter in Johannesburg South, we combine years of experience with affordable pricing and
                exceptional quality.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">5-Star Rated Service</h3>
                    <p className="text-slate-600">
                      Consistently rated as the best carpenter in the area with 47+ satisfied customers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Affordable & Transparent Pricing</h3>
                    <p className="text-slate-600">
                      Competitive rates with no hidden costs. Free quotes for all projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Local Gauteng Experts</h3>
                    <p className="text-slate-600">
                      Serving Johannesburg South, Randburg, Kempton Park, and surrounding areas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Quality Guaranteed</h3>
                    <p className="text-slate-600">
                      Professional workmanship with attention to detail on every project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Professional carpenter working on built-in cupboards in Johannesburg"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Service Areas Across Gauteng</h2>
            <p className="text-xl text-slate-600">
              Professional carpentry and granite installation services throughout the region
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            <div className="p-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-amber-600">JS</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm">Johannesburg South</h3>
            </div>

            <div className="p-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-amber-600">SD</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm">Sandton</h3>
            </div>

            <div className="p-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-amber-600">RB</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm">Randburg</h3>
            </div>

            <div className="p-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-amber-600">KP</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm">Kempton Park</h3>
            </div>

            <div className="p-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-amber-600">MD</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm">Midrand</h3>
            </div>

            <div className="p-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-amber-600">FW</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm">Fourways</h3>
            </div>

            <div className="p-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-amber-600">BK</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm">Boksburg</h3>
            </div>

            <div className="p-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-amber-600">BN</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm">Benoni</h3>
            </div>

            <div className="p-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-amber-600">GM</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm">Germiston</h3>
            </div>

            <div className="p-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-amber-600">AB</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm">Alberton</h3>
            </div>

            <div className="p-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-amber-600">PT</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm">Pretoria</h3>
            </div>

            <div className="p-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-amber-600">+</span>
              </div>
              <h3 className="font-semibold text-slate-800 text-sm">All Gauteng</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact Johannesburg's trusted carpentry and granite experts today. Free quotes, professional service, and
            quality guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-amber-600 hover:bg-slate-50 text-lg px-8">
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8"
            >
              <a href="tel:+27676014490">
                <Phone className="mr-2 w-5 h-5" />
                Call Now: 067 601 4490
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
