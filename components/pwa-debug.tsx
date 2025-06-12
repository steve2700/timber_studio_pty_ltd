"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PWADebug() {
  const [debugInfo, setDebugInfo] = useState<any>({})
  const [showDebug, setShowDebug] = useState(false)

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      isStandalone: window.matchMedia("(display-mode: standalone)").matches,
      isIOSStandalone: (window.navigator as any).standalone,
      serviceWorkerSupport: "serviceWorker" in navigator,
      isOnline: navigator.onLine,
      isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent),
      isAndroid: /Android/.test(navigator.userAgent),
      isChrome: /Chrome/.test(navigator.userAgent),
      isSafari: /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent),
      protocol: window.location.protocol,
      host: window.location.host,
    }
    setDebugInfo(info)
  }, [])

  const testServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("/sw.js")
        console.log("SW registered:", registration)
        alert("Service Worker registered successfully!")
      } catch (error) {
        console.error("SW registration failed:", error)
        alert("Service Worker registration failed: " + error)
      }
    }
  }

  const clearCaches = async () => {
    if ("caches" in window) {
      const cacheNames = await caches.keys()
      await Promise.all(cacheNames.map((name) => caches.delete(name)))
      alert("All caches cleared!")
      window.location.reload()
    }
  }

  if (!showDebug) {
    return (
      <div className="fixed bottom-20 left-4 z-40">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setShowDebug(true)}
          className="bg-red-100 border-red-300 text-red-700"
        >
          PWA Debug
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed inset-4 z-50 overflow-auto">
      <Card className="max-w-2xl mx-auto bg-white shadow-2xl">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            PWA Debug Info
            <Button size="sm" variant="outline" onClick={() => setShowDebug(false)}>
              Close
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Is Standalone:</strong>
              <Badge variant={debugInfo.isStandalone ? "default" : "secondary"}>
                {debugInfo.isStandalone ? "Yes" : "No"}
              </Badge>
            </div>
            <div>
              <strong>iOS Standalone:</strong>
              <Badge variant={debugInfo.isIOSStandalone ? "default" : "secondary"}>
                {debugInfo.isIOSStandalone ? "Yes" : "No"}
              </Badge>
            </div>
            <div>
              <strong>Service Worker:</strong>
              <Badge variant={debugInfo.serviceWorkerSupport ? "default" : "destructive"}>
                {debugInfo.serviceWorkerSupport ? "Supported" : "Not Supported"}
              </Badge>
            </div>
            <div>
              <strong>Online:</strong>
              <Badge variant={debugInfo.isOnline ? "default" : "destructive"}>
                {debugInfo.isOnline ? "Yes" : "No"}
              </Badge>
            </div>
            <div>
              <strong>iOS:</strong>
              <Badge variant={debugInfo.isIOS ? "default" : "secondary"}>{debugInfo.isIOS ? "Yes" : "No"}</Badge>
            </div>
            <div>
              <strong>Android:</strong>
              <Badge variant={debugInfo.isAndroid ? "default" : "secondary"}>
                {debugInfo.isAndroid ? "Yes" : "No"}
              </Badge>
            </div>
            <div>
              <strong>Chrome:</strong>
              <Badge variant={debugInfo.isChrome ? "default" : "secondary"}>{debugInfo.isChrome ? "Yes" : "No"}</Badge>
            </div>
            <div>
              <strong>Safari:</strong>
              <Badge variant={debugInfo.isSafari ? "default" : "secondary"}>{debugInfo.isSafari ? "Yes" : "No"}</Badge>
            </div>
            <div>
              <strong>Protocol:</strong>
              <Badge variant={debugInfo.protocol === "https:" ? "default" : "destructive"}>{debugInfo.protocol}</Badge>
            </div>
          </div>

          <div className="space-y-2">
            <Button onClick={testServiceWorker} className="w-full">
              Test Service Worker
            </Button>
            <Button onClick={clearCaches} variant="outline" className="w-full">
              Clear All Caches
            </Button>
          </div>

          <div className="text-xs bg-gray-100 p-2 rounded">
            <strong>User Agent:</strong>
            <br />
            {debugInfo.userAgent}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
