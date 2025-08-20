"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true)
  const [showTooltip, setShowTooltip] = useState(false)

  const whatsappNumber = "+27676014490"
  const message = "Hi! I'm interested in your carpentry services. Can you help me with a quote?"
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 right-0 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg max-w-[200px] text-center">
            Chat with us on WhatsApp!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900"></div>
          </div>
        )}

        {/* Close Button - Positioned outside the main button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-slate-600 hover:bg-slate-700 p-0 z-10 shadow-md"
          onClick={() => setIsVisible(false)}
          aria-label="Close WhatsApp widget"
        >
          <X className="h-3 w-3 text-white" />
        </Button>

        {/* WhatsApp Button */}
        <Button
          asChild
          size="lg"
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300 hover:scale-105"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex items-center justify-center"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </a>
        </Button>
      </div>
    </div>
  )
}
