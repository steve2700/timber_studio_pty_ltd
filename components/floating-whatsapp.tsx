"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = "27676014490"
  const message =
    "Hi! I'm interested in your carpentry and granite services. Could you please provide me with more information and a free quote?"

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
          aria-label="Open WhatsApp chat"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* WhatsApp Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-72 sm:w-80 bg-white rounded-lg shadow-2xl border border-gray-200">
          <div className="bg-green-500 text-white p-3 sm:p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">Granite & Joinery Experts</h3>
                <p className="text-xs sm:text-sm opacity-90">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="p-3 sm:p-4">
            <div className="bg-gray-100 rounded-lg p-3 mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm text-gray-700">
                Hi! I'm interested in your carpentry and granite services. Could you please provide me with more
                information and a free quote?
              </p>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 sm:py-3 px-4 rounded-lg font-medium transition-colors text-sm sm:text-base"
            >
              Start Chat on WhatsApp
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">Click to chat with us on WhatsApp</p>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-20 z-40" onClick={() => setIsOpen(false)} />}
    </>
  )
}
