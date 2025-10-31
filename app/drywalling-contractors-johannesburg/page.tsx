import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Phone, Mail, MapPin, Star, Award, Shield, Users, Hammer } from "lucide-react"

export const metadata: Metadata = {
  title: "Drywalling Contractors Johannesburg | Expert Drywall Services 2025",
  description:
    "Professional drywalling contractors in Johannesburg. Expert drywall installation, repair, and finishing services for residential and commercial properties. Free quotes available.",
  keywords:
    "drywalling contractors Johannesburg, drywall contractors Johannesburg, drywall installation Johannesburg, drywall services Johannesburg, professional drywalling Johannesburg",
  openGraph: {
    title: "Drywalling Contractors Johannesburg | Expert Drywall Services 2025",
    description:
      "Professional drywalling contractors in Johannesburg offering expert installation, repair, and finishing services for all property types.",
    url: "https://granitecarpentry.co.za/drywalling-contractors-johannesburg",
    siteName: "Granite Carpentry & Joinery Experts",
    locale: "en_ZA",
    type: "website",
  },
}

export default function DrywallContractorsJohannesburg() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Drywalling Contractors in Johannesburg
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 text-balance">
              Expert Drywall Installation, Repair & Finishing Services - Trusted by Johannesburg Homeowners and
              Businesses Since 2005
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="tel:+27676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Immediate Service
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                <Link href="/contact">Request Free Quote</Link>
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
              <p className="font-semibold">Licensed & Insured</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 mx-auto mb-3 text-amber-600" />
              <p className="font-semibold">1000+ Projects</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-3 text-amber-600" />
              <p className="font-semibold">Expert Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Johannesburg's Most Trusted Drywalling Contractors</h2>

            <p className="text-lg mb-6 leading-relaxed">
              When you need professional drywalling contractors in Johannesburg, you want a team that combines technical
              expertise, quality craftsmanship, and reliable service. Since 2005, we've been Johannesburg's go-to
              drywalling specialists, serving residential and commercial clients throughout the greater Johannesburg
              area. From Sandton's luxury homes to Soweto's growing developments, from corporate offices in Rosebank to
              industrial facilities in Germiston, our experienced team delivers exceptional drywall solutions that
              exceed expectations.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              As Johannesburg continues to grow and evolve, the demand for skilled drywalling contractors has never been
              higher. Whether you're building a new home, renovating an existing property, converting commercial space,
              or repairing damaged walls, choosing the right drywalling contractor is crucial for achieving professional
              results that last. Our team brings together decades of combined experience, comprehensive training, and a
              commitment to quality that has made us one of Johannesburg's most respected drywalling companies.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">Complete Drywalling Services Throughout Johannesburg</h2>

            <p className="text-lg mb-6 leading-relaxed">
              Our comprehensive drywalling services cover every aspect of interior wall and ceiling construction. We
              handle projects of all sizes and complexities, from single-room additions to complete building fit-outs.
              Our team has the skills, equipment, and experience to tackle any drywalling challenge, delivering results
              that meet the highest standards of quality and professionalism. We serve all areas of Johannesburg
              including Sandton, Randburg, Rosebank, Fourways, Midrand, Centurion, and surrounding suburbs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="h-6 w-6 mr-2 text-amber-600" />
                    New Drywall Installation
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Professional drywall installation for new construction and renovation projects throughout
                    Johannesburg. We install walls, ceilings, and partition systems with precision and efficiency. Our
                    installation services include proper framing, insulation integration, and flawless finishing that
                    creates the perfect foundation for your interior design vision.
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
                    Expert repair services for damaged drywall throughout Johannesburg properties. From small holes and
                    cracks to extensive water damage and structural issues, we restore walls and ceilings to like-new
                    condition. Our repair work is virtually invisible, matching existing textures and finishes perfectly
                    for seamless results.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="h-6 w-6 mr-2 text-amber-600" />
                    Commercial Drywalling
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Specialized commercial drywalling services for Johannesburg businesses. We handle office fit-outs,
                    retail renovations, restaurant construction, and industrial projects with efficiency and
                    professionalism. Our commercial team understands the importance of meeting deadlines and minimizing
                    disruption to your business operations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="h-6 w-6 mr-2 text-amber-600" />
                    Finishing & Texturing
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Professional drywall finishing and texturing services that create smooth, flawless surfaces ready
                    for painting or wallpapering. We offer various finish levels from basic to premium, plus custom
                    texturing options including smooth finish, orange peel, knockdown, and skip trowel textures to match
                    your aesthetic preferences.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Why Choose Our Drywalling Contractors?</h2>

            <p className="text-lg mb-6 leading-relaxed">
              Johannesburg has no shortage of drywalling contractors, but not all contractors deliver the same level of
              quality, professionalism, and customer service. When you choose our team, you're partnering with
              drywalling specialists who take pride in every project, regardless of size or complexity. Our reputation
              has been built on consistently exceeding client expectations, and we're committed to maintaining the
              highest standards of workmanship and customer satisfaction.
            </p>

            <div className="bg-slate-50 p-8 rounded-lg my-8">
              <h3 className="text-2xl font-semibold mb-6">
                What Sets Us Apart from Other Johannesburg Drywalling Contractors
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Hammer className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Experienced, Skilled Craftsmen</h4>
                    <p className="text-slate-600">
                      Our team consists of highly trained drywalling professionals with years of hands-on experience.
                      Every team member undergoes continuous training to stay current with the latest techniques,
                      materials, and industry best practices. This expertise ensures superior results on every
                      Johannesburg project we undertake.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Quality Materials & Equipment</h4>
                    <p className="text-slate-600">
                      We use only premium-grade drywall products from trusted manufacturers, ensuring durability and
                      long-lasting performance. Our investment in professional-grade tools and equipment allows us to
                      work efficiently while maintaining the highest quality standards. Quality materials combined with
                      expert installation create results that stand the test of time.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Transparent, Competitive Pricing</h4>
                    <p className="text-slate-600">
                      We provide detailed, itemized quotes that clearly explain all costs involved in your drywalling
                      project. No hidden fees, no surprise charges—just honest, competitive pricing that reflects the
                      quality of our work. We believe in building long-term relationships with Johannesburg clients
                      through fair pricing and exceptional value.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Reliable, Professional Service</h4>
                    <p className="text-slate-600">
                      We show up on time, work efficiently, and complete projects according to agreed schedules. Our
                      team maintains clean, organized work sites and treats your Johannesburg property with respect.
                      Clear communication throughout the project ensures you're always informed about progress and any
                      decisions that need to be made.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Comprehensive Warranty Protection</h4>
                    <p className="text-slate-600">
                      All our drywalling work is backed by comprehensive warranty coverage that protects your
                      investment. We stand behind the quality of our workmanship and materials, giving you peace of mind
                      that your Johannesburg property is in good hands. If any issues arise, we address them promptly
                      and professionally.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Licensed, Insured & Compliant</h4>
                    <p className="text-slate-600">
                      We maintain all necessary licenses and comprehensive insurance coverage, protecting both our team
                      and your property. Our work complies with all relevant South African building codes and safety
                      regulations. This professional approach gives you confidence that your drywalling project meets
                      all legal and safety requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Our Drywalling Process: From Consultation to Completion</h2>

            <p className="text-lg mb-6 leading-relaxed">
              We follow a systematic, professional approach to every drywalling project in Johannesburg. Our process
              ensures clear communication, accurate execution, and superior results that meet or exceed your
              expectations. From the initial consultation to final inspection, we maintain the highest standards of
              professionalism and craftsmanship.
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Initial Consultation & Assessment</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We begin every project with a thorough consultation at your Johannesburg property. Our team
                      assesses the scope of work, discusses your specific requirements and preferences, evaluates any
                      challenges or special considerations, and provides expert recommendations. This consultation is
                      completely free and helps us understand exactly what you need.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Detailed Quote & Project Planning</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Based on our assessment, we prepare a comprehensive written quote that details all aspects of your
                      drywalling project. This includes material specifications, labor costs, project timeline, and any
                      special considerations. We take time to explain the quote thoroughly and answer all your questions
                      before you make any commitment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Professional Installation</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Our experienced team arrives at your Johannesburg property with all necessary materials and
                      equipment. We work efficiently while maintaining meticulous attention to detail, ensuring every
                      sheet is properly installed, every seam is perfectly taped, and every corner is precisely
                      finished. Throughout the installation, we maintain a clean, organized work site.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Finishing & Quality Control</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We apply professional finishing techniques to create smooth, flawless surfaces. Multiple coats of
                      joint compound are applied and sanded to perfection, ensuring seamless transitions and
                      professional results. Every project undergoes rigorous quality inspection to verify that all work
                      meets our exacting standards before we consider it complete.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-amber-600">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Final Walkthrough & Warranty</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We conduct a comprehensive final walkthrough with you to ensure complete satisfaction with the
                      completed work. We address any concerns immediately and provide documentation including warranty
                      information and maintenance guidelines. Your satisfaction is our top priority, and we're not
                      finished until you're completely happy with the results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">
              Specialized Drywalling Solutions for Johannesburg Properties
            </h2>

            <p className="text-lg mb-6 leading-relaxed">
              Beyond standard drywall installation, we offer specialized drywalling solutions that address specific
              needs and challenges common in Johannesburg properties. Our expertise extends to moisture-resistant
              applications, soundproofing solutions, fire-rated installations, and custom architectural features that
              enhance both functionality and aesthetics.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Soundproof Drywalling</h3>
                  <p className="text-slate-600 mb-4">
                    Reduce noise transmission with specialized soundproof drywall systems perfect for home theaters,
                    music rooms, and multi-unit buildings.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Sound-dampening materials</li>
                    <li>• Resilient channel installation</li>
                    <li>• Acoustic sealants</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Moisture-Resistant Drywall</h3>
                  <p className="text-slate-600 mb-4">
                    Protect bathrooms, kitchens, and other moisture-prone areas with specialized moisture-resistant
                    drywall products.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Green board installation</li>
                    <li>• Mold-resistant materials</li>
                    <li>• Proper ventilation integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Fire-Rated Systems</h3>
                  <p className="text-slate-600 mb-4">
                    Meet building code requirements with fire-rated drywall installations for commercial and multi-unit
                    residential properties.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Type X drywall</li>
                    <li>• Fire-rated assemblies</li>
                    <li>• Code-compliant installation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Serving All of Johannesburg and Surrounding Areas</h2>

            <p className="text-lg mb-6 leading-relaxed">
              Our drywalling services extend throughout Johannesburg and the greater Gauteng region. We serve
              residential and commercial clients in{" "}
              <Link href="/drywall-sandton" className="text-amber-600 hover:text-amber-700 font-medium">
                Sandton
              </Link>
              ,{" "}
              <Link href="/ceiling-repairs-randburg" className="text-amber-600 hover:text-amber-700 font-medium">
                Randburg
              </Link>
              ,{" "}
              <Link href="/drywall-rosebank" className="text-amber-600 hover:text-amber-700 font-medium">
                Rosebank
              </Link>
              , Fourways, Midrand, Centurion, Germiston, Benoni, Boksburg, Roodepoort, Krugersdorp, and all surrounding
              suburbs. No matter where your property is located in the Johannesburg area, our mobile teams can provide
              prompt, professional drywalling services.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12">Frequently Asked Questions About Drywalling Contractors</h2>

            <div className="space-y-6 my-8">
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-3">
                  How do I choose the right drywalling contractor in Johannesburg?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Look for contractors with proven experience, proper licensing and insurance, positive customer
                  reviews, and transparent pricing. Ask for references, view examples of previous work, and ensure they
                  provide detailed written quotes. A professional drywalling contractor should be willing to answer all
                  your questions and provide clear explanations of their process and pricing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-3">
                  How much do drywalling contractors charge in Johannesburg?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Drywalling costs vary based on project size, complexity, ceiling height, and finishing requirements.
                  Basic installation typically ranges from R80-R150 per square meter, while more complex projects with
                  special finishes or difficult access may cost R150-R300 per square meter. We provide detailed,
                  transparent quotes that clearly outline all costs. Contact us for a free assessment and customized
                  quote for your specific project.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-3">How long does a typical drywalling project take?</h3>
                <p className="text-slate-600 leading-relaxed">
                  Project timelines depend on size and complexity. A single room typically takes 2-4 days including
                  installation, taping, mudding, and finishing. Larger projects like whole-house drywalling may require
                  1-2 weeks. Commercial projects vary widely based on scope. We provide accurate timelines during our
                  initial consultation and work efficiently to meet agreed deadlines.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-3">
                  Do you handle both residential and commercial drywalling?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Yes, we provide comprehensive drywalling services for both residential and commercial properties
                  throughout Johannesburg. Our team has extensive experience with homes, apartments, offices, retail
                  spaces, restaurants, industrial facilities, and more. We adapt our approach to meet the specific
                  requirements of each project type, ensuring professional results regardless of property type or
                  project size.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold mb-3">What warranty do you provide on drywalling work?</h3>
                <p className="text-slate-600 leading-relaxed">
                  All our drywalling work is backed by a comprehensive workmanship warranty that covers installation
                  quality and finishing. Warranty terms vary based on project type and scope, but typically range from
                  1-5 years. We also provide guidance on proper maintenance to ensure long-lasting results. If any
                  issues arise during the warranty period, we address them promptly at no additional cost.
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
              Ready to Start Your Johannesburg Drywalling Project?
            </h2>
            <p className="text-xl mb-8 text-amber-50">
              Contact Johannesburg's most trusted drywalling contractors today for a free consultation and detailed
              quote. Our expert team is ready to transform your property with professional drywalling services that
              exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-amber-600 hover:bg-slate-100">
                <Link href="tel:+27123456789">
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
              <p className="text-slate-600">All of Johannesburg & Gauteng</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
