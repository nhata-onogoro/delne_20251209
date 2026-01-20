export type GtagParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: GtagParams) => void
  }
}

const isBrowser = typeof window !== "undefined"

export const trackGtagEvent = (eventName: string, params?: GtagParams) => {
  if (!isBrowser || typeof window.gtag !== "function") return

  window.gtag("event", eventName, params ?? {})
}

export const trackCtaClick = (
  label: string,
  options?: {
    ctaType?: string
  }
) => {
  trackGtagEvent("cta_click", {
    label,
    ...(options?.ctaType ? { cta_type: options.ctaType } : {}),
  })
}

export const trackFreeTrialClick = (eventName: string) => {
  trackGtagEvent(eventName)
}

export const trackAudioSamplePlay = (sampleName: string) => {
  trackGtagEvent("audio_sample_play", {
    sample_name: sampleName,
  })
}
