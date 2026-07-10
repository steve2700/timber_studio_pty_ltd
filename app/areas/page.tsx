import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Phone, Star, ArrowRight, CheckCircle, Award, Users, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Service Areas | Bespoke Carpentry & Joinery Gauteng | Johannesburg, Pretoria, East & West Rand | The Timber Studio",
  description:
    "Bespoke carpentry & custom joinery services across Gauteng. Serving 23+ areas including Johannesburg, Sandton, Pretoria, Centurion, Midrand, East Rand & West Rand. Kitchen renovations, built-in cupboards, solid timber doors & decking. Licensed & insured. Free quotes. Call 063 397 7498",
  keywords:
    "carpenter Gauteng, joinery Gauteng, carpenter Johannesburg, joinery Pretoria, carpenter Sandton, carpenter Midrand, carpenter East Rand, carpenter West Rand, kitchen renovations Gauteng, built-in cupboards Gauteng, custom joinery Gauteng, timber doors Gauteng, service areas, coverage areas, where we work",
  alternates: {
    canonical: "https://www.timberstudio.co.za/areas",
  },
  openGraph: {
    title: "Service Areas | Bespoke Carpentry & Joinery Gauteng | 23+ Areas Covered",
    description:
      "Bespoke carpentry & custom joinery services across Gauteng. Serving Johannesburg, Sandton, Pretoria, Centurion, Midrand, East & West Rand. Free quotes. Call 063 397 7498",
    url: "https://www.timberstudio.co.za/areas",
    images: [
      {
        url: "https://www.timberstudio.co.za/timber-studio-bespoke-joinery-johannesburg.png",
        width: 1200,
        height: 630,
        alt: "Bespoke Carpentry & Joinery Service Areas - Gauteng Coverage",
      },
    ],
  },
}

