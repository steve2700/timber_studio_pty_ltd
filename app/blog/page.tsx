import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Carpentry & Granite Blog | Expert Tips & Project Ideas | Johannesburg",
  description:
    "Expert carpentry and granite installation tips, project ideas, and industry insights from Johannesburg's leading specialists. Learn about kitchen renovations, built-in cupboards, and stone installations.",
  keywords: [
    "carpentry blog Johannesburg",
    "granite installation tips",
    "kitchen renovation ideas",
    "built-in cupboard designs",
    "carpentry tutorials",
    "home improvement blog South Africa",
  ],
  openGraph: {
    title: "Carpentry & Granite Blog | Expert Tips & Project Ideas",
    description:
      "Expert carpentry and granite installation tips, project ideas, and industry insights from Johannesburg's leading specialists.",
    url: "https://granitecarpentry.co.za/blog",
    siteName: "Granite & Carpentry Johannesburg",
    type: "website",
  },
}

const blogPosts = [
  {
    id: 1,
    title: "10 Kitchen Renovation Trends for 2024 in Johannesburg",
    excerpt:
      "Discover the latest kitchen design trends that are transforming homes across Johannesburg and Gauteng. From granite countertops to smart storage solutions.",
    image: "/modern-kitchen renovation.webp",
    category: "Kitchen Renovations",
    author: "Granite & Carpentry Team",
    date: "2024-01-15",
    readTime: "5 min read",
    slug: "kitchen-renovation-trends-2024-johannesburg",
  },
  {
    id: 2,
    title: "Granite vs Quartz: Which is Best for Your Kitchen?",
    excerpt:
      "A comprehensive comparison of granite and quartz countertops, including pros, cons, costs, and maintenance requirements for South African homes.",
    image: "/granite-countertop.jpg",
    category: "Granite & Quartz",
    author: "Stone Installation Expert",
    date: "2024-01-10",
    readTime: "7 min read",
    slug: "granite-vs-quartz-kitchen-countertops",
  },
  {
    id: 3,
    title: "Maximizing Small Spaces with Built-in Cupboards",
    excerpt:
      "Learn how custom built-in cupboards can transform small bedrooms and living spaces in Johannesburg apartments and homes.",
    image: "/built-in-wardrobes-sliding (1) (1).webp",
    category: "Built-in Cupboards",
    author: "Custom Carpentry Specialist",
    date: "2024-01-05",
    readTime: "6 min read",
    slug: "maximizing-small-spaces-built-in-cupboards",
  },
  {
    id: 4,
    title: "The Complete Guide to Outdoor Decking in South Africa",
    excerpt:
      "Everything you need to know about choosing, installing, and maintaining outdoor decking in South Africa's climate.",
    image: "/beautiful-decking.jpg",
    category: "Decking & Flooring",
    author: "Outdoor Specialist",
    date: "2023-12-28",
    readTime: "8 min read",
    slug: "complete-guide-outdoor-decking-south-africa",
  },
  {
    id: 5,
    title: "Drywall Installation: Professional Tips for Perfect Results",
    excerpt:
      "Professional techniques and tips for drywall installation that ensure smooth, durable walls in your home renovation project.",
    image: "/drywall-contractor.jpg",
    category: "Drywall & Ceilings",
    author: "Construction Expert",
    date: "2023-12-20",
    readTime: "9 min read",
    slug: "drywall-installation-professional-tips",
  },
  {
    id: 6,
    title: "Starting Your Carpentry Career: Training and Opportunities",
    excerpt:
      "A guide to carpentry training programs, certification requirements, and career opportunities in South Africa's construction industry.",
    image: "/quality_woodworking_education_in_south_africa-1.jpg",
    category: "Carpentry Training",
    author: "Training Coordinator",
    date: "2023-12-15",
    readTime: "10 min read",
    slug: "starting-carpentry-career-training-opportunities",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Carpentry & Granite Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert tips, project ideas, and industry insights from Johannesburg's leading carpentry and granite
            specialists
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  Featured Post
                </Badge>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Button asChild className="w-fit bg-amber-600 hover:bg-amber-700">
                  <Link href={`/blog/${blogPosts[0].slug}`}>
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated with Our Latest Tips</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get expert carpentry and granite installation tips, project ideas, and exclusive offers delivered to
                your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <Button className="bg-amber-600 hover:bg-amber-700">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
