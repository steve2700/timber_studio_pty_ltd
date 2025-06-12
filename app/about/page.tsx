import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Phone, Star, Award, Users, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Granite & Joinery Experts Johannesburg - 5-Star Rated Carpenter",
  description:
    "Learn about Granite & Joinery Experts Johannesburg. 5-star rated carpenter specializing in kitchen renovations, built-in cupboards, and stone installations across Gauteng.",
  keywords:
    "about Granite Joinery Experts, best carpenter Johannesburg South, 5-star carpenter, professional carpentry Gauteng, trusted carpenter Randburg",
}

export default function AboutPage() {
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
                <span className="text-slate-600 font-medium">5-Star Rated Since Day One</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                About <span className="text-amber-600">Granite & Joinery</span> Experts
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We are Johannesburg's trusted carpentry and stone installation specialists, serving homeowners across
                Gauteng with professional craftsmanship and exceptional service since our founding.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <Link href="/contact">
                    Work With Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8">
                  <Link href="/portfolio">View Our Work</Link>
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
                src="/placeholder.svg?height=600&width=800"
                alt="Professional carpenter team at Granite & Joinery Experts Johannesburg"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-amber-600 mb-1">5★</div>
                <div className="text-slate-600 font-medium">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">Our Story & Mission</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Granite & Joinery Experts Johannesburg was founded with a simple mission: to provide homeowners across
              Gauteng with exceptional carpentry and stone installation services at affordable prices. We believe that
              quality craftsmanship shouldn't be a luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Why We're Different</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Local Expertise</h4>
                    <p className="text-slate-600">
                      Born and raised in Johannesburg, we understand local homes and architectural styles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Affordable Excellence</h4>
                    <p className="text-slate-600">
                      We prove that you don't need to compromise on quality to get affordable pricing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Personal Service</h4>
                    <p className="text-slate-600">
                      Every project receives personal attention from consultation to completion.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Quality Guarantee</h4>
                    <p className="text-slate-600">
                      We stand behind our work with comprehensive guarantees on all projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Quality craftsmanship and attention to detail in carpentry work"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Our Track Record</h2>
            <p className="text-xl text-slate-600">Numbers that speak to our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">47+</div>
                <div className="text-slate-600">Happy Customers</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">5.0</div>
                <div className="text-slate-600">Star Rating</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">100%</div>
                <div className="text-slate-600">Quality Guarantee</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">24hr</div>
                <div className="text-slate-600">Quote Response</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Proudly Serving Gauteng</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              As local specialists, we understand the unique needs of homeowners across Johannesburg and surrounding
              areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-slate-50 hover:bg-amber-50 transition-colors">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Johannesburg South</h3>
              <p className="text-slate-600">
                Our primary service area where we've built our reputation as the best carpenter in the region.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-slate-50 hover:bg-amber-50 transition-colors">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Randburg</h3>
              <p className="text-slate-600">
                Trusted carpenter services for kitchen renovations and built-in storage solutions.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-slate-50 hover:bg-amber-50 transition-colors">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Kempton Park</h3>
              <p className="text-slate-600">
                Specialized joinery services and custom carpentry for residential properties.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-slate-50 hover:bg-amber-50 transition-colors">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Roodepoort</h3>
              <p className="text-slate-600">Quality granite and quartz installations with professional service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Experience the Difference</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our growing family of satisfied customers. Contact us today to discuss your carpentry or stone
            installation project.
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
              <a href="tel:+27-11-XXX-XXXX">
                <Phone className="mr-2 w-5 h-5" />
                Call: 011-XXX-XXXX
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
