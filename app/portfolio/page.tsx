import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Star, Award, Users, CheckCircle, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "★★★★★ Portfolio | Best Carpenter Johannesburg 2026 - 1000+ Completed Projects Gallery",
  description:
    "★★★★★ View our portfolio of 1000+ completed carpentry projects in Johannesburg. Kitchen renovations, built-in cupboards, granite installations across Gauteng. #1 rated carpenter with 5-year warranty. FREE quotes.",
  keywords:
    "carpentry portfolio Johannesburg, best carpenter portfolio 2026, kitchen renovation gallery Johannesburg, built-in cupboards portfolio, granite installation gallery, carpenter work examples Johannesburg, #1 carpenter portfolio, professional carpentry gallery, Johannesburg carpenter projects, kitchen makeover gallery",
  openGraph: {
    title: "★★★★★ Portfolio | Best Carpenter Johannesburg 2026 - 1000+ Projects",
    description:
      "★★★★★ View our portfolio of 1000+ completed carpentry projects. Kitchen renovations, built-in cupboards, granite installations. #1 rated carpenter Johannesburg.",
    url: "https://granitecarpentry.co.za/portfolio",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/portfolio",
  },
}

export default function PortfolioPage() {
  const projects = [
    {
      title: "Luxury Kitchen Renovation - Sandton",
      category: "Kitchen Renovation",
      location: "Sandton",
      price: "R85,000",
      description: "Complete luxury kitchen makeover with premium Caesarstone countertops and custom cabinetry",
      image: "/modern-kitchen renovation.webp?height=400&width=600",
      features: ["Caesarstone Countertops", "Custom Cabinetry", "Kitchen Island", "Premium Finishes"],
    },
    {
      title: "Walk-in Wardrobe - Fourways",
      category: "Built-in Storage",
      location: "Fourways",
      price: "R45,000",
      description: "Custom walk-in wardrobe with sliding doors and internal organization system",
      image: "/built-in-wardrobes-sliding (1) (1).webp?height=400&width=600",
      features: ["Sliding Doors", "Internal Organization", "LED Lighting", "Premium Hardware"],
    },
    {
      title: "Granite Kitchen Island - Pretoria",
      category: "Stone Installation",
      location: "Pretoria",
      price: "R35,000",
      description: "Premium granite island with waterfall edge and integrated breakfast bar seating",
      image: "/granitecarpentry.webp?height=400&width=600",
      features: ["Waterfall Edge", "Breakfast Bar", "Premium Granite", "Professional Installation"],
    },
    {
      title: "Executive Study Built-ins - Centurion",
      category: "Built-in Storage",
      location: "Centurion",
      price: "R28,000",
      description: "Floor-to-ceiling executive study with integrated desk and premium shelving",
      image: "/built-in-study-1 (1).webp?height=400&width=600",
      features: ["Floor-to-ceiling", "Integrated Desk", "Premium Shelving", "Cable Management"],
    },
    {
      title: "Luxury Bathroom Vanity - Midrand",
      category: "Stone Installation",
      location: "Midrand",
      price: "R18,500",
      description: "Elegant quartz vanity top with undermount basins and premium finishes",
      image: "/bathroom-vanity (1).webp?height=400&width=600",
      features: ["Quartz Surface", "Undermount Basins", "Premium Taps", "Custom Design"],
    },
    {
      title: "Entertainment Center - Kempton Park",
      category: "Built-in Storage",
      location: "Kempton Park",
      price: "R22,000",
      description: "Custom entertainment center with hidden cable management and LED lighting",
      image: "/entertainment unit.jpg?height=400&width=600",
      features: ["Hidden Cables", "LED Lighting", "Custom Design", "Premium Finishes"],
    },
  ]

  const stats = [
    { number: "1000+", label: "Completed Projects", icon: Award },
    { number: "★★★★★", label: "5.0 Star Rating", icon: Star },
    { number: "5 Year", label: "Warranty Guarantee", icon: CheckCircle },
    { number: "15+", label: "Areas Served", icon: MapPin },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-amber-600/20 text-amber-200 border-amber-400/30">
                ★★★★★ #1 Rated Carpenter Johannesburg
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-amber-400">Portfolio</span> of Excellence
              <span className="block text-2xl md:text-3xl mt-4 text-slate-200">1000+ Completed Projects</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
              Explore our completed projects across Johannesburg and Gauteng. From luxury kitchen renovations to custom
              built-ins and premium stone installations. ★★★★★ rated with 5-year warranty on all work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <a
                href="tel:+27676014490"
                className="flex items-center gap-2 text-lg hover:text-amber-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                067 601 4490
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm">
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
                <span>1000+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-amber-400" />
                <span>5-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Projects Gallery</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Browse our portfolio of completed carpentry and stone installation projects across Johannesburg and
              Gauteng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-amber-600 text-white">{project.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-slate-800">
                      {project.price}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className="bg-white/90 text-slate-800 border-slate-300">
                      <MapPin className="w-3 h-3 mr-1" />
                      {project.location}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="space-y-2 mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Similar Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">From Concept to Completion</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every project in our portfolio represents our commitment to quality craftsmanship and customer
              satisfaction. Here's our proven process:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">FREE Consultation</h3>
              <p className="text-slate-600">Initial consultation and detailed quote at no cost</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Custom Design</h3>
              <p className="text-slate-600">Tailored design solutions to match your vision</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Professional Installation</h3>
              <p className="text-slate-600">Expert craftsmanship with premium materials</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">5-Year Warranty</h3>
              <p className="text-slate-600">Complete satisfaction guaranteed with warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Areas We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our portfolio spans across Johannesburg and Gauteng, serving both residential and commercial clients
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {[
              "Sandton",
              "Fourways",
              "Pretoria",
              "Centurion",
              "Midrand",
              "Kempton Park",
              "Johannesburg South",
              "Edenvale",
              "Boksburg",
              "Alberton",
              "Randburg",
              "Roodepoort",
              "Benoni",
              "Germiston",
              "Bedfordview",
            ].map((area) => (
              <Card key={area} className="hover:shadow-lg transition-shadow hover:bg-amber-50">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-slate-800">{area}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Customers Say</h2>
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
                  "Outstanding kitchen renovation in Sandton. The team exceeded our expectations with premium materials
                  and flawless execution. Best carpenter in Johannesburg!"
                </p>
                <div className="font-semibold text-slate-800">David & Sarah M.</div>
                <div className="text-sm text-slate-600">Sandton, Johannesburg</div>
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
                  "Professional service from start to finish. Built-in wardrobes are absolutely perfect. Quality
                  workmanship and attention to detail is exceptional."
                </p>
                <div className="font-semibold text-slate-800">Jennifer K.</div>
                <div className="text-sm text-slate-600">Fourways, Johannesburg</div>
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
                  "Excellent granite installation and fair pricing. The team was professional, punctual, and delivered
                  exactly what was promised. Highly recommend!"
                </p>
                <div className="font-semibold text-slate-800">Michael T.</div>
                <div className="text-sm text-slate-600">Pretoria, Gauteng</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Create Your Dream Space?</h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Join our portfolio of 1000+ satisfied customers. Contact us today for a FREE consultation and quote for your
            carpentry or stone installation project. ★★★★★ rated with 5-year warranty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-amber-700 hover:bg-slate-100 text-lg px-8"
            >
              <Link href="/contact">Get Your FREE Quote</Link>
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
