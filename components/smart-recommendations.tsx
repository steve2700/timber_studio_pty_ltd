"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, TrendingUp, MapPin, Clock, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Recommendation {
  id: string
  title: string
  description: string
  type: "service" | "area" | "trending" | "seasonal"
  priority: "high" | "medium" | "low"
  link: string
  icon: React.ReactNode
  badge?: string
}

export function SmartRecommendations() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    setCurrentTime(new Date())
    generateRecommendations()
  }, [])

  const generateRecommendations = () => {
    const now = new Date()
    const month = now.getMonth()
    const hour = now.getHours()
    const isWeekend = now.getDay() === 0 || now.getDay() === 6

    const allRecommendations: Recommendation[] = [
      // Seasonal recommendations
      {
        id: "summer-decking",
        title: "Summer Decking Special",
        description: "Perfect weather for outdoor decking projects. Get ready for summer entertaining!",
        type: "seasonal",
        priority: month >= 9 || month <= 2 ? "high" : "low", // Spring/Summer in SA
        link: "/services/decking-flooring",
        icon: <TrendingUp className="w-4 h-4" />,
        badge: "Seasonal",
      },
      {
        id: "winter-indoor",
        title: "Winter Indoor Projects",
        description: "Perfect time for kitchen renovations and built-in cupboards while staying indoors.",
        type: "seasonal",
        priority: month >= 5 && month <= 8 ? "high" : "low", // Winter in SA
        link: "/services/kitchen-renovations",
        icon: <Clock className="w-4 h-4" />,
        badge: "Winter Special",
      },

      // Time-based recommendations
      {
        id: "weekend-planning",
        title: "Weekend Project Planning",
        description: "Plan your renovation project this weekend. Get a free quote for next week!",
        type: "trending",
        priority: isWeekend ? "high" : "medium",
        link: "/contact",
        icon: <Clock className="w-4 h-4" />,
        badge: "Weekend",
      },
      {
        id: "business-hours",
        title: "Call Now - We're Open!",
        description: "Our team is available right now for immediate assistance and quotes.",
        type: "trending",
        priority: hour >= 8 && hour <= 17 && !isWeekend ? "high" : "low",
        link: "tel:+27676014490",
        icon: <Star className="w-4 h-4" />,
        badge: "Available Now",
      },

      // Popular services
      {
        id: "kitchen-popular",
        title: "Most Popular: Kitchen Renovations",
        description: "Our #1 requested service. Transform your kitchen with custom cabinets and granite.",
        type: "service",
        priority: "high",
        link: "/services/kitchen-renovations",
        icon: <TrendingUp className="w-4 h-4" />,
        badge: "Most Popular",
      },
      {
        id: "cupboards-trending",
        title: "Trending: Built-in Storage",
        description: "Maximize your space with custom built-in cupboards and wardrobes.",
        type: "service",
        priority: "high",
        link: "/services/built-in-cupboards",
        icon: <TrendingUp className="w-4 h-4" />,
        badge: "Trending",
      },

      // Area-based recommendations
      {
        id: "johannesburg-south",
        title: "Johannesburg South Special",
        description: "Our home base! Best rates and fastest service for Johannesburg South residents.",
        type: "area",
        priority: "high",
        link: "/areas/johannesburg-south",
        icon: <MapPin className="w-4 h-4" />,
        badge: "Local Special",
      },
      {
        id: "sandton-premium",
        title: "Sandton Premium Services",
        description: "Luxury carpentry and granite installations for upmarket Sandton properties.",
        type: "area",
        priority: "medium",
        link: "/areas/sandton",
        icon: <Star className="w-4 h-4" />,
        badge: "Premium",
      },
      {
        id: "fourways-luxury",
        title: "Fourways Luxury Projects",
        description: "High-end carpentry services for Fourways' most discerning homeowners.",
        type: "area",
        priority: "medium",
        link: "/areas/fourways",
        icon: <Star className="w-4 h-4" />,
        badge: "Luxury",
      },
    ]

    // Filter and sort by priority
    const filtered = allRecommendations
      .filter((rec) => rec.priority !== "low")
      .sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 }
        return priorityOrder[b.priority] - priorityOrder[a.priority]
      })
      .slice(0, 4) // Show top 4 recommendations

    setRecommendations(filtered)
  }

  if (recommendations.length === 0) return null

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Lightbulb className="w-5 h-5 text-amber-600" />
          <span>Smart Recommendations for You</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations.map((rec) => (
            <div key={rec.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {rec.icon}
                  <h3 className="font-semibold text-sm">{rec.title}</h3>
                </div>
                {rec.badge && (
                  <Badge variant="secondary" className="text-xs">
                    {rec.badge}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
              <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                <Link href={rec.link}>
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
