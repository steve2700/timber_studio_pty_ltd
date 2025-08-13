import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

// This would typically come from a CMS or database
const blogPosts = {
  "kitchen-renovation-trends-2024-johannesburg": {
    title: "10 Kitchen Renovation Trends for 2024 in Johannesburg",
    excerpt: "Discover the latest kitchen design trends that are transforming homes across Johannesburg and Gauteng.",
    content: `
      <h2>The Evolution of Kitchen Design in Johannesburg</h2>
      <p>Kitchen renovations in Johannesburg are embracing both functionality and style in 2024. As South Africa's economic hub, Johannesburg homeowners are investing in kitchen upgrades that reflect modern living while maintaining practical appeal.</p>
      
      <h3>1. Granite and Quartz Countertops</h3>
      <p>Natural stone countertops continue to dominate Johannesburg kitchens. Granite remains popular for its durability and unique patterns, while quartz offers consistent coloring and low maintenance. Both materials withstand South Africa's climate variations excellently.</p>
      
      <h3>2. Built-in Storage Solutions</h3>
      <p>Custom built-in cupboards are maximizing space in Johannesburg homes. From floor-to-ceiling pantries to corner storage solutions, built-ins are essential for modern kitchen functionality.</p>
      
      <h3>3. Open Plan Layouts</h3>
      <p>Open plan kitchen designs are perfect for South African entertaining culture. These layouts create seamless flow between kitchen, dining, and living areas.</p>
      
      <h3>4. Smart Kitchen Technology</h3>
      <p>Smart appliances and automated systems are becoming standard in upmarket Johannesburg renovations, offering convenience and energy efficiency.</p>
      
      <h3>5. Sustainable Materials</h3>
      <p>Eco-friendly materials and energy-efficient appliances align with South Africa's growing environmental consciousness.</p>
      
      <h2>Professional Installation Matters</h2>
      <p>These trends require expert installation to achieve the desired results. Our team specializes in kitchen renovations across Johannesburg, ensuring quality craftsmanship and attention to detail.</p>
      
      <p>Ready to transform your kitchen? Contact us for a free consultation and quote.</p>
    `,
    image: "/modern-kitchen renovation.webp",
    category: "Kitchen Renovations",
    author: "Granite & Carpentry Team",
    date: "2024-01-15",
    readTime: "5 min read",
  },
  "granite-vs-quartz-kitchen-countertops": {
    title: "Granite vs Quartz: Which is Best for Your Kitchen?",
    excerpt: "A comprehensive comparison of granite and quartz countertops for South African homes.",
    content: `
      <h2>The Great Countertop Debate: Granite vs Quartz</h2>
      <p>Choosing between granite and quartz countertops is one of the most important decisions in kitchen renovation. Both materials offer unique advantages for Johannesburg homeowners.</p>
      
      <h3>Granite Countertops</h3>
      <h4>Advantages:</h4>
      <ul>
        <li>Natural beauty with unique patterns</li>
        <li>Heat resistant - perfect for South African cooking</li>
        <li>Adds value to your property</li>
        <li>Available locally in South Africa</li>
      </ul>
      
      <h4>Considerations:</h4>
      <ul>
        <li>Requires periodic sealing</li>
        <li>Natural variations in pattern</li>
        <li>Can chip if impacted heavily</li>
      </ul>
      
      <h3>Quartz Countertops</h3>
      <h4>Advantages:</h4>
      <ul>
        <li>Non-porous surface - no sealing required</li>
        <li>Consistent patterns and colors</li>
        <li>Extremely durable and scratch-resistant</li>
        <li>Low maintenance</li>
      </ul>
      
      <h4>Considerations:</h4>
      <ul>
        <li>Can be damaged by extreme heat</li>
        <li>Higher upfront cost</li>
        <li>Limited repair options if damaged</li>
      </ul>
      
      <h2>Cost Comparison in South Africa</h2>
      <p>Granite typically costs R800-R1500 per square meter installed, while quartz ranges from R1200-R2000 per square meter. Prices vary based on quality, thickness, and complexity of installation.</p>
      
      <h2>Our Recommendation</h2>
      <p>Both materials are excellent choices. Granite suits homeowners who appreciate natural beauty and don't mind occasional maintenance. Quartz is ideal for busy families wanting low-maintenance luxury.</p>
      
      <p>Contact our stone specialists for personalized recommendations based on your lifestyle and budget.</p>
    `,
    image: "/granite-countertop.jpg",
    category: "Granite & Quartz",
    author: "Stone Installation Expert",
    date: "2024-01-10",
    readTime: "7 min read",
  },
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Granite & Carpentry Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  }
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="outline" className="bg-transparent">
            <Link href="/blog">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            {post.category}
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          <Button variant="outline" size="sm" className="bg-transparent">
            <Share2 className="w-4 h-4 mr-2" />
            Share Article
          </Button>
        </div>

        {/* Featured Image */}
        <div className="relative h-64 sm:h-80 lg:h-96 mb-8 rounded-lg overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        {/* Article Content */}
        <Card>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-600 mb-6">
                Get expert advice and a free quote for your carpentry or granite installation project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent">
                  <Link href="tel:+27676014490">Call: 067 601 4490</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
