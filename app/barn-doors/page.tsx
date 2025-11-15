import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Home, Warehouse, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Barn Doors Installation | Sliding Barn Door Systems | Granite Carpentry',
  description: 'Professional barn door installation services across South Africa. Custom sliding barn doors for homes and commercial spaces. Modern hardware, rustic designs, and expert installation.',
  keywords: 'barn doors, sliding barn doors, barn door installation, rustic barn doors, modern barn doors, barn door hardware, sliding door track, interior barn doors, Cape Town barn doors',
  openGraph: {
    title: 'Expert Barn Door Installation Services | Granite Carpentry',
    description: 'Transform your space with custom barn doors. Professional installation, premium hardware, rustic and modern designs for any interior.',
    type: 'website',
  },
}

export default function BarnDoorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900">
        <div className="absolute inset-0 bg-[url('/rustic-barn-door-interior.jpg')] opacity-10 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Custom Barn Door Installation
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto text-pretty">
              Add Rustic Charm or Modern Style with Sliding Barn Doors - Expert Installation, Premium Hardware, Custom Designs
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-50">
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
              <div className="text-3xl font-bold text-amber-600 mb-2">800+</div>
              <div className="text-sm text-slate-600">Barn Doors Installed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">5-Star</div>
              <div className="text-sm text-slate-600">Customer Ratings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">Same Day</div>
              <div className="text-sm text-slate-600">Quotes Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Barn Doors for Your Space?
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Barn doors have evolved from their agricultural origins into one of the most popular interior design elements in modern homes and commercial spaces. Whether you're looking for rustic charm or contemporary elegance, sliding barn doors offer a perfect blend of functionality and aesthetic appeal.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Unlike traditional hinged doors, barn doors slide along a track mounted above the doorway, saving valuable floor space and creating a stunning visual focal point. They're ideal for homes, offices, restaurants, boutiques, and any space where you want to make a design statement while maximizing usability.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                At Granite Carpentry, we've installed over 800 custom barn doors across Cape Town, Johannesburg, Pretoria, and throughout South Africa. Our expert craftsmen combine premium materials with professional installation to create barn doors that are as durable as they are beautiful.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <Home className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Space-Saving Design</h3>
                  <p className="text-slate-600">Perfect for tight spaces where traditional doors won't fit - no swing radius needed</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Style Versatility</h3>
                  <p className="text-slate-600">From rustic farmhouse to modern industrial - countless design options available</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Warehouse className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Easy Installation</h3>
                  <p className="text-slate-600">Professional installation completed in 4-6 hours with minimal disruption</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Barn Door Styles */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Our Barn Door Styles
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Rustic Barn Doors</h3>
                <p className="text-slate-600 mb-4">
                  Authentic farmhouse style with reclaimed wood appearance, distressed finishes, and classic X-brace or Z-frame designs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Solid pine or meranti wood</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Hand-rubbed stains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Heavy-duty black hardware</span>
                  </li>
                </ul>
                <p className="text-amber-600 font-semibold">From R8,500</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Modern Barn Doors</h3>
                <p className="text-slate-600 mb-4">
                  Contemporary designs with clean lines, smooth finishes, and minimalist hardware for modern interiors.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Painted or laminated finishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Sleek stainless steel tracks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Custom color matching</span>
                  </li>
                </ul>
                <p className="text-amber-600 font-semibold">From R9,500</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Glass Barn Doors</h3>
                <p className="text-slate-600 mb-4">
                  Elegant glass panels that allow light to flow while maintaining privacy with frosted or patterned glass options.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Tempered safety glass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Wood and glass combinations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Frosted or clear options</span>
                  </li>
                </ul>
                <p className="text-amber-600 font-semibold">From R12,000</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Double Barn Doors</h3>
                <p className="text-slate-600 mb-4">
                  Two doors that slide from the center for wider openings, perfect for living rooms, master bedrooms, or commercial spaces.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Synchronized or independent sliding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Up to 4 meters combined width</span>
                  </li>
                </ul>
                <p className="text-amber-600 font-semibold">From R15,000</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Custom Barn Doors</h3>
                <p className="text-slate-600 mb-4">
                  Completely custom designs tailored to your exact specifications, including unique patterns, carvings, or mixed materials.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Bespoke designs and sizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Premium wood species available</span>
                  </li>
                </ul>
                <p className="text-amber-600 font-semibold">From R18,000</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Perfect Applications for Barn Doors
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Bedroom Closets</h3>
                <p className="text-slate-600">
                  Replace traditional closet doors with space-saving barn doors. Perfect for tight bedrooms where door swing is an issue.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Bathroom Entrances</h3>
                <p className="text-slate-600">
                  Add style and privacy to bathroom entrances with frosted glass or solid wood barn doors designed for moisture resistance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Room Dividers</h3>
                <p className="text-slate-600">
                  Create flexible living spaces by using barn doors as movable partitions between rooms or open-plan areas.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Pantry Doors</h3>
                <p className="text-slate-600">
                  Transform kitchen pantries with stylish barn doors that add character while maximizing kitchen space efficiency.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Office Spaces</h3>
                <p className="text-slate-600">
                  Create private meeting rooms or separate workspaces in open offices with professional-looking barn door solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Commercial Venues</h3>
                <p className="text-slate-600">
                  Perfect for restaurants, boutiques, and retail spaces seeking rustic charm or modern industrial aesthetics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hardware Options */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            Premium Hardware Options
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            We use only premium barn door hardware that ensures smooth, quiet operation and lasting durability. Choose from various finishes to match your interior design.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="font-bold text-lg mb-2">Matte Black</div>
                <p className="text-sm text-slate-600">Classic choice for rustic and modern designs</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="font-bold text-lg mb-2">Stainless Steel</div>
                <p className="text-sm text-slate-600">Contemporary look with corrosion resistance</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="font-bold text-lg mb-2">Bronze/Copper</div>
                <p className="text-sm text-slate-600">Warm tones for traditional interiors</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="font-bold text-lg mb-2">Brushed Nickel</div>
                <p className="text-sm text-slate-600">Versatile finish for any style</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Our Installation Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Free Consultation</h3>
              <p className="text-slate-600">
                We visit your property, measure the space, discuss your style preferences, and provide expert recommendations with a detailed quote.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Custom Building</h3>
              <p className="text-slate-600">
                Your barn door is custom-built in our workshop using premium materials, with quality control at every stage of construction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Professional Install</h3>
              <p className="text-slate-600">
                Expert installation completed in 4-6 hours, including track mounting, door hanging, and hardware adjustment for smooth operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            Barn Door Installation by Location
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/barn-doors-cape-town">
              <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Barn Doors Cape Town</h3>
                  <p className="text-slate-600 mb-4">Custom barn doors for Cape Town homes and businesses</p>
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
                  <h3 className="font-bold text-lg mb-2">All Door Services</h3>
                  <p className="text-slate-600 mb-4">Explore our complete door installation range</p>
                  <span className="text-amber-600 font-semibold flex items-center gap-2">
                    View All <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/areas/johannesburg">
              <Card className="hover:shadow-xl transition-shadow cursor-pointer h-full">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Johannesburg Services</h3>
                  <p className="text-slate-600 mb-4">All our services in Johannesburg</p>
                  <span className="text-amber-600 font-semibold flex items-center gap-2">
                    View Location <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How much does barn door installation cost?</h3>
                <p className="text-slate-600">
                  Barn door installation costs range from R8,500 to R25,000+ depending on size, materials, and hardware quality. Single rustic barn doors start from R8,500, modern designs from R9,500, glass doors from R12,000, and double doors from R15,000. Custom designs with premium materials cost more. We provide free quotes after consultation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Can barn doors provide privacy and sound insulation?</h3>
                <p className="text-slate-600">
                  Barn doors provide good privacy but limited sound insulation compared to traditional hinged doors since they don't seal completely. For better sound control, we recommend solid wood doors with rubber bumpers and floor guides. They work well for bedrooms and bathrooms where complete soundproofing isn't critical.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How much space do I need for a barn door?</h3>
                <p className="text-slate-600">
                  You need wall space equal to the door width plus 10-15cm for hardware on at least one side of the opening. The track extends beyond the door width. Ceiling height should accommodate the track mounted 15-20cm above the door opening. We assess space requirements during free consultation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How long does installation take?</h3>
                <p className="text-slate-600">
                  Standard barn door installation takes 4-6 hours for a single door after fabrication. Double doors may take 6-8 hours. Fabrication takes 2-4 weeks depending on design complexity. We complete installation in one visit with minimal disruption to your home or business.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">What maintenance do barn doors require?</h3>
                <p className="text-slate-600">
                  Barn doors require minimal maintenance. Clean the track periodically, lubricate rollers annually, and wipe down the door according to material type. Wood doors may need refinishing every 3-5 years. We provide maintenance instructions and offer service packages for optimal performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-900 to-amber-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Your Custom Barn Door?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Get a free consultation and quote for your barn door installation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-50">
              <Phone className="mr-2 h-5 w-5" />
              Call 067 601 4490
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-amber-100">
            <Clock className="h-5 w-5" />
            <span>Monday - Saturday: 7:00 AM - 6:00 PM</span>
          </div>
        </div>
      </section>
    </div>
  )
}
