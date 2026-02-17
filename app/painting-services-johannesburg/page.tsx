import type { Metadata } from "next"
import Link from "next/link"
import {
  CheckCircle,
  Clock,
  Shield,
  MapPin,
  Phone,
  Mail,
  Calendar,
  AlertCircle,
  Star,
  Award,
  Home,
  Layers,
  Droplets,
  ThumbsUp,
  Paintbrush,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Painting Services Johannesburg 2026 | Interior & Exterior Painters Near You",
  description:
    "Professional painting services in Johannesburg & Gauteng. Interior, exterior, waterproofing paint, ceiling painting & more. Clean finish, fair price. Call 067 601 4490!",
  openGraph: {
    title: "Painting Services Johannesburg | Interior & Exterior Painters",
    description:
      "Professional interior and exterior painting across Johannesburg and Gauteng. Homes, apartments, offices. Neat finish, on time, fairly priced.",
    url: "https://granitecarpentry.co.za/painting-services-johannesburg",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/painting-services-johannesburg",
  },
}

export default function PaintingServicesJohannesburgPage() {
  const paintingServices = [
    {
      title: "Interior Wall Painting",
      description:
        "Full interior painting including prep, priming, and two coats. All wall types, any colour, any finish.",
      timeEstimate: "1-5 days",
      urgency: "Standard",
      popular: true,
    },
    {
      title: "Exterior House Painting",
      description:
        "Full exterior painting including surface prep, crack filling, priming, and weatherproof topcoats.",
      timeEstimate: "2-7 days",
      urgency: "Standard",
      popular: true,
    },
    {
      title: "Ceiling Painting",
      description:
        "Ceilings painted white or colour, including water-stained and smoke-damaged ceiling restoration.",
      timeEstimate: "1-2 days",
      urgency: "Standard",
      popular: true,
    },
    {
      title: "Waterproofing Paint (Exterior)",
      description:
        "Elastomeric and waterproofing paint systems applied to exterior walls to stop damp and water ingress.",
      timeEstimate: "2-4 days",
      urgency: "Standard",
      popular: false,
    },
    {
      title: "Roof Paint & Coating",
      description:
        "Roof paint and waterproofing coatings applied to IBR, corrugated, and flat roof surfaces.",
      timeEstimate: "1-3 days",
      urgency: "Standard",
      popular: false,
    },
    {
      title: "Feature Wall Painting",
      description:
        "Bold colours, textured finishes, and feature wall designs to transform a room with one statement wall.",
      timeEstimate: "1-2 days",
      urgency: "Standard",
      popular: false,
    },
    {
      title: "Wood & Door Painting",
      description:
        "Doors, window frames, skirting boards, and wooden surfaces painted or varnished to a professional finish.",
      timeEstimate: "1-3 days",
      urgency: "Standard",
      popular: false,
    },
    {
      title: "Move-Out & Rental Painting",
      description:
        "Fast turnaround painting for tenants and landlords before inspections or new tenant move-in.",
      timeEstimate: "1-3 days",
      urgency: "Fast",
      popular: true,
    },
    {
      title: "Office & Commercial Painting",
      description:
        "Interior and exterior commercial painting completed after hours or over weekends to minimise disruption.",
      timeEstimate: "2-7 days",
      urgency: "Standard",
      popular: false,
    },
    {
      title: "Damp Wall Treatment & Painting",
      description:
        "Damp-affected walls treated, sealed with anti-damp primer, and repainted for a lasting finish.",
      timeEstimate: "2-4 days",
      urgency: "Fast",
      popular: false,
    },
    {
      title: "Garage & Concrete Floor Paint",
      description:
        "Epoxy or enamel floor paint applied to garage floors, driveways, and concrete surfaces.",
      timeEstimate: "1-2 days",
      urgency: "Standard",
      popular: false,
    },
    {
      title: "Pre-Sale Painting",
      description:
        "Fresh paint before listing your property for sale — one of the highest ROI improvements you can make.",
      timeEstimate: "2-5 days",
      urgency: "Fast",
      popular: false,
    },
  ]

  const pricingGuide = [
    {
      service: "Single Room Interior (walls only)",
      budget: "R1,800 - R3,200",
      midRange: "R3,200 - R5,500",
      notes: "Prep, prime, 2 coats",
    },
    {
      service: "Full House Interior (3 bed)",
      budget: "R8,500 - R14,000",
      midRange: "R14,000 - R22,000",
      notes: "All rooms, ceilings extra",
    },
    {
      service: "Full House Interior (4-5 bed)",
      budget: "R14,000 - R22,000",
      midRange: "R22,000 - R35,000",
      notes: "All rooms, ceilings extra",
    },
    {
      service: "Ceiling Painting (per room)",
      budget: "R650 - R1,200",
      midRange: "R1,200 - R2,200",
      notes: "White or colour",
    },
    {
      service: "Exterior Full House (3 bed)",
      budget: "R12,000 - R22,000",
      midRange: "R22,000 - R38,000",
      notes: "Prep, prime, 2 coats",
    },
    {
      service: "Exterior Full House (4-5 bed)",
      budget: "R22,000 - R38,000",
      midRange: "R38,000 - R65,000",
      notes: "Prep, prime, 2 coats",
    },
    {
      service: "Single Door Painting",
      budget: "R450 - R850",
      midRange: "R850 - R1,400",
      notes: "Both sides, prep included",
    },
    {
      service: "Move-Out Painting (apartment)",
      budget: "R3,500 - R7,500",
      midRange: "R7,500 - R14,000",
      notes: "Touch-up or full repaint",
    },
  ]

  const paintBrands = [
    {
      brand: "Plascon",
      range: "Velvaglo, Double Velvet, Nuroof",
      finish: "Matt, Silk, Gloss",
      bestFor: "Interior walls, ceilings, exterior",
    },
    {
      brand: "Dulux",
      range: "Weathershield, Easycare, Wash & Wear",
      finish: "Matt, Silk, Gloss, Satin",
      bestFor: "Premium interior & exterior",
    },
    {
      brand: "Prominent Paints",
      range: "Superwall, Roof Paint, Damp Proof",
      finish: "Matt, Silk",
      bestFor: "Budget-conscious projects",
    },
    {
      brand: "Fired Earth / Specialist",
      range: "Textured, Lime Wash, Designer",
      finish: "Textured, Matte, Effect",
      bestFor: "Feature walls, designer finishes",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Free Quote Visit",
      description:
        "We visit your property, assess the surfaces, discuss your colour choices, and provide a detailed written quote. No obligation.",
      duration: "1-2 hours",
    },
    {
      step: "02",
      title: "Surface Preparation",
      description:
        "We fill cracks, sand rough surfaces, clean walls, apply tape and plastic sheeting to protect floors and furniture. Prep is everything.",
      duration: "Half to full day",
    },
    {
      step: "03",
      title: "Priming",
      description:
        "New surfaces, repaired areas, and stained ceilings get primed before topcoats. Skipping this step is how you get poor results.",
      duration: "1 day",
    },
    {
      step: "04",
      title: "Painting — 2 Coats",
      description:
        "Two full coats applied with proper drying time between each. We don't rush. First coat seals, second coat perfects.",
      duration: "1-5 days",
    },
    {
      step: "05",
      title: "Finishing & Clean-Up",
      description:
        "Touch-ups, tape removal, clean lines along ceilings and skirting, and full site clean-up. We leave your home spotless.",
      duration: "Half day",
    },
    {
      step: "06",
      title: "Final Walkthrough",
      description:
        "We walk through every room with you, fix anything that isn't perfect, and only sign off once you're 100% satisfied.",
      duration: "1-2 hours",
    },
  ]

  const colourTips = [
    {
      tip: "Test your colour first",
      detail: "Always test a painted swatch on the actual wall before committing — colours look very different on a chip vs a wall in your light.",
    },
    {
      tip: "Go lighter than you think",
      detail: "Paint always dries slightly darker than the wet colour. When in doubt, go one shade lighter than your target.",
    },
    {
      tip: "Consider your light direction",
      detail: "North-facing rooms get cool light — warm tones help. South-facing rooms get warm light — cool tones work well.",
    },
    {
      tip: "Ceiling colour matters",
      detail: "White ceilings make rooms feel taller. Painting the ceiling the same as the walls makes a room feel cosy and intentional.",
    },
    {
      tip: "Feature walls add depth",
      detail: "One bold wall behind a bed or sofa adds drama without overwhelming. Choose the wall you look at most when entering the room.",
    },
    {
      tip: "Finish affects everything",
      detail: "Matt hides imperfections but marks easily. Silk wipes clean. Gloss is durable but shows every bump. Choose by lifestyle.",
    },
  ]

  const responseAreas = [
    { area: "Sandton", responseTime: "Same Week", sameDay: false },
    { area: "Johannesburg North", responseTime: "Same Week", sameDay: false },
    { area: "Randburg", responseTime: "Same Week", sameDay: false },
    { area: "Fourways", responseTime: "Same Week", sameDay: false },
    { area: "Midrand", responseTime: "Same Week", sameDay: false },
    { area: "Centurion", responseTime: "Same Week", sameDay: false },
    { area: "Pretoria", responseTime: "Same Week", sameDay: false },
    { area: "Edenvale", responseTime: "Same Week", sameDay: false },
    { area: "Boksburg", responseTime: "Same Week", sameDay: false },
    { area: "Johannesburg South", responseTime: "Same Week", sameDay: false },
    { area: "Roodepoort", responseTime: "Same Week", sameDay: false },
    { area: "Kempton Park", responseTime: "Same Week", sameDay: false },
  ]

  const whyUs = [
    {
      icon: Paintbrush,
      title: "Prep Done Properly",
      description:
        "We fill, sand, prime, and protect before a drop of paint goes on. Most bad paint jobs fail because of poor preparation.",
    },
    {
      icon: Shield,
      title: "Quality Paint Only",
      description:
        "We use Plascon, Dulux, and Prominent — reputable brands with proven coverage and durability. No cheap substitutes.",
    },
    {
      icon: ThumbsUp,
      title: "Clean & Respectful",
      description:
        "We protect your floors, furniture, and finishes. We clean up completely every day and leave no mess behind.",
    },
    {
      icon: Award,
      title: "Backed by Full Trade Team",
      description:
        "Need ceilings fixed before painting? Walls waterproofed? We handle it all in-house — no extra contractors needed.",
    },
  ]

  const relatedServices = [
    { name: "Drywall & Ceilings", href: "/drywall-ceilings" },
    { name: "Ceiling Repairs Sandton", href: "/ceiling-repairs-sandton" },
    { name: "Ceiling Repairs Randburg", href: "/ceiling-repairs-randburg" },
    { name: "Ceiling Repairs Pretoria", href: "/ceiling-repairs-pretoria" },
    { name: "Waterproofing & Leak Repairs", href: "/waterproofing-repairs-gauteng" },
    { name: "Complete Home Renovations Sandton", href: "/complete-home-renovations-sandton" },
    { name: "Move-Out Repairs Gauteng", href: "/move-out-repairs-gauteng" },
    { name: "Rental Property Repairs", href: "/rental-property-repairs-gauteng" },
    { name: "Handyman Services Johannesburg", href: "/handyman-services-johannesburg" },
    { name: "Bathroom Renovations", href: "/bathroom-renovations" },
    { name: "Kitchen Renovations", href: "/kitchen-renovations" },
    { name: "Carpenter Near Me Johannesburg", href: "/carpenter-near-me-johannesburg" },
  ]

  const areaPages = [
    { name: "Johannesburg", href: "/areas/johannesburg" },
    { name: "Sandton", href: "/areas/sandton" },
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
    { name: "Springs", href: "/areas/springs" },
    { name: "Krugersdorp", href: "/areas/krugersdorp" },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="bg-gradient-to-b from-violet-900 to-violet-800 py-20 px-4 md:px-6 text-white border-b-4 border-violet-400">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-violet-400/20 border border-violet-300/30 text-violet-200 px-4 py-2 rounded-full text-sm font-bold">
              <Paintbrush className="h-5 w-5" />
              PROFESSIONAL PAINTERS — JOHANNESBURG & GAUTENG
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Painting Services Johannesburg
            </h1>
            <p className="text-xl md:text-2xl text-violet-100 max-w-4xl mx-auto">
              Professional interior and exterior painting across Johannesburg and Gauteng. Neat
              finish, quality paint, proper preparation. From a single room to a full house — we
              do it right the first time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="text-lg px-8 bg-violet-400 hover:bg-violet-300 text-violet-900 font-bold">
                <a href="tel:0676014490" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL NOW: 067 601 4490
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-violet-300/40 text-white hover:bg-violet-700/50 bg-transparent"
                asChild
              >
                <a href="#pricing">See Pricing</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-violet-200">
              <CardHeader>
                <div className="text-4xl font-bold text-violet-600 mb-2">2</div>
                <CardTitle>Coats Always</CardTitle>
                <CardDescription>Never cut corners</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-violet-200">
              <CardHeader>
                <div className="text-4xl font-bold text-violet-600 mb-2">Free</div>
                <CardTitle>Quote Visit</CardTitle>
                <CardDescription>No obligation</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-violet-200">
              <CardHeader>
                <div className="text-4xl font-bold text-violet-600 mb-2">Top</div>
                <CardTitle>Brands Only</CardTitle>
                <CardDescription>Plascon, Dulux & more</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-violet-200">
              <CardHeader>
                <div className="text-4xl font-bold text-violet-600 mb-2">20+</div>
                <CardTitle>Years Experience</CardTitle>
                <CardDescription>Across Gauteng</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Painting Services We Offer in Johannesburg
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Interior, exterior, specialist coatings — every painting need covered under one roof
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {paintingServices.map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow ${
                  service.popular ? "border-violet-400 border-2" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-base">{service.title}</CardTitle>
                    <div className="flex flex-col gap-1 items-end shrink-0 ml-2">
                      {service.popular && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500 text-white">
                          Popular
                        </span>
                      )}
                      {service.urgency === "Fast" && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">
                          Fast Turn
                        </span>
                      )}
                    </div>
                  </div>
                  <CardDescription className="mb-3 text-sm">{service.description}</CardDescription>
                  <div className="bg-muted rounded px-3 py-1.5 text-sm flex items-center gap-2">
                    <Clock className="h-4 w-4 text-violet-500" />
                    <span className="text-muted-foreground text-xs">Timeline: </span>
                    <span className="font-semibold text-xs">{service.timeEstimate}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How Much Does Painting Cost in Johannesburg?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Indicative pricing for common painting jobs — final quote provided after in-home assessment
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-violet-700 text-white">
                <tr>
                  <th className="p-4 text-left">Painting Job</th>
                  <th className="p-4 text-left">Budget Paint</th>
                  <th className="p-4 text-left">Premium Paint</th>
                  <th className="p-4 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {pricingGuide.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">{item.service}</td>
                    <td className="p-4 text-green-700 font-semibold">{item.budget}</td>
                    <td className="p-4 text-violet-700 font-semibold">{item.midRange}</td>
                    <td className="p-4 text-sm text-muted-foreground">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-violet-50 border border-violet-200 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-violet-600 shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <strong>What affects the price:</strong> Surface condition (new vs old, cracks,
                damp), number of colour changes, ceiling height, paint brand selected, and
                accessibility. We provide a precise written quote after visiting your property.
                Paint cost is included in our quotes.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How Does Professional Painting Work?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our 6-step process is why our paint jobs look better and last longer
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-5xl font-bold text-violet-500/20 mb-2">{step.step}</div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription className="mt-2 mb-3">{step.description}</CardDescription>
                  <div className="bg-violet-50 border border-violet-100 rounded px-3 py-2 text-sm">
                    <span className="text-muted-foreground">Timeframe: </span>
                    <span className="font-semibold text-violet-700">{step.duration}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Paint Brands */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Paint Brands Do You Use?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We work with South Africa's leading paint brands — no cheap substitutes or no-name
            products
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paintBrands.map((brand, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-violet-700">{brand.brand}</CardTitle>
                  <CardDescription className="space-y-2 mt-2">
                    <div>
                      <div className="text-xs font-semibold text-foreground mb-0.5">Popular Ranges</div>
                      <div className="text-xs">{brand.range}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground mb-0.5">Finishes</div>
                      <div className="text-xs">{brand.finish}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground mb-0.5">Best For</div>
                      <div className="text-xs">{brand.bestFor}</div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Colour Tips */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Colour & Finish Tips From Our Painters
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Advice we give every client before they choose their colours
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {colourTips.map((item, index) => (
              <div
                key={index}
                className="bg-card border rounded-lg p-5 flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <CheckCircle className="h-6 w-6 text-violet-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold mb-1">{item.tip}</div>
                  <div className="text-sm text-muted-foreground">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Areas */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Painting Services Available Near You
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We quote and paint across all Johannesburg and Gauteng areas — typically booked within
            the same week
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {responseAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-violet-600" />
                    <h3 className="font-bold">{area.area}</h3>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Booking</div>
                    <div className="text-lg font-bold text-violet-600">{area.responseTime}</div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-violet-100 text-violet-700 inline-block mt-2">
                    Free Quote Visit
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our Painting Service in Johannesburg?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-violet-600 mx-auto mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Painting Questions Answered
          </h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>How much does it cost to paint a house in Johannesburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Interior painting for a 3-bedroom house in Johannesburg costs R8,500-R22,000
                  depending on paint quality, wall condition, and number of rooms. Exterior painting
                  for the same property runs R12,000-R38,000. Ceilings are usually priced separately
                  at R650-R2,200 per room. We provide a free in-home quote after assessing your
                  specific property — call 067 601 4490 to book yours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How long does it take to paint a house in Johannesburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A single room takes 1-2 days including prep and two coats. A full interior of a
                  3-bedroom house typically takes 4-7 days. Exterior painting takes 2-7 days
                  depending on size and surface condition. We don't rush — proper drying time between
                  coats is non-negotiable for a lasting finish.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's the difference between interior and exterior paint?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Exterior paint is formulated to withstand UV rays, rain, temperature changes, and
                  mould — it's more flexible and durable than interior paint. Interior paint focuses
                  on washability, low odour, and a smooth finish. Using interior paint outside leads
                  to rapid fading and flaking — always use the correct product for the surface.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you paint ceilings and fix water stains?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — ceiling painting is one of our most requested services. Water-stained ceilings
                  are first treated with a stain-blocking primer (skipping this causes the stain to
                  bleed through new paint), then painted with two coats of quality ceiling white or
                  colour. If the ceiling has structural damage from a leak, our{" "}
                  <Link href="/drywall-ceilings" className="text-primary hover:underline">
                    drywall and ceiling repair team
                  </Link>{" "}
                  fixes it first before we paint.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can you paint my house before I sell it?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — pre-sale painting is one of the highest ROI improvements you can make before
                  listing. Fresh neutral paint makes a property feel new, photograph better, and
                  appeal to more buyers. We understand the urgency of sale timelines and prioritise
                  pre-sale painting jobs. Call us with your listing date and we'll work backwards to
                  get it done in time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you do move-out painting for tenants in Gauteng?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — we handle move-out painting for tenants and landlords across Gauteng. Whether
                  it's a full repaint or just touching up marked and scuffed walls, we work fast and
                  can often complete an apartment in 1-2 days. We also cover general{" "}
                  <Link href="/move-out-repairs-gauteng" className="text-primary hover:underline">
                    move-out repairs
                  </Link>{" "}
                  including fixing doors, handles, and minor carpentry — so you can get your full
                  deposit back.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you fix damp walls before painting?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — painting over damp walls without treating them first is money wasted. We
                  identify the cause of the damp, treat the wall with the correct anti-damp primer
                  or sealant, and then paint. For more serious damp issues we work alongside our{" "}
                  <Link href="/waterproofing-repairs-gauteng" className="text-primary hover:underline">
                    waterproofing and leak repair team
                  </Link>{" "}
                  to fix the source before any paint goes on.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What areas in Johannesburg do you paint in?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We paint throughout Johannesburg and all of Gauteng — Sandton, Randburg, Fourways,
                  Midrand, Centurion, Pretoria, Roodepoort, Edenvale, Boksburg, Kempton Park,
                  Johannesburg South, Alberton, Benoni, Germiston, Vereeniging, Krugersdorp, and
                  surrounding areas. We offer free quote visits across all these areas with no
                  travel fee charged.
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
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            {relatedServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base">
                    <Link href={service.href} className="hover:text-violet-600 transition-colors">
                      {service.name}
                    </Link>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Painting Services Across All Gauteng Areas
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Interior and exterior painting available throughout Johannesburg and Gauteng
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {areaPages.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="flex items-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent hover:shadow-md transition-all group"
              >
                <MapPin className="h-4 w-4 text-violet-500 shrink-0" />
                <span className="text-sm font-medium group-hover:text-violet-600 transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-violet-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Paintbrush className="h-16 w-16 mx-auto mb-6 opacity-60" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for a Fresh Coat of Paint?
          </h2>
          <p className="text-xl mb-8 text-violet-100">
            Free in-home quote across all of Johannesburg and Gauteng. Quality paint, proper prep,
            clean finish — guaranteed.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Phone className="h-8 w-8 mx-auto mb-2 text-violet-300" />
                <CardTitle>Call Us</CardTitle>
                <CardDescription className="text-violet-200">
                  <a href="tel:0676014490" className="text-xl font-bold hover:underline text-white">
                    067 601 4490
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Calendar className="h-8 w-8 mx-auto mb-2 text-violet-300" />
                <CardTitle>Book a Quote</CardTitle>
                <CardDescription className="text-violet-200 font-semibold">
                  Free In-Home Visit
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Mail className="h-8 w-8 mx-auto mb-2 text-violet-300" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription className="text-violet-200">
                  <a href="mailto:info@granitecarpentry.co.za" className="hover:underline text-sm text-white">
                    info@granitecarpentry.co.za
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Button
            size="lg"
            className="text-lg px-8 bg-violet-400 text-violet-900 hover:bg-violet-300 font-bold"
            asChild
          >
            <a href="tel:0676014490">
              <Phone className="mr-2 h-5 w-5" />
              BOOK FREE QUOTE VISIT
            </a>
          </Button>

          <p className="mt-6 text-sm text-violet-300">
            Mon–Sat 8am–5pm • Free quote • Paint cost included in quote
          </p>
        </div>
      </section>
    </div>
  )
}
