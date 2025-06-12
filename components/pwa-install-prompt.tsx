"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, X, Smartphone, AppleIcon as Safari } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    // Detect iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    setIsIOS(iOS)

    // Check if app is already installed
    const standalone = window.matchMedia("(display-mode: standalone)").matches
    const webAppiOS = (window.navigator as any).standalone === true
    const isInstalled = standalone || webAppiOS

    setIsStandalone(isInstalled)
    setIsInstalled(isInstalled)

    if (isInstalled) {
      return
    }

    // Listen for the beforeinstallprompt event (Android Chrome)
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log("beforeinstallprompt event fired")
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)

      // Show prompt immediately for testing, then add delay for production
      setTimeout(() => {
        setShowInstallPrompt(true)
      }, 2000) // Reduced delay for testing
    }

    // Listen for app installed event
    const handleAppInstalled = () => {
      console.log("App installed")
      setIsInstalled(true)
      setShowInstallPrompt(false)
      setDeferredPrompt(null)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)

    // For iOS, show manual install instructions after delay
    if (iOS && !webAppiOS) {
      setTimeout(() => {
        const hasSeenIOSPrompt = localStorage.getItem("ios-install-prompt-seen")
        if (!hasSeenIOSPrompt) {
          setShowInstallPrompt(true)
        }
      }, 3000)
    }

    // For testing: show prompt on any device after delay if no beforeinstallprompt
    setTimeout(() => {
      if (!deferredPrompt && !isInstalled && !iOS) {
        console.log("No beforeinstallprompt detected, showing fallback")
        setShowInstallPrompt(true)
      }
    }, 5000)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice
        console.log("Install prompt result:", outcome)

        setDeferredPrompt(null)
        setShowInstallPrompt(false)
        localStorage.setItem("pwa-install-prompt-seen", "true")
      } catch (error) {
        console.error("Error installing PWA:", error)
      }
    } else if (isIOS) {
      // For iOS, we can't programmatically install, so we keep the prompt open
      // and show instructions
    }
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    if (isIOS) {
      localStorage.setItem("ios-install-prompt-seen", "true")
    } else {
      localStorage.setItem("pwa-install-prompt-seen", "true")
    }
  }

  // Don't show if already installed
  if (isInstalled || !showInstallPrompt) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-4 sm:max-w-sm">
      <Card className="shadow-2xl border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                {isIOS ? <Safari className="w-5 h-5 text-white" /> : <Smartphone className="w-5 h-5 text-white" />}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-slate-800 mb-1">
                {isIOS ? "Add to Home Screen" : "Install Our App"}
              </h3>

              {isIOS ? (
                <div className="text-xs text-slate-600 mb-3">
                  <p className="mb-2">
                    Tap the share button <span className="inline-block">📤</span> in Safari
                  </p>
                  <p>Then tap "Add to Home Screen"</p>
                </div>
              ) : (
                <p className="text-xs text-slate-600 mb-3">
                  Get quick access to quotes, portfolio, and contact info. Works offline!
                </p>
              )}

              <div className="flex space-x-2">
                {!isIOS && (
                  <Button
                    size="sm"
                    onClick={handleInstallClick}
                    className="bg-amber-600 hover:bg-amber-700 text-xs px-3 py-1.5"
                  >
                    <Download className="w-3 h-3 mr-1" />
                    Install
                  </Button>
                )}
                <Button size="sm" variant="outline" onClick={handleDismiss} className="text-xs px-3 py-1.5">
                  {isIOS ? "Got it" : "Later"}
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
