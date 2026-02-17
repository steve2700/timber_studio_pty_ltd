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
  Zap,
  AlertCircle,
  Star,
  Award,
  ThumbsUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Same-Day Kitchen Repairs Gauteng 2026 | Fast Kitchen Fix Service",
  description:
    "Same-day kitchen repairs across Gauteng. Broken cupboard doors, hinges, handles, countertops & more fixed today. Rapid response. Call 067 601 4490 for immediate help!",
  openGraph: {
    title: "Same-Day Kitchen Repairs Gauteng | Fixed Today",
    description:
      "Fast same-day kitchen repair service across Gauteng. Broken cupboard doors, hinges, drawers, countertops fixed the same day you call.",
    url: "https://granitecarpentry.co.za/same-day-kitchen-repairs-gauteng",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/same-day-kitchen-repairs-gauteng",
  },
}

export default function SameDayKitchenRepairsGautengPage() {
  const repairs = [
    {
      title: "Cupboard Door Repairs",
      description:
        "Doors hanging off, not closing properly, or completely detached. We refit, realign, or replace on the spot.",
      fixTime: "30-60 mins",
      urgency: "High",
    },
    {
      title: "Broken Hinge Replacement",
      description:
        "Snapped, bent, or stripped hinges replaced with quality soft-close hardware. All brands and sizes stocked.",
      fixTime: "15-30 mins",
      urgency: "High",
    },
    {
      title: "Drawer Repair & Replacement",
      description:
        "Broken runners, collapsed drawers, stuck mechanisms — fixed or replaced same day.",
      fixTime: "30-60 mins",
      urgency: "Medium",
    },
    {
      title: "Kitchen Handle Replacement",
      description:
        "Snapped or loose handles on cupboards and drawers replaced quickly. Wide range of styles available.",
      fixTime: "15-30 mins",
      urgency: "Medium",
    },
    {
      title: "Countertop Chip & Crack Repair",
      description:
        "Granite, quartz, or laminate countertop damage repaired on-site to restore appearance and function.",
      fixTime: "60-120 mins",
      urgency: "Medium",
    },
    {
      title: "Kickboard & Plinth Repairs",
      description:
        "Loose, broken, or missing kickboards refitted or replaced to give your kitchen a clean, finished look.",
      fixTime: "30-45 mins",
      urgency: "Low",
    },
    {
      title: "Soft-Close Mechanism Upgrade",
      description:
        "Noisy slamming doors and drawers upgraded to soft-close hardware — same day fitting available.",
      fixTime: "45-90 mins",
      urgency: "Medium",
    },
    {
      title: "Cupboard Shelf Repair",
      description:
        "Sagging, broken, or missing shelves inside kitchen cupboards replaced or resupported quickly.",
      fixTime: "20-45 mins",
      urgency: "Medium",
    },
    {
      title: "Water-Damaged Cabinet Repair",
      description:
        "Swollen or warped cabinet bases and sides from leaks assessed, repaired, or replaced same day where possible.",
      fixTime: "60-120 mins",
      urgency: "High",
    },
    {
      title: "Kitchen Door Alignment",
      description:
        "Doors that won't line up, gaps between doors, or doors catching each other — adjusted and realigned fast.",
      fixTime: "30-60 mins",
      urgency: "Medium",
    },
    {
      title: "Laminate Peeling Repair",
      description:
        "Peeling or bubbling laminate on cupboard doors and panels reglued and clamped for a lasting fix.",
      fixTime: "45-90 mins",
      urgency: "Low",
    },
    {
      title: "Move-Out Kitchen Repairs",
      description:
        "Tenants and landlords — we fix kitchen damage fast before inspections. Same-day availability for urgent cases.",
      fixTime: "60-180 mins",
      urgency: "High",
    },
  ]

  const pricingGuide = [
    {
      service: "Basic Hinge Replacement (per hinge)",
      standard: "R150 - R280",
      sameDay: "R200 - R350",
    },
    {
      service: "Cupboard Door Rehang & Align",
      standard: "R350 - R650",
      sameDay: "R450 - R800",
    },
    {
      service: "Drawer Runner Replacement",
      standard: "R450 - R850",
      sameDay: "R550 - R1,000",
    },
    {
      service: "Handle Replacement (per handle)",
      standard: "R120 - R250",
      sameDay: "R180 - R320",
    },
    {
      service: "Soft-Close Upgrade (per door)",
      standard: "R280 - R480",
      sameDay: "R350 - R580",
    },
    {
      service: "Countertop Chip Repair",
      standard: "R650 - R1,500",
      sameDay: "R850 - R1,800",
    },
    {
      service: "Callout Fee (Gauteng)",
      standard: "R450 - R650",
      sameDay: "R650 - R950",
    },
    {
      service: "Water Damage Assessment & Repair",
      standard: "R850 - R2,500",
      sameDay: "R1,200 - R3,000",
    },
  ]

  const howItWorks = [
    {
      step: "01",
      title: "Call Us Before 12pm",
      description:
        "Call 067 601 4490 before noon for guaranteed same-day service. Afternoon calls are accommodated where possible depending on availability.",
      icon: Phone,
    },
    {
      step: "02",
      title: "Describe the Problem",
      description:
        "Tell us what's broken and where you're located. We'll give you an estimated price range over the phone and confirm a same-day arrival window.",
      icon: Wrench,
    },
    {
      step: "03",
      title: "We Arrive & Assess",
      description:
        "Our carpenter arrives with a fully stocked van — tools, hardware, and common replacement parts ready to fix most issues immediately.",
      icon: Clock,
    },
    {
      step: "04",
      title: "Fixed the Same Day",
      description:
        "We quote on-site before starting. Most kitchen repairs are completed within 1-3 hours. You sign off when you're satisfied.",
      icon: CheckCircle,
    },
  ]

  const responseAreas = [
    { area: "Sandton", responseTime: "45-75 mins", coverage: "Full Coverage" },
    { area: "Johannesburg North", responseTime: "45-75 mins", coverage: "Full Coverage" },
    { area: "Randburg", responseTime: "50-80 mins", coverage: "Full Coverage" },
    { area: "Fourways", responseTime: "50-80 mins", coverage: "Full Coverage" },
    { area: "Midrand", responseTime: "60-90 mins", coverage: "Full Coverage" },
    { area: "Centurion", responseTime: "60-90 mins", coverage: "Full Coverage" },
    { area: "Pretoria", responseTime: "70-100 mins", coverage: "Full Coverage" },
    { area: "Edenvale", responseTime: "55-85 mins", coverage: "Full Coverage" },
    { area: "Boksburg", responseTime: "60-90 mins", coverage: "Full Coverage" },
    { area: "Johannesburg South", responseTime: "60-90 mins", coverage: "Full Coverage" },
    { area: "Roodepoort", responseTime: "55-85 mins", coverage: "Full Coverage" },
    { area: "Kempton Park", responseTime: "60-90 mins", coverage: "Full Coverage" },
  ]

  const whyUs = [
    {
      icon: Zap,
      title: "Fully Stocked Van",
      description:
        "We arrive with common hinges, runners, handles, and hardware. No waiting for parts — most repairs done in one visit.",
    },
    {
      icon: Shield,
      title: "Transparent Pricing",
      description:
        "We quote before we start. No surprises on your invoice. Same-day premium is clearly communicated upfront.",
    },
    {
      icon: Star,
      title: "Kitchen Specialists",
      description:
        "We don't just fix — we understand kitchens. Our carpenters also handle full kitchen renovations and granite countertops.",
    },
    {
      icon: Award,
      title: "20+ Years Experience",
      description:
        "We've fixed thousands of kitchens across Gauteng. Whatever the brand or style, we've seen it and fixed it before.",
    },
  ]

  const whenToCallUs = [
    {
      situation: "Cupboard door fell off this morning",
      action: "Call before 12pm for same-day fix",
      urgency: "Today",
    },
    {
      situation: "Drawer won't open, food inside",
      action: "Emergency same-day dispatch available",
      urgency: "Today",
    },
    {
      situation: "Moving out in 2 days, need repairs",
      action: "Same-day assessment + repairs",
      urgency: "Today",
    },
    {
      situation: "Landlord inspection tomorrow",
      action: "Priority same-day booking",
      urgency: "Today",
    },
    {
      situation: "Countertop chipped at dinner party",
      action: "Same-day or next morning repair",
      urgency: "Today / Tomorrow",
    },
    {
      situation: "Water leak damaged cabinet base",
      action: "Same-day assessment + emergency repair",
      urgency: "Today",
    },
  ]

  const relatedServices = [
    { name: "Cupboard Door Repair Gauteng", href: "/cupboard-door-repair-gauteng" },
    { name: "Kitchen Cupboards", href: "/kitchen-cupboards" },
    { name: "Kitchen Renovations", href: "/kitchen-renovations" },
    { name: "Granite Countertops", href: "/granite-countertops" },
    { name: "Quartz Countertops", href: "/quartz-countertops" },
    { name: "Same-Day Carpenter Gauteng", href: "/same-day-carpenter-gauteng" },
    { name: "Door Handle Replacement", href: "/door-handle-replacement-gauteng" },
    { name: "Move-Out Repairs Gauteng", href: "/move-out-repairs-gauteng" },
    { name: "Rental Property Repairs", href: "/rental-property-repairs-gauteng" },
    { name: "Kitchen Renovation Cost", href: "/kitchen-renovation-cost-johannesburg" },
    { name: "Built-In Cupboards", href: "/built-in-cupboards" },
    { name: "Countertop Cutting Service", href: "/countertop-cutting-service-gauteng" },
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
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-background py-20 px-4 md:px-6 border-b-4 border-orange-500">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              <Zap className="h-5 w-5" />
              SAME-DAY SERVICE AVAILABLE ACROSS GAUTENG
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Same-Day Kitchen Repairs Gauteng
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Broken kitchen cupboard door? Drawer won't open? Countertop chipped? We fix it
              today. Fast, professional same-day kitchen repairs across Johannesburg and Gauteng —
              call before 12pm for guaranteed same-day service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="text-lg px-8 bg-orange-500 hover:bg-orange-600 text-white">
                <a href="tel:0676014490" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL NOW: 067 601 4490
                </a>
              </Button>
              <div className="text-center sm:text-left">
                <div className="font-bold text-lg">Call before 12pm</div>
                <div className="text-sm text-muted-foreground">For guaranteed same-day service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-orange-200">
              <CardHeader>
                <div className="text-4xl font-bold text-orange-500 mb-2">Same</div>
                <CardTitle>Day Service</CardTitle>
                <CardDescription>Call before 12pm</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-orange-200">
              <CardHeader>
                <div className="text-4xl font-bold text-orange-500 mb-2">1-3hr</div>
                <CardTitle>Most Repairs</CardTitle>
                <CardDescription>Completed in one visit</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-orange-200">
              <CardHeader>
                <div className="text-4xl font-bold text-orange-500 mb-2">Stocked</div>
                <CardTitle>Van on Arrival</CardTitle>
                <CardDescription>Parts ready to install</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-orange-200">
              <CardHeader>
                <div className="text-4xl font-bold text-orange-500 mb-2">20+</div>
                <CardTitle>Years Experience</CardTitle>
                <CardDescription>Kitchen repair specialists</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How Does Same-Day Kitchen Repair Work?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Simple, fast, and transparent — from your call to a fixed kitchen
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-orange-500/30 mb-2">{step.step}</div>
                  <step.icon className="h-10 w-10 text-orange-500 mx-auto mb-3" />
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription className="mt-2">{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Repairs We Fix */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Kitchen Repairs Can You Fix the Same Day?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our stocked van means we can handle most kitchen repairs on the very first visit
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repairs.map((repair, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow border-l-4 ${
                  repair.urgency === "High"
                    ? "border-l-orange-500"
                    : repair.urgency === "Medium"
                    ? "border-l-blue-400"
                    : "border-l-green-400"
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-1">
                    <CardTitle className="text-base">{repair.title}</CardTitle>
                    <span
                      className={`text-xs px-2 py-1 rounded-full shrink-0 ml-2 ${
                        repair.urgency === "High"
                          ? "bg-orange-100 text-orange-700"
                          : repair.urgency === "Medium"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {repair.urgency}
                    </span>
                  </div>
                  <CardDescription className="mb-3 text-sm">{repair.description}</CardDescription>
                  <div className="bg-muted rounded px-3 py-1.5 text-sm inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span className="text-muted-foreground">Fix time: </span>
                    <span className="font-semibold">{repair.fixTime}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* When to Call Us */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            When Should You Call for Same-Day Kitchen Repairs?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            If any of these situations sound familiar, call us now
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {whenToCallUs.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-orange-500 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="font-semibold mb-1">{item.situation}</div>
                      <div className="text-sm text-muted-foreground mb-2">{item.action}</div>
                      <span className="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-700 font-medium">
                        Fix: {item.urgency}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Same-Day Kitchen Repair Pricing in Gauteng
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transparent pricing — standard rates vs same-day premium. Quoted on-site before work begins.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-orange-500 text-white">
                <tr>
                  <th className="p-4 text-left">Repair Type</th>
                  <th className="p-4 text-left">Standard Rate</th>
                  <th className="p-4 text-left">Same-Day Rate</th>
                </tr>
              </thead>
              <tbody>
                {pricingGuide.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-medium">{item.service}</td>
                    <td className="p-4 text-green-700 font-semibold">{item.standard}</td>
                    <td className="p-4 text-orange-600 font-semibold">{item.sameDay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <strong>Transparent pricing:</strong> All rates include labour. Materials billed separately
                at cost. Final quote confirmed on-site before any work starts. No call-out fee charged
                if you proceed with repairs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How Fast Can You Get a Kitchen Repair in Gauteng?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estimated arrival times from when you call — same-day bookings
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {responseAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-orange-500" />
                    <h3 className="font-bold">{area.area}</h3>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs text-muted-foreground">Arrival Time</div>
                      <div className="text-lg font-bold text-orange-500">{area.responseTime}</div>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 inline-block">
                      {area.coverage}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our Same-Day Kitchen Repair Service?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
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
            Same-Day Kitchen Repair Questions Answered
          </h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Can you fix my kitchen cupboard door the same day?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — kitchen cupboard door repairs are one of our most common same-day jobs. Whether
                  the door has fallen off, won't close properly, or the hinges are broken, call us before
                  12pm and we'll have it fixed the same day. We carry hinges, runners, and common
                  hardware in our vans for immediate repairs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer same-day kitchen repairs in Johannesburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer same-day kitchen repair services throughout Johannesburg, Sandton,
                  Randburg, Fourways, Midrand, and all of Gauteng. Call before 12pm on 067 601 4490
                  for guaranteed same-day service. Afternoon calls are accommodated where our schedule
                  allows.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How much does a same-day kitchen repair cost in Gauteng?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Same-day kitchen repair costs depend on the job. A hinge replacement starts at around
                  R200-R350 per hinge, cupboard door rehang costs R450-R800, and drawer runner
                  replacement runs R550-R1,000. A same-day callout fee of R650-R950 applies and is
                  waived if you proceed with repairs. We always quote on-site before starting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What time do I need to call for same-day kitchen repairs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Call before 12pm (noon) for guaranteed same-day kitchen repairs across Gauteng. We
                  aim to arrive within 45-90 minutes of your call depending on your location. Calls made
                  after 12pm are taken on a best-effort basis depending on our schedule — call us and
                  we'll always try our best to help you the same day.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can you fix kitchen repairs before a rental inspection?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — we specialise in urgent pre-inspection and move-out kitchen repairs for tenants
                  and landlords across Gauteng. Broken cupboard doors, damaged hinges, missing handles,
                  and countertop chips are all fixable the same day. Call us as early as possible before
                  your inspection date for priority booking. We also cover general{" "}
                  <Link href="/rental-property-repairs-gauteng" className="text-primary hover:underline">
                    rental property repairs
                  </Link>{" "}
                  and{" "}
                  <Link href="/move-out-repairs-gauteng" className="text-primary hover:underline">
                    move-out repairs
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you carry parts and hardware in your van?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — our vans are stocked with the most common kitchen repair hardware including
                  hinges (standard and soft-close), drawer runners, handles, shelf supports, kickboard
                  clips, and basic timber. This means most repairs are completed in a single visit
                  without needing to order parts. Specialist or matching parts may require a second visit
                  in some cases.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can you repair water-damaged kitchen cupboards the same day?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We can assess and start repairs on water-damaged kitchen cupboards the same day.
                  Depending on the extent of damage — swollen boards, warped doors, damaged bases — some
                  repairs may require replacement panels or new cabinet bases. We'll give you an honest
                  on-site assessment and a clear quote. If replacement parts are needed, we'll book a
                  follow-up as quickly as possible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you also do full kitchen renovations or just repairs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We do both. While same-day service is focused on urgent repairs, we also offer complete{" "}
                  <Link href="/kitchen-renovations" className="text-primary hover:underline">
                    kitchen renovations
                  </Link>
                  ,{" "}
                  <Link href="/kitchen-cupboards" className="text-primary hover:underline">
                    custom kitchen cupboards
                  </Link>
                  , and{" "}
                  <Link href="/granite-countertops" className="text-primary hover:underline">
                    granite countertop installations
                  </Link>{" "}
                  across Gauteng. Many clients start with a repair and upgrade their kitchen later — we
                  can advise on when a repair makes sense vs a full replacement.
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
                    <Link href={service.href} className="hover:text-orange-500 transition-colors">
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
            Same-Day Kitchen Repairs Available in These Areas
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Covering all of Johannesburg and Gauteng — we come to you
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areaPages.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="flex items-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent hover:shadow-md transition-all group"
              >
                <MapPin className="h-4 w-4 text-orange-500 shrink-0" />
                <span className="text-sm font-medium group-hover:text-orange-500 transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-orange-500 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <ThumbsUp className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Kitchen Repair Fixed Today?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Call before 12pm for guaranteed same-day service across Johannesburg and Gauteng.
            Transparent pricing. Fully stocked van. Fixed in one visit.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white text-primary">
              <CardHeader>
                <Phone className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                <CardTitle>Call Now</CardTitle>
                <CardDescription>
                  <a href="tel:0676014490" className="text-2xl font-bold hover:underline text-orange-500">
                    067 601 4490
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white text-primary">
              <CardHeader>
                <Clock className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                <CardTitle>Call Before</CardTitle>
                <CardDescription className="text-lg font-semibold">12pm for Same Day</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white text-primary">
              <CardHeader>
                <Mail className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription>
                  <a
                    href="mailto:info@granitecarpentry.co.za"
                    className="hover:underline text-sm"
                  >
                    info@granitecarpentry.co.za
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Button
            size="lg"
            variant="secondary"
            asChild
            className="text-lg px-8 bg-white text-orange-500 hover:bg-gray-100"
          >
            <a href="tel:0676014490">
              <Phone className="mr-2 h-5 w-5" />
              CALL FOR SAME-DAY BOOKING
            </a>
          </Button>

          <p className="mt-6 text-sm opacity-80">
            Mon–Sat 8am–5pm standard hours • After-hours available for emergencies
          </p>
        </div>
      </section>
    </div>
  )
}
