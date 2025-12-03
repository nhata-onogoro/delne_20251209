"use client"

import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "N.Tさん",
      age: "45歳・会社員",
      content:
        "父から1日10回以上も電話がかかってきて、仕事中も会議中も対応せざるを得ませんでした。正直、集中できず成果も落ちていたんです。DELNEを導入してからは、仕事に集中できるようになり、成果も目に見えて改善しました。父も『いつでも話せる』と安心しているようで、本当に助かっています。",
      quote: "仕事への集中力が\n戻ってきました",
      avatar: "/japanese-businessman-professional-headshot-smiling.jpg",
    },
    {
      name: "M.Sさん",
      age: "38歳・営業職",
      content:
        "父の認知症が進み、電話の回数が増えるたびに心も体も限界に近づいていました。『もう仕事を辞めるしかないかもしれない』とまで考えていました。今は、本当に必要な要件だけメールで確認できるので、無理なく対応できています。おかげで営業の数字も回復し、上司の理解も得られるようになりました。",
      quote: "介護理由の退職を\n回避できました",
      avatar: "/japanese-businesswoman-professional-smiling-headsh.jpg",
    },
    {
      name: "Y.Hさん",
      age: "52歳・自営業",
      content:
        "夜勤明けに何度も電話が鳴って、寝不足でイライラしていました。母に優しくできない自分が嫌で、本当に苦しかったんです。DELNEを使い始めてからは、しっかり休めるようになり、会えるときには自然に優しく接することができています。テクノロジーの力ってすごいなと実感しています。",
      quote: "家族関係に\n温かさが戻りました",
      avatar: "/japanese-man-casual-business-attire-smiling-friend.jpg",
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-6">お客様の声</h2>
          <div className="w-32 h-2 bg-yellow-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-10 py-0">
                {/* アバター + 氏名/年齢 */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-[#002c5b] shrink-0">
                    <img src={t.avatar || "/placeholder.svg"} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-black text-gray-800 leading-tight">{t.name}</div>
                    <div className="text-sm md:text-base font-bold text-gray-600 mt-1">{t.age}</div>
                  </div>
                </div>

                {/* quote：改行を反映（whitespace-pre-line） */}
                <div className="mb-6 rounded-xl border-l-4 border-[#002c5b] bg-[#e6f0f7] px-5 py-4 text-left">
                  <p className="whitespace-pre-line text-lg md:text-xl font-extrabold text-gray-900 leading-snug tracking-tight">
                    {t.quote}
                  </p>
                </div>

                {/* 本文（太さは font-bold に戻した状態） */}
                <p className="text-base md:text-lg font-bold text-gray-700 leading-relaxed">{t.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
