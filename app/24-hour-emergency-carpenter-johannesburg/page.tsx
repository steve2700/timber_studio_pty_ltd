import type { Metadata } from "next"
import Link from "next/link"
import { Wrench, CheckCircle, Clock, Shield, MapPin, Phone, Mail, AlertCircle, Zap, Star, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "24-Hour Emergency Carpenter Johannesburg | After-Hours Repairs Available Now",
  description:
    "Need an emergency carpenter in Johannesburg NOW? 24/7 after-hours service. Broken doors, security issues, urgent repairs. 60-min response time. Call 067 601 4490!",
  openGraph: {
    title: "24-Hour Emergency Carpenter Johannesburg | Available After Hours",
    description:
      "Emergency carpentry services 24/7 across Johannesburg. Broken doors, security repairs, urgent fixes. Fast response, expert service.",
    url: "https://granitecarpentry.co.za/24-hour-emergency-carpenter-johannesburg",
    siteName: "Granite Carpentry",
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/24-hour-emergency-carpenter-johannesburg",
  },
}

export default function EmergencyCarpentersJohannesburgPage() {
  const emergencyServices = [
    {
      title: "Broken Door Repairs",
      description: "Door won't close, damaged frames, broken locks, forced entry damage",
      response: "30-60 mins",
      available: "24/7",
    },
    {
      title: "Security Door Issues",
      description: "Security door malfunction, broken locks, damaged hinges",
      response: "30-60 mins",
      available: "24/7",
    },
    {
      title: "Emergency Lock Replacement",
      description: "Lost keys, broken locks, security breaches, lock-out assistance",
      response: "45-90 mins",
      available: "24/7",
    },
    {
      title: "Door Frame Repair",
      description: "Damaged frames from break-ins, warped frames, urgent stabilization",
      response: "60-90 mins",
      available: "24/7",
    },
    {
      title: "Cupboard Door Emergencies",
      description: "Kitchen cupboard doors falling off, broken hinges affecting daily use",
      response: "60-120 mins",
      available: "After Hours",
    },
    {
      title: "Emergency Board-Ups",
      description: "Secure broken doors/windows, temporary safety solutions",
      response: "30-60 mins",
      available: "24/7",
    },
  ]

  const responseAreas = [
    { area: "Sandton", responseTime: "30-45 mins", priority: "High Priority" },
    { area: "Johannesburg North", responseTime: "45-60 mins", priority: "High Priority" },
    { area: "Randburg", responseTime: "40-60 mins", priority: "High Priority" },
    { area: "Fourways", responseTime: "45-75 mins", priority: "Standard" },
    { area: "Midrand", responseTime: "50-80 mins", priority: "Standard" },
    { area: "Centurion", responseTime: "60-90 mins", priority: "Standard" },
    { area: "Pretoria", responseTime: "60-90 mins", priority: "Standard" },
    { area: "Johannesburg South", responseTime: "50-75 mins", priority: "Standard" },
  ]

  const emergencyPricing = [
    {
      service: "Emergency Callout Fee",
      daytime: "R850 - R1,200",
      afterHours: "R1,500 - R2,200",
      overnight: "R2,000 - R2,800",
    },
    {
      service: "Door Lock Replacement",
      daytime: "R800 - R1,500",
      afterHours: "R1,200 - R2,000",
      overnight: "R1,500 - R2,500",
    },
    {
      service: "Door Repair (Basic)",
      daytime: "R650 - R1,200",
      afterHours: "R950 - R1,800",
      overnight: "R1,200 - R2,200",
    },
    {
      service: "Security Door Fix",
      daytime: "R1,200 - R2,500",
      afterHours: "R1,800 - R3,500",
      overnight: "R2,200 - R4,000",
    },
    {
      service: "Emergency Board-Up",
      daytime: "R500 - R900",
      afterHours: "R750 - R1,400",
      overnight: "R1,000 - R1,800",
    },
    {
      service: "Door Frame Repair",
      daytime: "R1,500 - R3,000",
      afterHours: "R2,200 - R4,200",
      overnight: "R2,800 - R5,000",
    },
  ]

  const whyChooseUs = [
    {
      icon: Clock,
      title: "Rapid Response",
      description: "Average 60-minute arrival time in Johannesburg. We never close - available 365 days a year.",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Verified tradesmen, police-cleared. Your safety and security is our priority.",
    },
    {
      icon: Wrench,
      title: "Fully Equipped",
      description: "Mobile workshop with parts, tools, and materials for immediate repairs on-site.",
    },
    {
      icon: Star,
      title: "20+ Years Experience",
      description: "Handled thousands of emergencies. We know how to fix it fast and right.",
    },
  ]

  const commonEmergencies = [
    {
      situation: "Door Won't Close After Break-In",
      urgency: "Critical",
      solution: "Immediate frame repair, lock replacement, temporary security if needed",
      avgTime: "90-120 mins",
    },
    {
      situation: "Lost Keys & Locked Out",
      urgency: "High",
      solution: "Lock replacement, new keys cut on-site, security assessment",
      avgTime: "60-90 mins",
    },
    {
      situation: "Door Falling Off Hinges",
      urgency: "High",
      solution: "Hinge repair/replacement, door realignment, immediate safety fix",
      avgTime: "45-75 mins",
    },
    {
      situation: "Broken Security Door Lock",
      urgency: "Critical",
      solution: "Lock mechanism repair or replacement, security door adjustment",
      avgTime: "60-90 mins",
    },
    {
      situation: "Storm Damage to Doors",
      urgency: "High",
      solution: "Board-up, frame stabilization, door replacement coordination",
      avgTime: "45-90 mins",
    },
    {
      situation: "Kitchen Cupboard Door Emergency",
      urgency: "Medium",
      solution: "Hinge repair, door realignment, temporary fix for safety",
      avgTime: "60-90 mins",
    },
  ]

  const serviceHours = [
    { period: "Weekday Daytime", hours: "8am - 5pm", rate: "Standard Rates", availability: "Immediate" },
    { period: "Weekday After-Hours", hours: "5pm - 10pm", rate: "+40% Premium", availability: "Immediate" },
    { period: "Overnight", hours: "10pm - 6am", rate: "+60% Premium", availability: "Immediate" },
    { period: "Weekends", hours: "All Day", rate: "+30% Premium", availability: "Immediate" },
    { period: "Public Holidays", hours: "All Day", rate: "+50% Premium", availability: "Immediate" },
  ]

  const relatedServices = [
    { name: "Emergency Door Repair", href: "/emergency-door-repair-gauteng" },
    { name: "Door Installation", href: "/door-installation" },
    { name: "Security Doors", href: "/security-doors-johannesburg" },
    { name: "Door Lock Replacement", href: "/door-lock-replacement-gauteng" },
    { name: "Same Day Carpenter", href: "/same-day-carpenter-gauteng" },
    { name: "Door Alignment Repair", href: "/door-alignment-repair-gauteng" },
    { name: "Door Handle Replacement", href: "/door-handle-replacement-gauteng" },
    { name: "Cupboard Door Repair", href: "/cupboard-door-repair-gauteng" },
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
    { name: "Bedfordview", href: "/areas/bedfordview" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Emergency Hero Section */}
      <section className="bg-gradient-to-b from-red-50 to-background py-16 px-4 md:px-6 border-b-4 border-red-600">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              <AlertCircle className="h-5 w-5" />
              24-HOUR EMERGENCY SERVICE AVAILABLE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              24-Hour Emergency Carpenter in Johannesburg
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Need an emergency carpenter in Johannesburg right now? We're available 24/7 for after-hours carpentry
              emergencies, broken doors, security issues, and urgent repairs across Gauteng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="text-lg px-8 bg-red-600 hover:bg-red-700 text-white">
                <a href="tel:0676014490" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  CALL NOW: 067 601 4490
                </a>
              </Button>
              <div className="text-center sm:text-left">
                <div className="font-bold text-lg">Available Right Now</div>
                <div className="text-sm text-muted-foreground">Average 60-min response time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Stats */}
      <section className="py-12 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-red-200">
              <CardHeader>
                <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
                <CardTitle>Always Available</CardTitle>
                <CardDescription>We never close</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-red-200">
              <CardHeader>
                <div className="text-4xl font-bold text-red-600 mb-2">60min</div>
                <CardTitle>Average Response</CardTitle>
                <CardDescription>Johannesburg area</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-red-200">
              <CardHeader>
                <div className="text-4xl font-bold text-red-600 mb-2">365</div>
                <CardTitle>Days Per Year</CardTitle>
                <CardDescription>Including holidays</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-red-200">
              <CardHeader>
                <div className="text-4xl font-bold text-red-600 mb-2">2000+</div>
                <CardTitle>Emergencies Fixed</CardTitle>
                <CardDescription>Last year alone</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Services We Handle */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Carpentry Services Available 24/7</h2>
            <p className="text-muted-foreground text-lg">
              No matter the time, we're ready to help with urgent carpentry emergencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-red-600">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <Zap className="h-5 w-5 text-red-600 shrink-0" />
                  </div>
                  <CardDescription className="mb-3">{service.description}</CardDescription>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-red-50 rounded px-2 py-1">
                      <div className="font-semibold text-red-700">Response</div>
                      <div className="text-xs text-muted-foreground">{service.response}</div>
                    </div>
                    <div className="bg-green-50 rounded px-2 py-1">
                      <div className="font-semibold text-green-700">{service.available}</div>
                      <div className="text-xs text-muted-foreground">Available</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Response Times by Area */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How Fast Can an Emergency Carpenter Arrive?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Average emergency response times across Johannesburg and Gauteng areas
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {responseAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-red-600" />
                    <h3 className="font-bold">{area.area}</h3>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs text-muted-foreground">Response Time</div>
                      <div className="text-lg font-bold text-red-600">{area.responseTime}</div>
                    </div>
                    <div
                      className={`text-xs px-2 py-1 rounded-full inline-block ${
                        area.priority === "High Priority"
                          ? "bg-red-100 text-red-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {area.priority}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Emergency Situations */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Common Carpentry Emergencies We Fix After Hours
          </h2>

          <div className="space-y-4">
            {commonEmergencies.map((emergency, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{emergency.situation}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full inline-block ${
                          emergency.urgency === "Critical"
                            ? "bg-red-100 text-red-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {emergency.urgency} Urgency
                      </span>
                    </div>
                    <div className="md:col-span-2">
                      <div className="text-sm text-muted-foreground">{emergency.solution}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground mb-1">Typical Fix Time</div>
                      <div className="font-bold text-red-600">{emergency.avgTime}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Pricing */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Emergency Carpenter Pricing</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transparent pricing for emergency services. After-hours premium applies for nights, weekends, and holidays
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="p-4 text-left">Service</th>
                  <th className="p-4 text-left">Daytime (8am-5pm)</th>
                  <th className="p-4 text-left">After Hours (5pm-10pm)</th>
                  <th className="p-4 text-left">Overnight (10pm-6am)</th>
                </tr>
              </thead>
              <tbody>
                {emergencyPricing.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="p-4 font-medium">{item.service}</td>
                    <td className="p-4 text-green-700 font-semibold">{item.daytime}</td>
                    <td className="p-4 text-orange-700 font-semibold">{item.afterHours}</td>
                    <td className="p-4 text-red-700 font-semibold">{item.overnight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <strong>Note:</strong> Prices include callout, assessment, and basic labor. Material costs additional.
                Final quote provided on-site before work begins. No hidden fees.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Do You Offer 24-Hour Emergency Carpenter Services?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {serviceHours.map((period, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-red-600" />
                    {period.period}
                  </CardTitle>
                  <CardDescription className="space-y-2 mt-4">
                    <div>
                      <div className="text-xs text-muted-foreground">Hours</div>
                      <div className="font-semibold">{period.hours}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Pricing</div>
                      <div className="font-semibold text-red-600">{period.rate}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Availability</div>
                      <div className="font-semibold text-green-600">{period.availability}</div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Yes! We're Available 24/7/365</h3>
              <p className="text-muted-foreground mb-4">
                Our emergency carpenter services are available 24 hours a day, 7 days a week, including public
                holidays. We never close.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <a href="tel:0676014490" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Emergency Line Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our Emergency Carpenter Service?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Voice Search Optimized */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Emergency Carpenter Questions Answered
          </h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Do you offer 24-hour emergency carpenter services in Johannesburg?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we provide 24-hour emergency carpentry services throughout Johannesburg and Gauteng, including
                  after-hours, weekends, and public holidays. We never close and are available 365 days a year for
                  urgent carpentry emergencies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How quickly can an emergency carpenter arrive?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our emergency carpenters typically arrive within 60-90 minutes in Johannesburg, Sandton, and
                  surrounding areas. High-priority areas like Sandton and Johannesburg North have 30-45 minute average
                  response times. We dispatch the nearest available carpenter immediately upon your call.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What carpentry emergencies do you fix at night?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We fix broken doors, security door malfunctions, emergency lock replacements, door frame damage from
                  break-ins, doors falling off hinges, emergency board-ups, and any carpentry issue that affects your
                  safety or security. Our mobile workshop carries tools and materials for immediate on-site repairs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How much does an after-hours emergency carpenter cost?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  After-hours emergency callouts (5pm-10pm) range from R1,500-R2,200 plus repair costs. Overnight
                  services (10pm-6am) are R2,000-R2,800. Weekend and public holiday rates include a 30-50% premium.
                  We provide quotes on-site before starting work. No hidden fees.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you fix broken doors on weekends?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we provide full emergency door repair services on weekends, including Saturdays and Sundays. Our
                  emergency team operates 24/7/365, so whether your door breaks on a Saturday night or Sunday morning,
                  we'll be there to fix it quickly and professionally.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can you help if I'm locked out after hours?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we provide emergency lockout assistance including lock replacement and new key cutting on-site.
                  If you've lost your keys or are locked out after hours, call us immediately at 067 601 4490. We'll
                  dispatch a carpenter to get you back inside safely, typically within 60-90 minutes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What areas do you cover for emergency carpenter services?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We cover all of Johannesburg and Gauteng including Sandton, Randburg, Fourways, Midrand, Centurion,
                  Pretoria, Roodepoort, Edenvale, Boksburg, Kempton Park, and surrounding suburbs. Our fastest response
                  times are in Sandton and Johannesburg North (30-45 minutes average).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What should I do while waiting for the emergency carpenter?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For security issues or broken doors, secure the area if safe to do so. Don't attempt repairs that
                  could cause injury. If it's a break-in, contact police first. Take photos for insurance if needed.
                  Keep the area clear for our carpenter to work efficiently. We'll call you when we're 10 minutes away.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Related Emergency Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {relatedServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link href={service.href} className="hover:text-red-600 transition-colors">
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
            Emergency Carpenter Available in These Areas
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            24/7 emergency carpentry services across all Gauteng suburbs
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areaPages.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="flex items-center gap-2 p-4 rounded-lg border bg-card hover:bg-accent hover:shadow-md transition-all group"
              >
                <MapPin className="h-4 w-4 text-red-600 shrink-0" />
                <span className="text-sm font-medium group-hover:text-red-600 transition-colors">{area.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Emergency CTA */}
      <section className="py-16 px-4 md:px-6 bg-red-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <AlertCircle className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need an Emergency Carpenter Right Now?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait. We're available 24/7 for urgent carpentry emergencies across Johannesburg and Gauteng.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white text-primary">
              <CardHeader>
                <Phone className="h-8 w-8 mx-auto mb-2 text-red-600" />
                <CardTitle>Emergency Hotline</CardTitle>
                <CardDescription>
                  <a href="tel:0676014490" className="text-2xl font-bold hover:underline text-red-600">
                    067 601 4490
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white text-primary">
              <CardHeader>
                <Clock className="h-8 w-8 mx-auto mb-2 text-red-600" />
                <CardTitle>Average Response</CardTitle>
                <CardDescription className="text-lg font-semibold">60 Minutes</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white text-primary">
              <CardHeader>
                <Calendar className="h-8 w-8 mx-auto mb-2 text-red-600" />
                <CardTitle>Availability</CardTitle>
                <CardDescription className="text-lg font-semibold">24/7/365</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Button size="lg" variant="secondary" asChild className="text-lg px-8 bg-white text-red-600 hover:bg-gray-100">
            <a href="tel:0676014490">
              <Phone className="mr-2 h-5 w-5" />
              CALL EMERGENCY LINE NOW
            </a>
          </Button>

          <p className="mt-6 text-sm opacity-80">Available right now • No answering service • Direct to carpenter</p>
        </div>
      </section>
    </div>
  )
}
