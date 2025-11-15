import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Home, Clock, Award, Phone, MapPin, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: "★★★★★ Solid Wood Doors Pretoria 2025 | #1 Custom Wooden Door Installation",
  description: "★★★★★ #1 solid wood door specialists in Pretoria. Expert craftsmanship in meranti, oak, mahogany & pine doors. 300+ Tshwane installations. FREE quotes & design consultation.",
  openGraph: {
    title: "Solid Wood Doors Pretoria | Custom Wooden Door Installation",
    description: "Premium solid wood door installation in Pretoria. Custom meranti, oak, mahogany & pine doors. FREE design consultation.",
    url: "https://granitecarpentry.co.za/solid-wood-doors-pretoria",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/solid-wood-doors-pretoria",
  },
}

export default function SolidWoodDoorsPretoriaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg">(300+ Pretoria Installations)</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Solid Wood Doors Pretoria
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-50 text-pretty">
              Premium Custom Wooden Door Installation & Restoration in Pretoria & Tshwane
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-amber-900 hover:bg-amber-50">
                <Link href="/contact">Get FREE Design Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                <a href="tel:0676014490">Call: 067 601 4490</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <Home className="w-12 h-12 mx-auto mb-3 text-amber-600" />
                <div className="text-2xl font-bold mb-1">300+</div>
                <div className="text-sm text-muted-foreground">Wood Door Projects</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-3 text-amber-600" />
                <div className="text-2xl font-bold mb-1">2-3 Days</div>
                <div className="text-sm text-muted-foreground">Installation Time</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-3 text-amber-600" />
                <div className="text-2xl font-bold mb-1">15+ Years</div>
                <div className="text-sm text-muted-foreground">Woodworking Expertise</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Star className="w-12 h-12 mx-auto mb-3 text-amber-600" />
                <div className="text-2xl font-bold mb-1">5-Star</div>
                <div className="text-sm text-muted-foreground">Customer Rated</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Premium Solid Wood Door Installation in Pretoria</h2>
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed">
                Elevate your Pretoria home with the timeless elegance of solid wood doors from Granite Carpentry. As Pretoria and Tshwane's premier solid wood door specialists, we bring over 15 years of master woodworking craftsmanship to every installation. Our custom wooden doors combine classic beauty with modern durability, creating stunning entryways that stand the test of time while adding significant value to your property.
              </p>
              <p className="text-lg leading-relaxed">
                We serve all areas of Pretoria including Centurion, Faerie Glen, Waterkloof, Silver Lakes, Montana, Menlyn, Brooklyn, Lynnwood, Garsfontein, and throughout the greater Tshwane region. Whether you're building a new home, renovating a historic Pretoria property, or simply upgrading your entrance, our solid wood doors are custom-crafted to your exact specifications using premium African and imported hardwoods including meranti, oak, mahogany, pine, and teak.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6">Why Choose Solid Wood Doors for Your Pretoria Home?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Timeless Elegance & Character</h3>
                      <p className="text-muted-foreground">Solid wood doors bring warmth, character, and natural beauty that no synthetic material can replicate. Perfect for Pretoria's diverse architectural styles from Jacaranda City classics to modern estates.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Superior Insulation Performance</h3>
                      <p className="text-muted-foreground">Wood's natural insulation properties help regulate indoor temperatures, reducing energy costs in Pretoria's hot summers and cold winters while providing excellent sound dampening.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Exceptional Durability & Longevity</h3>
                      <p className="text-muted-foreground">Premium hardwoods properly treated for Pretoria's climate can last 50+ years. Our protective finishes resist warping, cracking, and UV damage from the harsh African sun.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Increases Property Value</h3>
                      <p className="text-muted-foreground">Quality solid wood doors are a premium feature that significantly increases your Pretoria property's market value and curb appeal, with ROI typically exceeding 80% of installation costs.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6">Our Premium Wood Door Options in Pretoria</h2>
            <div className="space-y-6 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Meranti Doors (African Mahogany)</h3>
                  <p className="mb-3">The most popular choice for Pretoria homes, meranti combines affordability with excellent durability and a beautiful reddish-brown grain perfect for staining.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Naturally resistant to insects and decay</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Excellent stability in Pretoria's climate conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Takes stains and finishes beautifully</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Cost-effective premium wood option</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Oak Doors (European & American)</h3>
                  <p className="mb-3">Premium oak doors offer unmatched strength, distinctive grain patterns, and classic elegance perfect for luxury Pretoria estates.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Exceptional hardness and impact resistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Beautiful quarter-sawn grain patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Ages beautifully developing rich patina</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Available in white oak and red oak varieties</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Mahogany Doors (Genuine Tropical)</h3>
                  <p className="mb-3">The ultimate in luxury wood doors, genuine mahogany offers unparalleled beauty, stability, and prestige for exclusive Pretoria properties.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Rich, deep reddish-brown color that darkens beautifully</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Exceptional dimensional stability (minimal warping)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Naturally resistant to rot, decay, and insects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Premium prestige wood for high-end homes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Pine Doors (Oregon & Knotty Pine)</h3>
                  <p className="mb-3">Affordable softwood options perfect for interior applications and cottages, offering natural charm and easy customization.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Budget-friendly solid wood option</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Rustic character with natural knots and grain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Accepts paint and stain readily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Ideal for interior doors and cottages</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6">Areas We Serve in Pretoria & Tshwane</h2>
            <div className="bg-slate-50 p-6 rounded-lg mb-12">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Eastern Pretoria</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Faerie Glen & Garsfontein</li>
                    <li>• Silver Lakes & Equestria</li>
                    <li>• Woodlands & Woodhill</li>
                    <li>• Wapadrand & The Wilds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Central & Southern</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Waterkloof & Waterkloof Ridge</li>
                    <li>• Menlyn & Brooklyn</li>
                    <li>• Lynnwood & Lynnwood Ridge</li>
                    <li>• Hatfield & Arcadia</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Northern Areas</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Montana & Montana Park</li>
                    <li>• Sinoville & Annlin</li>
                    <li>• Wonderboom & Dorandia</li>
                    <li>• Centurion & Midrand</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Solid Wood Door Pricing in Pretoria</h2>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Investment Ranges</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Pine Doors</h4>
                  <div className="text-3xl font-bold text-amber-600 mb-3">R4,500 - R8,000</div>
                  <ul className="space-y-2 text-sm">
                    <li>• Solid pine construction</li>
                    <li>• Standard sizes</li>
                    <li>• Basic hardware included</li>
                    <li>• Professional installation</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-amber-500">
                  <div className="text-xs font-semibold text-amber-600 mb-2">MOST POPULAR</div>
                  <h4 className="font-semibold text-lg mb-2">Meranti Doors</h4>
                  <div className="text-3xl font-bold text-amber-600 mb-3">R9,000 - R15,000</div>
                  <ul className="space-y-2 text-sm">
                    <li>• Premium meranti wood</li>
                    <li>• Custom sizing available</li>
                    <li>• Quality hardware</li>
                    <li>• Weather sealing included</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Oak / Mahogany</h4>
                  <div className="text-3xl font-bold text-amber-600 mb-3">R16,000 - R35,000+</div>
                  <ul className="space-y-2 text-sm">
                    <li>• Premium hardwoods</li>
                    <li>• Fully custom designs</li>
                    <li>• Premium hardware</li>
                    <li>• Lifetime warranty</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-center mt-6 text-slate-600">
                *Prices vary based on wood type, door size, design complexity, and hardware selection. FREE design consultation included.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">How long do solid wood doors last in Pretoria's climate?</h3>
                  <p className="text-muted-foreground">
                    With proper treatment and maintenance, quality hardwood doors can last 50+ years in Pretoria's climate. We apply UV-resistant finishes and weather-sealing to protect against the harsh African sun and temperature fluctuations. Meranti and mahogany are particularly well-suited to our local conditions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Do wooden doors warp in Pretoria's heat?</h3>
                  <p className="text-muted-foreground">
                    Properly kiln-dried and acclimatized wood with professional sealing rarely warps. We source wood that's been dried to moisture levels appropriate for Pretoria's climate and apply protective finishes to all six sides of the door. Premium hardwoods like meranti and mahogany have excellent dimensional stability.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Can you match existing woodwork in my Pretoria home?</h3>
                  <p className="text-muted-foreground">
                    Yes! We specialize in matching wood species, grain patterns, and finishes to your existing trim, floors, and cabinetry. We can create custom stain formulas and apply traditional or modern finishes to seamlessly integrate new doors with your home's existing character.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">What maintenance do solid wood doors require?</h3>
                  <p className="text-muted-foreground">
                    Minimal maintenance is needed. We recommend cleaning with a damp cloth and re-applying exterior finishes every 2-3 years depending on sun exposure. Interior doors typically need no maintenance beyond occasional cleaning. We provide detailed care instructions and can perform professional refinishing services.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Can solid wood doors be made secure?</h3>
                  <p className="text-muted-foreground">
                    Absolutely. We can install solid core construction, reinforced frames, multi-point locking systems, and security hardware. For maximum security, we offer composite wood-steel doors that combine wood aesthetics with metal security, or separate security gates that complement your wooden door.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Do you offer door restoration services in Pretoria?</h3>
                  <p className="text-muted-foreground">
                    Yes! We specialize in restoring historic and damaged solid wood doors throughout Pretoria. Our restoration services include structural repairs, wood replacement, refinishing, hardware restoration, and weather-sealing upgrades while preserving the door's original character and charm.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6">Related Door Services</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">
                    <Link href="/french-doors" className="text-amber-600 hover:text-amber-700">
                      French Doors
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-3">Beautiful solid wood French doors perfect for patios and interior spaces in Pretoria homes.</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/french-doors">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">
                    <Link href="/security-doors" className="text-amber-600 hover:text-amber-700">
                      Security Doors
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-3">Complement your wooden doors with professional security door installation for complete protection.</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/security-doors">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-to-br from-amber-800 to-amber-900 text-white">
              <CardContent className="pt-8 pb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Transform Your Pretoria Home with Premium Wood Doors</h2>
                <p className="text-xl mb-6 text-amber-50">
                  Get a FREE design consultation and quote from Pretoria's solid wood door specialists
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" asChild className="bg-white text-amber-900 hover:bg-amber-50">
                    <Link href="/contact">Request FREE Consultation</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                    <a href="tel:0676014490">Call: 067 601 4490</a>
                  </Button>
                </div>
                <p className="mt-6 text-sm text-amber-100">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  Serving all Pretoria & Tshwane • Custom Wood Craftsmanship • FREE Quotes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
