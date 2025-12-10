"use client"

import { Button } from "@/components/ui/button"
import { Play, Pause, Phone, Mic } from "lucide-react"
import { useState, useRef } from "react"

export default function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // デモ用電話番号設定
  const DEMO_PHONE_NUMBER = "050-3515-7477"
  const DEMO_PHONE_LINK = "05035157477"

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
    setIsPlaying(false)
    setAudioError(true)
  }

  const handlePhoneDemo = () => {
    if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
      window.location.href = `tel:${DEMO_PHONE_LINK}`
    } else {
      alert(`PCでご覧の方は、電話機能のある端末からデモ専用番号（${DEMO_PHONE_NUMBER}）へおかけください。`)
    }
  }

  return (
    <section id="demo" className="py-20 md:py-24 bg-white overflow-x-clip">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* ヘッダー部分 */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-6 text-balance">
            AIがの声を体験してみる
          </h2>
          <div className="w-24 h-1.5 bg-[#F39C12] mx-auto rounded-full mt-6"></div>
        </div>

        {/* グリッド: 左右のカラム */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* 左カラム：音声再現デモ */}
          <div className="bg-[#e6f0f7] p-6 sm:p-8 md:p-12 rounded-[2rem] shadow-lg border border-blue-50 flex flex-col h-full items-center text-center w-full">
            <div className="w-24 h-24 bg-[#002c5b] rounded-full flex items-center justify-center mb-8 shadow-md shrink-0">
              <Mic className="w-12 h-12 text-white" />
            </div>

            <h3 className="text-3xl lg:text-4xl font-black text-gray-800 leading-tight mb-6">
              AIによる「声の再現」を
              <br />
              お聞きください
            </h3>

            {/* 白い説明ボックス: 高さを md:h-[220px] に短縮 */}
            <div className="w-full bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 text-left md:h-[220px] flex flex-col justify-center">
              <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
                <span className="font-bold text-[#002c5b] text-xl md:text-2xl block mb-4">● 再現音声のサンプル</span>
                介護されるご家族様の録音データを元に、AIが生成した音声です。
                機械的ではない、温かみのある話し方をご確認ください。
              </p>
            </div>

            {/* ボタンエリア: mt-8 で隙間を詰める（mt-autoを削除） */}
            <div className="w-full mt-8 space-y-6">
              <audio
                ref={audioRef}
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sample_voice%20%28mp3cut.net%29-3fMF2mF0HsaPgBVAOM4tJJSoR2krL8.mp3"
                onEnded={handleAudioEnded}
                onError={handleAudioError}
                preload="metadata"
              />

              <Button
                onClick={handlePlayDemo}
                className={`
                  w-full bg-[#F39C12] hover:bg-[#D35400] text-white 
                  h-20 text-2xl font-bold rounded-full shadow-lg transition-all duration-200
                  hover:translate-y-[-2px] hover:shadow-xl
                  flex items-center justify-center gap-4 cursor-pointer
                `}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-8 h-8 fill-current shrink-0" />
                    <span>停止する</span>
                  </>
                ) : (
                  <>
                    <Play className="w-8 h-8 fill-current shrink-0" />
                    <span>サンプル音声を再生</span>
                  </>
                )}
              </Button>

              {audioError && (
                <p className="text-red-600 font-bold text-base bg-red-50 p-3 rounded">音声の読み込みに失敗しました。</p>
              )}

              <p className="text-base font-bold text-gray-500 leading-relaxed">
                ※実際のサービスでは、お客様ご自身の声をAIが学習します。
              </p>
            </div>
          </div>

          {/* 右カラム：電話体験デモ */}
          <div className="bg-[#e6f0f7] p-6 sm:p-8 md:p-12 rounded-[2rem] shadow-lg border border-blue-50 flex flex-col h-full items-center text-center w-full">
            <div className="w-24 h-24 bg-[#002c5b] rounded-full flex items-center justify-center mb-8 shadow-md shrink-0">
              <Phone className="w-12 h-12 text-white" />
            </div>

            <h3 className="text-3xl lg:text-4xl font-black text-gray-800 leading-tight mb-6">
              電話をかけて
              <br />
              会話体験
            </h3>

            {/* 白い説明ボックス（電話番号）: 高さを md:h-[220px] に短縮して左と合わせる */}
            <div className="w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100 md:h-[220px] flex flex-col justify-center items-center">
              <p className="text-lg md:text-xl font-bold text-gray-500 mb-3">デモ専用ダイヤル（24時間対応）</p>

              <a
                href={`tel:${DEMO_PHONE_LINK}`}
                className="
                  block w-full text-center mx-auto
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                  font-black text-[#072C5A] tracking-wider
                  whitespace-nowrap
                  hover:opacity-80 transition-opacity leading-none
                "
              >
                {DEMO_PHONE_NUMBER}
              </a>
            </div>

            {/* ボタンエリア: mt-8 で隙間を詰める */}
            <div className="w-full mt-8 space-y-6">
              <Button
                onClick={handlePhoneDemo}
                className={`
                  w-full bg-[#F39C12] hover:bg-[#D35400] text-white 
                  h-20 text-2xl font-bold rounded-full shadow-lg transition-all duration-200
                  hover:translate-y-[-2px] hover:shadow-xl
                  flex items-center justify-center gap-4 cursor-pointer
                `}
              >
                <Phone className="w-8 h-8 shrink-0" />
                <span>今すぐ電話をかける</span>
              </Button>

              <p className="text-lg font-bold text-[#F39C12]">※スマホならタップで発信できます</p>

              <div className="bg-white/60 border border-gray-200 p-6 rounded-2xl w-full text-left">
                <p className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-200 pb-2">ご注意事項</p>
                <ul className="text-sm md:text-base font-medium text-gray-700 list-disc pl-5 leading-relaxed space-y-2">
                  <li>通話料はお客様のご負担となります。</li>
                  <li>デモ用に、広島弁での応答を設定しています。</li>
                  <li>
                    デモ電話には
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-[#F39C12] underline font-bold mx-1 cursor-pointer"
                    >
                      個人情報の取扱い
                    </a>
                    が適用されます。
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
