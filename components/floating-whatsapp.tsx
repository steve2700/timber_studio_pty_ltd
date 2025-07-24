"use client"

import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in your carpentry and granite installation services. Could you please provide me with more information and a quote?",
    )
    const whatsappUrl = `https://wa.me/27676014490?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-4 sm:bottom-8 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 sm:p-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-float group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />

      {/* Tooltip for mobile */}
      <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
      </div>

      {/* Pulse animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
    </button>
  )
}
