"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { MessageSquare, X, Send, Bot, User, Trash2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! 👋 I'm your The Timber Studio assistant. I can help you with:\n\n🔨 Kitchen Renovations\n🚪 Built-in Cupboards\n💎 Granite & Quartz\n🔧 Plumbing Services\n🏗️ Drywall & Ceilings\n🪵 Decking & Flooring\n\nWhat service are you interested in?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)

  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickReplies = [
    "Kitchen Renovation",
    "Built-in Cupboards",
    "Drywall Services",
    "Plumbing",
    "Pricing Info",
    "Service Areas",
  ]

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
      setUnreadCount(0)
    }
  }, [messages, isOpen])

  useEffect(() => {
    if (!isOpen && messages.length > 0 && messages[messages.length - 1].sender === "bot") {
      setUnreadCount((prev) => prev + 1)
    }
  }, [messages, isOpen])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response with typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(text.trim())
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(inputValue)
    }
  }

  const handleClearChat = () => {
    setMessages([
      {
        id: "1",
        text: "Hi! 👋 I'm your The Timber Studio assistant. I can help you with:\n\n🔨 Kitchen Renovations\n🚪 Built-in Cupboards\n💎 Granite & Quartz\n🔧 Plumbing Services\n🏗️ Drywall & Ceilings\n🪵 Decking & Flooring\n\nWhat service are you interested in?",
        sender: "bot",
        timestamp: new Date(),
      },
    ])
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
  }

  const getBotResponse = (userText: string): string => {
    const text = userText.toLowerCase()

    if (text.includes("kitchen") || text.includes("renovation")) {
      return "🔨 KITCHEN RENOVATIONS\n\nWe specialize in complete kitchen transformations!\n\n💰 Pricing:\n• Basic Renovation: R50,000 - R90,000\n• Mid-Range: R90,000 - R180,000\n• High-End: R180,000+\n\n✅ Includes:\n• Custom cabinets & cupboards\n• Granite/quartz countertops\n• Modern appliances integration\n• Professional installation\n• 24-month warranty\n\n📞 Call 063 397 7498 for a FREE quote!"
    }

    if (text.includes("cupboard") || text.includes("built-in") || text.includes("wardrobe")) {
      return "🚪 BUILT-IN CUPBOARDS\n\nCustom storage solutions for every room!\n\n💰 Pricing:\n• Standard Cupboards: R15,000 - R25,000\n• Walk-in Wardrobes: R25,000 - R45,000\n• Luxury Storage: R45,000+\n\n✅ Features:\n• Custom designs to fit your space\n• Quality materials & finishes\n• Soft-close mechanisms\n• Mirror options available\n• 24-month warranty\n\n📞 Call 063 397 7498 for a FREE consultation!"
    }

    if (text.includes("granite") || text.includes("quartz") || text.includes("countertop") || text.includes("stone")) {
      return "💎 GRANITE & QUARTZ INSTALLATION\n\nPremium stone surfaces with expert installation!\n\n💰 Pricing:\n• Granite: R500 - R1,400/m²\n• Quartz: R600 - R1,800/m²\n• Installation included\n\n✅ Benefits:\n• Heat & scratch resistant\n• Professional templating\n• Seamless installation\n• 12-month warranty\n• Free consultation\n\n📞 Call 063 397 7498 for pricing!"
    }

    if (
      text.includes("drywall") ||
      text.includes("ceiling") ||
      text.includes("plasterboard") ||
      text.includes("suspended ceiling")
    ) {
      return "🏗️ DRYWALL & CEILING SERVICES\n\nProfessional installation throughout Johannesburg!\n\n💰 Pricing:\n• Suspended Ceilings: From R180/m²\n• Plasterboard Walls: From R120/m²\n• Ceiling Repairs: From R350/repair\n• Acoustic Ceilings: From R220/m²\n\n📍 Available in:\n• Sandton, Randburg, Fourways\n• Midrand, Centurion, Pretoria\n• Johannesburg South & more!\n\n✅ 24-month warranty on all work\n\n📞 Call 063 397 7498 for a FREE quote!"
    }

    if (text.includes("plumb") || text.includes("geyser") || text.includes("leak") || text.includes("bathroom")) {
      return "🔧 PROFESSIONAL PLUMBING\n\n24/7 Emergency service available!\n\n💰 Pricing:\n• Emergency Callout: From R280\n• Geyser Installation: From R3,500\n• Bathroom Renovations: From R25,000\n• General Repairs: From R350/hour\n\n✅ Services:\n• Emergency repairs\n• Geyser installations\n• Bathroom renovations\n• Leak detection & repair\n• Licensed & insured\n\n📞 Call 063 397 7498 - Available 24/7!"
    }

    if (text.includes("deck") || text.includes("floor") || text.includes("laminate") || text.includes("wood")) {
      return "🪵 DECKING & FLOORING\n\nBeautiful outdoor & indoor solutions!\n\n💰 Pricing:\n• Outdoor Decking: From R12,000\n• Laminate Flooring: From R150/m²\n• Wooden Flooring: From R250/m²\n\n✅ Features:\n• Weather-resistant materials\n• Professional installation\n• Various wood options\n• Maintenance advice\n• 24-month warranty\n\n📞 Call 063 397 7498 for a FREE quote!"
    }

    if (text.includes("price") || text.includes("cost") || text.includes("quote") || text.includes("how much")) {
      return "💰 PRICING OVERVIEW\n\nHere are our typical price ranges:\n\n🔨 Kitchen Renovations: R50k - R200k+\n🚪 Built-in Cupboards: R15k - R80k\n💎 Granite/Quartz: R8k - R25k\n🏗️ Drywall & Ceilings: R6k - R30k\n🔧 Plumbing: From R280\n🪵 Decking & Flooring: R12k - R40k\n\n✅ All quotes include:\n• Free consultation\n• Detailed breakdown\n• No hidden fees\n• Warranty coverage\n\n📞 Call 063 397 7498 for your personalized quote!"
    }

    if (text.includes("area") || text.includes("location") || text.includes("where") || text.includes("serve")) {
      return "📍 SERVICE AREAS\n\nWe serve Greater Johannesburg & Gauteng:\n\n✅ Main Areas:\n• Sandton, Randburg, Fourways\n• Midrand, Centurion, Pretoria\n• Johannesburg South, Alberton\n• Boksburg, Edenvale, Benoni\n• Kempton Park, Germiston\n• Roodepoort, Krugersdorp\n• Vereeniging, Vanderbijlpark\n• And 10+ more areas!\n\n🚗 No travel fees within service areas\n📞 Call 063 397 7498 to confirm coverage!"
    }

    if (text.includes("warrant") || text.includes("guarantee") || text.includes("insurance")) {
      return "🛡️ WARRANTY & GUARANTEES\n\nYour peace of mind is our priority!\n\n✅ Coverage:\n• 24-month warranty on carpentry\n• 12-month warranty on installations\n• Licensed & insured business\n• R2 million public liability\n• 5-star rated service\n\n✅ What's Covered:\n• Workmanship defects\n• Material failures\n• Installation issues\n• Structural problems\n\n📞 Call 063 397 7498 for details!"
    }

    if (text.includes("contact") || text.includes("phone") || text.includes("call") || text.includes("email")) {
      return "📞 CONTACT INFORMATION\n\nReady to help you!\n\n📱 Phone: 063 397 7498\n📧 Email: info@timberstudio.co.za\n🌐 Website: www.timberstudio.co.za\n\n🕒 Business Hours:\n• Mon-Sat: 7:00 AM - 5:00 PM\n• Emergency: 24/7 Available\n\n✅ Free Services:\n• Consultations\n• Site visits\n• Detailed quotes\n• Design advice\n\nCall us now for immediate assistance!"
    }

    if (text.includes("emergency") || text.includes("urgent") || text.includes("asap") || text.includes("now")) {
      return "🚨 EMERGENCY SERVICE\n\nWe're here to help 24/7!\n\n📞 CALL NOW: 063 397 7498\n\n✅ Emergency Services:\n• Plumbing leaks & bursts\n• Geyser failures\n• Urgent repairs\n• Same-day service\n\n⚡ Response Time:\n• Emergency callout: 1-2 hours\n• Standard service: Same/next day\n\nDon't wait - call us immediately!"
    }

    return "Thanks for your message! 😊\n\nI can help you with:\n\n🔨 Kitchen Renovations\n🚪 Built-in Cupboards\n💎 Granite & Quartz\n🔧 Plumbing Services\n🏗️ Drywall & Ceilings\n🪵 Decking & Flooring\n💰 Pricing Information\n📍 Service Areas\n\nJust ask about any service, or:\n📞 Call 063 397 7498\n📧 info@timberstudio.co.za\n\nWe offer FREE consultations & quotes!"
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="relative h-14 w-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageSquare className="h-6 w-6 text-white" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center animate-pulse">
              {unreadCount}
            </span>
          )}
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-[380px] md:max-w-[400px] animate-in slide-in-from-bottom-5 duration-300">
      <Card className="shadow-2xl border-0 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 md:p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bot className="h-5 w-5 md:h-6 md:w-6" />
                <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-400 border-2 border-white"></span>
              </div>
              <div>
                <CardTitle className="text-sm md:text-base">Carpentry Assistant</CardTitle>
                <p className="text-xs text-blue-100 hidden md:block">Online • Replies instantly</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearChat}
                className="text-white hover:bg-blue-700 h-9 w-9 p-0 md:h-8 md:w-8"
                aria-label="Clear chat"
              >
                <Trash2 className="h-4 w-4 md:h-4 md:w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-700 h-10 w-10 p-0 md:h-8 md:w-8 border-2 border-white/30"
                aria-label="Close chat"
              >
                <X className="h-5 w-5 md:h-4 md:w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <ScrollArea
            className="h-[50vh] md:h-[400px] p-3 md:p-4 bg-gradient-to-b from-gray-50 to-white"
            ref={scrollAreaRef}
          >
            <div className="space-y-3 md:space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"} animate-in slide-in-from-bottom-2 duration-300`}
                >
                  {message.sender === "bot" && (
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Bot className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
                    </div>
                  )}
                  <div className="flex flex-col gap-1 max-w-[80%] md:max-w-[75%]">
                    <div
                      className={`p-2.5 md:p-3 rounded-2xl text-xs md:text-sm shadow-sm ${
                        message.sender === "user"
                          ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-sm"
                          : "bg-white text-gray-900 rounded-bl-sm border border-gray-100"
                      }`}
                    >
                      <p className="whitespace-pre-line leading-relaxed">{message.text}</p>
                    </div>
                    <span
                      className={`text-xs text-gray-400 px-1 ${message.sender === "user" ? "text-right" : "text-left"}`}
                    >
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                  {message.sender === "user" && (
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <User className="h-3 w-3 md:h-4 md:w-4 text-gray-600" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-2 animate-in slide-in-from-bottom-2 duration-300">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Bot className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
                  </div>
                  <div className="bg-white text-gray-900 p-2.5 md:p-3 rounded-2xl rounded-bl-sm border border-gray-100 shadow-sm">
                    <div className="flex gap-1">
                      <span
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></span>
                      <span
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></span>
                      <span
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="p-2.5 md:p-4 border-t bg-white">
            <div className="flex gap-1.5 md:gap-2 mb-2 md:mb-3 overflow-x-auto pb-1 scrollbar-hide">
              {quickReplies.map((reply) => (
                <Button
                  key={reply}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSendMessage(reply)}
                  className="text-xs whitespace-nowrap hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-colors flex-shrink-0"
                >
                  {reply}
                </Button>
              ))}
            </div>

            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                onKeyDown={handleKeyDown}
                className="flex-1 rounded-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm"
                aria-label="Message input"
              />
              <Button
                onClick={() => handleSendMessage(inputValue)}
                size="sm"
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full h-10 w-10 p-0 shadow-md hover:shadow-lg transition-all flex-shrink-0"
                aria-label="Send message"
              >
                {isTyping ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </div>

            <p className="text-xs text-center text-gray-400 mt-2 hidden md:block">Powered by AI • Available 24/7</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
