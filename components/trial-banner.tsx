"use client"

import { Sparkles } from "lucide-react"
import { trackButtonClick } from "@/lib/analytics"
import { trackFreeTrialClick } from "@/lib/gtag"

export default function TrialBanner() {
  const handleFreeTrialClick = () => {
    trackButtonClick("floating_free_trial", "floating_cta")
    trackFreeTrialClick("banner_free_trial_click")
  }

  return (
    <div className="fixed bottom-4 right-1/2 z-50 w-[calc(100%-1.5rem)] max-w-xl translate-x-1/2 md:bottom-6 md:right-6 md:w-[calc(100%-3rem)] md:max-w-xl md:translate-x-0">
      <a
        href="https://app.delne.jp/auth/welcome/"
        onClick={handleFreeTrialClick}
        aria-label="4月限定1か月無料キャンペーンのトライアルへ移動"
        className="block"
      >
        <div
          className="trial-banner-enter relative flex h-28 w-full flex-col items-center justify-center overflow-hidden rounded-xl font-serif shadow-xl md:h-40 md:rounded-2xl md:shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #FF6B4A 0%, #FFB800 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 55%, transparent 60%)",
              backgroundSize: "200% 100%",
              animation: "sheen 6s infinite linear",
            }}
          />

          <div className="pointer-events-none absolute left-0 top-0 h-16 w-16 md:h-24 md:w-24">
            <div
              className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-white/30 backdrop-blur-sm"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            >
              <span className="absolute left-1 top-4 -rotate-45 text-[10px] font-black tracking-wider text-[#451a03] md:left-2 md:top-6 md:text-[14px]">
                4月限定
              </span>
            </div>
          </div>

          <div className="relative z-10 px-4 text-center md:px-8">
            <div className="mb-1 flex items-center justify-center gap-1.5 text-[#451a03]/80 md:mb-2 md:gap-2">
              <Sparkles size={14} className="opacity-70 md:h-[18px] md:w-[18px]" />
              <span className="text-[10px] font-bold tracking-[0.15em] md:text-base md:tracking-[0.2em]">キャンペーン実施中</span>
              <Sparkles size={14} className="opacity-70 md:h-[18px] md:w-[18px]" />
            </div>

            <p className="text-xl font-bold leading-tight tracking-tight text-[#28140a] drop-shadow-sm md:text-4xl">
              1ヶ月無料トライアル
            </p>

            <div className="mx-auto mt-2 h-[1px] w-12 bg-[#28140a]/30 md:mt-4 md:w-16" />
          </div>

          <div className="pointer-events-none absolute inset-2 rounded-xl border border-white/20" />
        </div>
      </a>

      <style jsx>{`
        @keyframes sheen {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  )
}