export default function AreasPage() {
  const areasByRegion = {
    "Central Gauteng": [
      {
        name: "Johannesburg",
        slug: "johannesburg",
        description: "City center carpentry & plumbing services",
        projects: "500+",
        highlight: "Urban Specialists",
      },
      {
        name: "Johannesburg South",
        slug: "johannesburg-south",
        description: "Southern suburbs expert services",
        projects: "450+",
        highlight: "Residential Focus",
      },
      {
        name: "Midrand",
        slug: "midrand",
        description: "Business hub carpentry solutions",
        projects: "400+",
        highlight: "Commercial Ready",
      },
    ],
    "Northern Suburbs": [
      {
        name: "Sandton",
        slug: "sandton",
        description: "Premium luxury home services",
        projects: "500+",
        highlight: "Luxury Specialists",
      },
      {
        name: "Randburg",
        slug: "randburg",
        description: "Family-focused carpentry & plumbing",
        projects: "380+",
        highlight: "Family Homes",
      },
      {
        name: "Fourways",
        slug: "fourways",
        description: "Modern estate services",
        projects: "350+",
        highlight: "Estate Experts",
      },
    ],
    "Pretoria & Centurion": [
      {
        name: "Pretoria",
        slug: "pretoria",
        description: "Capital city professional services",
        projects: "450+",
        highlight: "Heritage Homes",
      },
      {
        name: "Centurion",
        slug: "centurion",
        description: "Modern smart home solutions",
        projects: "400+",
        highlight: "Tech Integration",
      },
    ],
    "East Rand": [
      {
        name: "Kempton Park",
        slug: "kempton-park",
        description: "Airport area expert services",
        projects: "320+",
        highlight: "Quick Response",
      },
      {
        name: "Boksburg",
        slug: "boksburg",
        description: "Established area specialists",
        projects: "300+",
        highlight: "Local Experts",
      },
      {
        name: "Benoni",
        slug: "benoni",
        description: "East Rand carpentry specialists",
        projects: "280+",
        highlight: "Area Knowledge",
      },
      {
        name: "Edenvale",
        slug: "edenvale",
        description: "Residential carpentry services",
        projects: "270+",
        highlight: "Home Renovations",
      },
      {
        name: "Germiston",
        slug: "germiston",
        description: "Industrial & residential services",
        projects: "250+",
        highlight: "Versatile Team",
      },
      {
        name: "Springs",
        slug: "springs",
        description: "Far East Rand coverage",
        projects: "200+",
        highlight: "Extended Coverage",
      },
      {
        name: "Nigel",
        slug: "nigel",
        description: "Agricultural area services",
        projects: "180+",
        highlight: "Rural Expertise",
      },
    ],
    "West Rand": [
      {
        name: "Roodepoort",
        slug: "roodepoort",
        description: "West Rand professional services",
        projects: "320+",
        highlight: "West Specialists",
      },
      {
        name: "Krugersdorp",
        slug: "krugersdorp",
        description: "Mining town carpentry experts",
        projects: "250+",
        highlight: "Heritage Work",
      },
      {
        name: "Carletonville",
        slug: "carletonville",
        description: "Far West Rand services",
        projects: "180+",
        highlight: "Extended Reach",
      },
      {
        name: "Westonaria",
        slug: "westonaria",
        description: "Rural West Rand coverage",
        projects: "150+",
        highlight: "Rural Services",
      },
    ],
    "South Rand": [
      {
        name: "Alberton",
        slug: "alberton",
        description: "Family-focused carpentry services",
        projects: "350+",
        highlight: "Family Specialists",
      },
      {
        name: "Vereeniging",
        slug: "vereeniging",
        description: "Vaal Triangle expert services",
        projects: "280+",
        highlight: "Vaal Coverage",
      },
      {
        name: "Vanderbijlpark",
        slug: "vanderbijlpark",
        description: "Industrial town services",
        projects: "260+",
        highlight: "Industrial Ready",
      },
      {
        name: "Heidelberg",
        slug: "heidelberg",
        description: "Historic town carpentry",
        projects: "200+",
        highlight: "Heritage Homes",
      },
    ],
  }

  const services = [
    {
      title: "Kitchen Renovations",
      description: "Complete kitchen makeovers across all Gauteng areas",
      icon: "🏠",
    },
    {
      title: "Built-in Cupboards",
      description: "Custom storage solutions for every region",
      icon: "🚪",
    },
    {
      title: "Solid Timber Doors",
      description: "Handcrafted pivot, barn & entrance doors throughout Gauteng",
      icon: "🚪",
    },
    {
      title: "Decking & Flooring",
      description: "Premium hardwood decking and timber flooring across all areas",
      icon: "🪵",
    },
  ]

  const faqs = [
    {
      question: "Which areas in Gauteng do you serve?",
      answer:
        "We serve 23+ areas across Gauteng including Johannesburg, Sandton, Pretoria, Centurion, Midrand, Randburg, Fourways, Roodepoort, Krugersdorp, Kempton Park, Boksburg, Benoni, Edenvale, Germiston, Springs, Nigel, Alberton, Vereeniging, Vanderbijlpark, Heidelberg, Carletonville, Westonaria, and Johannesburg South. We cover Central Gauteng, Northern Suburbs, Pretoria & Centurion, East Rand, West Rand, and South Rand regions.",
    },
    {
      question: "Do you charge extra for traveling to different areas?",
      answer:
        "No, we do not charge travel fees for any of our 23+ service areas across Gauteng. Our quoted prices include all travel costs within our coverage areas. Whether you're in Sandton, Pretoria, or Vereeniging, you'll receive the same competitive pricing and professional service.",
    },
    {
      question: "How quickly can you respond to service requests in my area?",
      answer:
        "We offer same-day quotes for all areas across Gauteng. For emergency plumbing services, we provide 24/7 response with typical arrival times of 2-4 hours depending on your location and the urgency of the situation. For scheduled carpentry and renovation projects, we can usually start within 3-7 days of quote approval.",
    },
    {
      question: "Are your services the same quality across all areas?",
      answer:
        "Yes, absolutely. We maintain the same high standards of quality, professionalism, and craftsmanship across all 23+ areas we serve. All our technicians are licensed, insured, and trained to deliver consistent 5-star service whether you're in Johannesburg CBD, Centurion, or any other Gauteng location. We use the same premium materials and follow the same quality control processes everywhere.",
    },
    {
      question: "Do you have experience with local building codes in different areas?",
      answer:
        "Yes, our team has extensive knowledge of local building codes, architectural styles, and area-specific requirements across all Gauteng regions. We ensure all our carpentry, plumbing, and installation work complies with local municipal regulations and SANS standards. We handle all necessary permits and inspections for your area.",
    },
    {
      question: "Can I see examples of work you've done in my specific area?",
      answer:
        "Yes! We've completed 3,000+ projects across Gauteng with area-specific portfolios. Visit our individual area pages (e.g., /areas/sandton, /areas/pretoria) to see projects, testimonials, and case studies from your specific location. You can also contact us directly - we likely still serve your area as we cover the entire Gauteng province. Our team can confirm coverage and provide area-specific information during your free consultation.",
    },
    {
      question: "What services are available in all areas?",
      answer:
        "All our core services are available across every area we serve: kitchen renovations, built-in cupboards, custom carpentry, wardrobes, vanities, solid timber doors, decking, flooring, and drywall & ceilings. Every project is designed, crafted, and installed by our own team with a 24-month workmanship warranty.",
    },
    {
      question: "How do I know which area page to visit for my location?",
      answer:
        "We have dedicated pages for 23 major areas across Gauteng. Simply find your area in the list above or use our area selector. If your specific suburb isn't listed, contact us directly - we likely still serve your area as we cover the entire Gauteng province. Our team can confirm coverage and provide area-specific information during your free consultation.",
    },
  ]

  const totalAreas = Object.values(areasByRegion).flat().length

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2">
              Serving {totalAreas}+ Areas Across Gauteng
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Bespoke Carpentry & Joinery <span className="text-amber-400 block">Service Areas in Gauteng</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Comprehensive bespoke carpentry, custom joinery, and timber renovation services across Johannesburg,
              Pretoria, East Rand, West Rand, and South Rand. Licensed, insured, and trusted by 3,000+ Gauteng
              homeowners since 2020.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center text-sm sm:text-base">
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
                <span className="ml-2 font-semibold">5.0 Rating</span>
              </div>
              <span className="text-slate-400">•</span>
              <span className="font-semibold">{totalAreas}+ Areas Covered</span>
              <span className="text-slate-400">•</span>
              <span className="font-semibold">3,000+ Projects Completed</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
              >
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent"
              >
                <Link href="tel:+27633977498">Call 063 397 7498</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <MapPin className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">{totalAreas}+</div>
              <div className="text-sm text-slate-600">Areas Covered</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">3,000+</div>
              <div className="text-sm text-slate-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">5.0</div>
              <div className="text-sm text-slate-600">Star Rating</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">24/7</div>
              <div className="text-sm text-slate-600">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Services Available in All Gauteng Areas
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Professional carpentry, plumbing, and installation services delivered with the same high standards across
              every area we serve
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas by Region */}
      {Object.entries(areasByRegion).map(([region, areas]) => (
        <section key={region} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{region}</h2>
              <p className="text-lg text-slate-600">Professional carpenter and plumber services throughout {region}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area) => (
                <Card
                  key={area.slug}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:border-amber-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <MapPin className="h-6 w-6 text-amber-600 flex-shrink-0" />
                      <Badge variant="outline" className="text-xs">
                        {area.projects} Projects
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-amber-600 transition-colors">{area.name}</CardTitle>
                    <CardDescription className="text-slate-600">{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{area.highlight}</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>Licensed & Insured</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>Same-Day Quotes</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>24-Month Warranty</span>
                      </div>
                    </div>
                    <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                      <Link href={`/areas/${area.slug}`}>
                        View {area.name} Services
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Gauteng Homeowners Choose Us</h2>
              <p className="text-lg text-slate-600">
                Consistent quality and professional service across every area we serve
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Licensed & Insured</h3>
                  <p className="text-slate-600">
                    Fully licensed carpentry and plumbing business with comprehensive public liability insurance
                    covering all Gauteng areas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">5-Star Rated Service</h3>
                  <p className="text-slate-600">
                    Consistently rated 5 stars by clients across all areas with 3,000+ completed projects and glowing
                    testimonials
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Fast Response Times</h3>
                  <p className="text-slate-600">
                    Same-day quotes available for all areas. Emergency plumbing services available 24/7 across Gauteng
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Local Area Expertise</h3>
                  <p className="text-slate-600">
                    Deep understanding of local architectural styles, building codes, and area-specific requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions About Our Service Areas
              </h2>
              <p className="text-lg text-slate-600">
                Common questions about our coverage, response times, and services across Gauteng
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-amber-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free consultation and quote for your kitchen, joinery, or timber renovation project. We serve all{" "}
            {totalAreas}+ areas across Gauteng with meticulous craftsmanship and a 24-month workmanship warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-amber-600 hover:bg-slate-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Quote
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-amber-600 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent"
            >
              <Link href="tel:+27633977498">Call 063 397 7498</Link>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-8 text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
              <span>Free Consultations</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
              <span>Same-Day Quotes</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
              <span>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Bespoke Carpentry & Custom Joinery Services Gauteng",
            description:
              "Comprehensive bespoke carpentry, custom joinery, and timber renovation services across Johannesburg, Pretoria, East Rand, West Rand, and South Rand",
            provider: {
              "@id": "https://www.timberstudio.co.za/#business",
            },
            areaServed: Object.values(areasByRegion)
              .flat()
              .map((area) => ({
                "@type": "City",
                name: area.name,
                containedInPlace: {
                  "@type": "State",
                  name: "Gauteng",
                },
              })),
            serviceType: [
              "Kitchen Renovations",
              "Built-in Cupboards",
              "Custom Joinery",
              "Solid Timber Doors",
              "Decking & Flooring",
              "Bespoke Carpentry",
            ],
          }),
        }}
      />

      {/* FAQPage schema for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
