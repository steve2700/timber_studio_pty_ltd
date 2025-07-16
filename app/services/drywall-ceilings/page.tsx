import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Phone, Star, Square, Grid3X3, Paintbrush } from "lucide-react"

export const metadata: Metadata = {
  title: "Drywall & Ceiling Installation Johannesburg | Professional Ceiling Contractors",
  description:
    "Professional drywall and ceiling installation in Johannesburg, Sandton, Randburg. Suspended ceilings, gypsum board, ceiling repairs, and custom ceiling designs. Expert contractors across Gauteng.",
  keywords:
    "drywall installation Johannesburg, ceiling installation Sandton, suspended ceilings Randburg, gypsum board Midrand, ceiling contractors Fourways, ceiling repairs Boksburg, drywall contractors Gauteng, ceiling renovation Johannesburg",
}

export default function DrywallCeilingsPage() {
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
                <span className="text-slate-600 font-medium">5-Star Drywall & Ceiling Specialists</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Professional <span className="text-amber-600">Drywall & Ceiling</span> Installation
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Expert drywall and ceiling installation services across Johannesburg and Gauteng. Suspended ceilings,
                gypsum board installation, ceiling repairs, and custom ceiling designs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 flex-wrap">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <Link href="/contact">
                    Get Free Ceiling Quote
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
                src="/drywall-contractor.jpg?height=600&width=800"
                alt="Professional drywall and ceiling installation in Johannesburg"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Drywall & Ceiling Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Complete drywall and ceiling solutions for residential and commercial properties across Gauteng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Square className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Drywall Installation</h3>
                <p className="text-slate-600 mb-4 text-center">
                  Professional drywall installation for interior walls, partitions, and room divisions.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Gypsum board installation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Wall partitioning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Taping & finishing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Texture application
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Grid3X3 className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Suspended Ceilings</h3>
                <p className="text-slate-600 mb-4 text-center">
                  Modern suspended ceiling systems for offices, retail spaces, and residential areas.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Grid ceiling systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Acoustic ceiling tiles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    LED lighting integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Access panels
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Paintbrush className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Ceiling Repairs & Renovation</h3>
                <p className="text-slate-600 mb-4 text-center">
                  Ceiling repairs, renovations, and custom ceiling designs for any space.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Crack repairs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Water damage restoration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Ceiling painting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom designs
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Applications & Spaces</h2>
            <p className="text-xl text-slate-600">
              Professional drywall and ceiling solutions for various applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-slate-800 mb-2">Residential</h3>
                <p className="text-sm text-slate-600">Homes, apartments, and residential renovations</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-slate-800 mb-2">Commercial</h3>
                <p className="text-sm text-slate-600">Offices, retail spaces, and commercial buildings</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-slate-800 mb-2">Industrial</h3>
                <p className="text-sm text-slate-600">Warehouses, factories, and industrial facilities</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-slate-800 mb-2">Healthcare</h3>
                <p className="text-sm text-slate-600">Clinics, hospitals, and medical facilities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                Why Choose Our Drywall & Ceiling Services?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Professional installation with quality materials and expert craftsmanship across all Gauteng areas.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Quality Materials</h3>
                    <p className="text-slate-600">Premium gypsum board and ceiling materials from trusted suppliers.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Expert Installation</h3>
                    <p className="text-slate-600">
                      Professional installation by experienced drywall and ceiling specialists.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Clean Finish</h3>
                    <p className="text-slate-600">
                      Smooth, professional finish ready for painting or final decoration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Fast Turnaround</h3>
                    <p className="text-slate-600">
                      Efficient installation process with minimal disruption to your space.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/drywalling-installers.webp?height=500&width=600"
                alt="Professional ceiling installation showing quality workmanship"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready for Professional Ceiling Work?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us for expert drywall and ceiling installation across Johannesburg and Gauteng. Quality workmanship
            with professional results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-amber-600 hover:bg-slate-50 text-lg px-8">
              <Link href="/contact">
                Get Free Quote
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
                Call: 067 601 4490
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
