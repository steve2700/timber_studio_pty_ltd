import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Shield, Award, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pivot Doors Installation | Custom Pivot Door Systems | Granite Carpentry',
  description: 'Professional pivot door installation services in Johannesburg and Pretoria. Custom pivot doors with premium hardware, modern designs, and expert craftsmanship. Get a free quote today.',
  keywords: 'pivot doors, pivot door installation, custom pivot doors, modern pivot doors, pivot door hardware, pivot door systems, Johannesburg pivot doors, Pretoria pivot doors, luxury pivot doors',
  openGraph: {
    title: 'Expert Pivot Door Installation Services | Granite Carpentry',
    description: 'Transform your entrance with custom pivot doors. Professional installation, premium hardware, and stunning designs for residential and commercial properties.',
    type: 'website',
  },
}

export default function PivotDoorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/modern-pivot-door-entrance.jpg')] opacity-10 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Custom Pivot Door Installation
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto text-pretty">
              Transform Your Entrance with Stunning Pivot Doors - Expert Installation, Premium Hardware, Modern Designs
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Call 067 601 4490
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-sm text-slate-600">Doors Installed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
              <div className="text-sm text-slate-600">Quality Guaranteed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-sm text-slate-600">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Pivot Doors Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            What Are Pivot Doors?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Pivot doors represent the pinnacle of modern door design, offering a dramatic and elegant entrance solution. Unlike traditional hinged doors, pivot doors rotate on a vertical axis using specialized pivot hardware, creating a stunning architectural statement that transforms any entrance.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                These innovative doors can be significantly larger and heavier than conventional doors, with some installations reaching heights of 4 meters or more. The pivot mechanism distributes the door's weight evenly, allowing for smooth operation even with oversized or heavy materials like solid wood, steel, or glass.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                At Granite Carpentry, we specialize in custom pivot door installations throughout Johannesburg and Pretoria, bringing over 15 years of expertise in creating breathtaking entrances for luxury homes, commercial properties, and modern architectural projects.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Grand Entrance Impact</h3>
                  <p className="text-slate-600">Create an unforgettable first impression with doors up to 4 meters tall</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Smooth Operation</h3>
                  <p className="text-slate-600">Premium pivot hardware ensures effortless opening even for heavy doors</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Design Flexibility</h3>
                  <p className="text-slate-600">Choose from wood, glass, steel, or custom combinations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pivot Door Types */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Types of Pivot Doors We Install
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Glass Pivot Doors</h3>
                <p className="text-slate-600 mb-4">
                  Modern tempered glass pivot doors that maximize natural light while maintaining security. Perfect for contemporary homes and commercial spaces.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">10-19mm tempered glass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Clear, frosted, or tinted options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Frameless or framed designs</span>
                  </li>
                </ul>
                <p className="text-amber-600 font-semibold">From R25,000</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Solid Wood Pivot Doors</h3>
                <p className="text-slate-600 mb-4">
                  Luxurious solid wood pivot doors crafted from premium hardwoods. Custom designs with intricate detailing for discerning homeowners.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Meranti, oak, or walnut</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Custom staining and finishing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Up to 100mm thickness</span>
                  </li>
                </ul>
                <p className="text-amber-600 font-semibold">From R35,000</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Steel Pivot Doors</h3>
                <p className="text-slate-600 mb-4">
                  Industrial-style steel pivot doors combining security with modern aesthetics. Ideal for contemporary architecture and high-security applications.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Powder-coated finishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Custom colors and patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Enhanced security features</span>
                  </li>
                </ul>
                <p className="text-amber-600 font-semibold">From R30,000</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Why Choose Pivot Doors?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Award className="h-12 w-12 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Architectural Statement</h3>
                <p className="text-slate-600">
                  Make a bold design statement that elevates your property's curb appeal and market value significantly.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="h-12 w-12 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Superior Security</h3>
                <p className="text-slate-600">
                  Heavy-duty construction and advanced locking mechanisms provide exceptional security for your property.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Wrench className="h-12 w-12 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Smooth Operation</h3>
                <p className="text-slate-600">
                  Premium pivot hardware ensures whisper-quiet, effortless operation even for doors weighing over 200kg.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="h-12 w-12 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Space Efficiency</h3>
                <p className="text-slate-600">
                  Pivot doors require less clearance than traditional swing doors, maximizing your usable space.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Award className="h-12 w-12 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Custom Sizes</h3>
                <p className="text-slate-600">
                  Create oversized entrances up to 4+ meters tall that traditional hinges simply cannot support.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="h-12 w-12 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Weather Resistance</h3>
                <p className="text-slate-600">
                  Professional installation with proper sealing ensures excellent weather protection and energy efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Our Pivot Door Installation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Consultation & Design</h3>
              <p className="text-slate-600">
                We visit your property, take precise measurements, discuss design preferences, and provide expert recommendations for materials and hardware.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Custom Fabrication</h3>
              <p className="text-slate-600">
                Your pivot door is custom-built in our workshop using premium materials, with quality checks at every stage of production.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Professional Installation</h3>
              <p className="text-slate-600">
                Our expert team installs your pivot door with precision, ensuring perfect alignment, smooth operation, and proper weatherproofing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Final Inspection</h3>
              <p className="text-slate-600">
                We conduct thorough testing, adjust hardware for optimal performance, and provide maintenance instructions for lasting quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Pages CTA */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            Pivot Door Installation by Location
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            We provide professional pivot door installation services throughout Gauteng. Click below to view location-specific information and pricing.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/pivot-doors-sandton">
              <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Pivot Doors Sandton</h3>
                  <p className="text-slate-600 mb-4">Luxury pivot door installations in Sandton's premier estates</p>
                  <span className="text-amber-600 font-semibold flex items-center gap-2">
                    View Details <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/door-installation">
              <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">All Door Types</h3>
                  <p className="text-slate-600 mb-4">Explore our complete range of door installation services</p>
                  <span className="text-amber-600 font-semibold flex items-center gap-2">
                    View All Services <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/areas/johannesburg">
              <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Johannesburg Area</h3>
                  <p className="text-slate-600 mb-4">View all our services available in Johannesburg</p>
                  <span className="text-amber-600 font-semibold flex items-center gap-2">
                    View Location <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How much does a pivot door installation cost?</h3>
                <p className="text-slate-600">
                  Pivot door installation costs typically range from R25,000 to R80,000+ depending on size, materials, and hardware. Glass pivot doors start from R25,000, solid wood from R35,000, and steel from R30,000. Custom oversized doors or premium hardware can increase costs. We provide free detailed quotes after consultation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How long does pivot door installation take?</h3>
                <p className="text-slate-600">
                  Standard pivot door installation takes 1-2 days after fabrication. The fabrication process takes 3-6 weeks depending on design complexity and materials. We provide accurate timelines during consultation and keep you updated throughout the process.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">What is the maximum size for a pivot door?</h3>
                <p className="text-slate-600">
                  Pivot doors can reach impressive sizes - up to 4 meters tall and 1.5 meters wide. The pivot mechanism can support doors weighing over 300kg. We've installed oversized pivot doors up to 4.5 meters for commercial projects. Size limitations depend on structural considerations and hardware specifications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Are pivot doors secure?</h3>
                <p className="text-slate-600">
                  Yes, pivot doors are highly secure. They feature heavy-duty construction, multi-point locking systems, and reinforced frames. Steel and solid wood pivot doors offer excellent security. We install premium locks and can add security features like fingerprint access or smart locks upon request.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Do pivot doors require special maintenance?</h3>
                <p className="text-slate-600">
                  Pivot doors require minimal maintenance. We recommend lubricating the pivot hardware annually and cleaning according to material type. Wood doors may need refinishing every 3-5 years. We provide detailed maintenance instructions and offer annual service packages to keep your door operating smoothly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Entrance?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free consultation and quote for your custom pivot door installation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-slate-100">
              <Phone className="mr-2 h-5 w-5" />
              Call 067 601 4490
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-white/90">
            <Clock className="h-5 w-5" />
            <span>Monday - Saturday: 7:00 AM - 6:00 PM | Sunday: Emergency Service Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}
