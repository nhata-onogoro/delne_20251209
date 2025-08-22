"use client"

import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigation = (sectionId: string) => {
    if (pathname === "/") {
      // On home page, scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // On other pages, navigate to home page with hash
      router.push(`/#${sectionId}`)
    }
    setIsMenuOpen(false)
  }

  const goToHome = () => {
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2 flex-nowrap cursor-pointer" onClick={goToHome}>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Phone className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground whitespace-nowrap">ヘルパーフォン</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => handleNavigation("story")}
            className="text-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            ストーリー
          </button>
          <button
            onClick={() => handleNavigation("features")}
            className="text-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            機能紹介
          </button>
          <button
            onClick={() => handleNavigation("testimonials")}
            className="text-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            お客様の声
          </button>
          <button
            onClick={() => handleNavigation("pricing")}
            className="text-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            料金プラン
          </button>
          <button
            onClick={() => handleNavigation("faq")}
            className="text-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            よくあるご質問
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 whitespace-nowrap">
            <a href="/contact">お問い合わせ</a>
          </Button>
          <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
            <a
              href="https://st-amatelus-django-admin-service.btv98tps97t6e.ap-northeast-1.cs.amazonlightsail.com/auth/register/"
              target="_blank"
              rel="noopener noreferrer"
            >
              無料トライアル
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => handleNavigation("story")}
              className="block text-foreground hover:text-primary transition-colors w-full text-left"
            >
              ストーリー
            </button>
            <button
              onClick={() => handleNavigation("features")}
              className="block text-foreground hover:text-primary transition-colors w-full text-left"
            >
              機能紹介
            </button>
            <button
              onClick={() => handleNavigation("testimonials")}
              className="block text-foreground hover:text-primary transition-colors w-full text-left"
            >
              お客様の声
            </button>
            <button
              onClick={() => handleNavigation("pricing")}
              className="block text-foreground hover:text-primary transition-colors w-full text-left"
            >
              料金プラン
            </button>
            <button
              onClick={() => handleNavigation("faq")}
              className="block text-foreground hover:text-primary transition-colors w-full text-left"
            >
              よくあるご質問
            </button>
            <a
              href="/contact"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </a>
            <div className="pt-4 space-y-2">
              <Button className="w-full bg-primary hover:bg-primary/90">
                <a href="/contact">お問い合わせ</a>
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <a
                  href="https://st-amatelus-django-admin-service.btv98tps97t6e.ap-northeast-1.cs.amazonlightsail.com/auth/register/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  無料トライアル
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
