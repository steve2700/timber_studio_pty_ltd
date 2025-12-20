import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Award, Shield, CheckCircle2, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "★★★★★ Premium Quartz Countertops Installation Johannesburg | Granite Carpentry",
  description:
    "★★★★★ Expert quartz countertop installation in Johannesburg, Sandton & Pretoria. Caesarstone, Silestone, engineered stone, low-maintenance. Free quotes. Quality guaranteed.",
  keywords:
    "quartz countertops Johannesburg, Caesarstone installation, Silestone countertops, engineered quartz, quartz countertops Sandton, quartz countertops Pretoria, kitchen quartz countertops, bathroom quartz vanity, quartz vs granite, marble-look quartz, non-porous countertops, stain-resistant countertops, quartz installation Gauteng",
  openGraph: {
    title: "Premium Quartz Countertops Installation Johannesburg | Granite Carpentry",
    description:
      "Expert quartz countertop installation in Johannesburg, Sandton & Pretoria. Caesarstone, Silestone, low-maintenance. Free quotes.",
    url: "https://granitecarpentry.co.za/quartz-countertops",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/quartz-countertops",
  },
}

export default function QuartzCountertopsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Quartz Countertops Installation in Johannesburg
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover the perfect blend of beauty and practicality with engineered quartz countertops from Granite
              Carpentry. As Johannesburg's leading quartz installation specialists, we offer stunning, low-maintenance
              countertops that combine cutting-edge technology with exceptional design. Quartz countertops are the ideal
              choice for modern homeowners in Sandton, Pretoria, and throughout Gauteng who want the look of natural
              stone without the maintenance hassles.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Engineered quartz (also known as Caesarstone, Silestone, or Compac) is manufactured from 90-95% natural
              quartz crystals combined with polymer resins, creating a non-porous surface that's more durable and
              consistent than natural stone. With over 20 years of experience, our expert team delivers flawless quartz
              countertop installations for kitchens, bathrooms, and commercial spaces. From contemporary whites and
              greys to dramatic veined patterns and solid colors, our extensive quartz collection offers endless design
              possibilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Call 067 601 4490
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Quartz Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Quartz Countertops?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Non-Porous & Hygienic</h3>
              <p className="text-gray-700">
                Unlike natural stone, quartz never needs sealing. Its non-porous surface resists bacteria, mold, and
                mildew—perfect for food preparation areas.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Extremely Durable</h3>
              <p className="text-gray-700">
                Engineered quartz is harder than granite, resistant to scratches, chips, and cracks. It's built to
                withstand daily use in busy kitchens.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Virtually Maintenance-Free</h3>
              <p className="text-gray-700">
                Simply wipe with soap and water—no special cleaners or annual sealing required. Quartz is the ultimate
                low-maintenance countertop.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CheckCircle2 className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Stain Resistant</h3>
              <p className="text-gray-700">
                Coffee, wine, oil, and other common kitchen stains won't penetrate quartz surfaces, making cleanup
                effortless.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CheckCircle2 className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Consistent Appearance</h3>
              <p className="text-gray-700">
                Unlike natural stone with unpredictable veining, quartz offers uniform color and pattern
                throughout—perfect for modern, minimalist designs.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <Star className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Wide Design Options</h3>
              <p className="text-gray-700">
                From marble-look veining to solid colors and contemporary patterns, quartz offers unmatched variety to
                match any design aesthetic.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Quartz Countertop Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Kitchen Quartz Countertops</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Full kitchen countertop installations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Custom kitchen islands and breakfast bars</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Waterfall edge islands (modern statement pieces)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Undermount sink integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Cooktop and appliance cutouts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Matching backsplashes and accents</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Bathroom Quartz Countertops</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Single and double vanity countertops</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Custom basin cutouts and integrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Shower benches and shelving</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Matching wall panels</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Commercial Quartz Installation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Restaurant and café counters</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Office reception desks and workstations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Retail counters and displays</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Medical and laboratory surfaces</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hotel and hospitality projects</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Quartz Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Popular Quartz Brands We Install
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Caesarstone</h3>
              <p className="text-gray-700 mb-4">
                The original engineered quartz brand, offering premium quality and extensive color ranges from classic
                whites to dramatic darks.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2 text-gray-900">Popular Caesarstone colors:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 5141 Frosty Carrina (marble-look)</li>
                  <li>• 4044 Airy Concrete (industrial modern)</li>
                  <li>• 5043 Montblanc (bold veining)</li>
                  <li>• 4230 Shitake (warm neutral)</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Silestone</h3>
              <p className="text-gray-700 mb-4">
                Spanish-manufactured quartz with antimicrobial protection (Microban technology) for enhanced hygiene.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2 text-gray-900">Popular Silestone colors:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• White Storm (subtle grey veining)</li>
                  <li>• Lagoon (soft grey-blue)</li>
                  <li>• Iconic Black (deep, dramatic)</li>
                  <li>• Calacatta Gold (luxury marble-look)</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Compac Quartz</h3>
              <p className="text-gray-700">
                Premium European quartz known for exceptional durability and innovative finishes.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Other Quality Brands</h3>
              <p className="text-gray-700">
                We also work with Quantum Quartz, Hanstone, and other reputable manufacturers to suit any budget.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Professional Installation Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Free In-Home Consultation</h3>
                  <p className="text-gray-700">
                    We discuss your design vision, assess your space, and provide expert recommendations with a detailed
                    quote.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Material Selection</h3>
                  <p className="text-gray-700">
                    Visit our showroom to see full slabs, or we bring samples to your home. We help you choose the
                    perfect quartz for your project.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Precision Templating</h3>
                  <p className="text-gray-700">
                    Our technicians create exact digital templates, ensuring millimeter-perfect fit for sinks, cooktops,
                    and edges.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Expert Fabrication</h3>
                  <p className="text-gray-700">
                    Using CNC machinery and diamond tooling, we fabricate your quartz countertops with precision edges
                    and cutouts.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Professional Installation</h3>
                  <p className="text-gray-700">
                    Certified installers ensure seamless installation with invisible seams, perfectly level surfaces,
                    and secure mounting.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Final Quality Check</h3>
                  <p className="text-gray-700">
                    We inspect every detail, clean thoroughly, and ensure your complete satisfaction before we leave.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Quartz Countertop Pricing Guide
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Pricing Factors for Quartz Countertops:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Quartz brand:</strong> Caesarstone, Silestone, or other manufacturers
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Color selection:</strong> Basic, premium, or designer collections
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Slab thickness:</strong> 20mm or 30mm options
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Square meterage:</strong> Total countertop area
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Edge profiles:</strong> Standard or custom edge treatments
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cutouts & features:</strong> Sinks, cooktops, outlets, etc.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Installation complexity:</strong> Layout, access, and site conditions
                  </span>
                </li>
              </ul>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 border-2 border-gray-200">
                <h4 className="text-xl font-bold mb-2 text-gray-900">Mid-Range Quartz</h4>
                <p className="text-3xl font-bold text-yellow-600 mb-2">R3,500-R4,500</p>
                <p className="text-gray-600">per m² (installed)</p>
              </Card>

              <Card className="p-6 border-2 border-yellow-500">
                <h4 className="text-xl font-bold mb-2 text-gray-900">Premium Quartz</h4>
                <p className="text-3xl font-bold text-yellow-600 mb-2">R4,500-R6,000</p>
                <p className="text-gray-600">per m² (installed)</p>
                <p className="text-sm text-gray-500 mt-2">Caesarstone, Silestone</p>
              </Card>

              <Card className="p-6 border-2 border-gray-200">
                <h4 className="text-xl font-bold mb-2 text-gray-900">Designer Collections</h4>
                <p className="text-3xl font-bold text-yellow-600 mb-2">R6,000-R7,500</p>
                <p className="text-gray-600">per m² (installed)</p>
              </Card>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <p className="text-gray-700">
                <strong>Note:</strong> Quartz is typically 20-40% more expensive than granite but requires no sealing or
                special maintenance, saving money long-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quartz vs Other Materials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Quartz vs Other Countertop Materials
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Quartz vs Granite</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-bold mb-2 text-green-700">Quartz Advantages:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Engineered for consistency</li>
                    <li>• Never needs sealing</li>
                    <li>• 100% stain-proof</li>
                    <li>• Non-porous and hygienic</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-blue-700">Granite Advantages:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Natural, unique patterns</li>
                    <li>• Heat resistant</li>
                    <li>• Typically less expensive</li>
                    <li>• Timeless natural beauty</li>
                  </ul>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2 text-gray-900">When to choose quartz:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ Want zero maintenance</li>
                  <li>✓ Need consistent color/pattern</li>
                  <li>✓ Prioritize hygiene (kitchens with kids)</li>
                  <li>✓ Prefer modern, uniform aesthetics</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold mb-2 text-gray-900">When to choose granite:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ Want unique, one-of-a-kind patterns</li>
                  <li>✓ Prefer natural stone</li>
                  <li>✓ Budget-conscious</li>
                  <li>✓ Love natural variations</li>
                </ul>
              </div>
              <div className="mt-4">
                <Link href="/granite-countertops" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                  Compare with natural granite countertops →
                </Link>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Quartz vs Marble</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • <strong>Quartz:</strong> More durable, stain-resistant, lower maintenance
                  </li>
                  <li>
                    • <strong>Marble:</strong> Natural beauty but etches easily, requires significant care
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Quartz vs Solid Surface</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • <strong>Quartz:</strong> Heat and scratch resistant, premium appearance
                  </li>
                  <li>
                    • <strong>Solid Surface:</strong> Seamless but less heat resistant, can scratch
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Care & Maintenance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Caring for Your Quartz Countertops
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-green-50">
              <h3 className="text-2xl font-bold mb-4 text-green-800">Daily Maintenance (Super Simple!)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Wipe with warm water and mild soap</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use soft cloth or sponge (no abrasive scrubbers)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Clean spills promptly—though quartz is stain-resistant</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>That's it! No sealing, no special products needed</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-red-50">
              <h3 className="text-2xl font-bold mb-4 text-red-800">What to Avoid</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Heat:</strong> Use trivets for hot pots (quartz can handle brief heat but prolonged exposure
                  may damage resin)
                </li>
                <li>
                  <strong>Harsh chemicals:</strong> Avoid bleach, oven cleaners, and highly acidic products
                </li>
                <li>
                  <strong>Abrasive cleaners:</strong> No scouring powders or steel wool
                </li>
                <li>
                  <strong>Direct cutting:</strong> Always use cutting boards (quartz is scratch-resistant but not
                  scratch-proof)
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 max-w-5xl mx-auto mt-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Long-Term Care</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Quartz requires no sealing—ever</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Professional polish available if desired (though rarely needed)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Minor scratches can be buffed out by professionals</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Extremely durable and maintains appearance for decades</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Service Areas</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <p className="text-lg text-gray-700 mb-6 text-center">
                Professional quartz countertop installation throughout Gauteng
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3 text-gray-900">Johannesburg</h3>
                  <p className="text-gray-700">
                    Sandton, Rosebank, Melrose, Houghton, Hyde Park, Bryanston, Morningside, Parktown
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-gray-900">Northern Suburbs</h3>
                  <p className="text-gray-700">Fourways, Midrand, Randburg, Northcliff, Northgate, Douglasdale</p>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-gray-900">Pretoria</h3>
                  <p className="text-gray-700">Centurion, Brooklyn, Waterkloof, Menlyn, Silver Lakes, Lynnwood</p>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-gray-900">East Rand</h3>
                  <p className="text-gray-700">Bedfordview, Edenvale, Kempton Park, Boksburg, Benoni, Germiston</p>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-gray-900">West Rand</h3>
                  <p className="text-gray-700">Roodepoort, Krugersdorp</p>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-gray-900">South</h3>
                  <p className="text-gray-700">Johannesburg South, Alberton, Vereeniging</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Granite Carpentry for Quartz?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6">
              <Award className="w-10 h-10 text-yellow-600 mb-3" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Certified Installers</h3>
              <p className="text-gray-700">
                Our team is trained and certified in engineered quartz installation techniques.
              </p>
            </Card>

            <Card className="p-6">
              <Shield className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Authorized Dealers</h3>
              <p className="text-gray-700">
                Official dealers of Caesarstone, Silestone, and premium quartz brands—guaranteeing authentic materials.
              </p>
            </Card>

            <Card className="p-6">
              <Star className="w-10 h-10 text-purple-600 mb-3" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">20+ Years Experience</h3>
              <p className="text-gray-700">Two decades of perfecting stone installations means flawless results.</p>
            </Card>

            <Card className="p-6">
              <CheckCircle2 className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Comprehensive Warranty</h3>
              <p className="text-gray-700">Material and installation warranties for complete peace of mind.</p>
            </Card>

            <Card className="p-6">
              <CheckCircle2 className="w-10 h-10 text-indigo-600 mb-3" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">One-Stop Service</h3>
              <p className="text-gray-700">From selection to installation—we handle everything seamlessly.</p>
            </Card>

            <Card className="p-6">
              <CheckCircle2 className="w-10 h-10 text-teal-600 mb-3" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Fast Turnaround</h3>
              <p className="text-gray-700">
                Efficient project completion without compromising quality—typically 2-3 weeks.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Q: Does quartz stain?</h3>
              <p className="text-gray-700">
                A: Quartz is highly stain-resistant due to its non-porous surface. Common kitchen stains (wine, coffee,
                oil) won't penetrate. Simply wipe clean.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Q: Can I put hot pans on quartz?</h3>
              <p className="text-gray-700">
                A: While quartz is heat-resistant, we recommend using trivets or hot pads. Prolonged direct heat can
                damage the resin binders.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Q: How long do quartz countertops last?</h3>
              <p className="text-gray-700">
                A: With proper care, quartz countertops last 25+ years and often come with lifetime warranties from
                manufacturers.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Q: Is quartz better than granite?</h3>
              <p className="text-gray-700">
                A: "Better" depends on priorities. Quartz offers easier maintenance and consistency; granite offers
                natural uniqueness and typically lower cost.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Q: Does quartz need sealing?</h3>
              <p className="text-gray-700">
                A: No! This is quartz's biggest advantage—it never needs sealing, unlike granite or marble.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Q: Can quartz crack?</h3>
              <p className="text-gray-700">
                A: Quartz is extremely durable but can crack under extreme force or improper installation. Our
                professional installation prevents these issues.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Q: Are seams visible in quartz countertops?</h3>
              <p className="text-gray-700">
                A: Our expert fabricators minimize seams and match patterns carefully. Seams are nearly invisible in
                solid colors.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Q: Is quartz environmentally friendly?</h3>
              <p className="text-gray-700">
                A: Many quartz brands use recycled materials and sustainable practices. It's a greener choice than
                mining natural stone.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Space with Quartz Countertops</h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the beauty and convenience of premium engineered quartz countertops installed by Johannesburg's
              trusted professionals.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-300">067 601 4490</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-gray-300">info@granitecarpentry.co.za</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Service Area</p>
                  <p className="text-gray-300">All of Gauteng</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Hours</p>
                  <p className="text-gray-300">Monday-Saturday, 8am-5pm</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Call 067 601 4490
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                Get Free Quote
              </Button>
            </div>
            <p className="mt-6 text-gray-400">🏆 20+ years experience | 100% satisfaction guarantee</p>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Related Services</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/granite-countertops"
                className="block p-4 bg-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-gray-900 mb-2">Granite Countertops</h4>
                <p className="text-sm text-gray-600">Natural stone countertop installation</p>
              </Link>
              <Link href="/quartz-granite" className="block p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">Granite & Quartz Guide</h4>
                <p className="text-sm text-gray-600">Compare all countertop options</p>
              </Link>
              <Link
                href="/built-in-cupboards"
                className="block p-4 bg-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-gray-900 mb-2">Built-In Cupboards</h4>
                <p className="text-sm text-gray-600">Custom storage solutions</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
