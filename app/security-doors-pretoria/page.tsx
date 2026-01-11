import { Metadata } from "next"
import Link from "next/link"
import { Phone, MapPin, Clock, CheckCircle, Star, Shield, Lock, AlertTriangle, Eye } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "★★★★★ Best Security Door Installation Pretoria 2026 | Steel Security Doors",
  description: "★★★★★ Professional security door installation in Pretoria. Steel security gates, burglar bars, slam-lock doors. Protect your home with certified installations. FREE security assessment.",
  keywords: "security doors Pretoria, steel security doors Pretoria, burglar bars Pretoria, security gates Pretoria, slam lock doors Pretoria, home security Pretoria, security door installation, residential security",
  openGraph: {
    title: "Best Security Door Installation Pretoria 2026 | Granite Carpentry",
    description: "Professional security door installation services in Pretoria. Steel security gates, burglar bars, and slam-lock doors for maximum protection.",
    url: "https://granitecarpentry.co.za/security-doors-pretoria",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/security-doors-pretoria",
  },
}

export default function SecurityDoorsPreatoriaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">550+ Homes Secured</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Security Door Installation in Pretoria
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-pretty">
              Secure your Pretoria home with premium steel security doors and gates. SABS-certified installations, advanced locking systems, and burglar bars. Expert security solutions for the capital city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="text-lg h-14 px-8 bg-white text-slate-900 hover:bg-gray-100">
                <a href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg h-14 px-8 border-white text-white hover:bg-white/10">
                <Link href="/contact">FREE Security Assessment</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-300">
              <Shield className="inline h-4 w-4 mr-1" />
              SABS Certified | 24/7 Emergency Response | Insurance Approved
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Pretoria Residents Trust Our Security Solutions</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                As South Africa's capital city, Pretoria requires robust home security solutions that meet the highest standards. At Granite Carpentry, we've been protecting Pretoria homes for over a decade, with 550+ successful security door installations across Centurion, Menlyn, Waterkloof, and surrounding areas.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our security door installations are designed specifically for Pretoria's unique security challenges. We understand local crime patterns, building structures, and insurance requirements, ensuring your home receives comprehensive protection that meets SABS standards while maintaining aesthetic appeal.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>SABS Certified Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All installations meet South African Bureau of Standards requirements. Our SABS-certified security doors qualify for insurance approval and potential premium discounts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Lock className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Multi-Point Locking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced slam-lock systems with 7-point locking mechanisms provide maximum resistance against forced entry. Choose manual or motorized options.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Eye className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Aesthetic Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Modern designs complement Pretoria's diverse architectural styles. Powder-coated finishes in multiple colors blend with your property's exterior.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <AlertTriangle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Emergency Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    24/7 emergency security door repairs and installations. We respond immediately to break-in attempts and security failures throughout Pretoria.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Comprehensive Security Door Services in Pretoria</h2>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Heavy-Duty Steel Security Gates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Premium steel security gates provide the frontline defense for your Pretoria property. Custom-manufactured gates feature reinforced frames, heavy-duty steel bars, and advanced locking systems designed to withstand sophisticated break-in attempts.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>16mm solid steel bars with reinforced welded construction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-point slam-lock mechanisms with pick-resistant cylinders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Anti-lift hinges with security pins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Weather-resistant powder coating in black, white, bronze, or custom colors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Decorative patterns and modern designs available</span>
                    </li>
                  </ul>
                  <p className="text-sm text-primary font-semibold">Investment: R4,800 - R12,500 (complete installation with premium hardware)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Slam-Lock Security Door Systems</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Automatic slam-lock security doors provide instant protection the moment you close them. No manual locking required - the advanced 7-point system engages automatically, making them perfect for busy families and elderly residents.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Automatic 7-point locking activated on door closure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Reinforced steel frames anchored into masonry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Emergency panic exit from inside (keyless)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Security mesh or designer bar configurations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ventilation options for Pretoria's hot summers</span>
                    </li>
                  </ul>
                  <p className="text-sm text-primary font-semibold">Investment: R6,800 - R16,000 (size and locking system dependent)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Burglar Bars & Window Security Solutions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Comprehensive window protection systems secure vulnerable entry points throughout your property. Our custom burglar bars meet fire safety regulations with quick-release mechanisms while providing maximum security against intrusion.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Fixed burglar bars for permanent window security</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Swing-out bars with locks for bedroom fire safety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Quick-release mechanisms for emergency exit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>12mm or 16mm steel bars welded to reinforced frames</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Decorative designs that enhance property value</span>
                    </li>
                  </ul>
                  <p className="text-sm text-primary font-semibold">Investment: R900 - R2,800 per window (custom sizing available)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Security Door Repairs & Maintenance Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Maintain optimal security system performance with our expert repair and maintenance services. We service all security door brands throughout Pretoria, ensuring your protection remains uncompromised year-round.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Lock mechanism servicing and replacement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Hinge repairs and security reinforcement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Frame realignment and secure anchoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Rust treatment and protective coating restoration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Security system upgrades for existing installations</span>
                    </li>
                  </ul>
                  <p className="text-sm text-primary font-semibold">Repair Services: From R800 (24/7 emergency callouts available)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pretoria Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Security Door Installation Across Pretoria</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Professional security door services throughout Pretoria and surrounding areas. Our mobile security specialists provide same-day assessments and rapid installations across the capital.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Centurion", "Menlyn", "Waterkloof", "Brooklyn", "Hatfield",
                "Faerie Glen", "Garsfontein", "Mooikloof", "Lynnwood", "Pretoria East",
                "Pretoria North", "Montana", "Sinoville", "Wonderboom", "Annlin",
                "Constantia Park", "Elarduspark", "Moreleta Park", "Silver Lakes", "Woodhill"
              ].map((area) => (
                <div key={area} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>

            <p className="text-center mt-8 text-muted-foreground">
              Protecting homes across all Pretoria suburbs. <Link href="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> for a comprehensive security assessment.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What does security door installation cost in Pretoria?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Professional security door installation in Pretoria ranges from R4,800 to R16,000 depending on the security solution. Steel security gates start at R4,800, slam-lock security doors range from R6,800-R16,000, window burglar bars cost R900-R2,800 per window, and complete home security packages with multiple entry points range from R28,000-R70,000. All prices include professional installation and SABS-certified hardware.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Do your installations meet SABS standards?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, all our security door installations comply with SABS (South African Bureau of Standards) requirements and meet SANS 10427 standards for security gates and doors. We provide full certification documentation for insurance purposes, which may qualify you for reduced home insurance premiums. Our installations are approved by all major South African insurers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How quickly can you install security doors in Pretoria?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Standard security gate installations take 3-6 hours. Custom steel security doors require 1-2 weeks manufacturing time before installation. For emergency situations (post-break-in attempts), we offer same-day temporary security solutions with permanent installations within 48-72 hours. Complete multi-door home security projects typically take 1-2 days depending on the scope.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can I get stylish security doors that match my home?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely. Modern security doors have evolved significantly in design. We offer laser-cut decorative patterns, designer bar configurations, powder-coated finishes in any RAL color, slim-profile contemporary frames, and custom designs that complement Pretoria's diverse architectural styles from modern estates to heritage homes. Your security doesn't have to look institutional.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What maintenance do security doors need?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Security doors require minimal maintenance for optimal performance. Lubricate locks every 6 months with graphite powder, check and tighten hinges annually, clean surfaces with mild soap and water quarterly, inspect welds for stress cracks or damage, and address any rust spots immediately. We recommend annual professional inspections to ensure your security system maintains peak performance. Most clients find maintenance takes less than 30 minutes per year.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Do you provide emergency security services?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer 24/7 emergency security door services throughout Pretoria. Whether you've experienced a break-in attempt, lock failure, door damage, or need immediate security upgrades after an incident, our emergency response team is available around the clock. We carry essential replacement parts and can secure your property immediately with permanent solutions installed within 24-48 hours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What warranty coverage do you provide?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We stand behind our work with comprehensive warranties: 10-year structural warranty on steel frames and bars against manufacturing defects, 5-year warranty on powder coating finish against peeling and fading, 3-year warranty on all locking mechanisms and hardware, 2-year warranty on installation workmanship, and lifetime support for maintenance guidance and minor adjustments. We use only premium materials designed to last decades.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can security doors help reduce my insurance premiums?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, SABS-certified security door installations often qualify for home insurance discounts with major South African insurers. Discounts typically range from 10-25% depending on your insurer and the comprehensiveness of your security system. We provide all necessary certification documentation for your insurance company. Many Pretoria homeowners recover their security door investment through insurance savings within 3-5 years.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Other Door Services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/security-doors" className="p-4 border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">Security Door Installation</h3>
                <p className="text-sm text-muted-foreground">Complete guide to security doors, gates, and burglar bars</p>
              </Link>
              <Link href="/security-doors-sandton" className="p-4 border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">Security Doors Sandton</h3>
                <p className="text-sm text-muted-foreground">Premium security installations in Sandton</p>
              </Link>
              <Link href="/pivot-doors-pretoria" className="p-4 border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">Pivot Doors Pretoria</h3>
                <p className="text-sm text-muted-foreground">Luxury pivot door installation in Pretoria</p>
              </Link>
              <Link href="/barn-doors" className="p-4 border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">Barn Door Installation</h3>
                <p className="text-sm text-muted-foreground">Space-saving sliding barn doors</p>
              </Link>
              <Link href="/french-doors" className="p-4 border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">French Door Installation</h3>
                <p className="text-sm text-muted-foreground">Elegant French doors for patios</p>
              </Link>
              <Link href="/door-installation" className="p-4 border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">All Door Services</h3>
                <p className="text-sm text-muted-foreground">Complete door installation services</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Pretoria Home Today</h2>
            <p className="text-xl mb-8 text-gray-200">
              Get your FREE professional security assessment. Our experts will evaluate your property and recommend tailored solutions for maximum protection within your budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg h-14 px-8 bg-white text-slate-900 hover:bg-gray-100">
                <a href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg h-14 px-8 border-white text-white hover:bg-white/10">
                <Link href="/contact">FREE Security Assessment</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-300">
              <Clock className="inline h-4 w-4 mr-1" />
              24/7 Emergency Service • SABS Certified • 10-Year Warranty • Insurance Approved
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
