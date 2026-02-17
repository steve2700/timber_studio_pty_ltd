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
  AlertCircle,
  Zap,
  Star,
  Award,
  Droplets,
  Home,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Waterproofing & Leak Repairs Gauteng 2026 | Emergency Leak Specialists",
  description:
    "Expert waterproofing & leak repairs across Gauteng. Leaking roofs, wet walls, bathroom seepage, ceiling water damage fixed fast. Emergency response. Call 067 601 4490!",
  openGraph: {
    title: "Waterproofing & Leak Repairs Gauteng | Emergency Leak Specialists",
    description:
      "Fast waterproofing and leak repair service across Gauteng. Roofs, walls, bathrooms, ceilings — fixed properly the first time. Emergency response available.",
    url: "https://granitecarpentry.co.za/waterproofing-repairs-gauteng",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/waterproofing-repairs-gauteng",
  },
}

export default function WaterproofingRepairsGautengPage() {
  const services = [
    {
      title: "Roof Leak Repairs",
      description:
        "Leaking flat roofs, pitched roofs, and roof joints sealed and waterproofed. We find the source and fix it permanently.",
      responseTime: "Same Day",
      urgency: "Critical",
    },
    {
      title: "Bathroom Waterproofing",
      description:
        "Shower leaks, bath seepage, and wet room waterproofing using premium membrane systems before tiling.",
      responseTime: "1-2 Days",
      urgency: "High",
    },
    {
      title: "Wet Wall Repairs",
      description:
        "Rising damp, penetrating damp, and water-damaged walls treated, dried, and re-sealed properly.",
      responseTime: "Same Day",
      urgency: "High",
    },
    {
      title: "Ceiling Water Damage Repair",
      description:
        "Water-stained, sagging, or collapsed ceilings caused by leaks repaired and repainted after source is fixed.",
      responseTime: "Same Day",
      urgency: "Critical",
    },
    {
      title: "Balcony & Deck Waterproofing",
      description:
        "Balcony membranes, deck waterproofing, and parapet wall sealing to prevent water ingress into rooms below.",
      responseTime: "2-3 Days",
      urgency: "Medium",
    },
    {
      title: "Basement & Below-Ground Waterproofing",
      description:
        "Below-slab and basement waterproofing using crystalline and membrane systems for permanent protection.",
      responseTime: "2-5 Days",
      urgency: "Medium",
    },
    {
      title: "Expansion Joint Sealing",
      description:
        "Failed expansion joints in walls, floors, and roofs resealed with flexible waterproofing compounds.",
      responseTime: "Same Day",
      urgency: "High",
    },
    {
      title: "Plumbing Leak Damage Repair",
      description:
        "After your plumber fixes the pipe, we repair the water-damaged walls, floors, ceilings, and cupboards.",
      responseTime: "Same Day",
      urgency: "High",
    },
    {
      title: "Window & Door Frame Sealing",
      description:
        "Water leaking around window or door frames sealed and waterproofed to stop internal water damage.",
      responseTime: "Same Day",
      urgency: "Medium",
    },
    {
      title: "Retaining Wall Waterproofing",
      description:
        "Retaining walls treated with waterproofing membranes and drainage systems to prevent structural water damage.",
      responseTime: "3-5 Days",
      urgency: "Medium",
    },
    {
      title: "Damp Proofing Injection",
      description:
        "Rising damp in brick and block walls treated with chemical damp proof course injection for long-term results.",
      responseTime: "1-2 Days",
      urgency: "Medium",
    },
    {
      title: "Garage & Driveway Waterproofing",
      description:
        "Garage floors, aprons, and driveways sealed and waterproofed to prevent moisture ingress and surface damage.",
      responseTime: "1-2 Days",
      urgency: "Low",
    },
  ]

  const warningSignsData = [
    {
      sign: "Brown or yellow ceiling stains",
      cause: "Roof leak or plumbing leak above",
      urgency: "Act Immediately",
    },
    {
      sign: "Bubbling or peeling paint on walls",
      cause: "Moisture trapped behind paint — damp ingress",
      urgency: "Act This Week",
    },
    {
      sign: "Musty smell in rooms",
      cause: "Hidden moisture or mould behind walls",
      urgency: "Investigate Now",
    },
    {
      sign: "Sagging or soft ceiling",
      cause: "Water pooling above — risk of collapse",
      urgency: "Act Immediately",
    },
    {
      sign: "White chalky marks on walls",
      cause: "Efflorescence — salt deposits from rising damp",
      urgency: "Act This Week",
    },
    {
      sign: "Wet floor after rain near windows",
      cause: "Failed window or door frame seals",
      urgency: "Act This Week",
    },
    {
      sign: "Mould growing on walls or ceilings",
      cause: "Persistent moisture — health risk",
      urgency: "Act Immediately",
    },
    {
      sign: "Water marks after neighbour showers",
      cause: "Failed bathroom waterproofing membrane",
      urgency: "Act This Week",
    },
  ]

  const pricingGuide = [
    {
      service: "Leak Investigation & Assessment",
      priceRange: "R650 - R1,200",
      notes: "Credited against repair cost",
    },
    {
      service: "Roof Leak Repair (Small - up to 2m²)",
      priceRange: "R1,800 - R4,500",
      notes: "Sealant + membrane application",
    },
    {
      service: "Roof Leak Repair (Large - 2m²+)",
      priceRange: "R4,500 - R18,000",
      notes: "Depends on extent and access",
    },
    {
      service: "Bathroom Waterproofing (Shower)",
      priceRange: "R3,500 - R8,500",
      notes: "Before retiling",
    },
    {
      service: "Wet Wall Treatment (per wall)",
      priceRange: "R2,200 - R6,500",
      notes: "Includes drying & sealing",
    },
    {
      service: "Ceiling Repair After Leak",
      priceRange: "R1,500 - R6,000",
      notes: "Patch, skim & paint",
    },
    {
      service: "Balcony Waterproofing (per m²)",
      priceRange: "R380 - R750/m²",
      notes: "Membrane system",
    },
    {
      service: "Damp Proof Injection (per m)",
      priceRange: "R450 - R850/m",
      notes: "Chemical DPC treatment",
    },
    {
      service: "Window/Door Frame Sealing",
      priceRange: "R350 - R900 per frame",
      notes: "Flexible sealant application",
    },
    {
      service: "Emergency Callout Fee",
      priceRange: "R750 - R1,400",
      notes: "Credited if repairs proceed",
    },
  ]

  const repairProcess = [
    {
      step: "01",
      title: "Emergency Call & Assessment",
      description:
        "Call us immediately. We ask the right questions to determine urgency and dispatch a technician same day for active leaks.",
      duration: "Within 2 hours",
    },
    {
      step: "02",
      title: "Leak Source Investigation",
      description:
        "We find the actual source of the leak — not just treat the symptom. Using moisture meters and inspection, we trace water back to its entry point.",
      duration: "1-3 hours",
    },
    {
      step: "03",
      title: "Detailed Repair Quote",
      description:
        "On-site quote before any work begins. We explain exactly what's needed, why, and what it costs. No surprises.",
      duration: "Same day",
    },
    {
      step: "04",
      title: "Waterproofing & Repair",
      description:
        "We fix the source first, then waterproof properly using the right system for the surface — membrane, sealant, injection, or coating.",
      duration: "1-5 days",
    },
    {
      step: "05",
      title: "Damage Restoration",
      description:
        "Once watertight, we repair all secondary damage — ceilings, walls, flooring, cupboards — so your home looks like nothing ever happened.",
      duration: "1-7 days",
    },
    {
      step: "06",
      title: "Guarantee & Sign-Off",
      description:
        "All waterproofing work is guaranteed. We do a final inspection with you and provide written documentation of the repair and guarantee period.",
      duration: "Final day",
    },
  ]

  const responseAreas = [
    { area: "Sandton", responseTime: "30-60 mins", type: "Emergency" },
    { area: "Johannesburg North", responseTime: "45-75 mins", type: "Emergency" },
    { area: "Randburg", responseTime: "45-75 mins", type: "Emergency" },
    { area: "Fourways", responseTime: "50-80 mins", type: "Emergency" },
    { area: "Midrand", responseTime: "55-85 mins", type: "Emergency" },
    { area: "Centurion", responseTime: "60-90 mins", type: "Emergency" },
    { area: "Pretoria", responseTime: "65-95 mins", type: "Emergency" },
    { area: "Johannesburg South", responseTime: "55-85 mins", type: "Emergency" },
    { area: "Edenvale", responseTime: "50-80 mins", type: "Emergency" },
    { area: "Boksburg", responseTime: "55-85 mins", type: "Emergency" },
    { area: "Roodepoort", responseTime: "50-80 mins", type: "Emergency" },
    { area: "Kempton Park", responseTime: "55-85 mins", type: "Emergency" },
  ]

  const whyUs = [
    {
      icon: Zap,
      title: "Same-Day Emergency Response",
      description:
        "Active leaks are emergencies. We prioritise same-day dispatch for roof leaks, ceiling collapses, and flooding.",
    },
    {
      icon: Shield,
      title: "Fix the Source, Not the Symptom",
      description:
        "We use moisture meters and proper investigation to find where water is actually entering — not just patch what's visible.",
    },
    {
      icon: Wrench,
      title: "Full Repair In-House",
      description:
        "We waterproof AND repair the damage — ceilings, walls, cupboards. One team, one call, complete fix.",
    },
    {
      icon: Award,
      title: "Guaranteed Workmanship",
      description:
        "All waterproofing comes with a written workmanship guarantee. We stand behind our work long after we leave.",
    },
  ]

  const relatedServices = [
    { name: "Drywall & Ceilings", href: "/drywall-ceilings" },
    { name: "Ceiling Repairs Sandton", href: "/ceiling-repairs-sandton" },
    { name: "Ceiling Repairs Randburg", href: "/ceiling-repairs-randburg" },
    { name: "Ceiling Repairs Pretoria", href: "/ceiling-repairs-pretoria" },
    { name: "Ceiling Repairs Centurion", href: "/ceiling-repairs-centurion" },
    { name: "Bathroom Renovations", href: "/bathroom-renovations" },
    { name: "Same-Day Kitchen Repairs", href: "/same-day-kitchen-repairs-gauteng" },
    { name: "Emergency Carpenter Johannesburg", href: "/24-hour-emergency-carpenter-johannesburg" },
    { name: "Rental Property Repairs", href: "/rental-property-repairs-gauteng" },
    { name: "Move-Out Repairs Gauteng", href: "/move-out-repairs-gauteng" },
    { name: "Drywalling Contractors Johannesburg", href: "/drywalling-contractors-johannesburg" },
    { name: "Suspended Ceilings Johannesburg", href: "/suspended-ceilings-johannesburg" },
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
    { name: "Vereeniging", href: "/areas/vereeniging" },
    { name: "Vanderbijlpark", href: "/areas/vanderbijlpark" },
    { name: "Bedfordview", href: "/areas/bedfordview" },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 to-blue-900 py-20 px-4 md:px-6 text-white border-b-4 border-blue-500">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-200 px-4 py-2 rounded-full text-sm font-bold">
              <Droplets className="h-5 w-5" />
              EMERGENCY LEAK & WATERPROOFING SPECIALISTS — GAUTENG
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Waterproofing & Leak Repairs Gauteng
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Leaking roof? Wet walls? Water-damaged ceiling? We find the source and fix it
              properly — same day for emergencies. Expert waterproofing and leak repairs across
              Johannesburg and Gauteng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="text-lg px-8 bg-blue-500 hover:bg-blue-400 text-white">
                <a href="tel:0676014490" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL NOW: 067 601 4490
                </a>
              </Button>
              <div className="text-center sm:text-left">
                <div className="font-bold text-lg text-white">Emergency Response Available</div>
                <div className="text-sm text-blue-200">Same-day for active leaks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-blue-200">
              <CardHeader>
                <div className="text-4xl font-bold text-blue-600 mb-2">Same</div>
                <CardTitle>Day Response</CardTitle>
                <CardDescription>For active leaks</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-blue-200">
              <CardHeader>
                <div className="text-4xl font-bold text-blue-600 mb-2">Source</div>
                <CardTitle>Always Found</CardTitle>
                <CardDescription>Moisture meter investigation</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-blue-200">
              <CardHeader>
                <div className="text-4xl font-bold text-blue-600 mb-2">Full</div>
                <CardTitle>Repair In-House</CardTitle>
                <CardDescription>Waterproof + restore damage</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-blue-200">
              <CardHeader>
                <div className="text-4xl font-bold text-blue-600 mb-2">Written</div>
                <CardTitle>Guarantee</CardTitle>
                <CardDescription>On all waterproofing work</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Warning Signs You Have a Leak or Damp Problem
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Don't ignore these signs — water damage gets significantly worse and more expensive the
            longer it's left untreated
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {warningSignsData.map((item, index) => (
              <Card
                key={index}
                className={`hover:shadow-md transition-shadow border-l-4 ${
                  item.urgency === "Act Immediately"
                    ? "border-l-red-500"
                    : item.urgency === "Investigate Now"
                    ? "border-l-orange-500"
                    : "border-l-yellow-500"
                }`}
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <AlertCircle
                      className={`h-6 w-6 shrink-0 mt-0.5 ${
                        item.urgency === "Act Immediately"
                          ? "text-red-500"
                          : item.urgency === "Investigate Now"
                          ? "text-orange-500"
                          : "text-yellow-500"
                      }`}
                    />
                    <div className="flex-1">
                      <div className="font-bold mb-1">{item.sign}</div>
                      <div className="text-sm text-muted-foreground mb-2">{item.cause}</div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          item.urgency === "Act Immediately"
                            ? "bg-red-100 text-red-700"
                            : item.urgency === "Investigate Now"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.urgency}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="tel:0676014490" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Spot a Warning Sign? Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Waterproofing & Leak Repair Services We Offer
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Every type of water ingress problem fixed — roofs, walls, floors, bathrooms, and more
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow border-l-4 ${
                  service.urgency === "Critical"
                    ? "border-l-red-500"
                    : service.urgency === "High"
                    ? "border-l-blue-500"
                    : "border-l-green-500"
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-base">{service.title}</CardTitle>
                    <span
                      className={`text-xs px-2 py-1 rounded-full shrink-0 ml-2 ${
                        service.urgency === "Critical"
                          ? "bg-red-100 text-red-700"
                          : service.urgency === "High"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {service.urgency}
                    </span>
                  </div>
                  <CardDescription className="mb-3 text-sm">{service.description}</CardDescription>
                  <div className="bg-muted rounded px-3 py-1.5 text-sm inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="text-muted-foreground">Response: </span>
                    <span className="font-semibold">{service.responseTime}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How Do You Fix a Leak Properly?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our proven 6-step process finds the source, fixes it permanently, and restores all damage
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairProcess.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-5xl font-bold text-blue-500/20 mb-2">{step.step}</div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription className="mt-2 mb-3">{step.description}</CardDescription>
                  <div className="bg-blue-50 border border-blue-100 rounded px-3 py-2 text-sm">
                    <span className="text-muted-foreground">Timeframe: </span>
                    <span className="font-semibold text-blue-700">{step.duration}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How Much Does Waterproofing & Leak Repair Cost in Gauteng?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transparent pricing guide — final quote provided on-site after investigation
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="p-4 text-left">Service</th>
                  <th className="p-4 text-left">Price Range</th>
                  <th className="p-4 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {pricingGuide.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">{item.service}</td>
                    <td className="p-4 text-blue-700 font-bold">{item.priceRange}</td>
                    <td className="p-4 text-sm text-muted-foreground">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <strong>Important:</strong> Accurate pricing requires on-site investigation to find the
                true source of the leak. Prices above are indicative ranges. We always quote in full
                before starting any work. Investigation fee is credited against repair cost.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Areas */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Emergency Leak Response Times Across Gauteng
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We dispatch immediately for active leaks — here are typical arrival times from your call
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {responseAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <h3 className="font-bold">{area.area}</h3>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Arrival Time</div>
                    <div className="text-lg font-bold text-blue-600">{area.responseTime}</div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 inline-block mt-2">
                    {area.type} Response
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us for Waterproofing & Leak Repairs?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Waterproofing & Leak Repair Questions Answered
          </h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>How do I know if my roof is leaking or if it's a plumbing issue?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Roof leaks typically appear or worsen after rain — you'll see ceiling stains, drips,
                  or wet patches during or after wet weather. Plumbing leaks usually appear regardless
                  of weather, often after using water nearby (shower, bath, toilet, pipes). We use
                  moisture meters to trace the exact source. Call us and describe when the leak appears
                  — we can often advise over the phone before visiting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can you fix a leaking roof same day in Gauteng?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — we offer same-day emergency response for active roof leaks across Johannesburg
                  and Gauteng. We prioritise leaks that are causing active water ingress into the
                  property. Call 067 601 4490 immediately and we'll dispatch a technician. Sandton and
                  Johannesburg North typically have 30-60 minute arrival times.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How much does it cost to fix a leaking roof in Johannesburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Roof leak repairs in Johannesburg range from R1,800-R4,500 for small leaks up to 2m²,
                  and R4,500-R18,000 for larger areas depending on extent and roof access. An
                  investigation and assessment costs R650-R1,200 and is credited against your repair
                  bill. The only way to give an accurate quote is after seeing the leak — prices online
                  are always estimates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you repair the ceiling after fixing the leak?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — this is one of our key advantages. We waterproof AND restore all secondary
                  damage including water-stained, cracked, or collapsed ceilings. Our team handles{" "}
                  <Link href="/drywall-ceilings" className="text-primary hover:underline">
                    drywall and ceiling repairs
                  </Link>{" "}
                  in-house, so once the leak is fixed we patch, skim, and repaint the ceiling. No need
                  to find a separate contractor.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What causes rising damp in Gauteng homes?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rising damp occurs when groundwater moves upward through bricks and mortar via
                  capillary action. It's common in older Gauteng homes where the original damp proof
                  course has failed or was never installed. Signs include white chalky marks (efflorescence),
                  peeling paint at low wall level, and a musty smell. We treat rising damp with chemical
                  damp proof course injection — a long-term, proven solution.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you waterproof bathrooms before tiling?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — bathroom waterproofing before tiling is essential and one of the most important
                  steps in any{" "}
                  <Link href="/bathroom-renovations" className="text-primary hover:underline">
                    bathroom renovation
                  </Link>
                  . We apply a proper membrane system to shower floors and walls, wet room floors, and
                  around bath surrounds before any tiles go down. This prevents the slow water seepage
                  that causes damage to the structure below — a very common problem in Gauteng
                  apartments and cluster homes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How long does waterproofing last?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Quality waterproofing systems last 10-25 years depending on the product and surface.
                  Flexible membrane systems for bathrooms and balconies typically carry 10-year
                  guarantees. Roof coatings and sealants last 5-15 years with proper application.
                  We use reputable waterproofing products and provide written guarantees on our
                  workmanship. Proper surface preparation is key to longevity — we never cut corners
                  on prep.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>My neighbour's bathroom is leaking into my ceiling — who is responsible?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In sectional title and apartment buildings, this is a very common issue. Generally,
                  the owner of the unit where the leak originates is responsible for waterproofing
                  repairs, while your body corporate may also have obligations under the sectional
                  title rules. We can assess, document, and repair the damage from both sides —
                  fixing the source in the upper unit and repairing your ceiling below. We also
                  provide written reports useful for insurance or body corporate claims.
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
                    <Link href={service.href} className="hover:text-blue-600 transition-colors">
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
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Waterproofing & Leak Repairs Available Across Gauteng
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Emergency and scheduled waterproofing services throughout Johannesburg and Gauteng
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areaPages.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="flex items-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent hover:shadow-md transition-all group"
              >
                <MapPin className="h-4 w-4 text-blue-600 shrink-0" />
                <span className="text-sm font-medium group-hover:text-blue-600 transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-blue-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Droplets className="h-16 w-16 mx-auto mb-6 opacity-60" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Got a Leak? Don't Wait — Call Now
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Water damage gets worse every hour it's left. Same-day emergency response across
            Gauteng — we find the source and fix it properly.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Phone className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Emergency Line</CardTitle>
                <CardDescription className="text-blue-200">
                  <a href="tel:0676014490" className="text-xl font-bold hover:underline text-white">
                    067 601 4490
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Response Time</CardTitle>
                <CardDescription className="text-blue-200 font-semibold">
                  Same Day for Active Leaks
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Mail className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription className="text-blue-200">
                  <a href="mailto:info@granitecarpentry.co.za" className="hover:underline text-sm text-white">
                    info@granitecarpentry.co.za
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Button
            size="lg"
            className="text-lg px-8 bg-white text-blue-900 hover:bg-blue-50"
            asChild
          >
            <a href="tel:0676014490">
              <Phone className="mr-2 h-5 w-5" />
              CALL FOR EMERGENCY LEAK REPAIR
            </a>
          </Button>

          <p className="mt-6 text-sm text-blue-300">
            Investigation fee credited against repair cost • Written guarantee on all work
          </p>
        </div>
      </section>
    </div>
  )
}
