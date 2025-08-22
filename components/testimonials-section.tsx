import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "N.Tさん",
      age: "35歳・会社員",
      content:
        "父から1日10回以上も電話がかかってきて、仕事中も会議中も対応せざるを得ませんでした。正直、集中できず成果も落ちていたんです。ヘルパーフォンを導入してからは、仕事に集中できるようになり、成果も目に見えて改善しました。父も『いつでも話せる』と安心しているようで、本当に助かっています。",
      quote: "仕事への集中力が戻ってきました",
    },
    {
      name: "M.Sさん",
      age: "52歳・営業職",
      content:
        "父の認知症が進み、電話の回数が増えるたびに心も体も限界に近づいていました。『もう仕事を辞めるしかないかもしれない』とまで考えていました。今は、本当に必要な要件だけメールで確認できるので、無理なく対応できています。おかげで営業の数字も回復し、上司の理解も得られるようになりました。",
      quote: "介護理由の退職を回避できました",
    },
    {
      name: "Y.Hさん",
      age: "38歳・自営業",
      content:
        "夜勤明けに何度も電話が鳴って、寝不足でイライラしていました。母に優しくできない自分が嫌で、本当に苦しかったんです。ヘルパーフォンを使い始めてからは、しっかり休めるようになり、会えるときには自然に優しく接することができています。テクノロジーの力ってすごいなと実感しています。",
      quote: "家族関係に温かさが戻りました",
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">ご利用者様の声</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">"{testimonial.quote}"</h4>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.age}</div>
                </div>

                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
