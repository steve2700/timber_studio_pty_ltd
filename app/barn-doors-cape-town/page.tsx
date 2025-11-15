import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, Shield, Award, Hammer, Home, ArrowRight, DoorOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: "Barn Doors Cape Town 2025 | Rustic Sliding Door Experts | Free Quotes",
  description:
    "Premium barn door installation in Cape Town. Rustic & modern sliding barn doors for homes & offices. Professional installation, custom designs. Free quotes. Call 067 601 4490",
  keywords:
    "barn doors Cape Town, sliding barn doors Cape Town, barn door installation Cape Town, rustic doors Cape Town, interior barn doors Cape Town, custom barn doors Cape Town, barn door hardware Cape Town, sliding door installation Cape Town, barn door experts Cape Town, wooden barn doors Cape Town, modern barn doors Cape Town, barn door suppliers Cape Town, Cape Town barn doors 2025",
  openGraph: {
    title: "Barn Doors Cape Town 2025 | Rustic Sliding Door Experts",
    description:
      "Premium barn door installation in Cape Town. Rustic & modern sliding barn doors for homes & offices. Professional installation.",
    url: "https://granitecarpentry.co.za/barn-doors-cape-town",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/barn-doors-cape-town",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function BarnDoorsCapeTownPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="bg-amber-600 text-white mb-4">Cape Town's Barn Door Specialists</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Barn Door Installation in <span className="text-amber-400">Cape Town</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Transform your Cape Town home or office with stunning rustic and modern sliding barn doors. Professional
              installation, custom designs, and quality hardware. Serving the greater Cape Town area with expert barn
              door solutions since 2020.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="tel:+27676014490">Call 067 601 4490</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Free Consultations</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Custom Designs</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Professional Installation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>24-Month Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">5.0★</div>
              <div className="text-slate-600">Google Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">200+</div>
              <div className="text-slate-600">Doors Installed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">24</div>
              <div className="text-slate-600">Month Warranty</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Barn Door Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Complete Barn Door Solutions for Cape Town Homes
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From rustic farmhouse charm to sleek modern designs, we offer comprehensive barn door installation
              services tailored to Cape Town's unique aesthetic preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Rustic Barn Doors",
                description:
                  "Authentic farmhouse-style barn doors crafted from reclaimed wood or new timber with distressed finishes. Perfect for Cape Town's coastal and country homes.",
                price: "From R8,500",
                features: [
                  "Reclaimed wood options",
                  "Custom distressing",
                  "Traditional hardware",
                  "Natural wood finishes",
                ],
              },
              {
                title: "Modern Barn Doors",
                description:
                  "Contemporary sliding barn doors with clean lines and minimalist aesthetics. Ideal for Cape Town's modern apartments and office spaces.",
                price: "From R7,500",
                features: [
                  "Sleek modern designs",
                  "Glass panel options",
                  "Black matte hardware",
                  "Custom sizing",
                ],
              },
              {
                title: "Interior Barn Doors",
                description:
                  "Space-saving sliding barn doors for bedrooms, bathrooms, pantries, and closets throughout your Cape Town property.",
                price: "From R6,500",
                features: [
                  "Space-efficient design",
                  "Soft-close mechanisms",
                  "Various wood species",
                  "Privacy options",
                ],
              },
              {
                title: "Double Barn Doors",
                description:
                  "Impressive double barn door installations perfect for wide openings in Cape Town homes and commercial spaces.",
                price: "From R15,000",
                features: [
                  "Synchronized sliding",
                  "Heavy-duty hardware",
                  "Custom widths",
                  "Matching pair design",
                ],
              },
              {
                title: "Barn Door Hardware",
                description:
                  "Premium quality sliding hardware systems including tracks, rollers, and handles suitable for Cape Town's climate.",
                price: "From R2,500",
                features: [
                  "Rust-resistant materials",
                  "Smooth operation",
                  "Multiple finishes",
                  "Easy maintenance",
                ],
              },
              {
                title: "Custom Barn Doors",
                description:
                  "Bespoke barn door designs crafted to your exact specifications. Unique solutions for Cape Town's distinctive properties.",
                price: "Custom Quote",
                features: [
                  "Unique designs",
                  "Material selection",
                  "Color matching",
                  "Architectural integration",
                ],
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <DoorOpen className="h-8 w-8 text-amber-600" />
                    <Badge variant="secondary">{service.price}</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cape Town Areas Served */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Serving All Cape Town Areas</h2>
            <p className="text-xl text-slate-600">
              Professional barn door installation throughout greater Cape Town and surrounding suburbs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "City Bowl",
              "Sea Point",
              "Green Point",
              "Camps Bay",
              "Clifton",
              "Constantia",
              "Newlands",
              "Rondebosch",
              "Claremont",
              "Wynberg",
              "Bellville",
              "Durbanville",
              "Stellenbosch",
              "Somerset West",
              "Strand",
              "Hout Bay",
            ].map((area, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-white rounded-lg">
                <MapPin className="h-4 w-4 text-amber-600 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Cape Town Trusts Our Barn Door Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-amber-600" />,
                title: "Expert Craftsmanship",
                description: "15+ years of professional door installation experience serving Cape Town",
              },
              {
                icon: <Shield className="h-8 w-8 text-amber-600" />,
                title: "Quality Materials",
                description: "Premium wood and hardware that withstands Cape Town's coastal climate",
              },
              {
                icon: <Hammer className="h-8 w-8 text-amber-600" />,
                title: "Custom Solutions",
                description: "Bespoke barn doors designed specifically for your Cape Town property",
              },
              {
                icon: <Star className="h-8 w-8 text-amber-600" />,
                title: "5-Star Service",
                description: "Consistently rated 5 stars by Cape Town homeowners and businesses",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Barn Door Installation Process</h2>
            <p className="text-xl text-slate-600">Simple, transparent process from consultation to completion</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description:
                  "Visit your Cape Town property to assess the space, discuss design preferences, and take precise measurements",
              },
              {
                step: "02",
                title: "Design & Quote",
                description:
                  "Present custom barn door options with material samples and provide detailed, transparent pricing",
              },
              {
                step: "03",
                title: "Fabrication",
                description:
                  "Craft your custom barn door using premium materials and traditional/modern techniques as specified",
              },
              {
                step: "04",
                title: "Installation",
                description:
                  "Professional installation at your Cape Town property with quality finishing and complete cleanup",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-amber-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-8 w-8 text-amber-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions About Barn Doors in Cape Town
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "How much does barn door installation cost in Cape Town?",
                  a: "Barn door installation in Cape Town typically ranges from R6,500 to R18,000 depending on size, materials, and customization. Rustic barn doors start at R8,500, modern designs from R7,500, and custom solutions vary based on specifications. Contact us for a free quote tailored to your Cape Town project.",
                },
                {
                  q: "What barn door styles are popular in Cape Town?",
                  a: "Cape Town homeowners favor both rustic farmhouse-style barn doors with reclaimed wood finishes and sleek modern designs with glass panels. Coastal properties often choose weathered wood looks while urban apartments prefer contemporary black-framed glass barn doors. We customize designs to match Cape Town's diverse architectural styles.",
                },
                {
                  q: "Are barn doors suitable for Cape Town's coastal climate?",
                  a: "Yes, we use materials and finishes specifically selected for Cape Town's coastal conditions. Our barn doors feature rust-resistant hardware, properly sealed wood, and weather-appropriate treatments that prevent warping, corrosion, and moisture damage common in coastal areas.",
                },
                {
                  q: "How long does barn door installation take in Cape Town?",
                  a: "Standard barn door installation in Cape Town takes 4-6 hours for a single door and 6-8 hours for double doors. Custom barn doors require 2-3 weeks for fabrication plus installation time. We work efficiently to minimize disruption to your Cape Town home or business.",
                },
                {
                  q: "Do barn doors provide privacy and sound insulation?",
                  a: "Barn doors offer moderate privacy and limited sound insulation compared to traditional hinged doors. For bedrooms and bathrooms in Cape Town homes, we can add weather stripping and overlapping door designs to improve privacy. They're ideal for open-plan living areas common in Cape Town properties.",
                },
                {
                  q: "Can barn doors be installed in small Cape Town apartments?",
                  a: "Barn doors are space-efficient solutions perfect for Cape Town's compact apartments. They eliminate door swing space, making rooms feel larger. We design barn doors specifically for smaller spaces and can customize dimensions for Cape Town's modern apartment layouts.",
                },
                {
                  q: "What hardware finishes do you offer for Cape Town barn doors?",
                  a: "We offer multiple hardware finishes including black matte, brushed nickel, oil-rubbed bronze, and stainless steel. All hardware is rust-resistant and suitable for Cape Town's coastal environment. We help select finishes that complement your home's existing Cape Town interior design.",
                },
                {
                  q: "Do you provide barn door warranties in Cape Town?",
                  a: "Yes, all barn door installations in Cape Town include our comprehensive 24-month workmanship warranty and 12-month warranty on hardware and materials. We stand behind the quality of our work and use only premium components designed for Cape Town conditions.",
                },
                {
                  q: "Can barn doors be used for commercial spaces in Cape Town?",
                  a: "Yes, we install barn doors in Cape Town offices, restaurants, retail stores, and commercial properties. They add rustic charm or modern elegance while maximizing space efficiency. We offer heavy-duty hardware systems suitable for high-traffic commercial applications in Cape Town.",
                },
                {
                  q: "How do I maintain barn doors in Cape Town's climate?",
                  a: "Maintenance is minimal - simply wipe down with a damp cloth and check hardware annually. Cape Town's coastal humidity requires periodic inspection of wood finishes and hardware lubrication. We provide detailed maintenance guidelines specific to Cape Town's climate conditions.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore Our Other Door Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/door-installation" className="group">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <Home className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-amber-600">Door Installation</h3>
                  <p className="text-sm text-slate-600">Complete door installation services</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/pivot-doors" className="group">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <DoorOpen className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-amber-600">Pivot Doors</h3>
                  <p className="text-sm text-slate-600">Luxury pivot door installations</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/security-doors" className="group">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-amber-600">Security Doors</h3>
                  <p className="text-sm text-slate-600">High-security door solutions</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/french-doors" className="group">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <Home className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-amber-600">French Doors</h3>
                  <p className="text-sm text-slate-600">Elegant French door installations</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Install Your Barn Door in Cape Town?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your Cape Town property with beautiful barn doors. Get a free consultation and quote today. Expert
            installation, premium materials, 24-month warranty.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-slate-100">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get Free Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="tel:+27676014490">
                <Phone className="mr-2 h-5 w-5" />
                Call 067 601 4490
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Free Same-Day Quotes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>24-Month Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 fill-current" />
              <span>5-Star Rated Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Call Us</h3>
              <a href="tel:+27676014490" className="text-amber-400 hover:text-amber-300">
                067 601 4490
              </a>
            </div>
            <div>
              <Mail className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Email Us</h3>
              <a href="mailto:info@granitecarpentry.co.za" className="text-amber-400 hover:text-amber-300">
                info@granitecarpentry.co.za
              </a>
            </div>
            <div>
              <MapPin className="h-8 w-8 text-amber-400 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Service Area</h3>
              <p className="text-slate-300">All Cape Town & Surrounding Areas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
