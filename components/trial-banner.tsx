"use client"

import { trackButtonClick } from "@/lib/analytics"
import { trackFreeTrialClick } from "@/lib/gtag"

export default function TrialBanner() {
  const handleFreeTrialClick = () => {
    trackButtonClick("floating_free_trial", "floating_cta")
    trackFreeTrialClick("banner_free_trial_click")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://app.delne.jp/auth/welcome/"
        onClick={handleFreeTrialClick}
        aria-label="4月限定1か月無料キャンペーンのトライアルへ移動"
        className="
          relative flex min-h-16 items-center gap-3 rounded-2xl px-5 py-3
          bg-gradient-to-r from-[#F39C12] via-[#F1C40F] to-[#E67E22] text-white
          shadow-xl transition-all duration-300 ease-out
          hover:-translate-y-1 hover:shadow-2xl
          md:min-h-20 md:px-6
        "
      >
        <span className="rounded-full bg-white/20 px-2 py-1 text-[10px] font-bold tracking-wider md:text-xs">
          4月限定
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold md:text-sm">キャンペーン実施中</p>
          <p className="text-sm font-extrabold tracking-wide md:text-base">1か月無料トライアル</p>
        </div>
      </a>
    </div>
  )
}
