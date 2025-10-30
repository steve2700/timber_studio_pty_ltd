import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Star, CheckCircle, ArrowRight, Shield, Award, Clock, Users, Wrench, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Ceiling Repairs Vereeniging 2025 | Emergency Ceiling Repair Services",
  description:
    "Professional ceiling repair services in Vereeniging. Water damage, cracks, sagging ceilings. Emergency repairs available. 5-star service, 24-month warranty. Call 067 601 4490.",
  keywords:
    "ceiling repairs Vereeniging, ceiling repair Vereeniging, water damage ceiling Vereeniging, ceiling crack repair Vereeniging, sagging ceiling repair Vereeniging, ceiling restoration Vereeniging, emergency ceiling repair Vereeniging, ceiling contractors Vereeniging, ceiling fixing Vereeniging, ceiling maintenance Vereeniging, ceiling specialists Vereeniging",
  openGraph: {
    title: "Ceiling Repairs Vereeniging 2025 | Emergency Ceiling Repair Services",
    description:
      "Professional ceiling repair services in Vereeniging. Emergency repairs available with 5-star service and 24-month warranty.",
    images: [{ url: "/drywall-contractor.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/ceiling-repairs-vereeniging",
  },
}

export default function CeilingRepairsVereenigingPage() {
  const services = [
    {
      title: "Water Damage Ceiling Repair",
      description: "Complete restoration of water-damaged ceilings including leak source identification and repairs",
      features: [
        "Leak source identification",
        "Moisture testing & drying",
        "Damaged material removal",
        "Complete restoration & painting",
      ],
      price: "From R450/repair",
    },
    {
      title: "Crack & Hole Repair",
      description: "Professional repair of ceiling cracks, holes, and structural damage",
      features: [
        "Structural assessment",
        "Crack filling & reinforcement",
        "Hole patching",
        "Seamless texture matching",
      ],
      price: "From R350/repair",
    },
    {
      title: "Sagging Ceiling Repair",
      description: "Expert repair of sagging ceilings caused by water damage or structural issues",
      features: [
        "Structural evaluation",
        "Support system installation",
        "Board replacement if needed",
        "Complete refinishing",
      ],
      price: "From R600/repair",
    },
    {
      title: "Ceiling Restoration",
      description: "Complete ceiling restoration including texture repair, painting, and finishing",
      features: ["Surface preparation", "Texture restoration", "Professional painting", "Quality finishing"],
      price: "From R180/m²",
    },
  ]

  const emergencyServices = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-600" />,
      title: "24/7 Emergency Response",
      description: "Immediate response for severe ceiling damage requiring urgent attention",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Insurance Documentation",
      description: "Complete documentation and photos for insurance claims",
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: "Temporary Repairs",
      description: "Emergency temporary repairs to prevent further damage",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Expert Assessment",
      description: "Professional evaluation of damage extent and repair requirements",
    },
  ]

  const faqs = [
    {
      question: "How much do ceiling repairs cost in Vereeniging?",
      answer:
        "Ceiling repair costs in Vereeniging vary based on damage extent and repair type. Minor crack repairs start at R350, water damage repairs range R450-R800 depending on affected area, and sagging ceiling repairs cost R600-R1,200 including structural work. Complete ceiling restoration averages R180-R250 per square meter. We provide free assessments and detailed quotes after inspecting the damage. Emergency repairs may incur additional call-out fees. Most repairs are completed within 1-3 days depending on complexity and drying time requirements.",
    },
    {
      question: "What causes ceiling cracks in Vereeniging homes?",
      answer:
        "Ceiling cracks in Vereeniging homes result from several factors including foundation settlement common in the area's clay soils, temperature fluctuations causing expansion and contraction, roof leaks allowing water infiltration, and age-related deterioration of materials. Hairline cracks are often cosmetic, while wider cracks may indicate structural issues requiring professional assessment. We evaluate crack patterns, width, and location to determine underlying causes and recommend appropriate repairs. Addressing root causes prevents recurring damage.",
    },
    {
      question: "Do you provide emergency ceiling repair services in Vereeniging?",
      answer:
        "Yes, we offer 24/7 emergency ceiling repair services throughout Vereeniging for severe damage situations including major water leaks, collapsed ceiling sections, and structural failures. Our emergency response includes immediate damage assessment, temporary repairs to prevent further damage, water extraction and drying, and complete documentation for insurance claims. We arrive within 2-4 hours for emergency calls and provide temporary solutions while planning permanent repairs. Emergency services include after-hours availability and weekend response.",
    },
    {
      question: "How long does ceiling repair take in Vereeniging?",
      answer:
        "Ceiling repair timelines depend on damage extent and repair type. Simple crack repairs take 1-2 days including filling, sanding, and painting. Water damage repairs require 3-5 days including drying time (24-48 hours), material replacement, and finishing. Sagging ceiling repairs take 2-4 days including structural work and refinishing. Each repair stage requires proper drying time before proceeding. We provide realistic timelines during assessment and keep you informed throughout the process. Weather and humidity affect drying times.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Ceiling Repairs Vereeniging",
            description:
              "Professional ceiling repair services in Vereeniging including water damage restoration, crack repairs, and emergency ceiling repair services.",
            provider: {
              "@type": "LocalBusiness",
              name: "Granite Carpentry",
              telephone: "+27676014490",
              email: "info@granitecarpentry.co.za",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vereeniging",
                addressRegion: "Gauteng",
                addressCountry: "ZA",
              },
            },
            areaServed: {
              "@type": "City",
              name: "Vereeniging",
            },
            serviceType: "Ceiling Repair",
            offers: {
              "@type": "Offer",
              priceCurrency: "ZAR",
              price: "350",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-600 hover:bg-red-700 text-white">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Emergency Repairs Available
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Professional <span className="text-amber-400">Ceiling Repairs</span> in Vereeniging
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Expert ceiling repair services for Vereeniging homes and businesses. From water damage restoration to
                  crack repairs, we provide fast, professional solutions with 24/7 emergency service available.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <Link href="/contact">
                    Get Free Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <Link href="tel:+27676014490">
                    <Phone className="mr-2 h-5 w-5" />
                    Emergency: 067 601 4490
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-amber-400 fill-current" />
                  <span>5.0 Rating • 47+ Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-green-400" />
                  <span>24/7 Emergency Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-blue-400" />
                  <span>24-Month Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/drywall-contractor.jpg"
                  alt="Professional Ceiling Repairs Vereeniging"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Expert Ceiling Repair Services in Vereeniging
            </h2>

            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p>
                Ceiling damage in Vereeniging homes and businesses requires prompt professional attention to prevent
                further deterioration and costly repairs. Our specialized ceiling repair services address all types of
                ceiling damage including water damage from roof leaks or plumbing issues, structural cracks from
                foundation settlement, sagging ceilings, and age-related deterioration. With extensive experience
                serving Vereeniging properties, we understand the unique challenges posed by the area's clay soils,
                weather patterns, and building construction methods. Our comprehensive repair approach ensures
                long-lasting results that restore both function and appearance.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Water Damage Ceiling Repair and Restoration
              </h3>
              <p>
                Water damage is the most common ceiling problem in Vereeniging, resulting from roof leaks, plumbing
                failures, or HVAC condensation. Our water damage repair process begins with identifying and addressing
                the leak source to prevent recurring damage. We perform moisture testing to determine affected areas,
                remove damaged materials including insulation if necessary, and allow proper drying time before
                beginning repairs. Restoration includes structural repairs, new drywall installation, texture matching,
                priming, and painting to seamlessly blend with existing ceilings. We work with insurance companies and
                provide detailed documentation including photos and moisture readings for claims processing.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Structural Crack Repair and Prevention</h3>
              <p>
                Ceiling cracks in Vereeniging homes often result from foundation settlement in the area's expansive clay
                soils. We evaluate crack patterns, width, and location to determine whether cracks are cosmetic or
                indicate structural issues requiring foundation assessment. Our crack repair process includes structural
                evaluation, crack cleaning and preparation, flexible filler application to accommodate minor movement,
                reinforcement mesh for larger cracks, and professional finishing that makes repairs virtually invisible.
                We address underlying causes when possible and provide recommendations for preventing future cracking.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                Sagging Ceiling Repair and Structural Support
              </h3>
              <p>
                Sagging ceilings pose safety risks and require immediate professional attention. Common causes include
                water damage weakening ceiling materials, inadequate support during original installation, and
                age-related deterioration. Our sagging ceiling repair includes comprehensive structural assessment,
                installation of additional support systems, replacement of damaged ceiling boards, and complete
                refinishing. We ensure repairs meet current building codes and provide long-term stability. Emergency
                services are available for severe sagging that poses immediate collapse risk.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">24/7 Emergency Ceiling Repair Services</h3>
              <p>
                Severe ceiling damage requires immediate professional response to prevent further property damage and
                safety hazards. Our emergency services include rapid response within 2-4 hours, immediate damage
                assessment, temporary repairs to prevent further damage, water extraction and emergency drying, and
                complete documentation for insurance purposes. We provide after-hours and weekend emergency services
                throughout Vereeniging. Emergency call-out fees apply, but we work efficiently to minimize costs while
                ensuring proper repairs. Our emergency team carries necessary equipment and materials for immediate
                temporary solutions.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Quality Repairs with Long-Term Warranties</h3>
              <p>
                All ceiling repairs include our 24-month warranty covering both materials and workmanship. We use
                premium materials from trusted suppliers and follow industry best practices for lasting results. Our
                repair process includes thorough surface preparation, proper drying times between coats, quality
                finishing materials, and professional painting that matches existing ceilings. We provide maintenance
                recommendations to help prevent future damage and extend ceiling lifespan. Our commitment to quality
                ensures repairs that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Our Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Comprehensive Ceiling Repair Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From minor crack repairs to major water damage restoration, we provide complete ceiling repair services
              with professional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <Badge className="bg-amber-600 text-white">{service.price}</Badge>
                  </div>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                    <Link href="/contact">
                      Get Assessment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-red-600 text-white hover:bg-red-700">Emergency Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">24/7 Emergency Ceiling Repairs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Immediate response for severe ceiling damage requiring urgent professional attention
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyServices.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600">Common questions about ceiling repairs in Vereeniging</p>
            </div>

            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-slate-200 pb-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Drywall & Ceiling Services in Other Areas
            </h2>
            <p className="text-xl text-slate-600">Professional services throughout Johannesburg and Gauteng</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Ceiling Repairs Sandton</h3>
                <p className="text-slate-600 mb-6">Professional ceiling repair services in Sandton</p>
                <Button asChild variant="outline">
                  <Link href="/ceiling-repairs-sandton">View Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Drywall Fourways</h3>
                <p className="text-slate-600 mb-6">Expert drywall installation in Fourways</p>
                <Button asChild variant="outline">
                  <Link href="/drywall-fourways">View Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Drywall Johannesburg South</h3>
                <p className="text-slate-600 mb-6">Professional drywalling in Johannesburg South</p>
                <Button asChild variant="outline">
                  <Link href="/drywall-johannesburg-south">View Services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Need Ceiling Repairs in Vereeniging?</h2>
            <p className="text-xl text-amber-100">
              Get professional ceiling repair services with free assessment and detailed quote. Emergency services
              available 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="/contact">
                  Get Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-amber-600 bg-transparent"
              >
                <Link href="tel:+27676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency: 067 601 4490
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-amber-100">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Expert Technicians</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Insurance Documentation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>24-Month Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
