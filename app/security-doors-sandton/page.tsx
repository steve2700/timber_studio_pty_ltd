import { Metadata } from "next"
import Link from "next/link"
import { Phone, MapPin, Clock, CheckCircle, Star, Shield, Lock, AlertTriangle, Eye } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "★★★★★ Best Security Door Installation Sandton 2025 | Steel Security Doors",
  description: "★★★★★ Professional security door installation in Sandton. Steel security gates, burglar bars, slam-lock doors. Protect your home with certified installations. FREE security assessment.",
  keywords: "security doors Sandton, steel security doors Sandton, burglar bars Sandton, security gates Sandton, slam lock doors, home security Sandton, security door installation, residential security",
  openGraph: {
    title: "Best Security Door Installation Sandton 2025 | Granite Carpentry",
    description: "Professional security door installation services in Sandton. Steel security gates, burglar bars, and slam-lock doors for maximum protection.",
    url: "https://granitecarpentry.co.za/security-doors-sandton",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/security-doors-sandton",
  },
}

export default function SecurityDoorsSandtonPage() {
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
              <span className="ml-2 text-lg font-semibold">600+ Homes Protected</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Security Door Installation in Sandton
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 text-pretty">
              Protect your Sandton home with premium steel security doors and gates. SABS-certified installations, slam-lock systems, and burglar bars. Expert security solutions that don't compromise style.
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
              SABS Certified | 24/7 Emergency Service | Insurance Approved Installations
            </p>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Sandton Residents Choose Our Security Doors</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Sandton's affluent neighborhoods require the highest levels of home security. At Granite Carpentry, we understand that your family's safety is paramount. That's why we specialize in professional security door installations that meet SABS standards while complementing your home's architectural style.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With over 600 security door installations across Sandton, Hyde Park, Bryanston, and surrounding areas, we've helped homeowners create safer living environments without compromising aesthetics. Our security solutions include reinforced steel doors, slam-lock systems, burglar bars, and security gates designed specifically for South African security requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>SABS Certified Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All our security doors meet South African Bureau of Standards (SABS) requirements. Insurance-approved installations give you peace of mind and potential premium reductions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Lock className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Advanced Locking Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Multi-point slam-lock systems, deadbolts, and security hinges provide maximum resistance against forced entry. Choose from manual or remote-controlled options.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Eye className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Stylish Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Modern designs that enhance rather than detract from your home's appearance. Powder-coated finishes in multiple colors blend seamlessly with your exterior.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <AlertTriangle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>24/7 Emergency Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Emergency security door repairs and installations available round-the-clock. We understand that security issues can't wait for business hours.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Security Door Services in Sandton</h2>
            
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Steel Security Gate Installation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Heavy-duty steel security gates provide the first line of defense for your Sandton home. We install custom-sized gates with advanced locking mechanisms designed to withstand attempted break-ins while maintaining easy exit for emergencies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>16mm solid steel bars welded to reinforced frames</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-point slam-lock systems with pick-resistant cylinders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Security hinges with anti-lift pins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Powder-coated finish in black, white, or custom colors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Designer patterns that complement your home's architecture</span>
                    </li>
                  </ul>
                  <p className="text-sm text-primary font-semibold">Price Range: R4,500 - R12,000 (includes installation and hardware)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Slam-Lock Security Door Systems</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Slam-lock security doors automatically lock when closed, providing instant protection without requiring you to manually turn keys. Perfect for main entrances, these doors combine convenience with maximum security.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Automatic 7-point locking mechanism activated on door closure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Reinforced steel frame anchored into brick or concrete</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Emergency exit functionality from inside (no key required)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Mesh or bar design options for visibility and ventilation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Weather-resistant construction for Gauteng climate</span>
                    </li>
                  </ul>
                  <p className="text-sm text-primary font-semibold">Price Range: R6,500 - R15,000 (depending on size and locking system)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Burglar Bars & Window Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Comprehensive window security solutions protect vulnerable entry points throughout your Sandton property. Our burglar bars are custom-made to fit any window size while meeting fire safety regulations with quick-release mechanisms.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Fixed burglar bars for permanent window protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Swing-open bars with security locks for bedroom windows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Quick-release mechanisms for fire safety compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>12mm or 16mm steel bars welded to frames</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Decorative designs available to enhance curb appeal</span>
                    </li>
                  </ul>
                  <p className="text-sm text-primary font-semibold">Price Range: R850 - R2,500 per window (custom sizes available)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Security Door Maintenance & Repairs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Keep your security systems functioning optimally with our maintenance and repair services. We service all brands of security doors and gates, ensuring your protection remains uncompromised.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Lock mechanism repairs and replacements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Hinge adjustments and reinforcement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Frame realignment and anchoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Rust treatment and powder coating touch-ups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Security upgrades for existing installations</span>
                    </li>
                  </ul>
                  <p className="text-sm text-primary font-semibold">Repair Costs: From R750 (24/7 emergency service available)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sandton Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Security Door Installation Across Sandton</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              We provide professional security door installation services throughout Sandton and surrounding affluent suburbs. Our mobile security team responds quickly with same-day assessments and installations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Sandton CBD", "Hyde Park", "Bryanston", "Morningside", "Sandhurst",
                "Atholl", "Illovo", "Rivonia", "Sunninghill", "Woodmead",
                "Paulshof", "Lonehill", "Dainfern", "Fourways", "Douglasdale",
                "Broadacres", "Buccleuch", "Beverley", "Hurlingham", "Craighall Park"
              ].map((area) => (
                <div key={area} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>

            <p className="text-center mt-8 text-muted-foreground">
              Securing properties across all Sandton suburbs. <Link href="/contact" className="text-primary font-semibold hover:underline">Contact us</Link> for a security assessment in your area.
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
                  <CardTitle>How much does security door installation cost in Sandton?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Security door installation in Sandton typically ranges from R4,500 to R15,000 depending on the type of door and security features. Steel security gates start at R4,500, slam-lock doors range from R6,500-R15,000, burglar bars cost R850-R2,500 per window, and complete home security packages with multiple doors and windows range from R25,000-R60,000. All installations include professional fitting and SABS-certified hardware.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Are your security doors insurance approved?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, all our security door installations meet SABS (South African Bureau of Standards) requirements and are approved by major South African insurance companies. We provide certification documentation for your insurance provider, which may qualify you for reduced premiums. Our installations comply with SANS 10427 standards for security gates and doors.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What's the difference between security gates and security doors?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Security gates are installed in front of existing doors, featuring steel bars with spaces between them for visibility and ventilation. They're ideal for main entrances where you want to see visitors before opening your main door. Security doors replace your existing door with a solid or mesh security door that provides complete barrier protection. Many Sandton homeowners use both: security gates at the front entrance and security doors at other entry points.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How long does security door installation take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Standard security gate or door installation takes 3-6 hours depending on complexity. Custom steel security doors require 1-2 weeks for manufacturing before installation. Complete home security installations with multiple doors and burglar bars typically take 1-2 days. We schedule installations at your convenience and minimize disruption to your daily routine.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can security doors be stylish?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Modern security doors have evolved significantly from the basic utilitarian designs of the past. We offer designer security gates with elegant patterns, laser-cut decorative panels, powder-coated finishes in any color to match your home, and slim-profile frames for a sleek contemporary look. Your Sandton home's security doesn't have to compromise its curb appeal.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What maintenance do security doors require?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Security doors require minimal maintenance. Lubricate lock mechanisms every 6 months with graphite powder or lock lubricant, check hinge tightness annually, clean powder-coated surfaces with mild soap and water, inspect welds and joints for any signs of stress or damage, and treat any rust spots immediately. Annual professional inspections ensure your security system remains at peak performance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Do you offer emergency security door services?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we provide 24/7 emergency security door services in Sandton. Whether you've experienced a break-in attempt, lock failure, or door damage, our emergency team responds quickly to secure your property. We carry common replacement parts and can perform temporary repairs immediately with permanent solutions installed within 24-48 hours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What warranty do you provide on security doors?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide comprehensive warranties on all security door installations: 10-year structural warranty on steel frames and bars, 5-year warranty on powder coating finish, 3-year warranty on locking mechanisms and hardware, 2-year warranty on installation workmanship, and lifetime support for maintenance advice and minor adjustments. We stand behind our work and use only premium quality materials.
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
              <Link href="/security-doors-johannesburg" className="p-4 border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">Security Doors Johannesburg</h3>
                <p className="text-sm text-muted-foreground">Security door installation across Johannesburg</p>
              </Link>
              <Link href="/pivot-doors" className="p-4 border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">Pivot Door Installation</h3>
                <p className="text-sm text-muted-foreground">Modern pivot doors for luxury entrances</p>
              </Link>
              <Link href="/barn-doors" className="p-4 border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">Barn Door Installation</h3>
                <p className="text-sm text-muted-foreground">Stylish sliding barn doors for interior spaces</p>
              </Link>
              <Link href="/french-doors" className="p-4 border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">French Door Installation</h3>
                <p className="text-sm text-muted-foreground">Elegant French doors for patios and gardens</p>
              </Link>
              <Link href="/door-installation" className="p-4 border rounded-lg hover:border-primary hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold mb-2">All Door Services</h3>
                <p className="text-sm text-muted-foreground">Complete range of door installation services</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Sandton Home Today</h2>
            <p className="text-xl mb-8 text-gray-200">
              Get your FREE security assessment and quote. Our security experts will evaluate your property and recommend the best protection solutions for your needs and budget.
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
              24/7 Emergency Service • SABS Certified • Insurance Approved • 10-Year Warranty
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
