import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, CheckCircle, Clock, ShieldCheck, Hammer, Users, MapPin, ArrowRight } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      title: "Kitchen Renovations",
      description:
        "Custom cabinetry, premium finishes, and expert installation. Kitchen renovation specialists serving Gauteng homes.",
      image: "/images/kitchen-hero.png",
      href: "/kitchen-renovations",
      duration: "7-14 days",
      linkText: "Explore Kitchen Renovations",
    },
    {
      title: "Bathroom Renovations",
      description:
        "Complete bathroom makeovers with modern fixtures, tiling, and waterproofing. Contemporary, classic, and luxury designs.",
      image: "/images/bathroom-hero.png",
      href: "/bathroom-renovations",
      duration: "7-14 days",
      linkText: "Explore Bathroom Renovations",
    },
    {
      title: "Built-in Cupboards",
      description:
        "Bespoke wardrobes, study units, and custom storage solutions maximizing your space. Premium carpentry for Gauteng homes and offices.",
      image: "/images/built-in-cupboards-hero.png",
      href: "/built-in-cupboards",
      duration: "3-7 days",
      linkText: "View Built-in Cupboard Options",
    },
    {
      title: "Decking & Flooring",
      description:
        "Outdoor wooden decking and indoor flooring solutions. Durable materials and expert installation suited to Gauteng's climate.",
      image: "/images/decking-flooring-hero.png",
      href: "/decking-flooring",
      duration: "3-8 days",
      linkText: "See Decking & Flooring Work",
    },
    {
      title: "Drywall & Ceilings",
      description:
        "Drywall installation, ceiling repairs, and suspended ceiling systems for commercial and residential spaces across Gauteng.",
      image: "/images/drywall-ceilings-hero.png",
      href: "/drywall-ceilings",
      duration: "2-6 days",
      linkText: "Learn About Drywall Services",
    },
    {
      title: "Door Installation",
      description:
        "Pivot doors, barn doors, security doors, and French doors — installed to fit, for homes and businesses across Gauteng.",
      image: "/images/door-installation-hero.png",
      href: "/door-installation",
      duration: "1-3 days",
      linkText: "Explore Door Services",
    },
  ]

  // Matches all 24 area pages under /areas/[slug]
  const areas = [
    { name: "Johannesburg", href: "/areas/johannesburg" },
    { name: "Johannesburg South", href: "/areas/johannesburg-south" },
    { name: "Sandton", href: "/areas/sandton" },
    { name: "Randburg", href: "/areas/randburg" },
    { name: "Kempton Park", href: "/areas/kempton-park" },
    { name: "Midrand", href: "/areas/midrand" },
    { name: "Fourways", href: "/areas/fourways" },
    { name: "Boksburg", href: "/areas/boksburg" },
    { name: "Centurion", href: "/areas/centurion" },
    { name: "Pretoria", href: "/areas/pretoria" },
    { name: "Alberton", href: "/areas/alberton" },
    { name: "Edenvale", href: "/areas/edenvale" },
    { name: "Roodepoort", href: "/areas/roodepoort" },
    { name: "Benoni", href: "/areas/benoni" },
    { name: "Germiston", href: "/areas/germiston" },
    { name: "Springs", href: "/areas/springs" },
    { name: "Vanderbijlpark", href: "/areas/vanderbijlpark" },
    { name: "Vereeniging", href: "/areas/vereeniging" },
    { name: "Nigel", href: "/areas/nigel" },
    { name: "Heidelberg", href: "/areas/heidelberg" },
    { name: "Carletonville", href: "/areas/carletonville" },
    { name: "Krugersdorp", href: "/areas/krugersdorp" },
    { name: "Westonaria", href: "/areas/westonaria" },
    { name: "Bedfordview", href: "/areas/bedfordview" },
  ]

  // Recent work — swap these three photos out as your portfolio grows.
  const recentWork = [
    { title: "Custom Kitchen, Gauteng", image: "/images/project-kitchen.png", href: "/kitchen-renovations" },
    { title: "Timber Deck Build", image: "/images/project-deck.png", href: "/decking-flooring" },
    { title: "Bathroom Vanity Joinery", image: "/images/project-vanity.png", href: "/bathroom-renovations" },
  ]

  const whyChooseUs = [
    {
      icon: <Hammer className="h-8 w-8 text-copper" />,
      title: "Skilled In-House Craftsmen",
      description: "Every piece is measured, made, and fitted by our own team — not subcontracted out.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-copper" />,
      title: "Written Workmanship Guarantee",
      description: "Every project comes with a clear, written guarantee on our workmanship.",
    },
    {
      icon: <Users className="h-8 w-8 text-copper" />,
      title: "Trusted By Gauteng Homeowners",
      description: "Built on referrals and repeat clients across Johannesburg, Pretoria, and the wider province.",
    },
    {
      icon: <Clock className="h-8 w-8 text-copper" />,
      title: "Clear Project Timelines",
      description: "A fixed schedule with your quote, and regular updates so you always know where things stand.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charcoal via-walnut to-charcoal text-cream overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-copper hover:bg-copper-dark text-cream px-4 py-2">
                  Bespoke Carpentry & Joinery, Gauteng
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  Bespoke Carpentry &{" "}
                  <span className="text-gold-light block sm:inline">Custom Joinery</span>{" "}
                  <span className="block">Crafted for Gauteng Homes</span>
                </h1>
                <p className="text-lg sm:text-xl text-cream/80 leading-relaxed">
                  The Timber Studio designs, crafts, and installs handmade timber pieces that transform the way you
                  live. From custom kitchens and built-in wardrobes to solid timber doors, decking, and full
                  renovations — every project is measured, made, and fitted by our own team.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-copper hover:bg-copper-dark text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Get a Free Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-cream/40 text-cream hover:bg-cream hover:text-charcoal text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gold-light flex-shrink-0" />
                  <span>Free In-Home Consultations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gold-light flex-shrink-0" />
                  <span>Fixed Written Quotes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gold-light flex-shrink-0" />
                  <span>Gauteng-Wide Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-gold-light flex-shrink-0" />
                  <span>Workmanship Guarantee</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/home-hero.png"
                  alt="Bespoke custom timber kitchen and joinery by The Timber Studio"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="bg-cream/90 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-charcoal text-sm sm:text-base">Quick Response</p>
                        <p className="text-xs sm:text-sm text-charcoal/70">Call 063 397 7498</p>
                      </div>
                      <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-copper" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-paper">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-gold-light/20 text-copper-dark px-4 py-2 mb-4">Our Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Handcrafted Timber Solutions for Every Room in Your Home
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              From bespoke kitchens and fitted wardrobes to solid timber doors and hardwood decking, every piece is
              custom-designed and built to last — across Johannesburg, Pretoria, and the wider Gauteng region.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-copper transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Typical timeline: {service.duration}</span>
                  </div>
                  <Button asChild className="w-full bg-copper hover:bg-copper-dark">
                    <Link href={service.href}>
                      {service.linkText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Specialist location pages */}
          <div className="mt-16 pt-16 border-t border-border">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                Specialist Carpentry & Drywall Services by Location
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dedicated pages for our most-requested suburbs and services across Gauteng.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-charcoal mb-3">Drywall Sandton</h4>
                  <p className="text-muted-foreground mb-4">
                    Drywall installation services for Sandton's residential and commercial properties.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/drywall-sandton">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-charcoal mb-3">Drywalling Contractors Johannesburg</h4>
                  <p className="text-muted-foreground mb-4">Drywalling contractors serving all of Johannesburg.</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/drywalling-contractors-johannesburg">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-charcoal mb-3">Carpenter Sandhurst</h4>
                  <p className="text-muted-foreground mb-4">
                    Bespoke carpentry and joinery for Sandhurst's homes and estates.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/carpenter-sandhurst">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-charcoal mb-3">Carpenter Near Me Johannesburg</h4>
                  <p className="text-muted-foreground mb-4">
                    Local carpenters ready to help with projects across Johannesburg.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/carpenter-near-me-johannesburg">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop / Story Section */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/about-workshop.png"
                alt="The Timber Studio workshop where every piece is measured, made, and finished"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <Badge className="bg-gold-light/20 text-copper-dark px-4 py-2 mb-4">Our Workshop</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">Made in our own workshop, fitted by our own hands</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Every kitchen, cupboard, door, and deck starts on our workshop bench before it ever reaches your
                home. We don't subcontract the craft out — the team that measures your space is the same team that
                builds and installs it.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                That means fewer surprises, tighter tolerances, and a finish that holds up. It's a simple way of
                working, and it's the whole reason The Timber Studio exists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-paper">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-gold-light/20 text-copper-dark px-4 py-2 mb-4">Why Choose The Timber Studio</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Gauteng's Bespoke Joinery Studio
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with homeowners, architects, and businesses across Johannesburg, Sandton, Pretoria, and Gauteng
              on custom carpentry, joinery, and timber installations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <Badge className="bg-gold-light/20 text-copper-dark px-4 py-2 mb-4">Recent Work</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">A glimpse of the craft</h2>
            </div>
            <Link href="/portfolio" className="text-copper font-semibold hover:text-copper-dark">
              View full portfolio →
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {recentWork.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4 text-cream font-medium">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served Section */}
      <section className="py-16 sm:py-20 bg-paper">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-gold-light/20 text-copper-dark px-4 py-2 mb-4">Service Coverage Areas</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              Serving 24 Areas Across Greater Johannesburg, Pretoria & Gauteng Province
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Carpentry, joinery, renovation, and door installation services available throughout Gauteng.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="group p-4 rounded-lg border border-border hover:border-copper/40 hover:bg-cream transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-copper flex-shrink-0" />
                  <span className="font-medium text-charcoal group-hover:text-copper text-sm sm:text-base">
                    {area.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/areas">
                View All Service Areas in Gauteng
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section — placeholder until real client reviews are added.
          Do not fill this with invented names/quotes: fabricated testimonials
          attributed to named individuals are a real legal and trust risk. */}
      <section className="py-16 sm:py-20 bg-charcoal text-cream">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-copper text-cream px-4 py-2 mb-4">Client Reviews</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-lg sm:text-xl text-cream/70 max-w-2xl mx-auto mb-8">
            We're gathering reviews from recent Gauteng projects — check back soon, or ask us for references from
            current clients.
          </p>
          <Button asChild size="lg" className="bg-copper hover:bg-copper-dark">
            <Link href="/contact">Ask About Our Recent Projects</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-copper text-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Home or Business?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book a free, no-obligation consultation and quote. We're ready to discuss your custom kitchen, wardrobe,
            timber door, decking, or full renovation project anywhere in Gauteng.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-cream text-copper hover:bg-cream/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Get Your Free Quote
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cream text-cream hover:bg-cream hover:text-copper text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent"
            >
              <Link href="tel:+27633977498">Call 063 397 7498</Link>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-8 text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Free In-Home Consultations</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Fixed Written Quotes</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Gauteng-Wide Service</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
