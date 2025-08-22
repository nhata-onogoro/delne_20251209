import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "無料プラン",
      subtitle: "評価デモ版",
      price: "0",
      duration: "1ヶ月間限定で全機能をお試し",
      description: "製品の効果を実感していただくための、1ヶ月限定の特別プランです。",
      maxTime: "30分",
      features: {
        conversation: true,
        summary: true,
        voiceDemo: true,
        aiVoice: true,
        overageRate: "",
      },
      popular: false
    },
    {
      name: "ライトプラン",
      subtitle: "週に数回の電話対応に最適",
      price: "3,900",
      duration: "月額",
      description: "1日1～2回程度の電話に対応。多くの方にお選びいただいているおすすめの人気プランです。",
      maxTime: "120分",
      features: {
        conversation: true,
        summary: true,
        voiceDemo: true,
        aiVoice: true,
        overageRate: "20円/分",
      },
      popular: true,
    },
    {
      name: "標準プラン",
      subtitle: "毎日何度も電話がある方へ",
      price: "7,500",
      duration: "月額",
      description: "頻繁な電話や長話にも対応。時間を気にせず、すべての電話をAIにお任せ。安心の充実プラン。",
      maxTime: "360分",
      features: {
        conversation: true,
        summary: true,
        voiceDemo: true,
        aiVoice: true,
        overageRate: "20円/分",
      },
      popular: false,
    },
  ]

  const featureLabels = {
    conversation: "会話自動応答機能",
    summary: "要約メッセージ送信(SMS/メール)",
    voiceDemo: "音声会話確認デモ機能",
    aiVoice: "AI学習音声",
  }

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">シンプルでわかりやすい料金プラン</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-white border-2 relative ${plan.popular ? "border-primary scale-105" : "border-gray-200"}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                  おすすめ
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-800">{plan.name}</CardTitle>
                <div className="text-sm text-gray-600 mb-4">{plan.subtitle}</div>
                <div className="mb-4">
                  <div className="text-4xl font-bold text-primary">¥{plan.price}</div>
                  <div className="text-gray-600">{plan.duration}</div>
                </div>
                <div className="text-sm text-gray-600">{plan.description}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-gray-800 mb-2">最大無料通話時間(月)</div>
                  <div className="text-lg font-bold text-primary">{plan.maxTime}</div>
                </div>

                <div className="space-y-3">
                  {Object.entries(featureLabels).map(([key, label]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{label}</span>
                      {plan.features[key] ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300" />
                      )}
                    </div>
                  ))}
                  {plan.features.overageRate &&
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">無料通話時間超過時の通話料</span>
                      <span className="text-sm font-semibold text-gray-800">{plan.features.overageRate}</span>
                    </div>
                  }
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
