import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Phone, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Kitchen Renovations & Joinery Johannesburg | Professional Carpenter",
  description:
    "Expert kitchen renovations and joinery services in Johannesburg South, Randburg, Kempton Park. Custom cabinetry, countertops, and complete kitchen makeovers. Free quotes from 5-star rated carpenter.",
  keywords:
    "kitchen renovations Johannesburg, joinery Kempton Park, kitchen cabinets Johannesburg South, carpenter in Randburg, custom kitchen Johannesburg",
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
                <div className="flex text-amber-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-slate-600 font-medium">5-Star Kitchen Specialists</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Professional <span className="text-amber-600">Kitchen Renovations</span> & Joinery
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Transform your kitchen with our expert renovation and joinery services. Custom cabinetry, countertops,
                and complete makeovers across Johannesburg and Gauteng.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 flex-wrap">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <Link href="/contact">
                    Get Free Kitchen Quote
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
                src="/placeholder.svg?height=600&width=800"
                alt="Modern kitchen renovation with custom cabinetry by Johannesburg carpenter"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Complete Kitchen Renovation Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From design to installation, we handle every aspect of your kitchen renovation with professional
              craftsmanship and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Custom Kitchen Cabinets</h3>
                <p className="text-slate-600 mb-4">
                  Bespoke kitchen cabinetry designed to maximize storage and complement your style. Quality materials
                  and expert craftsmanship.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom design & measurements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Quality materials
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Professional installation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Countertop Installation</h3>
                <p className="text-slate-600 mb-4">
                  Premium countertop installation including granite, quartz, and other stone surfaces. Professional
                  templating and fitting.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Granite & quartz options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Precise templating
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Seamless installation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Kitchen Islands & Pantries</h3>
                <p className="text-slate-600 mb-4">
                  Custom kitchen islands and pantry solutions to enhance functionality and add value to your kitchen
                  space.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom island design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Walk-in pantries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Storage optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Our Kitchen Renovation Process</h2>
            <p className="text-xl text-slate-600">Professional, streamlined process from consultation to completion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Consultation</h3>
              <p className="text-slate-600">Free consultation to discuss your vision and requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Design & Quote</h3>
              <p className="text-slate-600">Custom design with detailed quote and timeline</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Construction</h3>
              <p className="text-slate-600">Professional construction and installation work</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Completion</h3>
              <p className="text-slate-600">Final inspection and handover of your new kitchen</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready for Your Dream Kitchen?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Professional kitchen renovations across Johannesburg
            South, Randburg, and Kempton Park.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8"
            >
              <Link href="/portfolio">View Our Kitchen Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
