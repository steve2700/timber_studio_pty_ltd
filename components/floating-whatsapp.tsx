"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Show the WhatsApp button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Show tooltip for 5 seconds
      setTimeout(() => {
        setShowTooltip(true)
        setTimeout(() => setShowTooltip(false), 5000)
      }, 1000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in your carpentry and granite services. Could you please provide me with more information and a quote?",
    )
    const whatsappUrl = `https://wa.me/27676014490?text=${message}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 z-40">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 left-0 mb-2 w-64 p-3 bg-white rounded-lg shadow-lg border animate-in slide-in-from-bottom-2">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-900">Need a quick quote?</p>
              <p className="text-xs text-gray-600 mt-1">Chat with us on WhatsApp for instant responses!</p>
            </div>
            <Button variant="ghost" size="sm" className="p-1 h-auto" onClick={() => setShowTooltip(false)}>
              <X className="w-3 h-3" />
            </Button>
          </div>
          {/* Arrow */}
          <div className="absolute bottom-0 left-6 transform translate-y-full">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        size="lg"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  )
}
