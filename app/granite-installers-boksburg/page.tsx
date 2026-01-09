import type { Metadata } from "next"
import Link from "next/link"
import { Wrench, CheckCircle, Clock, Shield, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "★★★★★ Expert Granite Installers Boksburg 2026 | #1 Professional Installation",
  description:
    "★★★★★ #1 professional granite installers in Boksburg. Expert countertop installation, supply & fitting. Serving all Boksburg suburbs. Free quotes. Call 067 601 4490!",
  openGraph: {
    title: "Expert Granite Installers Boksburg | Professional Installation Services",
    description:
      "Professional granite installers in Boksburg. Expert countertop installation, supply & fitting. Serving all Boksburg suburbs. Free quotes.",
    url: "https://granitecarpentry.co.za/granite-installers-boksburg",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/granite-installers-boksburg",
  },
}

export default function GraniteInstallersBoksburgPage() {
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
      description: "Serving Boksburg's business community with restaurant, office, and retail installations",
      features: ["Reception desks", "Restaurant counters", "Retail displays", "Corporate kitchens"],
    },
  ]

  const suburbs = [
    { name: "Boksburg Central", description: "Residential and commercial properties" },
    { name: "Bartlett", description: "Established family homes" },
    { name: "Beyers Park", description: "Growing suburban developments" },
    { name: "Comet", description: "Industrial and residential mix" },
    { name: "Witfield", description: "Modern townhouses and estates" },
    { name: "Parkdene", description: "Peaceful residential area" },
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
              Expert Granite Installers Serving Boksburg & Surrounds
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Professional granite installation in Boksburg, Bartlett, Beyers Park, Witfield & surrounding East Rand
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
              Looking for trusted granite installers in Boksburg? Granite Carpentry is Boksburg's premier granite
              installation specialist, serving homeowners and businesses throughout Boksburg, Bartlett, Beyers Park,
              Witfield, and surrounding East Rand suburbs. With over 20 years of experience installing granite
              countertops in Boksburg homes, we're the local granite installation experts you can trust for quality
              workmanship, professional service, and stunning results.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Our certified granite installers specialize in precision countertop installation for Boksburg
              properties—from modern estates to family homes. We understand Boksburg's community values and deliver
              granite installations that match the quality and craftsmanship expected in this established East Rand
              area.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Granite Installation Services in Boksburg
          </h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Boksburg Suburbs We Serve</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional granite installation services throughout all Boksburg suburbs and neighboring East Rand areas
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
                <CardDescription>Hundreds of successful Boksburg installations</CardDescription>
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
                <CardDescription>Quick response times to Boksburg properties</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Wrench className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Premium Quality</CardTitle>
                <CardDescription>Outstanding craftsmanship guaranteed</CardDescription>
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
                <h3 className="text-xl font-bold mb-2">Free Boksburg Consultation</h3>
                <p className="text-muted-foreground">
                  We visit your property to discuss requirements, assess space, show samples, and provide detailed
                  quotes. Convenient scheduling for busy Boksburg residents.
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
                  Visit our showroom or we bring samples to your Boksburg home. Choose granite type, color, and finish
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
                  integrate appliances, apply sealer, and complete thorough cleanup. Most Boksburg installations
                  complete in 4-6 hours.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Transparent Pricing for Boksburg Projects</h2>
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
            <h3 className="text-2xl font-bold mb-6">Typical Boksburg Kitchen Projects</h3>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Popular Granite Choices for Boksburg Homes
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Trending granite options for contemporary Boksburg properties
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contemporary Boksburg Kitchens</CardTitle>
                <CardDescription>Modern and functional styles</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <strong>Absolute Black:</strong> Clean, minimalist appeal
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
                <CardTitle>Popular Boksburg Installations</CardTitle>
                <CardDescription>Most requested options</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <strong>Tan Brown:</strong> Warm, versatile for family homes
                  </li>
                  <li>
                    <strong>Black Impala:</strong> Timeless elegance
                  </li>
                  <li>
                    <strong>River White:</strong> Soft patterns for inviting spaces
                  </li>
                  <li>
                    <strong>Verde Peacock:</strong> Natural green accents
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">All Areas We Serve</h2>
          <p className="text-center text-muted-foreground mb-12">
            Professional granite installation services throughout Gauteng
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areaPages.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="flex items-center gap-2 p-4 rounded-lg border bg-background hover:bg-muted/50 hover:shadow-md transition-all group"
              >
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How long does granite installation take in Boksburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most Boksburg installations complete in 4-6 hours for a standard kitchen. Larger projects or multiple
                  rooms may take longer. We schedule installations at your convenience to minimize disruption.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you provide free quotes in Boksburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We offer free, no-obligation quotes throughout Boksburg and surrounding areas. We'll visit your
                  property, take measurements, show samples, and provide detailed pricing with no hidden costs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What granite colors are popular in Boksburg homes?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Boksburg homeowners favor Kashmir White, Absolute Black, and Tan Brown for their versatility and
                  timeless appeal. We also install exotic options like Blue Pearl for statement pieces.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Is granite suitable for Boksburg's climate?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Granite is ideal for Boksburg's climate. It's heat-resistant, durable, and maintains its beauty in all
                  weather conditions. Proper sealing ensures longevity and easy maintenance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you offer warranties on Boksburg installations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We provide a comprehensive 5-year workmanship warranty on all Boksburg installations. The granite
                  itself comes with manufacturer warranties, and we offer ongoing maintenance support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Boksburg Kitchen?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact Boksburg's trusted granite installers today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="text-lg px-8">
              <a href="tel:0676014490">
                <Phone className="mr-2 h-5 w-5" />
                Call 067 601 4490
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
              <a href="mailto:info@granitecarpentry.co.za">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
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
                  <Link href="/granite-countertops" className="hover:text-primary transition-colors">
                    Granite Countertops
                  </Link>
                </CardTitle>
                <CardDescription>Premium granite supply and installation</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link href="/quartz-countertops" className="hover:text-primary transition-colors">
                    Quartz Countertops
                  </Link>
                </CardTitle>
                <CardDescription>Engineered quartz alternatives</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link href="/kitchen-cupboards" className="hover:text-primary transition-colors">
                    Kitchen Cupboards
                  </Link>
                </CardTitle>
                <CardDescription>Custom kitchen cabinet solutions</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link href="/bathroom-renovations" className="hover:text-primary transition-colors">
                    Bathroom Renovations
                  </Link>
                </CardTitle>
                <CardDescription>Complete bathroom transformations</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
