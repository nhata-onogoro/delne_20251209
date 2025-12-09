"use client"

import { ArrowRight } from "lucide-react"

export function StepsSection() {
  const steps = [
    {
      step: "STEP1",
      title: "アカウント登録",
      description: "無料トライアルボタンから\n簡単5分で登録可能。",
      image: "/22080803_l.jpg",
    },
    {
      step: "STEP2",
      title: "音声登録",
      description: "録音した声をAIが学習し\nあなたの声を再現します。",
      image: "/step2.png",
    },
    {
      step: "STEP3",
      title: "利用開始",
      description: "DELNEが発行する\n「専用番号」にかけるだけで\nすぐにご利用いただけます。",
      image: "/step3-phone-call.jpg",
    },
  ]

  return (
    <section className="py-20 md:py-24 bg-[#e6f0f7]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* ヘッダー */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-6">
              かんたん3ステップで
              <br className="block md:hidden" />
              ご利用開始！
            </h2>
            <div className="w-24 h-1.5 bg-[#F39C12] mx-auto rounded-full mt-6"></div>
          </div>

          {/* ステップカード */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white px-6 pt-8 pb-10 md:px-8 md:pt-8 md:pb-12 rounded-[2rem] shadow-md text-center flex flex-col items-center h-full hover:shadow-lg transition-shadow duration-300"
              >
                {/* STEP ラベル */}
                <div className="flex flex-col items-center gap-2 select-none mb-6">
                  {/* 文字色を少し濃いネイビーにして引き締めました */}
                  <span className="text-3xl font-black tracking-wider text-[#072C5A] font-sans">{step.step}</span>
                  {/* アンダーバーをブランドカラーのオレンジに変更 */}
                  <span className="block h-1.5 w-20 rounded-full bg-[#F39C12]" aria-hidden="true" />
                </div>

                {/* 画像エリア */}
                <div className="mb-6 w-full">
                  <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm aspect-[4/3] w-full relative">
                    {/* 画像の装飾として、実際の画像がない場合のプレースホルダー色を設定 */}
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* タイトル＋説明 */}
                <div className="space-y-4 w-full">
                  <h3 className="text-2xl lg:text-3xl font-black text-gray-800">{step.title}</h3>
                  <p className="text-base md:text-lg font-bold text-gray-600 leading-relaxed">
                    {step.description.split("\n").map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAボタン */}
          <div className="text-center mt-16 md:mt-20">
            <a
              href="https://app.delne.jp/auth/disclaimer/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                bg-[#F39C12] hover:bg-[#D35400] 
                text-xl md:text-2xl px-12 py-8 
                text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 
                font-bold rounded-full transition-all duration-300
              "
            >
              無料トライアル実施中
              <ArrowRight className="w-6 h-6 stroke-[3]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
