"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Delay showing the WhatsApp button to improve initial page load
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in your carpentry and granite installation services. Could you please provide me with more information?",
    )
    const whatsappUrl = `https://wa.me/27676014490?text=${message}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 no-print">
      <div className="relative">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
            Chat on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-float will-change-transform"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
        </button>

        {/* Pulse animation ring */}
        <div className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full animate-ping opacity-20 pointer-events-none"></div>
      </div>
    </div>
  )
}
