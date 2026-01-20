"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Image from "next/image"
import Script from "next/script"   // ← 追加
import { trackButtonClick } from "@/lib/analytics"
import { trackCtaClick, trackFreeTrialClick } from "@/lib/gtag"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (sectionId: string) => {
    trackButtonClick(`nav_${sectionId}`, "header_nav")
    if (pathname === "/") {
      // On home page, scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        const isMobile = window.innerWidth < 768
        const headerHeight = isMobile ? 350 : 40
        const elementPosition = element.offsetTop - headerHeight
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
      }
    } else {
      // On other pages, navigate to home page with hash
      router.push(`/#${sectionId}`)
    }
    setIsMenuOpen(false)
  }

  const goToHome = () => {
    trackButtonClick("nav_home_logo", "header_nav")
    router.push("/")
  }

  const handleFreeTrialClick = () => {
    trackButtonClick("header_free_trial", "header_cta")
    trackCtaClick("free_trial", { ctaType: "header" })
    trackFreeTrialClick("header")
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#002c5b]/20 bg-[#002c5b]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div
            className="flex items-center space-x-3 flex-nowrap cursor-pointer hover:opacity-80 transition-opacity"
            onClick={goToHome}
          >
            <div className="w-12 h-12 flex items-center justify-end flex-shrink-0 bg-white rounded-full pr--0.2">
              <Image
                src="/delne-logo.png"
                alt="DELNE Logo"
                width={50}
                height={50}
                className="object-contain opacity-100 px-[-] px-[0] h-[45px] w-[45px]"
                priority
              />
            </div>

            <span className="text-2xl font-bold text-white whitespace-nowrap">DELNE</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => handleNavigation("story")}
              className="text-white hover:text-[#F39C12] transition-colors whitespace-nowrap font-bold cursor-pointer"
            >
              ストーリー
            </button>
            <button
              onClick={() => handleNavigation("features")}
              className="text-white hover:text-[#F39C12] transition-colors whitespace-nowrap font-bold cursor-pointer"
            >
              機能紹介
            </button>
            <button
              onClick={() => handleNavigation("demo")}
              className="text-white hover:text-[#F39C12] transition-colors whitespace-nowrap font-bold cursor-pointer"
            >
              デモ体験
            </button>
            <button
              onClick={() => handleNavigation("testimonials")}
              className="text-white hover:text-[#F39C12] transition-colors whitespace-nowrap font-bold cursor-pointer"
            >
              お客様の声
            </button>
            <button
              onClick={() => handleNavigation("pricing")}
              className="text-white hover:text-[#F39C12] transition-colors whitespace-nowrap font-bold cursor-pointer"
            >
              料金プラン
            </button>
            <button
              onClick={() => handleNavigation("faq")}
              className="text-white hover:text-[#F39C12] transition-colors whitespace-nowrap font-bold cursor-pointer"
            >
              よくあるご質問
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://app.delne.jp/auth/disclaimer/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleFreeTrialClick}
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-[#F39C12] text-white hover:bg-[#D35400] transition-colors whitespace-nowrap font-bold cursor-pointer"
              )}
            >
              無料トライアル
            </a>
            <Button
              className="hidden md:inline-flex bg-[#F39C12] text-white hover:bg-[#D35400] transition-colors whitespace-nowrap font-bold cursor-pointer"
              onClick={() => trackButtonClick("header_login", "header_cta")}
            >
              <a
                href="https://app.delne.jp/auth/login/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ログイン
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-[#F39C12] hover:bg-white/10 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-[#002c5b]">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => handleNavigation("story")}
                className="block text-white hover:text-[#F39C12] transition-colors w-full text-left font-bold cursor-pointer"
              >
                ストーリー
              </button>
              <button
              onClick={() => handleNavigation("features")}
              className="block text-white hover:text-[#F39C12] transition-colors w-full text-left font-bold cursor-pointer"
            >
              機能紹介
            </button>
            <button
              onClick={() => handleNavigation("demo")}
              className="block text-white hover:text-[#F39C12] transition-colors w-full text-left font-bold cursor-pointer"
            >
              デモ体験
            </button>
            <button
              onClick={() => handleNavigation("testimonials")}
              className="block text-white hover:text-[#F39C12] transition-colors w-full text-left font-bold cursor-pointer"
            >
              お客様の声
              </button>
              <button
                onClick={() => handleNavigation("pricing")}
                className="block text-white hover:text-[#F39C12] transition-colors w-full text-left font-bold cursor-pointer"
              >
                料金プラン
              </button>
              <button
                onClick={() => handleNavigation("faq")}
                className="block text-white hover:text-[#F39C12] transition-colors w-full text-left font-bold cursor-pointer"
              >
                よくあるご質問
              </button>
              <div className="pt-4 space-y-2">
                <Button
                  className="w-full bg-[#F39C12] text-white hover:bg-[#D35400] transition-colors cursor-pointer"
                  onClick={() => trackButtonClick("header_login_mobile", "header_cta")}
                >
                  <a
                    href="https://app.delne.jp/auth/login/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ログイン
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
