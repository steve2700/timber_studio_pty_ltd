"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User, Phone, Mail } from "lucide-react"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

const predefinedResponses = {
  greeting: [
    "Hello! I'm here to help with your carpentry and granite needs. What can I assist you with today?",
    "Hi there! Looking for professional carpentry or granite installation? I'm here to help!",
    "Welcome! I can help you with kitchen renovations, built-in cupboards, or granite installations. What interests you?",
  ],
  kitchen: [
    "Great choice! Our kitchen renovations include custom cabinetry, granite countertops, and complete makeovers. Would you like a free quote? Call us at 067 601 4490 or tell me about your project.",
    "Kitchen renovations are our specialty! We handle everything from design to installation. What's your budget range and timeline? I can connect you with our team for a detailed quote.",
  ],
  cupboards: [
    "Built-in cupboards are perfect for maximizing space! We create custom wardrobes, study storage, and entertainment units. What room are you looking to optimize?",
    "Custom built-ins add great value to your home! We serve all Johannesburg areas. Which area are you located in? I can provide area-specific pricing.",
  ],
  granite: [
    "Granite and quartz installations are beautiful and durable! We handle templating, fabrication, and installation. Do you have existing cabinets or is this part of a full renovation?",
    "Stone countertops transform any space! We work with premium granite and quartz. What's the size of your project? Kitchen island, full kitchen, or bathroom?",
  ],
  areas: [
    "We serve all major Gauteng areas including Johannesburg South, Sandton, Randburg, Kempton Park, Midrand, Fourways, Boksburg, Centurion, and Pretoria. Which area are you in?",
    "Our service areas cover the entire Gauteng region. We're based in Johannesburg South but work throughout the province. Where's your project located?",
  ],
  pricing: [
    "Our pricing is very competitive! For accurate quotes, we need to assess your specific project. Would you like to schedule a free consultation? Call 067 601 4490 or provide your contact details.",
    "We offer affordable, transparent pricing with no hidden costs. Each project is unique, so we provide personalized quotes. Can I get your contact information for a detailed estimate?",
  ],
  contact: [
    "You can reach us at:\n📞 Phone: 067 601 4490\n📧 Email: info@granitecarpentry.co.za\n💬 WhatsApp: Click the WhatsApp button\n\nWe respond within 24 hours with detailed quotes!",
    "Contact us for your free quote:\n• Call: 067 601 4490\n• WhatsApp: Use our chat button\n• Email: info@granitecarpentry.co.za\n\nWe're available Mon-Fri 8AM-5PM, Sat 8AM-1PM",
  ],
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI assistant for Granite & Carpentry Johannesburg. I can help you with:\n\n🏠 Kitchen Renovations\n🗄️ Built-in Cupboards\n💎 Granite & Quartz\n📍 Service Areas\n💰 Pricing Info\n📞 Contact Details\n\nWhat can I help you with today?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    // Greeting patterns
    if (message.includes("hello") || message.includes("hi") || message.includes("hey") || message.includes("good")) {
      return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)]
    }

    // Kitchen related
    if (
      message.includes("kitchen") ||
      message.includes("renovation") ||
      message.includes("cabinet") ||
      message.includes("makeover")
    ) {
      return predefinedResponses.kitchen[Math.floor(Math.random() * predefinedResponses.kitchen.length)]
    }

    // Built-in cupboards
    if (
      message.includes("cupboard") ||
      message.includes("wardrobe") ||
      message.includes("built-in") ||
      message.includes("storage") ||
      message.includes("closet")
    ) {
      return predefinedResponses.cupboards[Math.floor(Math.random() * predefinedResponses.cupboards.length)]
    }

    // Granite/Stone
    if (
      message.includes("granite") ||
      message.includes("quartz") ||
      message.includes("stone") ||
      message.includes("countertop") ||
      message.includes("counter")
    ) {
      return predefinedResponses.granite[Math.floor(Math.random() * predefinedResponses.granite.length)]
    }

    // Areas/Location
    if (
      message.includes("area") ||
      message.includes("location") ||
      message.includes("where") ||
      message.includes("sandton") ||
      message.includes("randburg") ||
      message.includes("johannesburg")
    ) {
      return predefinedResponses.areas[Math.floor(Math.random() * predefinedResponses.areas.length)]
    }

    // Pricing
    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("quote") ||
      message.includes("estimate") ||
      message.includes("budget") ||
      message.includes("cheap") ||
      message.includes("affordable")
    ) {
      return predefinedResponses.pricing[Math.floor(Math.random() * predefinedResponses.pricing.length)]
    }

    // Contact
    if (
      message.includes("contact") ||
      message.includes("phone") ||
      message.includes("call") ||
      message.includes("email") ||
      message.includes("whatsapp")
    ) {
      return predefinedResponses.contact[Math.floor(Math.random() * predefinedResponses.contact.length)]
    }

    // Default response
    return "I'd be happy to help! I can provide information about:\n\n• Kitchen Renovations & Custom Cabinets\n• Built-in Cupboards & Wardrobes\n• Granite & Quartz Installations\n• Service Areas (Johannesburg, Sandton, Randburg, etc.)\n• Pricing & Free Quotes\n• Contact Information\n\nWhat specific service interests you? Or call us directly at 067 601 4490 for immediate assistance!"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getAIResponse(inputValue),
          isBot: true,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    ) // 1-2 second delay
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg animate-pulse"
        size="lg"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">Open AI Chat</span>
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-4 right-4 z-50 w-80 sm:w-96 h-96 flex flex-col shadow-2xl">
      <CardHeader className="bg-blue-600 text-white rounded-t-lg p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="w-5 h-5" />
            <CardTitle className="text-sm">AI Assistant</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-blue-700 p-1"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs opacity-90">Ask about carpentry & granite services</p>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
              <div
                className={`max-w-[80%] p-2 rounded-lg text-sm ${
                  message.isBot ? "bg-gray-100 text-gray-800" : "bg-blue-600 text-white"
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.isBot && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                  {!message.isBot && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                  <div className="whitespace-pre-wrap">{message.text}</div>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-2 rounded-lg text-sm">
                <div className="flex items-center space-x-2">
                  <Bot className="w-4 h-4" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t p-3">
          <div className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about our services..."
              className="flex-1 text-sm"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex justify-center space-x-2 mt-2">
            <Button
              variant="outline"
              size="sm"
              className="text-xs bg-transparent"
              onClick={() => window.open("tel:+27676014490")}
            >
              <Phone className="w-3 h-3 mr-1" />
              Call Now
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs bg-transparent"
              onClick={() => window.open("mailto:info@granitecarpentry.co.za")}
            >
              <Mail className="w-3 h-3 mr-1" />
              Email
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
