import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, MapPin, Clock, Award, CheckCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: "French Doors Sandton | Premium Installation & Repairs 2025",
  description: "Premium French door installation & repair services in Sandton. Interior & patio French doors with custom glass options. 15+ years experience. FREE quotes. Call 067 601 4490",
  keywords: "french doors sandton, patio doors sandton, interior french doors sandton, glass doors sandton, door installation sandton, custom french doors johannesburg",
  openGraph: {
    title: "French Doors Sandton | Premium Installation & Repairs 2025",
    description: "Premium French door installation & repair services in Sandton. Interior & patio French doors with custom glass options. 15+ years experience.",
    url: "https://granitecarpentry.co.za/french-doors-sandton",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/french-doors-sandton",
  },
}

export default function FrenchDoorsSandtonPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="h-4 w-4" />
              Sandton's Premier French Door Specialists
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Premium French Doors in Sandton
            </h1>
            <p className="text-xl text-gray-600 mb-8 text-pretty">
              Transform your Sandton home with elegant French doors. Expert installation, repairs & custom glass solutions for interior and patio applications. Serving all Sandton suburbs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Get FREE Quote</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>200+ Sandton Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sandton Areas Served */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                French Door Services Across Sandton
              </h2>
              <p className="text-xl text-gray-600">
                Professional French door installation throughout Sandton's premium suburbs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">North Sandton</h3>
                  <p className="text-gray-600 mb-4">Dainfern, Broadacres, Lonehill, Cedar Lakes, Beverley</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Luxury estate French doors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Custom patio door installations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Central Sandton</h3>
                  <p className="text-gray-600 mb-4">Sandhurst, Hyde Park, Morningside, Illovo, Atholl</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Penthouse French doors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Interior room dividers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">South Sandton</h3>
                  <p className="text-gray-600 mb-4">Bryanston, Douglasdale, Wendywood, Sunninghill</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Garden room French doors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Balcony door installations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our French Door Services in Sandton
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Interior French Doors</h3>
                  <p className="text-gray-600 mb-4">
                    Create elegant room divisions and enhance natural light flow between spaces in your Sandton home. Our interior French doors are perfect for separating living areas, home offices, or creating privacy while maintaining an open feel.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Clear Glass:</strong> Maximum light transmission for bright, open spaces</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Frosted Glass:</strong> Privacy with elegance for bathrooms and bedrooms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Decorative Glass:</strong> Custom patterns and designs to match your decor</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Wood Finishes:</strong> Oak, mahogany, pine options to complement your interior</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Patio French Doors</h3>
                  <p className="text-gray-600 mb-4">
                    Connect your indoor and outdoor living spaces seamlessly with our premium patio French doors. Ideal for Sandton homes with gardens, pools, or entertainment areas, these doors provide easy access and stunning views.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Double Glazing:</strong> Superior insulation and noise reduction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Weather Sealing:</strong> Protection against Sandton's weather conditions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Security Features:</strong> Multi-point locking systems for estate living</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>UV Protection:</strong> Glass options to protect furnishings from sun damage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Custom French Doors</h3>
                  <p className="text-gray-600 mb-4">
                    Every Sandton home is unique, and we offer fully customized French door solutions to match your specific architectural style and personal preferences. From traditional to contemporary designs, we craft doors that perfectly complement your home.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Size Customization:</strong> Any width and height to fit your opening</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Glass Configurations:</strong> Single, double, or multiple pane designs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Hardware Selection:</strong> Premium handles, hinges, and accessories</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Color Matching:</strong> Paint or stain to match existing decor</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Repair & Maintenance</h3>
                  <p className="text-gray-600 mb-4">
                    Keep your existing French doors functioning perfectly with our expert repair and maintenance services. We service all brands and styles of French doors throughout Sandton, restoring them to like-new condition.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Glass Replacement:</strong> Broken or cracked pane replacement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Hardware Repairs:</strong> Fix or replace handles, locks, and hinges</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Alignment Issues:</strong> Adjust doors that stick or don't close properly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Weather Stripping:</strong> Replace worn seals for better insulation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              French Door Pricing in Sandton
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Transparent pricing for all our French door services. Final quotes depend on size, materials, and complexity.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Interior French Doors</h3>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>Standard Size (2m x 1.8m):</strong> From R12,500</p>
                    <p><strong>Premium Wood & Glass:</strong> From R18,500</p>
                    <p><strong>Custom Sizes:</strong> From R15,000</p>
                    <p className="text-sm pt-2 border-t">Includes installation, hardware, and finishing</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Patio French Doors</h3>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>Standard Patio Set:</strong> From R16,500</p>
                    <p><strong>Double Glazed:</strong> From R22,000</p>
                    <p><strong>Security Enhanced:</strong> From R25,000</p>
                    <p className="text-sm pt-2 border-t">Includes weather sealing and multi-point locking</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              All prices are estimates. Contact us for a detailed quote specific to your Sandton project.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Sandton Homeowners Trust Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Award className="h-8 w-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Luxury Estate Experience</h3>
                  <p className="text-gray-600">
                    Extensive experience working in Sandton's premium estates including Dainfern, Steyn City, and Waterfall. We understand the quality standards and security requirements of luxury living.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="h-8 w-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600">
                    Work around your busy Sandton lifestyle with flexible appointment times including evenings and weekends. Minimal disruption to your daily routine guaranteed.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-8 w-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Premium Materials Only</h3>
                  <p className="text-gray-600">
                    We source the finest materials from trusted suppliers to ensure your French doors not only look stunning but stand the test of time in Sandton's climate.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Star className="h-8 w-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">5-Year Warranty</h3>
                  <p className="text-gray-600">
                    Comprehensive warranty covering workmanship and materials. Your investment is protected with our industry-leading guarantee on all installations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Related Door Services</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Link href="/door-installation" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2 group-hover:text-amber-600 transition-colors">All Door Services</h3>
                    <p className="text-sm text-gray-600">Complete door installation solutions</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/pivot-doors" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2 group-hover:text-amber-600 transition-colors">Pivot Doors</h3>
                    <p className="text-sm text-gray-600">Modern luxury pivot door installations</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/barn-doors" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2 group-hover:text-amber-600 transition-colors">Barn Doors</h3>
                    <p className="text-sm text-gray-600">Stylish sliding barn door solutions</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/wooden-doors" className="group">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2 group-hover:text-amber-600 transition-colors">Wooden Doors</h3>
                    <p className="text-sm text-gray-600">Custom solid wood door craftsmanship</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              French Doors Sandton - FAQs
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">How long does French door installation take in Sandton?</h3>
                  <p className="text-gray-600">
                    Most standard French door installations in Sandton homes take 4-6 hours for a single door set. This includes removing the old door (if applicable), preparing the opening, installing the new French doors, and finishing work. Custom installations or those requiring structural modifications may take 1-2 days. We work efficiently to minimize disruption to your Sandton household.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Are French doors secure for Sandton homes?</h3>
                  <p className="text-gray-600">
                    Yes, modern French doors are highly secure when properly installed with quality hardware. We recommend multi-point locking systems, reinforced frames, and laminated or tempered glass for Sandton properties. For patio French doors, we can install additional security features like security bars or integration with your home security system, essential for estate living in Sandton.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">What's the best glass option for French doors in Sandton?</h3>
                  <p className="text-gray-600">
                    For Sandton's climate and lifestyle, we recommend double-glazed glass for patio French doors (superior insulation and noise reduction), tempered glass for safety in high-traffic areas, UV-protective glass to prevent furniture fading, and low-E glass for energy efficiency. For interior French doors, clear or frosted glass works beautifully depending on your privacy needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Can you install French doors in an existing wall opening?</h3>
                  <p className="text-gray-600">
                    We specialize in retrofit installations throughout Sandton. We can modify most existing openings to accommodate French doors, whether you're replacing old doors, converting a window to a door, or creating a completely new opening. Our team handles all structural work including lintel installation and finishing to ensure a seamless integration with your Sandton home's architecture.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Do you service all Sandton suburbs?</h3>
                  <p className="text-gray-600">
                    Yes, we provide French door installation services throughout Sandton including Bryanston, Morningside, Sandhurst, Hyde Park, Illovo, Atholl, Beverley, Lonehill, Dainfern, Broadacres, Douglasdale, Wendywood, Sunninghill, and all surrounding areas. We're familiar with the architectural styles and requirements of each Sandton neighborhood.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">What wood types do you offer for French doors?</h3>
                  <p className="text-gray-600">
                    We offer a variety of premium wood options suitable for Sandton's climate including oak (durable and classic), meranti (cost-effective and attractive), mahogany (luxury and weather-resistant), pine (budget-friendly with beautiful grain), and engineered wood (stable and low-maintenance). Each can be stained or painted to match your Sandton home's aesthetic.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">How much do French doors cost in Sandton?</h3>
                  <p className="text-gray-600">
                    French door costs in Sandton vary based on size, materials, and complexity. Interior French doors typically range from R12,500-R25,000, while patio French doors range from R16,500-R35,000. Custom luxury installations can be higher. We provide detailed quotes that include all materials, labor, hardware, and finishing. Contact us for a free assessment and quote specific to your Sandton property.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Do French doors require special maintenance in Sandton?</h3>
                  <p className="text-gray-600">
                    French doors require minimal maintenance in Sandton's climate. For wood doors, we recommend cleaning every 3 months and re-finishing every 3-5 years. Check and lubricate hinges annually, inspect weather sealing on patio doors twice yearly, and clean glass regularly. Our team provides detailed care instructions and offers maintenance services to keep your French doors looking and functioning perfectly for decades.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Sandton Home?
            </h2>
            <p className="text-xl mb-8 text-amber-50">
              Get a FREE consultation and quote for your French door project. Professional installation throughout Sandton.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-100">
                <Link href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>
            <p className="mt-6 text-amber-100 text-sm">
              Available 7 days a week | Same-day quotes | 5-year warranty on all installations
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
