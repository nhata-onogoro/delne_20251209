import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "ライトプラン",
      subtitle: "週に数回の電話対応に最適",
      price: "7,000",
      priceWithTax: "7,700",
      duration: "月額",
      maxTime: "120分",
      features: {
        conversation: true,
        summary: true,
        voiceDemo: true,
        aiVoice: true,
      },
      popular: false,
    },
    {
      name: "スタンダードプラン",
      subtitle: "週に何度も電話がある方へ",
      price: "10,000",
      priceWithTax: "11,000",
      duration: "月額",
      maxTime: "285分",
      features: {
        conversation: true,
        summary: true,
        voiceDemo: true,
        aiVoice: true,
      },
      popular: true,
    },
    {
      name: "プレミアムプラン",
      subtitle: "毎日何度も電話がある方へ",
      price: "15,000",
      priceWithTax: "16,500",
      duration: "月額",
      maxTime: "560分",
      features: {
        conversation: true,
        summary: true,
        voiceDemo: true,
        aiVoice: true,
      },
      popular: false,
    },
  ]

  const featureLabels: Record<string, string> = {
    conversation: "会話自動応答機能",
    summary: "要約メッセージ送信(SMS/メール)",
    voiceDemo: "音声会話確認デモ機能",
    aiVoice: "AI学習音声",
  }

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 relative">
            <div className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">シンプルな料金プラン</div>
            <div className="w-32 h-2 bg-yellow-400 mx-auto rounded-full" />
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-white border-2 relative ${
                plan.popular ? "border-[#002c5b] scale-105" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#002c5b] text-white">
                  おすすめ
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-800">{plan.name}</CardTitle>
                <div className="text-sm text-gray-600 mb-4 font-bold">{plan.subtitle}</div>
                <div className="mb-4">
                  <div className="text-5xl font-bold text-[#002c5b]">¥{plan.price}</div>
                  <div className="text-gray-600 font-bold mt-1">
                    {plan.duration} （税込：¥{plan.priceWithTax}）
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-bold text-gray-800 mb-2">通話可能時間(月)</div>
                  <div className="text-lg font-bold text-[#002c5b]">{plan.maxTime}</div>
                </div>

                <div className="space-y-3">
                  {Object.entries(featureLabels).map(([key, label]) => {
                    const hasFeature = plan.features[key as keyof typeof plan.features]
                    return (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 font-bold">{label}</span>
                        {hasFeature ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300" />
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-base text-gray-600 text-right">
            ※通話可能時間を超過した際は、上位プランへのご変更もしくは追加通話時間のチャージが必要となります。
          </p>
        </div>
      </div>
    </section>
  )
}
