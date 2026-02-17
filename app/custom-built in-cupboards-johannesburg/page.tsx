import type { Metadata } from "next"
import Link from "next/link"
import {
  Wrench,
  CheckCircle,
  Clock,
  Shield,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Star,
  Ruler,
  Layers,
  Home,
  Award,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Custom Built-In Cupboards Johannesburg 2026 | Bespoke Storage Solutions",
  description:
    "Premium custom built-in cupboards in Johannesburg. Bespoke bedroom, kitchen & living room cupboards designed & installed to your exact specs. From R4,500/m. Call 067 601 4490!",
  openGraph: {
    title: "Custom Built-In Cupboards Johannesburg | Bespoke Carpentry",
    description:
      "Bespoke built-in cupboard solutions for Johannesburg homes. Custom-designed, professionally installed. Free consultation and design service.",
    url: "https://granitecarpentry.co.za/custom-built-in-cupboards-johannesburg",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/custom-built-in-cupboards-johannesburg",
  },
}

export default function CustomBuiltInCupboardsJohannesburgPage() {
  const cupboardTypes = [
    {
      type: "Bedroom Built-In Cupboards",
      description:
        "Floor-to-ceiling custom wardrobes with hanging rails, shelving, drawers, and shoe racks designed around your bedroom dimensions.",
      timeline: "2-3 weeks",
      startingPrice: "R4,500/m",
      popular: true,
    },
    {
      type: "Kitchen Built-In Cupboards",
      description:
        "Custom kitchen cabinetry with pull-out drawers, soft-close hinges, integrated lighting, and your choice of finishes.",
      timeline: "3-4 weeks",
      startingPrice: "R5,200/m",
      popular: true,
    },
    {
      type: "Living Room Wall Units",
      description:
        "Bespoke entertainment units, display shelving, and storage walls built to maximize your living space.",
      timeline: "2-3 weeks",
      startingPrice: "R4,800/m",
      popular: false,
    },
    {
      type: "Home Office Built-Ins",
      description:
        "Functional built-in desks, filing cupboards, and shelving systems designed for productivity and style.",
      timeline: "1-2 weeks",
      startingPrice: "R4,200/m",
      popular: false,
    },
    {
      type: "Bathroom Vanity Units",
      description:
        "Custom-built vanity cupboards with moisture-resistant materials, fitted around your plumbing layout.",
      timeline: "1-2 weeks",
      startingPrice: "R5,500/m",
      popular: false,
    },
    {
      type: "Garage & Utility Cupboards",
      description:
        "Heavy-duty built-in storage solutions for garages, laundry rooms, and utility spaces.",
      timeline: "1-2 weeks",
      startingPrice: "R3,800/m",
      popular: false,
    },
  ]

  const materials = [
    {
      name: "Melamine Board",
      priceRange: "R4,500 - R6,500/m",
      durability: "High",
      finish: "Matt or Gloss",
      bestFor: "Bedrooms, General Storage",
      description:
        "Most popular choice. Durable, easy to clean, available in hundreds of colours and wood grains.",
    },
    {
      name: "MDF (Painted)",
      priceRange: "R5,000 - R7,500/m",
      durability: "Medium-High",
      finish: "Custom Painted",
      bestFor: "Living Rooms, Feature Units",
      description:
        "Smooth, paint-ready surface. Ideal for custom colours and a high-end painted look.",
    },
    {
      name: "Solid Wood",
      priceRange: "R8,500 - R16,000/m",
      durability: "Very High",
      finish: "Natural, Stained, Painted",
      bestFor: "Luxury Bedrooms, Studies",
      description:
        "Premium natural wood for a timeless, high-end finish. Meranti, Pine, or Hardwoods available.",
    },
    {
      name: "Plywood (Commercial Grade)",
      priceRange: "R6,000 - R9,000/m",
      durability: "Very High",
      finish: "Veneered or Painted",
      bestFor: "Kitchens, High-Use Areas",
      description:
        "Stronger than particle board. Superior for areas needing high strength and moisture resistance.",
    },
  ]

  const projectCosts = [
    {
      project: "Single Bedroom Wall (2-3m)",
      budget: "R9,000 - R18,000",
      midRange: "R18,000 - R28,000",
      luxury: "R28,000 - R48,000",
      includes: ["Basic shelving & rails", "Standard doors", "Simple handles"],
    },
    {
      project: "Full Bedroom Surround (4-6m)",
      budget: "R18,000 - R35,000",
      midRange: "R35,000 - R60,000",
      luxury: "R60,000 - R96,000",
      includes: ["Floor-to-ceiling coverage", "Drawers + rails + shelves", "Soft-close doors"],
    },
    {
      project: "Full Kitchen Cabinetry (10-14m)",
      budget: "R52,000 - R78,000",
      midRange: "R78,000 - R120,000",
      luxury: "R120,000 - R224,000",
      includes: ["Upper & lower cabinets", "Pull-out drawers", "Soft-close hardware", "Integrated lighting"],
    },
    {
      project: "Living Room Wall Unit (3-5m)",
      budget: "R14,400 - R32,000",
      midRange: "R32,000 - R55,000",
      luxury: "R55,000 - R80,000",
      includes: ["TV unit + shelving", "Display cabinets", "Hidden storage"],
    },
  ]

  const designProcess = [
    {
      step: "01",
      title: "Free In-Home Consultation",
      description:
        "We visit your home to measure the space, understand your storage needs, and discuss your style preferences. No obligation.",
      duration: "1-2 hours",
    },
    {
      step: "02",
      title: "Custom Design & Quote",
      description:
        "We create a detailed design with layout drawings, material options, and a fully itemized quote. We revise until you're 100% happy.",
      duration: "3-5 days",
    },
    {
      step: "03",
      title: "Material Selection",
      description:
        "Choose your finishes, door styles, handles, and internal fittings. We bring samples to you so you can see materials in your space.",
      duration: "1-2 days",
    },
    {
      step: "04",
      title: "Manufacturing",
      description:
        "Your cupboards are precision-cut and prepared in our workshop for a perfect, ready-to-install fit.",
      duration: "1-2 weeks",
    },
    {
      step: "05",
      title: "Professional Installation",
      description:
        "Our skilled carpenters install your cupboards with precision. Full clean-up included. Most bedrooms completed in 1 day.",
      duration: "1-3 days",
    },
    {
      step: "06",
      title: "Final Inspection & Handover",
      description:
        "We walk through every detail with you, make any adjustments, and only sign off when you're completely satisfied.",
      duration: "1-2 hours",
    },
  ]

  const internalFeatures = [
    { feature: "Hanging Rails (Single & Double)", included: "Standard" },
    { feature: "Adjustable Shelving", included: "Standard" },
    { feature: "Shoe Racks", included: "Add-On" },
    { feature: "Pull-Out Drawers", included: "Add-On" },
    { feature: "Soft-Close Hinges", included: "Add-On" },
    { feature: "Soft-Close Drawer Runners", included: "Add-On" },
    { feature: "Built-In LED Strip Lighting", included: "Add-On" },
    { feature: "Motion Sensor Lights", included: "Add-On" },
    { feature: "Mirror Panels on Doors", included: "Add-On" },
    { feature: "Tie & Belt Racks", included: "Add-On" },
    { feature: "Pull-Out Laundry Baskets", included: "Add-On" },
    { feature: "Safe Compartment", included: "Add-On" },
  ]

  const doorStyles = [
    { style: "Sliding Doors", description: "Space-saving, ideal for smaller rooms", priceImpact: "Standard" },
    { style: "Hinged Doors", description: "Classic look, full access to contents", priceImpact: "Standard" },
    { style: "Frameless Doors", description: "Modern, seamless appearance", priceImpact: "+15-20%" },
    { style: "Frosted Glass Inserts", description: "Stylish, lets light through", priceImpact: "+20-30%" },
    { style: "Mirror Doors", description: "Space-enhancing, dual purpose", priceImpact: "+25-35%" },
    { style: "Louvre Doors", description: "Ventilated, ideal for linen", priceImpact: "+10-20%" },
  ]

  const suburbs = [
    { name: "Sandton", speciality: "Luxury Walk-In Wardrobes", demand: "Very High" },
    { name: "Fourways", speciality: "Modern Bedroom Built-Ins", demand: "High" },
    { name: "Randburg", speciality: "Full Kitchen Cabinetry", demand: "High" },
    { name: "Pretoria East", speciality: "Home Office Built-Ins", demand: "High" },
    { name: "Centurion", speciality: "Bedroom & Living Units", demand: "High" },
    { name: "Midrand", speciality: "Contemporary Designs", demand: "Medium-High" },
  ]

  const relatedServices = [
    { name: "Built-In Cupboards", href: "/built-in-cupboards" },
    { name: "Kitchen Cupboards", href: "/kitchen-cupboards" },
    { name: "Kitchen Renovations", href: "/kitchen-renovations" },
    { name: "Bathroom Renovations", href: "/bathroom-renovations" },
    { name: "Drywall & Ceilings", href: "/drywall-ceilings" },
    { name: "Decking & Flooring", href: "/decking-flooring" },
    { name: "Kitchen Renovation Cost Johannesburg", href: "/kitchen-renovation-cost-johannesburg" },
    { name: "Door Installation", href: "/door-installation" },
  ]

  const areaPages = [
    { name: "Sandton", href: "/areas/sandton" },
    { name: "Johannesburg", href: "/areas/johannesburg" },
    { name: "Johannesburg South", href: "/areas/johannesburg-south" },
    { name: "Randburg", href: "/areas/randburg" },
    { name: "Pretoria", href: "/areas/pretoria" },
    { name: "Centurion", href: "/areas/centurion" },
    { name: "Midrand", href: "/areas/midrand" },
    { name: "Kempton Park", href: "/areas/kempton-park" },
    { name: "Roodepoort", href: "/areas/roodepoort" },
    { name: "Fourways", href: "/areas/fourways" },
    { name: "Edenvale", href: "/areas/edenvale" },
    { name: "Boksburg", href: "/areas/boksburg" },
    { name: "Alberton", href: "/areas/alberton" },
    { name: "Benoni", href: "/areas/benoni" },
    { name: "Germiston", href: "/areas/germiston" },
    { name: "Bedfordview", href: "/areas/bedfordview" },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
              <Award className="h-5 w-5" />
              PREMIUM BESPOKE CARPENTRY • JOHANNESBURG
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Custom Built-In Cupboards Johannesburg
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Bespoke built-in cupboards designed and installed to your exact specifications. From
              custom bedroom wardrobes to full kitchen cabinetry — we craft storage solutions that
              perfectly fit your space and lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" asChild className="text-lg px-8">
                <a href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <a href="#design-process">See Our Process</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <CardTitle>Years Experience</CardTitle>
                <CardDescription>Custom cupboard specialists</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <CardTitle>Cupboards Installed</CardTitle>
                <CardDescription>Across Johannesburg & Gauteng</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">2-3</div>
                <CardTitle>Weeks to Install</CardTitle>
                <CardDescription>From design to completion</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">Free</div>
                <CardTitle>In-Home Consultation</CardTitle>
                <CardDescription>No obligation design visit</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Cupboard Types */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Types of Custom Built-In Cupboards Do You Make?
            </h2>
            <p className="text-muted-foreground text-lg">
              Every cupboard is built from scratch to fit your exact space — no off-the-shelf solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cupboardTypes.map((cupboard, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow ${cupboard.popular ? "border-primary border-2" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{cupboard.type}</CardTitle>
                    {cupboard.popular && (
                      <span className="text-xs px-2 py-1 rounded-full bg-primary text-primary-foreground font-medium shrink-0 ml-2">
                        Popular
                      </span>
                    )}
                  </div>
                  <CardDescription className="mb-4">{cupboard.description}</CardDescription>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-muted rounded px-3 py-2">
                      <div className="text-xs text-muted-foreground">Timeline</div>
                      <div className="font-semibold">{cupboard.timeline}</div>
                    </div>
                    <div className="bg-primary/10 rounded px-3 py-2">
                      <div className="text-xs text-muted-foreground">From</div>
                      <div className="font-semibold text-primary">{cupboard.startingPrice}</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Materials Are Used for Built-In Cupboards?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We work with a wide range of materials to suit every budget and style preference
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{material.name}</CardTitle>
                    <span className="text-lg font-bold text-primary shrink-0 ml-2">{material.priceRange}</span>
                  </div>
                  <CardDescription className="mb-4">{material.description}</CardDescription>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="bg-muted rounded px-2 py-2">
                      <div className="text-xs text-muted-foreground">Durability</div>
                      <div className="font-semibold text-xs">{material.durability}</div>
                    </div>
                    <div className="bg-muted rounded px-2 py-2">
                      <div className="text-xs text-muted-foreground">Finish</div>
                      <div className="font-semibold text-xs">{material.finish}</div>
                    </div>
                    <div className="bg-muted rounded px-2 py-2">
                      <div className="text-xs text-muted-foreground">Best For</div>
                      <div className="font-semibold text-xs">{material.bestFor}</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Cost Examples */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How Much Do Custom Built-In Cupboards Cost in Johannesburg?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Real-world project costs including design, manufacturing, and professional installation
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

      {/* Design Process */}
      <section id="design-process" className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How Does the Custom Cupboard Process Work?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From your first call to a perfectly finished cupboard — here's what to expect
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designProcess.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-5xl font-bold text-primary/20 mb-2">{step.step}</div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription className="mt-2">{step.description}</CardDescription>
                  <div className="mt-4 bg-muted rounded px-3 py-2 text-sm">
                    <span className="text-muted-foreground">Timeframe: </span>
                    <span className="font-semibold">{step.duration}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Features & Door Styles */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Customise Every Detail of Your Cupboard
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Internal Features */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Layers className="h-6 w-6 text-primary" />
                Internal Features
              </h3>
              <div className="space-y-3">
                {internalFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle
                        className={`h-5 w-5 shrink-0 ${
                          item.included === "Standard" ? "text-green-600" : "text-blue-400"
                        }`}
                      />
                      <span className="font-medium text-sm">{item.feature}</span>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        item.included === "Standard"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {item.included}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Door Styles */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Home className="h-6 w-6 text-primary" />
                Door Styles
              </h3>
              <div className="space-y-3">
                {doorStyles.map((door, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold">{door.style}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          door.priceImpact === "Standard"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {door.priceImpact}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{door.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area Demand */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Custom Cupboard Installations Across Johannesburg
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Popular styles and demand by Johannesburg area
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
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {suburb.demand} Demand
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">{suburb.speciality}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Voice Search Optimized */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Custom Built-In Cupboard Questions Answered
          </h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>How much do custom built-in cupboards cost in Johannesburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Custom built-in cupboards in Johannesburg start from R4,200/m for home office units
                  and R4,500/m for bedroom wardrobes using melamine board. A single bedroom wall (2-3m)
                  typically costs R9,000-R28,000 depending on material and features. Full bedroom
                  surrounds (4-6m) range R18,000-R96,000 for luxury finishes. We provide detailed
                  quotes after a free in-home consultation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How long does it take to install custom built-in cupboards?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The full process from consultation to installed cupboards typically takes 2-3 weeks for
                  bedroom units and 3-4 weeks for kitchen cabinetry. This includes 3-5 days for design
                  and quoting, 1-2 weeks for manufacturing, and 1-3 days for installation. Smaller
                  projects like home office built-ins can be completed in as little as 1-2 weeks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What is the best material for built-in cupboards?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Melamine board is the most popular choice for Johannesburg homes — it's durable, easy
                  to clean, available in hundreds of colours, and affordable at R4,500-R6,500/m. For
                  kitchens and high-moisture areas, commercial-grade plywood is stronger and more
                  moisture-resistant at R6,000-R9,000/m. Solid wood is the premium option at
                  R8,500-R16,000/m for a timeless look.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer sliding or hinged doors for built-in cupboards?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer both sliding and hinged doors, as well as frameless, frosted glass,
                  mirror, and louvre doors. Sliding doors are best for smaller rooms as they don't
                  require clearance to open. Hinged doors give full access to your cupboard at once.
                  Mirror doors are popular as they make rooms feel larger and serve a dual purpose.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you design and install built-in cupboards in Sandton?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we are one of Johannesburg's leading custom built-in cupboard specialists serving
                  Sandton, Fourways, Randburg, Midrand, Centurion, Pretoria, and all of Gauteng. We
                  offer free in-home consultations in all these areas with no travel charges. Sandton is
                  one of our busiest areas, particularly for luxury walk-in wardrobes and premium kitchen
                  cabinetry.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can you build cupboards in an awkward or unusually shaped space?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely — custom built-ins are specifically designed for spaces where off-the-shelf
                  solutions don't fit. We work with sloped ceilings, alcoves, irregular walls, and rooms
                  with pillars or beams. Every cupboard is precision-measured and manufactured to your
                  exact dimensions for a perfect, seamless fit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer a guarantee on your built-in cupboards?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, all our custom built-in cupboards come with a workmanship guarantee. We use
                  quality hardware and materials from trusted suppliers, and our carpenters have 20+
                  years of experience. If anything isn't right after installation, we come back and fix
                  it. Call us on 067 601 4490 for full guarantee details on your specific project.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What areas in Gauteng do you install built-in cupboards?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We install custom built-in cupboards throughout Gauteng including Johannesburg, Sandton,
                  Randburg, Fourways, Midrand, Centurion, Pretoria, Roodepoort, Edenvale, Boksburg,
                  Kempton Park, Benoni, Germiston, Alberton, Bedfordview, and surrounding areas. Free
                  in-home consultations are available in all these areas.
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
            {relatedServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href={service.href} className="hover:text-primary transition-colors">
                      {service.name}
                    </Link>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">All Areas We Serve in Gauteng</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Custom built-in cupboard installations across all Gauteng suburbs
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

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <Ruler className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Design Your Custom Built-In Cupboards?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Free in-home consultation and design service. No obligation. We come to you across all
            Johannesburg suburbs.
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
            <a href="tel:0676014490">Book Your Free Design Consultation</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
