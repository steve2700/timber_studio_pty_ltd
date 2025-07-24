"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { useTrackInteraction } from "./analytics-provider"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const { trackWhatsAppClick } = useTrackInteraction()

  useEffect(() => {
    // Show the WhatsApp button after 2 seconds to improve initial page load
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("floating_button")
    const message = encodeURIComponent(
      "Hi! I'm interested in your carpentry and granite installation services. Could you please provide me with more information and a quote?",
    )
    window.open(`https://wa.me/27676014490?text=${message}`, "_blank")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
            Chat on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 animate-pulse hover:animate-none"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
