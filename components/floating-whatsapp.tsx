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
      <div className="relative">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 right-0 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
            Chat with us on WhatsApp!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900"></div>
          </div>
        )}

        {/* WhatsApp Button */}
        <Button
          asChild
          size="lg"
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg animate-float"
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

        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-slate-200 hover:bg-slate-300 p-0"
          onClick={() => setIsVisible(false)}
          aria-label="Close WhatsApp widget"
        >
          <X className="h-3 w-3" />
        </Button>
      </div>
    </div>
  )
}
