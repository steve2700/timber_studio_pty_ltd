import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Phone, Mail, MapPin, Star, Award, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Drywall Installation in Rosebank | Professional Drywalling Services 2025",
  description:
    "Expert drywall installation and repair services in Rosebank. Professional drywalling contractors offering quality workmanship, competitive pricing, and guaranteed results. Call now for a free quote.",
  keywords:
    "drywall Rosebank, drywall installation Rosebank, drywalling contractors Rosebank, drywall repair Rosebank, partition walls Rosebank, drywall services Rosebank",
  openGraph: {
    title: "Drywall Installation in Rosebank | Professional Drywalling Services 2025",
    description:
      "Expert drywall installation and repair services in Rosebank. Professional drywalling contractors offering quality workmanship and competitive pricing.",
    url: "https://granitecarpentry.co.za/drywall-rosebank",
    siteName: "Granite Carpentry & Joinery Experts",
    locale: "en_ZA",
    type: "website",
  },
}

export default function DrywallRosebank() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Drywall Installation in Rosebank
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 text-balance">
              Transform Your Rosebank Property with Expert Drywalling Services - Quality Workmanship, Competitive
              Pricing, Guaranteed Results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="tel:+27676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now for Free Quote
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                <Link href="/contact">Get Written Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-3 text-amber-600" />
              <p className="font-semibold">15+ Years Experience</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-3 text-amber-600" />
              <p className="font-semibold">Fully Insured</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 mx-auto mb-3 text-amber-600" />
              <p className="font-semibold">5-Star Rated</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-3 text-amber-600" />
              <p className="font-semibold">500+ Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Expert Drywall Installation Services in Rosebank</h2>

            <p className="text-lg mb-6 leading-relaxed">
              When it comes to drywall installation in Rosebank, you need a team that understands the unique
              architectural character of this prestigious Johannesburg suburb. Whether you're renovating a classic
              Rosebank home near the Rosebank Mall, updating a modern apartment in The Zone, or transforming commercial
              space in the bustling Rosebank business district, our professional drywalling contractors deliver
              exceptional results that stand the test of time.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              Rosebank's diverse property landscape—from heritage homes in the leafy residential streets to contemporary
              office spaces and retail developments—requires drywalling expertise that can adapt to any architectural
              style. Our team has extensive experience working throughout Rosebank, from Tyrwhitt Avenue to Cradock
              Avenue, and we understand the specific building codes and aesthetic standards that make this area special.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">Comprehensive Drywall Services for Rosebank Properties</h2>

            <p className="text-lg mb-6 leading-relaxed">
              Our drywall installation services in Rosebank cover every aspect of interior wall construction and
              finishing. We specialize in both residential and commercial projects, offering solutions that enhance your
              property's functionality, aesthetics, and value. Whether you're creating new office spaces in the Rosebank
              business hub, adding partition walls to a residential property, or renovating retail space near the
              Gautrain station, we have the expertise to deliver outstanding results.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="h-6 w-6 mr-2 text-amber-600" />
                    Residential Drywall Installation
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Transform your Rosebank home with professional drywall installation. We create smooth, perfectly
                    finished walls and ceilings that provide the ideal canvas for your interior design vision. From
                    adding new rooms to your family home to creating modern open-plan living spaces, our residential
                    drywalling services enhance both functionality and aesthetics.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="h-6 w-6 mr-2 text-amber-600" />
                    Commercial Drywall Solutions
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Rosebank's thriving business district demands professional drywalling that meets commercial
                    standards. We provide efficient, high-quality drywall installation for offices, retail spaces,
                    restaurants, and commercial buildings throughout Rosebank. Our team works efficiently to minimize
                    disruption to your business operations while delivering superior results.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="h-6 w-6 mr-2 text-amber-600" />
                    Partition Wall Construction
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Create flexible, functional spaces with our partition wall installation services. Perfect for
                    dividing large rooms, creating home offices, or reconfiguring commercial spaces in Rosebank. Our
                    partition walls offer excellent sound insulation and can be customized to include doors, windows,
                    and other features to suit your specific needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="h-6 w-6 mr-2 text-amber-600" />
                    Drywall Repair & Restoration
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    From minor cracks and holes to extensive water damage repair, our drywall restoration services
                    return your Rosebank property to pristine condition. We match existing textures and finishes
                    perfectly, ensuring seamless repairs that blend invisibly with surrounding walls. Our repair work is
                    backed by our quality guarantee.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Why Choose Our Drywall Services in Rosebank?</h2>

            <p className="text-lg mb-6 leading-relaxed">
              Selecting the right drywalling contractor for your Rosebank project is crucial for achieving professional
              results that last. Our team brings together technical expertise, quality materials, and a commitment to
              customer satisfaction that sets us apart from other drywall contractors in the area. We understand that
              your property is a significant investment, and we treat every project with the care and attention it
              deserves.
            </p>

            <div className="bg-slate-50 p-8 rounded-lg my-8">
              <h3 className="text-2xl font-semibold mb-6">Our Rosebank Drywall Installation Process</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Free Consultation & Site Assessment</h4>
                    <p className="text-slate-600">
                      We visit your Rosebank property to assess the project scope, discuss your requirements, and
                      provide expert recommendations tailored to your specific needs and budget.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Detailed Written Quote</h4>
                    <p className="text-slate-600">
                      Receive a comprehensive, transparent quote that breaks down all costs, materials, and timelines.
                      No hidden fees, no surprises—just honest pricing for quality work.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Professional Installation</h4>
                    <p className="text-slate-600">
                      Our experienced team arrives on time with all necessary materials and equipment. We work
                      efficiently while maintaining the highest quality standards, keeping your property clean and
                      organized throughout the project.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quality Finishing & Inspection</h4>
                    <p className="text-slate-600">
                      We apply professional finishing techniques to ensure smooth, flawless surfaces ready for painting
                      or wallpapering. Every project undergoes rigorous quality inspection before completion.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Final Walkthrough & Guarantee</h4>
                    <p className="text-slate-600">
                      We conduct a final walkthrough with you to ensure complete satisfaction. All our work is backed by
                      our comprehensive workmanship guarantee for your peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Drywall Installation Pricing in Rosebank</h2>

            <p className="text-lg mb-6 leading-relaxed">
              We believe in transparent, competitive pricing for all our drywall services in Rosebank. While every
              project is unique and requires a customized quote, we provide clear pricing structures that help you
              understand the investment required for your drywalling project. Our quotes include all materials, labor,
              and finishing work, with no hidden costs or surprise charges.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              Factors that influence drywall installation costs include the size of the area, ceiling height, complexity
              of the design, type of drywall required, and finishing specifications. We offer competitive rates that
              reflect our commitment to quality workmanship while providing excellent value for money. Contact us today
              for a free, no-obligation quote tailored to your specific Rosebank project.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">Serving All of Rosebank and Surrounding Areas</h2>

            <p className="text-lg mb-6 leading-relaxed">
              Our drywall installation services extend throughout Rosebank and neighboring suburbs. Whether your
              property is located near the Rosebank Mall, in the residential areas around Keyes Avenue, close to the
              Gautrain station, or in the commercial district along Oxford Road, we provide prompt, professional service
              to all Rosebank locations. We also serve nearby areas including{" "}
              <Link href="/drywall-sandton" className="text-amber-600 hover:text-amber-700 font-medium">
                Sandton
              </Link>
              , Parktown, Melrose, and Hyde Park.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              Our familiarity with Rosebank's diverse architectural styles—from classic suburban homes to modern
              high-rise apartments and commercial buildings—ensures we can adapt our drywalling techniques to suit any
              property type. We understand local building regulations and work efficiently to complete projects on time
              and within budget.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">Additional Drywall Services We Offer</h2>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Soundproofing Solutions</h3>
                  <p className="text-slate-600">
                    Enhance privacy and reduce noise with specialized soundproof drywall installation, perfect for
                    Rosebank homes and offices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Moisture-Resistant Drywall</h3>
                  <p className="text-slate-600">
                    Protect bathrooms, kitchens, and other moisture-prone areas with specialized moisture-resistant
                    drywall products.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Textured Finishes</h3>
                  <p className="text-slate-600">
                    Add character and style with custom textured drywall finishes that complement your interior design
                    aesthetic.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Frequently Asked Questions About Drywall in Rosebank</h2>

            <div className="space-y-6 my-8">
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-3">How long does drywall installation take in Rosebank?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Installation timelines vary based on project size and complexity. A standard room typically takes 2-3
                  days including installation, taping, mudding, and finishing. Larger projects or commercial
                  installations may require 1-2 weeks. We provide accurate timelines during our initial consultation and
                  work efficiently to meet agreed deadlines.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-3">
                  What's the difference between drywall and other wall materials?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Drywall (also called gypsum board or plasterboard) offers numerous advantages over traditional
                  plastering or brick walls. It's faster to install, more cost-effective, provides excellent fire
                  resistance, and creates smooth, professional finishes. Drywall is also easier to repair and modify,
                  making it ideal for both residential and commercial applications in Rosebank.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-3">Can you match existing drywall textures for repairs?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Yes, our experienced team can match virtually any existing drywall texture or finish. Whether your
                  Rosebank property has smooth walls, orange peel texture, knockdown finish, or other specialized
                  textures, we ensure repairs blend seamlessly with surrounding areas. We bring samples to match your
                  existing finish perfectly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-3">
                  Do you handle drywall installation for commercial properties?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Absolutely. We have extensive experience with commercial drywall projects throughout Rosebank's
                  business district. From office fit-outs to retail renovations and restaurant construction, we provide
                  professional drywalling services that meet commercial building codes and standards. We work
                  efficiently to minimize disruption to your business operations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-3">What areas around Rosebank do you serve?</h3>
                <p className="text-slate-600 leading-relaxed">
                  In addition to Rosebank, we provide drywall services throughout northern Johannesburg including{" "}
                  <Link href="/drywall-sandton" className="text-amber-600 hover:text-amber-700">
                    Sandton
                  </Link>
                  ,{" "}
                  <Link href="/ceiling-repairs-randburg" className="text-amber-600 hover:text-amber-700">
                    Randburg
                  </Link>
                  , Parktown, Melrose, Hyde Park, and surrounding suburbs. Our mobile team can quickly reach any
                  location in the greater Johannesburg area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Rosebank Property?</h2>
            <p className="text-xl mb-8 text-amber-50">
              Get a free, no-obligation quote for professional drywall installation in Rosebank. Our expert team is
              ready to bring your vision to life with quality workmanship and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-amber-600 hover:bg-slate-100">
                <Link href="tel:+27676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 0676014490
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-amber-700/50 hover:bg-amber-700 text-white border-white/30"
              >
                <Link href="/contact">Request Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Phone className="h-8 w-8 mx-auto mb-3 text-amber-600" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-slate-600">0676014490</p>
            </div>
            <div>
              <Mail className="h-8 w-8 mx-auto mb-3 text-amber-600" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-slate-600">info@granitecarpentry.co.za</p>
            </div>
            <div>
              <MapPin className="h-8 w-8 mx-auto mb-3 text-amber-600" />
              <h3 className="font-semibold mb-2">Service Area</h3>
              <p className="text-slate-600">Rosebank & Surrounding Areas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
