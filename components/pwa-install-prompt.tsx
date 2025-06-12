"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, X, Smartphone } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Check if app is already installed
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches
    const isInWebAppiOS = (window.navigator as any).standalone === true

    if (isStandalone || isInWebAppiOS) {
      setIsInstalled(true)
      return
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)

      // Show install prompt after a delay (don't be too aggressive)
      setTimeout(() => {
        const hasSeenPrompt = localStorage.getItem("pwa-install-prompt-seen")
        const lastPromptTime = localStorage.getItem("pwa-install-prompt-time")
        const now = Date.now()
        const oneWeek = 7 * 24 * 60 * 60 * 1000

        // Show prompt if never seen or if it's been more than a week
        if (!hasSeenPrompt || (lastPromptTime && now - Number.parseInt(lastPromptTime) > oneWeek)) {
          setShowInstallPrompt(true)
        }
      }, 3000) // Show after 3 seconds
    }

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowInstallPrompt(false)
      setDeferredPrompt(null)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    try {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice

      if (outcome === "accepted") {
        console.log("PWA install accepted")
      } else {
        console.log("PWA install dismissed")
      }

      setDeferredPrompt(null)
      setShowInstallPrompt(false)

      // Remember that user has seen the prompt
      localStorage.setItem("pwa-install-prompt-seen", "true")
      localStorage.setItem("pwa-install-prompt-time", Date.now().toString())
    } catch (error) {
      console.error("Error installing PWA:", error)
    }
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    localStorage.setItem("pwa-install-prompt-seen", "true")
    localStorage.setItem("pwa-install-prompt-time", Date.now().toString())
  }

  // Don't show if already installed or no prompt available
  if (isInstalled || !showInstallPrompt || !deferredPrompt) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-4 sm:max-w-sm">
      <Card className="shadow-2xl border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-slate-800 mb-1">Install Our App</h3>
              <p className="text-xs text-slate-600 mb-3">
                Get quick access to quotes, portfolio, and contact info. Works offline!
              </p>

              <div className="flex space-x-2">
                <Button
                  size="sm"
                  onClick={handleInstallClick}
                  className="bg-amber-600 hover:bg-amber-700 text-xs px-3 py-1.5"
                >
                  <Download className="w-3 h-3 mr-1" />
                  Install
                </Button>
                <Button size="sm" variant="outline" onClick={handleDismiss} className="text-xs px-3 py-1.5">
                  Later
                </Button>
              </div>
            </div>

            <button
              onClick={handleDismiss}
              className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Dismiss install prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
