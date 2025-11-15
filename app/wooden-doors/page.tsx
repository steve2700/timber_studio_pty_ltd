import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Shield, Hammer, CheckCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Wooden Doors Installation & Manufacturing | Custom Wood Doors Johannesburg',
  description: 'Expert wooden door installation and custom manufacturing in Johannesburg. Solid wood, meranti, oak, pine doors. Professional craftsmanship, 10-year guarantee. Call 067 601 4490',
  keywords: 'wooden doors, solid wood doors, meranti doors, oak doors, pine doors, wooden door installation, custom wood doors, timber doors, wood door manufacturers, wooden door repair, Johannesburg',
  openGraph: {
    title: 'Wooden Doors Installation & Manufacturing | Custom Wood Doors Johannesburg',
    description: 'Expert wooden door installation and custom manufacturing. Solid wood, meranti, oak, pine doors. Professional craftsmanship, 10-year guarantee.',
    url: 'https://granitecarpentry.co.za/wooden-doors',
    siteName: 'Granite Carpentry',
    locale: 'en_ZA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://granitecarpentry.co.za/wooden-doors',
  },
}

export default function WoodenDoorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Premium Wooden Doors Installation & Manufacturing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-50 text-pretty">
              Expert craftsmanship in solid wood, meranti, oak, and pine doors across Johannesburg. Custom designs, professional installation, 10-year guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-50 text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Call 067 601 4490
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8">
                Get Free Quote
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
            </div>
            <div className="flex flex-col items-center">
              <Hammer className="h-10 w-10 text-amber-600 mb-2" />
              <p className="font-semibold">Expert Craftsmen</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-10 w-10 text-amber-600 mb-2" />
              <p className="font-semibold">Premium Materials</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-10 w-10 text-amber-600 mb-2" />
              <p className="font-semibold">Certified Installation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Wooden Door Installation Services in Johannesburg</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Granite Joinery Experts, we specialize in the manufacturing, installation, and repair of premium wooden doors across Johannesburg and surrounding areas. With over 15 years of experience in timber craftsmanship, we deliver exceptional quality wooden doors that combine timeless beauty with modern durability. Our expert team works with solid wood, meranti, oak, pine, and other premium timber species to create custom doors that perfectly match your home's aesthetic and functional requirements.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether you're building a new home, renovating an existing property, or simply replacing old doors, our comprehensive wooden door services cover everything from custom design and manufacturing to professional installation and long-term maintenance. We use only sustainably sourced timber and employ traditional joinery techniques combined with modern manufacturing precision to create doors that will last for generations. Every wooden door we install comes with a 10-year guarantee, demonstrating our confidence in our craftsmanship and the quality of materials we use.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Types of Wooden Doors We Install</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">1. Solid Wood Doors</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our solid wood doors represent the pinnacle of traditional craftsmanship and durability. Constructed from single pieces of premium timber, these doors offer unmatched strength, excellent sound insulation, and natural beauty that improves with age. We work with various hardwoods including oak, mahogany, teak, and walnut to create bespoke solid wood doors that serve as stunning focal points in any home. These doors are ideal for main entrances, master bedrooms, and areas where maximum security, insulation, and aesthetic impact are desired.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Price Range:</strong> R8,500 - R25,000 per door (depending on timber species, size, and design complexity)
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">2. Meranti Doors</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Meranti doors offer an excellent balance of quality, affordability, and durability, making them one of the most popular choices for South African homes. This versatile hardwood features a beautiful reddish-brown color and straight grain pattern that accepts stains and finishes exceptionally well. Meranti's natural resistance to warping and splitting makes it ideal for both interior and exterior applications. We manufacture meranti doors in various styles including panel doors, flush doors, and glazed designs, all professionally finished to highlight the wood's natural beauty.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Price Range:</strong> R3,500 - R8,500 per door (depending on style and size)
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. Oak Doors</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Oak doors represent luxury, longevity, and timeless elegance. This premium hardwood is renowned for its distinctive grain patterns, exceptional strength, and ability to withstand decades of use while developing a rich patina. We offer both European oak and American white oak options, each with unique characteristics and color tones. Oak doors are perfect for period properties, luxury homes, and any setting where traditional craftsmanship and lasting quality are paramount. Our oak doors can be finished in various ways from natural oil finishes that showcase the wood's character to painted finishes for a more contemporary look.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Price Range:</strong> R12,000 - R35,000 per door (depending on oak type and design)
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">4. Pine Doors</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Pine doors provide an affordable yet attractive option for interior applications. This softwood offers a light, neutral color palette and subtle grain patterns that work beautifully in cottage-style, farmhouse, and contemporary interiors. While softer than hardwoods, properly manufactured and finished pine doors deliver excellent performance for bedroom doors, bathroom doors, and other internal applications. We use high-quality knotty or clear pine depending on your aesthetic preferences, and can finish doors with various stains, paints, or clear coats to match your interior design scheme.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Price Range:</strong> R2,500 - R5,500 per door (depending on grade and finish)
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">5. Custom Timber Doors</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              For clients seeking truly unique designs, we offer fully custom timber door manufacturing services. Working from architectural drawings, photographs, or your own design concepts, our master craftsmen can create bespoke wooden doors in virtually any style, size, or configuration. We specialize in period reproductions, contemporary minimalist designs, rustic farmhouse doors, and artistic statement pieces that serve as functional sculptures. Our custom service includes timber selection consultation, CAD design development, traditional joinery construction, and expert finishing to ensure your vision becomes reality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Price Range:</strong> R15,000 - R50,000+ per door (depending on complexity and materials)
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Wooden Door Installation Process</h2>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Free Consultation & Site Assessment</h3>
              <p className="text-gray-700 mb-4">
                Every project begins with a comprehensive consultation where we discuss your requirements, assess the installation site, and take precise measurements. We'll examine existing door frames, evaluate structural conditions, and discuss design options that complement your home's architecture. During this visit, we'll provide expert advice on timber selection, door styles, hardware options, and finishing choices. You'll receive a detailed written quotation with no obligation to proceed.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 2: Custom Manufacturing</h3>
              <p className="text-gray-700 mb-4">
                Once you approve the design and quotation, we begin manufacturing your doors in our specialized workshop. We carefully select premium timber, ensuring proper moisture content and grain patterns. Using traditional mortise and tenon joinery combined with modern precision tools, we construct doors that are both beautiful and structurally sound. Each door undergoes multiple quality checks during manufacturing to ensure it meets our exacting standards before finishing begins.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 3: Professional Finishing</h3>
              <p className="text-gray-700 mb-4">
                The finishing process is crucial to both the appearance and longevity of wooden doors. We sand each door to a smooth finish, apply appropriate sealers and primers, and then apply your chosen finish whether stain, paint, lacquer, or natural oil. Multiple coats are applied with proper curing time between each layer. For exterior doors, we use UV-resistant and weatherproof finishes that protect against South Africa's harsh climate while maintaining the wood's natural beauty.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 4: Expert Installation</h3>
              <p className="text-gray-700 mb-4">
                Our certified installation team arrives with all necessary tools and equipment to ensure a perfect fit. We carefully hang each door, ensuring proper clearances, smooth operation, and perfect alignment. All hardware including hinges, handles, locks, and closers is installed to manufacturer specifications. For exterior doors, we pay special attention to weatherproofing, installing proper seals and thresholds to prevent drafts and water ingress. The installation area is left clean and tidy upon completion.
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 5: Quality Inspection & Guarantee</h3>
              <p className="text-gray-700 mb-4">
                Before we consider any job complete, we conduct a thorough quality inspection with you present. We check door operation, alignment, hardware function, and finishing quality. We provide maintenance instructions and answer any questions you may have about caring for your new wooden doors. Every installation is backed by our comprehensive 10-year guarantee covering both manufacturing quality and installation workmanship, giving you complete peace of mind.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Choose Our Wooden Door Services?</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 text-amber-600 mr-2" />
                    Master Craftsmanship
                  </h3>
                  <p className="text-gray-700">
                    Our team includes certified joiners with decades of experience in traditional timber working techniques. We combine time-honored methods with modern precision to create doors of exceptional quality.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 text-amber-600 mr-2" />
                    Premium Materials Only
                  </h3>
                  <p className="text-gray-700">
                    We source only the finest quality timber from sustainable suppliers. Every piece of wood is carefully selected, properly seasoned, and inspected to ensure it meets our strict quality standards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 text-amber-600 mr-2" />
                    Custom Design Service
                  </h3>
                  <p className="text-gray-700">
                    Whether you need period reproductions or contemporary designs, our in-house design team works with you to create doors that perfectly match your vision and architectural requirements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 text-amber-600 mr-2" />
                    10-Year Guarantee
                  </h3>
                  <p className="text-gray-700">
                    We stand behind our work with one of the industry's most comprehensive guarantees, covering both manufacturing quality and installation workmanship for a full decade.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Service Areas in Johannesburg</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We provide professional wooden door installation services throughout Johannesburg and surrounding areas including <Link href="/areas/sandton" className="text-amber-600 hover:text-amber-700 underline">Sandton</Link>, <Link href="/areas/pretoria" className="text-amber-600 hover:text-amber-700 underline">Pretoria</Link>, <Link href="/areas/fourways" className="text-amber-600 hover:text-amber-700 underline">Fourways</Link>, <Link href="/areas/centurion" className="text-amber-600 hover:text-amber-700 underline">Centurion</Link>, <Link href="/areas/randburg" className="text-amber-600 hover:text-amber-700 underline">Randburg</Link>, <Link href="/areas/midrand" className="text-amber-600 hover:text-amber-700 underline">Midrand</Link>, and all surrounding suburbs. Our mobile workshop allows us to serve clients throughout Gauteng with the same high standards of quality and professionalism. Call us today for a free consultation and quotation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Explore Our Other Door Services</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link href="/pivot-doors" className="block p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-amber-900 mb-2">Pivot Doors</h3>
                <p className="text-sm text-amber-800">Modern statement entrances with smooth operation</p>
              </Link>
              <Link href="/barn-doors" className="block p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-amber-900 mb-2">Barn Doors</h3>
                <p className="text-sm text-amber-800">Space-saving sliding doors with rustic charm</p>
              </Link>
              <Link href="/security-doors" className="block p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-amber-900 mb-2">Security Doors</h3>
                <p className="text-sm text-amber-800">Maximum protection without compromising style</p>
              </Link>
              <Link href="/french-doors" className="block p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-amber-900 mb-2">French Doors</h3>
                <p className="text-sm text-amber-800">Elegant double doors for indoor-outdoor flow</p>
              </Link>
              <Link href="/door-installation" className="block p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-amber-900 mb-2">All Door Services</h3>
                <p className="text-sm text-amber-800">Complete door installation solutions</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How long do wooden doors last?</h3>
                <p className="text-gray-700">
                  Properly maintained wooden doors can last 50-100 years or more. Hardwood doors like oak and meranti are particularly durable. The key to longevity is proper installation, appropriate finishing for the environment, and regular maintenance including resealing or repainting every 5-10 years for exterior doors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What's the best wood for exterior doors in South Africa?</h3>
                <p className="text-gray-700">
                  Meranti and solid hardwoods like oak or mahogany are excellent choices for exterior doors in South Africa's climate. These timbers naturally resist warping and splitting in varying humidity and temperature conditions. When properly sealed and finished with UV-resistant products, they perform exceptionally well in our harsh sunlight and seasonal weather patterns.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can you match existing woodwork in my home?</h3>
                <p className="text-gray-700">
                  Yes, we specialize in matching existing timber species, finishes, and styles. Bring us a sample or photograph of your existing woodwork, and we'll match the timber type, grain pattern, color, and finish as closely as possible. This is particularly important for period properties or when replacing individual doors in a home.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How much does a custom wooden door cost?</h3>
                <p className="text-gray-700">
                  Custom wooden door prices vary based on timber species, size, design complexity, and finishing requirements. Pine interior doors start from R2,500, meranti doors from R3,500, while premium oak or custom hardwood designs range from R12,000 to R50,000+. We provide detailed written quotations after assessing your specific requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do wooden doors require special maintenance?</h3>
                <p className="text-gray-700">
                  Wooden doors need periodic maintenance to preserve their beauty and function. Interior doors require minimal care just occasional cleaning and hardware lubrication. Exterior doors need more attention: inspect seals annually, reapply finish every 5-10 years, and address any minor damage promptly. We provide detailed maintenance instructions with every installation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can you install wooden doors in existing frames?</h3>
                <p className="text-gray-700">
                  Yes, we can manufacture doors to fit existing frames, provided the frames are in good condition and properly squared. During our site assessment, we'll evaluate your existing frames and advise whether they're suitable for reuse or if replacement is recommended. Sometimes frame repairs or modifications are needed to ensure proper door operation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What's the difference between solid wood and engineered wood doors?</h3>
                <p className="text-gray-700">
                  Solid wood doors are constructed from continuous pieces of timber throughout, offering maximum strength, longevity, and natural beauty. Engineered wood doors have a timber frame with composite core materials, making them more affordable and dimensionally stable but generally less prestigious. We manufacture both types, recommending the best option based on your application and budget.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does wooden door installation take?</h3>
                <p className="text-gray-700">
                  Standard door installation typically takes 2-4 hours per door. Custom door manufacturing requires 3-6 weeks depending on design complexity and current workshop schedule. We'll provide accurate timelines during consultation. For urgent projects, we offer expedited manufacturing services at an additional cost.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer door repair services?</h3>
                <p className="text-gray-700">
                  Yes, we provide comprehensive door repair services including fixing warped doors, replacing damaged panels, repairing broken frames, refinishing faded or damaged surfaces, and upgrading hardware. Often repairs are more cost-effective than replacement, especially for quality hardwood doors. Contact us for an assessment and repair quotation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Are wooden doors energy efficient?</h3>
                <p className="text-gray-700">
                  Solid wood doors provide excellent natural insulation, helping regulate indoor temperature and reduce energy costs. Hardwood doors are particularly effective thermal barriers. For maximum efficiency, we can add weatherstripping, install proper thresholds, and recommend appropriate door styles with minimal glass. Solid core wooden doors significantly outperform hollow alternatives for both thermal and acoustic insulation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-900 to-amber-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Beautiful Custom Wooden Doors?</h2>
          <p className="text-xl mb-8 text-amber-50">
            Get your free consultation and quotation today. Expert craftsmen, premium timber, 10-year guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-50 text-lg px-8">
              <Phone className="mr-2 h-5 w-5" />
              Call 067 601 4490
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-amber-300 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-amber-100">067 601 4490</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-amber-300 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-amber-100">info@granitecarpentry.co.za</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-amber-300 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Hours</h3>
                <p className="text-amber-100">Mon-Fri: 7AM-6PM<br />Sat: 8AM-2PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
