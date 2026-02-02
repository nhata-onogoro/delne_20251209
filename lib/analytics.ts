export type AnalyticsEvent = {
  action: string
  category?: string
  label?: string
  value?: number
}

type GtagEventParams = {
  event_category?: string
  event_label?: string
  value?: number
}

const isBrowser = typeof window !== "undefined"

export const sendAnalyticsEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  if (!isBrowser || typeof window.gtag !== "function") return

  const params: GtagEventParams = {}
  if (category) params.event_category = category
  if (label) params.event_label = label
  if (typeof value === "number") params.value = value

  window.gtag("event", action, params)
}

export const trackButtonClick = (label: string, location?: string) => {
  sendAnalyticsEvent({ action: "button_click", category: location ?? "interaction", label })
}

export const trackSectionView = (sectionName: string) => {
  sendAnalyticsEvent({ action: "section_view", category: "section", label: sectionName })
}

export const trackVideoStart = (label: string, category = "video") => {
  sendAnalyticsEvent({ action: "video_start", category, label })
}

export const trackVideoComplete = (label: string, category = "video") => {
  sendAnalyticsEvent({ action: "video_complete", category, label })
}
