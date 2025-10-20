"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Star, MapPin, Award, Users, Clock, Shield, Gem, ChevronDown } from "lucide-react"
import { useState } from "react"

const metadata = {
  title:
    "★★★★★ Best Carpenter & Plumber Bedfordview 2025 | #1 Kitchen Renovations, Built-in Cupboards & Plumbing",
  description:
    "★★★★★ #1 carpenter & plumber in Bedfordview 2025. Premium kitchen renovations, custom built-in cupboards, granite installations & luxury plumbing. 600+ upmarket projects. FREE quotes. Call 067 601 4490.",
  keywords:
    "best carpenter Bedfordview, plumber Bedfordview, kitchen renovation Bedfordview, built-in cupboards Bedfordview, granite installation Bedfordview, luxury plumbing Bedfordview, carpenter near me Bedfordview, Bedfordview kitchen cabinets, Edenvale carpenter, Epsom Downs plumber, Lethabong carpenter, emergency plumber Bedfordview",
  openGraph: {
    title: "★★★★★ Best Carpenter & Plumber Bedfordview 2025 | Premium Services",
    description:
      "★★★★★ #1 carpenter & plumber in Bedfordview. Premium kitchen renovations, custom built-in cupboards, granite installations & luxury plumbing services. 600+ upmarket projects. FREE quotes.",
    url: "https://granitecarpentry.co.za/areas/bedfordview",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/bedfordview",
  },
}

