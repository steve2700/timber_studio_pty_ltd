import type { Metadata } from "next"
import Link from "next/link"
import { 
  Wrench, CheckCircle, Clock, Shield, MapPin, Phone, Mail, Calendar, 
  DollarSign, TrendingUp, Award, Home, Lightbulb, AlertCircle 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Kitchen Renovation Cost Johannesburg 2026 | Complete Price Guide & Budget Calculator",
  description:
    "Complete kitchen renovation cost guide for Johannesburg 2026. Budget, mid-range & luxury pricing R50,000-R500,000+. Real project examples, cost breakdown. Free quote 067 601 4490!",
  openGraph: {
    title: "Kitchen Renovation Cost Johannesburg 2026 | Complete Price Guide",
    description:
      "Detailed kitchen renovation costs for Johannesburg. Budget to luxury pricing, real project examples, and expert advice on planning your dream kitchen.",
    url: "https://granitecarpentry.co.za/kitchen-renovation-cost-johannesburg",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/kitchen-renovation-cost-johannesburg",
  },
}

export default function KitchenRenovationCostJohannesburgPage() {
  const renovationBudgets = [
    {
      category: "Budget-Friendly Renovation",
      range: "R50,000 - R120,000",
      description: "Essential updates with quality materials",
      ideal: "First-time renovators, rental properties, cosmetic updates",
      features: [
        "Standard laminate cupboards",
        "Basic granite or laminate countertops",
        "Standard appliances (stove, oven)",
        "Basic lighting and fixtures",
        "Paint and minor electrical work",
        "Simple tiling (backsplash only)"
      ]
    },
    {
      category: "Mid-Range Renovation",
      range: "R150,000 - R300,000",
      description: "Quality finishes with custom features",
      ideal: "Family homes, standard suburbs, long-term investments",
      features: [
        "Custom melamine or wood cupboards",
        "Premium granite or quartz countertops",
        "Mid-range appliances (hob, oven, extractor)",
        "Island or breakfast nook",
        "Quality tiling throughout",
        "Upgraded lighting and plumbing",
        "Soft-close drawers and doors"
      ]
    },
    {
      category: "Luxury Renovation",
      range: "R350,000 - R500,000+",
      description: "High-end materials and custom design",
      ideal: "Sandton, luxury estates, premium properties",
      features: [
        "Solid wood or high-end custom cupboards",
        "Exotic granite, quartz, or marble countertops",
        "Premium appliances (Smeg, Bosch, Miele)",
        "Large island with waterfall edges",
        "Designer lighting and fixtures",
        "Smart home integration",
        "Walk-in pantry or scullery",
        "Premium flooring and finishes"
      ]
    }
  ]

  const costBreakdown = [
    {
      item: "Kitchen Cupboards & Cabinetry",
      budget: "R20,000 - R40,000",
      midRange: "R60,000 - R120,000",
      luxury: "R150,000 - R250,000+",
      percentage: "40-45%"
    },
    {
      item: "Countertops (Granite/Quartz)",
      budget: "R15,000 - R30,000",
      midRange: "R35,000 - R70,000",
      luxury: "R80,000 - R150,000+",
      percentage: "20-25%"
    },
    {
      item: "Appliances",
      budget: "R8,000 - R20,000",
      midRange: "R25,000 - R50,000",
      luxury: "R60,000 - R120,000+",
      percentage: "15-20%"
    },
    {
      item: "Plumbing & Electrical",
      budget: "R5,000 - R12,000",
      midRange: "R15,000 - R30,000",
      luxury: "R35,000 - R60,000",
      percentage: "10-12%"
    },
    {
      item: "Flooring & Tiling",
      budget: "R8,000 - R15,000",
      midRange: "R18,000 - R35,000",
      luxury: "R40,000 - R80,000",
      percentage: "10-12%"
    },
    {
      item: "Labor & Installation",
      budget: "R10,000 - R20,000",
      midRange: "R25,000 - R45,000",
      luxury: "R50,000 - R100,000",
      percentage: "15-20%"
    }
  ]

  const realProjects = [
    {
      title: "Small Apartment Kitchen - Sandton",
      size: "8m² compact kitchen",
      budget: "R85,000",
      timeline: "3 weeks",
      includes: [
        "L-shaped melamine cupboards (white)",
        "Kashmir White granite countertops",
        "Defy 4-plate stove and oven",
        "Single sink with chrome tap",
        "Backsplash tiling",
        "LED downlights"
      ],
      outcome: "Modern, functional kitchen perfect for apartment living"
    },
    {
      title: "Family Home Kitchen - Randburg",
      size: "15m² with breakfast nook",
      budget: "R220,000",
      timeline: "6 weeks",
      includes: [
        "Custom wood-look cupboards",
        "Absolute Black granite with island",
        "Bosch hob, oven, and extractor fan",
        "Double bowl undermount sink",
        "Full wall and floor tiling",
        "Breakfast bar with bar stools",
        "Pantry cupboard"
      ],
      outcome: "Stylish family kitchen with excellent storage and workspace"
    },
    {
      title: "Luxury Estate Kitchen - Hyde Park",
      size: "25m² with scullery",
      budget: "R480,000",
      timeline: "10 weeks",
      includes: [
        "Solid oak custom cupboards",
        "Blue Pearl granite with waterfall island",
        "Smeg appliance suite (gas hob, dual oven, wine cooler)",
        "Separate scullery with laundry",
        "Designer pendant lighting",
        "Smart home controls",
        "Porcelain tile flooring",
        "Walk-in pantry"
      ],
      outcome: "Show-stopping luxury kitchen with premium finishes throughout"
    }
  ]

  const hiddenCosts = [
    {
      item: "Demolition & Removal",
      cost: "R5,000 - R15,000",
      description: "Removing old cupboards, countertops, and disposal fees"
    },
    {
      item: "Structural Changes",
      cost: "R10,000 - R50,000+",
      description: "Knocking down walls, moving plumbing, electrical rewiring"
    },
    {
      item: "Permits & Inspections",
      cost: "R2,000 - R8,000",
      description: "Building plans, electrical COC, plumbing compliance"
    },
    {
      item: "Unexpected Repairs",
      cost: "R5,000 - R20,000",
      description: "Water damage, electrical issues discovered during renovation"
    },
    {
      item: "Temporary Kitchen Setup",
      cost: "R2,000 - R5,000",
      description: "Alternative cooking arrangements during renovation"
    },
    {
      item: "Finishing Touches",
      cost: "R3,000 - R10,000",
      description: "Cabinet handles, light switches, paint touch-ups, decor"
    }
  ]

  const savingStrategies = [
    {
      strategy: "Keep the Layout",
      savings: "Save R15,000 - R50,000",
      description: "Avoid moving plumbing and electrical points. Keeping existing layout saves major costs on rewiring and replumbing."
    },
    {
      strategy: "Reface Instead of Replace",
      savings: "Save 40-50% on cabinets",
      description: "If cabinet boxes are sound, reface doors and add new countertops. Can look brand new at fraction of cost."
    },
    {
      strategy: "Mix High and Low",
      savings: "Save R20,000 - R80,000",
      description: "Splurge on visible items (countertops, handles) but save on hidden elements (inside drawers, pantry shelving)."
    },
    {
      strategy: "Time Your Purchase",
      savings: "Save 10-20%",
      description: "Buy appliances during Black Friday, year-end sales. Order materials during supplier promotions."
    },
    {
      strategy: "DIY What You Can",
      savings: "Save R10,000 - R30,000",
      description: "Handle painting, minor demolition, and cleanup yourself. Leave technical work to professionals."
    },
    {
      strategy: "Compare Quotes",
      savings: "Save 15-30%",
      description: "Get 3-4 detailed quotes. Don't just pick cheapest—check references and included services."
    }
  ]

  const suburbs = [
    { name: "Sandton", range: "R150,000 - R500,000+", trend: "High-end renovations popular" },
    { name: "Johannesburg North", range: "R100,000 - R350,000", trend: "Modern family kitchens" },
    { name: "Randburg", range: "R100,000 - R300,000", trend: "Mid-range quality focus" },
    { name: "Roodepoort", range: "R80,000 - R250,000", trend: "Value-conscious renovations" },
    { name: "Fourways", range: "R120,000 - R400,000", trend: "Open-plan designs trending" },
    { name: "Johannesburg South", range: "R70,000 - R280,000", trend: "Rental property updates" }
  ]

  const timeline = [
    {
      phase: "Planning & Design",
      duration: "2-4 weeks",
      tasks: [
        "Measure space and create layout",
        "Choose materials and finishes",
        "Get 3+ quotes from contractors",
        "Finalize budget and payment schedule",
        "Obtain necessary permits"
      ]
    },
    {
      phase: "Demolition",
      duration: "2-5 days",
      tasks: [
        "Remove old cupboards and countertops",
        "Strip out old flooring and tiles",
        "Disconnect appliances and plumbing",
        "Waste removal and site cleanup"
      ]
    },
    {
      phase: "Structural & Services",
      duration: "1-2 weeks",
      tasks: [
        "Electrical rewiring and new points",
        "Plumbing modifications",
        "Wall repairs or structural changes",
        "Ceiling work if needed"
      ]
    },
    {
      phase: "Installation",
      duration: "2-4 weeks",
      tasks: [
        "Install new cupboards and cabinetry",
        "Countertop templating and installation",
        "Flooring and tiling",
        "Plumbing fixtures and appliances",
        "Painting and finishing"
      ]
    },
    {
      phase: "Final Touches",
      duration: "3-5 days",
      tasks: [
        "Install handles and accessories",
        "Final electrical and plumbing tests",
        "Deep cleaning",
        "Snag list completion",
        "Final walkthrough and handover"
      ]
    }
  ]

  const commonMistakes = [
    {
      mistake: "Underestimating Budget",
      impact: "Project delays, compromised quality",
      solution: "Add 15-20% contingency for unexpected costs. Budget realistically from start."
    },
    {
      mistake: "Ignoring Work Triangle",
      impact: "Inefficient kitchen workflow",
      solution: "Plan fridge, sink, and stove in optimal triangle formation for easy movement."
    },
    {
      mistake: "Insufficient Storage",
      impact: "Cluttered counters, poor organization",
      solution: "Plan for 20% more storage than you think you need. Include pull-out drawers and pantry."
    },
    {
      mistake: "Poor Lighting Planning",
      impact: "Dark work areas, mood issues",
      solution: "Layer lighting: task lights for work areas, ambient for overall space, accent for style."
    },
    {
      mistake: "Choosing Trends Over Function",
      impact: "Dated look quickly, resale issues",
      solution: "Balance timeless design with current touches. Focus on functionality over pure aesthetics."
    },
    {
      mistake: "Skipping Professional Help",
      impact: "Costly mistakes, poor finishes",
      solution: "DIY painting and demolition, but use professionals for plumbing, electrical, and installation."
    }
  ]

  const checklist = [
    "Set realistic budget with 15-20% contingency",
    "Measure kitchen space accurately (length, width, height)",
    "List must-have features vs nice-to-have",
    "Research and shortlist contractors (check reviews)",
    "Get 3-5 detailed written quotes",
    "Check contractor credentials, insurance, references",
    "Finalize design and material selections",
    "Obtain necessary permits and COCs",
    "Set up temporary kitchen area",
    "Clear payment schedule and milestones",
    "Plan for waste removal and site access",
    "Purchase appliances in advance (lead times)",
    "Schedule progress inspections",
    "Plan final walkthrough and snag list",
    "Arrange for professional cleaning after completion"
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
              Kitchen Renovation Cost Johannesburg 2026
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Complete cost guide for kitchen renovations in Johannesburg. Real pricing, budget examples, and expert 
              advice to plan your dream kitchen renovation from R50,000 to R500,000+.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" asChild className="text-lg px-8">
                <a href="tel:0676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <a href="#calculator">Calculate Your Cost</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kitchen Renovation Budgets at a Glance</h2>
            <p className="text-muted-foreground text-lg">
              Updated January 2026 - Complete Renovation Packages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">R50K-R120K</div>
                <CardTitle>Budget-Friendly</CardTitle>
                <CardDescription>Essential updates</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-primary">
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">R150K-R300K</div>
                <CardTitle>Mid-Range</CardTitle>
                <CardDescription>Quality finishes</CardDescription>
                <div className="mt-3 text-sm font-medium text-primary">Most Popular</div>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">R350K-R500K+</div>
                <CardTitle>Luxury</CardTitle>
                <CardDescription>Premium everything</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Budget Breakdown */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Complete Renovation Package Breakdown</h2>

          <div className="space-y-8">
            {renovationBudgets.map((budget, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{budget.category}</CardTitle>
                      <CardDescription className="text-base">{budget.description}</CardDescription>
                    </div>
                    <div className="text-2xl font-bold text-primary">{budget.range}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Ideal for:</strong> {budget.ideal}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {budget.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown by Component */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Where Your Money Goes: Cost Breakdown by Component
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Understanding how renovation costs are distributed helps you prioritize spending
          </p>

          <div className="space-y-4">
            {costBreakdown.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div className="md:col-span-2">
                      <h3 className="font-bold text-lg mb-1">{item.item}</h3>
                      <span className="text-sm text-muted-foreground">{item.percentage} of total budget</span>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                      <div className="text-xs text-muted-foreground mb-1">Budget</div>
                      <div className="font-bold text-green-700">{item.budget}</div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                      <div className="text-xs text-muted-foreground mb-1">Mid-Range</div>
                      <div className="font-bold text-blue-700">{item.midRange}</div>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
                      <div className="text-xs text-muted-foreground mb-1">Luxury</div>
                      <div className="font-bold text-purple-700">{item.luxury}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Project Examples */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Real Johannesburg Kitchen Renovations</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Actual completed projects with real costs and timelines
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {realProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Home className="h-4 w-4 text-primary" />
                      <span>{project.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span className="font-bold text-primary text-lg">{project.budget}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{project.timeline}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Included:</h4>
                    <ul className="space-y-1">
                      {project.includes.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm italic text-muted-foreground">{project.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden Costs */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertCircle className="h-8 w-8 text-orange-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">Don't Forget These Hidden Costs</h2>
          </div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Budget an extra 15-20% for these often-overlooked expenses
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiddenCosts.map((cost, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow border-orange-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start justify-between">
                    <span>{cost.item}</span>
                    <span className="text-orange-600 font-bold text-base">{cost.cost}</span>
                  </CardTitle>
                  <CardDescription>{cost.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Money-Saving Strategies */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Smart Strategies to Save on Your Kitchen Renovation
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {savingStrategies.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-green-200">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{item.strategy}</CardTitle>
                    <span className="text-green-600 font-bold text-sm whitespace-nowrap ml-2">{item.savings}</span>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Pricing */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Johannesburg Suburb Renovation Trends
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Typical renovation budgets vary by area based on property values and local preferences
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suburbs.map((suburb, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-bold mb-1">{suburb.name}</h3>
                      <div className="text-lg font-bold text-primary mb-1">{suburb.range}</div>
                      <div className="text-sm text-muted-foreground">{suburb.trend}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Kitchen Renovation Timeline
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Typical renovation takes 6-12 weeks from planning to completion
          </p>

          <div className="space-y-6">
            {timeline.map((phase, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <Card className="flex-1 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{phase.phase}</CardTitle>
                      <span className="text-primary font-bold">{phase.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Common Kitchen Renovation Mistakes to Avoid
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {commonMistakes.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-red-600 mb-2">❌ {item.mistake}</CardTitle>
                  <CardDescription className="mb-3">
                    <strong>Impact:</strong> {item.impact}
                  </CardDescription>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="text-sm font-semibold text-green-800 mb-1">✓ Solution:</div>
                    <div className="text-sm text-green-700">{item.solution}</div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Checklist */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Your Complete Kitchen Renovation Checklist
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Don't start your renovation without completing these essential steps
          </p>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Trust Us With Your Kitchen Renovation?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>20+ Years Experience</CardTitle>
                <CardDescription>Hundreds of successful Johannesburg kitchen renovations</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>All-In-One Service</CardTitle>
                <CardDescription>From design to completion under one roof</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Transparent Pricing</CardTitle>
                <CardDescription>Detailed quotes with no hidden costs</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Expert Guidance</CardTitle>
                <CardDescription>Help you maximize value and avoid costly mistakes</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Kitchen Renovation Cost Questions Answered
          </h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>How much does a kitchen renovation cost in Johannesburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kitchen renovations in Johannesburg range from R50,000 for basic budget updates to R500,000+ for 
                  luxury renovations. A typical mid-range family kitchen costs R150,000-R300,000, including cupboards, 
                  countertops, appliances, tiling, and labor. The final cost depends on kitchen size, material choices, 
                  and scope of work.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's the biggest expense in a kitchen renovation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kitchen cupboards and cabinetry typically account for 40-45% of your total budget, making them the 
                  largest single expense. Countertops are the second biggest cost at 20-25%, followed by appliances at 
                  15-20%. This is why it's crucial to get multiple quotes and compare quality carefully.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How long does a kitchen renovation take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A complete kitchen renovation typically takes 6-12 weeks from planning to completion. This includes 
                  2-4 weeks for planning and design, 2-5 days for demolition, 1-2 weeks for structural and electrical 
                  work, 2-4 weeks for installation, and 3-5 days for finishing touches. Larger or more complex projects 
                  may take longer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can I renovate my kitchen for under R100,000?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, a budget-friendly kitchen renovation is possible for R50,000-R100,000 if you keep the existing 
                  layout, choose affordable materials like laminate cupboards and standard granite, and handle some tasks 
                  yourself like demolition and painting. Focus on essential updates rather than luxury finishes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Should I move out during the renovation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most homeowners stay in their homes during kitchen renovations by setting up a temporary kitchen with 
                  a microwave, kettle, and small fridge in another room. However, if you have young children, health 
                  concerns, or a very extensive renovation, you might prefer to stay elsewhere for 2-3 weeks during the 
                  most disruptive phases.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do I need permits for a kitchen renovation in Johannesburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you're only replacing cupboards and countertops without structural changes, you typically don't need 
                  building plans. However, you'll need electrical and plumbing Certificates of Compliance (COCs). If 
                  knocking down walls or making structural changes, you'll need approved building plans from your local 
                  municipality. Budget R2,000-R8,000 for permits and inspections.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's the best time of year to renovate?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  May to July is often considered the best time for kitchen renovations in Johannesburg. Contractors are 
                  less busy, you may get better rates, and the mild weather is ideal for having windows open during 
                  messy work. Avoid December holidays when contractors take leave and suppliers have limited stock.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How can I maximize my budget?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Keep the existing layout to avoid expensive plumbing and electrical changes. Mix high and low—splurge 
                  on visible items like countertops but save on hidden elements. Get multiple quotes and time your 
                  purchases during sales. Consider refacing cabinets instead of replacing if they're structurally sound. 
                  These strategies can save you 20-40% on total costs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 md:px-6">
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
                <CardDescription>Premium stone countertop installation</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link href="/kitchen-cupboards" className="hover:text-primary">
                    Kitchen Cupboards
                  </Link>
                </CardTitle>
                <CardDescription>Custom cabinet design and installation</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link href="/plumbing" className="hover:text-primary">
                    Plumbing Services
                  </Link>
                </CardTitle>
                <CardDescription>Complete kitchen plumbing solutions</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link href="/granite-countertops-prices-johannesburg" className="hover:text-primary">
                    Granite Pricing Guide
                  </Link>
                </CardTitle>
                <CardDescription>Detailed countertop costs and options</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Serving All Johannesburg & Gauteng Areas
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional kitchen renovation services throughout Gauteng
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Kitchen Renovation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a detailed quote tailored to your budget and vision. Free consultation and site visit.
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
            <a href="tel:0676014490">Get Your Free Renovation Quote</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
