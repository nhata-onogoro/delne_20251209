"use client"

import { Button } from "@/components/ui/button"
import { trackButtonClick } from "@/lib/analytics"

export default function TrialBanner() {
  const handleFreeTrialClick = () => {
    trackButtonClick("floating_free_trial", "floating_cta")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        className="
          h-14 md:h-16 px-6 md:px-8 rounded-full
          bg-[#F39C12] hover:bg-[#D35400] text-white
          shadow-lg hover:shadow-2xl hover:-translate-y-1
          transition-all duration-300 ease-out
          flex items-center justify-center cursor-pointer
        "
      >
        <a
          href="https://app.delne.jp/auth/welcome/"
          onClick={handleFreeTrialClick}
          aria-label="7日間無料トライアルへ移動"
        >
          <span className="text-sm md:text-base font-bold tracking-wide">7日間無料トライアル</span>
        </a>
      </Button>
    </div>
  )
}
