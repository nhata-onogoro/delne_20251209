"use client"

import { Clock, Heart, Mail, Phone, Shield } from "lucide-react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

export default function SolutionSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoClick = () => {
    handlePlayPause()
  }

  const solutions = [
    {
      icon: <Phone className="w-16 h-16 text-[#F39C12]" />,
      title: "簡単操作",
      description: "電話番号そのままで\n電話するだけで利用可能",
    },
    {
      icon: <Heart className="w-16 h-16 text-[#F39C12]" />,
      title: "声を学習・再現",
      description: "介護家族様の声で\n自然な会話を実現",
    },
    {
      icon: <Clock className="w-16 h-16 text-[#F39C12]" />,
      title: "24時間365日対応",
      description: "どんな時でも\n自動応答",
    },
    {
      icon: <Shield className="w-16 h-16 text-[#F39C12]" />,
      title: "感情ケア",
      description: "医療機関監修の\n専門知見でやさしく応答",
    },
    {
      icon: <Mail className="w-16 h-16 text-[#F39C12]" />,
      title: "会話内容を通知",
      description: "着信だけでなく\n会話内容も確認可能",
    },
  ]

  return (
    <section id="features" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">DELNEの機能紹介</h2>
          <div className="w-32 h-2 bg-yellow-400 mx-auto rounded-full" />
        </div>

        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:justify-start text-center lg:text-left order-1 lg:order-2">
              <p className="text-gray-800 text-xl font-bold leading-relaxed mb-6">
                AI電話サービス「DELNE（デルネ）」の特徴や使い方を動画でわかりやすくご紹介します
              </p>
              <div className="flex justify-center lg:justify-start order-3 lg:order-none">
                <Button
                  onClick={handlePlayPause}
                  size="lg"
                  className={`font-bold px-8 py-6 text-lg shadow-lg cursor-pointer ${
                    isPlaying
                      ? "bg-[#002c5b] hover:bg-[#001428] text-white"
                      : "bg-[#F39C12] hover:bg-[#D35400] text-white"
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-6 h-6 mr-2" />
                      一時停止
                    </>
                  ) : (
                    <>
                      <Play className="w-6 h-6 mr-2" />
                      動画を再生
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="w-full max-w-[320px]">
                <div
                  className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                  style={{ aspectRatio: "9/16" }}
                  onClick={handleVideoClick}
                >
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster="/video-thumbnail.png"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DELNE%20%E7%B4%B9%E4%BB%8B%E5%8B%95%E7%94%BB-sDf2Z5NGJ2jVDtaqN0STlDlDxrDXND.mp4" type="video/mp4" />
                    お使いのブラウザは動画タグをサポートしていません。
                  </video>

                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
                      <div className="bg-white/90 rounded-full p-4 shadow-xl">
                        <Play className="w-12 h-12 text-[#F39C12]" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {solutions.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full max-w-xs mx-auto bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-[#FDC702] p-6">
                <div className="text-center">
                  <div className="flex justify-center mb-3">{item.icon}</div>
                  <h3 className="text-xl font-black text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-base font-semibold leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
