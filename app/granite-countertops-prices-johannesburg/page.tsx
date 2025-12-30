import type { Metadata } from "next"
import Link from "next/link"
import { Wrench, CheckCircle, Clock, Shield, MapPin, Phone, Mail, Calendar, DollarSign, TrendingUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Granite Countertops Prices Johannesburg 2025 | Complete Pricing Guide & Costs",
  description:
    "Complete granite countertops pricing guide for Johannesburg 2025. Compare costs R2,500-R8,500/m². Real project examples, transparent quotes. Free consultation. Call 067 601 4490!",
  openGraph: {
    title: "Granite Countertops Prices Johannesburg 2025 | Complete Pricing Guide",
    description:
      "Complete granite pricing guide for Johannesburg. Compare costs, get accurate quotes, and understand what you'll pay for your kitchen renovation.",
    url: "https://granitecarpentry.co.za/granite-countertops-prices-johannesburg",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/granite-countertops-prices-johannesburg",
  },
}

export default function GraniteCountertopsPricesJohannesburgPage() {
  const priceRanges = [
    {
      category: "Budget-Friendly Options",
      range: "R2,500 - R3,200/m²",
      granites: [
        { name: "Kashmir White", price: "R2,800/m²", description: "Bright white with subtle grey veining" },
        { name: "Tan Brown", price: "R2,900/m²", description: "Warm brown tones with black specks" },
        { name: "New Venetian Gold", price: "R3,100/m²", description: "Golden beige with burgundy highlights" },
        { name: "Steel Grey", price: "R3,200/m²", description: "Contemporary grey with minimal pattern" },
      ],
    },
    {
      category: "Mid-Range Premium",
      range: "R3,500 - R4,800/m²",
      granites: [
        { name: "Absolute Black", price: "R3,800/m²", description: "Pure black, minimalist elegance" },
        { name: "Colonial White", price: "R3,600/m²", description: "Warm white with grey and burgundy" },
        { name: "Ubatuba", price: "R4,200/m²", description: "Dark green with gold flecks" },
        { name: "Santa Cecilia", price: "R4,500/m²", description: "Golden with burgundy and black" },
      ],
    },
    {
      category: "Luxury & Exotic",
      range: "R5,000 - R8,500/m²",
      granites: [
        { name: "Blue Pearl", price: "R5,500/m²", description: "Norwegian blue with silver shimmer" },
        { name: "Emerald Pearl", price: "R6,200/m²", description: "Deep green with metallic highlights" },
        { name: "Black Cosmic", price: "R7,800/m²", description: "Black with dramatic gold veining" },
        { name: "Azul Aran", price: "R8,500/m²", description: "Striking blue and white patterns" },
      ],
    },
  ]

  const projectCosts = [
    {
      project: "Small Kitchen (4-6m²)",
      budget: "R12,000 - R19,000",
      midRange: "R16,000 - R29,000",
      luxury: "R24,000 - R51,000",
      includes: ["Basic countertops", "Standard edges", "Single sink cutout"],
    },
    {
      project: "Medium Kitchen (8-10m²)",
      budget: "R24,000 - R32,000",
      midRange: "R32,000 - R48,000",
      luxury: "R48,000 - R85,000",
      includes: ["Full kitchen counters", "Undermount sink", "Cooktop cutouts", "Standard backsplash"],
    },
    {
      project: "Large Kitchen with Island (12-15m²)",
      budget: "R36,000 - R48,000",
      midRange: "R48,000 - R72,000",
      luxury: "R72,000 - R127,500",
      includes: ["Main counters + island", "Waterfall edges", "Multiple cutouts", "Premium finishes"],
    },
    {
      project: "Luxury Kitchen (18m²+)",
      budget: "R54,000 - R72,000",
      midRange: "R72,000 - R108,000",
      luxury: "R108,000 - R180,000+",
      includes: ["Full custom installation", "Multiple islands", "Luxury finishes", "Complex designs"],
    },
  ]

  const additionalCosts = [
    { service: "Edge Profiles (Bullnose, Ogee)", price: "R180 - R450/m" },
    { service: "Undermount Sink Cutout", price: "R850 - R1,500" },
    { service: "Cooktop/Hob Cutout", price: "R950 - R1,800" },
    { service: "Waterfall Edge (per side)", price: "R4,500 - R8,500" },
    { service: "Backsplash Installation", price: "R650 - R1,200/m" },
    { service: "Sealing (included with most)", price: "Included" },
    { service: "Old Countertop Removal", price: "R1,500 - R3,500" },
    { service: "Plumbing Disconnection/Reconnection", price: "R1,200 - R2,500" },
  ]

  const pricingFactors = [
    {
      title: "Granite Type & Origin",
      description: "Local granites cost less than imported. Brazilian and Norwegian stones command premium prices.",
      impact: "High Impact",
    },
    {
      title: "Thickness Selection",
      description: "Standard 20mm is most affordable. 30mm adds 40-50% to material costs but offers premium look.",
      impact: "Medium-High Impact",
    },
    {
      title: "Edge Complexity",
      description: "Simple eased edges are cheapest. Ogee, waterfall, and custom edges increase costs significantly.",
      impact: "Medium Impact",
    },
    {
      title: "Cutouts & Features",
      description: "Each sink, cooktop, or socket cutout adds to fabrication costs. Complex shapes cost more.",
      impact: "Medium Impact",
    },
    {
      title: "Installation Complexity",
      description: "Ground floor installations cost less. High-rise buildings, estates with access restrictions add costs.",
      impact: "Low-Medium Impact",
    },
    {
      title: "Total Square Meterage",
      description: "Larger projects often have better per-square-meter rates. Bulk discounts available over 15m².",
      impact: "Medium Impact",
    },
  ]

  const suburbs = [
    { name: "Sandton", avgPrice: "R3,800 - R7,200/m²", demand: "Very High" },
    { name: "Johannesburg North", avgPrice: "R3,200 - R5,500/m²", demand: "High" },
    { name: "Johannesburg South", avgPrice: "R2,900 - R4,800/m²", demand: "Medium-High" },
    { name: "Randburg", avgPrice: "R3,100 - R5,200/m²", demand: "High" },
    { name: "Roodepoort", avgPrice: "R2,800 - R4,500/m²", demand: "Medium" },
    { name: "Fourways", avgPrice: "R3,500 - R6,200/m²", demand: "Very High" },
  ]

  const savingTips = [
    "Choose local granite types like Rustenburg granites to save 30-40% vs imported",
    "Opt for 20mm thickness instead of 30mm to reduce material costs",
    "Select simple edge profiles - eased or pencil edges cost significantly less",
    "Bundle multiple rooms or properties together for volume discounts",
    "Plan installations during off-peak seasons (May-July) for potential discounts",
    "Use remnant pieces for smaller projects like bathroom vanities",
    "Minimize cutouts and complex shapes to reduce fabrication time",
    "Get multiple quotes but focus on value, not just lowest price",
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
              Granite Countertops Prices Johannesburg 2025
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Complete pricing guide for granite countertops in Johannesburg. Compare costs, get accurate quotes, and
              understand what you'll pay for your kitchen renovation project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" asChild className="text-lg px-8">
                <a href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <a href="#calculator">Calculate Your Price</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Price Overview */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Johannesburg Granite Prices at a Glance</h2>
            <p className="text-muted-foreground text-lg">
              Updated December 2025 - Supply & Professional Installation Included
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">R2,500-R3,200</div>
                <CardTitle>Budget-Friendly</CardTitle>
                <CardDescription>per square meter</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-primary">
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">R3,500-R4,800</div>
                <CardTitle>Mid-Range Premium</CardTitle>
                <CardDescription>per square meter</CardDescription>
                <div className="mt-3 text-sm font-medium text-primary">Most Popular</div>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">R5,000-R8,500</div>
                <CardTitle>Luxury & Exotic</CardTitle>
                <CardDescription>per square meter</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Price Breakdown */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Complete Granite Price Breakdown</h2>

          <div className="space-y-8">
            {priceRanges.map((range, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{range.category}</CardTitle>
                    <div className="text-xl font-bold text-primary">{range.range}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {range.granites.map((granite, idx) => (
                      <div key={idx} className="bg-muted/50 rounded-lg p-4 hover:bg-muted transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-semibold text-lg">{granite.name}</div>
                          <div className="font-bold text-primary">{granite.price}</div>
                        </div>
                        <div className="text-sm text-muted-foreground">{granite.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Cost Examples */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Typical Johannesburg Kitchen Project Costs
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Real-world examples showing total project costs including granite, fabrication, installation, and standard
            cutouts
          </p>

          <div className="space-y-6">
            {projectCosts.map((project, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{project.project}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="text-sm text-muted-foreground mb-1">Budget Range</div>
                      <div className="text-xl font-bold text-green-700">{project.budget}</div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="text-sm text-muted-foreground mb-1">Mid-Range</div>
                      <div className="text-xl font-bold text-blue-700">{project.midRange}</div>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <div className="text-sm text-muted-foreground mb-1">Luxury</div>
                      <div className="text-xl font-bold text-purple-700">{project.luxury}</div>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <strong>Typically Includes:</strong> {project.includes.join(", ")}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Costs */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Additional Services & Costs</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Beyond the base price per square meter, these services may add to your total project cost
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {additionalCosts.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="flex justify-between items-center p-4">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span className="font-medium">{item.service}</span>
                  </div>
                  <span className="font-bold text-primary">{item.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price Factors */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Affects Granite Countertop Prices?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingFactors.map((factor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-lg">{factor.title}</CardTitle>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        factor.impact.includes("High")
                          ? "bg-red-100 text-red-700"
                          : factor.impact.includes("Medium")
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                      }`}
                    >
                      {factor.impact}
                    </span>
                  </div>
                  <CardDescription>{factor.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Price Variations */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Johannesburg Area Price Variations</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Average granite prices vary slightly across Johannesburg suburbs based on demand and property values
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suburbs.map((suburb, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="font-bold">{suburb.name}</h3>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        suburb.demand === "Very High"
                          ? "bg-red-100 text-red-700"
                          : suburb.demand === "High"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {suburb.demand}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-primary">{suburb.avgPrice}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Money-Saving Tips */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How to Save Money on Granite Countertops
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {savingTips.map((tip, index) => (
              <div
                key={index}
                className="bg-card border border-green-200 rounded-lg p-4 flex items-start gap-3 hover:shadow-md transition-shadow"
              >
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Get Your Quote From Us?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Transparent Pricing</CardTitle>
                <CardDescription>No hidden costs. Detailed quotes upfront</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>20+ Years Experience</CardTitle>
                <CardDescription>Thousands of successful installations</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Competitive Rates</CardTitle>
                <CardDescription>Best value in Johannesburg</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Quick Turnaround</CardTitle>
                <CardDescription>Most projects done in 2-3 weeks</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing Questions Answered</h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>How much does granite cost per square meter in Johannesburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Granite prices range from R2,500/m² for budget options like Kashmir White, to R8,500/m² for exotic
                  stones like Azul Aran. Mid-range options like Absolute Black average R3,800/m². All prices include
                  supply and professional installation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's the average cost for a kitchen granite installation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A typical medium kitchen (8-10m²) costs R24,000-R48,000 depending on granite choice. Small kitchens
                  (4-6m²) range R12,000-R29,000, while large kitchens with islands (12-15m²) cost R36,000-R127,500.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Are there cheaper alternatives to granite?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Quartz countertops offer similar pricing (R2,800-R6,500/m²) with lower maintenance. Laminate is
                  significantly cheaper but less durable. For natural stone beauty and durability, granite offers
                  excellent value.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer payment plans?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer flexible payment options. Typically 50% deposit to order materials, balance on
                  completion. We can discuss customized payment plans for larger projects. Call 067 601 4490 to discuss
                  options.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How accurate are online price estimates?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Online estimates provide ballpark figures. For accurate pricing, we need to assess your space, measure
                  dimensions, discuss granite preferences, and understand specific requirements like cutouts and edge
                  profiles. We offer free on-site quotes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's included in your quoted prices?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our quotes include granite supply, professional fabrication, templating, installation, standard edges,
                  sealing, and cleanup. Additional costs may apply for waterfall edges, multiple cutouts, or old
                  countertop removal if required.
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

      {/* Call to Action */}
      <section id="calculator" className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Exact Granite Price Quote Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Free on-site consultation and detailed quote. No obligation. Serving all Johannesburg suburbs.
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
                  <a href="mailto:info@granitecarpentry.co.za" className="hover:underline text-sm">
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
            <a href="tel:0676014490">Get Your Free Quote Now</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
