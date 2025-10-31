import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Clock, Shield, Star, Phone, MapPin, Award, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Drywall Installation Edenvale | Professional Drywalling Services 2025",
  description:
    "Expert drywall installation in Edenvale. Professional drywalling, partitions, ceilings & repairs. Quality workmanship, competitive prices. Free quotes. Call now!",
  keywords:
    "drywall Edenvale, drywall installation Edenvale, drywalling Edenvale, drywall contractors Edenvale, partition walls Edenvale, drywall services Edenvale 2025",
  openGraph: {
    title: "Drywall Installation Edenvale | Professional Drywalling Services 2025",
    description:
      "Expert drywall installation in Edenvale. Professional drywalling, partitions, ceilings & repairs. Quality workmanship, competitive prices.",
    url: "https://granitecarpentry.co.za/drywall-edenvale",
    siteName: "Granite Carpentry & Joinery Experts",
    locale: "en_ZA",
    type: "website",
  },
}

export default function DrywallEdenvalePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Drywall Installation in Edenvale
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 text-balance">
              Expert drywalling services for residential and commercial properties across Edenvale. Quality
              installations, competitive pricing, guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <a href="tel:+27123456789">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 0676014490
                </a>
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
              <Award className="h-12 w-12 mx-auto mb-3 text-orange-600" />
              <p className="font-semibold">15+ Years Experience</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-3 text-orange-600" />
              <p className="font-semibold">Fully Insured</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-3 text-orange-600" />
              <p className="font-semibold">500+ Projects Completed</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-3 text-orange-600" />
              <p className="font-semibold">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Drywall Services in Edenvale</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Looking for professional drywall installation in Edenvale? Granite Carpentry & Joinery Experts has been
              the trusted choice for homeowners and businesses across Edenvale for over 15 years. From residential
              renovations to commercial fit-outs, we deliver exceptional drywalling services that combine quality
              craftsmanship with competitive pricing.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Edenvale's diverse property landscape, from established family homes near Edenvale Hospital to modern
              developments around Greenstone Mall, requires drywalling expertise that understands local building styles
              and requirements. Our team has completed hundreds of successful drywall projects across Edenvale, earning
              a reputation for reliability, quality, and professionalism.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Comprehensive Drywall Services</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We offer a complete range of drywall services to meet all your residential and commercial needs:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    Drywall Installation
                  </h4>
                  <p className="text-muted-foreground">
                    Professional installation of new drywall for walls and ceilings. We use premium materials and proven
                    techniques to ensure smooth, durable surfaces ready for finishing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    Partition Walls
                  </h4>
                  <p className="text-muted-foreground">
                    Create functional spaces with custom partition walls. Perfect for dividing rooms, creating home
                    offices, or adding privacy in commercial spaces.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    Ceiling Installation
                  </h4>
                  <p className="text-muted-foreground">
                    Expert drywall ceiling installation including suspended ceilings, bulkheads, and decorative ceiling
                    features that enhance your space.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    Drywall Repairs
                  </h4>
                  <p className="text-muted-foreground">
                    Professional repairs for damaged drywall including holes, cracks, water damage, and structural
                    issues. Seamless repairs that blend perfectly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    Soundproofing
                  </h4>
                  <p className="text-muted-foreground">
                    Acoustic drywall solutions for noise reduction. Ideal for home theaters, music rooms, offices, and
                    multi-unit residential properties.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-orange-600" />
                    Commercial Drywalling
                  </h4>
                  <p className="text-muted-foreground">
                    Large-scale commercial drywall projects including office fit-outs, retail spaces, and industrial
                    facilities. Fast, efficient, professional service.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Why Choose Us for Drywall in Edenvale?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              When you need drywall services in Edenvale, choosing the right contractor makes all the difference. Here's
              why Edenvale residents and businesses trust us:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <Star className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Local Edenvale Expertise</h4>
                  <p className="text-muted-foreground">
                    We've been serving Edenvale for over 15 years, completing projects in every suburb from Dowerglen to
                    Meadowdale. We understand local building requirements and work efficiently with Edenvale's building
                    inspectors.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Star className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Premium Materials</h4>
                  <p className="text-muted-foreground">
                    We use only high-quality drywall materials from trusted suppliers. Our materials are
                    moisture-resistant, fire-rated where required, and built to last for decades.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Star className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Skilled Craftsmen</h4>
                  <p className="text-muted-foreground">
                    Our team consists of experienced drywall specialists who take pride in their work. Every
                    installation is completed to the highest standards with attention to detail that shows in the
                    finished product.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Star className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Competitive Pricing</h4>
                  <p className="text-muted-foreground">
                    We offer transparent, competitive pricing without compromising on quality. Our detailed quotes
                    include all materials and labor, with no hidden costs or surprise charges.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Star className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Clean, Efficient Work</h4>
                  <p className="text-muted-foreground">
                    Drywall work can be messy, but we minimize disruption with efficient work practices and thorough
                    cleanup. We protect your property and leave your space clean after every work day.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Our Drywall Installation Process</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We follow a proven process to ensure every drywall project is completed efficiently and to the highest
              standards:
            </p>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-orange-600 pl-4">
                <h4 className="font-semibold text-lg mb-2">1. Consultation & Planning</h4>
                <p className="text-muted-foreground">
                  We start with a detailed consultation to understand your needs, assess the space, and discuss design
                  options. We provide expert recommendations based on your goals and budget.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h4 className="font-semibold text-lg mb-2">2. Accurate Measurements & Quote</h4>
                <p className="text-muted-foreground">
                  Our team takes precise measurements and provides a detailed written quote covering all materials,
                  labor, and timeline. We explain everything clearly so you know exactly what to expect.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h4 className="font-semibold text-lg mb-2">3. Professional Installation</h4>
                <p className="text-muted-foreground">
                  Our skilled craftsmen install your drywall using industry best practices. We ensure proper framing,
                  secure attachment, and perfect alignment for a flawless finish.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h4 className="font-semibold text-lg mb-2">4. Finishing & Quality Control</h4>
                <p className="text-muted-foreground">
                  We complete all taping, mudding, and sanding to create smooth, paint-ready surfaces. Our quality
                  control process ensures every detail meets our high standards.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h4 className="font-semibold text-lg mb-2">5. Final Inspection & Cleanup</h4>
                <p className="text-muted-foreground">
                  Before we consider the job complete, we conduct a thorough inspection and complete cleanup. We walk
                  you through the finished work and ensure your complete satisfaction.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Serving All Edenvale Areas</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We provide professional drywall services throughout Edenvale and surrounding suburbs:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span>Dowerglen</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span>Meadowdale</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span>Greenstone</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span>Harmelia</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span>Dunvegan</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span>Marais Steyn Park</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span>Edenglen</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span>Croydon</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span>Bedfordview</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span>Kempton Park</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span>Boksburg</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span>Germiston</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Related Drywall Services</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Explore our other drywall and ceiling services in nearby areas:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Link
                href="/ceiling-installation-edenvale"
                className="block p-4 border rounded-lg hover:border-orange-600 transition-colors"
              >
                <h4 className="font-semibold mb-2">Ceiling Installation Edenvale</h4>
                <p className="text-sm text-muted-foreground">Professional ceiling installation services in Edenvale</p>
              </Link>
              <Link
                href="/drywall-bedfordview"
                className="block p-4 border rounded-lg hover:border-orange-600 transition-colors"
              >
                <h4 className="font-semibold mb-2">Drywall Bedfordview</h4>
                <p className="text-sm text-muted-foreground">Expert drywall services in nearby Bedfordview</p>
              </Link>
              <Link
                href="/drywall-boksburg"
                className="block p-4 border rounded-lg hover:border-orange-600 transition-colors"
              >
                <h4 className="font-semibold mb-2">Drywall Boksburg</h4>
                <p className="text-sm text-muted-foreground">Professional drywalling in Boksburg area</p>
              </Link>
              <Link
                href="/drywall-kempton-park"
                className="block p-4 border rounded-lg hover:border-orange-600 transition-colors"
              >
                <h4 className="font-semibold mb-2">Drywall Kempton Park</h4>
                <p className="text-sm text-muted-foreground">Quality drywall installation in Kempton Park</p>
              </Link>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Frequently Asked Questions</h3>
            <div className="space-y-4 mb-8">
              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">How much does drywall installation cost in Edenvale?</h4>
                <p className="text-muted-foreground">
                  Drywall installation costs vary based on project size, ceiling height, and complexity. Basic wall
                  installations typically range from R150-R250 per square meter, while ceiling installations range from
                  R180-R300 per square meter. We provide free, detailed quotes for all projects.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">How long does drywall installation take?</h4>
                <p className="text-muted-foreground">
                  Timeline depends on project size. A single room typically takes 2-3 days including installation,
                  taping, and finishing. Larger projects like whole-house drywalling may take 1-2 weeks. We provide
                  accurate timelines during our initial consultation.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Do you handle both residential and commercial projects?</h4>
                <p className="text-muted-foreground">
                  Yes! We have extensive experience with both residential and commercial drywall projects. From home
                  renovations to large commercial fit-outs, we have the expertise and resources to handle projects of
                  any size.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">What type of drywall do you use?</h4>
                <p className="text-muted-foreground">
                  We use premium drywall materials appropriate for each application. This includes standard drywall for
                  interior walls, moisture-resistant drywall for bathrooms and kitchens, and fire-rated drywall where
                  required by building codes.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Can you match existing textures?</h4>
                <p className="text-muted-foreground">
                  Our skilled craftsmen can match virtually any existing texture, ensuring new drywall blends seamlessly
                  with your existing walls and ceilings.
                </p>
              </div>

              <div className="border-b pb-4">
                <h4 className="font-semibold mb-2">Do you offer warranties on your work?</h4>
                <p className="text-muted-foreground">
                  Yes, all our drywall installations come with a comprehensive workmanship warranty. We stand behind the
                  quality of our work and will address any issues that arise from our installation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Drywall Project in Edenvale?</h2>
            <p className="text-xl mb-8 text-orange-50">
              Contact us today for a free consultation and quote. Let's transform your space with professional drywall
              installation!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-orange-600 hover:bg-orange-50">
                <Link href="/contact">Request Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <a href="tel:+27676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 0676014490
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
