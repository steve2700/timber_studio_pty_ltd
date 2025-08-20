"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

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
      text: "Hi! I'm here to help you with your carpentry needs. What project are you planning?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const suggestions = [
    "Kitchen renovation quote",
    "Built-in cupboards pricing",
    "Granite installation cost",
    "Decking installation",
    "Service areas",
  ]

  const botResponses = {
    kitchen:
      "I'd be happy to help with your kitchen renovation! Our kitchen services include custom cabinetry, granite/quartz countertops, and complete installations. Would you like me to connect you with our team for a free quote?",
    cupboards:
      "Our built-in cupboards are custom-made to fit your space perfectly. We offer bedroom wardrobes, study units, and storage solutions. Prices start from R8,000 depending on size and materials. Would you like to schedule a consultation?",
    granite:
      "We specialize in granite and quartz installations for kitchens and bathrooms. Our team handles templating, fabrication, and installation. Typical costs range from R1,200-R2,500 per square meter. Shall I arrange a site visit?",
    decking:
      "Our decking services include wooden deck installation for both indoor and outdoor spaces. We use quality timber and provide waterproofing. Would you like information about materials and pricing?",
    areas:
      "We serve Greater Johannesburg and Pretoria including Sandton, Centurion, Midrand, Kempton Park, Randburg, and surrounding areas. Where is your project located?",
    default:
      "Thank you for your question! For detailed information and personalized quotes, I'd recommend speaking with our expert team. You can call us at 011 568 9012 or request a quote through our contact form. Is there anything specific about our services you'd like to know?",
  }

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    if (message.includes("kitchen")) return botResponses.kitchen
    if (message.includes("cupboard") || message.includes("wardrobe")) return botResponses.cupboards
    if (message.includes("granite") || message.includes("quartz")) return botResponses.granite
    if (message.includes("deck") || message.includes("flooring")) return botResponses.decking
    if (message.includes("area") || message.includes("location") || message.includes("where")) return botResponses.areas
    return botResponses.default
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
  }

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-4 right-4 w-80 h-96 shadow-xl z-50 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Carpentry Assistant</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-6 w-6">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        message.sender === "user" ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="h-3 w-3 text-primary-foreground" />
                      ) : (
                        <Bot className="h-3 w-3" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg px-3 py-2 text-sm ${
                        message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Suggestions */}
            {messages.length === 1 && (
              <div className="p-4 border-t">
                <div className="text-xs text-muted-foreground mb-2">Quick questions:</div>
                <div className="flex flex-wrap gap-1">
                  {suggestions.map((suggestion) => (
                    <Button
                      key={suggestion}
                      variant="outline"
                      size="sm"
                      className="text-xs h-6 bg-transparent"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about our services..."
                  className="flex-1"
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button size="icon" onClick={handleSendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
