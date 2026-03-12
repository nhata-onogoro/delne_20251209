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
        aria-label="7日間無料トライアルへ移動"
        className="
          flex h-14 items-center justify-center rounded-full px-6
          bg-[#F39C12] text-white
          shadow-lg transition-all duration-300 ease-out
          hover:-translate-y-1 hover:bg-[#D35400] hover:shadow-2xl
          md:h-16 md:px-8
        "
      >
        <span className="text-sm md:text-base font-bold tracking-wide">7日間無料トライアル</span>
      </a>
    </div>
  )
}
