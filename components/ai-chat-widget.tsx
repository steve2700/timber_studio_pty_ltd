"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your carpentry and granite installation assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 1000)
  }

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("kitchen") || input.includes("renovation")) {
      return "I'd be happy to help with kitchen renovations! We specialize in custom kitchen designs, granite countertops, and built-in cupboards. Our team serves Johannesburg and surrounding areas. Would you like a free quote? Call us at 067 601 4490 or visit our contact page."
    }

    if (input.includes("granite") || input.includes("quartz")) {
      return "We're experts in granite and quartz installations! We offer premium stone countertops with professional templating and installation. Our services include kitchen countertops, bathroom vanities, and custom stone work. Contact us for a consultation!"
    }

    if (input.includes("price") || input.includes("cost") || input.includes("quote")) {
      return "Pricing depends on your specific project requirements. We offer free, detailed quotes for all our services. Our rates are competitive and we provide transparent pricing. Call 067 601 4490 or fill out our contact form for a personalized quote."
    }

    if (input.includes("area") || input.includes("location") || input.includes("service")) {
      return "We serve Johannesburg and surrounding areas including Sandton, Randburg, Midrand, Kempton Park, Fourways, Boksburg, Centurion, Pretoria, Alberton, and Edenvale. Check our areas page to see if we service your location!"
    }

    if (input.includes("cupboard") || input.includes("storage")) {
      return "We create custom built-in cupboards and storage solutions for bedrooms, studies, and living areas. Our designs maximize space while maintaining style. We handle everything from design to installation. Would you like to see our portfolio?"
    }

    return "Thank you for your question! For detailed information about our carpentry and granite services, I recommend calling us at 067 601 4490 or visiting our contact page. Our expert team can provide personalized assistance for your project needs."
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-amber-600 hover:bg-amber-700 shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open chat</span>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-4 right-4 z-50 w-80 h-96 shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Carpentry Assistant</CardTitle>
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-80">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${
                        message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                    >
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full ${
                          message.sender === "user" ? "bg-amber-600" : "bg-slate-600"
                        }`}
                      >
                        {message.sender === "user" ? (
                          <User className="h-3 w-3 text-white" />
                        ) : (
                          <Bot className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <div
                        className={`rounded-lg px-3 py-2 text-sm ${
                          message.sender === "user" ? "bg-amber-600 text-white" : "bg-slate-100 text-slate-900"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-center space-x-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-600">
                        <Bot className="h-3 w-3 text-white" />
                      </div>
                      <div className="bg-slate-100 rounded-lg px-3 py-2 text-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our services..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-amber-600 hover:bg-amber-700"
                  disabled={isLoading || !inputValue.trim()}
                >
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
