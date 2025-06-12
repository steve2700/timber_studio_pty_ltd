"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in your carpentry and granite services. Could you please provide me with more information and a free quote?",
    )
    window.open(`https://wa.me/27676014490?text=${message}`, "_blank")
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
            aria-label="Open WhatsApp Chat"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}

        {/* WhatsApp Chat Popup */}
        {isOpen && (
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-80 max-w-[calc(100vw-3rem)]">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Granite & Joinery Experts</h3>
                  <p className="text-sm opacity-90">Typically replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:bg-green-600 rounded-full p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message Content */}
            <div className="p-4">
              <div className="bg-gray-100 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-700">👋 Hi there! Welcome to Granite & Joinery Experts Johannesburg.</p>
                <p className="text-sm text-gray-700 mt-2">How can we help you today? We offer:</p>
                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                  <li>• Kitchen Renovations</li>
                  <li>• Built-in Cupboards</li>
                  <li>• Granite & Quartz Installation</li>
                  <li>• Decking & Flooring</li>
                  <li>• Carpentry Training</li>
                </ul>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Start WhatsApp Chat
              </button>

              <p className="text-xs text-gray-500 text-center mt-2">Click to chat on WhatsApp</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
