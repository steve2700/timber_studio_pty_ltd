"use client"

import { useState, useEffect } from "react"
import { Wifi, WifiOff } from "lucide-react"

export function PWAStatus() {
  const [isOnline, setIsOnline] = useState(true)
  const [showStatus, setShowStatus] = useState(false)

  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine
      setIsOnline(online)

      // Show status briefly when connection changes
      setShowStatus(true)
      setTimeout(() => setShowStatus(false), 3000)
    }

    // Set initial status
    setIsOnline(navigator.onLine)

    // Listen for online/offline events
    window.addEventListener("online", updateOnlineStatus)
    window.addEventListener("offline", updateOnlineStatus)

    return () => {
      window.removeEventListener("online", updateOnlineStatus)
      window.removeEventListener("offline", updateOnlineStatus)
    }
  }, [])

  if (!showStatus) return null

  return (
    <div
      className={`fixed top-20 right-4 z-50 px-3 py-2 rounded-lg shadow-lg transition-all duration-300 ${
        isOnline ? "bg-green-500 text-white" : "bg-red-500 text-white"
      }`}
    >
      <div className="flex items-center space-x-2 text-sm">
        {isOnline ? (
          <>
            <Wifi className="w-4 h-4" />
            <span>Back Online</span>
          </>
        ) : (
          <>
            <WifiOff className="w-4 h-4" />
            <span>You're Offline</span>
          </>
        )}
      </div>
    </div>
  )
}
