import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Shield, Hammer, CheckCircle, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Pivot Doors Sandton | Modern Entrance Pivot Door Installation Sandton 2025',
  description: 'Expert pivot door installation in Sandton. Modern statement entrances with smooth operation. German hardware, 10-year guarantee. Serving Sandton, Bryanston, Hyde Park. Call 067 601 4490',
  keywords: 'pivot doors Sandton, pivot door installation Sandton, modern entrance doors Sandton, large pivot doors, custom pivot doors, pivot door hardware, Sandton doors, Bryanston pivot doors, Hyde Park doors',
  openGraph: {
    title: 'Pivot Doors Sandton | Modern Entrance Pivot Door Installation 2025',
    description: 'Expert pivot door installation in Sandton. Modern statement entrances. German hardware, 10-year guarantee. Same-day quotes available.',
    url: 'https://granitecarpentry.co.za/pivot-doors-sandton',
    siteName: 'Granite Carpentry',
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://granitecarpentry.co.za/pivot-doors-sandton',
  },
}

export default function PivotDoorsSandtonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <MapPin className="inline h-4 w-4 mr-1" />
              Serving Sandton & Surrounding Areas
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Pivot Doors Sandton - Modern Statement Entrances
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-100 text-pretty">
              Expert pivot door installation in Sandton. Transform your entrance with smooth-operating, architecturally stunning pivot doors. German hardware, 10-year guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 text-white hover:bg-amber-700 text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Call 067 601 4490
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8">
                Get Free Quote Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-10 w-10 text-amber-600 mb-2" />
              <p className="font-semibold">10-Year Guarantee</p>
              <p className="text-sm text-gray-600">Full Coverage</p>
            </div>
            <div className="flex flex-col items-center">
              <Hammer className="h-10 w-10 text-amber-600 mb-2" />
              <p className="font-semibold">Expert Installation</p>
              <p className="text-sm text-gray-600">Certified Team</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-10 w-10 text-amber-600 mb-2" />
              <p className="font-semibold">German Hardware</p>
              <p className="text-sm text-gray-600">Premium Quality</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-10 w-10 text-amber-600 mb-2" />
              <p className="font-semibold">Same-Day Quotes</p>
              <p className="text-sm text-gray-600">Fast Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Pivot Door Installation in Sandton</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Welcome to Granite Carpentry, Sandton's premier pivot door specialists. For over 15 years, we've been transforming Sandton properties with stunning modern pivot doors that serve as architectural focal points. Our expert team specializes in the design, manufacturing, and installation of custom pivot doors throughout Sandton, including Bryanston, Hyde Park, Morningside, Sandhurst, and all surrounding areas. Whether you're building a luxury estate in Hyde Park, renovating a contemporary home in Bryanston, or upgrading your office entrance in Sandton CBD, we deliver pivot door solutions that combine breathtaking aesthetics with flawless functionality.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pivot doors represent the pinnacle of modern entrance design, offering a unique opening mechanism that creates dramatic visual impact while providing superior performance. Unlike traditional hinged doors, pivot doors rotate on a central or offset axis, allowing for larger door panels, smoother operation, and stunning minimalist aesthetics. Our pivot doors are engineered using premium materials and German-manufactured pivot hardware systems that ensure whisper-quiet operation and decades of reliable service. Every installation is backed by our comprehensive 10-year guarantee and performed by certified installation specialists who understand the precise requirements of these sophisticated door systems.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Choose Pivot Doors for Your Sandton Property?</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Architectural Statement & Curb Appeal</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pivot doors instantly elevate your property's exterior aesthetic, creating an unforgettable first impression that sets your home apart in Sandton's competitive luxury property market. The unique rotating mechanism and oversized panels available with pivot doors make a bold architectural statement that traditional doors simply cannot match. Sandton homeowners choose pivot doors to showcase their property's contemporary design sensibilities and attention to premium details. Whether you're planning to enjoy your home for years or positioning it for future sale, a stunning pivot door entrance significantly enhances property value and market appeal.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Exceptional Size & Scale Capabilities</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              One of the most compelling advantages of pivot door systems is their ability to accommodate exceptionally large door panels that would be impossible with traditional hinged designs. While conventional doors are limited by hinge strength to around 2.4m in height, pivot doors can easily reach 3.5m to 4m or even taller, creating dramatic double-height entrances perfect for Sandton's luxury estates. The pivot mechanism distributes the door's weight through both floor and ceiling points, allowing for much larger and heavier panels while maintaining smooth, effortless operation. This makes pivot doors ideal for grand entrances, architectural feature walls, and spaces where you want to maximize natural light and visual flow.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Superior Operation & Longevity</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pivot doors operate with remarkable smoothness thanks to their advanced bearing systems and balanced weight distribution. The pivot mechanism reduces stress on individual components, resulting in longer lifespan and minimal maintenance requirements compared to traditional hinged doors. German-engineered pivot hardware systems like those we exclusively use feature precision bearings that allow even heavy solid timber or steel doors to open with a gentle push. The reduced wear on components means pivot doors maintain their perfect operation for decades, making them an excellent long-term investment for discerning Sandton homeowners who demand both beauty and performance.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Minimalist Aesthetic & Clean Lines</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The pivot mechanism's concealed hardware creates exceptionally clean visual lines that align perfectly with contemporary architectural styles prevalent throughout Sandton's luxury residential areas. Without visible hinges disrupting the door's surface, pivot doors present an uninterrupted facade that emphasizes material quality and design purity. This minimalist aesthetic pairs beautifully with modern architectural elements like glass, steel, concrete, and natural stone common in Sandton's high-end developments. The result is a seamless integration between your entrance door and overall architectural vision, creating sophisticated spaces that photography beautifully and impress visitors.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Pivot Door Services in Sandton</h2>

            <div className="bg-slate-50 border-l-4 border-amber-600 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Design & Consultation</h3>
              <p className="text-gray-700 mb-4">
                Every pivot door project begins with a comprehensive consultation at your Sandton property. Our design team works closely with you, your architect, and interior designer to develop pivot door solutions that perfectly complement your home's architecture and personal aesthetic preferences. We discuss material options, sizing requirements, glass configurations, finishing details, and hardware selections. Using advanced CAD software, we create detailed 3D renderings that allow you to visualize exactly how your pivot door will look installed. This collaborative design process ensures your final door exceeds expectations in both form and function.
              </p>
              <p className="text-gray-700 font-semibold">Free consultation and 3D design rendering with every quotation.</p>
            </div>

            <div className="bg-slate-50 border-l-4 border-amber-600 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Precision Manufacturing</h3>
              <p className="text-gray-700 mb-4">
                We manufacture all pivot doors in our specialized Johannesburg workshop using premium materials and precision engineering. Our manufacturing process incorporates German pivot hardware systems exclusively, ensuring smooth operation and long-term reliability. We work with solid timber, engineered wood, aluminum, steel, and composite materials, selecting the best option for your specific application. Every door is constructed to exact tolerances, with particular attention to weight distribution and balance crucial for optimal pivot operation. Multiple quality control checks throughout manufacturing ensure your door meets our exacting standards before leaving our workshop.
              </p>
              <p className="text-gray-700 font-semibold">3-6 week manufacturing timeline for custom pivot doors.</p>
            </div>

            <div className="bg-slate-50 border-l-4 border-amber-600 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Installation</h3>
              <p className="text-gray-700 mb-4">
                Pivot door installation requires specialized knowledge and precision that our certified installation team possesses through years of experience. We carefully prepare the installation site, ensuring structural support is adequate for your pivot door's weight and size. The pivot hardware is installed with laser-level accuracy, as even minor misalignment affects door operation. We meticulously adjust and balance the door until it opens and closes with perfect smoothness. All weatherproofing, sealing, and finishing details are completed to the highest standards. The installation area is left immaculate upon completion.
              </p>
              <p className="text-gray-700 font-semibold">Professional installation typically completed in 1-2 days depending on door size.</p>
            </div>

            <div className="bg-slate-50 border-l-4 border-amber-600 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pivot Door Repair & Maintenance</h3>
              <p className="text-gray-700 mb-4">
                We provide comprehensive maintenance and repair services for all pivot door brands and systems throughout Sandton. Services include pivot hardware adjustment and replacement, door rebalancing, weather seal replacement, lock and handle repairs, refinishing services, and glass replacement. Regular maintenance extends your pivot door's lifespan and maintains its smooth operation. We offer scheduled maintenance programs for residential estates and commercial properties, ensuring your investment is protected long-term.
              </p>
              <p className="text-gray-700 font-semibold">Emergency repair services available for Sandton clients.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Pivot Door Materials & Finishes</h2>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Solid Timber Pivot Doors</h3>
                <p className="text-gray-700 mb-3">
                  Our solid timber pivot doors combine natural beauty with modern engineering. We work with premium hardwoods including oak, walnut, meranti, and mahogany, each offering unique grain patterns and color tones. Solid timber provides excellent insulation properties and can be finished with natural oils, stains, or painted finishes to match your design vision. Timber pivot doors work beautifully in both traditional and contemporary Sandton homes.
                </p>
                <p className="text-gray-700 font-semibold">Price Range: R25,000 - R85,000+ depending on timber species and size</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Aluminum & Steel Pivot Doors</h3>
                <p className="text-gray-700 mb-3">
                  Metal pivot doors offer ultimate durability and ultra-slim sightlines perfect for minimalist contemporary architecture. Powder-coated aluminum provides weatherproofing and low maintenance, available in unlimited color options. Steel pivot doors offer maximum security and the ability to incorporate large glass panels for light-filled entrances. Metal doors are ideal for modern Sandton properties emphasizing industrial chic or minimalist design aesthetics.
                </p>
                <p className="text-gray-700 font-semibold">Price Range: R35,000 - R120,000+ depending on materials and glass specifications</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Composite & Engineered Pivot Doors</h3>
                <p className="text-gray-700 mb-3">
                  High-performance composite materials offer excellent dimensional stability, weatherproofing, and design flexibility. These engineered products resist warping, swelling, and deterioration better than solid timber while offering similar aesthetic appeal. Composite pivot doors are particularly suitable for Sandton's climate, maintaining perfect operation through seasonal temperature and humidity variations. Available in wood-grain finishes or smooth contemporary surfaces.
                </p>
                <p className="text-gray-700 font-semibold">Price Range: R30,000 - R90,000+ depending on specifications and size</p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Sandton Areas We Serve</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We provide professional pivot door installation throughout Sandton and surrounding premium suburbs including:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Sandton CBD & Surrounding</h4>
                <p className="text-sm text-gray-700">Sandton Central, Sandown, Grayston, Morningside, Rivonia</p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Northern Suburbs</h4>
                <p className="text-sm text-gray-700">Bryanston, Hyde Park, Dunkeld, Illovo, Atholl</p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Exclusive Estates</h4>
                <p className="text-sm text-gray-700">Sandhurst, Inanda, Bryanston East, Hurlingham</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We also serve nearby areas including <Link href="/areas/fourways" className="text-amber-600 hover:text-amber-700 underline">Fourways</Link>, <Link href="/areas/randburg" className="text-amber-600 hover:text-amber-700 underline">Randburg</Link>, <Link href="/areas/midrand" className="text-amber-600 hover:text-amber-700 underline">Midrand</Link>, and <Link href="/areas/centurion" className="text-amber-600 hover:text-amber-700 underline">Centurion</Link>. No matter where your Sandton property is located, we provide the same exceptional quality and service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Explore Our Other Door Services</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link href="/barn-doors" className="block p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-amber-900 mb-2">Barn Doors <ArrowRight className="inline h-4 w-4" /></h3>
                <p className="text-sm text-amber-800">Space-saving sliding doors with rustic appeal</p>
              </Link>
              <Link href="/security-doors" className="block p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-amber-900 mb-2">Security Doors <ArrowRight className="inline h-4 w-4" /></h3>
                <p className="text-sm text-amber-800">Maximum protection for your Sandton property</p>
              </Link>
              <Link href="/french-doors" className="block p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-amber-900 mb-2">French Doors <ArrowRight className="inline h-4 w-4" /></h3>
                <p className="text-sm text-amber-800">Elegant double doors for indoor-outdoor living</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sandton Pivot Doors - FAQs</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How much does a pivot door cost in Sandton?</h3>
                <p className="text-gray-700">
                  Pivot door costs in Sandton typically range from R25,000 to R120,000+ depending on size, materials, and hardware specifications. A standard 2.4m timber pivot door with German hardware starts around R25,000-35,000. Large format doors (3m+), premium materials like steel or exotic hardwoods, and complex glass configurations increase costs. We provide detailed written quotations with no hidden fees after assessing your specific requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How long do pivot doors last?</h3>
                <p className="text-gray-700">
                  Quality pivot doors with premium hardware systems last 30-50+ years with proper maintenance. German-manufactured pivot systems we use are engineered for hundreds of thousands of opening cycles. The door panel longevity depends on material selection - solid timber, aluminum, and steel all offer excellent durability when properly finished and maintained. We provide 10-year guarantees on both hardware and installation workmanship.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can pivot doors be used as front entrance doors?</h3>
                <p className="text-gray-700">
                  Pivot doors are increasingly popular as front entrance doors in Sandton's luxury homes. They offer superior security when properly specified with multipoint locking systems, excellent weather sealing capabilities, and outstanding thermal and acoustic insulation. We ensure all exterior pivot doors meet South African building codes for weather resistance, security, and energy efficiency. Many of Sandton's most prestigious properties feature pivot entrance doors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do pivot doors require special maintenance?</h3>
                <p className="text-gray-700">
                  Pivot doors require minimal maintenance beyond what standard doors need. Annual lubrication of pivot bearings takes just minutes and ensures continued smooth operation. Door surface maintenance depends on material - timber requires periodic refinishing, while aluminum and composite materials need only occasional cleaning. We recommend annual professional inspections to check pivot alignment and weather seals. Compared to traditional hinged doors, pivot doors often require less maintenance due to reduced stress on individual components.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can you install pivot doors in existing openings?</h3>
                <p className="text-gray-700">
                  Yes, we frequently install pivot doors in existing door openings during renovation projects throughout Sandton. During our site assessment, we evaluate your current opening, structural support, and subfloor conditions to determine any modifications needed. Sometimes minor structural work is required to accommodate the pivot mechanism and ensure adequate support for larger doors. We handle all aspects of the conversion including structural modifications, making pivot door upgrades seamless for renovation projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Sandton Entrance?</h2>
          <p className="text-xl mb-8 text-slate-100">
            Get your free pivot door consultation and quotation today. Expert installation, German hardware, 10-year guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 text-white hover:bg-amber-700 text-lg px-8">
              <Phone className="mr-2 h-5 w-5" />
              Call 067 601 4490 Now
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8">
              <Mail className="mr-2 h-5 w-5" />
              Request Free Quote
            </Button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-amber-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Serving Sandton</h3>
                <p className="text-slate-300 text-sm">Bryanston, Hyde Park, Morningside, Sandhurst & all surrounding areas</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-amber-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Call Us Today</h3>
                <p className="text-slate-300">067 601 4490</p>
                <p className="text-slate-400 text-sm">Same-day quotes available</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-amber-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Business Hours</h3>
                <p className="text-slate-300 text-sm">Mon-Fri: 7AM-6PM<br />Sat: 8AM-2PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
