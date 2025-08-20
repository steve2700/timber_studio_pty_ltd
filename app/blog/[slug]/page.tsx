import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock blog post data - in a real app, this would come from a CMS or database
const blogPosts = {
  "complete-guide-kitchen-renovations-johannesburg-2024": {
    title: "Complete Guide to Kitchen Renovations in Johannesburg 2024",
    description:
      "Everything you need to know about planning and executing a successful kitchen renovation, from design to installation.",
    image: "/Kitchen-renovations-sandton.webp",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Kitchen Renovations",
    author: "Granite Carpentry Team",
    content: `
      <h2>Planning Your Kitchen Renovation</h2>
      <p>A successful kitchen renovation starts with proper planning. Here's what you need to consider:</p>
      
      <h3>1. Budget Planning</h3>
      <p>Kitchen renovations in Johannesburg typically range from R50,000 to R200,000+ depending on the scope:</p>
      <ul>
        <li><strong>Basic Renovation:</strong> R50,000 - R80,000</li>
        <li><strong>Mid-Range Renovation:</strong> R80,000 - R150,000</li>
        <li><strong>Luxury Renovation:</strong> R150,000+</li>
      </ul>

      <h3>2. Design Considerations</h3>
      <p>Modern kitchen design focuses on functionality and aesthetics. Consider:</p>
      <ul>
        <li>Work triangle efficiency (sink, stove, refrigerator)</li>
        <li>Storage optimization with built-in cupboards</li>
        <li>Lighting design for task and ambient lighting</li>
        <li>Material selection for durability and style</li>
      </ul>

      <h3>3. Timeline and Process</h3>
      <p>A typical kitchen renovation takes 4-8 weeks:</p>
      <ul>
        <li><strong>Week 1-2:</strong> Demolition and structural work</li>
        <li><strong>Week 3-4:</strong> Plumbing and electrical installation</li>
        <li><strong>Week 5-6:</strong> Cupboard installation and countertops</li>
        <li><strong>Week 7-8:</strong> Finishing touches and cleanup</li>
      </ul>

      <h2>Choosing the Right Materials</h2>
      <p>Material selection is crucial for both aesthetics and longevity:</p>

      <h3>Countertops</h3>
      <ul>
        <li><strong>Granite:</strong> Durable, heat-resistant, unique patterns</li>
        <li><strong>Quartz:</strong> Non-porous, consistent patterns, low maintenance</li>
        <li><strong>Marble:</strong> Luxurious appearance, requires more maintenance</li>
      </ul>

      <h3>Cupboards</h3>
      <ul>
        <li><strong>Solid Wood:</strong> Traditional, durable, can be refinished</li>
        <li><strong>MDF with Veneer:</strong> Cost-effective, smooth finish</li>
        <li><strong>Melamine:</strong> Budget-friendly, easy to clean</li>
      </ul>

      <h2>Working with Professionals</h2>
      <p>Hiring experienced professionals ensures quality results and saves time. Look for:</p>
      <ul>
        <li>Licensed and insured contractors</li>
        <li>Portfolio of completed projects</li>
        <li>Positive customer reviews</li>
        <li>Detailed written quotes</li>
        <li>Clear timeline and communication</li>
      </ul>

      <h2>Conclusion</h2>
      <p>A well-planned kitchen renovation can transform your home and add significant value. Take time to plan properly, choose quality materials, and work with experienced professionals for the best results.</p>
    `,
  },
  "built-in-cupboards-vs-freestanding-which-is-better": {
    title: "Built-in Cupboards vs Freestanding: Which is Better?",
    description:
      "Compare the pros and cons of built-in cupboards versus freestanding furniture for your home storage solutions.",
    image: "/built-in-wardrobes-sliding (1) (1).webp",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Built-in Cupboards",
    author: "Granite Carpentry Team",
    content: `
      <h2>The Great Storage Debate</h2>
      <p>When it comes to home storage solutions, homeowners often face the choice between built-in cupboards and freestanding furniture. Each option has its advantages and considerations.</p>

      <h2>Built-in Cupboards: The Pros</h2>
      <h3>1. Space Optimization</h3>
      <p>Built-in cupboards maximize every inch of available space, including awkward corners and areas under stairs that freestanding furniture can't utilize effectively.</p>

      <h3>2. Custom Design</h3>
      <p>Tailored to your specific needs and room dimensions, built-in cupboards can accommodate your exact storage requirements and aesthetic preferences.</p>

      <h3>3. Increased Property Value</h3>
      <p>Quality built-in storage solutions add significant value to your property and are attractive to potential buyers.</p>

      <h3>4. Seamless Integration</h3>
      <p>Built-in cupboards create a cohesive look that integrates perfectly with your room's architecture and design.</p>

      <h2>Built-in Cupboards: The Cons</h2>
      <h3>1. Higher Initial Cost</h3>
      <p>Custom built-in cupboards typically require a larger upfront investment compared to ready-made furniture.</p>

      <h3>2. Permanent Installation</h3>
      <p>Once installed, built-in cupboards cannot be moved if you relocate or want to redesign your space.</p>

      <h3>3. Installation Time</h3>
      <p>Custom cupboards require professional installation and may take several days to complete.</p>

      <h2>Freestanding Furniture: The Pros</h2>
      <h3>1. Flexibility</h3>
      <p>Freestanding furniture can be moved, rearranged, or taken with you when you move homes.</p>

      <h3>2. Lower Initial Cost</h3>
      <p>Ready-made furniture is generally less expensive upfront and available immediately.</p>

      <h3>3. Easy Replacement</h3>
      <p>Individual pieces can be replaced or updated without affecting the entire storage system.</p>

      <h2>Freestanding Furniture: The Cons</h2>
      <h3>1. Wasted Space</h3>
      <p>Gaps between furniture and walls, and inability to utilize ceiling height fully, result in wasted storage space.</p>

      <h3>2. Limited Customization</h3>
      <p>Standard sizes may not fit your space perfectly or meet your specific storage needs.</p>

      <h3>3. Inconsistent Aesthetics</h3>
      <p>Mixing different furniture pieces can create a disjointed look in your room.</p>

      <h2>Making the Right Choice</h2>
      <p>Consider built-in cupboards if you:</p>
      <ul>
        <li>Plan to stay in your home long-term</li>
        <li>Have specific storage needs or awkward spaces</li>
        <li>Want to maximize property value</li>
        <li>Prefer a seamless, custom look</li>
      </ul>

      <p>Choose freestanding furniture if you:</p>
      <ul>
        <li>Rent your home or plan to move soon</li>
        <li>Have a limited budget</li>
        <li>Like to change your decor frequently</li>
        <li>Need storage solutions immediately</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Both built-in cupboards and freestanding furniture have their place in home design. The best choice depends on your specific circumstances, budget, and long-term plans. For permanent homes where space optimization and custom design are priorities, built-in cupboards offer superior value and functionality.</p>
    `,
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
    title: `${post.title} | Granite Carpentry Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-white">
              <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              <Badge className="mb-4 bg-amber-600">{post.category}</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div className="text-gray-600">
                <p>{post.description}</p>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio */}
            <Card className="mt-12 bg-amber-50 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                    GC
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Granite Carpentry Team</h3>
                    <p className="text-gray-600">Professional Carpenters & Renovation Experts</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our team of experienced carpenters and renovation specialists has been serving Johannesburg and
                  surrounding areas for over 15 years. We specialize in kitchen renovations, built-in cupboards, granite
                  installations, and all aspects of professional carpentry.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button className="bg-amber-600 hover:bg-amber-700">Get Free Quote</Button>
                  </Link>
                  <Link href="tel:0676014490">
                    <Button variant="outline">Call: 067 601 4490</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(blogPosts)
                .filter(([slug]) => slug !== params.slug)
                .slice(0, 3)
                .map(([slug, relatedPost]) => (
                  <Card key={slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <Badge variant="outline" className="w-fit mb-2">
                        {relatedPost.category}
                      </Badge>
                      <CardTitle className="text-lg">{relatedPost.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{relatedPost.description}</p>
                    </CardHeader>
                    <CardContent>
                      <Link href={`/blog/${slug}`}>
                        <Button variant="outline" className="w-full bg-transparent">
                          Read More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-amber-100">Get expert advice and a free quote for your carpentry project</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                Get Free Quote
              </Button>
            </Link>
            <Link href="tel:0676014490">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600 bg-transparent"
              >
                Call: 067 601 4490
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
