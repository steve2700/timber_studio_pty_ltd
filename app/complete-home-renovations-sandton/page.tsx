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
  Award,
  Home,
  TrendingUp,
  Layers,
  Ruler,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Complete Home Renovations Sandton 2026 | Full House Renovation Specialists",
  description:
    "Complete home renovations in Sandton & Johannesburg North. Kitchen, bathroom, built-in cupboards, granite countertops, drywall & more under one roof. Call 067 601 4490!",
  openGraph: {
    title: "Complete Home Renovations Sandton | Full-Service Renovation Specialists",
    description:
      "Full home renovation service in Sandton. Kitchen, bathroom, cupboards, granite, drywall, flooring & doors — all managed by one trusted team.",
    url: "https://granitecarpentry.co.za/complete-home-renovations-sandton",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/complete-home-renovations-sandton",
  },
}

export default function CompleteHomeRenovationsSandtonPage() {
  const renovationServices = [
    {
      title: "Kitchen Renovations",
      description:
        "Complete kitchen transformations — custom cupboards, granite or quartz countertops, new flooring, and full fit-out.",
      duration: "2-4 weeks",
      href: "/kitchen-renovations",
      highlight: true,
    },
    {
      title: "Bathroom Renovations",
      description:
        "Full bathroom makeovers including vanity units, tiling, fixtures, and custom built-in storage.",
      duration: "1-3 weeks",
      href: "/bathroom-renovations",
      highlight: true,
    },
    {
      title: "Custom Built-In Cupboards",
      description:
        "Bespoke bedroom wardrobes, living room wall units, and home office built-ins designed for your space.",
      duration: "2-3 weeks",
      href: "/custom-built-in-cupboards-johannesburg",
      highlight: true,
    },
    {
      title: "Granite & Quartz Countertops",
      description:
        "Premium granite and quartz countertop supply and installation for kitchens, bathrooms, and entertainment areas.",
      duration: "3-7 days",
      href: "/granite-countertops",
      highlight: true,
    },
    {
      title: "Drywall & Ceilings",
      description:
        "Partition walls, suspended ceilings, ceiling repairs, and full drywall installations for room reconfigurations.",
      duration: "1-2 weeks",
      href: "/drywall-ceilings",
      highlight: false,
    },
    {
      title: "Door Installations",
      description:
        "Interior and exterior door replacements including pivot doors, French doors, barn doors, and security doors.",
      duration: "1-3 days",
      href: "/door-installation",
      highlight: false,
    },
    {
      title: "Decking & Flooring",
      description:
        "Timber decking, laminate, engineered wood, and tile flooring installed throughout your home.",
      duration: "1-2 weeks",
      href: "/decking-flooring",
      highlight: false,
    },
    {
      title: "Security Doors & Pivot Doors",
      description:
        "Upgrade your entrance with statement pivot doors or reinforced security doors for Sandton homes.",
      duration: "2-5 days",
      href: "/security-doors-johannesburg",
      highlight: false,
    },
  ]

  const renovationPackages = [
    {
      name: "Starter Refresh",
      description: "Ideal for updating key areas without a full gut renovation",
      price: "R85,000 - R180,000",
      duration: "3-5 weeks",
      includes: [
        "Kitchen countertop replacement (granite/quartz)",
        "Kitchen cupboard door & hardware upgrade",
        "1 bathroom vanity & fixtures",
        "Built-in cupboards for 1 bedroom",
        "Interior door replacements (3-5 doors)",
      ],
      tier: "entry",
    },
    {
      name: "Full Home Renovation",
      description: "Complete transformation of your main living areas",
      price: "R280,000 - R650,000",
      duration: "6-12 weeks",
      includes: [
        "Complete kitchen renovation with custom cabinetry",
        "Granite or quartz countertops throughout",
        "2 full bathroom renovations",
        "Built-in cupboards for all bedrooms",
        "Drywall partitions & ceiling upgrades",
        "New flooring throughout",
        "All interior door replacements",
        "Project management included",
      ],
      tier: "mid",
      popular: true,
    },
    {
      name: "Luxury Sandton Renovation",
      description: "Premium full-home transformation for high-end Sandton properties",
      price: "R750,000 - R2,500,000+",
      duration: "12-24 weeks",
      includes: [
        "Bespoke kitchen with imported cabinetry",
        "Exotic granite or engineered stone throughout",
        "3+ full luxury bathroom renovations",
        "Custom walk-in wardrobes & dressing rooms",
        "Home office & entertainment room fit-out",
        "Imported pivot or French entrance doors",
        "Timber decking & outdoor entertainment areas",
        "Dedicated project manager",
        "Interior design consultation",
      ],
      tier: "luxury",
    },
  ]

  const projectTimeline = [
    {
      phase: "Phase 1",
      title: "Consultation & Design",
      duration: "Week 1-2",
      description:
        "Free in-home consultation, space assessment, design brief, material selection, and detailed project quote.",
      tasks: ["Site visit & measurements", "Design concept", "Material samples", "Detailed quote"],
    },
    {
      phase: "Phase 2",
      title: "Planning & Procurement",
      duration: "Week 2-3",
      description:
        "Finalise designs, sign off on quote, procure materials, schedule trades, and apply for permits if required.",
      tasks: ["Final design sign-off", "Material ordering", "Trade scheduling", "Site preparation"],
    },
    {
      phase: "Phase 3",
      title: "Structural & Base Work",
      duration: "Week 3-6",
      description:
        "Drywall partitions, ceiling installations, flooring prep, plumbing and electrical rough-ins where applicable.",
      tasks: ["Drywall & partitions", "Ceiling installations", "Flooring prep", "Base installations"],
    },
    {
      phase: "Phase 4",
      title: "Carpentry & Fitting",
      duration: "Week 5-10",
      description:
        "Kitchen and bathroom cabinetry, built-in cupboards, countertop installation, door fitting, and joinery.",
      tasks: ["Kitchen cabinetry", "Built-in cupboards", "Countertop installation", "Door fitting"],
    },
    {
      phase: "Phase 5",
      title: "Finishing & Detail",
      duration: "Week 9-12",
      description:
        "Painting, hardware fitting, lighting, skirting boards, cornices, touch-ups, and final finishes.",
      tasks: ["Painting & touch-ups", "Hardware fitting", "Lighting", "Skirting & cornices"],
    },
    {
      phase: "Phase 6",
      title: "Handover & Sign-Off",
      duration: "Final Week",
      description:
        "Full walkthrough with client, snag list resolution, deep clean, and final sign-off. Workmanship guarantee provided.",
      tasks: ["Client walkthrough", "Snag list fixes", "Deep clean", "Guarantee documentation"],
    },
  ]

  const sandtonAreas = [
    { suburb: "Sandton CBD", specialty: "Luxury apartment renovations, penthouse fit-outs" },
    { suburb: "Morningside", specialty: "Full home renovations, kitchen & bathroom upgrades" },
    { suburb: "Bryanston", specialty: "Large estate renovations, entertainment areas" },
    { suburb: "Rivonia", specialty: "Executive home renovations, home office fit-outs" },
    { suburb: "Sunninghill", specialty: "Full home makeovers, built-in cupboards" },
    { suburb: "Hyde Park", specialty: "Luxury kitchen & bathroom renovations" },
    { suburb: "Illovo", specialty: "Complete home transformations, premium finishes" },
    { suburb: "Woodmead", specialty: "Modern home renovations, granite countertops" },
    { suburb: "Sandhurst", specialty: "Ultra-luxury renovations, bespoke carpentry" },
    { suburb: "Rosebank", specialty: "Apartment renovations, kitchen upgrades" },
    { suburb: "Fourways", specialty: "Family home full renovations" },
    { suburb: "Randburg", specialty: "Complete kitchen & bedroom renovations" },
  ]

  const costFactors = [
    {
      factor: "Size of Home",
      description: "Larger homes require more materials and labour time. Costs scale with floor area.",
      impact: "Very High",
    },
    {
      factor: "Material Quality",
      description: "Entry-level melamine vs luxury solid wood or imported materials can triple costs.",
      impact: "Very High",
    },
    {
      factor: "Scope of Work",
      description: "Cosmetic updates cost far less than structural changes, new partitions, or additions.",
      impact: "High",
    },
    {
      factor: "Number of Rooms",
      description: "Multi-room renovations done together save on trade mobilisation and project management.",
      impact: "High",
    },
    {
      factor: "Sandton Property Type",
      description: "Apartments, cluster homes, and large estates each have different access and logistic costs.",
      impact: "Medium",
    },
    {
      factor: "Timeline Urgency",
      description: "Rushed timelines may require overtime or additional crews, increasing overall cost.",
      impact: "Medium",
    },
  ]

  const whyUs = [
    {
      icon: Home,
      title: "One Team, Everything Done",
      description:
        "Carpentry, granite, drywall, flooring, doors — all under one roof. No juggling multiple contractors.",
    },
    {
      icon: Award,
      title: "20+ Years in Sandton",
      description:
        "We've renovated hundreds of Sandton homes and understand the area's property standards and expectations.",
    },
    {
      icon: Shield,
      title: "Fully Project Managed",
      description:
        "A dedicated project manager coordinates every trade, timeline, and delivery so you don't have to.",
    },
    {
      icon: TrendingUp,
      title: "Add Property Value",
      description:
        "Sandton renovations consistently deliver strong ROI. We help you invest in areas that add real value.",
    },
  ]

  const relatedServices = [
    { name: "Kitchen Renovations", href: "/kitchen-renovations" },
    { name: "Bathroom Renovations", href: "/bathroom-renovations" },
    { name: "Custom Built-In Cupboards Johannesburg", href: "/custom-built-in-cupboards-johannesburg" },
    { name: "Granite Countertops", href: "/granite-countertops" },
    { name: "Quartz Countertops", href: "/quartz-countertops" },
    { name: "Drywall & Ceilings", href: "/drywall-ceilings" },
    { name: "Decking & Flooring", href: "/decking-flooring" },
    { name: "Pivot Doors Sandton", href: "/pivot-doors-sandton" },
    { name: "French Doors Sandton", href: "/french-doors-sandton" },
    { name: "Security Doors Johannesburg", href: "/security-doors-johannesburg" },
    { name: "Granite Installers Sandton", href: "/granite-installers-sandton" },
    { name: "Kitchen Renovation Cost Johannesburg", href: "/kitchen-renovation-cost-johannesburg" },
  ]

  const areaPages = [
    { name: "Sandton", href: "/areas/sandton" },
    { name: "Johannesburg", href: "/areas/johannesburg" },
    { name: "Randburg", href: "/areas/randburg" },
    { name: "Fourways", href: "/areas/fourways" },
    { name: "Midrand", href: "/areas/midrand" },
    { name: "Centurion", href: "/areas/centurion" },
    { name: "Pretoria", href: "/areas/pretoria" },
    { name: "Roodepoort", href: "/areas/roodepoort" },
    { name: "Edenvale", href: "/areas/edenvale" },
    { name: "Boksburg", href: "/areas/boksburg" },
    { name: "Kempton Park", href: "/areas/kempton-park" },
    { name: "Johannesburg South", href: "/areas/johannesburg-south" },
    { name: "Alberton", href: "/areas/alberton" },
    { name: "Benoni", href: "/areas/benoni" },
    { name: "Germiston", href: "/areas/germiston" },
    { name: "Bedfordview", href: "/areas/bedfordview" },
    { name: "Vereeniging", href: "/areas/vereeniging" },
    { name: "Vanderbijlpark", href: "/areas/vanderbijlpark" },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-24 px-4 md:px-6 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-bold">
              <Star className="h-5 w-5 text-yellow-400" />
              SANDTON & JOHANNESBURG NORTH RENOVATION SPECIALISTS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Complete Home Renovations Sandton
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto">
              Full-service home renovations in Sandton and Johannesburg North. Kitchen, bathroom,
              built-in cupboards, granite countertops, drywall, flooring and doors — all designed,
              managed, and installed by one trusted team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="text-lg px-8 bg-white text-slate-900 hover:bg-gray-100">
                <a href="tel:0676014490" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white/40 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <a href="#packages">View Packages</a>
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
                <div className="text-4xl font-bold text-slate-800 mb-2">20+</div>
                <CardTitle>Years in Sandton</CardTitle>
                <CardDescription>Renovation specialists</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-slate-800 mb-2">500+</div>
                <CardTitle>Homes Renovated</CardTitle>
                <CardDescription>Across Johannesburg North</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-slate-800 mb-2">8</div>
                <CardTitle>Services In-House</CardTitle>
                <CardDescription>No subcontractor juggling</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-slate-800 mb-2">Free</div>
                <CardTitle>Consultation</CardTitle>
                <CardDescription>In-home design visit</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Does a Complete Home Renovation in Sandton Include?
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We handle every element of your renovation in-house — no need to manage multiple
              contractors or coordinate between trades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {renovationServices.map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow ${
                  service.highlight ? "border-slate-800 border-2" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-base">
                      <Link href={service.href} className="hover:text-primary transition-colors">
                        {service.title}
                      </Link>
                    </CardTitle>
                    {service.highlight && (
                      <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-white shrink-0 ml-1">
                        Core
                      </span>
                    )}
                  </div>
                  <CardDescription className="text-sm mb-3">{service.description}</CardDescription>
                  <div className="bg-muted rounded px-3 py-1.5 text-sm flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground text-xs">Duration: </span>
                    <span className="font-semibold text-xs">{service.duration}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Home Renovation Packages for Sandton Properties
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Flexible packages to suit every budget and scope — all fully customisable
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {renovationPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-shadow flex flex-col ${
                  pkg.popular ? "border-slate-800 border-2 relative" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-slate-800 text-white text-sm font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="flex-1">
                  <CardTitle className="text-2xl mb-1">{pkg.name}</CardTitle>
                  <CardDescription className="mb-4">{pkg.description}</CardDescription>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Timeline: {pkg.duration}
                    </div>
                  </div>
                  <div className="space-y-2">
                    {pkg.includes.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    className={`w-full ${pkg.popular ? "bg-slate-800 hover:bg-slate-700" : ""}`}
                    variant={pkg.popular ? "default" : "outline"}
                    asChild
                  >
                    <a href="tel:0676014490">
                      <Phone className="mr-2 h-4 w-4" />
                      Get a Quote
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            All packages are fully customisable. Prices are indicative and depend on scope, materials,
            and property specifics. Free in-home consultation and detailed quote provided.
          </p>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How Long Does a Complete Home Renovation Take?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our structured 6-phase process keeps your renovation on time and on budget
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTimeline.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {phase.phase}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">{phase.duration}</span>
                  </div>
                  <CardTitle className="text-lg">{phase.title}</CardTitle>
                  <CardDescription className="mt-2 mb-3">{phase.description}</CardDescription>
                  <div className="space-y-1">
                    {phase.tasks.map((task, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-xs text-muted-foreground">{task}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sandton Areas */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Sandton Suburbs We Renovate In
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Deep local knowledge of Sandton's property types, estates, and building requirements
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sandtonAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <h3 className="font-bold">{area.suburb}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{area.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Affects the Cost of a Home Renovation in Sandton?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Understanding what drives renovation costs helps you plan your budget more accurately
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costFactors.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-lg">{item.factor}</CardTitle>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium shrink-0 ml-2 ${
                        item.impact === "Very High"
                          ? "bg-red-100 text-red-700"
                          : item.impact === "High"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.impact}
                    </span>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us for Your Sandton Home Renovation?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Voice Search Optimized */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Home Renovation Questions Answered
          </h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>How much does a complete home renovation cost in Sandton?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete home renovation costs in Sandton vary widely by scope and materials. A
                  starter refresh covering key areas costs R85,000-R180,000. A full home renovation
                  across all rooms typically runs R280,000-R650,000. Luxury Sandton properties with
                  premium materials and full fit-outs range from R750,000 to R2,500,000+. We provide
                  a free in-home consultation and detailed itemised quote for your specific property.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How long does a complete home renovation take in Johannesburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A complete home renovation in Johannesburg typically takes 6-12 weeks for a full
                  multi-room project. Smaller refreshes covering 2-3 areas take 3-5 weeks. Luxury
                  full-home renovations in Sandton can take 12-24 weeks depending on scope and custom
                  materials. Our 6-phase project management process keeps your renovation on schedule
                  from day one.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you manage the full renovation or just the carpentry?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We manage the full renovation. Unlike many carpentry companies, we handle kitchen
                  renovations, bathroom renovations, built-in cupboards, granite and quartz countertops,
                  drywall and ceilings, flooring, and all door installations in-house. A dedicated
                  project manager coordinates every phase so you deal with one point of contact from
                  start to finish.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do I need to move out during the renovation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For smaller renovations covering one or two rooms, most clients stay in the property.
                  For full home renovations, we recommend moving out for 4-8 weeks where possible, as
                  dust, noise, and disruption to kitchen and bathrooms makes daily living difficult.
                  We discuss this in detail during your consultation and plan the renovation sequence
                  to minimise disruption wherever possible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do home renovations add value to Sandton properties?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — Sandton is one of South Africa's highest-value property markets, and quality
                  renovations consistently deliver strong returns. Kitchen renovations typically return
                  60-80% of cost in added property value. Bathroom upgrades and premium finishes like
                  granite countertops and built-in cupboards are particularly valued by Sandton buyers
                  and tenants. We advise on which upgrades deliver the best ROI for your property type.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can you renovate apartments and cluster homes in Sandton?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — we regularly renovate apartments, cluster homes, townhouses, and large
                  freestanding estates throughout Sandton, Morningside, Bryanston, Rivonia, and
                  surrounding suburbs. We're familiar with body corporate requirements, estate rules,
                  and the logistical challenges of high-rise and gated community renovations. We handle
                  all permissions and scheduling accordingly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What areas near Sandton do you renovate in?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Beyond Sandton, we cover all of Johannesburg North including Fourways, Randburg,
                  Midrand, Centurion, Pretoria, Roodepoort, Edenvale, and greater Gauteng. Our
                  Sandton-area specialities include{" "}
                  <Link href="/areas/sandton" className="text-primary hover:underline">Sandton</Link>,{" "}
                  <Link href="/carpenter-bryanston" className="text-primary hover:underline">Bryanston</Link>,{" "}
                  <Link href="/carpenter-rivonia" className="text-primary hover:underline">Rivonia</Link>,{" "}
                  <Link href="/carpenter-morningside" className="text-primary hover:underline">Morningside</Link>,{" "}
                  <Link href="/carpenter-rosebank" className="text-primary hover:underline">Rosebank</Link>, and{" "}
                  <Link href="/carpenter-hyde-park" className="text-primary hover:underline">Hyde Park</Link>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer a guarantee on renovation work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, all our renovation work comes with a workmanship guarantee. We use quality
                  materials from trusted suppliers and our tradespeople have 20+ years of experience.
                  On completion, we do a full client walkthrough, resolve any snag list items, and
                  provide written guarantee documentation. Your satisfaction is our sign-off condition
                  — we don't consider a job done until you're completely happy.
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
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            {relatedServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            All Areas We Serve Across Gauteng
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Complete home renovation services throughout Johannesburg and Gauteng
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areaPages.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="flex items-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent hover:shadow-md transition-all group"
              >
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 md:px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Home className="h-16 w-16 mx-auto mb-6 opacity-60" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Sandton Home?
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Free in-home consultation. Detailed quote. One team for everything. Let's talk about
            your renovation — no obligation, no pressure.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Phone className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Call Us</CardTitle>
                <CardDescription className="text-white/70">
                  <a href="tel:0676014490" className="text-xl font-bold hover:underline text-white">
                    067 601 4490
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Mail className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription className="text-white/70">
                  <a href="mailto:info@granitecarpentry.co.za" className="hover:underline text-sm text-white">
                    info@granitecarpentry.co.za
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Calendar className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Working Hours</CardTitle>
                <CardDescription className="text-white/70">Mon–Sat: 8am–5pm</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Button
            size="lg"
            className="text-lg px-8 bg-white text-slate-900 hover:bg-gray-100"
            asChild
          >
            <a href="tel:0676014490">
              <Phone className="mr-2 h-5 w-5" />
              Book Free Consultation
            </a>
          </Button>

          <p className="mt-6 text-sm text-white/50">
            Serving Sandton, Johannesburg North & all of Gauteng
          </p>
        </div>
      </section>
    </div>
  )
}
