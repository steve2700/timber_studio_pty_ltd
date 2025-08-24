import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Phone, Star, Award, Shield, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Kitchen Renovations Johannesburg 2025 | #1 Rated Kitchen Renovation Company",
  description:
    "Transform your kitchen with Johannesburg's #1 kitchen renovation company. Professional kitchen remodeling, custom cabinets, granite countertops. 5-star rated with 47+ projects. Free quotes. Call 067 601 4490.",
  keywords:
    "kitchen renovations Johannesburg 2025, kitchen renovation company Johannesburg, kitchen remodeling Johannesburg, custom kitchen cabinets Johannesburg, granite countertops kitchen, kitchen makeover Johannesburg, affordable kitchen renovation, professional kitchen renovation Sandton, kitchen renovation Randburg, modern kitchen design Johannesburg",
  robots: "index, follow",
  openGraph: {
    title: "Kitchen Renovations Johannesburg 2025 | #1 Rated Company",
    description:
      "Transform your kitchen with Johannesburg's #1 kitchen renovation company. Custom cabinets, granite countertops, professional installation. 5-star rated service.",
    url: "https://granitecarpentry.co.za/services/kitchen-renovations",
    siteName: "Granite Carpentry",
    images: [
      {
        url: "https://granitecarpentry.co.za/Kitchen-renovations-sandton.webp",
        width: 1200,
        height: 630,
        alt: "Kitchen Renovations Johannesburg - Professional Kitchen Remodeling",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
}

export default function KitchenRenovationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 px-3 py-1">
                  #1 Kitchen Renovation Company
                </Badge>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-slate-600 font-medium">5.0 Rating • 47+ Kitchen Projects</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                Kitchen <span className="text-amber-600">Renovations</span> Johannesburg 2025
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Transform your kitchen into the heart of your home with Johannesburg's most trusted kitchen renovation
                specialists. Custom cabinets, granite countertops, and complete kitchen makeovers with guaranteed
                results.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700 font-medium">Free Design Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700 font-medium">24-Month Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700 font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700 font-medium">5-Star Rated Service</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                  <Link href="/contact">
                    Get Free Kitchen Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-4 bg-transparent">
                  <a href="tel:+27676014490">
                    <Phone className="mr-2 w-5 h-5" />
                    Call: 067 601 4490
                  </a>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-slate-600">
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-amber-600 mr-2" />
                  <span className="text-sm">Award-Winning Design</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm">Fully Insured</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/Kitchen-renovations-sandton.webp"
                alt="Professional kitchen renovations Johannesburg - modern kitchen design with granite countertops"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-slate-800">47+</div>
                <div className="text-slate-600 text-sm">Kitchen Projects</div>
              </div>
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-amber-600 text-white p-3 rounded-lg shadow-lg">
                <div className="text-lg font-bold">#1</div>
                <div className="text-xs">Rated Company</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Renovation Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Complete Kitchen Renovation Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From design to installation, we handle every aspect of your kitchen renovation with professional expertise
              and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-amber-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Custom Kitchen Cabinets</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/carpenter-johannesburg-installing-kitchen-cupboards.jpg"
                  alt="Custom kitchen cabinets installation Johannesburg"
                  width={400}
                  height={250}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <p className="text-slate-600 mb-4">
                  Bespoke kitchen cabinets designed and built to maximize your space and match your style perfectly.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Soft-close hinges and drawers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Premium quality materials
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom storage solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Modern and traditional styles
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">Get Cabinet Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-amber-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Granite Countertops</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/granitecarpentry.webp"
                  alt="Granite countertops installation kitchen renovation Johannesburg"
                  width={400}
                  height={250}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <p className="text-slate-600 mb-4">
                  Premium granite and quartz countertops that combine beauty with durability for your dream kitchen.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Wide selection of colors
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Professional templating
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Precision cutting and fitting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Heat and stain resistant
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/services/quartz-granite">View Stone Options</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 hover:border-amber-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Kitchen Islands & Bars</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/modern-kitchen renovation.webp"
                  alt="Kitchen island installation Johannesburg - custom kitchen renovation"
                  width={400}
                  height={250}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <p className="text-slate-600 mb-4">
                  Custom kitchen islands and breakfast bars that become the centerpiece of your renovated kitchen.
                </p>
                <ul className="space-y-2 text-slate-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Additional storage space
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Integrated electrical outlets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Seating and dining options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom size and design
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">Design My Island</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kitchen Renovation Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Our Kitchen Renovation Process</h2>
            <p className="text-xl text-slate-600">
              From initial consultation to final installation, we guide you through every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Free Consultation</h3>
              <p className="text-slate-600">
                We visit your home to assess your space, discuss your vision, and provide expert recommendations for
                your kitchen renovation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Design & Quote</h3>
              <p className="text-slate-600">
                Our team creates detailed designs and provides transparent pricing for your complete kitchen renovation
                project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Professional Installation</h3>
              <p className="text-slate-600">
                Our skilled craftsmen handle all aspects of installation, from cabinets to countertops, with minimal
                disruption to your home.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Final Inspection</h3>
              <p className="text-slate-600">
                We conduct a thorough inspection with you to ensure every detail meets our high standards and your
                complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                Why Choose Granite Carpentry for Your Kitchen Renovation?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                With 47+ successful kitchen renovations across Johannesburg, we're the trusted choice for homeowners who
                demand excellence.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">5-Star Customer Satisfaction</h3>
                    <p className="text-slate-600">
                      Every kitchen renovation project is completed to the highest standards, earning us consistent
                      5-star reviews from satisfied customers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Expert Kitchen Specialists</h3>
                    <p className="text-slate-600">
                      Our team specializes exclusively in kitchen renovations, bringing years of experience and
                      expertise to every project.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">On-Time Project Completion</h3>
                    <p className="text-slate-600">
                      We understand the importance of your kitchen, which is why we complete renovations on schedule
                      with minimal disruption.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Comprehensive Warranty</h3>
                    <p className="text-slate-600">
                      All kitchen renovation work comes with our 24-month warranty, giving you peace of mind and
                      protection for your investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/kitchen-renovation-granite-installation-johannesburg.jpg"
                alt="Professional kitchen renovation team Johannesburg - expert installation"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-3xl font-bold">47+</div>
                <div className="text-lg">Kitchen Renovations Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Kitchen Renovations Across Johannesburg
            </h2>
            <p className="text-xl text-slate-600">
              Professional kitchen renovation services throughout the Greater Johannesburg area
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Johannesburg South",
              "Sandton",
              "Rosebank",
              "Randburg",
              "Fourways",
              "Kempton Park",
              "Boksburg",
              "Pretoria",
              "Centurion",
              "Midrand",
              "Edenvale",
              "Roodepoort",
              "Alberton",
              "Benoni",
              "Germiston",
              "Bedfordview",
              "Bryanston",
              "Hyde Park",
              "Illovo",
              "Melrose",
              "Morningside",
              "Rivonia",
              "Sunninghill",
              "Woodmead",
            ].map((area) => (
              <Card key={area} className="text-center hover:shadow-lg transition-shadow p-3">
                <CardContent className="p-2">
                  <h3 className="font-semibold text-slate-800 text-sm">{area}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Don't see your area listed? We serve the entire Greater Johannesburg region.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Check Service Availability</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Kitchen?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 47+ satisfied customers who chose Granite Carpentry for their kitchen renovation. Get your free
            consultation and quote today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-8">
            <Button size="lg" asChild className="bg-white text-amber-600 hover:bg-slate-50 text-lg px-8">
              <Link href="/contact">
                Get Free Kitchen Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8 bg-transparent"
            >
              <a href="tel:+27676014490">
                <Phone className="mr-2 w-5 h-5" />
                Call: 067 601 4490
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-2xl font-bold">47+</div>
              <div className="text-amber-100 text-sm">Kitchen Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold">5.0</div>
              <div className="text-amber-100 text-sm">Star Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24</div>
              <div className="text-amber-100 text-sm">Month Warranty</div>
            </div>
            <div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-amber-100 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
