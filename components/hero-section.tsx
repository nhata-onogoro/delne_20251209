"use client"

import { useState, useEffect, useRef } from "react"
import { trackButtonClick } from "@/lib/analytics"
import { trackTopAudioSamplePlay } from "@/lib/gtag"
// Button コンポーネントがインポートされていないため、ここでは削除します
// import { Button } from "@/components/ui/button"
import { Pause, Phone, Play } from "lucide-react"

export function HeroSection() {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const fallbackTimerRef = useRef<number | null>(null)
  const conversationAudioRef = useRef<HTMLAudioElement | null>(null)
  const [isConversationPlaying, setIsConversationPlaying] = useState(false)

  const pickSrc = () => {
    if (typeof window === "undefined") return "/care-service-background-mobile.jpg"
    const mq = window.matchMedia("(min-width: 768px)")
    return mq.matches ? "/care-service-background-desktop.jpg" : "/care-service-background-mobile.jpg"
  }

  const preload = (src: string) => {
    try {
      const img = new Image()
      img.src = src
      const markLoaded = () => setIsImageLoaded(true)
      if (img.complete) {
        // @ts-ignore
        img.decode?.().then(markLoaded).catch(markLoaded)
      } else {
        img.onload = markLoaded
        img.onerror = markLoaded
      }
    } catch {
      setIsImageLoaded(true)
    }
  }

  useEffect(() => {
    const src = pickSrc()
    preload(src)
    const mq = window.matchMedia("(min-width: 768px)")
    const onChange = () => {
      setIsImageLoaded(false)
      preload(pickSrc())
    }
    mq.addEventListener?.("change", onChange)
    fallbackTimerRef.current = window.setTimeout(() => setIsImageLoaded(true), 1500)

    const audioEl = conversationAudioRef.current
    const onEnded = () => setIsConversationPlaying(false)
    const onPause = () => setIsConversationPlaying(false)
    const onPlay = () => setIsConversationPlaying(true)
    audioEl?.addEventListener("ended", onEnded)
    audioEl?.addEventListener("pause", onPause)
    audioEl?.addEventListener("play", onPlay)

    return () => {
      mq.removeEventListener?.("change", onChange)
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current)
      audioEl?.removeEventListener("ended", onEnded)
      audioEl?.removeEventListener("pause", onPause)
      audioEl?.removeEventListener("play", onPlay)
      audioEl?.pause()
    }
  }, [])

  return (
    <section
      id="hero"
      className="
        relative isolate overflow-hidden
        h-[600px] sm:h-[640px] md:h-[640px] lg:h-[640px] 2xl:h-[800px]
        bg-slate-50 -mt-px
      "
    >
      
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <picture className="block w-full h-full">
          <source media="(min-width: 768px)" srcSet="/care-service-background-desktop.jpg" />
          <img
            src="/care-service-background-mobile.jpg"
            alt="背景"
            className={`
              w-full h-full object-cover
              object-center md:object-[50%_-10%] lg:object-[50%_+15%] /* 画像の上側を約10%詰めて表示 */
              transition-opacity duration-700
              ${isImageLoaded ? "opacity-100" : "opacity-0"}
            `}
          />
        </picture>
        <div className="absolute inset-0 bg-white/10 md:hidden" />
        <div className="hidden md:block absolute inset-0 bg-white/10" />
      </div>

      {/* コンテンツエリア */}
      <div
        className="
          absolute inset-0 z-10
          flex flex-col items-center justify-center
          w-full max-w-6xl px-4 py-8 mx-auto
        "
      >
        
        <div
          className="
            relative
            backdrop-blur-[2px] md:backdrop-blur-md 
            bg-white/70 md:bg-white/50 
            rounded-[1.5rem] md:rounded-[2rem] 
            shadow-lg ring-1 ring-white/40
            p-6 sm:p-8 md:p-10 lg:p-10
            max-w-[90%] sm:max-w-md md:max-w-5xl mx-auto
            flex flex-col items-center text-center gap-3 md:gap-8
          "
        >
          
          {/* ▼ PC版修正箇所：md:text-base -> md:text-xl に拡大 */}
          <div className="flex items-center justify-center">
            <span
              className="
                inline-flex items-center gap-1.5 md:gap-2.5
                bg-white/90 px-3 py-1 md:px-6 md:py-2.5 rounded-full
                border border-orange-200/80 shadow-sm
                text-orange-600 font-bold tracking-wider 
                text-[10px] sm:text-xs md:text-xl
              "
            >
              <Phone className="w-3 h-3 md:w-5 md:h-5 fill-current" />
              <span>介護と仕事の両立を支援するAI電話サービス</span>
            </span>
          </div>
          
          {/* ▼ メインタイトルエリア */}
          <div className="flex flex-col gap-1 md:gap-4 w-full">
            <h1 className="font-sans font-black text-[#072C5A] tracking-tight leading-tight w-full drop-shadow-sm">
              
              {/* 1行目 */}
              <span
                className="
                  block w-full
                  text-sm sm:text-lg md:text-4xl lg:text-4xl
                  mb-1 md:mb-3
                  font-bold
                "
              >
                認知症のご家族からの電話に
              </span>
              
              {/* 2行目 */}
              <span
                className="
                  block w-full
                  text-[1.15rem] sm:text-2xl md:text-5xl lg:text-5xl
                  tracking-tighter md:tracking-tight
                  bg-gradient-to-br from-[#072C5A] to-[#1e40af] bg-clip-text text-transparent
                  font-black
                "
              >
                AIが24時間365日丁寧に応答
              </span>
              
            </h1>
            
            {/* ▼ 3行目メッセージ */}
            <p
              className="
                hidden md:block
                text-slate-600 font-bold
                text-lg sm:text-xl md:text-2xl lg:text-2xl
                mt-2
              "
            >
              あなたの声を再現して、優しく寄り添います
            </p> 
            
          </div>
          
          {/* CTAボタン */}
          <div className="w-full flex flex-col items-center justify-center gap-3 mt-1 md:mt-4">
            <button
              type="button"
              onClick={() => {
                trackButtonClick("hero_free_trial", "hero")

                if (!conversationAudioRef.current) return

                if (isConversationPlaying) {
                  conversationAudioRef.current.pause()
                  return
                }

                trackTopAudioSamplePlay()
                void conversationAudioRef.current.play()
              }}
              className="
                inline-flex items-center justify-center gap-1.5
                bg-[#F39C12] hover:bg-[#E67E22]
                text-white text-sm md:text-xl font-bold
                px-6 py-4 md:px-14 md:py-8
                h-auto
                rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5
                transition-all duration-300
                border-2 border-white/20
                w-full sm:w-auto
              "
            >
              実際の会話を聞く
              {isConversationPlaying ? (
                <Pause className="w-4 h-4 md:w-6 md:h-6 fill-current" />
              ) : (
                <Play className="w-4 h-4 md:w-6 md:h-6 fill-current" />
              )}
            </button>
            <audio ref={conversationAudioRef} preload="metadata" src="/conversation.m4a" />
            <div className="text-xs md:text-sm text-slate-700 font-medium space-y-1 text-left md:text-center">
              <p>※認知症のご家族と、「娘さんの声を再現したAI(デルネ)」の会話音声です。</p>
              <p>※事前に予定（デイサービス等）を登録すると、AIが状況に合わせて回答します。</p>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  )
}
