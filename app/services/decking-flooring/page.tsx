import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Phone, Star, TreePine, Home, Layers } from "lucide-react"

export const metadata: Metadata = {
  title: "Decking & Flooring Installation Johannesburg | Professional Wood & Composite Decking",
  description:
    "Professional decking and flooring installation in Johannesburg, Sandton, Randburg, Midrand. Wood decking, composite decking, laminate flooring, and vinyl flooring. Expert installation with 5-star service.",
  keywords:
    "decking installation Johannesburg, flooring installation Sandton, wood decking Randburg, composite decking Midrand, laminate flooring Fourways, vinyl flooring Boksburg, deck builder Johannesburg, flooring contractor Gauteng",
}

export default function DeckingFlooringPage() {
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
                <span className="text-slate-600 font-medium">5-Star Decking & Flooring Specialists</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Professional <span className="text-amber-600">Decking & Flooring</span> Installation
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Transform your outdoor and indoor spaces with our expert decking and flooring installation services.
                Wood decking, composite decking, laminate, and vinyl flooring across Johannesburg and Gauteng.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 flex-wrap">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <Link href="/contact">
                    Get Free Decking Quote
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
                src="/decking-flooring.jpg?height=600&width=800"
                alt="Professional decking and flooring installation in Johannesburg"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Decking & Flooring Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From outdoor decking to indoor flooring, we provide complete installation services with premium materials
              and expert craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Wood Decking</h3>
                <p className="text-slate-600 mb-4 text-center">
                  Premium hardwood decking installation for outdoor entertainment areas, pool decks, and patios.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Balau & Saligna hardwood
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Treated pine options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom deck designs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Railings & balustrades
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Composite Decking</h3>
                <p className="text-slate-600 mb-4 text-center">
                  Low-maintenance composite decking that looks like wood but requires minimal upkeep.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Weather resistant
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    No staining required
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Slip-resistant surface
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Long-term warranty
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Indoor Flooring</h3>
                <p className="text-slate-600 mb-4 text-center">
                  Professional installation of laminate, vinyl, and engineered wood flooring for all indoor spaces.
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Laminate flooring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Luxury vinyl planks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Engineered hardwood
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Underfloor preparation
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Our Installation Process</h2>
            <p className="text-xl text-slate-600">Professional installation process ensuring quality and durability</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Site Assessment</h3>
              <p className="text-slate-600">Detailed site inspection and measurements for accurate planning</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Design & Quote</h3>
              <p className="text-slate-600">Custom design with material selection and detailed pricing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Preparation</h3>
              <p className="text-slate-600">Site preparation and foundation work for optimal installation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Installation</h3>
              <p className="text-slate-600">Professional installation with quality control and finishing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                Why Choose Our Decking & Flooring Services?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Professional installation with premium materials and expert craftsmanship across all Gauteng areas.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Premium Materials</h3>
                    <p className="text-slate-600">
                      Only the highest quality wood, composite, and flooring materials from trusted suppliers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Expert Installation</h3>
                    <p className="text-slate-600">
                      Professional installation by experienced craftsmen with attention to detail.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Weather Protection</h3>
                    <p className="text-slate-600">
                      Proper sealing and treatment for Johannesburg's climate conditions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Warranty Included</h3>
                    <p className="text-slate-600">Comprehensive warranty on both materials and workmanship.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/beautiful-decking.jpg?"
                alt="Beautiful deck installation showing quality craftsmanship"
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Transform Your Space Today</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ready for beautiful decking or flooring? Contact us for a free quote and professional installation across
            Johannesburg and Gauteng.
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
