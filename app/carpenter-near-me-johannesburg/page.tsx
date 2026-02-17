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
  Home,
  Hammer,
  ThumbsUp,
  Navigation,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Carpenter Near Me Johannesburg 2026 | Local Carpenter Available Today",
  description:
    "Looking for a carpenter near you in Johannesburg? Local, trusted, same-day available. Doors, cupboards, kitchens, built-ins & more. Call 067 601 4490 — we come to you!",
  openGraph: {
    title: "Carpenter Near Me Johannesburg | Local Carpenter Available Today",
    description:
      "Find a trusted local carpenter in Johannesburg. Same-day available across Sandton, Randburg, Fourways, Midrand & all of Gauteng. Call now.",
    url: "https://granitecarpentry.co.za/carpenter-near-me-johannesburg",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/carpenter-near-me-johannesburg",
  },
}

export default function CarpenterNearMeJohannesburgPage() {
  const whatWeDoNearYou = [
    {
      title: "Emergency Door Repairs",
      description: "Broken door? Won't close? We're near you and can be there fast.",
      href: "/door-repair-gauteng",
      responseTime: "30-90 mins",
      urgency: "Emergency",
    },
    {
      title: "Kitchen Cupboard Repairs",
      description: "Broken hinges, doors off, drawers stuck — fixed same day near you.",
      href: "/same-day-kitchen-repairs-gauteng",
      responseTime: "Same Day",
      urgency: "Fast",
    },
    {
      title: "Custom Built-In Cupboards",
      description: "Bespoke wardrobes and storage built to fit your exact space.",
      href: "/custom-built-in-cupboards-johannesburg",
      responseTime: "2-3 Weeks",
      urgency: "Project",
    },
    {
      title: "Kitchen Renovations",
      description: "Complete kitchen transformations from design to final installation.",
      href: "/kitchen-renovations",
      responseTime: "2-4 Weeks",
      urgency: "Project",
    },
    {
      title: "Door Installation",
      description: "New doors hung and fitted — interior, exterior, security, and feature doors.",
      href: "/door-installation",
      responseTime: "Same Day",
      urgency: "Fast",
    },
    {
      title: "Handyman Services",
      description: "Shelves, repairs, installations — a full list of jobs done in one visit.",
      href: "/handyman-services-johannesburg",
      responseTime: "Same Day",
      urgency: "Fast",
    },
    {
      title: "Granite Countertops",
      description: "Premium granite supply and installation for kitchens and bathrooms.",
      href: "/granite-countertops",
      responseTime: "3-7 Days",
      urgency: "Project",
    },
    {
      title: "Drywall & Ceilings",
      description: "Partition walls, ceiling installations, and ceiling repairs near you.",
      href: "/drywall-ceilings",
      responseTime: "1-2 Weeks",
      urgency: "Project",
    },
    {
      title: "Security Doors",
      description: "Security doors supplied and fitted to protect your Johannesburg home.",
      href: "/security-doors-johannesburg",
      responseTime: "2-5 Days",
      urgency: "Fast",
    },
    {
      title: "Waterproofing & Leak Repairs",
      description: "Leaking roof or wet walls? We're nearby and respond fast.",
      href: "/waterproofing-repairs-gauteng",
      responseTime: "Same Day",
      urgency: "Emergency",
    },
    {
      title: "Bathroom Renovations",
      description: "Full bathroom makeovers including vanity, tiling, and fixtures.",
      href: "/bathroom-renovations",
      responseTime: "1-3 Weeks",
      urgency: "Project",
    },
    {
      title: "Decking & Flooring",
      description: "Timber decking, laminate, and engineered wood flooring installed near you.",
      href: "/decking-flooring",
      responseTime: "1-2 Weeks",
      urgency: "Project",
    },
  ]

  const nearbyAreas = [
    {
      area: "Sandton",
      suburbs: ["Morningside", "Bryanston", "Rivonia", "Hyde Park", "Rosebank"],
      responseTime: "30-45 mins",
      carpenterLink: "/areas/sandton",
    },
    {
      area: "Johannesburg North",
      suburbs: ["Fourways", "Sunninghill", "Woodmead", "Douglasdale", "Lonehill"],
      responseTime: "45-60 mins",
      carpenterLink: "/areas/johannesburg",
    },
    {
      area: "Randburg",
      suburbs: ["Northcliff", "Ferndale", "Bordeaux", "Blairgowrie", "Greenside"],
      responseTime: "45-65 mins",
      carpenterLink: "/areas/randburg",
    },
    {
      area: "Midrand",
      suburbs: ["Halfway House", "Kyalami", "Waterfall", "Vorna Valley", "Grand Central"],
      responseTime: "50-70 mins",
      carpenterLink: "/areas/midrand",
    },
    {
      area: "Centurion",
      suburbs: ["Irene", "Highveld", "Zwartkop", "Lyttelton", "Eldoraigne"],
      responseTime: "55-80 mins",
      carpenterLink: "/areas/centurion",
    },
    {
      area: "Pretoria",
      suburbs: ["Pretoria East", "Brooklyn", "Hatfield", "Menlyn", "Lynnwood"],
      responseTime: "60-90 mins",
      carpenterLink: "/areas/pretoria",
    },
    {
      area: "East Rand",
      suburbs: ["Boksburg", "Edenvale", "Kempton Park", "Benoni", "Germiston"],
      responseTime: "55-80 mins",
      carpenterLink: "/areas/boksburg",
    },
    {
      area: "Johannesburg South",
      suburbs: ["Alberton", "Soweto", "Lenasia", "Glenvista", "Meyersdal"],
      responseTime: "55-80 mins",
      carpenterLink: "/areas/johannesburg-south",
    },
  ]

  const howToFindUs = [
    {
      step: "01",
      title: "Call or WhatsApp",
      description:
        "Call 067 601 4490 right now. Tell us what you need and where you are. We'll confirm we have a carpenter near you and give an arrival window.",
      icon: Phone,
    },
    {
      step: "02",
      title: "We Confirm Availability",
      description:
        "We check which carpenter is closest to your location in Johannesburg. For most areas we can be with you same day — often within the hour for emergencies.",
      icon: Navigation,
    },
    {
      step: "03",
      title: "Your Local Carpenter Arrives",
      description:
        "A vetted, experienced carpenter arrives with the tools and materials needed. They assess your job, quote on-site, and get to work.",
      icon: Hammer,
    },
    {
      step: "04",
      title: "Job Done — Guaranteed",
      description:
        "We complete the work to a high standard and only leave when you're happy. All workmanship is guaranteed. No mess left behind.",
      icon: CheckCircle,
    },
  ]

  const carpenterTypes = [
    {
      type: "Emergency Carpenter Near Me",
      description:
        "Need someone now? Our emergency carpenters respond within 60-90 minutes across Johannesburg. Available 24/7.",
      href: "/24-hour-emergency-carpenter-johannesburg",
      tag: "24/7",
    },
    {
      type: "Same-Day Carpenter Near Me",
      description:
        "Call before 12pm for a guaranteed same-day carpenter anywhere in Gauteng. Fully stocked van, ready to work.",
      href: "/same-day-carpenter-gauteng",
      tag: "Today",
    },
    {
      type: "Kitchen Carpenter Near Me",
      description:
        "Specialist kitchen carpenters for repairs, cupboard installations, and full kitchen renovations in your area.",
      href: "/kitchen-cupboards",
      tag: "Specialist",
    },
    {
      type: "Cupboard Carpenter Near Me",
      description:
        "Custom built-in cupboard specialists who design and install bespoke wardrobes at your home.",
      href: "/built-in-cupboards",
      tag: "Custom",
    },
    {
      type: "Door Carpenter Near Me",
      description:
        "Door hanging, fitting, alignment, and repair specialists. All door types — interior, exterior, security, and feature doors.",
      href: "/door-installation",
      tag: "Fast",
    },
    {
      type: "Handyman Carpenter Near Me",
      description:
        "General carpentry and handyman services for all the smaller jobs around your Johannesburg home.",
      href: "/handyman-services-johannesburg",
      tag: "All Jobs",
    },
  ]

  const whyLocalMatters = [
    {
      icon: Navigation,
      title: "Faster Response Times",
      description:
        "A local Johannesburg carpenter means shorter travel, faster arrival, and less time waiting — especially for emergencies.",
    },
    {
      icon: Shield,
      title: "Knows Local Properties",
      description:
        "We've worked in Sandton estates, Johannesburg apartments, cluster homes, and freestanding houses. We know what to expect.",
    },
    {
      icon: Star,
      title: "Local Reputation to Protect",
      description:
        "We've been serving Johannesburg for 20+ years. Our reputation in the area matters more to us than any single job.",
    },
    {
      icon: ThumbsUp,
      title: "Reliable & Accountable",
      description:
        "We're not a platform connecting you to random contractors. We're a real local business you can call back if anything isn't right.",
    },
  ]

  const popularSuburbLinks = [
    { name: "Carpenter Rosebank", href: "/carpenter-rosebank" },
    { name: "Carpenter Bryanston", href: "/carpenter-bryanston" },
    { name: "Carpenter Rivonia", href: "/carpenter-rivonia" },
    { name: "Carpenter Morningside", href: "/carpenter-morningside" },
    { name: "Carpenter Hyde Park", href: "/carpenter-hyde-park" },
    { name: "Carpenter Illovo", href: "/carpenter-illovo" },
    { name: "Carpenter Woodmead", href: "/carpenter-woodmead" },
    { name: "Carpenter Sunninghill", href: "/carpenter-sunninghill" },
    { name: "Carpenter Sandhurst", href: "/carpenter-sandhurst" },
  ]

  const relatedServices = [
    { name: "Emergency Carpenter Johannesburg", href: "/24-hour-emergency-carpenter-johannesburg" },
    { name: "Same-Day Carpenter Gauteng", href: "/same-day-carpenter-gauteng" },
    { name: "Handyman Services Johannesburg", href: "/handyman-services-johannesburg" },
    { name: "Door Repair Gauteng", href: "/door-repair-gauteng" },
    { name: "Door Installation", href: "/door-installation" },
    { name: "Kitchen Renovations", href: "/kitchen-renovations" },
    { name: "Built-In Cupboards", href: "/built-in-cupboards" },
    { name: "Same-Day Kitchen Repairs", href: "/same-day-kitchen-repairs-gauteng" },
    { name: "Waterproofing Gauteng", href: "/waterproofing-repairs-gauteng" },
    { name: "Granite Countertops", href: "/granite-countertops" },
    { name: "Drywall & Ceilings", href: "/drywall-ceilings" },
    { name: "Security Doors Johannesburg", href: "/security-doors-johannesburg" },
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
    { name: "Nigel", href: "/areas/nigel" },
    { name: "Heidelberg", href: "/areas/heidelberg" },
    { name: "Krugersdorp", href: "/areas/krugersdorp" },
    { name: "Westonaria", href: "/areas/westonaria" },
    { name: "Carletonville", href: "/areas/carletonville" },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-800 py-20 px-4 md:px-6 text-white border-b-4 border-yellow-500">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full text-sm font-bold">
              <MapPin className="h-5 w-5" />
              LOCAL CARPENTER — JOHANNESBURG & ALL OF GAUTENG
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Carpenter Near Me in Johannesburg
            </h1>
            <p className="text-xl md:text-2xl text-zinc-200 max-w-4xl mx-auto">
              Looking for a trusted carpenter near you in Johannesburg? We cover all of Gauteng
              with fast response times, experienced tradespeople, and same-day availability.
              Whatever you need — we're nearby and ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="text-lg px-8 bg-yellow-500 hover:bg-yellow-400 text-zinc-900 font-bold">
                <a href="tel:0676014490" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL NOW: 067 601 4490
                </a>
              </Button>
              <div className="text-center sm:text-left">
                <div className="font-bold text-lg text-white">We Come to You</div>
                <div className="text-sm text-zinc-300">Covering all of Johannesburg & Gauteng</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-yellow-200">
              <CardHeader>
                <div className="text-4xl font-bold text-yellow-600 mb-2">24+</div>
                <CardTitle>Areas Covered</CardTitle>
                <CardDescription>Across Gauteng</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-yellow-200">
              <CardHeader>
                <div className="text-4xl font-bold text-yellow-600 mb-2">60min</div>
                <CardTitle>Avg Response</CardTitle>
                <CardDescription>Emergency callouts</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-yellow-200">
              <CardHeader>
                <div className="text-4xl font-bold text-yellow-600 mb-2">20+</div>
                <CardTitle>Years Local</CardTitle>
                <CardDescription>Johannesburg based</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-yellow-200">
              <CardHeader>
                <div className="text-4xl font-bold text-yellow-600 mb-2">Same</div>
                <CardTitle>Day Available</CardTitle>
                <CardDescription>Call before 12pm</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Carpenter Types Near You */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Kind of Carpenter Are You Looking For?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We cover every type of carpentry need — emergency, same-day, specialist, or project work
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carpenterTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-yellow-500">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">
                      <Link href={type.href} className="hover:text-yellow-600 transition-colors">
                        {type.type}
                      </Link>
                    </CardTitle>
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 font-medium shrink-0 ml-2">
                      {type.tag}
                    </span>
                  </div>
                  <CardDescription>{type.description}</CardDescription>
                  <div className="mt-4">
                    <Link
                      href={type.href}
                      className="text-sm font-semibold text-yellow-600 hover:text-yellow-700 flex items-center gap-1"
                    >
                      Learn more →
                    </Link>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How Do I Find a Carpenter Near Me in Johannesburg?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            One call is all it takes — we handle everything from there
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howToFindUs.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-yellow-500/30 mb-2">{step.step}</div>
                  <step.icon className="h-10 w-10 text-yellow-500 mx-auto mb-3" />
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription className="mt-2">{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Near You */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Carpentry Services Available Near You
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From emergency repairs to full renovations — all available near you in Johannesburg
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeDoNearYou.map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow border-l-4 ${
                  service.urgency === "Emergency"
                    ? "border-l-red-500"
                    : service.urgency === "Fast"
                    ? "border-l-yellow-500"
                    : "border-l-blue-400"
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-base">
                      <Link href={service.href} className="hover:text-yellow-600 transition-colors">
                        {service.title}
                      </Link>
                    </CardTitle>
                    <span
                      className={`text-xs px-2 py-1 rounded-full shrink-0 ml-2 ${
                        service.urgency === "Emergency"
                          ? "bg-red-100 text-red-700"
                          : service.urgency === "Fast"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {service.urgency}
                    </span>
                  </div>
                  <CardDescription className="mb-3 text-sm">{service.description}</CardDescription>
                  <div className="bg-muted rounded px-3 py-1.5 text-sm flex items-center gap-2">
                    <Clock className="h-4 w-4 text-yellow-500" />
                    <span className="text-muted-foreground text-xs">Available: </span>
                    <span className="font-semibold text-xs">{service.responseTime}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Near You */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Find a Carpenter Near You — Response Times by Area
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We cover all major Johannesburg areas and suburbs with fast, local response times
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {nearbyAreas.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-yellow-500 shrink-0" />
                    <Link
                      href={location.carpenterLink}
                      className="font-bold text-lg hover:text-yellow-600 transition-colors"
                    >
                      {location.area}
                    </Link>
                  </div>
                  <div className="mb-3">
                    <div className="text-xs text-muted-foreground mb-1">Response Time</div>
                    <div className="text-lg font-bold text-yellow-600">{location.responseTime}</div>
                  </div>
                  <div className="space-y-1">
                    {location.suburbs.map((suburb, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-yellow-400 shrink-0" />
                        <span className="text-xs text-muted-foreground">{suburb}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Hire a Local Johannesburg Carpenter?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Local means faster, more accountable, and better quality — here's why it matters
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyLocalMatters.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Suburb Specific Links */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Carpenters in Sandton Suburbs Near You
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Serving every Sandton suburb with local knowledge and fast response
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {popularSuburbLinks.map((suburb, index) => (
              <Link
                key={index}
                href={suburb.href}
                className="flex items-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent hover:shadow-md transition-all group"
              >
                <MapPin className="h-4 w-4 text-yellow-500 shrink-0" />
                <span className="text-sm font-medium group-hover:text-yellow-600 transition-colors">
                  {suburb.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Carpenter Near Me — Questions Answered
          </h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>How do I find a good carpenter near me in Johannesburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Call 067 601 4490 — we're a Johannesburg-based carpentry company with 20+ years of
                  experience serving all areas of Gauteng. We cover Sandton, Randburg, Fourways,
                  Midrand, Centurion, Pretoria, Roodepoort, East Rand, Johannesburg South, and all
                  surrounding suburbs. We dispatch the nearest available carpenter to your location,
                  usually within 60-90 minutes for emergencies or same-day for planned work.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Is there a carpenter available near me today in Johannesburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — call before 12pm on 067 601 4490 for guaranteed same-day carpenter service
                  across Johannesburg and Gauteng. For emergencies like broken doors or security
                  issues, we're available 24/7 with{" "}
                  <Link href="/24-hour-emergency-carpenter-johannesburg" className="text-primary hover:underline">
                    emergency carpenter services
                  </Link>{" "}
                  that dispatch within 60-90 minutes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What does a local carpenter in Johannesburg charge?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Carpenter rates in Johannesburg vary by job type. Handyman-style carpentry runs
                  R550-R750 per hour. Specialist work like door installation, built-in cupboards, and
                  kitchen cabinetry is quoted per project. Emergency callouts range from R850-R2,200
                  depending on time of day. We always provide an on-site quote before starting any
                  work — no surprise invoices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you cover my area? I'm in the East Rand / Pretoria / South of Johannesburg.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — we cover all of Gauteng. This includes the East Rand (Boksburg, Edenvale,
                  Kempton Park, Benoni, Germiston), Pretoria and Centurion, Johannesburg South
                  (Alberton, Glenvista, Meyersdal), and even further areas like Vereeniging,
                  Vanderbijlpark, and Krugersdorp. Call us and we'll confirm coverage for your
                  specific area instantly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can a carpenter near me fix my broken door today?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — broken door repairs are one of our most common same-day and emergency jobs
                  across Johannesburg. Whether your door won't close, has fallen off its hinges,
                  or was damaged in a break-in, our{" "}
                  <Link href="/door-repair-gauteng" className="text-primary hover:underline">
                    door repair team
                  </Link>{" "}
                  is available same-day and 24/7 for emergencies. We carry hinges, locks, and
                  hardware in our vans for immediate on-site repairs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's the difference between a handyman and a carpenter near me?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A handyman covers a broad range of small maintenance tasks around your home — shelves,
                  minor repairs, installations. A carpenter specialises in woodwork, cabinetry, doors,
                  and structural joinery. We offer both — our{" "}
                  <Link href="/handyman-services-johannesburg" className="text-primary hover:underline">
                    handyman service
                  </Link>{" "}
                  handles general home maintenance, while our specialist carpenters handle kitchens,
                  cupboards, doors, and renovations. One call covers both.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can a carpenter near me help with my kitchen renovation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — we specialise in{" "}
                  <Link href="/kitchen-renovations" className="text-primary hover:underline">
                    kitchen renovations
                  </Link>{" "}
                  across Johannesburg and Gauteng. From{" "}
                  <Link href="/kitchen-cupboards" className="text-primary hover:underline">
                    custom kitchen cupboards
                  </Link>{" "}
                  to{" "}
                  <Link href="/granite-countertops" className="text-primary hover:underline">
                    granite countertop installation
                  </Link>
                  , we handle every element of your kitchen in-house. We start with a free in-home
                  consultation and design visit — call us to book yours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How do I know if the carpenter near me is trustworthy?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We are a registered Johannesburg business with 20+ years of trading history, thousands
                  of completed jobs across Gauteng, and a real physical presence in the area. We're not
                  an app or platform connecting you to unknown contractors — our tradespeople are vetted,
                  experienced, and employed by us directly. You can check our work on our{" "}
                  <Link href="/portfolio" className="text-primary hover:underline">
                    portfolio page
                  </Link>{" "}
                  and read our story on the{" "}
                  <Link href="/about" className="text-primary hover:underline">
                    about page
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            All Carpentry Services Near You
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            {relatedServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base">
                    <Link href={service.href} className="hover:text-yellow-600 transition-colors">
                      {service.name}
                    </Link>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Areas */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Find a Carpenter Near You — All Gauteng Areas
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Click your area to see local carpentry services near you
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areaPages.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="flex items-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent hover:shadow-md transition-all group"
              >
                <MapPin className="h-4 w-4 text-yellow-500 shrink-0" />
                <span className="text-sm font-medium group-hover:text-yellow-600 transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-zinc-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <MapPin className="h-16 w-16 mx-auto mb-6 text-yellow-500 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Local Carpenter is One Call Away
          </h2>
          <p className="text-xl mb-8 text-zinc-300">
            Whatever you need — emergency repair, same-day fix, or a full renovation — we're
            nearby, ready, and trusted across Johannesburg and Gauteng.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Phone className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                <CardTitle>Call Us Now</CardTitle>
                <CardDescription className="text-zinc-300">
                  <a href="tel:0676014490" className="text-xl font-bold hover:underline text-yellow-400">
                    067 601 4490
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Clock className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                <CardTitle>Response Time</CardTitle>
                <CardDescription className="text-zinc-300 font-semibold">
                  60 mins for emergencies
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Mail className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription className="text-zinc-300">
                  <a href="mailto:info@granitecarpentry.co.za" className="hover:underline text-sm text-white">
                    info@granitecarpentry.co.za
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Button
            size="lg"
            className="text-lg px-8 bg-yellow-500 text-zinc-900 hover:bg-yellow-400 font-bold"
            asChild
          >
            <a href="tel:0676014490">
              <Phone className="mr-2 h-5 w-5" />
              FIND MY LOCAL CARPENTER NOW
            </a>
          </Button>

          <p className="mt-6 text-sm text-zinc-400">
            Available 24/7 for emergencies • Same-day bookings • All of Gauteng covered
          </p>
        </div>
      </section>
    </div>
  )
}
