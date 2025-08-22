import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Heart, Mail, Phone } from "lucide-react"

export function SolutionSection() {
  const features = [
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "24時間365日、いつでも自動応答",
      description:
        "深夜でも、早朝でも、仕事中でも。AIがあなたに代わって全自動で対応します。もう着信音に怯えることはありません。安心して眠り、集中して働ける毎日へ。",
      image: "https://prcdn.freetls.fastly.net/release_image/128445/8/128445-8-82a64abeed9f0a3bcea70fb116464d9b-1408x768.png?width=1950&height=1350&quality=85%2C65&format=jpeg&auto=webp&fit=bounds&bg-color=fff",
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "あなたの声を学習・再現",
      description:
        "AIがあなたの声質や話し方を学習し、自然に再現。ご家族は「いつものあなた」と会話している安心感を得られます。罪悪感なく、優しさを届け続けられる新しいカタチです。",
      image: "https://gijiroku.ai/wp-content/uploads/2023/06/image1-14.jpg",
    },
    {
      icon: <Mail className="w-12 h-12 text-primary" />,
      title: "会話の内容をメールやSMSで通知",
      description:
        "日々のやり取りは要約でチェック。重要な内容だけを即時通知します。離れていてもご家族の様子を把握でき、本当に必要な時だけ駆けつけられます。",
      image: "/conversation-summary-notifications.png",
    },
    {
      icon: <Phone className="w-12 h-12 text-primary" />,
      title: "電話をかけるだけの簡単操作",
      description:
        "ご家族は、これまで通り電話をかけるだけ。新しい機器や複雑な操作は不要です。誰でもすぐに始められるAIサポートです。",
      image: "/elderly-friendly-phone.png",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-primary">ヘルパーフォン</span>が、最新のAI技術であなたの悩みを解決します！
          </h2>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center gap-4">
                  {feature.icon}
                  <h3 className="text-2xl font-bold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
              <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
