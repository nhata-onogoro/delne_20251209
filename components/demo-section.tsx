"use client"

import { Button } from "@/components/ui/button"
import { Play, Pause, Mic, Phone } from "lucide-react"
import { useState, useRef } from "react"

export default function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handlePlayDemo = async () => {
    if (audioRef.current && !audioError) {
      try {
        if (isPlaying) {
          audioRef.current.pause()
          setIsPlaying(false)
        } else {
          audioRef.current.currentTime = 0
          await audioRef.current.play()
          setIsPlaying(true)
        }
      } catch (error) {
        console.error("Audio playback error:", error)
        setIsPlaying(false)
        setAudioError(true)
      }
    }
  }

  const handleAudioEnded = () => setIsPlaying(false)
  const handleAudioError = () => {
    console.log("[v0] Audio file not available - using fallback message")
    setIsPlaying(false)
    setAudioError(true)
  }

  const handlePhoneDemo = () => {
    if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
      window.location.href = "tel:05035157449"
    } else {
      alert("PCでご覧の方は、電話機能のある端末からデモ専用番号（050-3515-7449）へおかけください。")
    }
  }

  return (
    <section className="py-20 bg-white overflow-x-clip">
      <div className="container mx-auto px-4 md:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">
              登録なしで
              <br className="block md:hidden" />
              体験してみる！
            </h2>
            <div className="w-32 h-2 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 音声デモセクション */}
            <div className="bg-[#e6f0f7] p-8 md:p-10 rounded-xl shadow-md">
              <h3 className="text-3xl lg:text-4xl font-black text-gray-800 mb-6 text-center">
                実際の会話を
                <br />
                お聞きください
              </h3>
              <div className="flex flex-col items-center space-y-6">
                <div className="bg-white p-3 md:p-8 rounded-lg w-full max-w-full mx-auto shadow-sm">
                  <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-[#002c5b] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mic className="w-5 h-5 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="text-center md:text-left min-w-0 flex-1">
                      <p className="text-sm md:text-lg font-bold text-gray-800 leading-snug break-words whitespace-normal">
                        認知症患者と
                        <br className="block md:hidden" />
                        DELNEが
                        <br className="block md:hidden" />
                        会話している音声です
                      </p>
                    </div>
                  </div>
                </div>

                <audio
                  ref={audioRef}
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%AC%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%20%2811%29_Audio%20Trimmer_Audio%20Trimmer-OJUDfuayAIBG6jzFFXQLoiRJyCjpnA.mp3"
                  onEnded={handleAudioEnded}
                  onError={handleAudioError}
                  preload="metadata"
                />

                <Button
                  onClick={handlePlayDemo}
                  className="w-full sm:w-auto bg-[#F39C12] hover:bg-[#D35400] text-white px-10 py-4 text-xl font-bold flex items-center justify-center space-x-3 cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  <span>{isPlaying ? "停止" : "デモ音声を再生"}</span>
                </Button>

                {audioError && (
                  <div className="bg-gray-100 p-6 rounded-lg w-full">
                    <p className="text-lg font-bold text-gray-700 text-center break-words">
                      音声の読み込みに失敗しました。しばらくしてから再度お試しください。
                    </p>
                  </div>
                )}

                <p className="text-base font-bold text-gray-600 text-center break-words">
                  ※ こちらはデモ音声です。実際のサービスでは、ご家族の声を学習したAIが応答いたします。
                </p>
              </div>
            </div>

            {/* 電話デモセクション */}
            <div className="bg-[#e6f0f7] p-8 md:p-10 rounded-xl shadow-md">
              <h3 className="text-3xl lg:text-4xl font-black text-gray-800 mb-6 text-center">
                DELNEと
                <br />
                会話体験
              </h3>
              <div className="flex flex-col items-center space-y-6">
                <div className="bg-white p-3 md:p-8 rounded-lg w-full max-w-full mx-auto shadow-sm">
                  <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-[#002c5b] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="text-center min-w-0 flex-1">
                      <a
                        href="tel:05035157449"
                        className="block text-lg md:text-2xl font-black text-gray-800 break-words whitespace-normal"
                        aria-label="電話をかける 050-3515-7449"
                      >
                        050-3515-7477
                      </a>
                      <p className="text-xs md:text-lg font-bold text-gray-600 break-words">デモ専用番号</p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handlePhoneDemo}
                  className="w-full sm:w-auto bg-[#F39C12] hover:bg-[#D35400] text-white px-10 py-6 text-lg font-bold flex items-center justify-center space-x-3 min-h-[80px] cursor-pointer"
                >
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <span className="text-center leading-tight">
                    公開デモ体験
                    <br />
                    ※ワンタップで発信
                  </span>
                </Button>

                <div className="bg-white border border-gray-300 p-6 rounded-lg w-full shadow-sm">
                  <p className="text-base font-bold text-gray-800 break-words">
                    <strong className="text-lg">※ ご注意事項</strong>
                    <br />• お客様側で通話料金が発生いたします
                    <br />• デモ用に音声やしゃべり方は設定しております
                    <br />• デモ電話には
                    <a href="/privacy-policy" className="text-blue-600 hover:text-[#F39C12] underline cursor-pointer">
                      個人情報
                    </a>
                    の取扱いが適用されます
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
