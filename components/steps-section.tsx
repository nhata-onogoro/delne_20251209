"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function StepsSection() {
  const steps = [
    {
      step: "STEP1",
      title: "アカウント登録",
      description: "無料トライアルボタンから\n簡単5分で登録可能。",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37s7_-SNAJB3K28iZvQ7vCVWS7R-5QbbqLw&s",
    },
    {
      step: "STEP2",
      title: "音声登録",
      description: "録音した声をAIが学習し\nあなたの声を再現します。",
      image: "/step2-voice-recording-updated.jpg",
    },
    {
      step: "STEP3",
      title: "利用開始",
      description: "電話の転送設定を行えば、\nご家族へ電話するだけで利用可能。",
      image: "/phone-number-setup-call-forwarding.png",
    },
  ]

  return (
    <section className="py-20 bg-[#e6f0f7]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-6">
              かんたん3ステップで
              <br className="block md:hidden" />
              ご利用開始！
            </h2>
            <div className="w-32 h-2 bg-yellow-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white px-8 pt-6 pb-8 md:px-10 md:pt-6 md:pb-10 rounded-2xl shadow-md text-center flex flex-col"
              >
                {/* STEP ラベル */}
                <div className="inline-flex flex-col items-center gap-2 select-none mb-5 md:mb-6">
                  <span className="text-2xl md:text-3xl font-extrabold tracking-wider text-gray-800">{step.step}</span>
                  <span className="block h-1.5 w-20 md:w-24 rounded-full bg-gray-400" aria-hidden="true" />
                </div>

                {/* 画像 */}
                <div className="mb-5 md:mb-6">
                  <div className="rounded-lg overflow-hidden ring-1 ring-gray-800">
                    <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-48 object-cover" />
                  </div>
                </div>

                {/* タイトル＋説明 */}
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-black text-gray-800">{step.title}</h3>
                  <p className="text-base md:text-lg font-bold text-gray-700 leading-relaxed">
                    {step.description.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < step.description.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              className="bg-[#F39C12] hover:bg-[#D35400] text-xl px-10 py-4 text-white shadow-lg font-bold cursor-pointer"
            >
              <a
                href="https://st-amatelus-django-admin-service.btv98tps97t6e.ap-northeast-1.cs.amazonlightsail.com/auth/register/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                無料トライアル実施中
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
