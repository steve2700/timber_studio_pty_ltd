import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio | Granite & Joinery Experts Johannesburg - Our Work Gallery",
  description:
    "View our portfolio of completed carpentry and granite installation projects in Johannesburg. Kitchen renovations, built-in cupboards, and stone installations across Gauteng.",
  keywords:
    "carpentry portfolio Johannesburg, granite installation gallery, kitchen renovation examples, built-in cupboards portfolio, Johannesburg carpenter work",
}

export default function PortfolioPage() {
  const projects = [
    {
      title: "Modern Kitchen Renovation - Randburg",
      category: "Kitchen Renovation",
      description: "Complete kitchen makeover with custom cabinetry and quartz countertops",
      image: "/modern-kitchen renovation.webp?height=400&width=600",
    },
    {
      title: "Built-in Wardrobes - Johannesburg South",
      category: "Built-in Storage",
      description: "Custom bedroom wardrobes with sliding doors and internal organization",
      image: "/built-in-wardrobes-sliding (1) (1).webp?height=400&width=600",
    },
    {
      title: "Granite Kitchen Island - Kempton Park",
      category: "Stone Installation",
      description: "Premium granite island with waterfall edge and integrated seating",
      image: "/granite-kitchen-island.webp?height=400&width=600",
    },
    {
      title: "Study Built-ins - Roodepoort",
      category: "Built-in Storage",
      description: "Floor-to-ceiling study storage with integrated desk and shelving",
      image: "/built-in-study-1 (1).webp?height=400&width=600",
    },
    {
      title: "Bathroom Vanity - Sandton",
      category: "Stone Installation",
      description: "Elegant quartz vanity top with undermount basins",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Entertainment Unit - Johannesburg",
      category: "Built-in Storage",
      description: "Custom entertainment center with hidden cable management",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Our <span className="text-amber-600">Portfolio</span> of Excellence
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Explore our completed projects across Johannesburg and Gauteng. From kitchen renovations to custom
              built-ins and stone installations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <a href="tel:+27676014490">
                  <Phone className="mr-2 w-5 h-5" />
                  Discuss Your Ideas
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="text-lg px-8 border-amber-600 text-amber-600 hover:bg-amber-50"
              >
                <a href="https://g.co/kgs/epZT5BY" target="_blank" rel="noopener noreferrer">
                  <Star className="mr-2 w-5 h-5 fill-current" />
                  See Our Reviews
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">From Concept to Completion</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every project in our portfolio represents our commitment to quality craftsmanship and customer
              satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                47+
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Completed Projects</h3>
              <p className="text-slate-600">Successfully delivered across Johannesburg and Gauteng</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                5★
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Customer Rating</h3>
              <p className="text-slate-600">Consistently rated 5 stars by satisfied customers</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                100%
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Quality Guarantee</h3>
              <p className="text-slate-600">Every project backed by our quality guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Create Your Dream Space?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our portfolio of satisfied customers. Contact us today for a free consultation and quote for your
            carpentry or stone installation project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-amber-600 hover:bg-slate-50 text-lg px-8">
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8"
            >
              <a href="tel:+27-11-XXX-XXXX">
                <Phone className="mr-2 w-5 h-5" />
                Call: 011-XXX-XXXX
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
