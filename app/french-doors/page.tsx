import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, MapPin, Clock, Home, CheckCircle2, Star, ArrowRight, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'French Door Installation Johannesburg & Pretoria | Expert Installers 2025',
  description: 'Professional French door installation services in Johannesburg, Pretoria, and Gauteng. Interior and exterior French doors, patio doors, and glass doors. Get a free quote!',
  keywords: 'french doors johannesburg, french door installation pretoria, patio doors, glass french doors, interior french doors, exterior french doors, double french doors',
  openGraph: {
    title: 'French Door Installation Johannesburg & Pretoria | Expert Installers 2025',
    description: 'Professional French door installation services in Johannesburg, Pretoria, and Gauteng. Interior and exterior French doors, patio doors, and glass doors.',
    url: 'https://granitecarpentry.co.za/french-doors',
    siteName: 'Granite Carpentry',
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://granitecarpentry.co.za/french-doors',
  },
}

export default function FrenchDoorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-900 to-amber-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Home className="h-4 w-4" />
              Elegant & Timeless Design
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional French Door Installation in Johannesburg & Pretoria
            </h1>
            <p className="text-xl text-amber-100 mb-8 text-pretty">
              Transform your home with classic French doors. Expert installation of interior and exterior French doors, patio doors, and custom glass doors across Gauteng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Call 067 601 4490
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-amber-900 hover:bg-gray-100">
                Get Free Design Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">300+</div>
              <div className="text-gray-600">French Doors Installed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">48hr</div>
              <div className="text-gray-600">Installation Turnaround</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">5yr</div>
              <div className="text-gray-600">Warranty Included</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-6">Why Choose French Doors for Your Home?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                French doors are the epitome of elegance and functionality, bringing timeless charm and abundant natural light into your home. At Granite Joinery Experts, we specialize in professional French door installation across Johannesburg, Pretoria, Sandton, and surrounding areas. Our expert craftsmen have installed over 300 French door systems, helping homeowners create stunning transitions between indoor and outdoor spaces while adding significant value to their properties.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Whether you're looking to install classic wooden French doors for your bedroom, modern aluminum-framed patio French doors, or custom glass doors for your office, we deliver exceptional quality and precision. French doors don't just improve aesthetics—they maximize natural light, improve ventilation, create seamless flow between rooms, and enhance the overall livability of your space. Our installations meet all SANS building regulations and come with comprehensive warranties for your peace of mind.
              </p>
            </div>

            {/* French Door Types */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Comprehensive French Door Solutions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Home className="h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Interior French Doors</h3>
                  <p className="text-gray-600 mb-4">
                    Create elegant room dividers and expand visual space with interior French doors. Perfect for living rooms, home offices, bedrooms, and dining areas.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Solid wood or engineered options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Clear or frosted glass panels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Custom sizes and configurations</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Lightbulb className="h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Exterior Patio French Doors</h3>
                  <p className="text-gray-600 mb-4">
                    Connect your indoor living spaces with outdoor patios, gardens, and balconies. Weather-resistant materials with superior insulation and security.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Weather-sealed aluminum or timber</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Double-glazed energy-efficient glass</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Multi-point locking systems</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CheckCircle2 className="h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Double French Doors</h3>
                  <p className="text-gray-600 mb-4">
                    Classic double-opening French doors for grand entrances and wide openings. Maximize natural light and create impressive architectural features.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Symmetrical dual-panel design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Wide opening for furniture moving</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Astragal seals for weather protection</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Star className="h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Custom Glass French Doors</h3>
                  <p className="text-gray-600 mb-4">
                    Bespoke French doors with custom glass options including decorative patterns, colored glass, leaded designs, and privacy treatments.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Etched and sandblasted designs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Tinted or stained glass options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Traditional Georgian or modern styles</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mb-12 bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">French Door Installation Pricing 2025</h2>
              <p className="text-center text-gray-600 mb-8">Transparent pricing with professional installation included. All quotes include materials, labor, and 5-year warranty.</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Card className="p-6 text-center">
                  <div className="text-2xl font-bold text-amber-600 mb-2">R 8,500 - R 12,000</div>
                  <div className="font-semibold mb-2">Interior French Doors</div>
                  <div className="text-sm text-gray-600">Standard size, engineered wood, clear glass panels</div>
                </Card>
                <Card className="p-6 text-center border-2 border-amber-600">
                  <div className="inline-block bg-amber-600 text-white text-xs px-2 py-1 rounded-full mb-2">Most Popular</div>
                  <div className="text-2xl font-bold text-amber-600 mb-2">R 15,000 - R 22,000</div>
                  <div className="font-semibold mb-2">Patio French Doors</div>
                  <div className="text-sm text-gray-600">Aluminum frame, double-glazed, weather-sealed</div>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-2xl font-bold text-amber-600 mb-2">R 25,000 - R 45,000</div>
                  <div className="font-semibold mb-2">Premium Custom Doors</div>
                  <div className="text-sm text-gray-600">Solid hardwood, decorative glass, oversized</div>
                </Card>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold mb-4">Additional Options & Upgrades:</h3>
                <ul className="grid md:grid-cols-2 gap-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Custom Staining/Painting: R 1,500 - R 3,500</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Decorative Glass Panels: R 2,000 - R 6,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Smart Lock Integration: R 3,500 - R 7,500</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Blinds Between Glass: R 4,500 - R 8,000</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Installation Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Professional French Door Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Design Consultation & Measurements</h3>
                      <p className="text-gray-600">
                        We begin with a comprehensive on-site consultation to understand your vision, lifestyle needs, and architectural style. Our designers help you select the perfect French door style, materials, glass options, and hardware. We take precise measurements of your door openings, assess structural requirements, and evaluate natural light and traffic flow patterns. You receive detailed design renderings and material samples to visualize your new French doors.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Custom Manufacturing & Preparation</h3>
                      <p className="text-gray-600">
                        Your French doors are custom-built to exact specifications using premium materials. We source high-grade hardwoods, commercial-grade aluminum, and energy-efficient glass. Each door is crafted with precision joinery, weather-stripping, and quality hardware. For exterior installations, we ensure proper weatherproofing and insulation. Glass panels are professionally cut, sealed, and installed with appropriate glazing for your climate zone.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Structural Preparation</h3>
                      <p className="text-gray-600">
                        Before installation day, we prepare the door opening. This includes removing existing doors and frames, assessing and reinforcing the structural opening if needed, installing proper framing and headers, and ensuring level and plumb conditions. For exterior doors, we prepare weatherproofing layers, flashing, and drainage systems. All preparation work meets SANS building codes for structural integrity and energy efficiency.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
                      <p className="text-gray-600">
                        Our certified installers arrive with your custom French doors and all necessary materials. We carefully position and secure the door frame, ensuring perfect alignment and levelness. Doors are hung with precision-adjusted hinges, hardware is professionally installed, and all moving parts are tested. For exterior installations, we apply weather-sealing, caulking, and finishing trim. Interior installations receive matching architraves and paintable or stainable trim work.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Final Adjustments & Quality Check</h3>
                      <p className="text-gray-600">
                        After installation, we conduct thorough quality inspections. We test door operation, alignment, and locking mechanisms multiple times. All glass panels are cleaned and inspected for perfect clarity. We make micro-adjustments to ensure smooth operation, proper sealing, and optimal aesthetics. You receive a complete walkthrough demonstrating proper use, maintenance requirements, and warranty information. We leave your home spotlessly clean with all debris removed.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-12 bg-amber-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Benefits of French Doors</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-amber-600" />
                    Abundant Natural Light
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Large glass panels flood rooms with natural sunlight, reducing electricity costs and creating bright, welcoming spaces. Studies show natural light improves mood, productivity, and property value.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Home className="h-5 w-5 text-amber-600" />
                    Seamless Indoor-Outdoor Flow
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Perfect for South African indoor-outdoor living. French doors create effortless transitions to patios, gardens, and outdoor entertainment areas, expanding your usable living space.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Star className="h-5 w-5 text-amber-600" />
                    Timeless Elegance
                  </h3>
                  <p className="text-gray-700 text-sm">
                    French doors add classic architectural beauty that never goes out of style. They complement both traditional and contemporary homes, increasing aesthetic appeal and resale value.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                    Improved Ventilation
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Wide door openings allow excellent cross-ventilation, keeping your home naturally cool during warm Gauteng summers. Reduces air conditioning costs and improves indoor air quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">French Door Installation Areas We Cover</h2>
              <p className="text-gray-700 mb-6">
                Professional French door installation services across Gauteng. Fast, efficient service with minimal disruption to your home.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <Link href="/areas/sandton" className="text-gray-700 hover:text-amber-600">Sandton</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <Link href="/areas/johannesburg" className="text-gray-700 hover:text-amber-600">Johannesburg</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <Link href="/areas/pretoria" className="text-gray-700 hover:text-amber-600">Pretoria</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <Link href="/areas/centurion" className="text-gray-700 hover:text-amber-600">Centurion</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <Link href="/areas/randburg" className="text-gray-700 hover:text-amber-600">Randburg</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <Link href="/areas/fourways" className="text-gray-700 hover:text-amber-600">Fourways</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <Link href="/areas/midrand" className="text-gray-700 hover:text-amber-600">Midrand</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <Link href="/areas/roodepoort" className="text-gray-700 hover:text-amber-600">Roodepoort</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <Link href="/areas/benoni" className="text-gray-700 hover:text-amber-600">Benoni</Link>
                </div>
              </div>
            </div>

            {/* Related Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Complete Door Installation Solutions</h2>
              <p className="text-gray-700 mb-6">
                Complement your French doors with our comprehensive range of professional door installation services:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/door-installation" className="block p-4 border rounded-lg hover:border-amber-600 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold group-hover:text-amber-600">Door Installation Services</h3>
                      <p className="text-sm text-gray-600">Complete door solutions</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-amber-600" />
                  </div>
                </Link>
                <Link href="/pivot-doors" className="block p-4 border rounded-lg hover:border-amber-600 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold group-hover:text-amber-600">Pivot Door Installation</h3>
                      <p className="text-sm text-gray-600">Modern architectural doors</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-amber-600" />
                  </div>
                </Link>
                <Link href="/barn-doors" className="block p-4 border rounded-lg hover:border-amber-600 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold group-hover:text-amber-600">Barn Door Installation</h3>
                      <p className="text-sm text-gray-600">Sliding barn door systems</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-amber-600" />
                  </div>
                </Link>
                <Link href="/wooden-doors" className="block p-4 border rounded-lg hover:border-amber-600 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold group-hover:text-amber-600">Wooden Door Installation</h3>
                      <p className="text-sm text-gray-600">Custom solid wood doors</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-amber-600" />
                  </div>
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">French Door Installation FAQs</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">What's the difference between interior and exterior French doors?</h3>
                  <p className="text-gray-600">
                    Interior French doors are designed for room dividers and typically use lighter construction with decorative glass. Exterior French doors require weather-resistant materials, double-glazed insulated glass, multi-point locking systems, and weatherproofing to withstand elements while providing security and energy efficiency.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">How long does French door installation take?</h3>
                  <p className="text-gray-600">
                    Interior French door installation typically takes 4-6 hours for standard openings. Exterior patio French doors require 6-8 hours including weatherproofing and trim work. Custom installations with structural modifications may take 1-2 days. We complete most residential projects in a single day with minimal disruption.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">Do French doors provide good security for exterior use?</h3>
                  <p className="text-gray-600">
                    Yes, when properly installed with quality hardware. We use multi-point locking systems that secure the door at multiple points along the frame, tempered or laminated glass for break resistance, reinforced frames, and security hinges that can't be removed from outside. Additional options include security bars and alarm integration.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">Are French doors energy-efficient?</h3>
                  <p className="text-gray-600">
                    Modern French doors can be highly energy-efficient with double or triple-glazed Low-E glass, proper weather-stripping, insulated frames, and quality installation. We use thermally broken aluminum frames or insulated wood construction to minimize heat transfer. Energy-efficient French doors can actually reduce cooling costs by optimizing natural light.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">Can I install French doors in a standard door opening?</h3>
                  <p className="text-gray-600">
                    Yes, but it depends on the opening size. French doors typically require wider openings (1.8m-2.4m) than standard single doors. We can modify existing openings by removing walls, installing structural supports, and widening the opening to accommodate French doors. We assess structural feasibility during consultation.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">What glass options are available for French doors?</h3>
                  <p className="text-gray-600">
                    We offer clear glass for maximum light and views, frosted or obscured glass for privacy, tinted glass for sun control, low-E glass for energy efficiency, decorative etched or leaded designs, and impact-resistant tempered glass. You can also choose between single, double, or triple-pane configurations based on insulation needs.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">Do you offer custom sizes for French doors?</h3>
                  <p className="text-gray-600">
                    We specialize in custom French doors manufactured to your exact specifications. Whether you have oversized openings, non-standard heights, or unique architectural requirements, we create bespoke solutions. Custom options include door dimensions, glass configurations, materials, finishes, and hardware styles.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">How do I maintain French doors?</h3>
                  <p className="text-gray-600">
                    Maintenance is minimal. Clean glass regularly with standard glass cleaner. Lubricate hinges and locks annually. Check weather-stripping on exterior doors yearly and replace if worn. Wood doors may require refinishing every 3-5 years depending on sun exposure. We provide detailed maintenance guides with every installation.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">Can French doors be fitted with blinds or curtains?</h3>
                  <p className="text-gray-600">
                    Yes, several options exist. External curtain rods and roman blinds work well. We also offer French doors with integrated blinds sealed between glass panes—eliminating dust and damage. Alternatively, we can install magnetic blinds that attach directly to the door frame. We help you choose the best privacy solution.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">What's included in your French door installation warranty?</h3>
                  <p className="text-gray-600">
                    All installations include our comprehensive 5-year warranty covering materials, workmanship, and hardware. Glass is covered against seal failure. We also honor manufacturer warranties on door materials (typically 10-25 years on frames, lifetime on glass). Installation issues are resolved at no cost within the warranty period.
                  </p>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Home with Elegant French Doors
          </h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Bring timeless beauty and abundant natural light into your space. Get expert French door installation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call 067 601 4490 Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
              Get Free Design Consultation
            </Button>
          </div>
          <p className="mt-6 text-amber-100 text-sm">
            <Clock className="inline h-4 w-4 mr-1" />
            Fast Installation | Free Quotes | 5-Year Warranty | Custom Solutions
          </p>
        </div>
      </section>

    </div>
  )
}
