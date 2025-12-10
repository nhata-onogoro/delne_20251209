"use client"

import { Clock, Heart, Mail, Phone, Shield, Play, Pause } from "lucide-react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { trackButtonClick } from "@/lib/analytics"

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
      trackButtonClick(isPlaying ? "solution_video_pause" : "solution_video_play", "features")
      setIsPlaying(!isPlaying)
    }
  }

  // モバイル時にアイコンを少し小さく
  const solutions = [
    {
      icon: <Phone className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-[#F39C12]" />,
      title: "簡単操作",
      description: "電話番号そのままで\n電話するだけで利用可能",
    },
    {
      icon: <Heart className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-[#F39C12]" />,
      title: "「あなた」の声で応答",
      description: "介護家族様の声で\n自然な会話を実現",
    },
    {
      icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-[#F39C12]" />,
      title: "24時間365日対応",
      description: "どんな時でも\n自動応答",
    },
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-[#F39C12]" />,
      title: "感情ケア",
      description: "医療機関監修の\n専門知見でやさしく応答",
    },
    {
      icon: <Mail className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-[#F39C12]" />,
      title: "会話内容を通知",
      description: "着信だけでなく\n会話内容も確認可能",
    },
  ]

  return (
    // セクション全体の左右パディングを大きめに設定 (例: px-8)
    <section id="features" className="py-16 px-6 bg-gray-50 sm:px-4"> {/* 👈 修正: モバイル時のセクションパディングをpx-6 (約24px) に増強 */}
      <div className="container mx-auto max-w-7xl">
        {/* --- ヘッダー --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">
            DELNEの機能紹介
          </h2>
          <div className="w-24 h-1.5 bg-[#F39C12] mx-auto rounded-full mt-6"></div>
        </div>

        {/* --- 動画セクション --- */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="w-full lg:w-1/2 flex flex-col justify-center lg:justify-start text-center lg:text-left order-1 lg:order-2">
              <div className="inline-block px-3 py-1 bg-blue-100 text-[#072C5A] rounded-full font-bold text-sm mb-4 mx-auto lg:mx-0 w-fit">
                10秒でわかるDELNE
              </div>
              <p className="text-gray-800 text-2xl lg:text-3xl font-bold leading-relaxed mb-6">
                介護と仕事の両立を支える<br />
                <span className="text-[#F39C12]">サービスの仕組み</span>を<br />
                動画でご紹介します
              </p>
              <p className="text-gray-600 mb-8 font-medium">
                「どうやって使うの？」<br className="hidden lg:block" />
                サービスの利用イメージを10秒の動画でサクッと確認できます。
              </p>

              <div className="flex justify-center lg:justify-start order-3 lg:order-none">
                <Button
                  onClick={handlePlayPause}
                  size="lg"
                  className={`
                    font-bold px-8 py-6 text-lg shadow-lg cursor-pointer rounded-full transition-all duration-300
                    ${
                      isPlaying
                        ? "bg-[#002c5b] hover:bg-[#001428] text-white"
                        : "bg-[#F39C12] hover:bg-[#D35400] text-white hover:-translate-y-1"
                    }
                  `}
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
                  className="relative bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border-4 border-white"
                  style={{ aspectRatio: "9/16" }}
                  onClick={handlePlayPause}
                >
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    playsInline
                    poster="/video-thumbnail.png"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DELNE%20%E7%B4%B9%E4%BB%8B%E5%8B%95%E7%94%BB-sDf2Z5NGJ2jVDtaqN0STlDlDxrDXND.mp4"
                      type="video/mp4"
                    />
                    お使いのブラウザは動画タグをサポートしていません。
                  </video>

                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
                      <div className="bg-white/90 rounded-full p-5 shadow-xl animate-pulse">
                        <Play className="w-10 h-10 text-[#F39C12] ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 機能カードグリッド --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 justify-center justify-items-center">
          {solutions.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <div
                className="
                  w-full sm:w-full sm:max-w-none mx-auto aspect-square
                  bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300
                  border-t-4 border-[#FDC702]
                  px-3 py-4 {/* 👈 修正: 内側のパディングを元のサイズに戻すか、適度なサイズ px-3 py-4 に設定 */}
                  flex flex-col items-center justify-center text-center group
                "
              >
                <div className="mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                  {item.icon}
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-black text-gray-800 mb-1 whitespace-pre-line leading-tight">
                  {item.title}
                </h3>

                <p className="text-[11px] sm:text-xs font-bold leading-relaxed text-gray-600 whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
