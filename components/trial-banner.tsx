"use client"

import { useState, MouseEvent } from "react"
import { X, Sparkles } from "lucide-react"
import { trackButtonClick } from "@/lib/analytics"
import { trackFreeTrialClick } from "@/lib/gtag"

export default function TrialBanner() {
  const [isVisible, setIsVisible] = useState(true)

  const handleFreeTrialClick = () => {
    trackButtonClick("floating_free_trial", "floating_cta")
    trackFreeTrialClick("banner_free_trial_click")
  }

  const handleClose = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-xl -translate-x-1/2 md:bottom-6 md:left-auto md:right-6 md:w-[min(32rem,calc(100%-3rem))] md:translate-x-0">
          <div className="relative group">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-3 -right-3 z-[60] flex h-8 w-8 items-center justify-center rounded-full bg-white text-stone-500 shadow-md transition-all hover:bg-stone-100 hover:text-stone-800 focus:outline-none"
              aria-label="バナーを閉じる"
            >
              <X size={18} />
            </button>

            <a
              href="https://app.delne.jp/auth/welcome/"
              onClick={handleFreeTrialClick}
              aria-label="ご好評につき5月申込まで期間延長！1か月無料キャンペーンのトライアルへ移動"
              className="relative block pl-6 md:pl-10"
            >
              {/* Circular Badge - Positioned at top-left with tilted larger text */}
              <div className="absolute -left-3 -top-3 z-30 flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-[#B8860B] bg-white shadow-xl md:-left-6 md:-top-6 md:h-36 md:w-36 md:border-4">
                <div className="flex -rotate-12 flex-col items-center justify-center text-center font-sans leading-tight text-[#A03030]">
                  <span className="text-[11px] font-black md:text-base">ご好評につき</span>
                  <span className="text-xs font-black md:text-lg">5月申込まで</span>
                  <span className="text-[11px] font-black md:text-base">期間延長</span>
                </div>
                {/* Inner subtle border for the metallic look */}
                <div className="absolute inset-0.5 rounded-full border border-[#DAA520]/30" />
              </div>

              <div
                className="relative flex h-28 w-full flex-col items-center justify-center overflow-hidden rounded-xl font-serif shadow-xl transition-transform duration-300 hover:scale-[1.02] md:h-40 md:rounded-2xl md:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #FF6B4A 0%, #FFB800 100%)",
                }}
              >
                {/* Sheen effect */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 55%, transparent 60%)",
                    backgroundSize: "200% 100%",
                    animation: "sheen 6s infinite linear",
                  }}
                />

                <div className="relative z-10 pl-10 pr-4 text-center md:pl-16 md:pr-8">
                  <div className="mb-1 flex items-center justify-center gap-1.5 text-[#451a03]/80 md:mb-2 md:gap-2">
                    <Sparkles size={14} className="opacity-70 md:h-[18px] md:w-[18px]" />
                    <span className="text-[10px] font-bold tracking-[0.15em] md:text-base md:tracking-[0.2em]">キャンペーン実施中</span>
                    <Sparkles size={14} className="opacity-70 md:h-[18px] md:w-[18px]" />
                  </div>

                  <p className="flex items-baseline justify-center font-bold tracking-tight text-[#28140a] drop-shadow-sm">
                    <span className="text-3xl md:text-6xl">1</span>
                    <span className="text-xl md:text-4xl">ヶ月無料トライアル</span>
                  </p>

                  <div className="mx-auto mt-2 h-[1px] w-12 bg-[#28140a]/30 md:mt-4 md:w-16" />
                </div>

                <div className="pointer-events-none absolute inset-2 rounded-xl border border-white/20" />
              </div>
            </a>
          </div>
    <style>{`\n      @keyframes sheen {\n        0% { background-position: 200% 0; }\n        100% { background-position: -200% 0; }\n      }\n    `}</style>
    </div>
  )
}