export default function BedfordviewPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "What areas in Bedfordview do you service?",
      answer:
        "We provide comprehensive carpentry and plumbing services throughout Bedfordview and surrounding areas including Edenvale, Epsom Downs, Lethabong, Germiston, Kempton Park, and Alberton. We serve both residential and upmarket properties in the East Rand region.",
    },
    {
      question: "How long does a typical kitchen renovation take in Bedfordview?",
      answer:
        "Kitchen renovation timelines vary based on scope. Small to medium renovations typically take 2-4 weeks, while comprehensive luxury kitchen makeovers can take 4-8 weeks. We provide detailed project timelines upfront and maintain flexible scheduling to minimize disruption to your Bedfordview home.",
    },
    {
      question: "Do you offer emergency plumbing services in Bedfordview?",
      answer:
        "Yes! We provide 24/7 emergency plumbing services throughout Bedfordview. Burst pipes, leaks, and urgent repairs are handled promptly. Call 067 601 4490 for immediate assistance. Emergency call-out fees apply after hours.",
    },
    {
      question: "What premium materials do you use for kitchen countertops?",
      answer:
        "We exclusively use top-quality materials including Caesarstone, Silestone, natural granite, and marble. Each material is sourced from trusted suppliers ensuring durability, aesthetics, and value. We provide samples and guidance to help you select the perfect finish for your Bedfordview kitchen.",
    },
    {
      question: "Is your work in Bedfordview guaranteed?",
      answer:
        "Absolutely. All carpentry and plumbing work is backed by our comprehensive 5-year warranty. We're fully licensed and insured with R2 million public liability coverage, ensuring complete peace of mind on your investment.",
    },
    {
      question: "How much do custom built-in cupboards cost in Bedfordview?",
      answer:
        "Custom built-in cupboards start from R18,500 depending on size, materials, and complexity. Walk-in wardrobes and luxury storage solutions range from R25,000 to R85,000+. We provide free detailed quotes after assessing your specific requirements.",
    },
    {
      question: "Do you handle both new installations and repairs?",
      answer:
        "Yes, we specialize in both new installations and repairs. From minor plumbing fixes to complete renovations, our Bedfordview team handles all carpentry and plumbing needs for residential and upmarket properties.",
    },
    {
      question: "What makes you the best choice for Bedfordview homeowners?",
      answer:
        "We combine 15+ years of experience, 600+ completed projects, premium materials only, 5-year warranty, 24/7 emergency service, and fully licensed/insured credentials. Our Bedfordview team understands local property styles and delivers exceptional craftsmanship consistently.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-amber-400" />
              <Badge variant="secondary" className="bg-amber-600/20 text-amber-200 border-amber-400/30">
                ★★★★★ #1 Carpenter & Plumber Bedfordview
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Best Carpenter & Plumber
              <span className="block text-amber-400">Bedfordview 2025</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
              ★★★★★ #1 carpenter & plumber in Bedfordview 2025. Premium kitchen renovations, custom built-in cupboards,
              granite & Caesarstone installations, and luxury plumbing services for Bedfordview, Edenvale, Epsom Downs,
              Lethabong, and surrounding East Rand areas. 600+ completed projects with 5-year warranty. FREE quotes,
              flexible scheduling & 24/7 emergency plumbing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <a
                href="tel:+27676014490"
                className="flex items-center gap-2 text-lg hover:text-amber-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                067 601 4490
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <span>★★★★★ 5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-400" />
                <span>600+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Gem className="w-5 h-5 text-amber-400" />
                <span>Premium Materials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Premium Carpentry & Plumbing Services in Bedfordview
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive home improvement solutions for Bedfordview residents. From luxury kitchen renovations to
              emergency plumbing, we deliver exceptional quality and professional service throughout the East Rand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Gem className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Kitchen Renovations</h3>
                    <p className="text-sm text-amber-600">From R85,000</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Custom cabinetry & soft-close hinges
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Granite, Caesarstone & Silestone
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Designer islands & breakfast bars
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Complete luxury makeovers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Smart storage solutions
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/kitchen-renovations">View Kitchen Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Built-in Cupboards</h3>
                    <p className="text-sm text-amber-600">From R18,500</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Walk-in wardrobes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Home office storage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Entertainment centers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Luxury storage solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Premium hardware finishes
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/built-in-cupboards">View Cupboard Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Stone Work</h3>
                    <p className="text-sm text-amber-600">From R850/m²</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Caesarstone countertops
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Granite & marble
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Bathroom vanity tops
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Expert templating
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Custom designs
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/quartz-granite">View Stone Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Gem className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Plumbing Services</h3>
                    <p className="text-sm text-amber-600">From R450/hour</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Bathroom installations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Kitchen plumbing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Geyser systems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    24/7 emergency service
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Water filtration systems
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/plumbing">View Plumbing Services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
              Why Bedfordview Residents Choose Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gem className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Local Bedfordview Experts</h3>
                    <p className="text-slate-600">
                      Deep expertise serving Bedfordview, Edenvale, Epsom Downs, and surrounding areas. We understand
                      local property styles and deliver tailored solutions for East Rand homes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Premium Quality Only</h3>
                    <p className="text-slate-600">
                      We exclusively use Caesarstone, Silestone, natural granite, and premium fixtures. Every material
                      is sourced from trusted suppliers ensuring lasting beauty and durability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Flexible Scheduling</h3>
                    <p className="text-slate-600">
                      We offer evenings and weekend scheduling to fit your lifestyle. Professional project management
                      ensures timely completion without compromising quality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">5-Year Warranty & Fully Insured</h3>
                    <p className="text-slate-600">
                      All work backed by comprehensive 5-year warranty. Licensed and insured with R2 million public
                      liability coverage for your complete peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Service Areas Around Bedfordview</h2>
            <p className="text-xl text-slate-600 mb-12">
              We serve Bedfordview and all surrounding East Rand areas including Edenvale, Epsom Downs, Lethabong,
              Germiston, Kempton Park, and Alberton. Call us for service availability in your specific area.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Bedfordview</h3>
                <p className="text-sm text-slate-600">Main Hub</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Edenvale</h3>
                <p className="text-sm text-slate-600">Close by</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Epsom Downs</h3>
                <p className="text-sm text-slate-600">Residential</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Lethabong</h3>
                <p className="text-sm text-slate-600">Nearby</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Germiston</h3>
                <p className="text-sm text-slate-600">East Rand</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Kempton Park</h3>
                <p className="text-sm text-slate-600">Airport Area</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Alberton</h3>
                <p className="text-sm text-slate-600">South Rand</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Brakpan</h3>
                <p className="text-sm text-slate-600">East Rand</p>
              </div>
            </div>
            <div className="mt-12 p-6 bg-amber-50 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Also Serving Nearby Areas:</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/areas/fourways" className="text-amber-600 hover:text-amber-700 font-medium">
                  Fourways
                </Link>
                <span className="text-slate-400">•</span>
                <Link href="/areas/sandton" className="text-amber-600 hover:text-amber-700 font-medium">
                  Sandton
                </Link>
                <span className="text-slate-400">•</span>
                <Link href="/areas/randburg" className="text-amber-600 hover:text-amber-700 font-medium">
                  Randburg
                </Link>
                <span className="text-slate-400">•</span>
                <Link href="/areas/midrand" className="text-amber-600 hover:text-amber-700 font-medium">
                  Midrand
                </Link>
                <span className="text-slate-400">•</span>
                <Link href="/areas/centurion" className="text-amber-600 hover:text-amber-700 font-medium">
                  Centurion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Bedfordview Customer Reviews</h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-xl font-semibold text-slate-800">5.0 out of 5 stars</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Fantastic kitchen renovation in Bedfordview. The team was professional, on-time, and the quality is
                  outstanding. Caesarstone countertops look incredible!"
                </p>
                <div className="font-semibold text-slate-800">John & Lisa T.</div>
                <div className="text-sm text-slate-600">Bedfordview, Johannesburg</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Excellent emergency plumbing service at 2am. The plumber was knowledgeable and fixed the burst pipe
                  quickly. Highly recommend for Edenvale residents!"
                </p>
                <div className="font-semibold text-slate-800">Michael W.</div>
                <div className="text-sm text-slate-600">Edenvale, East Rand</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Built-in wardrobes and storage solutions transformed our Bedfordview home. Perfect craftsmanship,
                  premium materials, and exactly on budget. Truly exceptional work!"
                </p>
                <div className="font-semibold text-slate-800">Sarah M.</div>
                <div className="text-sm text-slate-600">Bedfordview</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">
              FAQs - Carpenter & Plumber Bedfordview
            </h2>
            <p className="text-center text-slate-600 mb-12">
              Got questions about our carpentry and plumbing services in Bedfordview? Here are answers to commonly asked
              questions.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-lg overflow-hidden hover:border-amber-400 transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-slate-800 text-left">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-600 transition-transform flex-shrink-0 ml-4 ${
                        expandedFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-6 py-4 bg-white border-t border-slate-200">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Bedfordview Project in 2025?</h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Contact Bedfordview's #1 carpenter & plumber today. Premium materials, exceptional craftsmanship, and
            5-year warranty. FREE consultation and detailed quotes for all services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-amber-700 hover:bg-slate-100 text-lg px-8"
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <a
              href="tel:+27676014490"
              className="flex items-center gap-2 text-lg hover:text-amber-200 transition-colors"
            >
              <Phone className="w-5 h-5" />
              067 601 4490 - Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
