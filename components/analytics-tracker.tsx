"use client"

import { useEffect, useRef } from "react"
import { trackSectionView } from "@/lib/analytics"

type SectionConfig = {
  id: string
  label?: string
  threshold?: number
}

type AnalyticsTrackerProps = {
  sections: SectionConfig[]
}

export function AnalyticsTracker({ sections }: AnalyticsTrackerProps) {
  const observedSections = useRef<Set<string>>(new Set())

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const seen = observedSections.current

    sections.forEach(({ id, label, threshold }) => {
      const target = document.getElementById(id)
      if (!target) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !seen.has(id)) {
              seen.add(id)
              trackSectionView(label ?? id)
            }
          })
        },
        { threshold: threshold ?? 0.4 }
      )

      observer.observe(target)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [sections])

  return null
}
