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
  ThumbsUp,
  Hammer,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Handyman Services Johannesburg 2026 | Trusted Local Handyman Near You",
  description:
    "Reliable handyman services in Johannesburg & Gauteng. Shelving, painting, repairs, installations & more. Same-day available. Trusted, vetted, experienced. Call 067 601 4490!",
  openGraph: {
    title: "Handyman Services Johannesburg | Trusted Local Handyman",
    description:
      "Professional handyman services across Johannesburg and Gauteng. No job too small. Fast, reliable, fairly priced. Same-day bookings available.",
    url: "https://granitecarpentry.co.za/handyman-services-johannesburg",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/handyman-services-johannesburg",
  },
}

export default function HandymanServicesJohannesburgPage() {
  const serviceCategories = [
    {
      category: "Carpentry & Woodwork",
      icon: Hammer,
      services: [
        { name: "Shelf installation & floating shelves", time: "1-2 hrs" },
        { name: "Cupboard door rehang & alignment", time: "30-60 min" },
        { name: "Drawer repair & runner replacement", time: "30-60 min" },
        { name: "Skirting board & architrave fitting", time: "2-4 hrs" },
        { name: "Furniture assembly (flat-pack)", time: "1-3 hrs" },
        { name: "TV mounting & bracket installation", time: "1-2 hrs" },
        { name: "Picture & mirror hanging", time: "30-60 min" },
        { name: "Gate & fence repairs", time: "1-3 hrs" },
      ],
    },
    {
      category: "Doors & Locks",
      icon: Shield,
      services: [
        { name: "Door hanging & installation", time: "2-4 hrs" },
        { name: "Door alignment & adjustment", time: "30-60 min" },
        { name: "Lock & handle replacement", time: "30-60 min" },
        { name: "Security gate installation", time: "2-4 hrs" },
        { name: "Door frame repairs", time: "1-3 hrs" },
        { name: "Sliding door track repair", time: "1-2 hrs" },
        { name: "Hinge replacement", time: "15-30 min" },
        { name: "Bathroom door replacement", time: "2-3 hrs" },
      ],
    },
    {
      category: "General Repairs & Maintenance",
      icon: Wrench,
      services: [
        { name: "Grout & silicone resealing", time: "1-3 hrs" },
        { name: "Tile crack & chip repairs", time: "1-2 hrs" },
        { name: "Ceiling crack repairs", time: "2-4 hrs" },
        { name: "Wall crack patching & plastering", time: "2-4 hrs" },
        { name: "Leaking tap & fixture repair", time: "30-90 min" },
        { name: "Burglar bar fitting & repair", time: "1-3 hrs" },
        { name: "Garage door spring replacement", time: "1-2 hrs" },
        { name: "Move-out repairs & touch-ups", time: "2-8 hrs" },
      ],
    },
    {
      category: "Installations & Fitting",
      icon: Settings,
      services: [
        { name: "Curtain rail & blind installation", time: "1-2 hrs" },
        { name: "Towel rail & toilet roll holder fitting", time: "30-60 min" },
        { name: "Shower head & fittings replacement", time: "30-60 min" },
        { name: "Light fitting replacement", time: "30-60 min" },
        { name: "Bathroom accessories installation", time: "1-2 hrs" },
        { name: "Clothesline & washing line installation", time: "1-2 hrs" },
        { name: "Outdoor tap installation", time: "1-2 hrs" },
        { name: "Safety rails & grab handles", time: "1-2 hrs" },
      ],
    },
  ]

  const pricingGuide = [
    {
      duration: "1 Hour",
      rate: "R550 - R750",
      bestFor: "Quick fixes, single repairs",
      examples: "Hinge replacement, picture hanging, tap washer",
    },
    {
      duration: "Half Day (4 Hours)",
      rate: "R1,800 - R2,600",
      bestFor: "Multiple small jobs",
      examples: "Punch list of 4-6 small repairs around the home",
      popular: true,
    },
    {
      duration: "Full Day (8 Hours)",
      rate: "R3,200 - R4,800",
      bestFor: "Larger projects or many jobs",
      examples: "Move-out repairs, full maintenance day, rental prep",
    },
    {
      duration: "Same-Day Emergency",
      rate: "R750 - R1,100/hr",
      bestFor: "Urgent same-day bookings",
      examples: "Urgent repairs, pre-inspection fixes",
    },
  ]

  const popularJobs = [
    {
      job: "Punch List of Home Repairs",
      description:
        "Book a half-day or full-day handyman to work through a list of small jobs around your home — the most cost-effective way to get everything done.",
      timeEstimate: "4-8 hours",
      popular: true,
    },
    {
      job: "Move-Out Repair Package",
      description:
        "Tenants and landlords — we fix all the damage before your inspection. Holes in walls, broken doors, damaged cupboards, scuffed surfaces.",
      timeEstimate: "4-8 hours",
      popular: true,
    },
    {
      job: "New Home Setup",
      description:
        "Just moved in? We hang curtain rails, mount TVs, assemble furniture, install shelving, and get your new home liveable fast.",
      timeEstimate: "4-8 hours",
      popular: true,
    },
    {
      job: "Rental Property Maintenance",
      description:
        "Landlords trust us to keep their properties in top condition between tenants — repairs, touch-ups, and preventive maintenance.",
      timeEstimate: "4-8 hours",
      popular: false,
    },
    {
      job: "Pre-Sale Home Repairs",
      description:
        "Getting your home ready to sell? We fix the little things that buyers notice — cracked grout, stiff doors, broken handles, ceiling marks.",
      timeEstimate: "4-8 hours",
      popular: false,
    },
    {
      job: "Elderly or Disability Home Adaptations",
      description:
        "Safety rails, grab handles in bathrooms, ramp installations, and accessibility modifications done carefully and respectfully.",
      timeEstimate: "2-6 hours",
      popular: false,
    },
  ]

  const responseAreas = [
    { area: "Sandton", responseTime: "45-75 mins", sameDay: true },
    { area: "Johannesburg North", responseTime: "45-75 mins", sameDay: true },
    { area: "Randburg", responseTime: "50-80 mins", sameDay: true },
    { area: "Fourways", responseTime: "50-80 mins", sameDay: true },
    { area: "Rosebank", responseTime: "45-70 mins", sameDay: true },
    { area: "Midrand", responseTime: "55-85 mins", sameDay: true },
    { area: "Centurion", responseTime: "60-90 mins", sameDay: true },
    { area: "Pretoria", responseTime: "65-95 mins", sameDay: true },
    { area: "Edenvale", responseTime: "50-80 mins", sameDay: true },
    { area: "Boksburg", responseTime: "55-85 mins", sameDay: true },
    { area: "Roodepoort", responseTime: "50-80 mins", sameDay: true },
    { area: "Johannesburg South", responseTime: "55-85 mins", sameDay: true },
  ]

  const whyUs = [
    {
      icon: Shield,
      title: "Vetted & Experienced",
      description:
        "Our handymen are background-checked, experienced tradespeople — not random labourers. 20+ years in the industry.",
    },
    {
      icon: Zap,
      title: "Same-Day Available",
      description:
        "Call before 12pm for same-day handyman service across Johannesburg. No long waiting lists.",
    },
    {
      icon: ThumbsUp,
      title: "No Job Too Small",
      description:
        "We don't turn away small jobs. Whether it's one shelf or a full day of repairs — we show up and do it right.",
    },
    {
      icon: Star,
      title: "Backed by Full Trade Team",
      description:
        "Need more than a handyman? We also offer full carpentry, granite, drywall, and renovation services in-house.",
    },
  ]

  const sandtonSuburbs = [
    { name: "Rosebank", href: "/carpenter-rosebank" },
    { name: "Bryanston", href: "/carpenter-bryanston" },
    { name: "Morningside", href: "/carpenter-morningside" },
    { name: "Rivonia", href: "/carpenter-rivonia" },
    { name: "Hyde Park", href: "/carpenter-hyde-park" },
    { name: "Illovo", href: "/carpenter-illovo" },
    { name: "Woodmead", href: "/carpenter-woodmead" },
    { name: "Sunninghill", href: "/carpenter-sunninghill" },
    { name: "Sandhurst", href: "/carpenter-sandhurst" },
  ]

  const relatedServices = [
    { name: "Same-Day Kitchen Repairs", href: "/same-day-kitchen-repairs-gauteng" },
    { name: "Emergency Carpenter Johannesburg", href: "/24-hour-emergency-carpenter-johannesburg" },
    { name: "Door Repair Gauteng", href: "/door-repair-gauteng" },
    { name: "Door Handle Replacement", href: "/door-handle-replacement-gauteng" },
    { name: "Door Lock Replacement", href: "/door-lock-replacement-gauteng" },
    { name: "Door Alignment Repair", href: "/door-alignment-repair-gauteng" },
    { name: "Cupboard Door Repair", href: "/cupboard-door-repair-gauteng" },
    { name: "Move-Out Repairs Gauteng", href: "/move-out-repairs-gauteng" },
    { name: "Rental Property Repairs", href: "/rental-property-repairs-gauteng" },
    { name: "Waterproofing & Leak Repairs", href: "/waterproofing-repairs-gauteng" },
    { name: "Built-In Cupboards", href: "/built-in-cupboards" },
    { name: "Door Installation", href: "/door-installation" },
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

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-900 to-green-800 py-20 px-4 md:px-6 text-white border-b-4 border-green-500">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-200 px-4 py-2 rounded-full text-sm font-bold">
              <Hammer className="h-5 w-5" />
              TRUSTED LOCAL HANDYMAN — JOHANNESBURG & GAUTENG
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Handyman Services Johannesburg
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto">
              Need a reliable handyman in Johannesburg? We handle all the jobs around your home —
              big or small. Shelves, doors, repairs, installations, and more. Vetted, experienced,
              and available same day across Gauteng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="text-lg px-8 bg-green-500 hover:bg-green-400 text-white">
                <a href="tel:0676014490" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL NOW: 067 601 4490
                </a>
              </Button>
              <div className="text-center sm:text-left">
                <div className="font-bold text-lg text-white">Same-Day Available</div>
                <div className="text-sm text-green-200">Call before 12pm to book today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-green-200">
              <CardHeader>
                <div className="text-4xl font-bold text-green-600 mb-2">Same</div>
                <CardTitle>Day Booking</CardTitle>
                <CardDescription>Call before 12pm</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-green-200">
              <CardHeader>
                <div className="text-4xl font-bold text-green-600 mb-2">30+</div>
                <CardTitle>Services Offered</CardTitle>
                <CardDescription>One call covers all</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-green-200">
              <CardHeader>
                <div className="text-4xl font-bold text-green-600 mb-2">Vetted</div>
                <CardTitle>Tradespeople</CardTitle>
                <CardDescription>Background checked</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-green-200">
              <CardHeader>
                <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
                <CardTitle>Years Experience</CardTitle>
                <CardDescription>Across Gauteng</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Jobs */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Most Popular Handyman Jobs in Johannesburg
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            These are the jobs Johannesburg homeowners, tenants, and landlords book most often
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularJobs.map((job, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow ${
                  job.popular ? "border-green-500 border-2" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{job.job}</CardTitle>
                    {job.popular && (
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500 text-white shrink-0 ml-2">
                        Popular
                      </span>
                    )}
                  </div>
                  <CardDescription className="mb-4">{job.description}</CardDescription>
                  <div className="bg-muted rounded px-3 py-2 text-sm flex items-center gap-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-muted-foreground">Typical time: </span>
                    <span className="font-semibold">{job.timeEstimate}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Can a Handyman Fix in Johannesburg?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A full list of handyman services available across Johannesburg and Gauteng
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <category.icon className="h-6 w-6 text-green-700" />
                    </div>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.services.map((service, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-2 border-b last:border-0"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                          <span className="text-sm">{service.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground shrink-0 ml-2 bg-muted px-2 py-0.5 rounded">
                          {service.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How Much Does a Handyman Cost in Johannesburg?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Simple, transparent hourly and daily rates — no hidden fees or callout surprises
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingGuide.map((price, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow text-center ${
                  price.popular ? "border-green-500 border-2 relative" : ""
                }`}
              >
                {price.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Best Value
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{price.duration}</CardTitle>
                  <div className="text-3xl font-bold text-green-600 mb-3">{price.rate}</div>
                  <CardDescription className="space-y-2">
                    <div className="font-medium text-foreground">{price.bestFor}</div>
                    <div className="text-xs">{price.examples}</div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <strong>Tip:</strong> Booking a half-day or full day is the best value — we work through
                your full list of jobs in one visit. Materials are billed at cost. Rate confirmed before
                arrival — no surprise invoices.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Areas */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How Fast Can a Handyman Arrive in Johannesburg?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Same-day handyman service available across all major Johannesburg and Gauteng areas
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {responseAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <h3 className="font-bold">{area.area}</h3>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Arrival Time</div>
                    <div className="text-lg font-bold text-green-600">{area.responseTime}</div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 inline-block mt-2">
                    Same-Day Available
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
            Why Choose Our Handyman Service in Johannesburg?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sandton Suburb Links */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Handyman Services in Sandton & Surrounding Suburbs
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We know these areas well — fast response and local knowledge across Johannesburg North
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {sandtonSuburbs.map((suburb, index) => (
              <Link
                key={index}
                href={suburb.href}
                className="flex items-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent hover:shadow-md transition-all group"
              >
                <MapPin className="h-4 w-4 text-green-600 shrink-0" />
                <span className="text-sm font-medium group-hover:text-green-600 transition-colors">
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
            Handyman Questions Answered
          </h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>How much does a handyman cost per hour in Johannesburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Handyman rates in Johannesburg range from R550-R750 per hour for standard jobs.
                  Same-day or emergency bookings are R750-R1,100 per hour. Half-day bookings
                  (4 hours) cost R1,800-R2,600 and are the most popular option — you get more done
                  for less per hour. Materials are billed separately at cost. We confirm the rate
                  before arrival with no surprise fees.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can I get a handyman the same day in Johannesburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — call before 12pm on 067 601 4490 for guaranteed same-day handyman service
                  across Johannesburg, Sandton, Randburg, Fourways, Midrand, and surrounding areas.
                  We dispatch from multiple locations to minimize arrival times. Same-day rates apply
                  for urgent bookings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's the best way to use a handyman — by the hour or full day?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For 3 or more jobs, booking a half-day (4 hours) or full day (8 hours) is always
                  better value. Write a list of everything you want done and we'll work through it
                  systematically. Most clients are surprised how much gets done in a focused half-day.
                  Hourly bookings suit single quick jobs like a hinge replacement, TV mounting, or
                  shelf installation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Are your handymen vetted and trustworthy?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — all our handymen are experienced tradespeople who have worked with us for
                  years. We are a registered business with 20+ years in Johannesburg and Gauteng.
                  Our team is not random day labourers — they are skilled carpenters and tradespeople
                  who also handle our larger renovation and installation projects. You can feel
                  confident having them in your home.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you do handyman work for rental properties in Gauteng?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — landlords and property managers across Gauteng use us regularly for{" "}
                  <Link href="/rental-property-repairs-gauteng" className="text-primary hover:underline">
                    rental property repairs
                  </Link>{" "}
                  and{" "}
                  <Link href="/move-out-repairs-gauteng" className="text-primary hover:underline">
                    move-out repairs
                  </Link>
                  . We understand the urgency of getting a property tenant-ready quickly and can
                  often complete a full property touch-up in a single day. We also work directly
                  with tenants on behalf of landlords.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can a handyman fix doors and locks in Johannesburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — door and lock work is one of our most requested handyman services. We handle{" "}
                  <Link href="/door-alignment-repair-gauteng" className="text-primary hover:underline">
                    door alignment
                  </Link>
                  ,{" "}
                  <Link href="/door-handle-replacement-gauteng" className="text-primary hover:underline">
                    handle replacement
                  </Link>
                  ,{" "}
                  <Link href="/door-lock-replacement-gauteng" className="text-primary hover:underline">
                    lock replacement
                  </Link>
                  , hinge repairs, and door hanging. For full door installations or security door
                  fitting, our specialist{" "}
                  <Link href="/door-installation" className="text-primary hover:underline">
                    door installation team
                  </Link>{" "}
                  is available.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What areas in Johannesburg do you cover for handyman services?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We cover all of Johannesburg and Gauteng including Sandton, Randburg, Fourways,
                  Midrand, Centurion, Pretoria, Roodepoort, Edenvale, Boksburg, Kempton Park,
                  Johannesburg South, Benoni, Germiston, Alberton, and all surrounding suburbs.
                  We also serve popular Sandton suburbs including{" "}
                  <Link href="/carpenter-rosebank" className="text-primary hover:underline">Rosebank</Link>,{" "}
                  <Link href="/carpenter-bryanston" className="text-primary hover:underline">Bryanston</Link>,{" "}
                  <Link href="/carpenter-rivonia" className="text-primary hover:underline">Rivonia</Link>, and{" "}
                  <Link href="/carpenter-morningside" className="text-primary hover:underline">Morningside</Link>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you take on small handyman jobs or only big projects?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We take on all sizes — from a single shelf installation to a full day of repairs.
                  No job is too small. We believe in building long-term relationships with
                  Johannesburg homeowners — the small jobs today often lead to the bigger renovation
                  projects tomorrow. Call us regardless of how small your job seems.
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
                    <Link href={service.href} className="hover:text-green-600 transition-colors">
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
            Handyman Services Available Across Gauteng
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Same-day handyman bookings available throughout Johannesburg and Gauteng
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areaPages.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="flex items-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent hover:shadow-md transition-all group"
              >
                <MapPin className="h-4 w-4 text-green-600 shrink-0" />
                <span className="text-sm font-medium group-hover:text-green-600 transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-green-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Hammer className="h-16 w-16 mx-auto mb-6 opacity-60" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Reliable Handyman in Johannesburg Today?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Call before 12pm for same-day service. No job too small. Vetted, experienced
            tradespeople across all of Johannesburg and Gauteng.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Phone className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Call Us Now</CardTitle>
                <CardDescription className="text-green-200">
                  <a href="tel:0676014490" className="text-xl font-bold hover:underline text-white">
                    067 601 4490
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Same-Day Booking</CardTitle>
                <CardDescription className="text-green-200 font-semibold">
                  Call Before 12pm
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <Mail className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription className="text-green-200">
                  <a href="mailto:info@granitecarpentry.co.za" className="hover:underline text-sm text-white">
                    info@granitecarpentry.co.za
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Button
            size="lg"
            className="text-lg px-8 bg-white text-green-900 hover:bg-green-50"
            asChild
          >
            <a href="tel:0676014490">
              <Phone className="mr-2 h-5 w-5" />
              BOOK YOUR HANDYMAN TODAY
            </a>
          </Button>

          <p className="mt-6 text-sm text-green-300">
            Mon–Sat 8am–5pm • Same-day available • No job too small
          </p>
        </div>
      </section>
    </div>
  )
}
