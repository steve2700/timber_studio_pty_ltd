import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Phone, Mail } from "lucide-react"

// Mock blog data - same as in blog page
const blogPosts = [
  {
    slug: "kitchen-renovation-guide-2024",
    title: "Complete Kitchen Renovation Guide 2024: From Planning to Completion",
    excerpt:
      "Everything you need to know about renovating your kitchen in 2024, including costs, timelines, and design trends.",
    content: `
# Complete Kitchen Renovation Guide 2024: From Planning to Completion

Planning a kitchen renovation can be overwhelming, but with the right guidance, you can create the kitchen of your dreams. Here's our comprehensive guide based on over 200 successful kitchen renovations in Johannesburg.

## Planning Your Kitchen Renovation

### 1. Set Your Budget
- **Basic Renovation**: R50,000 - R80,000
- **Mid-Range Renovation**: R80,000 - R150,000
- **High-End Renovation**: R150,000+

### 2. Design Considerations
- **Layout**: Consider the kitchen work triangle
- **Storage**: Maximize cabinet and pantry space
- **Lighting**: Combine task, ambient, and accent lighting
- **Materials**: Choose durable, easy-to-maintain surfaces

## Popular Kitchen Trends 2024

### Modern Minimalism
Clean lines, handleless cabinets, and neutral color palettes continue to dominate kitchen design.

### Natural Materials
Wood grain finishes and natural stone countertops bring warmth and texture to modern kitchens.

### Smart Storage Solutions
Pull-out drawers, corner solutions, and vertical storage maximize every inch of space.

## Timeline and Process

### Week 1-2: Planning and Design
- Initial consultation and measurements
- Design development and material selection
- Permit applications (if required)

### Week 3-4: Preparation
- Order materials and appliances
- Prepare workspace and protect surrounding areas
- Begin demolition work

### Week 5-8: Installation
- Plumbing and electrical rough-in
- Drywall and painting
- Cabinet installation
- Countertop templating and installation
- Final fixtures and appliances

## Cost Breakdown

- **Cabinets**: 35-40% of budget
- **Labor**: 20-25% of budget
- **Appliances**: 15-20% of budget
- **Countertops**: 10-15% of budget
- **Flooring**: 7-10% of budget
- **Lighting/Electrical**: 5% of budget

## Why Choose Professional Installation

While DIY might seem cost-effective, professional installation ensures:
- Proper measurements and fit
- Code compliance
- Warranty coverage
- Time efficiency
- Quality craftsmanship

## Get Started Today

Ready to transform your kitchen? Contact Granite Carpentry for a free consultation and quote. We'll help you create a kitchen that's both beautiful and functional.

**Call us at 067 601 4490** or email **info@granitecarpentry.co.za** to get started.
    `,
    image: "/Kitchen-renovations-sandton.webp",
    category: "Kitchen Renovations",
    author: "Granite Carpentry Team",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    featured: true,
  },
  // ... other blog posts would be here
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Granite Carpentry Blog`,
    description: post.excerpt,
    keywords: `${post.category.toLowerCase()}, carpentry tips, home improvement, Johannesburg carpenter`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630 }],
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
            <Badge className="bg-amber-600 text-white px-4 py-2 mb-6">{post.category}</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-6 text-slate-300">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="relative mb-12 rounded-2xl overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-96 object-cover"
                  />
                </div>

                <div className="prose prose-lg max-w-none">
                  <div
                    className="text-slate-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: post.content
                        .split("\n")
                        .map((line) => {
                          if (line.startsWith("# ")) {
                            return `<h1 class="text-3xl font-bold text-slate-900 mt-12 mb-6">${line.substring(2)}</h1>`
                          } else if (line.startsWith("## ")) {
                            return `<h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">${line.substring(3)}</h2>`
                          } else if (line.startsWith("### ")) {
                            return `<h3 class="text-xl font-semibold text-slate-900 mt-8 mb-3">${line.substring(4)}</h3>`
                          } else if (line.startsWith("- **")) {
                            const match = line.match(/- \*\*(.*?)\*\*: (.*)/)
                            if (match) {
                              return `<li class="mb-2"><strong class="text-slate-900">${match[1]}</strong>: ${match[2]}</li>`
                            }
                            return `<li class="mb-2">${line.substring(2)}</li>`
                          } else if (line.startsWith("- ")) {
                            return `<li class="mb-2">${line.substring(2)}</li>`
                          } else if (line.startsWith("**") && line.endsWith("**")) {
                            return `<p class="font-semibold text-slate-900 mt-6 mb-3">${line.slice(2, -2)}</p>`
                          } else if (line.trim() === "") {
                            return "<br>"
                          } else {
                            return `<p class="mb-4">${line}</p>`
                          }
                        })
                        .join(""),
                    }}
                  />
                </div>

                {/* CTA Section */}
                <div className="mt-16 p-8 bg-amber-50 rounded-2xl border border-amber-200">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Start Your Project?</h3>
                    <p className="text-slate-600 mb-6">
                      Get professional advice and a free quote for your carpentry project from Johannesburg's #1 rated
                      team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                        <Link href="tel:+27676014490">
                          <Phone className="mr-2 h-5 w-5" />
                          Call 067 601 4490
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="hover:bg-amber-50 bg-transparent">
                        <Link href="mailto:info@granitecarpentry.co.za">
                          <Mail className="mr-2 h-5 w-5" />
                          Email Us
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  {/* Author Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">About the Author</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{post.author}</p>
                          <p className="text-sm text-slate-600">Professional Carpenters</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600">
                        Expert carpenters with over 200 successful projects in Johannesburg. Specializing in kitchen
                        renovations, built-in cupboards, and granite installations.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Quick Contact */}
                  <Card className="bg-amber-50 border-amber-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-amber-800">Need Expert Help?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-amber-700 mb-4">
                        Get professional advice for your specific project requirements.
                      </p>
                      <div className="space-y-3">
                        <Button asChild size="sm" className="w-full bg-amber-600 hover:bg-amber-700">
                          <Link href="/contact">Get Free Quote</Link>
                        </Button>
                        <div className="text-center">
                          <p className="text-sm text-amber-700">
                            <Phone className="inline h-4 w-4 mr-1" />
                            067 601 4490
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Table of Contents */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">In This Article</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <nav className="space-y-2">
                        <a href="#planning" className="block text-sm text-slate-600 hover:text-amber-600">
                          Planning Your Renovation
                        </a>
                        <a href="#trends" className="block text-sm text-slate-600 hover:text-amber-600">
                          2024 Design Trends
                        </a>
                        <a href="#timeline" className="block text-sm text-slate-600 hover:text-amber-600">
                          Timeline & Process
                        </a>
                        <a href="#costs" className="block text-sm text-slate-600 hover:text-amber-600">
                          Cost Breakdown
                        </a>
                        <a href="#professional" className="block text-sm text-slate-600 hover:text-amber-600">
                          Professional Installation
                        </a>
                      </nav>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Related Articles</h2>
                <p className="text-slate-600">More expert insights in {post.category}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slug} className="group hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-amber-600 text-white">{relatedPost.category}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-amber-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">{relatedPost.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                        <span>{relatedPost.readTime}</span>
                        <span>{new Date(relatedPost.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <Button asChild variant="outline" className="w-full hover:bg-amber-50 bg-transparent">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get More Expert Tips</h2>
          <p className="text-xl mb-6 opacity-90">
            Subscribe to our newsletter for monthly carpentry tips and project guides.
          </p>
          <Button variant="secondary" className="bg-white text-amber-600 hover:bg-slate-100">
            Subscribe Now
          </Button>
        </div>
      </section>
    </div>
  )
}
