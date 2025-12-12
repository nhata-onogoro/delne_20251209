import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "DELNEはどんなサービスですか？",
      answer:
        "DELNEは、介護と仕事の両立を支えるAI電話サービスです。認知症のご家族からのお電話は、AIが24時間365日丁寧に応対し、仕事中や早朝・深夜の着信を代わりに対応します。通話内容は要点を自動で要約し、SMS/メールでお届けします。",
    },
    {
      question: "現在の電話番号は変わりますか？",
      answer:
        "現在ご利用中の電話番号は変わりませんのでご安心ください。サービス利用時に専用電話番号を発行いたします。サービスをご利用の際は、その専用番号へおかけ頂くことでAIと会話が可能となります。",
    },
    {
      question: "最短でいつからサービスを利用できますか？",
      answer:
        "無料トライアル中は初期設定完了後すぐに利用可能で、無料期間・通話上限到達後も料金プランページで契約いただくと手続き完了後ただちに利用できます。",
    },
    {
      question: "支払い方法は？",
      answer:
        "お支払いは、クレジットカードとLink（Stripe）のみ対応しています。その他の方法（銀行振込・口座振替・請求書払い等）は現在ご利用いただけません。",
    },
  ]

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">よくあるご質問</h2>
            <div className="w-32 h-2 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-4 py-1.5 md:px-6 md:py-2 cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <AccordionTrigger
                  value={`item-${index}`}
                  className="text-base md:text-2xl text-left font-bold text-gray-800 hover:text-[#F39C12] cursor-pointer"
                >
                  Q: {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  value={`item-${index}`}
                  className="text-sm md:text-xl text-gray-600 leading-relaxed font-bold"
                >
                  A: {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 md:mt-12 text-center p-6 md:p-8 bg-[#e6f0f7] rounded-xl">
            <p className="text-sm md:text-lg text-gray-800 mb-3 md:mb-4 font-bold">
<<<<<<< HEAD
              ご不明な点やご質問などありましたら、気軽にお問合せください！
=======
              ご不明な点やご質問などありましたら、お気軽にお問い合わせください！
>>>>>>> lp/main
            </p>
            <Button className="bg-[#F39C12] hover:bg-[#D35400] text-white font-bold cursor-pointer">
              <a href="/contact">お問い合わせ</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
