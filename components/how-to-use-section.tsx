"use client"

import { Button } from "@/components/ui/button"
import { Play, Pause, Mic, Phone } from "lucide-react"
import { useState, useRef } from "react"

export function HowToUseSection() {
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

  const handleAudioEnded = () => {
    setIsPlaying(false)
  }

  const handleAudioError = () => {
    console.log("[v0] Audio file not available - using fallback message")
    setIsPlaying(false)
    setAudioError(true)
  }

  const handlePhoneDemo = () => {
    if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
      // モバイル端末の場合は電話をかける
      window.location.href = "tel:00000000000"
    } else {
      // PC端末の場合はアラートを表示
      alert("電話可能な端末でお試しください。")
    }
  }

  const steps = [
    {
      step: "STEP1",
      title: "無料トライアル",
      description: "無料トライアルから新規登録するだけで、無料でお試しいただけます。",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37s7_-SNAJB3K28iZvQ7vCVWS7R-5QbbqLw&s",
    },
    {
      step: "STEP2",
      title: "音声登録",
      description: "専用ページで、あなたの声を録音します。録音した声を元にAIが学習を行い、あなたの声を再現します。",
      image: "/ai-voice-recording-setup.png",
    },
    {
      step: "STEP3",
      title: "利用開始",
      description: "デフォルト設定完了後、あとは電話をかけるだけでご利用いただけます。",
      image: "/phone-number-setup-call-forwarding.png",
    },
  ]

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">かんたん3ステップでご利用開始できます！</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="mb-4">
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="space-y-4">
                  <div className="inline-block bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {step.step}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* 音声デモセクション */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">実際の会話音声をお聞きください</h3>
                <p className="text-gray-600 mb-6 text-center">
                  ヘルパーフォンがどのように認知症の方と会話するか、
                  <br />
                  デモ音声でご確認いただけます。
                </p>

                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-orange-50 p-6 rounded-lg w-full">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                        <Mic className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-gray-800">認知症患者：「今日は何曜日ですか？」</p>
                        <p className="font-semibold text-orange-600">AI（家族の声）：「今日は金曜日です。」</p>
                      </div>
                    </div>
                  </div>

                  <audio
                    ref={audioRef}
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%86%E3%82%B9%E3%83%88%E9%9F%B3%E5%A3%B0-7soZrzL7mylLTAI7i7v7KuKh9jo9Wq.mp3"
                    onEnded={handleAudioEnded}
                    onError={handleAudioError}
                    preload="metadata"
                  />

                  <Button
                    onClick={handlePlayDemo}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold flex items-center space-x-2"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    <span>{isPlaying ? "停止" : "デモ音声を再生"}</span>
                  </Button>

                  {audioError && (
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-gray-600 text-center">
                        音声の読み込みに失敗しました。しばらくしてから再度お試しください。
                      </p>
                    </div>
                  )}

                  <p className="text-sm text-gray-500 text-center">
                    ※ こちらはデモ音声です。実際のサービスでは、ご家族の声を学習したAIが応答いたします。
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  ヘルパーフォンと会話体験
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  初期設定済みのヘルパーフォンに電話をかけて、
                  <br />
                  実際の会話を体験していただけます。
                </p>

                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-orange-50 p-6 rounded-lg w-full">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-gray-800 text-lg">000-0000-0000</p>
                        <p className="text-gray-600 text-sm">デモ専用番号</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handlePhoneDemo}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold flex items-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>公開デモ体験</span>
                  </Button>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg w-full">
                    <p className="text-sm text-yellow-800">
                      <strong>※ ご注意事項</strong>
                      <br />• お客様側で通話料金が発生いたします
                      <br />• 事前にデモ用の初期設定を行っております
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
