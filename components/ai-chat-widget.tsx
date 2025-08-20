"use client"

import { useState } from "react"
import { MessageSquare, X, Send, Bot, User } from "lucide-react"
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
      text: "Hi! I'm here to help you with your carpentry needs. What can I assist you with today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const quickReplies = [
    "Kitchen renovation quote",
    "Built-in cupboards pricing",
    "Granite installation",
    "Service areas",
    "Contact information",
  ]

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

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(text.trim())
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const getBotResponse = (userText: string): string => {
    const text = userText.toLowerCase()

    if (text.includes("kitchen") || text.includes("renovation")) {
      return "Great! We specialize in kitchen renovations. Our services include custom cupboards, granite countertops, and complete kitchen makeovers. Prices typically range from R50,000 to R200,000+. Would you like me to connect you with our team for a free quote? Call us at 067 601 4490."
    }

    if (text.includes("cupboard") || text.includes("built-in")) {
      return "We create beautiful built-in cupboards for bedrooms, studies, and living areas. Our custom solutions maximize your space and match your style perfectly. Typical projects range from R15,000 to R80,000. Contact us at 067 601 4490 for a personalized quote!"
    }

    if (text.includes("granite") || text.includes("quartz")) {
      return "We're experts in granite and quartz countertop installation! We offer premium stone surfaces with professional installation and a 12-month warranty. Prices vary by material and size. Call 067 601 4490 for a free consultation and quote."
    }

    if (text.includes("price") || text.includes("cost") || text.includes("quote")) {
      return "Our pricing depends on the specific project requirements. We offer free consultations and detailed quotes. Here are typical ranges: Kitchen renovations (R50k-R200k+), Built-in cupboards (R15k-R80k), Granite installation (R8k-R25k). Call 067 601 4490 for your personalized quote!"
    }

    if (text.includes("area") || text.includes("location") || text.includes("where")) {
      return "We serve the entire Greater Johannesburg area including Sandton, Randburg, Pretoria, Centurion, Midrand, Kempton Park, Edenvale, Boksburg, Fourways, and surrounding areas. Free quotes available in all service areas!"
    }

    if (text.includes("contact") || text.includes("phone") || text.includes("call")) {
      return "You can reach us at:\n📞 067 601 4490\n📧 info@granitecarpentry.co.za\n🕒 Mon-Sat: 7AM-5PM\n\nWe offer free consultations and quotes. Our team is ready to help with your carpentry project!"
    }

    if (text.includes("warranty") || text.includes("guarantee")) {
      return "We stand behind our work with comprehensive warranties:\n✅ 24-month warranty on all carpentry work\n✅ 12-month warranty on granite installations\n✅ Licensed and insured business\n✅ 5-star rated service\n\nYour satisfaction is guaranteed!"
    }

    return "Thanks for your question! I'd be happy to help you with information about our carpentry services, pricing, or service areas. For detailed assistance, please call our team at 067 601 4490 or email info@granitecarpentry.co.za. We offer free consultations!"
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
          aria-label="Open chat"
        >
          <MessageSquare className="h-6 w-6 text-white" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 w-80 sm:w-96">
      <Card className="shadow-2xl">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Carpentry Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-700 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-blue-100">Ask me about our carpentry services!</p>
        </CardHeader>

        <CardContent className="p-0">
          <ScrollArea className="h-80 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-blue-600" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-3 rounded-lg text-sm ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-gray-100 text-gray-900 rounded-bl-none"
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                  </div>
                  {message.sender === "user" && (
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-gray-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Quick Replies */}
          <div className="p-4 border-t bg-gray-50">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickReplies.map((reply) => (
                <Button
                  key={reply}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSendMessage(reply)}
                  className="text-xs"
                >
                  {reply}
                </Button>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about our services..."
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage(inputValue)
                  }
                }}
                className="flex-1"
              />
              <Button onClick={() => handleSendMessage(inputValue)} size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
