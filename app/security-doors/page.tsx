import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, MapPin, Clock, Shield, Lock, Eye, CheckCircle2, Star, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Security Door Installation Johannesburg & Pretoria | Expert Installers 2025',
  description: 'Professional security door installation services in Johannesburg, Pretoria, and Gauteng. Steel security doors, burglar bars, and access control. Get a free quote today!',
  keywords: 'security doors johannesburg, security door installation pretoria, steel security doors, burglar bars, home security doors, commercial security doors, security gate installation',
  openGraph: {
    title: 'Security Door Installation Johannesburg & Pretoria | Expert Installers 2025',
    description: 'Professional security door installation services in Johannesburg, Pretoria, and Gauteng. Steel security doors, burglar bars, and access control.',
    type: 'website',
  },
}

export default function SecurityDoorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="h-4 w-4" />
              Premium Security Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional Security Door Installation in Johannesburg & Pretoria
            </h1>
            <p className="text-xl text-gray-300 mb-8 text-pretty">
              Protect your home or business with high-quality steel security doors, burglar bars, and advanced access control systems. Expert installation across Gauteng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Call 067 601 4490
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
                Get Free Security Assessment
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
              <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Security Installations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Guaranteed</div>
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
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Security Door Installation Services?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Home and business security is paramount in South Africa. At Granite Carpentry, we specialize in professional security door installation that combines maximum protection with aesthetic appeal. Our expert team has installed over 500 security solutions across Johannesburg, Pretoria, Sandton, and surrounding areas, helping property owners secure their premises against break-ins and unauthorized access.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We understand that security doors are not just about protection—they're your first line of defense and a critical investment in your property's safety. That's why we only work with premium-grade steel, reinforced frames, and certified locking mechanisms that meet SABS standards. Every installation is completed by PSIRA-registered professionals who understand local security challenges and best practices.
              </p>
            </div>

            {/* Security Door Types */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Security Door Solutions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Shield className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Steel Security Doors</h3>
                  <p className="text-gray-600 mb-4">
                    Heavy-duty steel construction with reinforced frames, multi-point locking systems, and anti-lift hinges. Perfect for main entrances and high-risk areas.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>16-gauge steel construction minimum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Multi-point deadbolt locking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Powder-coated finish options</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Lock className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Burglar Bars & Gates</h3>
                  <p className="text-gray-600 mb-4">
                    Custom-designed burglar bars and security gates for windows, patios, and balconies. Aesthetically pleasing designs that don't compromise security.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Solid steel bar construction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Custom spacing and designs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Quick-release emergency mechanisms</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Eye className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Access Control Systems</h3>
                  <p className="text-gray-600 mb-4">
                    Modern biometric, card, and keypad access control integrated with your security doors. Perfect for commercial properties and high-security residential estates.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Fingerprint and facial recognition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Remote monitoring capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Audit trail and logging</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <Shield className="h-12 w-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">Commercial Security Doors</h3>
                  <p className="text-gray-600 mb-4">
                    Heavy-duty security solutions for retail stores, offices, warehouses, and industrial facilities. Fire-rated options available for compliance.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>SABS-approved fire ratings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Panic bar emergency exits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Insurance-compliant installations</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mb-12 bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Security Door Installation Pricing 2025</h2>
              <p className="text-center text-gray-600 mb-8">Transparent pricing with no hidden fees. All installations include professional fitting and 5-year warranty.</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Card className="p-6 text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">R 4,500 - R 7,500</div>
                  <div className="font-semibold mb-2">Standard Steel Door</div>
                  <div className="text-sm text-gray-600">Single residential entrance, standard size, basic lock</div>
                </Card>
                <Card className="p-6 text-center border-2 border-red-600">
                  <div className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded-full mb-2">Most Popular</div>
                  <div className="text-2xl font-bold text-red-600 mb-2">R 8,000 - R 12,500</div>
                  <div className="font-semibold mb-2">Premium Security Door</div>
                  <div className="text-sm text-gray-600">Reinforced frame, multi-point lock, decorative design</div>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">R 15,000 - R 25,000</div>
                  <div className="font-semibold mb-2">Commercial/High-Security</div>
                  <div className="text-sm text-gray-600">Fire-rated, access control, custom specifications</div>
                </Card>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold mb-4">Additional Security Options:</h3>
                <ul className="grid md:grid-cols-2 gap-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Burglar Bars (per window): R 1,200 - R 2,500</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Security Gate: R 3,500 - R 6,500</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Access Control System: R 8,500 - R 15,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Security Camera Integration: R 5,000 - R 12,000</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Installation Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Professional Installation Process</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Security Assessment & Consultation</h3>
                      <p className="text-gray-600">
                        We start with a comprehensive on-site security assessment. Our experts evaluate entry points, identify vulnerabilities, and recommend the most effective security door solutions based on your property's specific needs, local crime statistics, and your budget. We discuss SABS requirements, insurance compliance, and integration with existing security systems.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Custom Design & Material Selection</h3>
                      <p className="text-gray-600">
                        Based on the assessment, we design a security solution that balances maximum protection with aesthetic appeal. Choose from various steel grades, powder-coated colors, decorative patterns, and locking mechanisms. We provide detailed quotations with no hidden fees and explain the security rating of each option.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Manufacturing & Preparation</h3>
                      <p className="text-gray-600">
                        Your security door is custom-manufactured to exact specifications using premium-grade steel. All components are pre-fitted and tested in our workshop before installation. We prepare reinforced frames, multi-point locks, and anti-lift hinges. Quality control checks ensure every component meets our strict standards.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
                      <p className="text-gray-600">
                        Our PSIRA-registered technicians arrive on schedule with all necessary tools and materials. We reinforce the door frame, install the security door with precision alignment, fit high-security locks, and ensure smooth operation. All work is completed to SABS standards with minimal disruption to your property.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Testing & Handover</h3>
                      <p className="text-gray-600">
                        Before completion, we conduct rigorous testing of all locks, hinges, and mechanisms. You receive a complete demonstration of proper operation, maintenance requirements, and emergency procedures. We provide warranty documentation, spare keys, and 24/7 emergency contact information for your peace of mind.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mb-12 bg-red-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Security Door Installation Areas We Cover</h2>
              <p className="text-center text-gray-700 mb-8">
                Professional security solutions across Gauteng. Same-day emergency response available in most areas.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <Link href="/areas/johannesburg" className="text-gray-700 hover:text-red-600">Johannesburg Central</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <Link href="/areas/sandton" className="text-gray-700 hover:text-red-600">Sandton</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <Link href="/areas/pretoria" className="text-gray-700 hover:text-red-600">Pretoria</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <Link href="/areas/randburg" className="text-gray-700 hover:text-red-600">Randburg</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <Link href="/areas/roodepoort" className="text-gray-700 hover:text-red-600">Roodepoort</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <Link href="/areas/midrand" className="text-gray-700 hover:text-red-600">Midrand</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <Link href="/areas/centurion" className="text-gray-700 hover:text-red-600">Centurion</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <Link href="/areas/benoni" className="text-gray-700 hover:text-red-600">Benoni</Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <Link href="/areas/boksburg" className="text-gray-700 hover:text-red-600">Boksburg</Link>
                </div>
              </div>
            </div>

            {/* Related Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Complete Security Solutions</h2>
              <p className="text-gray-700 mb-6">
                Enhance your property's security with our comprehensive range of door installation and security services:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/door-installation" className="block p-4 border rounded-lg hover:border-red-600 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold group-hover:text-red-600">Door Installation Services</h3>
                      <p className="text-sm text-gray-600">All types of door installations</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-red-600" />
                  </div>
                </Link>
                <Link href="/pivot-doors" className="block p-4 border rounded-lg hover:border-red-600 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold group-hover:text-red-600">Pivot Door Installation</h3>
                      <p className="text-sm text-gray-600">Modern architectural doors</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-red-600" />
                  </div>
                </Link>
                <Link href="/barn-doors" className="block p-4 border rounded-lg hover:border-red-600 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold group-hover:text-red-600">Barn Door Installation</h3>
                      <p className="text-sm text-gray-600">Sliding barn doors</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-red-600" />
                  </div>
                </Link>
                <Link href="/french-doors" className="block p-4 border rounded-lg hover:border-red-600 hover:shadow-md transition-all group">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold group-hover:text-red-600">French Door Installation</h3>
                      <p className="text-sm text-gray-600">Classic double doors</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-red-600" />
                  </div>
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Security Door Installation FAQs</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">How long does security door installation take?</h3>
                  <p className="text-gray-600">
                    Most residential security door installations are completed in 3-4 hours. This includes removing the old door (if applicable), reinforcing the frame, installing the new security door, and testing all mechanisms. Commercial installations or complex access control systems may take 1-2 days depending on specifications.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">Are your security doors SABS approved?</h3>
                  <p className="text-gray-600">
                    Yes, all our security doors meet SABS standards and are manufactured using certified materials. We provide full documentation for insurance purposes. Our commercial security doors can be supplied with fire ratings (30, 60, or 120 minutes) as required by building regulations.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">What's the difference between security doors and burglar bars?</h3>
                  <p className="text-gray-600">
                    Security doors provide a solid barrier at entry points with reinforced frames and multi-point locks, while burglar bars are typically installed over windows and offer visual deterrence. We often recommend a combination: security doors for main entrances and burglar bars for windows to create comprehensive perimeter security.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">Can security doors be customized to match my home's style?</h3>
                  <p className="text-gray-600">
                    We offer various designs, colors, and finishes. Choose from modern minimalist styles, decorative laser-cut patterns, or traditional wrought-iron looks. All designs maintain maximum security while complementing your property's aesthetic. Powder-coated finishes are available in any RAL color.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">Do you install access control systems with security doors?</h3>
                  <p className="text-gray-600">
                    Yes, we integrate modern access control systems including biometric scanners, proximity cards, keypads, and intercoms. These can be connected to your security door for keyless entry, audit trails, and remote monitoring. Perfect for businesses, estates, and high-security residential properties.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">What warranty do you offer on security door installations?</h3>
                  <p className="text-gray-600">
                    All our security door installations come with a comprehensive 5-year warranty covering materials, workmanship, and mechanisms. Locks are covered for 2 years. We also offer optional extended warranty packages and maintenance contracts for commercial installations requiring regular service.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">Can you install security doors for apartments and complexes?</h3>
                  <p className="text-gray-600">
                    Yes, we work with body corporates and property managers to install security doors throughout apartment buildings. We coordinate with complex management to meet architectural guidelines while ensuring maximum security. Bulk installations qualify for special pricing.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">How do I maintain my security door?</h3>
                  <p className="text-gray-600">
                    Security doors require minimal maintenance. We recommend lubricating hinges and locks every 6 months, cleaning with mild soap and water, and checking for any loose screws or signs of wear. We offer annual maintenance service packages for commercial installations to ensure optimal performance.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">Do you offer emergency security door installation?</h3>
                  <p className="text-gray-600">
                    Yes, we provide 24/7 emergency security door services for break-ins or damaged doors. We can secure your property immediately with temporary solutions and schedule permanent installations within 48 hours. Call 067 601 4490 anytime for emergency assistance.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">What's the best security door for high-crime areas?</h3>
                  <p className="text-gray-600">
                    For high-risk areas, we recommend 16-gauge steel doors with reinforced frames, multi-point deadbolts, anti-jimmy plates, and security hinges. Add a peephole camera or video intercom for visual verification before opening. We assess your specific location and threat level to recommend the most appropriate solution.
                  </p>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Protect Your Property with Professional Security Doors
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Don't compromise on security. Get expert security door installation from Gauteng's trusted specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call 067 601 4490 Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              Get Free Security Assessment
            </Button>
          </div>
          <p className="mt-6 text-red-100 text-sm">
            <Clock className="inline h-4 w-4 mr-1" />
            24/7 Emergency Service Available | Free Quotes | 5-Year Warranty
          </p>
        </div>
      </section>

    </div>
  )
}
