"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const fallbackTimerRef = useRef<number | null>(null)

  // 現在のブレークポイントに応じた画像URLを返す
  const pickSrc = () => {
    if (typeof window === "undefined") return "/care-service-background-mobile.jpg"
    const mq = window.matchMedia("(min-width: 768px)")
    return mq.matches ? "/care-service-background-desktop.jpg" : "/care-service-background-mobile.jpg"
  }

  // 画像をJSで確実にプリロードして、読み込みが終わったら表示フラグON
  const preload = (src: string) => {
    try {
      const img = new Image()
      img.src = src

      const markLoaded = () => setIsImageLoaded(true)

      if (img.complete) {
        // キャッシュ済みでも確実に描画可能になるまでdecodeを試みる
        // @ts-ignore
        img.decode?.().then(markLoaded).catch(markLoaded)
      } else {
        img.onload = markLoaded
        img.onerror = markLoaded // 失敗しても表示は進める（背景はグラデでフォロー）
      }
    } catch {
      setIsImageLoaded(true)
    }
  }

  useEffect(() => {
    // 初回：現在のサイズに合う画像をプリロード
    const src = pickSrc()
    preload(src)

    // 画面幅がmd境界をまたぐ時も再プリロード（向き変更など）
    const mq = window.matchMedia("(min-width: 768px)")
    const onChange = () => {
      setIsImageLoaded(false)
      preload(pickSrc())
    }
    mq.addEventListener?.("change", onChange)

    // フェールセーフ：万一 onload が来なくても一定時間で表示に切り替える
    fallbackTimerRef.current = window.setTimeout(() => setIsImageLoaded(true), 1500)

    return () => {
      mq.removeEventListener?.("change", onChange)
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current)
        fallbackTimerRef.current = null
      }
    }
  }, [])

  return (
    <section
      className="
        relative isolate overflow-hidden
        h-[460px] sm:h-[520px] md:h-[560px] lg:h-[640px] xl:h-[720px] 2xl:h-[820px]
        bg-gray-900
      "
      aria-busy={!isImageLoaded}
    >
      {/* 背景画像：大画面では少し下側を見せる */}
      <div className="absolute inset-0 z-0">
        <picture className="block w-full h-full">
          <source media="(min-width: 768px)" srcSet="/care-service-background-desktop.jpg" />
          <img
            src="/care-service-background-mobile.jpg"
            alt="介護と仕事の両立を支援するAI電話サービス"
            className="
              w-full h-full
              object-cover
              object-top
              lg:object-[center_30%]
              filter contrast-110 brightness-105 saturate-110
            "
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-radial" />
      </div>

      {/* コンテンツ（画像読み込み完了後にフェードイン） */}
      <div className="container mx-auto max-w-6xl px-4 py-8 sm:py-10 lg:py-12 relative z-10 h-full">
        <div
          className={[
            "relative h-full md:flex md:flex-col md:items-center md:justify-center md:text-center md:space-y-8",
            "transition-opacity duration-500",
            isImageLoaded ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          {/* ▼ モバイル専用タイトル */}
          <div className="md:hidden absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-full px-2 text-center">
            <h1 className="text-xl sm:text-xl md:text-2xl font-black text-white leading-tight w-full bg-black/20 backdrop-blur-sm px-3 py-4 rounded-lg border border-white/5">
              <span className="block whitespace-nowrap">
                認知症ご家族からの電話を24時間365日
              </span>
              <span className="block whitespace-nowrap">
                AIがあなたの声で丁寧に応答します
              </span>
            </h1>
          </div>

          {/* ▼ デスクトップ/タブレット用タイトル */}
          <div className="hidden md:block">
            <h1
              className="
                font-black text-white leading-tight
                mx-auto
                bg-black/20 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/5
                text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl
              "
            >
              <span className="block whitespace-nowrap">
                認知症ご家族からの電話を24時間365日
              </span>
              <span className="block whitespace-nowrap">
                AIがあなたの声で丁寧に応答します
              </span>
            </h1>
          </div>

          {/* サブタイトル：md以上のみ表示 */}
          <div className="hidden md:block" aria-hidden="true">
            <p
              className="
                font-bold text-white leading-relaxed
                mx-auto mt-4
                bg-black/15 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/5
                text-lg lg:text-2xl xl:text-3xl
              "
            >
              <span className="text-yellow-300 font-black drop-shadow-lg">
                　介護と仕事の両立を支援するAI電話サービス
              </span>
            </p>
          </div>

          {/* CTAボタン：スマホは下部中央固定、md以上は中央揃え */}
          <div
            className="
              absolute left-1/2 -translate-x-1/2 bottom-6
              md:static md:inset-auto md:translate-x-0 md:bottom-auto md:self-center
            "
          >
            <Button
              asChild
              size="lg"
              className="
                bg-[#F39C12] hover:bg-[#D35400]
                text-lg md:text-xl xl:text-2xl
                px-8 md:px-10 xl:px-12
                py-3 md:py-4 xl:py-5
                text-white shadow-lg font-bold transition-colors cursor-pointer
              "
            >
              <a
                href="https://st-amatelus-django-admin-service.btv98tps97t6e.ap-northeast-1.cs.amazonlightsail.com/auth/register/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                無料トライアル実施中
                <ArrowRight className="ml-2 w-5 h-5 xl:w-6 xl:h-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* ローディング時のプレースホルダー（黒一色の印象を軽減） */}
      {!isImageLoaded && (
        <div className="absolute inset-0 z-[5] pointer-events-none bg-gradient-to-b from-gray-800/40 via-gray-900/60 to-gray-900/80" />
      )}
    </section>
  )
}
