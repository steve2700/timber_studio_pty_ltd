import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "★★★★★ Carpentry Blog | Expert Tips & Guides 2024 | Granite Carpentry",
  description:
    "Professional carpentry tips, kitchen renovation guides, built-in cupboard ideas, and expert advice from Johannesburg's #1 rated carpenters. Free guides & tutorials.",
  keywords:
    "carpentry blog, kitchen renovation tips, built-in cupboard ideas, carpentry guides, woodworking tips, home improvement blog, carpenter advice johannesburg",
  openGraph: {
    title: "★★★★★ Carpentry Blog | Expert Tips & Guides 2024",
    description: "Professional carpentry tips and guides from Johannesburg's top-rated carpenters",
    images: ["/granite-carpentry.webp"],
  },
}

// Mock blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Kitchen Renovations in Johannesburg 2024",
    description:
      "Everything you need to know about planning and executing a successful kitchen renovation, from design to installation.",
    image: "/Kitchen-renovations-sandton.webp",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Kitchen Renovations",
    slug: "complete-guide-kitchen-renovations-johannesburg-2024",
    featured: true,
  },
  {
    id: 2,
    title: "Built-in Cupboards vs Freestanding: Which is Better?",
    description:
      "Compare the pros and cons of built-in cupboards versus freestanding furniture for your home storage solutions.",
    image: "/built-in-wardrobes-sliding (1) (1).webp",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Built-in Cupboards",
    slug: "built-in-cupboards-vs-freestanding-which-is-better",
    featured: true,
  },
  {
    id: 3,
    title: "Granite vs Quartz Countertops: The Ultimate Comparison",
    description:
      "Detailed comparison of granite and quartz countertops including durability, maintenance, cost, and aesthetic appeal.",
    image: "/granite-countertop.jpg",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Stone Work",
    slug: "granite-vs-quartz-countertops-ultimate-comparison",
    featured: false,
  },
  {
    id: 4,
    title: "Decking Installation: Wood vs Composite Materials",
    description:
      "Learn about different decking materials, installation processes, and maintenance requirements for outdoor spaces.",
    image: "/beautiful-decking.jpg",
    date: "2023-12-28",
    readTime: "5 min read",
    category: "Decking & Flooring",
    slug: "decking-installation-wood-vs-composite-materials",
    featured: false,
  },
  {
    id: 5,
    title: "Drywall Installation: Professional Tips and Techniques",
    description:
      "Master the art of drywall installation with professional techniques, tools, and troubleshooting tips.",
    image: "/drywall-contractor.jpg",
    date: "2023-12-20",
    readTime: "9 min read",
    category: "Drywall & Ceilings",
    slug: "drywall-installation-professional-tips-techniques",
    featured: false,
  },
  {
    id: 6,
    title: "Home Office Built-in Solutions for Remote Work",
    description: "Create the perfect home office with custom built-in desks, storage, and organizational solutions.",
    image: "/built-in-study-1 (1).webp",
    date: "2023-12-15",
    readTime: "6 min read",
    category: "Built-in Cupboards",
    slug: "home-office-built-in-solutions-remote-work",
    featured: false,
  },
]

const categories = [
  "All",
  "Kitchen Renovations",
  "Built-in Cupboards",
  "Stone Work",
  "Decking & Flooring",
  "Drywall & Ceilings",
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">★★★★★ Carpentry Blog & Expert Guides</h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100">
              Professional tips, tutorials, and insights from Johannesburg's #1 rated carpenters
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  1000+ Projects Completed
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  15+ Years Experience
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Expert Advice
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-amber-600">Featured</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/blog/${post.slug}`}>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">All Articles</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-amber-600 hover:bg-amber-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full hover:bg-amber-50 hover:border-amber-600 bg-transparent"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Expert Tips</h2>
          <p className="text-xl mb-8 text-amber-100">
            Get the latest carpentry tips, project ideas, and exclusive guides delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-lg text-gray-900" />
            <Button className="bg-white text-amber-600 hover:bg-gray-100">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">Get expert advice and a free quote for your carpentry project</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Get Free Quote
              </Button>
            </Link>
            <Link href="tel:0676014490">
              <Button size="lg" variant="outline">
                Call: 067 601 4490
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
