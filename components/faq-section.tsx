import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "プライバシーは守られますか？",
      answer:
        "NTT社の通信基盤を使用し、個人情報は暗号化して厳重に管理。音声データや会話内容の第三者への提供は一切ありません。",
    },
    {
      question: "電話代はかかりますか？",
      answer: "はい。各プランの料金とは別に、各キャリア毎の通常の電話代が発生し���す。",
    },
    {
      question: "サービスを使うには特別な電話番号が必要ですか？",
      answer:
        "契約完了後、専用の電話番号をお渡しします。お使いの電話から転送設定をするだけで、ご家族からの電話をAIが受け取れるようになります。",
    },
    {
      question: "認知症の程度による利用制限はありますか？",
      answer: "制限はありませんが、本サービスは軽度から中程度の認知症の方に最適のサービスです。",
    },
    {
      question: "本当に自然な会話ができますか？",
      answer:
        "最新のAI技術により、ご家族が違和感を感じない自然な会話を実現しています。実証実験でも高い評価をいただいています。",
    },
  ]

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">よくあるご質問</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-orange-600">
                  Q: {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">A: {faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 bg-orange-50 rounded-xl">
            <p className="text-lg text-gray-800 mb-4">ご不明な点やご質問などありましたら、気軽にお問合せください！</p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              <a href="/contact">
                お問い合わせ
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
