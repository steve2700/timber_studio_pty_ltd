"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setTimeout(() => setShowTooltip(true), 1000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in your carpentry and granite services. Can you please provide me with more information and a quote?",
    )
    window.open(`https://wa.me/27676014490?text=${message}`, "_blank")
    setShowTooltip(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {showTooltip && (
        <div className="absolute bottom-16 left-0 mb-2 px-3 py-2 bg-green-600 text-white text-sm rounded-lg shadow-lg whitespace-nowrap animate-bounce">
          Need help? Chat with us!
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-2 text-white hover:text-gray-200"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-600"></div>
        </div>
      )}

      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
        size="lg"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  )
}
