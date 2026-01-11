import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, Clock, Award, Phone, MapPin, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: "★★★★★ Security Doors Johannesburg 2026 | #1 Professional Installation",
  description: "★★★★★ #1 security door specialists in Johannesburg. Expert installation of steel security doors, burglar bars & access control. 500+ Gauteng installations. FREE security assessment & quotes.",
  openGraph: {
    title: "Security Doors Johannesburg | Professional Installation",
    description: "Leading security door installation in Johannesburg. Steel security doors, burglar bars & access control systems. FREE quotes.",
    url: "https://granitecarpentry.co.za/security-doors-johannesburg",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/security-doors-johannesburg",
  },
}

export default function SecurityDoorsJohannesburgPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg">(500+ Johannesburg Installations)</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Security Doors Johannesburg
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 text-pretty">
              Professional Security Door Installation & Access Control Solutions in Johannesburg
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/contact">Get FREE Security Assessment</Link>
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
                <Shield className="w-12 h-12 mx-auto mb-3 text-amber-600" />
                <div className="text-2xl font-bold mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Security Installations</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-3 text-amber-600" />
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Service</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-3 text-amber-600" />
                <div className="text-2xl font-bold mb-1">15+ Years</div>
                <div className="text-sm text-muted-foreground">Security Experience</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Star className="w-12 h-12 mx-auto mb-3 text-amber-600" />
                <div className="text-2xl font-bold mb-1">5-Star</div>
                <div className="text-sm text-muted-foreground">Rated Service</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professional Security Door Installation in Johannesburg</h2>
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed">
                When it comes to protecting your home or business in Johannesburg, security doors are your first line of defense. At Granite Carpentry, we specialize in professional security door installation throughout Johannesburg and surrounding areas including Sandton, Randburg, Rosebank, Fourways, Midrand, and all Johannesburg suburbs. With over 15 years of experience and 500+ successful security installations, we're Johannesburg's trusted security door specialists.
              </p>
              <p className="text-lg leading-relaxed">
                Our comprehensive security solutions include steel security doors, burglar bars, security gates, access control systems, and reinforced door frames. We serve residential properties, commercial buildings, offices, retail stores, warehouses, and industrial facilities throughout the Greater Johannesburg area. Every installation is customized to your specific security needs and property requirements.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6">Why Choose Our Security Doors in Johannesburg?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Maximum Security Protection</h3>
                      <p className="text-muted-foreground">16-gauge steel construction, reinforced frames, multi-point locking systems, and anti-lift hinges provide comprehensive protection against break-ins.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">SABS Certified Products</h3>
                      <p className="text-muted-foreground">All our security doors meet South African Bureau of Standards requirements and come with comprehensive warranties for your peace of mind.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">24/7 Emergency Service</h3>
                      <p className="text-muted-foreground">Security emergencies don't wait. We offer 24/7 emergency installation and repair services throughout Johannesburg with rapid response times.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Custom Security Solutions</h3>
                      <p className="text-muted-foreground">From basic residential security to advanced commercial access control, we design custom solutions tailored to your property and budget.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6">Our Security Door Services in Johannesburg</h2>
            <div className="space-y-6 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Steel Security Doors</h3>
                  <p className="mb-3">Heavy-duty steel security doors with reinforced frames and multi-point locking systems. Available in single and double configurations with various design options.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>16-gauge steel construction for maximum strength</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Reinforced steel frames bolted to brick or concrete</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Multi-point locking systems with deadbolts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Anti-lift hinges and tamper-proof fixings</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Burglar Bars & Security Gates</h3>
                  <p className="mb-3">Professionally installed burglar bars and expandable security gates for windows and doorways. Custom designs to match your property aesthetics.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Fixed and removable burglar bar options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Expandable trellis gates for maximum ventilation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Powder-coated finishes in various colors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Decorative designs available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Access Control Systems</h3>
                  <p className="mb-3">Modern access control solutions including biometric scanners, card readers, keypad entry systems, and remote access control for residential and commercial properties.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Fingerprint and facial recognition systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>RFID card and key fob access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Mobile app integration and remote control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Visitor management and audit trails</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6">Areas We Serve in Johannesburg</h2>
            <div className="bg-slate-50 p-6 rounded-lg mb-12">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Northern Suburbs</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Sandton & Bryanston</li>
                    <li>• Fourways & Midrand</li>
                    <li>• Randburg & Ferndale</li>
                    <li>• Northcliff & Northgate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Central Johannesburg</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Rosebank & Parktown</li>
                    <li>• Melrose & Illovo</li>
                    <li>• Houghton & Hyde Park</li>
                    <li>• Saxonwold & Dunkeld</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Southern Suburbs</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Johannesburg South</li>
                    <li>• Rosettenville & Turffontein</li>
                    <li>• La Rochelle & Bassonia</li>
                    <li>• Mondeor & Kibler Park</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Security Door Pricing in Johannesburg</h2>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Investment Ranges</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Basic Security</h4>
                  <div className="text-3xl font-bold text-amber-600 mb-3">R3,500 - R6,500</div>
                  <ul className="space-y-2 text-sm">
                    <li>• Standard steel door</li>
                    <li>• Single lock system</li>
                    <li>• Basic installation</li>
                    <li>• 1-year warranty</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-amber-500">
                  <div className="text-xs font-semibold text-amber-600 mb-2">MOST POPULAR</div>
                  <h4 className="font-semibold text-lg mb-2">Enhanced Security</h4>
                  <div className="text-3xl font-bold text-amber-600 mb-3">R7,000 - R12,000</div>
                  <ul className="space-y-2 text-sm">
                    <li>• Heavy-duty steel door</li>
                    <li>• Multi-point locking</li>
                    <li>• Reinforced frame</li>
                    <li>• 5-year warranty</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Premium Security</h4>
                  <div className="text-3xl font-bold text-amber-600 mb-3">R13,000 - R25,000+</div>
                  <ul className="space-y-2 text-sm">
                    <li>• Maximum security grade</li>
                    <li>• Access control system</li>
                    <li>• Smart integration</li>
                    <li>• 10-year warranty</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-center mt-6 text-slate-600">
                *Prices vary based on door size, security features, and installation complexity. FREE on-site security assessment included.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">How long does security door installation take in Johannesburg?</h3>
                  <p className="text-muted-foreground">
                    Standard security door installation typically takes 3-5 hours. Complex installations with reinforced frames or access control systems may take 6-8 hours. We complete most residential installations in one day.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Are your security doors SABS approved?</h3>
                  <p className="text-muted-foreground">
                    Yes, all our security doors meet SABS 1223 standards for security gates and doors. We only use certified materials and our installations comply with all South African building regulations and security standards.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Do you offer emergency security door installation?</h3>
                  <p className="text-muted-foreground">
                    Absolutely. We provide 24/7 emergency security door installation and repair services throughout Johannesburg. If your property has been compromised, we can install emergency security doors within hours. Call 067 601 4490 for immediate assistance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">What's the difference between steel security doors and burglar bars?</h3>
                  <p className="text-muted-foreground">
                    Steel security doors provide full door coverage with solid steel panels and are ideal for main entrances. Burglar bars offer ventilation and visibility while securing windows and secondary doors. We often recommend combining both for comprehensive security coverage.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Can you install security doors on existing door frames?</h3>
                  <p className="text-muted-foreground">
                    Yes, we can install security doors on existing frames if they're structurally sound. However, for maximum security, we recommend installing reinforced steel frames that are bolted directly into brick or concrete walls. We assess each situation during our FREE security consultation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Do you provide security door maintenance services?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer comprehensive maintenance including lock servicing, hinge lubrication, frame inspections, and rust treatment. Regular maintenance extends door lifespan and ensures optimal security performance. We recommend annual inspections for all security installations.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold mb-6">Related Door Services</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">
                    <Link href="/pivot-doors" className="text-amber-600 hover:text-amber-700">
                      Pivot Doors
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-3">Modern pivot door installation for residential and commercial properties with various security options.</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/pivot-doors">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">
                    <Link href="/wooden-doors" className="text-amber-600 hover:text-amber-700">
                      Wooden Security Doors
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-3">Solid wood doors with integrated security features combining aesthetics with protection.</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/wooden-doors">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-to-br from-amber-600 to-amber-700 text-white">
              <CardContent className="pt-8 pb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Johannesburg Property?</h2>
                <p className="text-xl mb-6 text-amber-50">
                  Get a FREE security assessment and quote from Johannesburg's leading security door specialists
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" asChild className="bg-white text-amber-700 hover:bg-slate-100">
                    <Link href="/contact">Request FREE Assessment</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                    <a href="tel:0676014490">Call: 067 601 4490</a>
                  </Button>
                </div>
                <p className="mt-6 text-sm text-amber-100">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  Serving all Johannesburg suburbs • 24/7 Emergency Service • FREE Quotes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
