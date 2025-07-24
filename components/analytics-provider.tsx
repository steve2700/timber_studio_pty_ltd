"use client"

import type React from "react"

import { useEffect } from "react"
import { track } from "@vercel/analytics"

interface AnalyticsEvent {
  name: string
  properties?: Record<string, any>
}

export function trackEvent(event: AnalyticsEvent) {
  track(event.name, event.properties)
}

// Custom hook for tracking page views
export function usePageView() {
  useEffect(() => {
    trackEvent({
      name: "page_view",
      properties: {
        page: window.location.pathname,
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
      },
    })
  }, [])
}

// Custom hook for tracking user interactions
export function useTrackInteraction() {
  const trackClick = (element: string, location?: string) => {
    trackEvent({
      name: "click",
      properties: {
        element,
        location: location || window.location.pathname,
        timestamp: new Date().toISOString(),
      },
    })
  }

  const trackFormSubmission = (formName: string, success = true) => {
    trackEvent({
      name: "form_submission",
      properties: {
        form_name: formName,
        success,
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
      },
    })
  }

  const trackPhoneCall = (source: string) => {
    trackEvent({
      name: "phone_call_initiated",
      properties: {
        source,
        phone_number: "+27676014490",
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
      },
    })
  }

  const trackWhatsAppClick = (source: string) => {
    trackEvent({
      name: "whatsapp_click",
      properties: {
        source,
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
      },
    })
  }

  const trackServiceView = (serviceName: string) => {
    trackEvent({
      name: "service_viewed",
      properties: {
        service_name: serviceName,
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
      },
    })
  }

  const trackAreaView = (areaName: string) => {
    trackEvent({
      name: "area_viewed",
      properties: {
        area_name: areaName,
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
      },
    })
  }

  return {
    trackClick,
    trackFormSubmission,
    trackPhoneCall,
    trackWhatsAppClick,
    trackServiceView,
    trackAreaView,
  }
}

// Analytics Provider Component
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
