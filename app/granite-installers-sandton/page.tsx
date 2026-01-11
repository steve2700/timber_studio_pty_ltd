import type { Metadata } from "next"
import Link from "next/link"
import { Wrench, CheckCircle, Clock, Shield, MapPin, Phone, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "★★★★★ Expert Granite Installers Sandton 2026 | #1 Professional Installation",
  description:
    "★★★★★ #1 professional granite installers in Sandton. Expert countertop installation, supply & fitting. Serving all Sandton suburbs. Free quotes. Call 067 601 4490!",
  openGraph: {
    title: "Expert Granite Installers Sandton | Professional Installation Services",
    description:
      "Professional granite installers in Sandton. Expert countertop installation, supply & fitting. Serving all Sandton suburbs. Free quotes.",
    url: "https://granitecarpentry.co.za/granite-installers-sandton",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/granite-installers-sandton",
  },
}

export default function GraniteInstallersSandtonPage() {
  const sandhurst = { name: "Sandhurst", href: "/areas/sandton" }
  const bryanston = { name: "Bryanston", href: "/areas/sandton" }
  const morningside = { name: "Morningside", href: "/areas/sandton" }
  const hydePark = { name: "Hyde Park", href: "/areas/sandton" }
  const illovo = { name: "Illovo", href: "/areas/sandton" }

  const services = [
    {
      title: "Kitchen Countertops",
      description: "Full kitchen granite installations with islands, peninsula countertops, and custom edges",
      features: ["Undermount sink integration", "Cooktop cutouts", "Waterfall edges", "Seamless joins"],
    },
    {
      title: "Bathroom Installations",
      description: "Master ensuite and guest bathroom vanity countertops with custom basin cutouts",
      features: ["Double basin installations", "Custom cutouts", "Shower benches", "Premium finishes"],
    },
    {
      title: "Commercial Projects",
      description: "Serving Sandton's business community with restaurant, office, and retail installations",
      features: ["Reception desks", "Restaurant counters", "Retail displays", "Corporate kitchens"],
    },
  ]

  const suburbs = [
    { name: "Sandton CBD", description: "Security estates and luxury apartments" },
    { name: "Bryanston", description: "All extensions and surrounding areas" },
    { name: "Morningside", description: "Morningside Manor and extensions" },
    { name: "Hyde Park", description: "Premium installations for high-end properties" },
    { name: "Illovo", description: "Sophisticated residential and commercial" },
    { name: "Rivonia", description: "Established residential area" },
  ]

  const graniteOptions = [
    { name: "Kashmir White", price: "R2,800/m²", style: "Contemporary bright spaces" },
    { name: "Absolute Black", price: "R3,200/m²", style: "Modern minimalist kitchens" },
    { name: "Tan Brown", price: "R2,900/m²", style: "Warm, versatile classic" },
    { name: "Blue Pearl", price: "R5,500/m²", style: "Luxury statement pieces" },
  ]

  const areaPages = [
    { name: "Alberton", href: "/areas/alberton" },
    { name: "Bedfordview", href: "/areas/bedfordview" },
    { name: "Benoni", href: "/areas/benoni" },
    { name: "Boksburg", href: "/areas/boksburg" },
    { name: "Carletonville", href: "/areas/carletonville" },
    { name: "Centurion", href: "/areas/centurion" },
    { name: "Edenvale", href: "/areas/edenvale" },
    { name: "Fourways", href: "/areas/fourways" },
    { name: "Germiston", href: "/areas/germiston" },
    { name: "Heidelberg", href: "/areas/heidelberg" },
    { name: "Johannesburg South", href: "/areas/johannesburg-south" },
    { name: "Johannesburg", href: "/areas/johannesburg" },
    { name: "Kempton Park", href: "/areas/kempton-park" },
    { name: "Krugersdorp", href: "/areas/krugersdorp" },
    { name: "Midrand", href: "/areas/midrand" },
    { name: "Nigel", href: "/areas/nigel" },
    { name: "Pretoria", href: "/areas/pretoria" },
    { name: "Randburg", href: "/areas/randburg" },
    { name: "Roodepoort", href: "/areas/roodepoort" },
    { name: "Sandton", href: "/areas/sandton" },
    { name: "Springs", href: "/areas/springs" },
    { name: "Vanderbijlpark", href: "/areas/vanderbijlpark" },
    { name: "Vereeniging", href: "/areas/vereeniging" },
    { name: "Westonaria", href: "/areas/westonaria" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Expert Granite Installers Serving Sandton & Surrounds
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Professional granite installation in Sandton, Bryanston, Morningside, Hyde Park & surrounding northern
              suburbs. Over 20 years of experience delivering premium countertop installations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" asChild className="text-lg px-8">
                <a href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <Link href="#contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Looking for trusted granite installers in Sandton? Granite Carpentry is Sandton's premier granite
              installation specialist, serving homeowners and businesses throughout Sandton, Bryanston, Morningside,
              Hyde Park, and surrounding northern suburbs. With over 20 years of experience installing granite
              countertops in Sandton homes, we're the local granite installation experts you can trust for quality
              workmanship, professional service, and stunning results.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Our certified granite installers specialize in precision countertop installation for Sandton
              properties—from luxury estates in Sandhurst to modern apartments in Sandton CBD, contemporary homes in
              Bryanston to family residences in Morningside. We understand Sandton's high standards and deliver granite
              installations that match the quality and sophistication expected in this premier area.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Granite Installation Services in Sandton</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-6 w-6 text-primary" />
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Suburbs We Serve */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Sandton Suburbs We Serve</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional granite installation services throughout all Sandton suburbs and neighboring areas
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {suburbs.map((suburb, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {suburb.name}
                  </CardTitle>
                  <CardDescription>{suburb.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Granite Installers?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>20+ Years Experience</CardTitle>
                <CardDescription>Hundreds of successful Sandton installations</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Certified Professionals</CardTitle>
                <CardDescription>Fully licensed and insured installers</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Fast Service</CardTitle>
                <CardDescription>Quick response times to Sandton properties</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Wrench className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Premium Quality</CardTitle>
                <CardDescription>Standards matching Sandton's prestige</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Installation Process</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Free Sandton Consultation</h3>
                <p className="text-muted-foreground">
                  We visit your property to discuss requirements, assess space, show samples, and provide detailed
                  quotes. Convenient scheduling for busy Sandton residents.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Granite Selection</h3>
                <p className="text-muted-foreground">
                  Visit our showroom or we bring samples to your Sandton home. Choose granite type, color, and finish
                  that complements your property's aesthetic.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Precision Templating</h3>
                <p className="text-muted-foreground">
                  Digital templating with laser-guided measurement captures every angle and curve. Mark exact locations
                  for sinks, cooktops, and features for perfect fit.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Fabrication</h3>
                <p className="text-muted-foreground">
                  Professional workshop cutting to exact specifications, creating cutouts for sinks and appliances,
                  finishing edges, and quality control inspection.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
                <p className="text-muted-foreground">
                  Arrive on time, protect your home thoroughly, install granite with precision, match seams expertly,
                  integrate appliances, apply sealer, and complete thorough cleanup. Most Sandton installations complete
                  in 4-6 hours.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                6
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Post-Installation Care</h3>
                <p className="text-muted-foreground">
                  Provide maintenance instructions, offer ongoing support and resealing services, backed by
                  comprehensive 5-year workmanship warranty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Transparent Pricing for Sandton Projects</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Competitive pricing with no hidden costs. All prices include supply and professional installation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {graniteOptions.map((granite, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{granite.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">{granite.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{granite.style}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="bg-background p-8 rounded-lg border">
            <h3 className="text-2xl font-bold mb-6">Typical Sandton Kitchen Projects</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-semibold">Medium kitchen (6-8m²)</span>
                <span className="text-xl font-bold text-primary">R20,000 - R40,000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-semibold">Large kitchen with island (10-12m²)</span>
                <span className="text-xl font-bold text-primary">R35,000 - R65,000</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-semibold">Luxury kitchen (15m²+)</span>
                <span className="text-xl font-bold text-primary">R60,000 - R100,000+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Granite Choices */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Popular Granite Choices for Sandton Homes</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Trending granite options for contemporary and luxury Sandton properties
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contemporary Sandton Kitchens</CardTitle>
                <CardDescription>Modern and minimalist styles</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <strong>Absolute Black:</strong> Pure, minimalist appeal for modern apartments
                  </li>
                  <li>
                    <strong>Kashmir White:</strong> Bright, spacious feel for open-plan kitchens
                  </li>
                  <li>
                    <strong>Steel Grey:</strong> Contemporary, sophisticated finish
                  </li>
                  <li>
                    <strong>Colonial White:</strong> Warm, inviting with subtle patterns
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Luxury Sandton Installations</CardTitle>
                <CardDescription>Premium exotic options</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <strong>Blue Pearl:</strong> Unique, statement-making for Sandhurst estates
                  </li>
                  <li>
                    <strong>Emerald Pearl:</strong> Sophisticated green shimmer
                  </li>
                  <li>
                    <strong>Black Cosmic:</strong> Dramatic gold veining for premium properties
                  </li>
                  <li>
                    <strong>Azul Aran:</strong> Striking blue patterns for luxury homes
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Estate & Security Complex Section */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Working in Sandton Estates & Security Complexes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Estate Access & Protocols</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Provide advance notice for security clearance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>All necessary documentation and insurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Respect estate rules and regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Minimize disruption to estate residents</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>High-Rise & Apartment Installations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Coordinate with building management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Use service elevators appropriately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Protect common areas during transport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Understanding parking and loading procedures</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Do you service all Sandton suburbs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Yes! We serve all of Sandton including Bryanston, Morningside, Hyde Park, Illovo, Sandhurst, Rivonia,
                  and surrounding areas with quick response times.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can you work in security estates?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Absolutely. We're experienced with Sandton estates and understand all security protocols. We'll
                  coordinate with estate security for smooth access and minimal disruption.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How quickly can you complete a Sandton installation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  From consultation to installation typically takes 2-3 weeks. The installation itself usually completes
                  in 4-6 hours for most standard kitchen projects.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What granite is most popular in Sandton?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Currently, white granites (Kashmir White, Colonial White) and black granites (Absolute Black, Steel
                  Grey) are trending in Sandton's contemporary homes. For luxury properties, Blue Pearl and Emerald
                  Pearl are popular choices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you remove old countertops?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Yes, we provide complete demolition and removal services as part of our installation package,
                  including proper disposal of old materials.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What warranty do you provide?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We provide a 5-year workmanship warranty on all installations, covering any installation-related
                  issues. This gives you complete peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Related Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link href="/granite-countertops" className="hover:text-primary">
                    Granite Countertops
                  </Link>
                </CardTitle>
                <CardDescription>Complete granite countertop services</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link href="/quartz-countertops" className="hover:text-primary">
                    Quartz Countertops
                  </Link>
                </CardTitle>
                <CardDescription>Alternative engineered stone options</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link href="/kitchen-cupboards" className="hover:text-primary">
                    Kitchen Cupboards
                  </Link>
                </CardTitle>
                <CardDescription>Custom kitchen cabinet solutions</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link href="/plumbing" className="hover:text-primary">
                    Plumbing Services
                  </Link>
                </CardTitle>
                <CardDescription>Complete plumbing installations</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">All Areas We Serve in Gauteng</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional granite installation services throughout Gauteng
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areaPages.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="flex items-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent hover:shadow-md transition-all group"
              >
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Your Sandton Granite Installers</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to transform your Sandton property with beautiful granite countertops?
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-primary-foreground text-primary">
              <CardHeader>
                <Phone className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Call Us</CardTitle>
                <CardDescription>
                  <a href="tel:0676014490" className="text-lg font-bold hover:underline">
                    067 601 4490
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-primary-foreground text-primary">
              <CardHeader>
                <Mail className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription>
                  <a href="mailto:info@granitecarpentry.co.za" className="hover:underline">
                    info@granitecarpentry.co.za
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-primary-foreground text-primary">
              <CardHeader>
                <Calendar className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Working Hours</CardTitle>
                <CardDescription>Mon-Sat: 8am-5pm</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8">
            <a href="tel:0676014490">Get Your Free Sandton Installation Quote</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
