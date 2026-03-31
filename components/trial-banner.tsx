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
    <div className="fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] max-w-2xl">
      <a
        href="https://app.delne.jp/auth/welcome/"
        onClick={handleFreeTrialClick}
        aria-label="4月限定1か月無料キャンペーンのトライアルへ移動"
        className="block"
      >
        <div
          className="trial-banner-enter relative flex h-44 w-full flex-col items-center justify-center overflow-hidden rounded-2xl font-serif shadow-2xl md:h-48"
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

          <div className="pointer-events-none absolute left-0 top-0 h-24 w-24">
            <div
              className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-white/30 backdrop-blur-sm"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            >
              <span className="absolute left-2 top-6 -rotate-45 text-[14px] font-black tracking-wider text-[#451a03]">4月限定</span>
            </div>
          </div>

          <div className="relative z-10 px-8 text-center">
            <div className="mb-2 flex items-center justify-center gap-2 text-[#451a03]/80">
              <Sparkles size={18} className="opacity-70" />
              <span className="text-sm font-bold tracking-[0.2em] md:text-base">キャンペーン実施中</span>
              <Sparkles size={18} className="opacity-70" />
            </div>

            <p className="text-3xl font-bold leading-tight tracking-tight text-[#28140a] drop-shadow-sm md:text-5xl">1ヶ月無料トライアル</p>

            <div className="mx-auto mt-4 h-[1px] w-16 bg-[#28140a]/30" />
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
