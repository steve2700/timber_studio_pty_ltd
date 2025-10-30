import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Phone, Mail, MapPin, Star, Award, Shield, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Suspended Ceilings Johannesburg | Professional Ceiling Installation 2025",
  description:
    "Expert suspended ceiling installation in Johannesburg. Professional drop ceiling contractors offering acoustic tiles, grid systems, and modern ceiling solutions. Free quotes available.",
  keywords:
    "suspended ceilings Johannesburg, drop ceilings Johannesburg, ceiling installation Johannesburg, acoustic ceilings Johannesburg, ceiling contractors Johannesburg, false ceilings Johannesburg",
  openGraph: {
    title: "Suspended Ceilings Johannesburg | Professional Ceiling Installation 2025",
    description:
      "Expert suspended ceiling installation in Johannesburg. Professional contractors offering acoustic tiles, grid systems, and modern ceiling solutions.",
    url: "https://granitecarpentry.co.za/suspended-ceilings-johannesburg",
    siteName: "Granite Carpentry & Joinery Experts",
    locale: "en_ZA",
    type: "website",
  },
}

export default function SuspendedCeilingsJohannesburg() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Suspended Ceiling Installation in Johannesburg
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 text-balance">
              Transform Your Commercial or Residential Space with Expert Drop Ceiling Solutions - Acoustic Performance,
              Modern Design, Professional Installation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="tel:+27123456789">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Free Consultation
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                <Link href="/contact">Get Detailed Quote</Link>
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
              <p className="font-semibold">20+ Years Experience</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-3 text-amber-600" />
              <p className="font-semibold">Certified Installers</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 mx-auto mb-3 text-amber-600" />
              <p className="font-semibold">Premium Materials</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 mx-auto mb-3 text-amber-600" />
              <p className="font-semibold">Fast Installation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Expert Suspended Ceiling Installation Throughout Johannesburg</h2>

            <p className="text-lg mb-6 leading-relaxed">
              When it comes to suspended ceiling installation in Johannesburg, you need contractors who understand both
              the technical requirements and aesthetic possibilities of modern drop ceiling systems. Whether you're
              renovating a commercial office in Sandton, upgrading a retail space in Rosebank, transforming an
              industrial facility in Germiston, or adding a suspended ceiling to your residential property, our expert
              team delivers professional results that enhance both functionality and visual appeal.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              Johannesburg's diverse commercial and residential landscape demands ceiling solutions that can adapt to
              any environment. From the corporate offices of Sandton's business district to the creative spaces of
              Braamfontein, from retail developments in Fourways to residential properties throughout the northern
              suburbs, we provide suspended ceiling installations that meet the highest standards of quality,
              performance, and design. Our experience spans across all of Johannesburg's major business hubs and
              residential areas, ensuring we understand the unique requirements of your specific location.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">
              Comprehensive Suspended Ceiling Solutions for Johannesburg
            </h2>

            <p className="text-lg mb-6 leading-relaxed">
              Our suspended ceiling services cover every aspect of drop ceiling installation, from initial design
              consultation to final finishing touches. We specialize in both commercial and residential applications,
              offering a wide range of ceiling tile options, grid systems, and integrated solutions that incorporate
              lighting, HVAC, and other building systems. Whether you need acoustic performance for a conference room,
              moisture resistance for a medical facility, or aesthetic appeal for a retail showroom, we have the
              expertise and materials to deliver exceptional results.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="h-6 w-6 mr-2 text-amber-600" />
                    Commercial Suspended Ceilings
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Transform your Johannesburg commercial space with professional suspended ceiling installation. We
                    provide complete ceiling solutions for offices, retail stores, restaurants, medical facilities, and
                    industrial buildings. Our commercial ceiling systems offer superior acoustic performance, easy
                    access to building services, and professional aesthetics that enhance your business environment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="h-6 w-6 mr-2 text-amber-600" />
                    Acoustic Ceiling Tiles
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Improve sound quality and reduce noise transmission with specialized acoustic ceiling tiles. Perfect
                    for conference rooms, call centers, educational facilities, and open-plan offices throughout
                    Johannesburg. Our acoustic solutions significantly improve speech intelligibility and create more
                    comfortable working environments by controlling reverberation and sound transmission.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="h-6 w-6 mr-2 text-amber-600" />
                    Grid System Installation
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We install high-quality suspended ceiling grid systems that provide reliable support for ceiling
                    tiles while allowing easy access to plenum spaces. Our grid installations are precisely leveled and
                    aligned, ensuring professional appearance and long-term performance. We work with all major grid
                    system manufacturers to provide the best solution for your project.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="h-6 w-6 mr-2 text-amber-600" />
                    Residential Drop Ceilings
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Enhance your Johannesburg home with residential suspended ceiling installation. Perfect for
                    basements, home theaters, home offices, and entertainment rooms. Our residential ceiling solutions
                    provide excellent sound control, hide unsightly pipes and wiring, and create finished spaces that
                    add value to your property while maintaining easy access to utilities.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Benefits of Suspended Ceilings in Johannesburg Properties</h2>

            <p className="text-lg mb-6 leading-relaxed">
              Suspended ceiling systems offer numerous advantages for both commercial and residential properties in
              Johannesburg. Understanding these benefits helps you make informed decisions about your ceiling renovation
              or new construction project. Our team provides expert guidance to help you select the suspended ceiling
              solution that best meets your specific needs, budget, and aesthetic preferences.
            </p>

            <div className="bg-slate-50 p-8 rounded-lg my-8">
              <h3 className="text-2xl font-semibold mb-6">Key Advantages of Suspended Ceiling Systems</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Superior Acoustic Performance</h4>
                    <p className="text-slate-600">
                      Suspended ceilings with acoustic tiles dramatically improve sound quality by absorbing sound waves
                      and reducing noise transmission between floors. This creates more comfortable, productive
                      environments in offices, schools, healthcare facilities, and residential spaces throughout
                      Johannesburg.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Easy Access to Building Services</h4>
                    <p className="text-slate-600">
                      Drop ceilings provide convenient access to electrical wiring, plumbing, HVAC systems, and data
                      cables hidden in the plenum space above. This makes maintenance, repairs, and future modifications
                      much easier and more cost-effective compared to traditional ceiling systems.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Improved Energy Efficiency</h4>
                    <p className="text-slate-600">
                      Suspended ceilings reduce the volume of space that needs to be heated or cooled, leading to
                      significant energy savings. The insulating properties of ceiling tiles also help maintain
                      comfortable temperatures while reducing HVAC costs—an important consideration for Johannesburg's
                      variable climate.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Fire Safety and Compliance</h4>
                    <p className="text-slate-600">
                      Many suspended ceiling tiles offer excellent fire resistance ratings, helping your Johannesburg
                      property meet building code requirements. Fire-rated ceiling systems can slow the spread of fire
                      and smoke, providing crucial extra time for evacuation and emergency response.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Aesthetic Versatility</h4>
                    <p className="text-slate-600">
                      Modern suspended ceiling systems offer extensive design options, from classic white tiles to
                      contemporary metal panels, wood-look finishes, and custom colors. This versatility allows you to
                      create the perfect aesthetic for any Johannesburg commercial or residential space.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Cost-Effective Installation</h4>
                    <p className="text-slate-600">
                      Compared to traditional plastered ceilings, suspended ceiling systems are faster and more
                      economical to install. The modular nature of drop ceilings also means damaged tiles can be easily
                      replaced without affecting the entire ceiling, reducing long-term maintenance costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Our Suspended Ceiling Installation Process</h2>

            <p className="text-lg mb-6 leading-relaxed">
              We follow a systematic, professional approach to every suspended ceiling installation in Johannesburg. Our
              process ensures accurate measurements, proper installation, and superior results that meet or exceed
              industry standards. From initial consultation to final inspection, we maintain clear communication and
              deliver projects on time and within budget.
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                <h3 className="text-xl font-semibold mb-3">1. Site Assessment & Consultation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our team visits your Johannesburg property to assess the existing ceiling structure, measure the
                  space, evaluate building services in the plenum area, and discuss your specific requirements. We
                  provide expert recommendations on ceiling tile options, grid systems, and integrated solutions that
                  best suit your needs and budget.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                <h3 className="text-xl font-semibold mb-3">2. Detailed Proposal & Design</h3>
                <p className="text-slate-600 leading-relaxed">
                  We prepare a comprehensive proposal that includes detailed specifications, material selections,
                  installation timeline, and transparent pricing. Our proposals clearly outline all aspects of the
                  project, ensuring you understand exactly what to expect. We can also provide design visualizations to
                  help you envision the finished result.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                <h3 className="text-xl font-semibold mb-3">3. Professional Installation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our certified installers arrive with all necessary materials and equipment. We install the suspension
                  system, ensure perfect leveling, integrate lighting and HVAC components, and install ceiling tiles
                  with precision. Throughout the installation, we maintain a clean, organized work site and minimize
                  disruption to your operations or daily routine.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                <h3 className="text-xl font-semibold mb-3">4. Quality Inspection & Finishing</h3>
                <p className="text-slate-600 leading-relaxed">
                  Every installation undergoes rigorous quality inspection to ensure proper alignment, secure
                  attachment, and professional appearance. We verify that all integrated systems function correctly and
                  that the ceiling meets all relevant building codes and safety standards. Any necessary adjustments are
                  made to ensure perfect results.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                <h3 className="text-xl font-semibold mb-3">5. Final Walkthrough & Documentation</h3>
                <p className="text-slate-600 leading-relaxed">
                  We conduct a comprehensive walkthrough with you to ensure complete satisfaction with the installation.
                  We provide documentation including warranty information, maintenance guidelines, and details about the
                  materials used. Our work is backed by comprehensive warranties for your peace of mind.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Suspended Ceiling Options for Johannesburg Properties</h2>

            <p className="text-lg mb-6 leading-relaxed">
              We offer an extensive range of suspended ceiling products to suit any application, budget, and aesthetic
              preference. Our partnerships with leading manufacturers ensure access to the latest ceiling tile
              technologies and design options. Whether you need basic acoustic tiles for a warehouse or premium designer
              tiles for a corporate boardroom, we provide solutions that meet your specific requirements.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Acoustic Ceiling Tiles</h3>
                  <p className="text-slate-600 mb-4">
                    High-performance sound absorption for offices, schools, and commercial spaces. Available in various
                    NRC ratings and designs.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Mineral fiber tiles</li>
                    <li>• Fiberglass tiles</li>
                    <li>• Perforated metal tiles</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Moisture-Resistant Tiles</h3>
                  <p className="text-slate-600 mb-4">
                    Specialized tiles for high-humidity environments like kitchens, bathrooms, and medical facilities.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Vinyl-faced tiles</li>
                    <li>• Mylar-coated tiles</li>
                    <li>• Washable surfaces</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Designer Ceiling Tiles</h3>
                  <p className="text-slate-600 mb-4">
                    Premium aesthetic options for high-end commercial and residential applications throughout
                    Johannesburg.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Wood-look finishes</li>
                    <li>• Metal panels</li>
                    <li>• Custom colors</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Serving All of Johannesburg and Surrounding Areas</h2>

            <p className="text-lg mb-6 leading-relaxed">
              Our suspended ceiling installation services extend throughout Johannesburg and the greater Gauteng region.
              From the corporate offices of{" "}
              <Link href="/drywall-sandton" className="text-amber-600 hover:text-amber-700 font-medium">
                Sandton
              </Link>{" "}
              to the industrial facilities of Germiston, from retail developments in{" "}
              <Link href="/ceiling-repairs-randburg" className="text-amber-600 hover:text-amber-700 font-medium">
                Randburg
              </Link>{" "}
              to residential properties in{" "}
              <Link href="/drywall-rosebank" className="text-amber-600 hover:text-amber-700 font-medium">
                Rosebank
              </Link>
              , we provide professional suspended ceiling services to all areas. Our mobile teams can quickly reach any
              location in Johannesburg, ensuring prompt service and efficient project completion.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">Frequently Asked Questions About Suspended Ceilings</h2>

            <div className="space-y-6 my-8">
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-3">
                  How much does suspended ceiling installation cost in Johannesburg?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Suspended ceiling costs vary based on the size of the area, ceiling height, tile selection, and
                  complexity of the installation. Basic acoustic tile systems typically range from R150-R300 per square
                  meter, while premium designer systems can cost R400-R800 per square meter. We provide detailed,
                  transparent quotes that include all materials and labor. Contact us for a free assessment and
                  customized quote for your Johannesburg project.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-3">How long does suspended ceiling installation take?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Installation timelines depend on project size and complexity. A typical office space of 100-200 square
                  meters can usually be completed in 3-5 working days. Larger commercial projects may require 1-2 weeks.
                  We work efficiently to minimize disruption to your business operations and provide accurate timelines
                  during our initial consultation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-3">
                  Can suspended ceilings be installed in residential properties?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Absolutely. Suspended ceilings are excellent for residential applications, particularly in basements,
                  home theaters, home offices, and entertainment rooms. They provide superior sound control, hide
                  unsightly pipes and wiring, and create finished spaces while maintaining easy access to utilities. We
                  offer residential-friendly tile options that complement home interiors throughout Johannesburg.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-3">What maintenance do suspended ceilings require?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Suspended ceilings require minimal maintenance. Regular dusting or vacuuming keeps tiles clean, and
                  most tiles can be wiped with a damp cloth if needed. Damaged tiles can be easily replaced without
                  affecting the entire ceiling. We recommend periodic inspection of the grid system and tiles to ensure
                  everything remains secure and in good condition.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-3">Do suspended ceilings meet building code requirements?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Yes, when properly installed with appropriate materials, suspended ceilings meet all relevant South
                  African building codes and safety standards. We use fire-rated tiles and grid systems where required
                  and ensure all installations comply with local regulations. Our team stays current with building code
                  requirements throughout Johannesburg and Gauteng.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Johannesburg Property with Suspended Ceilings?
            </h2>
            <p className="text-xl mb-8 text-amber-50">
              Contact us today for a free consultation and detailed quote. Our expert team is ready to provide
              professional suspended ceiling solutions that enhance your space's functionality, acoustics, and
              aesthetics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-amber-600 hover:bg-slate-100">
                <Link href="tel:+27123456789">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 012 345 6789
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-amber-700/50 hover:bg-amber-700 text-white border-white/30"
              >
                <Link href="/contact">Request Free Consultation</Link>
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
              <p className="text-slate-600">012 345 6789</p>
            </div>
            <div>
              <Mail className="h-8 w-8 mx-auto mb-3 text-amber-600" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-slate-600">info@granitecarpentry.co.za</p>
            </div>
            <div>
              <MapPin className="h-8 w-8 mx-auto mb-3 text-amber-600" />
              <h3 className="font-semibold mb-2">Service Area</h3>
              <p className="text-slate-600">All of Johannesburg & Gauteng</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
