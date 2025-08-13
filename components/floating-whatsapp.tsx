"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if running on the client-side
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768)

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768)
      }

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  return (
    <Button
      asChild
      className="fixed bottom-4 right-4 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg"
      size="lg"
    >
      <a
        href={isMobile ? "https://wa.me/27676014490" : "https://web.whatsapp.com/send?phone=27676014490"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">WhatsApp Chat</span>
      </a>
    </Button>
  )
}
