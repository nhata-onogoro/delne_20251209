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
    <div className="trial-banner-enter fixed bottom-6 right-6 z-50">
      <a
        href="https://app.delne.jp/auth/welcome/"
        onClick={handleFreeTrialClick}
        aria-label="4月限定1か月無料キャンペーンのトライアルへ移動"
        className="
          group relative flex min-h-20 items-center gap-4 rounded-2xl px-6 py-4
          bg-gradient-to-br from-[#FF4D4D] via-[#F1C40F] to-[#E67E22] text-[#2D1400]
          shadow-[0_10px_30px_rgba(230,126,34,0.4)] transition-all duration-300 ease-out
          hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(230,126,34,0.6)]
          md:min-h-24 md:px-8
        "
      >
        <div className="trial-badge-wiggle flex flex-col items-center justify-center rounded-xl bg-white px-3 py-2 text-[#E67E22] shadow-lg">
          <span className="text-[10px] font-black leading-none md:text-xs">4月</span>
          <span className="text-sm font-black leading-none md:text-base">限定</span>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <Sparkles className="h-3 w-3 animate-pulse text-[#B33000]" />
            <p className="text-xs font-black tracking-widest text-[#B33000] md:text-sm">キャンペーン実施中</p>
          </div>
          <p className="text-lg font-black tracking-tight drop-shadow-sm md:text-2xl">1か月無料トライアル</p>
        </div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <div className="trial-shine absolute -left-[120%] top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[130%]" />
        </div>
      </a>
    </div>
  )
}
